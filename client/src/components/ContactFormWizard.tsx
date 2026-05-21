import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight, ArrowLeft, CheckCircle, Loader2, AlertCircle,
  Building2, User, Mail, Phone, Briefcase, MessageSquare, Shield, RotateCcw
} from "lucide-react";

const DRAFT_KEY = "crf_contact_draft_v1";

function saveDraft(data: WizardData, step: number) {
  try {
    sessionStorage.setItem(DRAFT_KEY, JSON.stringify({ data, step }));
  } catch { /* ignore */ }
}

function loadDraft(): { data: WizardData; step: number } | null {
  try {
    const raw = sessionStorage.getItem(DRAFT_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch { return null; }
}

function clearDraft() {
  try { sessionStorage.removeItem(DRAFT_KEY); } catch { /* ignore */ }
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

type BuyerType = "federal" | "state-local" | "enterprise" | "partner" | "";

interface WizardData {
  buyerType: BuyerType;
  name: string;
  title: string;
  company: string;
  email: string;
  phone: string;
  agencyType: string;
  contractVehicle: string;
  projectType: string;
  budget: string;
  timeline: string;
  message: string;
}

const initialData: WizardData = {
  buyerType: "",
  name: "",
  title: "",
  company: "",
  email: "",
  phone: "",
  agencyType: "",
  contractVehicle: "",
  projectType: "",
  budget: "",
  timeline: "",
  message: "",
};

const buyerTypes = [
  {
    id: "federal" as BuyerType,
    icon: Shield,
    label: "Federal Agency",
    sublabel: "DOD, Civilian, IC",
    color: "#00c8f0",
  },
  {
    id: "state-local" as BuyerType,
    icon: Building2,
    label: "State / Local Gov",
    sublabel: "SLED procurement",
    color: "#0090c8",
  },
  {
    id: "enterprise" as BuyerType,
    icon: Briefcase,
    label: "Enterprise",
    sublabel: "Private sector",
    color: "#d4af37",
  },
  {
    id: "partner" as BuyerType,
    icon: User,
    label: "Teaming Partner",
    sublabel: "Prime / sub",
    color: "#00c8f0",
  },
];

const federalAgencyTypes = [
  "Department of Defense (DoD)",
  "Civilian Federal Agency",
  "Intelligence Community",
  "Department of Homeland Security",
  "Department of Health & Human Services",
  "Department of Veterans Affairs",
  "Other Federal",
];

const contractVehicles = [
  "Open Market / Direct Award",
  "GSA Schedule",
  "IDIQ / GWAC",
  "BPA / BOA",
  "SEWP V",
  "CIO-SP4",
  "Other / Not Sure",
];

const projectTypes = [
  "Enterprise Software Development",
  "Cloud Migration / Infrastructure",
  "Digital Transformation",
  "Legacy System Modernization",
  "Cybersecurity / ATO Support",
  "Data Engineering / Analytics",
  "Strategic Consulting",
  "Staff Augmentation",
  "Other",
];

const budgetRanges = [
  "Under $250K",
  "$250K – $1M",
  "$1M – $5M",
  "$5M – $20M",
  "$20M+",
  "Not yet defined",
];

const timelines = [
  "Immediate (< 30 days)",
  "1–3 months",
  "3–6 months",
  "6–12 months",
  "Planning phase",
];

const TOTAL_STEPS = 4;

function ProgressBar({ step }: { step: number }) {
  const stepLabels = ["What", "Contact", "Details", "Message", "Confirm"];
  return (
    <div className="mb-10">
      {/* Main progress bar */}
      <div className="flex items-center gap-2 mb-5">
        {Array.from({ length: TOTAL_STEPS }).map((_, i) => (
          <div key={i} className="flex-1 relative">
            <div
              className="h-1.5 rounded-full transition-all duration-500"
              style={{
                background: i < step
                  ? "var(--accent)"
                  : i === step - 1
                  ? "var(--accent)"
                  : "rgba(255,255,255,0.08)",
              }}
            />
          </div>
        ))}
        <span className="text-xs font-semibold ml-2 tabular-nums shrink-0" style={{ color: "var(--muted-foreground)", fontFamily: "'Sora', sans-serif" }}>
          {step}/{TOTAL_STEPS}
        </span>
      </div>
      
      {/* Step label */}
      <div className="flex items-baseline gap-2">
        <span className="text-xs uppercase tracking-widest font-semibold" style={{ color: "var(--accent)", fontFamily: "'Sora', sans-serif" }}>
          Step {step}
        </span>
        <span className="text-xs" style={{ color: "var(--muted-foreground)" }}>
          {stepLabels[step - 1]}
        </span>
      </div>
    </div>
  );
}

const slideVariants = {
  enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 24 : -24 }),
  center: { opacity: 1, x: 0 },
  exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -24 : 24 }),
};

export default function ContactFormWizard() {
  // Restore draft from sessionStorage on mount
  const draft = loadDraft();
  const [step, setStep] = useState(draft?.step ?? 1);
  const [dir, setDir] = useState(1);
  const [data, setData] = useState<WizardData>(draft?.data ?? initialData);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [retryCount, setRetryCount] = useState(0);
  const [emailTouched, setEmailTouched] = useState(false);

  // Autosave to sessionStorage whenever data or step changes
  useEffect(() => {
    if (!submitted) saveDraft(data, step);
  }, [data, step, submitted]);

  const update = useCallback((fields: Partial<WizardData>) =>
    setData(prev => ({ ...prev, ...fields })), []);

  const next = () => { setDir(1); setStep(s => Math.min(s + 1, TOTAL_STEPS)); };
  const prev = () => { setDir(-1); setStep(s => Math.max(s - 1, 1)); };

  const canAdvance = () => {
    if (step === 1) return !!data.buyerType;
    if (step === 2) return !!(data.name && data.company && data.email && isValidEmail(data.email));
    if (step === 3) return !!(data.projectType);
    return true;
  };

  const handleSubmit = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          company: data.company,
          email: data.email,
          phone: data.phone,
          projectType: `[${data.buyerType?.toUpperCase()}] ${data.projectType}`,
          message: `Title: ${data.title || "N/A"}\nAgency Type: ${data.agencyType || "N/A"}\nContract Vehicle: ${data.contractVehicle || "N/A"}\nBudget: ${data.budget || "N/A"}\nTimeline: ${data.timeline || "N/A"}\n\n${data.message}`,
        }),
      });
      const json = await response.json();
      if (!response.ok) throw new Error(json.error || "Failed to send");
      clearDraft();
      setSubmitted(true);
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Something went wrong.";
      setError(retryCount < 2
        ? `${msg} — you can retry below.`
        : `${msg} Please email us directly at admin@crfenterprise.com`
      );
      setRetryCount(c => c + 1);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center text-center py-14 gap-5"
        role="alert"
        aria-live="polite"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.1 }}
          className="w-16 h-16 rounded-full flex items-center justify-center"
          style={{ background: "rgba(0,200,240,0.1)", border: "1px solid rgba(0,200,240,0.25)" }}
        >
          <CheckCircle size={30} style={{ color: "var(--accent)" }} />
        </motion.div>
        <div>
          <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "'Sora', sans-serif" }}>Submission Received</h3>
          <p className="text-sm max-w-xs mx-auto" style={{ color: "var(--muted-foreground)" }}>
            Our team will review your inquiry and respond within one business day. Check your email for a confirmation.
          </p>
        </div>
        <div className="glass-card px-5 py-3 text-xs text-left space-y-1" style={{ minWidth: 220 }}>
          <div className="font-semibold mb-1" style={{ color: "var(--accent)", fontFamily: "'Sora', sans-serif" }}>What happens next</div>
          {["Intake review by our team", "Technical briefing scheduled", "Capability statement delivered", "Proposal / quote provided"].map(s => (
            <div key={s} className="flex items-center gap-2" style={{ color: "rgba(240,240,245,0.65)" }}>
              <CheckCircle size={11} style={{ color: "var(--accent)" }} aria-hidden="true" />
              {s}
            </div>
          ))}
        </div>
        <button
          onClick={() => { clearDraft(); setSubmitted(false); setStep(1); setData(initialData); setRetryCount(0); setError(null); }}
          className="btn-secondary text-sm"
        >
          Submit Another Inquiry
        </button>
      </motion.div>
    );
  }

  return (
    <div>
      <ProgressBar step={step} />

      <AnimatePresence mode="wait" custom={dir}>
        <motion.div
          key={step}
          custom={dir}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
        >

          {/* Step 1: Buyer Type */}
          {step === 1 && (
            <fieldset>
              <legend className="text-lg font-bold mb-1 block" style={{ fontFamily: "'Sora', sans-serif" }}>
                Who are you?
              </legend>
              <p className="text-sm mb-6" style={{ color: "var(--muted-foreground)" }}>
                This helps us route your inquiry to the right team.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {buyerTypes.map(({ id, icon: Icon, label, sublabel, color }) => (
                  <button
                    key={id}
                    type="button"
                    onClick={() => update({ buyerType: id })}
                    className="glass-card p-4 flex flex-col items-start gap-2 text-left transition-all"
                    style={{
                      borderColor: data.buyerType === id ? color : undefined,
                      background: data.buyerType === id ? `rgba(${id === "enterprise" ? "212,175,55" : "0,200,240"},0.08)` : undefined,
                      minHeight: 90,
                    }}
                    aria-pressed={data.buyerType === id}
                  >
                    <Icon size={18} style={{ color }} aria-hidden="true" />
                    <div>
                      <div className="text-sm font-semibold" style={{ fontFamily: "'Sora', sans-serif", color: "var(--foreground)" }}>{label}</div>
                      <div className="text-xs" style={{ color: "var(--muted-foreground)" }}>{sublabel}</div>
                    </div>
                  </button>
                ))}
              </div>
            </fieldset>
          )}

          {/* Step 2: Contact Info */}
          {step === 2 && (
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-bold mb-1" style={{ fontFamily: "'Sora', sans-serif" }}>Your Information</h3>
                <p className="text-sm mb-5" style={{ color: "var(--muted-foreground)" }}>Contact details so our team can reach you.</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wider" htmlFor="wiz-name" style={{ color: "rgba(240,240,245,0.7)", fontFamily: "'Sora', sans-serif" }}>
                    Full Name <span aria-hidden="true" style={{ color: "var(--accent)" }}>*</span>
                  </label>
                  <div className="relative">
                    <User size={14} className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" style={{ color: "var(--muted-foreground)" }} aria-hidden="true" />
                    <input id="wiz-name" type="text" value={data.name} onChange={e => update({ name: e.target.value })} placeholder="Jane Smith" className="field-input pl-9" autoComplete="name" required aria-required="true" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wider" htmlFor="wiz-title" style={{ color: "rgba(240,240,245,0.7)", fontFamily: "'Sora', sans-serif" }}>
                    Title / Role
                  </label>
                  <input id="wiz-title" type="text" value={data.title} onChange={e => update({ title: e.target.value })} placeholder="Contracting Officer" className="field-input" autoComplete="organization-title" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wider" htmlFor="wiz-company" style={{ color: "rgba(240,240,245,0.7)", fontFamily: "'Sora', sans-serif" }}>
                  Agency / Company <span aria-hidden="true" style={{ color: "var(--accent)" }}>*</span>
                </label>
                <div className="relative">
                  <Building2 size={14} className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" style={{ color: "var(--muted-foreground)" }} aria-hidden="true" />
                  <input id="wiz-company" type="text" value={data.company} onChange={e => update({ company: e.target.value })} placeholder="Department of Defense" className="field-input pl-9" autoComplete="organization" required aria-required="true" />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wider" htmlFor="wiz-email" style={{ color: "rgba(240,240,245,0.7)", fontFamily: "'Sora', sans-serif" }}>
                    Email <span aria-hidden="true" style={{ color: "var(--accent)" }}>*</span>
                  </label>
                  <div className="relative">
                    <Mail size={14} className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" style={{ color: emailTouched && !isValidEmail(data.email) ? "#ff6b6b" : "var(--muted-foreground)" }} aria-hidden="true" />
                    <input
                      id="wiz-email"
                      type="email"
                      value={data.email}
                      onChange={e => update({ email: e.target.value })}
                      onBlur={() => setEmailTouched(true)}
                      placeholder="you@agency.gov"
                      className="field-input pl-9"
                      autoComplete="email"
                      required
                      aria-required="true"
                      aria-describedby={emailTouched && data.email && !isValidEmail(data.email) ? "wiz-email-error" : undefined}
                      style={{ borderColor: emailTouched && data.email && !isValidEmail(data.email) ? "rgba(255,59,59,0.5)" : undefined }}
                    />
                  </div>
                  {emailTouched && data.email && !isValidEmail(data.email) && (
                    <p id="wiz-email-error" role="alert" className="mt-1 text-xs" style={{ color: "#ff6b6b" }}>
                      Please enter a valid email address.
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wider" htmlFor="wiz-phone" style={{ color: "rgba(240,240,245,0.7)", fontFamily: "'Sora', sans-serif" }}>
                    Phone
                  </label>
                  <div className="relative">
                    <Phone size={14} className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" style={{ color: "var(--muted-foreground)" }} aria-hidden="true" />
                    <input id="wiz-phone" type="tel" value={data.phone} onChange={e => update({ phone: e.target.value })} placeholder="+1 (202) 555-0100" className="field-input pl-9" autoComplete="tel" />
                  </div>
                </div>
              </div>
              {data.buyerType === "federal" && (
                <div>
                  <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wider" htmlFor="wiz-agency" style={{ color: "rgba(240,240,245,0.7)", fontFamily: "'Sora', sans-serif" }}>
                    Agency Type
                  </label>
                  <select id="wiz-agency" value={data.agencyType} onChange={e => update({ agencyType: e.target.value })} className="field-input" style={{ appearance: "none" }}>
                    <option value="">Select agency type</option>
                    {federalAgencyTypes.map(t => <option key={t} value={t} style={{ background: "#0d0d12" }}>{t}</option>)}
                  </select>
                </div>
              )}
            </div>
          )}

          {/* Step 3: Project Details */}
          {step === 3 && (
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-bold mb-1" style={{ fontFamily: "'Sora', sans-serif" }}>Project Details</h3>
                <p className="text-sm mb-5" style={{ color: "var(--muted-foreground)" }}>Help us understand the scope and procurement context.</p>
              </div>
              <div>
                <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wider" htmlFor="wiz-project" style={{ color: "rgba(240,240,245,0.7)", fontFamily: "'Sora', sans-serif" }}>
                  Project Type <span aria-hidden="true" style={{ color: "var(--accent)" }}>*</span>
                </label>
                <select id="wiz-project" value={data.projectType} onChange={e => update({ projectType: e.target.value })} className="field-input" style={{ appearance: "none" }} required>
                  <option value="">Select project type</option>
                  {projectTypes.map(t => <option key={t} value={t} style={{ background: "#0d0d12" }}>{t}</option>)}
                </select>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wider" htmlFor="wiz-budget" style={{ color: "rgba(240,240,245,0.7)", fontFamily: "'Sora', sans-serif" }}>
                    Estimated Budget
                  </label>
                  <select id="wiz-budget" value={data.budget} onChange={e => update({ budget: e.target.value })} className="field-input" style={{ appearance: "none" }}>
                    <option value="">Select range</option>
                    {budgetRanges.map(b => <option key={b} value={b} style={{ background: "#0d0d12" }}>{b}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wider" htmlFor="wiz-timeline" style={{ color: "rgba(240,240,245,0.7)", fontFamily: "'Sora', sans-serif" }}>
                    Timeline
                  </label>
                  <select id="wiz-timeline" value={data.timeline} onChange={e => update({ timeline: e.target.value })} className="field-input" style={{ appearance: "none" }}>
                    <option value="">Select timeline</option>
                    {timelines.map(t => <option key={t} value={t} style={{ background: "#0d0d12" }}>{t}</option>)}
                  </select>
                </div>
              </div>
              {(data.buyerType === "federal" || data.buyerType === "state-local") && (
                <div>
                  <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wider" htmlFor="wiz-vehicle" style={{ color: "rgba(240,240,245,0.7)", fontFamily: "'Sora', sans-serif" }}>
                    Contract Vehicle
                  </label>
                  <select id="wiz-vehicle" value={data.contractVehicle} onChange={e => update({ contractVehicle: e.target.value })} className="field-input" style={{ appearance: "none" }}>
                    <option value="">Select vehicle</option>
                    {contractVehicles.map(v => <option key={v} value={v} style={{ background: "#0d0d12" }}>{v}</option>)}
                  </select>
                </div>
              )}
            </div>
          )}

          {/* Step 4: Message + Review */}
          {step === 4 && (
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-bold mb-1" style={{ fontFamily: "'Sora', sans-serif" }}>Additional Details</h3>
                <p className="text-sm mb-5" style={{ color: "var(--muted-foreground)" }}>Share any specific requirements, questions, or context.</p>
              </div>
              <div>
                <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wider" htmlFor="wiz-message" style={{ color: "rgba(240,240,245,0.7)", fontFamily: "'Sora', sans-serif" }}>
                  Message
                </label>
                <div className="relative">
                  <MessageSquare size={14} className="absolute left-3 top-3.5 pointer-events-none" style={{ color: "var(--muted-foreground)" }} aria-hidden="true" />
                  <textarea id="wiz-message" value={data.message} onChange={e => update({ message: e.target.value })} rows={5} placeholder="Describe your project goals, current challenges, or specific questions for our team..." className="field-input pl-9 resize-none" style={{ minHeight: 120 }} />
                </div>
              </div>
              {/* Review summary */}
              <div className="glass-card p-4 space-y-2" style={{ borderColor: "rgba(0,200,240,0.12)" }}>
                <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "var(--accent)", fontFamily: "'Sora', sans-serif" }}>Review</p>
                {[
                  { label: "Buyer type", value: buyerTypes.find(b => b.id === data.buyerType)?.label },
                  { label: "Name", value: data.name },
                  { label: "Company", value: data.company },
                  { label: "Email", value: data.email },
                  { label: "Project", value: data.projectType },
                  data.budget ? { label: "Budget", value: data.budget } : null,
                  data.timeline ? { label: "Timeline", value: data.timeline } : null,
                ].filter(Boolean).map(item => item && (
                  <div key={item.label} className="flex items-start gap-2 text-xs">
                    <span className="w-20 flex-shrink-0" style={{ color: "var(--muted-foreground)" }}>{item.label}</span>
                    <span style={{ color: "rgba(240,240,245,0.8)" }}>{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      <div className="flex items-center justify-between mt-8 gap-3">
        <button
          type="button"
          onClick={prev}
          disabled={step === 1}
          className="btn-secondary text-sm px-5"
          style={{ opacity: step === 1 ? 0.3 : 1, minWidth: 100 }}
          aria-label="Previous step"
        >
          <ArrowLeft size={15} aria-hidden="true" />
          Back
        </button>

        {step < TOTAL_STEPS ? (
          <button
            type="button"
            onClick={next}
            disabled={!canAdvance()}
            className="btn-primary text-sm px-5 flex-1 sm:flex-none justify-center"
            style={{ minWidth: 140, opacity: canAdvance() ? 1 : 0.4 }}
            aria-label="Next step"
          >
            Continue
            <ArrowRight size={15} aria-hidden="true" />
          </button>
        ) : (
          <button
            type="button"
            onClick={handleSubmit}
            disabled={loading || !canAdvance()}
            className="btn-primary text-sm px-5 flex-1 sm:flex-none justify-center"
            style={{ minWidth: 160 }}
            aria-busy={loading}
          >
            {loading ? (
              <><Loader2 size={15} className="animate-spin" aria-hidden="true" /> Submitting...</>
            ) : (
              <><CheckCircle size={15} aria-hidden="true" /> Submit Inquiry</>
            )}
          </button>
        )}
      </div>

      {error && (
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 p-3 rounded-lg text-xs space-y-2"
          style={{ background: "rgba(255,59,59,0.08)", border: "1px solid rgba(255,59,59,0.2)" }}
          role="alert"
        >
          <div className="flex items-start gap-2" style={{ color: "#ff6b6b" }}>
            <AlertCircle size={13} className="flex-shrink-0 mt-0.5" aria-hidden="true" />
            <span>{error}</span>
          </div>
          {retryCount < 3 && (
            <button
              type="button"
              onClick={handleSubmit}
              disabled={loading}
              className="flex items-center gap-1.5 text-xs font-semibold transition-colors hover:opacity-100"
              style={{ color: "#ff6b6b", opacity: 0.8 }}
            >
              <RotateCcw size={11} aria-hidden="true" />
              Try again
            </button>
          )}
        </motion.div>
      )}
    </div>
  );
}

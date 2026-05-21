import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "./contexts/ThemeContext";
import { Route, Switch } from "wouter";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CertificationsHeader from "./components/CertificationsHeader";
import LeadMagnetModal from "./components/LeadMagnetModal";

// ── Critical path: Home loads eagerly ──────────────────────────────────────
import Home from "./pages/Home";

// ── All sub-pages lazy-loaded to reduce initial bundle ─────────────────────
const EnterpriseTechnology   = lazy(() => import("./pages/Services/EnterpriseTechnology"));
const Infrastructure         = lazy(() => import("./pages/Services/Infrastructure"));
const DigitalTransformation  = lazy(() => import("./pages/Services/DigitalTransformation"));
const Consulting             = lazy(() => import("./pages/Services/Consulting"));

const AboutUs                = lazy(() => import("./pages/Company/AboutUs"));
const Careers                = lazy(() => import("./pages/Company/Careers"));
const Blog                   = lazy(() => import("./pages/Company/Blog"));
const Press                  = lazy(() => import("./pages/Company/Press"));

const TermsOfService         = lazy(() => import("./pages/Legal/TermsOfService"));
const Security               = lazy(() => import("./pages/Legal/Security"));
const Compliance             = lazy(() => import("./pages/Legal/Compliance"));

const ProcurementGuide       = lazy(() => import("./pages/Procurement/Guide"));
const NotFound               = lazy(() => import("./pages/NotFound"));

// ── Minimal skeleton shown while lazy chunks load ──────────────────────────
function PageSkeleton() {
  return (
    <div
      className="flex items-center justify-center min-h-[60vh]"
      aria-label="Loading page"
      role="status"
    >
      <div className="flex flex-col items-center gap-3">
        <div
          className="w-8 h-8 rounded-full border-2 animate-spin"
          style={{ borderColor: "rgba(0,200,240,0.3)", borderTopColor: "#00c8f0" }}
        />
        <span className="text-xs text-muted-foreground">Loading…</span>
      </div>
    </div>
  );
}

function Router() {
  return (
    <Suspense fallback={<PageSkeleton />}>
      <Switch>
        {/* Home — eager */}
        <Route path="/" component={Home} />

        {/* Services */}
        <Route path="/services/enterprise-technology" component={EnterpriseTechnology} />
        <Route path="/services/infrastructure" component={Infrastructure} />
        <Route path="/services/digital-transformation" component={DigitalTransformation} />
        <Route path="/services/consulting" component={Consulting} />

        {/* Company */}
        <Route path="/company/about" component={AboutUs} />
        <Route path="/company/careers" component={Careers} />
        <Route path="/company/blog" component={Blog} />
        <Route path="/company/press" component={Press} />

        {/* Legal */}
        <Route path="/legal/terms" component={TermsOfService} />
        <Route path="/legal/security" component={Security} />
        <Route path="/legal/compliance" component={Compliance} />

        {/* Procurement */}
        <Route path="/procurement/guide" component={ProcurementGuide} />

        {/* 404 */}
        <Route path="/404" component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

function App() {
  return (
    <ThemeProvider defaultTheme="dark">
      <TooltipProvider>
        <Toaster />
        <LeadMagnetModal />
        <div className="bg-background text-foreground min-h-screen flex flex-col">
          {/* Skip-to-content link for keyboard/screen-reader users */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-lg focus:font-semibold focus:text-sm"
            style={{ background: "var(--accent)", color: "#000" }}
          >
            Skip to main content
          </a>
          <Navbar />
          <CertificationsHeader />
          <main className="flex-1" id="main-content" tabIndex={-1}>
            <Router />
          </main>
          <Footer />
        </div>
      </TooltipProvider>
    </ThemeProvider>
  );
}

export default App;

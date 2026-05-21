// server/index.ts
import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";
import { Resend } from "resend";
import PDFDocument from "pdfkit";
var __filename = fileURLToPath(import.meta.url);
var __dirname = path.dirname(__filename);
var resend = new Resend(process.env.RESEND_API_KEY);
async function startServer() {
  const app = express();
  const server = createServer(app);
  app.use(express.json());
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, company, phone, projectType, message } = req.body;
      if (!name || !email || !company || !projectType || !message) {
        return res.status(400).json({ error: "Missing required fields" });
      }
      const data = await resend.emails.send({
        from: "onboarding@resend.dev",
        // Replace with your verified domain
        to: "admin@crfenterprise.com",
        subject: `New Contact Form Submission from ${name}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Company:</strong> ${company}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
          <p><strong>Project Type:</strong> ${projectType}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, "<br />")}</p>
        `
      });
      if (data.error) {
        console.error("Resend error:", data.error);
        return res.status(500).json({ error: "Failed to send email" });
      }
      res.json({ success: true, id: data.data?.id });
    } catch (error) {
      console.error("Contact form error:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });
  app.get("/api/capability-statement", (_req, res) => {
    try {
      const doc = new PDFDocument({ margin: 50, size: "LETTER" });
      res.setHeader("Content-Type", "application/pdf");
      res.setHeader("Content-Disposition", "attachment; filename=CRF-Enterprise-Capability-Statement.pdf");
      doc.pipe(res);
      doc.rect(0, 0, doc.page.width, 80).fill("#050508");
      doc.fontSize(20).fillColor("#00c8f0").font("Helvetica-Bold").text("CRF ENTERPRISE, LLC", 50, 28);
      doc.fontSize(9).fillColor("#7a7a90").font("Helvetica").text("Government & Enterprise Technology Contractor", 50, 54);
      doc.rect(50, 90, doc.page.width - 100, 2).fill("#d4af37");
      doc.moveDown(2.5);
      const col1x = 50;
      const col2x = 320;
      let y = 110;
      doc.fontSize(8).fillColor("#7a7a90").font("Helvetica-Bold").text("CAGE CODE", col1x, y);
      doc.fontSize(11).fillColor("#000000").font("Helvetica-Bold").text("107F5", col1x, y + 12);
      doc.fontSize(8).fillColor("#7a7a90").font("Helvetica-Bold").text("SAM STATUS", col2x, y);
      doc.fontSize(11).fillColor("#000000").font("Helvetica-Bold").text("Active \xB7 FY2026", col2x, y + 12);
      y += 40;
      doc.fontSize(8).fillColor("#7a7a90").font("Helvetica-Bold").text("CERTIFICATIONS", col1x, y);
      doc.fontSize(11).fillColor("#000000").font("Helvetica-Bold").text("MWBE Certified \xB7 Small Business Set-Aside Eligible", col1x, y + 12);
      y += 40;
      doc.fontSize(8).fillColor("#7a7a90").font("Helvetica-Bold").text("LOCATION", col1x, y);
      doc.fontSize(10).fillColor("#000000").font("Helvetica").text("Las Vegas, NV 89101", col1x, y + 12);
      doc.fontSize(8).fillColor("#7a7a90").font("Helvetica-Bold").text("CONTACT", col2x, y);
      doc.fontSize(10).fillColor("#000000").font("Helvetica").text("admin@crfenterprise.com", col2x, y + 12);
      doc.fontSize(10).fillColor("#000000").font("Helvetica").text("(702) 356-3226", col2x, y + 26);
      y += 65;
      doc.rect(50, y, doc.page.width - 100, 1).fill("#e0e0e0");
      y += 8;
      doc.fontSize(12).fillColor("#050508").font("Helvetica-Bold").text("CORE CAPABILITIES", col1x, y);
      y += 20;
      const capabilities = [
        "Custom Software Development (NAICS 541511)",
        "Cloud Infrastructure & Migration (NAICS 541512)",
        "Legacy System Modernization (NAICS 541519)",
        "IT Strategic Consulting (NAICS 541611)",
        "Commercial Construction (NAICS 236220)",
        "Highway & Infrastructure Construction (NAICS 237310)",
        "FedRAMP / FISMA / NIST RMF Compliance Support",
        "DevSecOps Pipeline Implementation",
        "Data Engineering & Analytics Platforms",
        "Staff Augmentation \u2014 Cleared Personnel Available"
      ];
      capabilities.forEach((cap) => {
        doc.fontSize(10).fillColor("#333333").font("Helvetica").text(`\u2022 ${cap}`, col1x, y);
        y += 16;
      });
      y += 10;
      doc.rect(50, y, doc.page.width - 100, 1).fill("#e0e0e0");
      y += 8;
      doc.fontSize(12).fillColor("#050508").font("Helvetica-Bold").text("NAICS CODES", col1x, y);
      y += 18;
      const naics = [
        ["541511", "Custom Computer Programming Services"],
        ["541512", "Computer Systems Design Services"],
        ["541519", "Other Computer Related Services"],
        ["541611", "Administrative Management Consulting"],
        ["236220", "Commercial / Institutional Building Construction"],
        ["237310", "Highway, Street & Bridge Construction"]
      ];
      naics.forEach(([code, label]) => {
        doc.fontSize(10).fillColor("#00c8f0").font("Helvetica-Bold").text(code, col1x, y);
        doc.fontSize(10).fillColor("#333333").font("Helvetica").text(label, col1x + 55, y);
        y += 16;
      });
      y += 10;
      doc.rect(50, y, doc.page.width - 100, 1).fill("#e0e0e0");
      y += 8;
      doc.fontSize(12).fillColor("#050508").font("Helvetica-Bold").text("DIFFERENTIATORS", col1x, y);
      y += 18;
      [
        "Security-first architecture \u2014 zero-trust, least-privilege, ATO-ready",
        "Agile & DevSecOps delivery aligned with OMB M-21-31",
        "Procurement-ready: Reps & Certs, past performance available",
        "48-hour RFI/Sources Sought response SLA",
        "Open-market, GSA Schedule, IDIQ, and teaming support"
      ].forEach((point) => {
        doc.fontSize(10).fillColor("#333333").font("Helvetica").text(`\u2022 ${point}`, col1x, y);
        y += 16;
      });
      const footerY = doc.page.height - 60;
      doc.rect(0, footerY - 8, doc.page.width, 68).fill("#050508");
      doc.fontSize(8).fillColor("#7a7a90").font("Helvetica").text(
        "CRF Enterprise, LLC  \xB7  crfenterprise.com  \xB7  CAGE: 107F5  \xB7  SAM Registered  \xB7  MWBE Certified  \xB7  Updated FY2026",
        50,
        footerY + 4,
        { width: doc.page.width - 100, align: "center" }
      );
      doc.end();
    } catch (err) {
      console.error("PDF generation error:", err);
      res.status(500).json({ error: "PDF generation failed" });
    }
  });
  const staticPath = process.env.NODE_ENV === "production" ? path.resolve(__dirname, "..", "public") : path.resolve(__dirname, "..", "dist", "public");
  app.use(express.static(staticPath));
  app.get("*", (_req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
  });
  const port = process.env.PORT || 3e3;
  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}
startServer().catch(console.error);

// server/index.ts
import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";
import { Resend } from "resend";
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

import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "./contexts/ThemeContext";
import { Route, Switch } from "wouter";
import CertificationsHeader from "./components/CertificationsHeader";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Home
import Home from "./pages/Home";

// Services
import EnterpriseTechnology from "./pages/Services/EnterpriseTechnology";
import Infrastructure from "./pages/Services/Infrastructure";
import DigitalTransformation from "./pages/Services/DigitalTransformation";
import Consulting from "./pages/Services/Consulting";

// Company
import AboutUs from "./pages/Company/AboutUs";
import Careers from "./pages/Company/Careers";
import Blog from "./pages/Company/Blog";
import Press from "./pages/Company/Press";

// Legal
import TermsOfService from "./pages/Legal/TermsOfService";
import Security from "./pages/Legal/Security";
import Compliance from "./pages/Legal/Compliance";

import NotFound from "./pages/NotFound";
import LeadMagnetModal from "./components/LeadMagnetModal";

function Router() {
  return (
    <Switch>
      {/* Home */}
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

      {/* 404 */}
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ThemeProvider defaultTheme="dark">
      <TooltipProvider>
        <Toaster />
        <LeadMagnetModal />
        <div className="bg-background text-foreground min-h-screen flex flex-col">
          <CertificationsHeader />
          <Navbar />
          <main className="flex-1">
            <Router />
          </main>
          <Footer />
        </div>
      </TooltipProvider>
    </ThemeProvider>
  );
}

export default App;

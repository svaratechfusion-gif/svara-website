import { createBrowserRouter } from "react-router";
import { RootLayout } from "./components/RootLayout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Ecosystem } from "./pages/Ecosystem";
import { Products } from "./pages/Products";
import { Technology } from "./pages/Technology";
import { BusinessModel } from "./pages/BusinessModel";
import { Industries } from "./pages/Industries";
import { Roadmap } from "./pages/Roadmap";
import { Leadership } from "./pages/Leadership";
import { Contact } from "./pages/Contact";
import { NotFound } from "./pages/NotFound";
import { CommandCenter } from "./pages/CommandCenter";
import { Divisions } from "./pages/Divisions";
import { Company } from "./pages/Company";
import { PrivacyPolicy } from "./pages/PrivacyPolicy";
import { TermsAndConditions } from "./pages/TermsAndConditions";
import { CookiePolicy } from "./pages/CookiePolicy";
import { Careers } from "./pages/Careers";
import { Partnerships } from "./pages/Partnerships";
import { Architecture } from "./pages/Architecture";
import { Blog } from "./pages/Blog";
import { EnterpriseAIInfrastructure } from "./pages/blog/EnterpriseAIInfrastructure";
import { EdgeVsCloudAI } from "./pages/blog/EdgeVsCloudAI";
import { AIAgentsWorkflows } from "./pages/blog/AIAgentsWorkflows";
import { DigitalTwinTech } from "./pages/blog/DigitalTwinTech";
import { AIFirstOrganizations } from "./pages/blog/AIFirstOrganizations";
import { VisionAIManufacturing } from "./pages/blog/VisionAIManufacturing";
import { AutonomousCities } from "./pages/blog/AutonomousCities";
import { AIOSEnterprise } from "./pages/blog/AIOSEnterprise";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "ecosystem", Component: Ecosystem },
      { path: "products", Component: Products },
      { path: "technology", Component: Technology },
      { path: "business", Component: BusinessModel },
      { path: "industries", Component: Industries },
      { path: "roadmap", Component: Roadmap },
      { path: "leadership", Component: Leadership },
      { path: "contact", Component: Contact },
      { path: "command-center", Component: CommandCenter },
      { path: "divisions", Component: Divisions },
      { path: "company", Component: Company },
      { path: "privacy-policy", Component: PrivacyPolicy },
      { path: "terms-and-conditions", Component: TermsAndConditions },
      { path: "cookie-policy", Component: CookiePolicy },
      { path: "careers", Component: Careers },
      { path: "partnerships", Component: Partnerships },
      { path: "architecture", Component: Architecture },
      { path: "blog", Component: Blog },
      { path: "blog/enterprise-ai-infrastructure", Component: EnterpriseAIInfrastructure },
      { path: "blog/edge-vs-cloud-ai", Component: EdgeVsCloudAI },
      { path: "blog/ai-agents-transforming-workflows", Component: AIAgentsWorkflows },
      { path: "blog/digital-twin-technology-guide", Component: DigitalTwinTech },
      { path: "blog/building-ai-first-organizations", Component: AIFirstOrganizations },
      { path: "blog/vision-ai-manufacturing-quality-control", Component: VisionAIManufacturing },
      { path: "blog/autonomous-systems-smart-cities", Component: AutonomousCities },
      { path: "blog/ai-os-enterprise-software-evolution", Component: AIOSEnterprise },
      { path: "*", Component: NotFound },
    ],
  },
]);

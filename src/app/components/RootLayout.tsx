import { Outlet, Link, useLocation } from "react-router";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence } from "motion/react";
import { ScrollToTop } from "./ScrollToTop";
import { Preloader } from "./Preloader";
import { GoogleAnalytics } from "./GoogleAnalytics";
import { organizationSchema, websiteSchema } from "./StructuredData";
import logoImage from "../../imports/Asset_184.png";

export function RootLayout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Only show preloader on initial load
    const hasVisited = sessionStorage.getItem("hasVisited");
    if (hasVisited) {
      setLoading(false);
    }
  }, []);

  const handlePreloaderComplete = () => {
    setLoading(false);
    sessionStorage.setItem("hasVisited", "true");
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Ecosystem", path: "/ecosystem" },
    { name: "Divisions", path: "/divisions" },
    { name: "Products", path: "/products" },
    { name: "AI OS", path: "/command-center" },
    { name: "Industries", path: "/industries" },
    { name: "Business", path: "/business" },
    { name: "Roadmap", path: "/roadmap" },
    { name: "Technology", path: "/technology" },
    { name: "Blog", path: "/blog" },
    { name: "Company", path: "/company" },
  ];

  return (
    <>
      <GoogleAnalytics />

      {/* Organization Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />

      <AnimatePresence mode="wait">
        {loading && <Preloader onComplete={handlePreloaderComplete} />}
      </AnimatePresence>

      <div className="min-h-screen text-white relative bg-black">
        <ScrollToTop />

      <nav className="fixed top-0 left-0 right-0 z-50 glass backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24">
            <Link to="/" className="flex items-center flex-shrink-0">
              <img src={logoImage} alt="SVARA" className="h-16" />
            </Link>

            <div className="hidden lg:flex items-center gap-6 xl:gap-8 ml-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm font-medium transition-all duration-300 relative ${
                    location.pathname === item.path
                      ? "text-white"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  {item.name}
                  {location.pathname === item.path && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#C0C0C0] to-[#E5E7EB]" />
                  )}
                </Link>
              ))}
              <Link
                to="/contact"
                className="px-6 py-2.5 bg-gradient-to-r from-[#C0C0C0] to-[#E5E7EB] hover:from-[#D1D5DB] hover:to-[#F3F4F6] transition-all rounded-full text-sm font-medium hover-glow-blue text-black"
              >
                Book Demo
              </Link>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 glass rounded-lg"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-white/5 glass-strong">
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block py-3 px-4 rounded-lg text-sm transition-all ${
                    location.pathname === item.path
                      ? "text-white bg-white/10"
                      : "text-white/60 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-3 px-4 rounded-lg text-sm text-center bg-gradient-to-r from-[#C0C0C0] to-[#E5E7EB] text-white"
              >
                Book Demo
              </Link>
            </div>
          </div>
        )}
      </nav>

      <main className="pt-20 relative z-10">
        <Outlet />
      </main>

      <footer className="border-t border-white/5 py-16 px-4 relative z-10 mt-32">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/5 pointer-events-none" />
        <div className="max-w-7xl mx-auto relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
            <div>
              <div className="mb-4">
                <img src={logoImage} alt="SVARA" className="h-16" />
              </div>
              <p className="text-white/50 text-sm leading-relaxed">
                The Operating System for AI-driven enterprises. Building the future of intelligence infrastructure.
              </p>
            </div>
            <div>
              <h3 className="mb-4 text-sm uppercase tracking-wider text-white/40 font-semibold">Platform</h3>
              <div className="space-y-3 text-sm text-white/60">
                <Link to="/ecosystem" className="block hover:text-[#C0C0C0] transition-colors">
                  Ecosystem
                </Link>
                <Link to="/products" className="block hover:text-[#C0C0C0] transition-colors">
                  Products
                </Link>
                <Link to="/technology" className="block hover:text-[#C0C0C0] transition-colors">
                  Technology
                </Link>
              </div>
            </div>
            <div>
              <h3 className="mb-4 text-sm uppercase tracking-wider text-white/40 font-semibold">Company</h3>
              <div className="space-y-3 text-sm text-white/60">
                <Link to="/about" className="block hover:text-[#C0C0C0] transition-colors">
                  About
                </Link>
                <Link to="/blog" className="block hover:text-[#C0C0C0] transition-colors">
                  Blog
                </Link>
                <Link to="/architecture" className="block hover:text-[#C0C0C0] transition-colors">
                  Architecture
                </Link>
                <Link to="/leadership" className="block hover:text-[#C0C0C0] transition-colors">
                  Leadership
                </Link>
                <Link to="/roadmap" className="block hover:text-[#C0C0C0] transition-colors">
                  Roadmap
                </Link>
                <Link to="/careers" className="block hover:text-[#C0C0C0] transition-colors">
                  Careers
                </Link>
                <Link to="/contact" className="block hover:text-[#C0C0C0] transition-colors">
                  Contact
                </Link>
                <Link to="/partnerships" className="block hover:text-[#C0C0C0] transition-colors">
                  Partnerships
                </Link>
              </div>
            </div>
            <div>
              <h3 className="mb-4 text-sm uppercase tracking-wider text-white/40 font-semibold">Legal</h3>
              <div className="space-y-3 text-sm text-white/60">
                <Link to="/privacy-policy" className="block hover:text-[#C0C0C0] transition-colors">
                  Privacy Policy
                </Link>
                <Link to="/terms-and-conditions" className="block hover:text-[#C0C0C0] transition-colors">
                  Terms & Conditions
                </Link>
                <Link to="/cookie-policy" className="block hover:text-[#C0C0C0] transition-colors">
                  Cookie Policy
                </Link>
              </div>
            </div>
            <div className="flex gap-3">

  {/* LinkedIn */}
  <a
    href="https://www.linkedin.com/company/svara-techfusion/"
    target="_blank"
    rel="noopener noreferrer"
    className="w-11 h-11 rounded-full glass hover:glass-strong transition-all flex items-center justify-center hover-glow-blue group"
  >
    <svg className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    </svg>
  </a>

  {/* Twitter/X */}
  <a
    href="https://x.com/SvaraTechfusion"
    target="_blank"
    rel="noopener noreferrer"
    className="w-11 h-11 rounded-full glass hover:glass-strong transition-all flex items-center justify-center hover-glow-blue group"
  >
    <svg className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
    </svg>
  </a>

  {/* GitHub */}
  <a
    href="https://github.com/svaratechfusion-gif"
    target="_blank"
    rel="noopener noreferrer"
    className="w-11 h-11 rounded-full glass hover:glass-strong transition-all flex items-center justify-center hover-glow-blue group"
  >
    <svg className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  </a>

  {/* Instagram */}
  <a
    href="https://www.instagram.com/svaratechfusion/"
    target="_blank"
    rel="noopener noreferrer"
    className="w-11 h-11 rounded-full glass hover:glass-strong transition-all flex items-center justify-center hover-glow-blue group"
  >
    <svg className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z"/>
    </svg>
  </a>

</div>
            </div>
          </div>
          <div className="pt-8 border-t border-white/5 text-center text-sm text-white/30">
            © 2026 SVARA TechFusion. All rights reserved. | Hyderabad, India
          </div>
        </div>
      </footer>
      </div>
    </>
  );
}

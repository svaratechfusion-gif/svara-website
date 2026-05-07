import { ConnectingLinesBackground } from "../components/ConnectingLinesBackground";

export function PrivacyPolicy() {
  return (
    <div className="bg-black text-white min-h-screen">
      <ConnectingLinesBackground />

      <div className="relative z-10 max-w-4xl mx-auto px-4 py-24">
        <h1 className="text-5xl md:text-6xl mb-8 tracking-tight">Privacy Policy</h1>
        <p className="text-2xl mb-4 text-white">SVARA TechFusion Private Limited</p>
        <p className="text-white/60 mb-2">Effective Date: April 25, 2026</p>
        <p className="text-white/60 mb-12">Last Updated: April 25, 2026</p>

        <div className="space-y-8 text-white/80 leading-relaxed">
          <section>
            <h2 className="text-3xl mb-4 text-white">1. Introduction</h2>
            <p className="mb-4">
              SVARA TechFusion Private Limited ("SVARA", "Company", "we", "our", or "us") is committed to protecting the privacy, confidentiality, and security of personal and enterprise data.
            </p>
            <p className="mb-4">
              This Privacy Policy explains how we collect, use, process, store, and protect information when you:
            </p>
            <ul className="space-y-2 ml-6">
              <li className="flex items-start gap-3">
                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                <span>Access our website</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                <span>Use our products, platforms, or services</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                <span>Engage with us as a client, partner, or user</span>
              </li>
            </ul>
            <p className="mt-4">
              This policy applies to all services offered under SVARA TechFusion, including AI platforms, SaaS systems, digital engineering services, and growth intelligence solutions.
            </p>
          </section>

          <section>
            <h2 className="text-3xl mb-4 text-white">2. Scope of Policy</h2>
            <p className="mb-4">This Privacy Policy applies to:</p>
            <ul className="space-y-2 ml-6">
              <li className="flex items-start gap-3">
                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                <span>Website visitors</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                <span>Product users and customers</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                <span>Enterprise clients and partners</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                <span>Individuals interacting with SVARA systems</span>
              </li>
            </ul>
            <p className="mt-4">
              It covers both personal data and enterprise/business data processed through our platforms.
            </p>
          </section>

          <section>
            <h2 className="text-3xl mb-4 text-white">3. Information We Collect</h2>

            <h3 className="text-xl mb-3 text-cyan-400">3.1 Personal Information</h3>
            <p className="mb-4">We may collect:</p>
            <ul className="space-y-2 ml-6 mb-6">
              <li className="flex items-start gap-3">
                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                <span>Name, email address, phone number</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                <span>Company name and designation</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                <span>Contact and communication details</span>
              </li>
            </ul>

            <h3 className="text-xl mb-3 text-cyan-400">3.2 Business & Operational Data</h3>
            <p className="mb-4">When clients use our platforms, we may process:</p>
            <ul className="space-y-2 ml-6 mb-4">
              <li className="flex items-start gap-3">
                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                <span>Enterprise operational data</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                <span>Customer data provided by clients</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                <span>Workflow, transaction, and system data</span>
              </li>
            </ul>
            <p className="mb-6">This data is processed strictly under client instructions.</p>

            <h3 className="text-xl mb-3 text-cyan-400">3.3 Technical & Usage Data</h3>
            <p className="mb-4">We automatically collect:</p>
            <ul className="space-y-2 ml-6 mb-6">
              <li className="flex items-start gap-3">
                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                <span>IP address and device information</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                <span>Browser type and operating system</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                <span>Usage patterns and interaction data</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                <span>Log files and system activity</span>
              </li>
            </ul>

            <h3 className="text-xl mb-3 text-cyan-400">3.4 AI System Data Processing</h3>
            <p className="mb-4">SVARA platforms may process:</p>
            <ul className="space-y-2 ml-6 mb-4">
              <li className="flex items-start gap-3">
                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                <span>Text, documents, images, and video inputs</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                <span>Sensor and IoT data</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                <span>System-generated outputs and analytics</span>
              </li>
            </ul>
            <p>All AI processing is governed by defined security and usage protocols.</p>
          </section>

          <section>
            <h2 className="text-3xl mb-4 text-white">4. Purpose of Data Collection</h2>
            <p className="mb-4">We process data for:</p>
            <ul className="space-y-2 ml-6">
              <li className="flex items-start gap-3">
                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                <span>Service delivery and platform functionality</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                <span>Product improvement and optimisation</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                <span>Customer support and communication</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                <span>Security, compliance, and fraud prevention</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                <span>Analytics and performance monitoring</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl mb-4 text-white">5. Legal Basis for Processing</h2>
            <p className="mb-4">Data is processed based on:</p>
            <ul className="space-y-2 ml-6">
              <li className="flex items-start gap-3">
                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                <span>User consent</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                <span>Contractual necessity</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                <span>Legitimate business interests</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                <span>Legal and regulatory compliance</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl mb-4 text-white">6. Data Sharing & Disclosure</h2>
            <p className="mb-4 text-cyan-400 font-medium">We do not sell personal data.</p>
            <p className="mb-4">Data may be shared only:</p>
            <ul className="space-y-2 ml-6">
              <li className="flex items-start gap-3">
                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                <span>With authorised service providers</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                <span>With enterprise clients as part of service delivery</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                <span>When required by law</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                <span>To protect legal rights and security</span>
              </li>
            </ul>
            <p className="mt-4">All third-party engagements are governed by strict agreements.</p>
          </section>

          <section>
            <h2 className="text-3xl mb-4 text-white">7. Data Storage & Security</h2>
            <p className="mb-4">We implement:</p>
            <ul className="space-y-2 ml-6">
              <li className="flex items-start gap-3">
                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                <span>Encryption (data at rest and in transit)</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                <span>Secure infrastructure environments</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                <span>Access controls and authentication systems</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                <span>Continuous monitoring and threat detection</span>
              </li>
            </ul>
            <p className="mt-4">Data is retained only as long as necessary.</p>
          </section>

          <section>
            <h2 className="text-3xl mb-4 text-white">8. Data Localisation & Transfers</h2>
            <p className="mb-4">Data may be processed:</p>
            <ul className="space-y-2 ml-6">
              <li className="flex items-start gap-3">
                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                <span>Within India</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                <span>In secure international cloud environments (if required)</span>
              </li>
            </ul>
            <p className="mt-4">All transfers comply with applicable regulations.</p>
          </section>

          <section>
            <h2 className="text-3xl mb-4 text-white">9. User Rights</h2>
            <p className="mb-4">Users may:</p>
            <ul className="space-y-2 ml-6">
              <li className="flex items-start gap-3">
                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                <span>Access their data</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                <span>Request correction</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                <span>Request deletion (subject to legal obligations)</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                <span>Withdraw consent</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                <span>Raise complaints</span>
              </li>
            </ul>
            <p className="mt-4">Requests can be submitted via the contact details below.</p>
          </section>

          <section>
            <h2 className="text-3xl mb-4 text-white">10. Cookies & Tracking</h2>
            <p className="mb-4">We use cookies to:</p>
            <ul className="space-y-2 ml-6">
              <li className="flex items-start gap-3">
                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                <span>Improve functionality</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                <span>Analyse behaviour</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                <span>Enhance experience</span>
              </li>
            </ul>
            <p className="mt-4">
              Users can control cookies via browser settings. For more information, please see our <a href="/cookie-policy" className="text-cyan-400 hover:text-cyan-300 underline">Cookie Policy</a>.
            </p>
          </section>

          <section>
            <h2 className="text-3xl mb-4 text-white">11. Data Retention</h2>
            <p className="mb-4">We retain data:</p>
            <ul className="space-y-2 ml-6">
              <li className="flex items-start gap-3">
                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                <span>For service duration</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                <span>As required by law</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                <span>For operational and security purposes</span>
              </li>
            </ul>
            <p className="mt-4">Data is deleted or anonymised when no longer required.</p>
          </section>

          <section>
            <h2 className="text-3xl mb-4 text-white">12. Third-Party Services</h2>
            <p className="mb-4">Our systems may integrate with third-party tools.</p>
            <p>SVARA is not responsible for third-party privacy practices.</p>
          </section>

          <section>
            <h2 className="text-3xl mb-4 text-white">13. Children's Privacy</h2>
            <p className="mb-4">Our services are not intended for individuals under 18.</p>
            <p>We do not knowingly collect data from minors.</p>
          </section>

          <section>
            <h2 className="text-3xl mb-4 text-white">14. Policy Updates</h2>
            <p className="mb-4">We may update this policy periodically.</p>
            <p>Updates will be communicated via website or email.</p>
          </section>

          <section>
            <h2 className="text-3xl mb-4 text-white">15. Contact Information</h2>
            <p className="mb-4">For any privacy-related queries:</p>
            <div className="p-6 bg-white/5 border border-white/10">
              <p className="mb-3 text-lg"><strong>SVARA TechFusion Private Limited</strong></p>
              <p className="mb-2">Email: legal@svaratechfusion.com</p>
              <p className="mb-2"><strong>Registered Address:</strong></p>
              <p className="text-white/80">1-132, Begampet, Rachloor, Kandukur, Rangareddy,</p>
              <p className="text-white/80">K.V.Rangareddy – 501359, Telangana, India</p>
            </div>
          </section>

          <section>
            <h2 className="text-3xl mb-4 text-white">16. Governing Law</h2>
            <p className="mb-4">This Privacy Policy is governed by the laws of India.</p>
            <p><strong>Jurisdiction:</strong> Courts of Telangana, India.</p>
          </section>
        </div>
      </div>
    </div>
  );
}

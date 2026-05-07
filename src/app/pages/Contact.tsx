import { useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { useMouseTracker3D, get3DTransform } from "../components/MouseTracker3D";
import { Mail, MessageSquare, Building2, Users, ArrowRight } from "lucide-react";
import { ConnectingLinesBackground } from "../components/ConnectingLinesBackground";
import { SEOHead } from "../components/SEOHead";
import { trackFormSubmission, trackCTAClick } from "../components/GoogleAnalytics";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    interest: "enterprise",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          access_key: "4705ccba-bfbf-4759-ab1d-da7bc9a26111",
          name: formData.name,
          email: formData.email,
          company: formData.company,
          interest: formData.interest,
          message: formData.message,
          subject: `New Contact Form Submission from ${formData.name}`,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
        trackFormSubmission('contact_form');
        setFormData({
          name: "",
          email: "",
          company: "",
          interest: "enterprise",
          message: ""
        });
      } else {
        setError("Something went wrong. Please try again or email us directly.");
      }
    } catch (err) {
      setError("Failed to send message. Please try again or email us directly.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactOptions = [
    {
      icon: Building2,
      title: "Enterprise",
      description: "Deploy SVARA products across your organization",
      action: "Schedule Demo",
      interestValue: "enterprise"
    },
    {
      icon: Users,
      title: "Government",
      description: "Nation-scale AI infrastructure partnerships",
      action: "Discuss Requirements",
      interestValue: "government"
    },
    {
      icon: MessageSquare,
      title: "Partnerships",
      description: "Strategic collaborations and integrations",
      action: "Explore Partnership",
      interestValue: "partnership"
    },
    {
      icon: Mail,
      title: "Investors",
      description: "Investment opportunities and deck requests",
      action: "Request Information",
      interestValue: "investment"
    }
  ];

  const handleOptionClick = (interestValue: string) => {
    setFormData({ ...formData, interest: interestValue });
    const formElement = document.getElementById("contact-form");
    formElement?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-black text-white">
      <SEOHead
        title="Contact SVARA | AI Solutions & Enterprise Partnerships"
        description="Get in touch with SVARA TechFusion for AI solutions, enterprise partnerships, government collaborations, and investment opportunities. Schedule a demo today."
        keywords="AI consulting, enterprise AI solutions, AI implementation, custom AI development, AI partnerships, AI platform demo, contact AI company"
        canonicalUrl="https://www.svaratechfusion.com/contact"
      />
      <ConnectingLinesBackground />
      <section className="relative z-10 min-h-screen flex items-center justify-center px-4 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl mb-8 tracking-tight px-4">
            Let's Build<br />Together
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/60 mb-8 px-4">
            Ready to transform your operations with AI infrastructure?
          </p>
        </div>
      </section>

      <section className="py-24 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl mb-16 text-center px-4">How Can We Help?</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
            {contactOptions.map((option) => (
              <div
                key={option.title}
                onClick={() => handleOptionClick(option.interestValue)}
                className="p-8 bg-white/5 border border-white/10 hover:border-white/20 transition-all group cursor-pointer"
              >
                <div className="w-14 h-14 bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <option.icon className="text-blue-400" size={28} />
                </div>
                <h3 className="text-2xl mb-4">{option.title}</h3>
                <p className="text-white/60 mb-6">{option.description}</p>
                <div className="inline-flex items-center gap-2 text-blue-400 group-hover:text-blue-300 transition-colors">
                  {option.action}
                  <ArrowRight size={16} />
                </div>
              </div>
            ))}
          </div>

          <div id="contact-form" className="max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl mb-8 text-center px-4">Send Us a Message</h2>

            {submitted ? (
              <div className="p-8 bg-green-500/10 border border-green-500/20 text-center">
                <h3 className="text-2xl mb-4">Thank You!</h3>
                <p className="text-white/70 mb-4">
                  We've received your message and will get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {error && (
                  <div className="p-4 bg-red-500/10 border border-red-500/20 text-center">
                    <p className="text-red-400">{error}</p>
                  </div>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm mb-2 text-white/70">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 focus:border-blue-500/50 focus:outline-none transition-colors text-white"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm mb-2 text-white/70">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 focus:border-blue-500/50 focus:outline-none transition-colors text-white"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm mb-2 text-white/70">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 focus:border-blue-500/50 focus:outline-none transition-colors text-white"
                    placeholder="Your company"
                  />
                </div>

                <div>
                  <label htmlFor="interest" className="block text-sm mb-2 text-white/70">
                    I'm interested in *
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    required
                    value={formData.interest}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 focus:border-blue-500/50 focus:outline-none transition-colors text-white"
                  >
                    <option value="enterprise">Enterprise Deployment</option>
                    <option value="government">Government Partnership</option>
                    <option value="partnership">Strategic Partnership</option>
                    <option value="investment">Investment Opportunity</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm mb-2 text-white/70">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 focus:border-blue-500/50 focus:outline-none transition-colors text-white resize-none"
                    placeholder="Tell us about your needs..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full px-8 py-4 bg-white text-black hover:bg-white/90 transition-colors inline-flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Sending..." : "Send Message"}
                  {!loading && <ArrowRight size={20} />}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 border-t border-white/10 bg-gradient-to-b from-transparent to-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl mb-8">Direct Contact</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-white/5 border border-white/10">
              <Mail className="mx-auto mb-4 text-blue-400" size={32} />
              <h3 className="text-lg mb-2">Email</h3>
              <a
                href="mailto:contact@svaratechfusion.com"
                className="text-white/60 hover:text-white transition-colors"
              >
                contact@svaratechfusion.com
              </a>
            </div>

            <div className="p-8 bg-white/5 border border-white/10">
              <Building2 className="mx-auto mb-4 text-blue-400" size={32} />
              <h3 className="text-lg mb-2">Office</h3>
              <p className="text-white/60">
                Hyderabad, India
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

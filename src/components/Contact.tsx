import { useState } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  const contactDetails = [
    {
      icon: <MapPin className="w-5 h-5" />,
      label: 'Headquarters',
      value: '123 Innovation Drive, Suite 400\nTech Park City, TP 10012',
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: 'Phone',
      value: '+1 (555) 123-4567',
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: 'Email',
      value: 'hello@paramarsh.org',
    },
  ];

  const socials = [
    {
      label: 'LinkedIn',
      href: '#',
      path: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z',
    },
    {
      label: 'Twitter / X',
      href: '#',
      path: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.91-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z',
    },
    {
      label: 'Instagram',
      href: '#',
      path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z',
    },
  ];

  return (
    <section id="contact" className="w-full bg-[#f4f7f8] py-24 relative overflow-hidden">
      {/* Decorative accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-paramarsh-green opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <p className="text-paramarsh-green font-display font-bold text-sm uppercase tracking-widest mb-3">
            Contact
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-paramarsh-subDark uppercase tracking-tight mb-5">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-600 font-sans max-w-2xl leading-relaxed">
            Whether you're looking to collaborate, partner with us, or simply learn more about our
            sustainable development initiatives — we'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
          {/* ── Left: Info Card ── */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="bg-paramarsh-subDark text-white rounded-xl p-8 shadow-2xl">
              <h3 className="text-xl font-display font-semibold uppercase tracking-wide mb-8">
                Contact Information
              </h3>

              <div className="flex flex-col gap-7">
                {contactDetails.map((item) => (
                  <div key={item.label} className="flex items-start gap-4 group">
                    <div className="mt-0.5 flex-shrink-0 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-paramarsh-green group-hover:bg-paramarsh-green group-hover:text-white transition-all duration-300">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-widest font-medium mb-1">
                        {item.label}
                      </p>
                      <p className="text-base font-sans leading-snug whitespace-pre-line">
                        {item.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social links */}
              <div className="mt-10 pt-8 border-t border-white/10">
                <p className="text-xs text-gray-400 uppercase tracking-widest font-medium mb-4">
                  Follow Us
                </p>
                <div className="flex gap-3">
                  {socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      aria-label={s.label}
                      className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-paramarsh-green transition-colors duration-300"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        className="w-4 h-4 fill-current text-gray-300"
                        aria-hidden="true"
                      >
                        <path d={s.path} />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick-response badge */}
            <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm flex items-center gap-4">
              <div className="w-3 h-3 rounded-full bg-paramarsh-green animate-pulse flex-shrink-0" />
              <p className="text-sm text-gray-600 font-sans">
                We typically respond within <span className="font-semibold text-paramarsh-dark">24 hours</span> on business days.
              </p>
            </div>
          </div>

          {/* ── Right: Form ── */}
          <div className="lg:col-span-3 bg-white rounded-xl p-8 md:p-10 shadow-[0_4px_30px_rgba(0,0,0,0.06)] border border-gray-100">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-16 text-center gap-4">
                <div className="w-16 h-16 rounded-full bg-paramarsh-lightGreen flex items-center justify-center mb-2">
                  <Send className="w-7 h-7 text-paramarsh-green" />
                </div>
                <h3 className="text-2xl font-display font-bold text-paramarsh-dark">
                  Message Sent!
                </h3>
                <p className="text-gray-500 font-sans max-w-sm">
                  Thank you for reaching out. Our team will get back to you shortly.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', organization: '', subject: '', message: '' }); }}
                  className="mt-4 text-sm text-paramarsh-green font-medium hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-display font-semibold uppercase tracking-wide text-paramarsh-dark mb-8">
                  Send a Message
                </h3>

                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  {/* Row 1 */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="contact-name" className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                        Full Name <span className="text-paramarsh-green">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Jane Smith"
                        className="px-4 py-3 rounded-md bg-gray-50 border border-gray-200 text-sm font-sans placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-paramarsh-green/40 focus:border-paramarsh-green transition-colors"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="contact-email" className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                        Email Address <span className="text-paramarsh-green">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="jane@example.com"
                        className="px-4 py-3 rounded-md bg-gray-50 border border-gray-200 text-sm font-sans placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-paramarsh-green/40 focus:border-paramarsh-green transition-colors"
                      />
                    </div>
                  </div>

                  {/* Row 2 */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="contact-org" className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      Organization / Company
                    </label>
                    <input
                      id="contact-org"
                      type="text"
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      placeholder="Your organization (optional)"
                      className="px-4 py-3 rounded-md bg-gray-50 border border-gray-200 text-sm font-sans placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-paramarsh-green/40 focus:border-paramarsh-green transition-colors"
                    />
                  </div>

                  {/* Row 3 */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="contact-subject" className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      Subject <span className="text-paramarsh-green">*</span>
                    </label>
                    <select
                      id="contact-subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="px-4 py-3 rounded-md bg-gray-50 border border-gray-200 text-sm font-sans text-gray-700 focus:outline-none focus:ring-2 focus:ring-paramarsh-green/40 focus:border-paramarsh-green transition-colors appearance-none"
                    >
                      <option value="" disabled>Select a topic…</option>
                      <option value="partnership">Partnership &amp; Collaboration</option>
                      <option value="research">Research &amp; Projects</option>
                      <option value="media">Media &amp; Press</option>
                      <option value="careers">Careers &amp; Volunteering</option>
                      <option value="general">General Inquiry</option>
                    </select>
                  </div>

                  {/* Row 4 */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="contact-message" className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      Message <span className="text-paramarsh-green">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us how we can help or collaborate…"
                      className="px-4 py-3 rounded-md bg-gray-50 border border-gray-200 text-sm font-sans placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-paramarsh-green/40 focus:border-paramarsh-green transition-colors resize-none"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group self-start inline-flex items-center gap-2 bg-paramarsh-green text-white font-medium text-sm px-8 py-3.5 rounded hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-paramarsh-green/30 transition-all shadow-md hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                        </svg>
                        Sending…
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

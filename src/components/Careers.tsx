

const values = [
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" strokeLinecap="round" />
        <path d="M12 6v6l4 2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Mission-First Culture',
    desc: 'Every decision we make traces back to impact. We work on problems that matter.',
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Collaborative by Design',
    desc: 'Flat hierarchies, open communication, and shared ownership define how we work.',
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'High Growth Trajectory',
    desc: 'Steep learning curves, real responsibilities, and a fast-expanding global platform.',
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" strokeLinecap="round" />
      </svg>
    ),
    title: 'Global Reach',
    desc: 'Work with partners, governments, and communities across 40+ countries.',
  },
];



const Careers = () => {

  return (
    <section id="careers" className="w-full bg-[#f7f9f8] py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* ── Header ── */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start mb-20">
          <div className="lg:w-2/5">
            <div className="section-label mb-3">Join the Team</div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-paramarsh-dark tracking-tight leading-tight mb-5">
              Build a career<br />that matters.
            </h2>
            <p className="text-lg text-gray-500 font-sans leading-relaxed">
              We're a small, ambitious team working on some of the most pressing challenges of our time. If you want your work to count — you're in the right place.
            </p>
            <a
              href="#contact"
              className="mt-7 inline-flex items-center gap-2 bg-paramarsh-green text-white text-sm font-semibold px-6 py-3 rounded-full hover:bg-green-600 transition-all hover:-translate-y-0.5 hover:shadow-md"
            >
              Get in Touch
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>

          {/* Hero image */}
          <div className="lg:w-3/5 w-full relative">
            <div
              aria-hidden
              className="absolute inset-0 translate-x-3 translate-y-3 rounded-[20px] opacity-20 pointer-events-none"
              style={{ background: '#27ae60' }}
            />
            <div className="relative overflow-hidden rounded-[20px] shadow-[0_20px_60px_rgba(0,0,0,0.10)]">
              <img
                src="/careers-hero.png"
                alt="Paramarsh team collaborating in a bright modern workspace"
                className="w-full h-72 lg:h-96 object-cover object-center"
              />
              {/* Overlay badge */}
              <div className="absolute bottom-5 left-5">
                <div className="bg-white/90 backdrop-blur-sm rounded-xl px-4 py-3 shadow-sm flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-paramarsh-green animate-pulse" />
                  <span className="text-xs font-display font-bold text-paramarsh-dark uppercase tracking-wider">
                    We're Hiring
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Why Join Us ── */}
        <div className="mb-24">
          <div className="section-label mb-3">Why Paramarsh</div>
          <h3 className="text-2xl md:text-3xl font-display font-bold text-paramarsh-dark tracking-tight mb-10">
            What makes us different
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-[0_2px_16px_rgba(0,0,0,0.04)] card-lift"
              >
                <div className="w-10 h-10 rounded-full bg-paramarsh-green/10 text-paramarsh-green flex items-center justify-center mb-5">
                  {v.icon}
                </div>
                <h4 className="text-base font-display font-bold text-paramarsh-dark mb-2 tracking-tight">
                  {v.title}
                </h4>
                <p className="text-sm text-gray-500 font-sans leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>


        {/* ── CTA Banner ── */}
        <div className="mt-16 rounded-2xl bg-paramarsh-subDark px-8 py-12 md:px-14 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-2xl md:text-3xl font-display font-bold text-white tracking-tight mb-2">
              Don't see the right role?
            </h3>
            <p className="text-gray-400 font-sans text-base">
              We're always looking for exceptional people. Send us a speculative application.
            </p>
          </div>
          <a
            href="#contact"
            className="flex-shrink-0 inline-flex items-center gap-2 bg-paramarsh-green text-white text-sm font-semibold px-7 py-3.5 rounded-full hover:bg-green-600 transition-all hover:-translate-y-0.5 hover:shadow-lg"
          >
            Get in Touch
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
};

export default Careers;

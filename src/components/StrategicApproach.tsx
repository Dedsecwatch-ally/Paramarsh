const pillars = [
  {
    number: '01',
    title: 'Research-Driven Insights',
    desc: 'Every solution starts with rigorous analysis. We combine empirical data with deep domain expertise to surface what actually works.',
  },
  {
    number: '02',
    title: 'Innovative Solutions',
    desc: 'We design frameworks that bridge traditional development and modern innovation — scalable, adaptable, and built for real-world impact.',
  },
  {
    number: '03',
    title: 'Scaling Sustainability',
    desc: 'By aligning with the UN SDGs, we build partnerships that compound over time — turning isolated wins into systemic, lasting change.',
  },
];

const StrategicApproach = () => {
  return (
    <section id="approach" className="w-full bg-paramarsh-subDark py-28 relative overflow-hidden">
      {/* Decorative ring */}
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -left-32 w-96 h-96 rounded-full border border-white/5"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-16 -left-16 w-64 h-64 rounded-full border border-white/5"
      />

      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-20">
          <div className="section-label mb-3 text-paramarsh-green">How We Work</div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white tracking-tight mb-5">
            Our Strategic Approach
          </h2>
          <p className="text-gray-400 font-sans text-lg leading-relaxed">
            Research, innovation, and scale — three pillars that underpin everything we do.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((p) => (
            <div
              key={p.number}
              className="group bg-white/5 border border-white/8 rounded-2xl p-8 flex flex-col justify-between card-lift hover:bg-white/10 transition-colors duration-300"
            >
              <div>
                <span className="text-5xl font-display font-bold text-white/10 leading-none select-none">
                  {p.number}
                </span>
                <h3 className="mt-5 text-xl font-display font-semibold text-white tracking-tight mb-4">
                  {p.title}
                </h3>
                <p className="text-gray-400 font-sans text-sm leading-relaxed">
                  {p.desc}
                </p>
              </div>
              <a
                href="#"
                className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-paramarsh-green link-underline w-fit"
              >
                Learn More
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StrategicApproach;

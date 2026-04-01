const stats = [
  { value: '40+', label: 'Countries reached' },
  { value: '120+', label: 'Research projects' },
  { value: '80+', label: 'Partner organisations' },
];

const About = () => {
  return (
    <section id="about" className="w-full bg-white py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Top row */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 mb-20">
          <div className="lg:w-2/5">
            <div className="section-label mb-3">Who We Are</div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-paramarsh-dark tracking-tight leading-tight">
              About<br />Paramarsh
            </h2>
          </div>

          <div className="lg:w-3/5 flex flex-col gap-6 justify-center">
            <p className="text-lg text-gray-600 font-sans leading-relaxed">
              Paramarsh is a social enterprise committed to advancing sustainable development at a systems level. We combine rigorous research with cross-sector collaboration to create solutions that are both evidence-based and scalable.
            </p>
            <p className="text-lg text-gray-600 font-sans leading-relaxed">
              Our work is grounded in the UN Sustainable Development Goals — a shared blueprint for a more equitable and resilient world.
            </p>
            <a
              href="#contact"
              className="self-start inline-flex items-center gap-2 text-sm font-semibold text-paramarsh-green link-underline mt-2"
            >
              Work with us
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-gray-100 rounded-2xl overflow-hidden mb-20 shadow-sm">
          {stats.map((s) => (
            <div key={s.label} className="bg-white px-10 py-10 flex flex-col gap-1">
              <span className="text-4xl font-display font-bold text-paramarsh-dark">{s.value}</span>
              <span className="text-sm text-gray-500 font-sans">{s.label}</span>
            </div>
          ))}
        </div>

        {/* Full-width image */}
        <div className="overflow-hidden rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] group">
          <img
            src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
            alt="Sustainable Architecture"
            className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.02]"
          />
        </div>
      </div>
    </section>
  );
};

export default About;

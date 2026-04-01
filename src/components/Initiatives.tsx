const initiatives = [
  {
    image: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tag: 'Climate',
    title: 'Urban Resilience Project',
    desc: 'Mapping climate vulnerability across 12 cities to build adaptive infrastructure strategies.',
  },
  {
    image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tag: 'Energy',
    title: 'Clean Energy Access',
    desc: 'Accelerating off-grid solar deployment in underserved rural communities across South Asia.',
  },
  {
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tag: 'Research',
    title: 'SDG Indicators Lab',
    desc: 'Developing open-source measurement frameworks to track SDG progress at the local level.',
  },
  {
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tag: 'Innovation',
    title: 'Circular Economy Pilots',
    desc: 'Piloting zero-waste manufacturing models with SMEs in emerging market economies.',
  },
  {
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tag: 'Collaboration',
    title: 'Cross-Sector Dialogues',
    desc: 'Convening governments, NGOs, and industry around shared sustainability commitments.',
  },
  {
    image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tag: 'Community',
    title: 'Local Impact Fund',
    desc: 'Channeling micro-grants to grassroots initiatives with measurable development outcomes.',
  },
];

const Initiatives = () => {
  return (
    <section id="initiatives" className="w-full bg-[#f7f9f8] py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="section-label mb-3">What We're Building</div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-paramarsh-dark tracking-tight">
              Our Initiatives
            </h2>
          </div>
          <a href="#contact" className="link-underline text-sm font-medium text-gray-500 hover:text-paramarsh-dark self-start md:self-end">
            Partner with us →
          </a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {initiatives.map((item, i) => (
            <div
              key={i}
              className="group bg-white rounded-2xl overflow-hidden shadow-[0_2px_16px_rgba(0,0,0,0.05)] card-lift border border-gray-100"
            >
              {/* Image */}
              <div className="overflow-hidden h-52">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              {/* Content */}
              <div className="p-6">
                <span className="inline-block text-xs font-bold font-display tracking-widest text-paramarsh-green bg-paramarsh-green/10 px-2.5 py-1 rounded-full mb-3">
                  {item.tag}
                </span>
                <h3 className="text-lg font-display font-bold text-paramarsh-dark mb-2 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 font-sans leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Initiatives;

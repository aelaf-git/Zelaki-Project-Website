export default function TrustedBy() {
  const partners = [
    { name: 'Arizona State University', category: 'Academic' },
    { name: 'Addis Ababa University (AAiT)', category: 'Academic' },
    { name: 'University of Gondar', category: 'Academic' },
    { name: 'Debark University', category: 'Academic' },
    { name: 'Ethiopian Wildlife Conservation Authority', category: 'Government' },
    { name: 'African Wildlife Foundation', category: 'NGO' },
    { name: 'Frankfurt Zoological Society', category: 'NGO' },
    { name: 'Simien Mountains Gelada Research Project', category: 'Research' },
    { name: 'Limalimo Ecolodge', category: 'Industry' },
    { name: 'Debark Association of Women with Disabilities', category: 'Community' },
    { name: 'Techtonga', category: 'Industry' },
    { name: 'National Science Foundation (NSF)', category: 'Funder' },
    { name: 'Fulbright Program', category: 'Funder' },
    { name: 'ASU Global Futures Laboratory', category: 'Academic' },
    { name: 'ASU School of Human Evolution & Social Change', category: 'Academic' },
  ];

  const getCategoryColor = (cat: string) => {
    switch (cat) {
      case 'Academic': return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'Government': return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      case 'NGO': return 'bg-lime-50 text-lime-700 border-lime-200';
      case 'Research': return 'bg-violet-50 text-violet-700 border-violet-200';
      case 'Industry': return 'bg-green-50 text-green-700 border-green-200';
      case 'Community': return 'bg-rose-50 text-rose-700 border-rose-200';
      case 'Funder': return 'bg-teal-50 text-teal-700 border-teal-200';
      default: return 'bg-gray-50 text-gray-700 border-gray-200';
    }
  };

  return (
    <div id="partners" className="mt-32 scroll-mt-10">
      {/* Heading */}
      <div className="max-w-3xl mx-auto text-center mb-12">
        <span className="text-lime-500 font-bold uppercase tracking-widest text-xs sm:text-sm mb-2 block">
          Partners &amp; Supporters
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold font-serif text-darken mb-4">
          Backed by institutions that believe in the mission
        </h2>
        <p className="text-gray-500 text-base sm:text-lg leading-relaxed">
          Zelaki is supported by universities, conservation agencies, funding bodies, and local enterprises across Ethiopia and the United States.
        </p>
      </div>

      {/* Partners Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {partners.map((partner, i) => (
          <div
            key={i}
            className={`flex flex-col items-center justify-center p-5 rounded-xl border transition-all duration-300 hover:shadow-md text-center ${getCategoryColor(partner.category)}`}
            data-aos="fade-up"
            data-aos-delay={i * 30}
          >
            <span className="font-bold text-sm leading-tight mb-2">{partner.name}</span>
            <span className="text-xs font-medium opacity-75 uppercase tracking-wider">{partner.category}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

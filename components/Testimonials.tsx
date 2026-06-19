import Image from 'next/image';

interface TeamMember {
  name: string;
  role: string;
  institution: string;
}

export default function Testimonials() {
  const team: TeamMember[] = [
    {
      name: 'Dr. India Schneider-Crease',
      role: 'Professor & Lead PI',
      institution: 'Arizona State University'
    },
    {
      name: 'Tyler Eglen',
      role: 'Project Manager',
      institution: 'Arizona State University'
    },
    {
      name: 'Dr. Araya Abera',
      role: 'Professor',
      institution: 'Addis Ababa University / AAiT'
    },
    {
      name: 'Shiferaw Asrat',
      role: 'Owner, Limalimo Ecolodge',
      institution: 'Industry Partner'
    },
    {
      name: 'Dr. Samuel Tesfaye',
      role: 'Professor',
      institution: 'University of Gondar'
    }
  ];

  return (
    <div id="team" className="mt-32 scroll-mt-10">
      {/* Heading */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <span className="text-lime-500 font-bold uppercase tracking-widest text-xs sm:text-sm mb-2 block">
          The Team
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold font-serif text-darken mb-4">
          A cross-continental collaboration
        </h2>
        <p className="text-gray-500 text-base sm:text-lg leading-relaxed">
          Engineering students from the United States and Ethiopia work side by side with conservation ecologists and community partners from Arizona State University, Addis Ababa University, Debark University, and Gondar University, designing, building, and iterating on the recycling machines together in Addis Ababa. This cross-continental collaboration is central to Zelaki: we want students to learn by working on real projects that make a difference.
        </p>
      </div>

      {/* Team Media Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        {/* Full Team Image Placeholder */}
        <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-200 group">
          <Image
            className="w-full h-[280px] sm:h-[350px] object-cover filter saturate-50 hover:saturate-100 transition duration-500"
            src="/images/shraded-plastics.jpg"
            alt="Full Zelaki Team"
            width={600}
            height={350}
          />
          <div className="absolute inset-0 bg-black/45 flex items-end p-6">
            <span className="text-white text-xs sm:text-sm font-semibold tracking-wide bg-black/60 px-3 py-1.5 rounded">
              [IMAGE PLACEHOLDER: Group photo of the full team in front of the AAiT sign, from the &quot;Our Team&quot; slide]
            </span>
          </div>
        </div>

        {/* Workshop Image Placeholder */}
        <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-200 group">
          <Image
            className="w-full h-[280px] sm:h-[350px] object-cover filter saturate-50 hover:saturate-100 transition duration-500"
            src="/images/extruder.jpg"
            alt="Workshop Activities"
            width={600}
            height={350}
          />
          <div className="absolute inset-0 bg-black/45 flex items-end p-6">
            <span className="text-white text-xs sm:text-sm font-semibold tracking-wide bg-black/60 px-3 py-1.5 rounded">
              [IMAGE PLACEHOLDER: Workshop photos showing students building machines: welding, assembling the injection molder frame, testing the extruder]
            </span>
          </div>
        </div>
      </div>

      {/* Core Team Members Grid */}
      <div className="bg-slate-50 rounded-3xl p-8 sm:p-12 border border-slate-100">
        <h3 className="text-xl sm:text-2xl font-bold font-serif text-darken mb-8 text-center">Project Leadership</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((member, i) => (
            <div 
              key={i} 
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col justify-between hover:shadow-md transition duration-300"
              data-aos="fade-up"
              data-aos-delay={i * 50}
            >
              <div>
                <h4 className="font-bold text-lg text-darken mb-1 font-serif">{member.name}</h4>
                <p className="text-lime-600 text-sm font-semibold mb-2">{member.role}</p>
              </div>
              <p className="text-gray-500 text-xs border-t border-gray-100 pt-2 mt-2">{member.institution}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

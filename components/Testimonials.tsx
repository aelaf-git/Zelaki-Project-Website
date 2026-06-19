import Image from 'next/image';

interface TeamMember {
  name: string;
  role: string;
  institution: string;
  imageSrc: string;
}

export default function Testimonials() {
  const team: TeamMember[] = [
    {
      name: 'Dr. India Schneider-Crease',
      role: 'Professor & Lead PI',
      institution: 'Arizona State University',
      imageSrc: '/leadership/india-schinder-crease.png',
    },
    {
      name: 'Tyler Eglen',
      role: 'Project Manager',
      institution: 'Arizona State University',
      imageSrc: '/leadership/Tyler-Eglen.jpeg',
    },
    {
      name: 'Dr. Araya Abera',
      role: 'Professor',
      institution: 'Addis Ababa University College of Technology & The Built Environment',
      imageSrc: '/leadership/Dr.Araya-Abera.jpeg',
    },
    {
      name: 'Shiferaw Asrat',
      role: 'Owner, Limalimo Ecolodge',
      institution: 'Industry Partner',
      imageSrc: '/leadership/Shiferaw-Asrat.jpeg',
    },
    {
      name: 'Dr. Samuel Tesfaye',
      role: 'Professor',
      institution: 'University of Gondar',
      imageSrc: '/leadership/Dr.-Samuel-Tesfaye.webp',
    }
  ];

  return (
    <div id="team" className="mt-32 scroll-mt-10">
      {/* Heading */}
      <div className="mb-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold font-serif text-darken mb-2">
            The Team
          </h2>
          <p className="text-lime-500 font-bold uppercase tracking-widest text-xs sm:text-sm">
            A cross-continental collaboration
          </p>
        </div>
        <p className="w-full text-gray-500 text-base sm:text-lg leading-relaxed">
          Engineering students from the United States and Ethiopia work side by side with conservation ecologists and community partners from Arizona State University, Addis Ababa University College of Technology & The Built Environment, Debark University, and Gondar University, designing, building, and iterating on the recycling machines together in Addis Ababa. This cross-continental collaboration is central to Zelaki: we want students to learn by working on real projects that make a difference.
        </p>
      </div>

      {/* Team Media Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        {/* Team Media */}
        <div className="relative rounded-2xl overflow-hidden border border-gray-200">
          <Image
            className="w-full h-[280px] sm:h-[350px] object-cover"
            src="/images/team1.png"
            alt="Full Zelaki Team"
            width={600}
            height={350}
          />
        </div>

        <div className="relative rounded-2xl overflow-hidden border border-gray-200">
          <Image
            className="w-full h-[280px] sm:h-[350px] object-cover"
            src="/images/team2.jpg"
            alt="Workshop Activities"
            width={600}
            height={350}
          />
        </div>
      </div>

      {/* Core Team Members Grid */}
      <div className="bg-neutral-50 rounded-3xl p-8 sm:p-12 border border-neutral-200">
        <h3 className="text-xl sm:text-2xl font-bold font-serif text-darken mb-8 text-center">Project Leadership</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((member, i) => (
            <div 
              key={i} 
              className="bg-white rounded-xl overflow-hidden border border-gray-100 flex flex-col transition duration-300"
              data-aos="fade-up"
              data-aos-delay={i * 50}
            >
              <div className="relative w-full h-72 bg-neutral-100">
                <Image
                  src={member.imageSrc}
                  alt={member.name}
                  fill
                  className="object-contain object-center p-2"
                />
              </div>
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  <h4 className="font-bold text-lg text-darken mb-1 font-serif">{member.name}</h4>
                  <p className="text-lime-600 text-sm font-semibold mb-2">{member.role}</p>
                </div>
                <p className="text-gray-500 text-xs border-t border-gray-100 pt-2 mt-2">{member.institution}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

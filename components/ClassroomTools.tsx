import Image from 'next/image';

interface PipelineStep {
  number: number;
  title: string;
  desc: string;
  placeholderText: string;
  imageSrc: string;
}

export default function ClassroomTools() {
  const steps: PipelineStep[] = [
    {
      number: 1,
      title: 'Collection',
      desc: 'Bottles gathered across Simien Mountains trails and campsites by local teams and coordinated with EWCA and AWF.',
      placeholderText: 'Photo of plastic collection in the park: mule carrying bags, or volunteers gathering bottles',
      imageSrc: '/images/shraded-plastics.jpg'
    },
    {
      number: 2,
      title: 'Shredding',
      desc: 'A shredder designed and built in collaboration with students from the United States and Ethiopia at the Debark University workshop breaks bottles into uniform plastic flakes.',
      placeholderText: 'Photo of the shredder machine, either the CAD render or the built machine in the workshop',
      imageSrc: '/images/extruder.jpg'
    },
    {
      number: 3,
      title: 'Wash & Dry',
      desc: 'Industrial washing and hot-air drying removes contaminants and prepares the flake for molding.',
      placeholderText: 'Photo of the Techtonga plastic dryer unit',
      imageSrc: '/images/shraded-plastics.jpg'
    },
    {
      number: 4,
      title: 'Melt & Form',
      desc: 'Injection molders and extruders, also built by U.S. and Ethiopian student teams, shape the plastic into souvenirs or pull it into fiber, depending on the pipeline.',
      placeholderText: 'Photo of the injection molder or extruder, CAD render or built unit',
      imageSrc: '/images/extruder.jpg'
    },
    {
      number: 5,
      title: 'Sale & Profit',
      desc: 'Community associations sell souvenirs to tourists and the university sells fiber to local markets. Revenue funds conservation and project operations.',
      placeholderText: 'Photo of a finished souvenir product: the coaster, jewelry, or figurine on a clean surface',
      imageSrc: '/images/shraded-plastics.jpg'
    }
  ];

  return (
    <div id="solution" className="mt-32 scroll-mt-10">
      {/* Heading */}
      <div className="max-w-3xl mx-auto text-center mb-20">
        <span className="text-lime-500 font-bold uppercase tracking-widest text-xs sm:text-sm mb-2 block">
          Our Solution
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold font-serif text-darken mb-4">
          A closed-loop pipeline from park to product
        </h2>
        <p className="text-gray-500 text-base sm:text-lg leading-relaxed">
          Zelaki connects plastic collection in the field to a university-run recycling workshop, producing two income streams: tourist-facing souvenirs and locally-sold fiber, both manufactured entirely from waste recovered in the park. The machines that power this pipeline are built in collaboration with students from the United States and Ethiopia.
        </p>
      </div>

      <div className="max-w-3xl mx-auto mb-20 bg-lime-50 border border-lime-200 rounded-2xl p-6 sm:p-8 text-center" data-aos="fade-up">
        <h3 className="text-lg sm:text-xl font-bold font-serif text-darken mb-3">
          Learning by building
        </h3>
        <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
          Student collaboration is central to Zelaki. We bring together engineering students from the United States and Ethiopia to design, weld, assemble, and test real recycling equipment, not in a classroom simulation, but on projects that protect national parks and support local communities. Students learn by doing work that matters.
        </p>
      </div>

      {/* Pipeline Steps Flow */}
      <div className="space-y-24">
        {steps.map((step, index) => {
          const isEven = index % 2 === 1;
          return (
            <div 
              key={step.number} 
              className={`flex flex-col ${isEven ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 md:gap-16`}
            >
              {/* Media Block */}
              <div className="w-full md:w-1/2" data-aos={isEven ? 'fade-left' : 'fade-right'}>
                <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-200 group">
                  <Image
                    className="w-full h-[280px] sm:h-[350px] object-cover filter saturate-50 group-hover:saturate-100 transition duration-500"
                    src={step.imageSrc}
                    alt={step.title}
                    width={600}
                    height={350}
                  />
                  <div className="absolute inset-0 bg-black/45 flex items-end p-6">
                    <span className="text-white text-xs sm:text-sm font-semibold tracking-wide bg-black/60 px-3 py-1.5 rounded">
                      [IMAGE PLACEHOLDER: {step.placeholderText}]
                    </span>
                  </div>
                </div>
              </div>

              {/* Text Block */}
              <div className="w-full md:w-1/2 space-y-4" data-aos={isEven ? 'fade-right' : 'fade-left'}>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-lime-500 text-white flex items-center justify-center font-bold text-xl shadow-md">
                    {step.number}
                  </div>
                  <h3 className="text-2xl font-bold text-darken font-serif">{step.title}</h3>
                </div>
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed pl-1">
                  {step.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

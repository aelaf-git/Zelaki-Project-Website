import Image from 'next/image';

interface PipelineStep {
  number: number;
  title: string;
  desc: string;
  imageSrc: string;
  videoSrc?: string;
}

export default function ClassroomTools() {
  const steps: PipelineStep[] = [
    {
      number: 1,
      title: 'Collection',
      desc: 'Bottles gathered across Simien Mountains trails and campsites by local teams and coordinated with EWCA and AWF.',
      imageSrc: '/images/plastic-bins.jpg'
    },
    {
      number: 2,
      title: 'Shredding',
      desc: 'A shredder designed and built in collaboration with students from the United States and Ethiopia at the Debark University workshop breaks bottles into uniform plastic flakes.',
      imageSrc: '/images/extruder.jpg',
      videoSrc: '/videos/SHREDDER.mp4',
    },
    {
      number: 3,
      title: 'Wash & Dry',
      desc: 'Industrial washing and hot-air drying removes contaminants and prepares the flake for molding.',
      imageSrc: '/images/shraded-plastics.jpg'
    },
    {
      number: 4,
      title: 'Melt & Form',
      desc: 'Injection molders and extruders, also built by U.S. and Ethiopian student teams, shape the plastic into souvenirs or pull it into fiber, depending on the pipeline.',
      imageSrc: '/images/extruder.jpg'
    },
    {
      number: 5,
      title: 'Sale & Profit',
      desc: 'Community associations sell souvenirs to tourists and the university sells fiber to local markets. Revenue funds conservation and project operations.',
      imageSrc: '/images/shraded-plastics.jpg'
    }
  ];

  return (
    <div id="solution" className="mt-32 scroll-mt-10">
      {/* Heading */}
      <div className="text-center max-w-screen-md mx-auto mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold font-serif text-darken mb-2">
          Our Solution
        </h2>
        <p className="text-lime-500 font-bold uppercase tracking-widest text-xs sm:text-sm mb-4">
          A closed-loop pipeline from park to product
        </p>
      </div>

      <div className="space-y-12">
        <p
          className="w-full text-gray-600 text-base sm:text-lg lg:text-xl leading-relaxed"
          data-aos="fade-up"
        >
          Zelaki connects plastic collection in the field to a university-run recycling workshop, producing tourist souvenirs and locally sold fiber from park waste. Engineering students from the United States and Ethiopia build the machines that power this pipeline, learning hands-on by designing, welding, and testing real equipment on projects that protect national parks and support local communities.
        </p>

        <div
          className="relative w-full rounded-2xl overflow-hidden border border-gray-200 bg-white"
          data-aos="fade-up"
        >
          <Image
            src="/images/process.png"
            alt="Zelaki recycling process from collection to sale"
            width={1400}
            height={800}
            className="w-full h-auto object-contain"
            priority
          />
        </div>
      </div>

      {/* Pipeline Steps Flow */}
      <div className="space-y-24 mt-16">
        {steps.map((step, index) => {
          const isEven = index % 2 === 1;
          return (
            <div 
              key={step.number} 
              className={`flex flex-col ${isEven ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 md:gap-16`}
            >
              {/* Media Block */}
              <div className="w-full md:w-1/2" data-aos={isEven ? 'fade-left' : 'fade-right'}>
                <div className="relative rounded-2xl overflow-hidden border border-gray-200 bg-black">
                  {step.videoSrc ? (
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="auto"
                      poster={step.imageSrc}
                      className="w-full h-[280px] sm:h-[350px] object-cover pointer-events-none"
                      aria-hidden="true"
                    >
                      <source src={step.videoSrc} type="video/mp4" />
                    </video>
                  ) : (
                    <Image
                      className="w-full h-[280px] sm:h-[350px] object-cover"
                      src={step.imageSrc}
                      alt={step.title}
                      width={600}
                      height={350}
                    />
                  )}
                </div>
              </div>

              {/* Text Block */}
              <div className="w-full md:w-1/2 space-y-4" data-aos={isEven ? 'fade-right' : 'fade-left'}>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-lime-500 text-white flex items-center justify-center font-bold text-xl">
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

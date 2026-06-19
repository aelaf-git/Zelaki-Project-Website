import Image from 'next/image';

export default function About() {
  return (
    <div className="mt-28 scroll-mt-10" id="problem">
      {/* Heading */}
      <div className="text-center max-w-screen-md mx-auto mb-16">
        <span className="text-lime-500 font-bold uppercase tracking-widest text-xs sm:text-sm mb-2 block">
          The Problem
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold font-serif text-darken mb-4">
          A UNESCO World Heritage site drowning in plastic
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 items-start">
        {/* Left Column - Copy & Video */}
        <div className="w-full lg:w-7/12 space-y-8" data-aos="fade-right">
          <div className="space-y-6 text-gray-600 text-base sm:text-lg leading-relaxed">
            <p>
              Tourist traffic into the Simien Mountains brings hundreds of thousands of plastic bottles each year. Without any formal collection infrastructure, this waste ends up in open burn pits and scattered across the highland plateau, ingested by gelada baboons and walia ibex, contaminating water sources, and threatening the park&apos;s UNESCO World Heritage status.
            </p>
            <p>
              The downstream economic impact is equally severe: a polluted park drives away the ecotourists whose spending is the primary income for surrounding communities.
            </p>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-lg border border-gray-200 bg-black">
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              poster="/images/problem2.JPG"
              className="w-full h-[280px] sm:h-[320px] object-cover pointer-events-none"
              aria-hidden="true"
            >
              <source src="/videos/problem1.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

        {/* Right Column - Photo & Callout Card */}
        <div className="w-full lg:w-5/12 space-y-8" data-aos="fade-left">
          <div className="relative rounded-2xl overflow-hidden shadow-lg border border-gray-200">
            <Image
              className="w-full h-[280px] sm:h-[320px] object-cover"
              src="/images/problem2.JPG"
              alt="Simien Mountains highland landscape"
              width={600}
              height={400}
            />
          </div>

          {/* Callout Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border-l-8 border-lime-500 relative overflow-hidden">
            <div className="absolute right-0 top-0 translate-x-4 -translate-y-4 opacity-5 text-gray-800 text-9xl font-bold select-none font-serif">
              750
            </div>
            <div className="flex items-baseline space-x-2 mb-2">
              <span className="text-5xl font-extrabold text-darken font-serif">750</span>
              <span className="text-base sm:text-lg font-semibold text-lime-600">cubic metres per year</span>
            </div>
            <p className="text-gray-600 text-base leading-relaxed">
              That&apos;s enough plastic to fill 121 minibuses, discarded every year inside one of Africa&apos;s most biodiverse highland ecosystems.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

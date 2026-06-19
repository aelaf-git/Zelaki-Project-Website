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
        {/* Left Column - Copy & Close-up Photo */}
        <div className="w-full lg:w-7/12 space-y-8" data-aos="fade-right">
          <div className="space-y-6 text-gray-600 text-base sm:text-lg leading-relaxed">
            <p>
              Tourist traffic into the Simien Mountains brings hundreds of thousands of plastic bottles each year. Without any formal collection infrastructure, this waste ends up in open burn pits and scattered across the highland plateau — ingested by gelada baboons and walia ibex, contaminating water sources, and threatening the park's UNESCO World Heritage status.
            </p>
            <p>
              The downstream economic impact is equally severe: a polluted park drives away the ecotourists whose spending is the primary income for surrounding communities.
            </p>
          </div>

          {/* Close-up image placeholder */}
          <div className="relative rounded-2xl overflow-hidden shadow-lg border border-gray-200">
            <Image
              className="w-full h-[280px] object-cover filter saturate-50 hover:saturate-100 transition duration-300"
              src="/images/shraded-plastics.jpg"
              alt="Plastic waste in the park"
              width={600}
              height={300}
            />
            <div className="absolute inset-0 bg-black/40 flex items-end p-6">
              <span className="text-white text-xs sm:text-sm font-semibold tracking-wide bg-black/60 px-3 py-1.5 rounded">
                [IMAGE PLACEHOLDER: Close-up photo of plastic waste in the park — scattered bottles, burn pit, or a mule carrying collection bags]
              </span>
            </div>
          </div>
        </div>

        {/* Right Column - Baboons Photo & Callout Card */}
        <div className="w-full lg:w-5/12 space-y-8" data-aos="fade-left">
          {/* Foraging Photo */}
          <div className="relative rounded-2xl overflow-hidden shadow-lg border border-gray-200">
            <Image
              className="w-full h-[280px] object-cover filter saturate-50 hover:saturate-100 transition duration-300"
              src="/images/extruder.jpg"
              alt="Gelada baboons foraging"
              width={600}
              height={300}
            />
            <div className="absolute inset-0 bg-black/40 flex items-end p-6">
              <span className="text-white text-xs sm:text-sm font-semibold tracking-wide bg-black/60 px-3 py-1.5 rounded">
                [IMAGE PLACEHOLDER: Photo of gelada baboons foraging through a burn pit filled with plastic bottles and trash — from the presentation's "Our Beginnings" slide]
              </span>
            </div>
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
              That's enough plastic to fill 121 minibuses — discarded every year inside one of Africa's most biodiverse highland ecosystems.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

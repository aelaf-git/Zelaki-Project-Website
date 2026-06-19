import Image from 'next/image';

export default function Integrations() {
  return (
    <div id="vision" className="mt-32 scroll-mt-10 flex flex-col lg:flex-row items-center gap-12">
      {/* Map Illustration Placeholder */}
      <div className="w-full lg:w-1/2" data-aos="fade-right">
        <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-200 group">
          <Image
            className="w-full h-[350px] sm:h-[450px] object-cover filter saturate-50 hover:saturate-100 transition duration-500"
            src="/images/extruder.jpg"
            alt="Ethiopia Workshop Expansion Map"
            width={600}
            height={450}
          />
          <div className="absolute inset-0 bg-black/45 flex items-end p-6">
            <span className="text-white text-xs sm:text-sm font-semibold tracking-wide bg-black/60 px-3 py-1.5 rounded">
              [IMAGE PLACEHOLDER: Map of Ethiopia with pins marking current and planned Zelaki workshop locations — from the &quot;Our Vision&quot; slide]
            </span>
          </div>
        </div>
      </div>

      {/* Vision Content */}
      <div className="w-full lg:w-1/2 space-y-6" data-aos="fade-left">
        <div>
          <span className="text-lime-500 font-bold uppercase tracking-widest text-xs sm:text-sm mb-2 block">
            Our Vision
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif text-darken mb-4">
            Starting in the Simiens. Built to scale across Ethiopia.
          </h2>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            The Zelaki model is designed to replicate. Each new partner university becomes a recycling hub for a nearby national park or conservation area. The long-term vision is a national network — linking ecotourism waste streams to local manufacturing workshops at universities across Ethiopia.
          </p>
        </div>

        {/* Location Lists */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-gray-100">
          {/* Current Locations */}
          <div className="space-y-3">
            <h4 className="font-bold text-gray-800 text-base flex items-center space-x-2">
              <span className="w-2.5 h-2.5 rounded-full bg-green-500 inline-block animate-pulse" />
              <span>Current Locations</span>
            </h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center space-x-2">
                <span className="text-green-500">✓</span>
                <span>Debark (Simien Mountains)</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-green-500">✓</span>
                <span>Addis Ababa (AAiT Workshop)</span>
              </li>
            </ul>
          </div>

          {/* Future Expansion */}
          <div className="space-y-3">
            <h4 className="font-bold text-gray-800 text-base flex items-center space-x-2">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-500 inline-block" />
              <span>Future Expansion</span>
            </h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center space-x-2">
                <span className="text-blue-500">✦</span>
                <span>Mekelle University</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-blue-500">✦</span>
                <span>Wollo University</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-blue-500">✦</span>
                <span>Ambo University</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-blue-500">✦</span>
                <span>Unity Park</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

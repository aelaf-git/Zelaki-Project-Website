import Image from 'next/image';

export default function Hero() {
  return (
    <div className="relative bg-slate-900 min-h-[85vh] flex flex-col justify-between overflow-hidden">
      {/* Background Image Placeholder */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/shraded-plastics.jpg"
          alt="Simien Mountains Landscape Placeholder"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/80 to-slate-900" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-screen-xl px-8 mx-auto flex flex-col items-center justify-center text-center flex-grow pt-32 pb-20">
        {/* Eyebrow */}
        <span className="text-lime-400 font-bold uppercase tracking-widest text-xs sm:text-sm mb-4 block" data-aos="fade-up">
          Simien Mountains · Ethiopia
        </span>
        
        {/* Headline */}
        <h1 
          className="max-w-4xl text-white text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight mb-6 font-serif"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Turning plastic waste into <span className="text-lime-400">highland heritage</span>
        </h1>
        
        {/* Subheadline */}
        <p 
          className="max-w-3xl text-slate-200 text-base sm:text-lg md:text-xl leading-relaxed mb-10"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Zelaki collects plastic bottles threatening Ethiopia's national parks and transforms them into recycled souvenirs and fiber — funding conservation, employing communities, and cleaning the highlands one bottle at a time.
        </p>
        
        {/* Buttons */}
        <div 
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 w-full"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <a
            href="#solution"
            className="w-full sm:w-auto bg-lime-500 text-white font-bold text-lg rounded-full py-4 px-8 shadow-lg transform transition hover:scale-105 duration-200 hover:bg-lime-600 focus:outline-none text-center"
          >
            See How It Works
          </a>
          <a
            href="#get-involved"
            className="w-full sm:w-auto bg-transparent border-2 border-white text-white font-bold text-lg rounded-full py-4 px-8 shadow-md transform transition hover:scale-105 duration-200 hover:bg-white hover:text-slate-900 focus:outline-none text-center"
          >
            Partner With Us
          </a>
        </div>
      </div>

      {/* Wave divider transitioning to the next section */}
      <div className="text-slate-900 z-10 relative">
        <svg className="h-12 sm:h-20 md:h-28 w-full" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z" fill="currentColor" />
        </svg>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <div className="relative bg-black min-h-[85vh] flex flex-col justify-between overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          aria-hidden="true"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/40 to-black/80" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-screen-xl px-8 mx-auto flex flex-col items-center justify-center text-center flex-grow pt-32 pb-20">
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
          className="max-w-2xl text-neutral-100 text-base sm:text-lg leading-relaxed mb-8"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          We collect plastic from Ethiopia&apos;s national parks and turn it into recycled souvenirs and fiber, with machines built by students from the United States and Ethiopia.
        </p>
        
        {/* Buttons */}
        <div 
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 w-full"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <a
            href="#solution"
            className="w-full sm:w-auto bg-lime-500 text-white font-bold text-lg rounded-full py-4 px-8 transition duration-200 hover:bg-lime-600 focus:outline-none text-center"
          >
            See How It Works
          </a>
          <a
            href="#get-involved"
            className="w-full sm:w-auto bg-transparent border-2 border-white text-white font-bold text-lg rounded-full py-4 px-8 transition duration-200 hover:bg-white hover:text-black focus:outline-none text-center"
          >
            Partner With Us
          </a>
        </div>
      </div>

      {/* Wave divider transitioning to the next section */}
      <div className="text-black z-10 relative">
        <svg className="h-12 sm:h-20 md:h-28 w-full" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z" fill="currentColor" />
        </svg>
      </div>
    </div>
  );
}

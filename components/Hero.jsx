import Image from 'next/image';

export default function Hero() {
  return (
    <div className="bg-cream">
      <div className="max-w-screen-xl px-8 mx-auto flex flex-col lg:flex-row items-start">
        {/* Left Col */}
        <div className="flex flex-col w-full lg:w-6/12 justify-center lg:pt-24 items-start text-center lg:text-left mb-5 md:mb-0">
          <h1 className="my-4 text-5xl font-bold leading-tight text-darken">
            <span className="text-yellow-500">Studying</span> Online is now much easier
          </h1>
          <p className="leading-normal text-2xl mb-8">
            Skilline is an interesting platform that will teach you in more an interactive way
          </p>
          <div className="w-full md:flex items-center justify-center lg:justify-start md:space-x-5">
            <button className="lg:mx-0 bg-yellow-500 text-white text-xl font-bold rounded-full py-4 px-9 focus:outline-none transform transition hover:scale-110 duration-300 ease-in-out">
              Join for free
            </button>
            <div className="flex items-center justify-center space-x-3 mt-5 md:mt-0 focus:outline-none transform transition hover:scale-110 duration-300 ease-in-out cursor-pointer">
              <button className="bg-white w-14 h-14 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 ml-2" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.5751 12.8097C23.2212 13.1983 23.2212 14.135 22.5751 14.5236L1.51538 27.1891C0.848878 27.5899 5.91205e-07 27.1099 6.25202e-07 26.3321L1.73245e-06 1.00123C1.76645e-06 0.223477 0.848877 -0.256572 1.51538 0.14427L22.5751 12.8097Z" fill="#23BDEE" />
                </svg>
              </button>
              <span>Watch how it works</span>
            </div>
          </div>
        </div>

        {/* Right Col */}
        <div className="w-full lg:w-6/12 lg:-mt-10 relative" id="girl">
          <Image
            className="w-10/12 mx-auto 2xl:-mb-20"
            src="/img/girl.png"
            alt="Student learning online"
            width={600}
            height={700}
            priority
          />
          {/* Calendar */}
          <div className="absolute top-20 -left-6 sm:top-32 sm:left-10 md:top-40 md:left-16 lg:-left-0 lg:top-52 floating-4">
            <Image className="bg-white bg-opacity-80 rounded-lg h-12 sm:h-16 w-auto" src="/img/calendar.svg" alt="Calendar" width={100} height={64} />
          </div>
          {/* Red chart */}
          <div className="absolute top-20 right-10 sm:right-24 sm:top-28 md:top-36 md:right-32 lg:top-32 lg:right-16 floating">
            <svg className="h-16 sm:h-24" viewBox="0 0 149 149" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#filter0_d)">
                <rect x="40" y="32" width="69" height="69" rx="14" fill="#F3627C" />
              </g>
              <rect x="51.35" y="44.075" width="47.3" height="44.85" rx="8" fill="white" />
              <path d="M74.5 54.425V78.575" stroke="#F25471" strokeWidth="4" strokeLinecap="round" />
              <path d="M65.875 58.7375L65.875 78.575" stroke="#F25471" strokeWidth="4" strokeLinecap="round" />
              <path d="M83.125 63.9125V78.575" stroke="#F25471" strokeWidth="4" strokeLinecap="round" />
              <defs>
                <filter id="filter0_d" x="0" y="0" width="149" height="149" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset dy="8" />
                  <feGaussianBlur stdDeviation="20" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0.825 0 0 0 0 0.300438 0 0 0 0 0.396718 0 0 0 0.26 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                </filter>
              </defs>
            </svg>
          </div>
          {/* UX Class */}
          <div className="absolute bottom-14 -left-4 sm:left-2 sm:bottom-20 lg:bottom-24 lg:-left-4 floating">
            <Image className="bg-white bg-opacity-80 rounded-lg h-20 sm:h-28 w-auto" src="/img/ux-class.svg" alt="UX Class" width={150} height={112} />
          </div>
          {/* Congrats */}
          <div className="absolute bottom-20 md:bottom-48 lg:bottom-52 -right-6 lg:right-8 floating-4">
            <Image className="bg-white bg-opacity-80 rounded-lg h-12 sm:h-16 w-auto" src="/img/congrat.svg" alt="Congratulations" width={150} height={64} />
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="text-white -mt-14 sm:-mt-24 lg:-mt-36 z-40 relative">
        <svg className="xl:h-40 xl:w-full" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z" fill="currentColor" />
        </svg>
        <div className="bg-white w-full h-20 -mt-px" />
      </div>
    </div>
  );
}

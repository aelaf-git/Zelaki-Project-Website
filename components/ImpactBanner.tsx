export default function ImpactBanner() {
  return (
    <div className="bg-black text-white w-full py-16 px-8 relative">
      <div className="max-w-screen-xl mx-auto flex flex-col items-center text-center">
        {/* Label */}
        <h2 className="text-3xl sm:text-4xl font-bold font-serif text-white mb-2">
          The scale of the problem
        </h2>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-8 items-center justify-center w-full max-w-4xl mb-8">
          {/* Stat 1 */}
          <div className="flex flex-col items-center p-6 bg-neutral-900/60 rounded-2xl border border-neutral-800/50" data-aos="fade-right">
            <span className="text-4xl sm:text-5xl font-extrabold text-lime-500 mb-2 font-serif">
              750 m³
            </span>
            <span className="text-neutral-300 text-sm sm:text-base font-medium">
              of plastic bottles per year
            </span>
          </div>

          {/* Equals Symbol */}
          <div className="text-3xl sm:text-4xl font-light text-neutral-400 select-none py-2" data-aos="fade-in">
            <div className="hidden md:block">＝</div>
            <div className="md:hidden">EQUALS</div>
          </div>

          {/* Stat 2 */}
          <div className="flex flex-col items-center p-6 bg-neutral-900/60 rounded-2xl border border-neutral-800/50" data-aos="fade-left">
            <span className="text-4xl sm:text-5xl font-extrabold text-lime-500 mb-2 font-serif">
              121
            </span>
            <span className="text-neutral-300 text-sm sm:text-base font-medium">
              minibuses full of waste
            </span>
          </div>
        </div>

        {/* Supporting Copy */}
        <p className="max-w-2xl text-neutral-300 text-base sm:text-lg leading-relaxed px-4" data-aos="fade-up">
          Generated annually inside Simien Mountains National Park by tourists, with no collection system in place.
        </p>
      </div>
    </div>
  );
}

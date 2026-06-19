export default function News() {
  return (
    <div id="get-involved" className="mt-32 scroll-mt-10">
      <div className="bg-black rounded-3xl px-8 sm:px-16 py-16 sm:py-20 text-center relative overflow-hidden">
        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold font-serif text-white mb-2">
            Get Involved
          </h2>
          <p className="text-lime-400 font-bold uppercase tracking-widest text-xs sm:text-sm mb-6">
            Join the closed-loop revolution
          </p>
          <p className="text-neutral-300 text-base sm:text-lg leading-relaxed mb-10">
            Whether you&apos;re a university looking to replicate the model, an NGO working in conservation, or a funder interested in circular economy solutions, we want to hear from you.
          </p>

          {/* Primary CTA - Email */}
          <a
            href="mailto:zelaki.plastic@gmail.com"
            className="inline-flex items-center space-x-3 bg-lime-500 text-white font-bold text-lg rounded-full py-4 px-10 transition duration-200 hover:bg-lime-600 focus:outline-none mb-8"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span>zelaki.plastic@gmail.com</span>
          </a>

          {/* Secondary Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
            <a
              href="https://shesc.asu.edu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-white transition border border-neutral-700 rounded-full px-5 py-2"
            >
              ASU SHESC →
            </a>
            <a
              href="https://globalfutures.asu.edu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-white transition border border-neutral-700 rounded-full px-5 py-2"
            >
              ASU Global Futures Lab →
            </a>
            <a
              href="https://www.aait.edu.et"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-white transition border border-neutral-700 rounded-full px-5 py-2"
            >
              CTBE →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

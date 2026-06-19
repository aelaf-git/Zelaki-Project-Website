import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="mt-32 bg-black">
      <div className="max-w-screen-xl mx-auto px-8">
        {/* Top row - Logo & Links */}
        <div className="flex flex-col md:flex-row items-center justify-between py-12 border-b border-neutral-800">
          <div className="flex items-center space-x-3 mb-6 md:mb-0">
            <Image
              src="/images/logo.png"
              alt="Zelaki Logo"
              width={36}
              height={36}
              className="w-9 h-9 object-contain rounded-md"
            />
            <span className="text-white font-bold text-lg">Zelaki · ዘላቂ Project</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-neutral-400">
            <a href="#problem" className="hover:text-white transition">The Problem</a>
            <a href="#solution" className="hover:text-white transition">Our Solution</a>
            <a href="#products" className="hover:text-white transition">Products</a>
            <a href="#team" className="hover:text-white transition">Team</a>
            <a href="#partners" className="hover:text-white transition">Partners</a>
            <a href="#get-involved" className="hover:text-white transition">Get Involved</a>
          </div>
        </div>

        {/* Bottom row - Copyright */}
        <div className="py-8 text-center">
          <p className="text-neutral-400 text-sm">
            &copy; 2025 Zelaki (ዘላቂ) Project · Preserving Ethiopia&apos;s highlands · zelaki.asu.edu
          </p>
        </div>
      </div>
    </footer>
  );
}

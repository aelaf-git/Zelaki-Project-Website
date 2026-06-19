'use client';

import Image from 'next/image';

const partners = [
  { src: '/partnerships/Addis-Ababa-University.png', alt: 'Addis Ababa University' },
  { src: '/partnerships/ASU.jpeg', alt: 'Arizona State University' },
  { src: '/partnerships/Debark-University.jpeg', alt: 'Debark University' },
  { src: '/partnerships/EWCA.jpg', alt: 'Ethiopian Wildlife Conservation Authority' },
  { src: '/partnerships/Gonder-University.jpeg', alt: 'University of Gondar' },
  { src: '/partnerships/simien-mountains-national-park.jpeg', alt: 'Simien Mountains National Park' },
];

export default function TrustedBy() {
  return (
    <div id="partners" className="mt-32 scroll-mt-10">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold font-serif text-darken mb-2">
          Partners &amp; Supporters
        </h2>
        <p className="text-lime-500 font-bold uppercase tracking-widest text-xs sm:text-sm mb-4">
          Backed by institutions that believe in the mission
        </p>
        <p className="text-gray-500 text-base sm:text-lg leading-relaxed">
          Zelaki is supported by universities, conservation agencies, funding bodies, and local enterprises across Ethiopia and the United States.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8">
        {partners.map((partner, i) => (
          <div
            key={partner.src}
            className="relative flex items-center justify-center p-4 sm:p-6 rounded-xl border border-gray-200 bg-white h-32 sm:h-36"
            data-aos="fade-up"
            data-aos-delay={i * 30}
          >
            <div className="relative w-full h-full">
              <Image
                src={partner.src}
                alt={partner.alt}
                fill
                className="object-contain"
                sizes="(max-width: 640px) 50vw, 33vw"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

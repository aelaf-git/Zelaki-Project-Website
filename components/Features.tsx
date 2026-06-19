import Image from 'next/image';

interface Product {
  name: string;
  desc: string;
  imageSrc: string;
}

export default function Features() {
  const products: Product[] = [
    {
      name: 'Coaster',
      desc: 'Injection-molded coaster bearing the walia ibex, the park\'s iconic resident. Sold directly to tourists at Simien Mountains lodges and entry points.',
      imageSrc: '/images/products/coaster.png'
    },
    {
      name: 'Topographic Map',
      desc: '3D-relief map of the Simien plateau, molded from recovered PET plastic. A functional keepsake that tells the story of the landscape.',
      imageSrc: '/images/products/topography-map.png'
    },
    {
      name: 'Jewelry',
      desc: 'Beads and pendants hand-finished by the Debark Association of Women with Disabilities, who add value and earn income from the base souvenir pipeline.',
      imageSrc: '/images/products/jewelry.png'
    },
    {
      name: 'Figurine',
      desc: 'Molded gelada and walia ibex figurines, the park\'s most recognizable wildlife, cast from the same plastic that once threatened them.',
      imageSrc: '/images/products/figurine.png'
    },
    {
      name: 'Recycled Fiber',
      desc: 'PET fiber extruded and sold to local textile markets. The fiber pipeline runs parallel to the souvenir pipeline and creates a circular economy product for the Debark and Gondar markets.',
      imageSrc: '/images/products/recycled-fiber.png'
    }
  ];

  return (
    <div id="products" className="mt-32 scroll-mt-10">
      {/* Heading */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold font-serif text-darken mb-2">
          What We Make
        </h2>
        <p className="text-lime-500 font-bold uppercase tracking-widest text-xs sm:text-sm mb-4">
          Recycled plastic, reimagined as highland craft
        </p>
        <p className="text-gray-500 text-base sm:text-lg leading-relaxed">
          Each product carries the story of its origin: Ethiopian highlands turned into objects visitors take home and communities sell to sustain the park that produced them.
        </p>
      </div>

      {/* Product Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product, i) => (
          <div 
            key={i} 
            className="bg-white rounded-2xl overflow-hidden border border-gray-100 flex flex-col justify-between transition duration-300"
            data-aos="fade-up"
            data-aos-delay={i * 100}
          >
            <div>
              <div className="relative w-full h-[240px] bg-gray-100">
                <Image
                  src={product.imageSrc}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Product Content */}
              <div className="p-6">
                <h3 className="font-bold text-xl text-darken font-serif mb-3">{product.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{product.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

import Image from 'next/image';

interface Product {
  name: string;
  market: string;
  marketType: 'Tourist' | 'International' | 'Local' | 'Tourist / International';
  desc: string;
  imageSrc: string;
}

export default function Features() {
  const products: Product[] = [
    {
      name: 'Coaster',
      market: 'Tourist',
      marketType: 'Tourist',
      desc: 'Injection-molded coaster bearing the walia ibex, the park\'s iconic resident. Sold directly to tourists at Simien Mountains lodges and entry points.',
      imageSrc: '/images/shraded-plastics.jpg'
    },
    {
      name: 'Topographic Map',
      market: 'Tourist / International',
      marketType: 'Tourist / International',
      desc: '3D-relief map of the Simien plateau, molded from recovered PET plastic. A functional keepsake that tells the story of the landscape.',
      imageSrc: '/images/extruder.jpg'
    },
    {
      name: 'Jewelry',
      market: 'International',
      marketType: 'International',
      desc: 'Beads and pendants hand-finished by the Debark Association of Women with Disabilities, who add value and earn income from the base souvenir pipeline.',
      imageSrc: '/images/shraded-plastics.jpg'
    },
    {
      name: 'Figurine',
      market: 'Tourist',
      marketType: 'Tourist',
      desc: 'Molded gelada and walia ibex figurines, the park\'s most recognizable wildlife, cast from the same plastic that once threatened them.',
      imageSrc: '/images/extruder.jpg'
    },
    {
      name: 'Recycled Fiber',
      market: 'Local',
      marketType: 'Local',
      desc: 'PET fiber extruded and sold to local textile markets. The fiber pipeline runs parallel to the souvenir pipeline and creates a circular economy product for the Debark and Gondar markets.',
      imageSrc: '/images/shraded-plastics.jpg'
    }
  ];

  const getBadgeClass = (type: string) => {
    switch (type) {
      case 'Tourist':
        return 'bg-blue-100 text-blue-800';
      case 'Local':
        return 'bg-green-100 text-green-800';
      case 'International':
        return 'bg-indigo-100 text-indigo-800';
      default:
        return 'bg-purple-100 text-purple-800';
    }
  };

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
              <div className="relative w-full h-[220px] bg-gray-100">
                <Image
                  src={product.imageSrc}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Product Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-xl text-darken font-serif">{product.name}</h3>
                  <span className={`text-xs px-2.5 py-1 rounded-full font-semibold ${getBadgeClass(product.marketType)}`}>
                    {product.market}
                  </span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{product.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

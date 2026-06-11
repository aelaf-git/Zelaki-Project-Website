import Image from 'next/image';

export default function TrustedBy() {
  const companies = [
    { name: 'Google', file: 'google.svg', extraClass: '' },
    { name: 'Netflix', file: 'netflix.svg', extraClass: '' },
    { name: 'Airbnb', file: 'airbnb.svg', extraClass: '' },
    { name: 'Amazon', file: 'amazon.svg', extraClass: 'translate-y-2' },
    { name: 'Facebook', file: 'facebook.svg', extraClass: '' },
    { name: 'Grab', file: 'grab.svg', extraClass: '' },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-center mb-3 text-gray-400 font-medium">
        Trusted by 5,000+ Companies Worldwide
      </h2>
      <div className="grid grid-cols-3 lg:grid-cols-6 gap-4 justify-items-center">
        {companies.map((company) => (
          <div key={company.name} className={`transform ${company.extraClass}`}>
            <Image
              className="h-7 w-auto"
              src={`/img/company/${company.file}`}
              alt={company.name}
              width={80}
              height={28}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

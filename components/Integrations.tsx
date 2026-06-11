import Image from 'next/image';

export default function Integrations() {
  return (
    <div className="mt-24 flex flex-col md:flex-row items-start md:space-x-10">
      <div className="md:w-6/12">
        <Image
          className="md:w-8/12 mx-auto h-auto"
          src="/img/integrations.png"
          alt="Integrations"
          width={400}
          height={400}
          style={{ height: 'auto' }}
        />
      </div>
      <div className="md:w-6/12">
        <div className="flex items-center space-x-20 mb-5">
          <span className="border border-gray-300 w-14 absolute" />
          <h3 className="text-gray-400 tracking-widest text-sm">INTEGRATIONS</h3>
        </div>
        <h2 className="font-semibold text-darken text-2xl lg:pr-40">
          200+ educational tools and platform{' '}
          <span className="text-yellow-500">integrations</span>
        </h2>
        <p className="text-gray-500 my-5 lg:pr-20">
          Schoology has every tool your classroom needs and comes pre-integrated with more than 200+ tools, student information systems (SIS), and education platforms.
        </p>
        <button className="px-5 py-3 border border-yellow-500 text-yellow-500 font-medium my-4 focus:outline-none transform transition hover:scale-110 duration-300 ease-in-out rounded-full">
          See All Integrations
        </button>
      </div>
    </div>
  );
}

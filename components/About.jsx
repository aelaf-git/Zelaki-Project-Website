import Image from 'next/image';

export default function About() {
  return (
    <div className="mt-28">
      {/* Heading */}
      <div className="text-center max-w-screen-md mx-auto">
        <h2 className="text-3xl font-bold mb-4">
          What is <span className="text-yellow-500">Skilline?</span>
        </h2>
        <p className="text-gray-500">
          Skilline is a platform that allows educators to create online classes whereby they can store the course materials online; manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place.
        </p>
      </div>

      {/* Cards */}
      <div className="flex flex-col md:flex-row justify-center space-y-5 md:space-y-0 md:space-x-6 lg:space-x-10 mt-7">
        <div className="relative md:w-5/12">
          <Image className="rounded-2xl w-full h-auto" src="/img/Rectangle 19.png" alt="For Instructors" width={600} height={400} />
          <div className="absolute bg-black bg-opacity-20 bottom-0 left-0 right-0 w-full h-full rounded-2xl">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
              <h3 className="uppercase text-white font-bold text-sm lg:text-xl mb-3">FOR INSTRUCTORS</h3>
              <button className="rounded-full text-white border text-xs lg:text-md px-6 py-3 w-full font-medium focus:outline-none transform transition hover:scale-110 duration-300 ease-in-out">
                Start a class today
              </button>
            </div>
          </div>
        </div>

        <div className="relative md:w-5/12">
          <Image className="rounded-2xl w-full h-auto" src="/img/Rectangle 21.png" alt="For Students" width={600} height={400} />
          <div className="absolute bg-black bg-opacity-20 bottom-0 left-0 right-0 w-full h-full rounded-2xl">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
              <h3 className="uppercase text-white font-bold text-sm lg:text-xl mb-3">FOR STUDENTS</h3>
              <button
                className="rounded-full text-white text-xs lg:text-md px-6 py-3 w-full font-medium focus:outline-none transform transition hover:scale-110 duration-300 ease-in-out"
                style={{ background: 'rgba(35, 189, 238, 0.9)' }}
              >
                Enter access code
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Physical vs Online */}
      <div className="sm:flex items-center sm:space-x-8 mt-36">
        <div className="sm:w-1/2 relative">
          <div className="bg-yellow-500 rounded-full absolute w-12 h-12 z-0 -left-4 -top-3 animate-pulse" />
          <h2 className="font-semibold text-2xl relative z-50 text-darken lg:pr-10">
            Everything you can do in a physical classroom,{' '}
            <span className="text-yellow-500">you can do with Skilline</span>
          </h2>
          <p className="py-5 lg:pr-32">
            Skilline&apos;s school management software helps traditional and online schools manage scheduling, attendance, payments and virtual classrooms all in one secure cloud-based system.
          </p>
          <a href="#" className="underline">Learn More</a>
        </div>

        <div className="sm:w-1/2 relative mt-10 sm:mt-0">
          <div style={{ background: '#23BDEE' }} className="floating w-24 h-24 absolute rounded-lg z-0 -top-3 -left-3" />
          <Image
            className="rounded-xl z-40 relative w-full h-auto"
            src="/img/teacher-explaining.png"
            alt="Teacher explaining"
            width={600}
            height={400}
          />
          <button className="bg-white w-14 h-14 rounded-full flex items-center justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 focus:outline-none hover:scale-110 transition duration-300 ease-in-out z-50">
            <svg className="w-5 h-5 ml-1" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.5751 12.8097C23.2212 13.1983 23.2212 14.135 22.5751 14.5236L1.51538 27.1891C0.848878 27.5899 5.91205e-07 27.1099 6.25202e-07 26.3321L1.73245e-06 1.00123C1.76645e-06 0.223477 0.848877 -0.256572 1.51538 0.14427L22.5751 12.8097Z" fill="#23BDEE" />
            </svg>
          </button>
          <div className="bg-yellow-500 w-40 h-40 floating absolute rounded-lg z-10 -bottom-3 -right-3" />
        </div>
      </div>
    </div>
  );
}

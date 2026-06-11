import Image from 'next/image';

export default function ClassroomTools() {
  return (
    <>
      {/* UI Designed for Classroom */}
      <div className="md:flex mt-40 md:space-x-10 items-start">
        <div className="md:w-7/12 relative">
          <div style={{ background: '#33EFA0' }} className="w-32 h-32 rounded-full absolute z-0 left-4 -top-12 animate-pulse" />
          <div style={{ background: '#33D9EF' }} className="w-5 h-5 rounded-full absolute z-0 left-36 -top-12 animate-ping" />
          <Image className="relative z-50 floating w-full h-auto" src="/img/vcall.png" alt="Virtual class call" width={600} height={450} />
          <div style={{ background: '#5B61EB' }} className="w-36 h-36 rounded-full absolute z-0 right-16 -bottom-1 animate-pulse" />
          <div style={{ background: '#F56666' }} className="w-5 h-5 rounded-full absolute z-0 right-52 bottom-1 animate-ping" />
        </div>

        <div className="md:w-5/12 mt-20 md:mt-0 text-gray-500">
          <h2 className="text-2xl font-semibold text-darken lg:pr-40">
            A <span className="text-yellow-500">user interface</span> designed for the classroom
          </h2>
          <div className="flex items-center space-x-5 my-5">
            <div className="flex-shrink bg-white shadow-lg rounded-full p-3 flex items-center justify-center">
              <svg className="w-4 h-4" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="11.8182" height="11.8182" rx="2" fill="#2F327D" />
                <rect y="14.1816" width="11.8182" height="11.8182" rx="2" fill="#2F327D" />
                <rect x="14.7727" width="11.8182" height="11.8182" rx="2" fill="#2F327D" />
                <rect x="14.7727" y="14.1816" width="11.8182" height="11.8182" rx="2" fill="#F48C06" />
              </svg>
            </div>
            <p>Teachers don&apos;t get lost in the grid view and have a dedicated Podium space.</p>
          </div>
          <div className="flex items-center space-x-5 my-5">
            <div className="flex-shrink bg-white shadow-lg rounded-full p-3 flex items-center justify-center">
              <svg className="w-4 h-4" viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="8" y="6" width="20" height="20" rx="2" fill="#2F327D" />
                <rect width="21.2245" height="21.2245" rx="2" fill="#F48C06" />
              </svg>
            </div>
            <p>TA&apos;s and presenters can be moved to the front of the class.</p>
          </div>
          <div className="flex items-center space-x-5 my-5">
            <div className="flex-shrink bg-white shadow-lg rounded-full p-3 flex items-center justify-center">
              <svg className="w-4 h-4" viewBox="0 0 30 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.5 11.375C6.15469 11.375 7.5 9.91758 7.5 8.125C7.5 6.33242 6.15469 4.875 4.5 4.875C2.84531 4.875 1.5 6.33242 1.5 8.125C1.5 9.91758 2.84531 11.375 4.5 11.375ZM25.5 11.375C27.1547 11.375 28.5 9.91758 28.5 8.125C28.5 6.33242 27.1547 4.875 25.5 4.875C23.8453 4.875 22.5 6.33242 22.5 8.125C22.5 9.91758 23.8453 11.375 25.5 11.375ZM27 13H24C23.175 13 22.4297 13.3605 21.8859 13.9445C23.775 15.0668 25.1156 17.093 25.4062 19.5H28.5C29.3297 19.5 30 18.7738 30 17.875V16.25C30 14.4574 28.6547 13 27 13ZM15 13C17.9016 13 20.25 10.4559 20.25 7.3125C20.25 4.16914 17.9016 1.625 15 1.625C12.0984 1.625 9.75 4.16914 9.75 7.3125C9.75 10.4559 12.0984 13 15 13ZM18.6 14.625H18.2109C17.2359 15.1328 16.1531 15.4375 15 15.4375C13.8469 15.4375 12.7688 15.1328 11.7891 14.625H11.4C8.41875 14.625 6 17.2453 6 20.475V21.9375C6 23.2832 7.00781 24.375 8.25 24.375H21.75C22.9922 24.375 24 23.2832 24 21.9375V20.475C24 17.2453 21.5812 14.625 18.6 14.625ZM8.11406 13.9445C7.57031 13.3605 6.825 13 6 13H3C1.34531 13 0 14.4574 0 16.25V17.875C0 18.7738 0.670312 19.5 1.5 19.5H4.58906C4.88438 17.093 6.225 15.0668 8.11406 13.9445Z" fill="#2F327D" />
              </svg>
            </div>
            <p>Teachers can easily see all students and class data at one time.</p>
          </div>
        </div>
      </div>

      {/* Tools for Teachers */}
      <div className="flex flex-col md:flex-row items-center md:space-x-10 mt-16">
        <div className="md:w-1/2 lg:pl-14">
          <h2 className="text-darken font-semibold text-3xl lg:pr-56">
            <span className="text-yellow-500">Tools</span> For Teachers And Learners
          </h2>
          <p className="text-gray-500 my-4 lg:pr-32">
            Class has a dynamic set of teaching tools built to be deployed and used during class. Teachers can handout assignments in real-time for students to complete and submit.
          </p>
        </div>
        <Image className="md:w-1/2 h-auto" src="/img/girl-with-books.png" alt="Girl with books" width={600} height={500} />
      </div>

      {/* Assessments */}
      <div className="mt-20 flex flex-col-reverse md:flex-row items-center md:space-x-10">
        <div className="md:w-6/12">
          <Image className="md:w-11/12 h-auto" src="/img/true-false.png" alt="True or False quiz" width={500} height={400} />
        </div>
        <div className="md:w-6/12 md:transform md:-translate-y-20">
          <h2 className="font-semibold text-darken text-3xl lg:pr-64">
            Assessments, <span className="text-yellow-500">Quizzes</span>, Tests
          </h2>
          <p className="text-gray-500 my-5 lg:pr-52">
            Easily launch live assignments, quizzes, and tests. Student results are automatically entered in the online gradebook.
          </p>
        </div>
      </div>

      {/* Class Management */}
      <div className="flex flex-col md:flex-row items-center mt-12">
        <div className="md:w-5/12">
          <h2 className="text-darken font-semibold text-3xl leading-tight lg:pr-32">
            <span className="text-yellow-500">Class Management</span> Tools for Educators
          </h2>
          <p className="my-5 lg:pr-14">
            Class provides tools to help run and manage the class such as Class Roster, Attendance, and more. With the Gradebook, teachers can review and grade tests and quizzes in real-time.
          </p>
        </div>
        <Image className="md:w-7/12 h-auto" src="/img/gradebook.png" alt="Gradebook" width={700} height={500} />
      </div>

      {/* One-on-One Discussions */}
      <div className="mt-24 flex flex-col-reverse md:flex-row items-center md:space-x-10">
        <div className="md:w-7/12">
          <Image className="md:w-11/12 h-auto" src="/img/discussion.png" alt="Discussion" width={600} height={450} />
        </div>
        <div className="md:w-5/12 md:transform md:-translate-y-6">
          <h2 className="font-semibold text-darken text-3xl lg:pr-64">
            One-on-One <span className="text-yellow-500">Discussions</span>
          </h2>
          <p className="text-gray-500 my-5 lg:pr-24">
            Teachers and teacher assistants can talk with students privately without leaving the Zoom environment.
          </p>
        </div>
      </div>

      <button className="px-5 py-3 border border-yellow-500 text-yellow-500 font-medium my-14 focus:outline-none transform transition hover:scale-110 duration-300 ease-in-out rounded-full mx-auto block">
        See more features
      </button>
    </>
  );
}

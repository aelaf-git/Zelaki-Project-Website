import Image from 'next/image';

interface Article {
  img: string;
  alt: string;
  tag: string;
  title: string;
  excerpt: string;
}

export default function News() {
  const articles: Article[] = [
    {
      img: '/img/children-laptop.png',
      alt: 'Children on laptop',
      tag: 'PRESS RELEASE',
      title: 'Class Technologies Inc. Closes $30 Million Series A Financing to Meet High Demand',
      excerpt: 'Class Technologies Inc., the company that created Class,...',
    },
    {
      img: '/img/girl-laptop.png',
      alt: 'Girl on laptop',
      tag: 'NEWS',
      title: "Zoom's earliest investors are betting millions on a better Zoom for schools",
      excerpt: 'Zoom was never created to be a consumer product. Nonetheless, the...',
    },
    {
      img: '/img/cat-laptop.png',
      alt: 'Cat on laptop',
      tag: 'NEWS',
      title: 'Former Blackboard CEO Raises $16M to Bring LMS Features to Zoom Classrooms',
      excerpt: 'This year, investors have reaped big financial returns from betting on Zoom...',
    },
  ];

  return (
    <>
      {/* Heading */}
      <div className="mt-16 text-center">
        <h2 className="text-darken text-2xl font-semibold">Latest News and Resources</h2>
        <p className="text-gray-500 my-5">See the developments that have occurred to Skillines in the world</p>
      </div>

      {/* Articles */}
      <div className="my-14 flex flex-col lg:flex-row lg:space-x-20">
        {/* Featured article */}
        <div className="lg:w-6/12">
          <Image
            className="w-full mb-6 h-auto rounded-xl"
            src="/img/laptop-news.png"
            alt="Latest news"
            width={600}
            height={400}
            style={{ height: 'auto' }}
          />
          <span className="bg-yellow-300 text-darken font-semibold px-4 py-px text-sm rounded-full">NEWS</span>
          <h3 className="text-gray-800 font-semibold my-3 text-xl">
            Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution
          </h3>
          <p className="text-gray-500 mb-3">
            Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...
          </p>
          <a href="#" className="underline">Read more</a>
        </div>

        {/* Side articles */}
        <div className="lg:w-7/12 flex flex-col justify-between mt-12 space-y-5 lg:space-y-0 lg:mt-0">
          {articles.map((article, i) => (
            <div key={i} className="flex space-x-5">
              <div className="w-4/12">
                <div className="relative">
                  <Image
                    className="rounded-xl w-full h-auto"
                    src={article.img}
                    alt={article.alt}
                    width={200}
                    height={150}
                    style={{ height: 'auto' }}
                  />
                  <span className="absolute bottom-2 right-2 bg-yellow-300 text-darken font-semibold px-4 py-px text-sm rounded-full hidden sm:block">
                    {article.tag}
                  </span>
                </div>
              </div>
              <div className="w-8/12">
                <h3 className="text-gray-800 text-sm sm:text-lg font-semibold">{article.title}</h3>
                <p className="text-gray-500 my-2 sm:my-4 text-xs sm:text-md">{article.excerpt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

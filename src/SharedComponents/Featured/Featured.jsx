const Featured = () => {
  return (
    <>
      <section>
        <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
          <header className="text-center">
            <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
              New Rediscover Elegance: Our Signature Experiences
            </h2>

            <p className="max-w-md mx-auto mt-4 text-gray-500">
              Explore tea ceremonies and serene gardens at Yachiyo <br /> where
              tranquility meets tradition.
            </p>
          </header>

          <ul className="grid grid-cols-1 gap-4 mt-8 lg:grid-cols-3">
            <li>
              <a href="#" className="relative block group">
                <img
                  src="https://source.unsplash.com/a-walkway-in-front-of-a-building-with-a-clock-on-it-SETVBREfkPY"
                  alt=""
                  className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
                />

                <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                  <h3 className="text-xl font-medium text-white">
                    Hokane, Kanagawa
                  </h3>

                  <span className="mt-1.5 inline-block bg-black rounded-lg px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                    Book Now
                  </span>
                </div>
              </a>
            </li>

            <li>
              <a href="#" className="relative block group">
                <img
                  src="https://source.unsplash.com/white-bed-linen-with-throw-pillows-Yrxr3bsPdS0"
                  alt=""
                  className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
                />

                <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                  <h3 className="text-xl font-medium text-white">
                    Matsuyama Onsen, Nikko
                  </h3>

                  <span className="mt-1.5 inline-block bg-black rounded-lg px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                    Book Now
                  </span>
                </div>
              </a>
            </li>

            <li className="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
              <a href="#" className="relative block group">
                <img
                  src="https://source.unsplash.com/brown-wooden-framed-glass-door-MrXbVczGSGc"
                  alt=""
                  className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
                />

                <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                  <h3 className="text-xl font-medium text-white">
                    Naoshima onsen, Beppu
                  </h3>

                  <span className="mt-1.5 inline-block bg-black rounded-lg px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                    Book Now
                  </span>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Featured;

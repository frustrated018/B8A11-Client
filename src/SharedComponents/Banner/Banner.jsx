const Banner = () => {
  return (
    <>
      <section className="relative bg-[url(https://source.unsplash.com/random/500x500/?japan,hotel,ryokan)] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-neutral opacity-50 rounded-lg"></div>

        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div className="max-w-xl text-left">
            {/* text goes here */}
            <h1 className="text-4xl font-bold text-white">
              Serenity in Every
              <strong className="block font-extrabold text-secondary">
                Tradition
              </strong>
            </h1>
            <p className="mt-4 text-white max-w-lg sm:text-xl/relaxed">
              <p className="mt-4 text-white max-w-lg sm:text-xl/relaxed">
              Yachiyo, a timeless ryokan since 1920, harmonizes modern luxury with ancient traditions, offering serenity and grace in every visit.
              </p>
            </p>
            <div className="mt-8 flex flex-wrap gap-4 text-center">
              <button className="block w-full rounded bg-secondary px-12 py-3 text-base font-medium text-white shadow sm:w-auto">
                Get Started
              </button>

              <button className="block w-full rounded bg-base-100 px-12 py-3 text-base font-medium text-neutral shadow  focus:outline-none focus:ring sm:w-auto">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;

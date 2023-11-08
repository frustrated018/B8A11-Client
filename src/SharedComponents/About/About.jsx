const About = () => {
  return (
    <>
      <div className="hero min-h-screen p-16">
        <div className="hero-content flex-col lg:flex-row gap-28">
          {/* Image collage */}
          <div className=" lg:w-1/2 relative">
            <img
              src="https://source.unsplash.com/random/1000x1000/?japan,hotel,ryokan"
              className=" w-[460px] h-[473px] rounded-[10px] object-cover"
            />
            <img
              src="https://source.unsplash.com/random/500x500/?japanese,woman"
              className=" w-[70%] h-[70%] rounded-[10px] object-cover border-8 border-white absolute -right-[64px] -bottom-[81px]"
            />
          </div>
          {/* Text and button */}
          <div className=" lg:w-1/2">
            <h3 className="text-secondary text-xl font-bold">About Us</h3>
            <div className=" text-neutral-900 text-[45px] font-bold leading-tight mt-1 mb-7">
              Discover Our Legacy of Tranquility and Elegance
            </div>
            <p className="w-[489px] text-neutral-500 text-base font-normal capitalize leading-[30px] mt-5 mb-7">
            For over a century, Yachiyo has been a sanctuary of timeless elegance and tranquil beauty. Established in 1920, our ryokan has remained committed to preserving the rich traditions of Japanese hospitality. Nestled in the heart of historic Kyoto, Yachiyo beckons you to experience the exquisite harmony of modern luxury and ancient grace. Immerse yourself in the serenity of our meticulously crafted ryokan and create memories that will last a lifetime.
            </p>
            <p className="w-[489px] text-neutral-500 text-base font-normal capitalize leading-[30px] mt-5 mb-7">
            At Yachiyo, we believe that every guest is a cherished member of our extended family. Our dedicated staff is here to ensure that your stay is not just a visit but a journey into the heart and soul of Japan. Come and be enchanted by the unique blend of Japanese heritage and contemporary comfort that awaits you at Yachiyo.
            </p>
            <button
              className="inline-block rounded border border-secondary bg-secondary px-12 py-3 text-lg font-semibold text-white hover:bg-transparent hover:text-secondary focus:outline-none focus:ring active:text-accent"
              href="#"
            >
              Get More Info
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

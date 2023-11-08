const About2 = () => {
  return (
    <>
      <div className="bg-base-100 p-4 sm:p-8 md:p-12 lg:p-16 xl:p-20">
        <h2 className="text-3xl font-bold mb-4">About Yachiyo</h2>
        <img
          src="https://source.unsplash.com/random/1000x1000/?japan,hotel,ryokan"
          className=" w-screen h-[30vh] rounded-[10px] object-cover"
        />
        <p className="text-black text-lg leading-relaxed">
          For over a century, Yachiyo has been a sanctuary of timeless elegance
          and tranquil beauty. Established in 1920, our ryokan has remained
          committed to preserving the rich traditions of Japanese hospitality.
          Nestled in the heart of historic Kyoto, Yachiyo beckons you to
          experience the exquisite harmony of modern luxury and ancient grace.
          Immerse yourself in the serenity of our meticulously crafted ryokan
          and create memories that will last a lifetime.
        </p>
        <br />
        <p className="text-balck text-lg leading-relaxed">
          At Yachiyo, we believe that every guest is a cherished member of our
          extended family. Our dedicated staff is here to ensure that your stay
          is not just a visit but a journey into the heart and soul of Japan.
          Come and be enchanted by the unique blend of Japanese heritage and
          contemporary comfort that awaits you at Yachiyo.
        </p>
      </div>
    </>
  );
};

export default About2;

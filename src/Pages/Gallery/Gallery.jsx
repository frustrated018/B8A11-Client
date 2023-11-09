const Gallery = () => {
  const eventPhotos = Array.from(
    { length: 20 },
    (_, index) =>
      `https://source.unsplash.com/random/500x500/?japan,hotel,ryokan&${
        index + 1
      }`
  );

  return (
    <div className="bg-secondary py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-3 ">Rooms Gallery</h2>
        <p className="text-sm font-semibold text-center mb-8">
          Take a look at some of the best rooms we have.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {eventPhotos.map((photo, index) => (
            <div key={index} className="relative">
              <img
                src={photo}
                className="w-full h-full object-cover rounded-lg transition-opacity duration-300"
              />
              <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 flex justify-center items-center">
                <span className="text-white text-xl font-semibold">View</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;

const Awards = () => {
  return (
    <div className=" max-w-6xl mx-auto p-8">
      <h2 className="text-center text-2xl md:text-3xl font-bold mb-6">
        Our Accomplishments
      </h2>

      {/* First Award */}
      <div className="mb-8 flex flex-col md:flex-row justify-center items-center gap-8">
        <img
          src="https://source.unsplash.com/the-body-shop-black-tea-tree-77ruI1Fed3o"
          alt="Award 1"
          className="rounded-lg shadow-lg w-[90%] md:w-[50%] lg:w-[30%] object-cover mx-auto"
        />
        <div className="ml-4">
          <h3 className="text-2xl lg:text-3xl font-semibold mt-4 mb-2">
            Hotel Excellence Award
          </h3>
          <p className="text-gray-600 text-base lg:text-xl">
            Recognized for outstanding achievements in hotel management, the
            Hotel Excellence Award celebrates our commitment to exceptional
            service, guest satisfaction, and industry leadership. This award
            highlights our dedication to excellence in hospitality.
          </p>
        </div>
      </div>

      {/* Second Award */}
      <div className="mb-8 flex flex-col md:flex-row-reverse justify-center items-center gap-8">
        <img
          src="https://source.unsplash.com/people-sitting-on-chairs-rE9vgD_TXgM"
          alt="Award 2"
          className="rounded-lg shadow-lg w-[90%] md:w-[50%] lg:w-[30%] object-cover mx-auto"
        />
        <div className="ml-4">
          <h3 className="text-2xl lg:text-3xl font-semibold mt-4 mb-2">
            Innovation in Hotel Operations
          </h3>
          <p className="text-gray-600 text-base lg:text-xl">
            The Innovation in Hotel Operations Award acknowledges our pioneering
            efforts in redefining hotel management practices. By leveraging
            innovative solutions, we have demonstrated excellence in optimizing
            operations and enhancing the overall guest experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Awards;

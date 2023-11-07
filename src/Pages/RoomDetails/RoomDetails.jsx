import { useLoaderData } from "react-router-dom";
import { BsCalendarCheck } from "react-icons/bs"

const RoomDetails = () => {
  const room = useLoaderData();
  const { img, description, roomType, location, pricePerNight, offer } = room;
  return (
    <>
      <div className="flex justify-center items-center lg:py-20 md:py-10 py-5 min-h-screen">
        <article className="overflow-hidden rounded-lg border border-accent bg-secondary shadow-sm w-[90%] h-[90%]">
          <img alt="Office" src={img} className=" h-[350px] w-full object-cover" />

          <div className="p-4 sm:p-6">
            {/* Longer description */}
            <div className="flow-root rounded-lg border border-accent py-3 shadow-sm">
              <dl className="-my-3 divide-y divide-accent text-sm">
                <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                  <dt className="font-medium text-white">Location</dt>
                  <dd className="text-neutral sm:col-span-2">{location}</dd>
                </div>

                <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                  <dt className="font-medium text-white">Description</dt>
                  <dd className="text-neutral sm:col-span-2">{description}</dd>
                </div>

                <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                  <dt className="font-medium text-white">Room Type</dt>
                  <dd className="text-neutral sm:col-span-2">{roomType}</dd>
                </div>

                <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                  <dt className="font-medium text-white">Price Per Night</dt>
                  <dd className="text-neutral sm:col-span-2">${pricePerNight}</dd>
                </div>

                <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                  <dt className="font-medium text-white">Offer</dt>
                  <dd className="text-neutral sm:col-span-2">
                    {offer}%
                  </dd>
                </div>
              </dl>
            </div>

            <button
            //   onClick={handleAddToCart}
              className="group relative inline-flex items-center overflow-hidden rounded bg-[#007b7d] px-8 py-3 text-white focus:outline-none focus:ring active:bg-[#00a8a9] mt-4"
              href="/download"
            >
              <span className="absolute -end-full transition-all group-hover:end-4">
                <BsCalendarCheck></BsCalendarCheck>
              </span>

              <span className="text-sm font-medium transition-all group-hover:me-4">
                Book Now
              </span>
            </button>
          </div>
        </article>
      </div>
    </>
  );
};

export default RoomDetails;

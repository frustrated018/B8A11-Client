import axios from "axios";
import { useLoaderData, useNavigate } from "react-router-dom";
import { BsCalendarCheck } from "react-icons/bs";
import { toast } from "react-toastify";
import Offer from "../../SharedComponents/Offer/Offer";
import Reviews from "../../SharedComponents/Reviews/Reviews";

const RoomDetails = () => {
  const room = useLoaderData();
  const {
    _id,
    img,
    description,
    roomType,
    location,
    pricePerNight,
    offer,
    seats,
    amenities,
    roomId
  } = room;

  // Handling booking
  const navigate = useNavigate();

  const handleBookNow = async () => {
    if (seats === 0) {
      toast.error("Sorry no seats available", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {
      try {
        // Making a POST request to update the available seats
        await axios.put(`http://localhost:5000/rooms/checkout/${_id}`);
        // Navigate to the checkout page after successful booking
        navigate(`/rooms/checkout/${_id}`);
      } catch (error) {
        console.error("Booking failed:", error);
        toast.error("Booking failed. Please try again later.");
      }
    }
  };

  return (
    <>
      {/* offer Card */}
      <div className="px-10 lg:px-20 mt-5">
        <Offer offer={offer}></Offer>
      </div>

      <div className="flex justify-center items-center lg:py-20 md:py-10 py-5">
        {/* Details Card */}
        <article className="overflow-hidden rounded-lg border border-neutral bg-primary shadow-sm w-[90%] h-[90%]">
          <img
            alt="Office"
            src={img}
            className=" h-[350px] w-full object-cover"
          />

          <div className="p-4 sm:p-6">
            {/* Longer description */}
            <div className="flow-root rounded-lg border border-neutral py-3 shadow-sm bg-secondary">
              <dl className="-my-3 divide-y divide-neutral text-sm">
                <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                  <dt className="font-semibold text-white text-base">
                    Location:
                  </dt>
                  <dd className="text-neutral sm:col-span-2 text-base">
                    {location}
                  </dd>
                </div>

                <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                  <dt className="font-semibold text-white text-base">
                    Description:
                  </dt>
                  <dd className="text-neutral sm:col-span-2 text-base">
                    {description}
                  </dd>
                </div>

                <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                  <dt className="font-semibold text-white text-base">
                    Room Type:
                  </dt>
                  <dd className="text-neutral sm:col-span-2 text-base">
                    {roomType}
                  </dd>
                </div>

                <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                  <dt className="font-semibold text-white text-base">
                    Rooms Available:
                  </dt>
                  <dd className="text-neutral sm:col-span-2 text-base">
                    {seats}
                  </dd>
                </div>

                <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                  <dt className="font-semibold text-white text-base">
                    Price Per Night:
                  </dt>
                  <dd className="text-neutral sm:col-span-2 text-base">
                    ${pricePerNight}
                  </dd>
                </div>

                <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                  <dt className="font-semibold text-white text-base">Offer:</dt>
                  <dd className="text-neutral sm:col-span-2 text-base">
                    {offer}% off
                  </dd>
                </div>

                {/* Amenities section  */}
                <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                  <dt className="font-semibold text-white text-base">
                  Amenities:
                  </dt>
                  <dd className="text-neutral sm:col-span-2 text-base">
                    <ul>
                      {amenities.map((amenity, index) => (
                        <li key={index}>{amenity}</li>
                      ))}
                    </ul>
                  </dd>
                </div>
              </dl>
            </div>

            <button
              onClick={handleBookNow}
              className="group relative inline-flex items-center overflow-hidden rounded bg-accent px-8 py-3 text-white focus:outline-none focus:ring active:bg-[#00a8a9] mt-4"
            >
              <span className="absolute -end-full transition-all group-hover:end-4">
                <BsCalendarCheck></BsCalendarCheck>
              </span>

              <span className="text-xl font-semibold transition-all group-hover:me-4">
                Book Now
              </span>
            </button>
          </div>
        </article>
      </div>
      {/* Reviews */}
      <div className="my-10 rounded-lg">
           <Reviews roomId={roomId}></Reviews> 
      </div>
    </>
  );
};

export default RoomDetails;

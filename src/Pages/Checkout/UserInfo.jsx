import { useContext } from "react";
import { AiOutlinePhone } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";

const UserInfo = ({room}) => {

  // Handling booking
  const { pricePerNight, img, roomType, offer, roomNumber, location } = room;
  const {user} = useContext(AuthContext)

  const handleBook = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = user.email;
    const phone = form.phone.value;
    const date = form.date.value;

    const order = {
      roomType,
      pricePerNight,
      offer,
      roomNumber,
      location,
      name,
      email,
      img,
      date,
      phone,
    };

    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
            Swal.fire({
                icon: 'success',
                title: 'Booking Confirmed',
                text: 'Your Room has been successfully Booked.',
              })
        }
      });
  };




  return (
    <>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 bg-accent bg-opacity-40 mt-0 lg:mt-16 rounded-lg">
        <div className="mx-auto max-w-lg">
          <h1 className="text-center text-2xl font-bold text-neutral sm:text-3xl">
            Book Now!
          </h1>

          <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
            To complete the booking process please fill out the form.
          </p>
          {/* Form starts here */}
          <form onSubmit={handleBook} className="mb-0 mt-3 space-y-4 rounded-lg p-4 sm:p-6 lg:p-8">
            {/* Name */}
            <div>
              <div className="relative">
                <input
                  required
                  type="text"
                  name="name"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter Name"
                />

                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                  <BsFillPersonLinesFill></BsFillPersonLinesFill>
                </span>
              </div>
            </div>

            {/* Phoen Number */}
            <div>
              <div className="relative">
                <input
                  required
                  type="tel"
                  name="phone"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter Phone Number"
                />
                {/* Icon */}
                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                  <AiOutlinePhone></AiOutlinePhone>
                </span>
              </div>
            </div>

            {/* Date picker */}
            <div>
              <input
                required
                type="date"
                name="date"
                className="w-full rounded-lg border-gray-200 p-4 text-sm shadow-sm"
              />
            </div>
            {/* Submit button */}
            <button
              type="submit"
              className="block w-full rounded-lg bg-accent px-5 py-3  font-medium text-white text-base font-bold"
            >
              BOOK
            </button>

            <p className="text-center text-sm text-neutral">
              By pressing the Book you are agreeing to the{" "}
              <a className="underline" href="">
                Terms & Condition{" "}
              </a>
              of this website.
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default UserInfo;

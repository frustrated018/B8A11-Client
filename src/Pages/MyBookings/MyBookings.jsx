import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { TbCalendarX, TbCalendarRepeat } from "react-icons/tb";

const MyBookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/bookings?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setBookings(data);
        console.log(data);
      });
  }, [user]);
  return (
    <>
      <section>
        <div className="mx-auto min-w-full min-h-screen px-4 py-8 sm:px-6 sm:py-12 lg:px-8 bg-accent bg-opacity-25">
          <div className="mx-auto max-w-3xl">
            <header className="text-center">
              <h1 className="text-xl font-bold text-neutral sm:text-3xl">
                Your Bookings
              </h1>
              <p className="text-base font-bold text-neutral opacity-50 sm:text-xl">
                You have two buttons to Update or Cancel your booking
              </p>
            </header>

            <div className="mt-8 border-2 border-accent bg-primary p-4 rounded-lg ">
              <ul className="space-y-4">
                {bookings.map((booking) => {
                  console.log(booking);
                  return (
                    <li className="flex items-center gap-4" key={booking._id}>
                      <img
                        src={booking.img}
                        alt="Room image"
                        className="h-20 w-20 rounded object-cover"
                      />

                      <div>
                        <h3 className="text-base text-white">
                          {booking.location}
                        </h3>

                        <dl className="mt-0.5 space-y-px text-white text-base">
                          <div>
                            <dt className="inline">Room Number: </dt>
                            <dd className="inline">{booking.roomNumber}</dd>
                          </div>

                          <div>
                            <dt className="inline">Booked for: </dt>
                            <dd className="inline">{booking.date}</dd>
                          </div>

                          <div>
                            <dt className="inline">Price per Night: </dt>
                            <dd className="inline">${booking.pricePerNight}</dd>
                          </div>
                        </dl>
                      </div>

                      <div className="flex flex-1 items-center justify-end gap-2">
                        {/* Update button */}
                        <button
                          className="text-white transition hover:text-blue-600"
                          // onClick={() => handleDelete(booking._id)}
                        >
                          <TbCalendarRepeat size={26}></TbCalendarRepeat>
                        </button>
                      </div>
                        {/* delete button */}
                        <button
                          className="text-white transition hover:text-red-600"
                          // onClick={() => handleDelete(booking._id)}
                        >
                          <TbCalendarX size={26}></TbCalendarX>
                        </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MyBookings;

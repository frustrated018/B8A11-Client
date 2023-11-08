import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { RiDeleteBin6Line } from "react-icons/ri";

const MyBookings = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
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
        <div className="mx-auto max-w-screen-xl min-h-screen px-4 py-8 sm:px-6 sm:py-12 lg:px-8 bg-accent bg-opacity-25">
          <div className="mx-auto max-w-3xl">
            <header className="text-center">
              <h1 className="text-xl font-bold text-neutral sm:text-3xl">
                Your Bookings
              </h1>
            </header>

            <div className="mt-8">
              <ul className="space-y-4">
                {bookings.map((booking) => {
                  console.log(booking);
                  return (
                    <li className="flex items-center gap-4" key={booking._id}>
                      <img
                        src={booking.img}
                        alt=""
                        className="h-16 w-16 rounded object-cover"
                      />

                      <div>
                        <h3 className="text-sm text-white">
                          {/* {booking.productName} */}
                        </h3>

                        <dl className="mt-0.5 space-y-px text-[10px] text-white">
                          <div>
                            <dt className="inline">Brand: </dt>
                            {/* <dd className="inline">{booking.brandName}</dd> */}
                          </div>

                          <div>
                            <dt className="inline">Price: </dt>
                            {/* <dd className="inline">${booking.price}</dd> */}
                          </div>
                        </dl>
                      </div>

                      <div className="flex flex-1 items-center justify-end gap-2">
                        {/* delete button */}
                        <button
                          className="text-white transition hover:text-red-600"
                          // onClick={() => handleDelete(booking._id)}
                        >
                          <RiDeleteBin6Line></RiDeleteBin6Line>
                        </button>
                      </div>
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

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { TbCalendarX, TbCalendarRepeat } from "react-icons/tb";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const MyBookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);

  // Fetching data
  useEffect(() => {
    fetch(`http://localhost:5000/bookings?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setBookings(data);
      });
  }, [user]);

  //Deleting Bookings
  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#2FFF00",
      cancelButtonColor: "#d33",
      cancelButtonText: "No, Don't!",
      confirmButtonText: "Yes, Cancel!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/bookings/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              toast.success("Your booking has been Cancelled", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
              });
              const remaining = bookings.filter(
                (x) => x._id !== _id // used x insted of booking because we already mapped bookings once
              );

              setBookings(remaining);
            }
          });
      }
    });
  };

  // Updating booking
  const handleUpdate = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#2FFF00",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Update it!",
      cancelButtonText: "No, Don't!",
    }).then((result) => {
      if (result.isConfirmed) {
        (async () => {
          const { value: newDate } = await Swal.fire({
            title: "select departure date",
            input: "date",
            didOpen: () => {
              const today = new Date().toISOString();
              Swal.getInput().min = today.split("T")[0];
            },
          });
          if (newDate) {
            if (newDate) {
              // Making a PUT request to update the date in the db
              fetch(`http://localhost:5000/bookings/${_id}`, {
                method: "PUT",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ newDate }),
              })
                .then((res) => res.json())
                .then((data) => {
                  console.log(data);
                  if (data.modifiedCount > 0) {
                    toast.info("Booking date has been updated", {
                      position: "top-right",
                      autoClose: 5000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                      theme: "colored",
                    });
                    // Updating the date in the ui
                    const updatedBookings = bookings.map((booking) =>
                      booking._id === _id
                        ? { ...booking, date: newDate }
                        : booking
                    );
                    setBookings(updatedBookings);
                  }
                });
            }
          }
        })();
      }
    });
  };

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
                          onClick={() => handleUpdate(booking._id)}
                        >
                          <TbCalendarRepeat size={26}></TbCalendarRepeat>
                        </button>
                      </div>
                      {/* delete button */}
                      <button
                        className="text-white transition hover:text-red-600"
                        onClick={() => handleDelete(booking._id)}
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

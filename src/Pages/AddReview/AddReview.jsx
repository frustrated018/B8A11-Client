import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import axios from "axios";
import { toast } from "react-toastify";

const AddReview = ({ roomId }) => {
  console.log(roomId);
  const { user } = useContext(AuthContext);

  // Handle adding reviews
  const handleAddReview = (event) => {
    event.preventDefault();
    const form = event.target;
    const userName = form.name.value;
    const review = form.review.value;
    const rating = form.rating.value;

    // Get the current date and time
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().split('T')[0];
    console.log(formattedDate);

    const newReview = { userName, review, rating, timestamp: formattedDate, idx:roomId };

    // Making a POST request
    axios
      .post(`http://localhost:5000/reviews`, newReview)
      .then((response) => {
        // Handle success
        if (response.data.insertedId) {
          toast.success('Review Added Successfully!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
        }
      })
      .catch((error) => {
        // Handle error
        toast.success(`${error.message}`, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });
      });
  };

  return (
    <>
      <div className="min-w-screen min-h-screen bg-base-100 flex items-center justify-center px-5 py-5">
        <div
          className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden"
          style={{ maxWidth: "1000px" }}
        >
          <div className="md:flex w-full">
            <div className="hidden md:block w-1/2">
              {/* Image */}
              <img
                src="https://source.unsplash.com/random/500x500/?japan"
                alt="Random Ryokan Image"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full md:w-1/2 py-10 px-5 md:px-10">
              <div className="text-center mb-10">
                <h1 className="font-bold text-4xl text-gray-900">Add Review</h1>
              </div>
              <form onSubmit={handleAddReview}>
                <div className="flex -mx-3">
                  <div className="w-full px-3 mb-5">
                    <label htmlFor="" className="text-xs font-semibold px-1">
                      Name
                    </label>
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i className="mdi mdi-email-outline text-gray-400 text-lg"></i>
                      </div>
                      {/* input Field */}
                      <input
                        type="text"
                        name="name"
                        defaultValue={user?.displayName}
                        className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-secondary"
                        placeholder="example@email.com"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="flex -mx-3">
                  <div className="w-full px-3 mb-5">
                    <label htmlFor="" className="text-xs font-semibold px-1">
                      Rating
                    </label>
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i className="mdi mdi-lock-outline text-gray-400 text-lg"></i>
                      </div>
                      {/* Input field */}
                      <input
                        type="number"
                        name="rating"
                        max="5"
                        className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-secondary"
                        placeholder="Rate the experience out of 5"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="flex">
                  <div className="w-full px-3 mb-5">
                    <label htmlFor="" className="text-xs font-semibold px-1">
                      Review
                    </label>
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i className="mdi mdi-lock-outline text-gray-400 text-lg"></i>
                      </div>
                      {/* Input field */}
                      <textarea
                        name="review"
                        className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-secondary"
                        cols="50"
                        rows="10"
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="flex -mx-3">
                  <div className="w-full px-3">
                    <button
                      type="submit"
                      className="block w-full max-w-xs mx-auto bg-secondary hover:bg-accent focus:bg-accent text-white rounded-lg px-3 py-3 font-bold text-[20px]"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddReview;

import axios from "axios";
import { useEffect, useState } from "react";

// Swiper related import
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import ReviewCard from "./ReviewCard/ReviewCard";

const Reviews = ({ roomId }) => {

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios
      .get(`https://yachiyo-server.vercel.app/reviews?roomId=${roomId}`)
      .then((res) => {
        setReviews(res.data);
      })
      .catch((error) => {
        console.error("Error fetching reviews:", error);
      });
  }, [roomId]); // Include roomId as a dependency to run the effect whenever it changes

  return (
    <>
      <section className=" w-[80%] mx-auto bg-secondary rounded-lg">
        <div className="px-5 pt-5">
            <h1 className="text-black text-center sm:text-4xl lg:text-5xl font-bold">Don&apos;t believe us...</h1>
            <p className="text-neutral text-base text-center ">Look what our customers have to say about this room</p>
        </div>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {reviews.map((reviewX, index) => (
            <SwiperSlide key={index}>
              <div className="p-10">
                  <ReviewCard reviewX={reviewX}></ReviewCard>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
};

export default Reviews;

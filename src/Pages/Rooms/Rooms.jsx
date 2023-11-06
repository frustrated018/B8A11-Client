import { useLoaderData } from "react-router-dom";
import RoomCard from "./RoomCard";

const Rooms = () => {
  const rooms = useLoaderData();
  console.log (rooms);
  return (
    <>
      <h5 className=" text-center text-5xl text-blue-600 mt-10">Rooms Page</h5>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-10 mx-5 md:mx-10">
        {
         rooms.map(room => <RoomCard key={room._id} room={room} ></RoomCard>)
        }
      </div>
    </>
  );
};

export default Rooms;

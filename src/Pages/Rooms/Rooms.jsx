import { useLoaderData } from "react-router-dom";
import RoomCard from "./RoomCard";
import { useState } from "react";

const Rooms = () => {
  const rooms = useLoaderData();
  const [asc, setAsc] = useState(true);
  return (
    <>
      <h5 className=" text-center text-2xl md:text-4xl text-accent mt-5">
        All Rooms At different Locations
      </h5>
      <h5 className=" text-center text-base text-neutral">
        You can sort the rooms by price. Also search rooms for a specific
        location
      </h5>
      <div className="flex flex-col md:flex-row justify-between items-center px-5 lg:px-20 gap-5 mt-6">
        <button className="btn btn-accent" onClick={() => setAsc(!asc)}>
          {asc ? 'Price: High to Low' : 'Price: Low to High'}
          </button>
        <div className="flex gap-2">
          <input type="text" name="search" className="px-3 py-3 rounded-lg" />
          <button className="btn btn-primary">Search</button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-10 mx-5 md:mx-10">
        {rooms.map((room) => (
          <RoomCard key={room._id} room={room}></RoomCard>
        ))}
      </div>
    </>
  );
};

export default Rooms;

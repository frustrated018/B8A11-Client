import { Link } from "react-router-dom";

const RoomCard = ({ room }) => {
  const { _id, img, description, roomType, location } = room;

  return (
    <>
      <Link to={`/rooms/details/${_id}`}>
        <div className="group relative block bg-black rounded-xl">
          <img
            alt="hotel scenery"
            src={img}
            className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50 rounded-xl"
          />

          <div className="relative p-4 sm:p-6 lg:p-8">
            <p className="text-sm font-medium uppercase tracking-widest text-accent">
              {roomType}
            </p>

            <p className="text-xl font-bold text-white sm:text-2xl">
              {location}
            </p>

            <div className="mt-32 sm:mt-48 lg:mt-64">
              <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                <p className="text-sm text-white">{description}</p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default RoomCard;

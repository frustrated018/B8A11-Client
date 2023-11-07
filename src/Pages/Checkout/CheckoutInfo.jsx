const CheckoutInfo = ({ room }) => {
  const { img, description, roomType, location, pricePerNight, offer, seats } =
    room;
  return (
    <>
      <div className="flex justify-center items-center py-5">
        <article className="overflow-hidden rounded-lg border border-neutral bg-primary shadow-sm">
          <img
            alt="Office"
            src={img}
            className=" h-[200px] w-full object-cover"
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
              </dl>
            </div>
          </div>
        </article>
      </div>
    </>
  );
};

export default CheckoutInfo;

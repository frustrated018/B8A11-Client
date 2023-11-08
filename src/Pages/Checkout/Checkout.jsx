import { useLoaderData } from "react-router-dom";
import CheckoutInfo from "./CheckoutInfo";
import UserInfo from "./UserInfo";

const Checkout = () => {
  const room = useLoaderData();

  return (
    <>
      <section className="bg-base-100 bg-opacity-70">
        <div className="mx-auto max-w-screen-xl px-4 py-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
            <div className="lg:col-span-2 lg:py-12">
              {/* info card will go here */}
              <CheckoutInfo room={room}></CheckoutInfo>
            </div>
            {/* User info */}
            <div className="lg:col-span-3 ">
              <UserInfo room={room}></UserInfo>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Checkout;

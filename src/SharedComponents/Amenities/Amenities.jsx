import {FaBed} from 'react-icons/fa';
import {BsFillCupHotFill} from 'react-icons/bs';
import {GiClothes} from 'react-icons/gi';
import {SiBento} from 'react-icons/si';
import {FaHotTubPerson} from 'react-icons/fa6';
import {GiCurledLeaf} from 'react-icons/gi';

const Amenities = () => {
  return (
    <>
      <section className="">
        <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 mx-auto bg-base-200 border-white shadow-lg rounded-lg">
          <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
            <div className="mx-auto max-w-lg text-center lg:mx-0 ltr:lg:text-left">
              <h2 className="text-3xl font-bold sm:text-4xl">
                Included Amenities
              </h2>

              <p className="mt-4 text-neutral">
                Experience the epitome of Japanese hospitality with a range of
                thoughtfully curated amenities. From traditional kaiseki dining
                to private onsen baths, our ryokan offers a blend of comfort and
                culture for an unforgettable stay.
              </p>

              <a
                href="/rooms"
                className="mt-8 inline-block rounded bg-secondary px-12 py-3 text-base font-bold text-white transition hover:bg-primary focus:outline-none focus:ring focus:ring-yellow-400"
              >
                Start Booking Today
              </a>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              <a className="block rounded-xl border p-4 shadow-sm bg-primary">
                <span className="inline-block rounded-lg bg-gray-50 p-3">
                  {/* Icon */}
                  <SiBento></SiBento>
                </span>

                <h2 className="mt-2 font-bold">Kaiseki Dining</h2>

                <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-neutral">
                  Iconic Japanese multi-course meal.
                </p>
              </a>

              <a
                className="block rounded-xl border p-4 shadow-sm bg-primary"
                href="/accountant"
              >
                <span className="inline-block rounded-lg bg-gray-50 p-3">
                  {/* Icon */}
                  <FaHotTubPerson></FaHotTubPerson>
                </span>

                <h2 className="mt-2 font-bold">Private Onsen Bath</h2>

                <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-neutral">
                Exclusive hot spring bath.
                </p>
              </a>

              <a
                className="block rounded-xl border p-4 shadow-sm bg-primary"
                href="/accountant"
              >
                <span className="inline-block rounded-lg bg-gray-50 p-3">
                  {/* Icon */}
                  <FaBed></FaBed>
                </span>

                <h2 className="mt-2 font-bold">Futon Bedding</h2>

                <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-neutral">
                Traditional Japanese bedding.
                </p>
              </a>

              <a
                className="block rounded-xl border p-4 shadow-sm bg-primary"
                href="/accountant"
              >
                <span className="inline-block rounded-lg bg-gray-50 p-3">
                  {/* Icon */}
                  <GiClothes></GiClothes>
                </span>

                <h2 className="mt-2 font-bold">Yukata and Geta</h2>

                <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-neutral">
                Traditional Japanese attire.
                </p>
              </a>

              <a
                className="block rounded-xl border p-4 shadow-sm bg-primary"
                href="/accountant"
              >
                <span className="inline-block rounded-lg bg-gray-50 p-3">
                  {/* Icon */}
                  <BsFillCupHotFill></BsFillCupHotFill>
                </span>

                <h2 className="mt-2 font-bold">Tea Ceremony Set</h2>

                <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-neutral">
                Premium tea selection included.
                </p>
              </a>

              <a
                className="block rounded-xl border p-4 shadow-sm bg-primary"
                href="/accountant"
              >
                <span className="inline-block rounded-lg bg-gray-50 p-3">
                  {/* Icon */}
                  <GiCurledLeaf></GiCurledLeaf>
                </span>

                <h2 className="mt-2 font-bold">Zen Garden View</h2>

                <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-neutral">
                Scenic natural surroundings.
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Amenities;

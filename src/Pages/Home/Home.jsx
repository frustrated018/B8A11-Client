import About from "../../SharedComponents/About/About";
import About2 from "../../SharedComponents/About2/About2";
import Amenities from "../../SharedComponents/Amenities/Amenities";
import Awards from "../../SharedComponents/Awards/Awards";
import Banner from "../../SharedComponents/Banner/Banner";
import Faq from "../../SharedComponents/Faq/Faq";
import Featured from "../../SharedComponents/Featured/Featured";
import Footer from "../../SharedComponents/Footer/Footer";
import ContactUs from "../../SharedComponents/contactUs/contactUs";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className=" hidden md:block">
        <About></About>
      </div>
      <div className="block md:hidden">
        <About2></About2>
      </div>
      <Featured></Featured>
      <Amenities></Amenities>
      <Awards></Awards>
      <Faq></Faq>
      <ContactUs />
      <Footer></Footer>
    </div>
  );
};

export default Home;

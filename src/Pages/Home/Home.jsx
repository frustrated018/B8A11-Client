import About from "../../SharedComponents/About/About";
import Banner from "../../SharedComponents/Banner/Banner";
import Faq from "../../SharedComponents/Faq/Faq";
import Featured from "../../SharedComponents/Featured/Featured";
import Footer from "../../SharedComponents/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <Featured></Featured>
      <Faq></Faq>
      <Footer></Footer>
    </div>
  );
};

export default Home;

import { GrFacebook } from "react-icons/gr";
import { BsInstagram } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <footer className="footer footer-center p-10 bg-primary text-primary-content">
        <aside>
          <img
            src="https://i.ibb.co/SKtD1Gd/yapspayk.png"
            alt="logo"
            className="h-20 w-20 rounded-lg"
          />
          <p className="font-bold">Your Trusted Retreat Since 1920</p>
          <p>Copyright © 2023 - All right reserved</p>
        </aside>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a>
              <GrFacebook size={30}></GrFacebook>
            </a>
            <a>
              <BsInstagram size={30}></BsInstagram>
            </a>
            <a>
             <BsYoutube size={34}></BsYoutube>
            </a>
          </div>
        </nav>
      </footer>
    </>
  );
};

export default Footer;

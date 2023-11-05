import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <div className=" text-center text-5xl text-char mt-40">Main Layout</div>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;

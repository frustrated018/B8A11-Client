import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <div className=" text-center text-5xl text-primary mt-40">
          Initial Setup
        </div>
        <div className=" text-center text-5xl text-char mt-40">
          Different color
        </div>
        <div className=" text-center text-5xl text-neutral mt-40">
          Different color 2
        </div>
      </div>
    ),
  },
]);

export default router;

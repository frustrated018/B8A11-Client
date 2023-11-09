import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Rooms from "../Pages/Rooms/Rooms";
import MyBookings from "../Pages/MyBookings/MyBookings";
import PrivateRoute from "./PrivateRoute";
import axios from "axios";
import RoomDetails from "../Pages/RoomDetails/RoomDetails";
import Checkout from "../Pages/Checkout/Checkout";
import Error from "../Pages/Error/Error";
import AddReview from "../Pages/AddReview/AddReview";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/rooms",
        element: <Rooms></Rooms>,
        loader: () =>
          axios.get("https://yachiyo-server.vercel.app/rooms").then((res) => res.data),
      },
      {
        path: "/mybookings",
        element: (
          <PrivateRoute>
            <MyBookings></MyBookings>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/addreview",
        element:<AddReview></AddReview>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/rooms/checkout/:id",
        element: <Checkout></Checkout>,
        loader: ({ params }) =>
          fetch(`https://yachiyo-server.vercel.app/rooms/checkout/${params.id}`),
      },
      {
        path: "/rooms/details/:id",
        element: (
          <PrivateRoute>
            <RoomDetails></RoomDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://yachiyo-server.vercel.app/rooms/details/${params.id}`),
      },
    ],
  },
]);

export default router;

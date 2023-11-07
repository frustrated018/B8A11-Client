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

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/rooms",
        element: <Rooms></Rooms>,
        loader: () =>
          axios.get("http://localhost:5000/rooms").then((res) => res.data),
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
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/rooms/checkout/:id",
        element:<Checkout></Checkout>,
        loader: ({ params }) =>
        fetch(
          `http://localhost:5000/rooms/checkout/${params.id}`
        ),
      },
      {
        path: "/rooms/:id",
        element: <RoomDetails></RoomDetails>,
        loader: ({ params }) =>
          fetch(
            `http://localhost:5000/rooms/details/${params.id}`
          ),
      },
    ],
  },
]);

export default router;

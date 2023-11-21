import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Biography from "../pages/Biography";
import CompletedWorks from "../pages/CompletedWorks";
import Contact from "../pages/Contact";
import CompletedWorkDetail from "../pages/CompletedWorkDetail";
import Login from "../pages/Login";
import Register from "../pages/Register";
import OrderYourPortrayed from "../pages/OrderYourPortrayed";
import Checkout from "../pages/Checkout";
import axios from "axios";
import { BaseURL } from "../config/helpers";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/biography",
        element: <Biography />,
      },
      {
        path: "/completed-work",
        element: <CompletedWorks />,
      },
      {
        path: "/painting-single/:slug",
        element: <CompletedWorkDetail />,
        loader: ({ params }) =>
          axios.get(`${BaseURL}/api/product/${params?.slug}`),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/order-portrayed",
        element: <OrderYourPortrayed />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);
export default router;

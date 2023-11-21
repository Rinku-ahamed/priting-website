import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import bodyImg from "../data/body-bg.png";
import { useState } from "react";
import Loader from "../components/common/Loader";
import { ToastContainer } from "react-toastify";
const MainLayout = () => {
  const [show, seShow] = useState(false);
  setTimeout(() => {
    seShow(true);
  }, 1500);
  return (
    <>
      {show ? (
        <main
          style={{
            backgroundImage: `url(${bodyImg})`,
            backgroundPosition: "top center",
          }}
          className="bg-cover bg-no-repeat overflow-hidden"
        >
          <Header />
          <ToastContainer />
          <div className="mt-[180px] md:mt-[230px]">
            <Outlet />
          </div>
          <Footer />
        </main>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default MainLayout;

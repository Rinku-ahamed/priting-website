import { BsEnvelope } from "react-icons/bs";
import { AiOutlineLock, AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router-dom";
const Register = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-400">
      <div className="w-4/5 sm:w-[550px] shadow-2xl bg-white px-5 py-4 rounded">
        <h2 className="text-3xl font-semibold mt-4 text-primaryColor">
          Register your account
        </h2>
        <form className="mt-7">
          <div className="relative">
            <AiOutlineUser className="text-[20px] text-gray-700 absolute left-2 top-[12px]" />
            <input
              type="text"
              placeholder="Name"
              className="py-3 ps-9 w-full outline-none shadow-login"
            />
          </div>
          <div className="relative my-5">
            <BsEnvelope className="text-[20px] text-gray-700 absolute left-2 top-[12px]" />
            <input
              type="email"
              placeholder="Email"
              className="py-3 ps-9 w-full outline-none shadow-login"
            />
          </div>
          <div className="my-5 relative">
            <AiOutlineLock className="text-[20px] text-gray-700 absolute left-2 top-[12px]" />
            <input
              type="password"
              placeholder="Password"
              className="py-3 ps-9 w-full outline-none shadow-login"
            />
          </div>
          <button className="w-full bg-primaryColor text-[16px] text-white rounded py-3 font-bold ">
            Register
          </button>
        </form>
        <p className="text-center mt-5 text-gray-600">
          Already Have an Account?{" "}
          <Link to="/login" className="font-semibold text-primaryColor">
            Login now
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;

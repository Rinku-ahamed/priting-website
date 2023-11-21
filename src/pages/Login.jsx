import { BsEnvelope } from "react-icons/bs";
import { AiOutlineLock } from "react-icons/ai";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-400">
      <div className="w-4/5 sm:w-[550px] shadow-2xl bg-white px-5 py-4 rounded">
        <h2 className="text-3xl font-semibold mt-4 text-primaryColor">
          Login in your account
        </h2>
        <form className="mt-7">
          <div className="relative">
            <BsEnvelope className="text-[20px] text-gray-700 absolute left-2 top-[12px]" />
            <input
              type="email"
              placeholder="Email"
              className="py-3 ps-9 w-full outline-none shadow-login"
            />
          </div>
          <div className="mt-5 mb-2 relative">
            <AiOutlineLock className="text-[20px] text-gray-700 absolute left-2 top-[12px]" />
            <input
              type="password"
              placeholder="Password"
              className="py-3 ps-9 w-full outline-none shadow-login"
            />
          </div>
          <div className="flex items-center justify-between mb-5">
            <div className="flex gap-1 items-center">
              <input type="checkbox" id="checkbox" />
              <label htmlFor="checkbox" className="inline-block text-[15px]">
                Remember Me
              </label>
            </div>
            <button className="font-semibold text-primaryColor">
              Forgot Password?
            </button>
          </div>
          <button className="w-full bg-primaryColor text-[16px] text-white rounded py-3 font-bold ">
            Log in
          </button>
        </form>
        <p className="text-center mt-5 text-gray-600">
          Don't Have an Account?{" "}
          <Link to="/register" className="font-semibold text-primaryColor">
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;

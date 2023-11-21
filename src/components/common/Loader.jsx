import { Bars } from "react-loader-spinner";
const Loader = () => {
  return (
    <div className="h-screen flex justify-center items-center bg-gray-200">
      <Bars
        height="100"
        width="100"
        color="#ff4e00"
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default Loader;

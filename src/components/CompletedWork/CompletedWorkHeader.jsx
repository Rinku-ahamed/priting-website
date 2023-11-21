const CompletedWorkHeader = () => {
  return (
    <>
      <div className="flex sm:flex-row flex-col justify-between items-center">
        <h2 className="uppercase text-xl sm:text-2xl md:text-3xl text-primaryColor">
          SEE THE COMPLETE WORK
        </h2>
        <div className="flex gap-3">
          <div className="flex gap-3">
            {Array.from({ length: 5 }, (_, i) => (
              <button key={i} className="text-primaryColor font-medium">
                {i + 1}
              </button>
            ))}
          </div>
          <div className="flex gap-6 relative">
            <button className="text-primaryColor relative">Next</button>
            <span className="w-[2px] h-full border border-primaryColor absolute top-0 left-[46px]"></span>
            <button className="text-primaryColor">Last</button>
          </div>
        </div>
      </div>
      <div className="mt-6 flex sm:flex-row flex-col items-center gap-6 sm:gap-10 md:gap-14">
        <div>
          <input
            type="text"
            defaultValue="12 pages per page"
            className="outline-none text-black text-center text-sm py-1 px-4"
          />
          <button className="bg-[#342f2d] w-7 absolute h-7"></button>
        </div>
        <div className="flex gap-8 relative">
          <p className="relative">Page 1 of 10 </p>
          <span className="w-[2px] h-full border border-primaryColor absolute top-0 left-[104px]"></span>
          <p>Paintints 200</p>
        </div>
      </div>
    </>
  );
};

export default CompletedWorkHeader;

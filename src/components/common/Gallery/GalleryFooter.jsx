const GalleryFooter = () => {
  return (
    <div className="sm:flex items-center justify-between">
      <div className="flex sm:flex-row flex-col items-center sm:gap-14 mb-5 sm:mb-0">
        <div>
          <input
            type="text"
            className="outline-none text-black text-center text-sm py-1 px-4"
          />
          <button className="bg-[#342f2d] w-7 absolute h-7"></button>
        </div>
        <div className="flex justify-center sm:justify-end gap-8 relative mt-3 sm:mt-0">
          <p className="relative">Page 1 of 10 </p>
          <span className="w-[2px] h-full border border-primaryColor absolute top-0 left-[104px]"></span>
          <p>Paintints 200</p>
        </div>
      </div>
      <div className="flex justify-center sm:justify-normal gap-3">
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
  );
};

export default GalleryFooter;

import useGetAllPainting from "../../../hooks/useGetAllPainting";

const GalleryHeader = () => {
  const { paintings } = useGetAllPainting();
  console.log(paintings);
  return (
    <>
      <div className="flex justify-between items-center">
        <h2 className="uppercase text-xl sm:text-2xl md:text-3xl text-primaryColor">
          Gallery
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
      <div className="mt-6 sm:flex items-center gap-8 md:gap-14">
        <div>
          <input
            type="text"
            defaultValue="12 pages per page"
            className="outline-none text-black text-center text-sm py-1 px-1 sm:px-4"
          />
          <button className="bg-[#342f2d] w-7 absolute h-7"></button>
        </div>
        <div className="flex gap-8 relative mt-3 sm:mt-0">
          <p className="relative">Page 1 of 10 </p>
          <span className="w-[2px] h-full border border-primaryColor absolute top-0 left-[104px]"></span>
          <p>Paintints 200</p>
        </div>
      </div>
    </>
  );
};

export default GalleryHeader;

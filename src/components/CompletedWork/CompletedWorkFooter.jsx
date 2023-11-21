const CompletedWorkFooter = () => {
  return (
    <div className="flex md:flex-row flex-col gap-5 md:gap-10 items-center justify-center mb-4">
      <div className="flex items-center gap-14">
        <div className="flex gap-8 relative">
          <p className="relative">Page 1 of 10 </p>
          <span className="w-[2px] h-full border border-primaryColor absolute top-0 left-[104px]"></span>
          <p>Paintints 200</p>
        </div>
      </div>
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
  );
};

export default CompletedWorkFooter;

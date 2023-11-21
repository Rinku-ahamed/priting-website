import { useState } from "react";
import { BiSearch } from "react-icons/bi";
const SearchForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button
        className="block sm:hidden text-white text-2xl"
        onClick={() => setIsOpen(!isOpen)}
      >
        <BiSearch />
      </button>
      <form
        className={`me-3 md:me-10 ${
          isOpen
            ? "-bottom-10 left-[20px] w-full absolute block"
            : "absolute hidden sm:block sm:relative "
        }`}
      >
        <input
          type="search"
          name="search"
          className="outline-none px-2 py-1 rounded-sm w-4/5 sm:w-full"
        />
        <button className="bg-[#e0bb3b] text-white p-1 rounded-e-sm absolute h-[32px]">
          <BiSearch />
        </button>
      </form>
    </>
  );
};

export default SearchForm;

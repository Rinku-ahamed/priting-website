import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeProvider";
const menuLinks = [
  {
    id: 1,
    name: "Home",
    slug: "/",
  },
  {
    id: 2,
    name: "Biography",
    slug: "/biography",
  },
  {
    id: 3,
    name: "The Complete Works",
    slug: "/completed-work",
  },
  {
    id: 4,
    name: "Contact",
    slug: "/contact",
  },
  {
    id: 5,
    name: "Order Your Portrayed",
    slug: "/order-portrayed",
  },
];
const HeaderMenu = () => {
  const { isCollapse, setIsCollapse } = useContext(ThemeContext);
  return (
    <>
      <button
        className="block md:hidden text-white text-2xl"
        onClick={() => setIsCollapse(!isCollapse)}
      >
        <FaBars />
      </button>
      <nav className="md:block hidden">
        <ul className="flex text-[#cfec4a]">
          {menuLinks.map((item) => (
            <li key={item?.id}>
              <NavLink
                to={item?.slug}
                className={({ isActive }) =>
                  isActive
                    ? "bg-[#ff4e00] px-5 py-2 rounded"
                    : "px-5 py-2 rounded"
                }
              >
                {item?.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      {/* Mobile Menu */}
      <div
        className={`bg-textColor absolute -bottom-0 left-0 w-full py-4 pt-6 px-3 ${
          isCollapse
            ? "translate-y-[230px] visible opacity-100"
            : "translate-y-[270px] opacity-0 md:opacity-0 invisible md:invisible"
        } transition-all duration-300 z-50`}
      >
        <ul className="flex flex-col gap-5 text-[#cfec4a]">
          {menuLinks.map((item) => (
            <li key={item?.id} onClick={() => setIsCollapse(false)}>
              <NavLink
                to={item?.slug}
                className={({ isActive }) =>
                  isActive ? "bg-[#ff4e00] px-5 py-2 rounded" : "py-2 rounded"
                }
              >
                {item?.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default HeaderMenu;

import { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { classNames } from "../lib/utils";

const links = [
  {
    name: "Home",
    href: "#",
  },
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Skills",
    href: "#skills",
  },
  {
    name: "Projects",
    href: "#projects",
  },
];

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 70) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <header
      className={classNames(
        "fixed w-full h-16 z-50",
        shadow ? "shadow-xl bg-gray-50" : ""
      )}
    >
      <nav className="flex justify-between items-center max-w-[1240px] w-full h-full px-4 2xl:px-16 mx-auto">
        <div className="text-2xl font-bold">Kevin Dao</div>

        <div>
          <ul className="hidden md:flex">
            {links.map((link) => (
              <a href={link.href} key={link.href}>
                <li className="ml-10 text-sm uppercase hover:border-b font-semibold">
                  {link.name}
                </li>
              </a>
            ))}
          </ul>

          <div className="md:hidden cursor-pointer" onClick={handleNav}>
            <AiOutlineMenu size={24} />
          </div>
        </div>
      </nav>

      {/* mobile side menu */}
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/50" : ""
        }
        onClick={handleNav}
      >
        <div
          className={classNames(
            "fixed top-0 p-10 ease-in duration-500",
            nav
              ? "md:hidden left-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-gray-200 p-10 ease-in duration-500"
              : "left-[-100%]"
          )}
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <div className="text-2xl font-bold">Kevin Dao</div>
              <div onClick={handleNav} className="cursor-pointer">
                <AiOutlineClose size={24} />
              </div>
            </div>
            <div className="py-4 flex flex-col">
              <ul className="uppercase">
                {links.map((link) => (
                  <a href={link.href} key={link.href}>
                    <li className="py-4 text-sm font-semibold">{link.name}</li>
                  </a>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

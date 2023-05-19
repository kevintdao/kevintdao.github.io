import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

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
  {
    name: "Contact",
    href: "#contact",
  },
];

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <header className="fixed w-full h-16 shadow-xl z-[100] bg-gray-50">
      <nav className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <div className="text-2xl font-bold">Kevin Dao</div>

        <div>
          <ul className="hidden md:flex">
            {links.map((link) => (
              <a href={link.href} key={link.href}>
                <li className="ml-10 text-sm uppercase hover:border-b">
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
          className={
            nav
              ? "md:hidden fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-gray-200 p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
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
                    <li className="py-4 text-sm">{link.name}</li>
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

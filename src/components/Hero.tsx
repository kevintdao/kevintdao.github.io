import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiArrowDown } from "react-icons/hi";

import ProfileImage from "../assets/images/img-profile.jpg";

const ICON_SIZE = 30;

const links = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/kevintdao/",
    icon: <FaLinkedin size={ICON_SIZE} />,
  },
  {
    name: "Github",
    url: "https://github.com/kevintdao",
    icon: <FaGithub size={ICON_SIZE} />,
  },
];

const Main = () => {
  return (
    <div className="w-full min-h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 py-32">
        <div className="flex flex-col items-center">
          <p className="uppercase text-sm tracking-widest text-gray-600 py-2">
            Welcome to my portfolio!
          </p>
          <img
            className="rounded-lg"
            src={ProfileImage}
            alt="Profile Image"
            height={100}
            width={100}
          />

          <h1 className="py-4 text-gray-700">
            Hi, I'm <span className="text-indigo-600">Kevin</span>
          </h1>
          <h1 className="py-2 text-gray-700">Software Engineer</h1>
          <h1 className="py-2 text-gray-700">Full-Stack Developer</h1>
          <p className="py-4 text-gray-600 sm:max-w-[700] m-auto">
            I love developing web applications and learning new technologies.
          </p>

          <div className="flex items-center justify-between max-w-[330px] m-auto py-4 gap-6">
            {links.map((link) => (
              <a href={link.url} target="_blank" rel="noreferrer">
                <div className="hover:-translate-y-1 transition-transform cursor-pointer">
                  {link.icon}
                </div>
              </a>
            ))}
          </div>

          <div className="mt-8 sm:mt-10 md:mt-16">
            <a href="#about">
              <HiArrowDown size={ICON_SIZE} className="animate-bounce" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;

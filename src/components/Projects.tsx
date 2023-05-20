import { FaGithub, FaLink } from "react-icons/fa";
import Project1 from "../assets/images/project1.png";
import Project2 from "../assets/images/project2.png";
import Project3 from "../assets/images/project3.png";
import Project4 from "../assets/images/project4.png";
import Project5 from "../assets/images/project5.png";
import Project6 from "../assets/images/project6.png";

const projects = [
  {
    title: "Tuneguessr",
    description: "A music guessing game using Spotify's API",
    img: Project1,
    tech: "React, TypeScript, TailwindCSS",
    github: "https://github.com/kevintdao/tuneguessr",
    demo: "https://tuneguessr.vercel.app/",
  },
  {
    title: "IoT LED Chessboard",
    description: "A chessboard that lights up the squares of valid moves",
    img: Project2,
    tech: "React, TypeScript, TailwindCSS",
    github: "https://github.com/kevintdao/LED-Chessboard",
  },
  {
    title: "Hospital Management System",
    description: "A hospital management system for a local hospital",
    img: Project3,
    tech: "React, TypeScript, TailwindCSS",
    github: "https://github.com/brandonegg/hospitality",
  },
  {
    title: "HVAC Electronic Records",
    description: "A system for HVAC technicians to keep track of their work",
    img: Project4,
    tech: "React, TypeScript, TailwindCSS",
    github: "https://github.com/kevintdao/hvac-erecords",
  },
  {
    title: "Student Medication Logs",
    description:
      "A system for school nurses to keep track of student medications",
    img: Project5,
    tech: "React, TypeScript, TailwindCSS",
    github: "https://github.com/kevintdao/student-medication-logs",
  },
  {
    title: "Polling/Scheduling System",
    description: "A system for polling and scheduling meetings",
    img: Project6,
    tech: "React, TypeScript, TailwindCSS",
    github: "https://github.com/kevintdao/senior-design-lab-3",
  },
];

const Projects = () => {
  return (
    <div className="col-span-3">
      <p className="uppercase text-xl tracking-widest text-indigo-600 text-center">
        Projects
      </p>
      <hr className="w-6 h-1 mx-auto my-4 bg-indigo-600 border-0 rounded" />

      <div className="py-4">
        <div className="py-4 space-y-20 flex flex-col">
          {projects.map((project) => (
            <div key={project.title}>
              <div className="flex flex-col md:flex-row md:space-x-12">
                <div className="md:w-1/2 mb-4 md:mb-0">
                  <a
                    href={project.demo || project.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src={project.img}
                      alt={project.title}
                      width={1000}
                      height={1000}
                      className="rounded-xl shadow-xl hover:opacity-70"
                    />
                  </a>
                </div>
                <div className="md:w-1/2">
                  <h2 className="mb-6">{project.title}</h2>
                  <p className="mb-4">{project.tech}</p>
                  <p className="leading-7 mb-4 text-neutral-600 text-xl ">
                    {project.description}
                  </p>
                  <div className="flex flex-row align-bottom space-x-4">
                    <a href={project.github} target="_blank" rel="noreferrer">
                      <FaGithub
                        size={30}
                        className="hover:-translate-y-1 transition-transform cursor-pointer"
                      />
                    </a>

                    {project.demo ? (
                      <a href={project.demo} target="_blank" rel="noreferrer">
                        <FaLink
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </a>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;

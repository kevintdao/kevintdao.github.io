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
    description: "A music guessing game using Spotify's API.",
    img: Project1,
    tech: "Next.js, TypeScript, Mantine, tRPC, MongoDB, Spotify API, Vercel",
    github: "https://github.com/kevintdao/tuneguessr",
    demo: "https://tuneguessr.vercel.app/",
  },
  {
    title: "IoT LED Chessboard",
    description:
      "A chessboard that lights up the squares of valid moves and update the board on a web application.",
    img: Project2,
    tech: "React (Vite), TypeScript, TailwindCSS, Node.js, Stockfish, Firebase, Raspberry Pi, Python, Arduino, C++",
    github: "https://github.com/kevintdao/LED-Chessboard",
    demo: "https://www.youtube.com/watch?v=VBVisldkmQQ",
  },
  {
    title: "Hospital Management System",
    description:
      "An open platform hospital management system for doctors to manage their patients and appointments, and for patients to view their medical records and upcomming appointments.",
    img: Project3,
    tech: "Next.js, TypeScript, TailwindCSS, tRPC, Prisma, mySQL, Jest, Playwright, Docker",
    github: "https://github.com/brandonegg/hospitality",
  },
  {
    title: "HVAC Electronic Records",
    description:
      "Full stack web application for managing your buildings, units, and maintenance records for HVAC units all in one application.",
    img: Project4,
    tech: "Next.js, JavaScript, TailwindCSS, Django, Python, PostgreSQL, Heroku, Cypress, Jest",
    github: "https://github.com/kevintdao/hvac-erecords",
  },
  {
    title: "Student Medication Logs",
    description:
      "A system for school nurses to keep track of student medications.",
    img: Project5,
    tech: "Ruby on Rails, Bootstrap, PostgreSQL, RSpec, Cucumber, Heroku",
    github: "https://github.com/kevintdao/student-medication-logs",
  },
  {
    title: "Polling/Scheduling System",
    description: "Web application for scheduling a poll, similar to Doodle.",
    img: Project6,
    tech: "Next.js, TailwindCSS, JavaScript, Firebase, Vercel",
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
                      className="rounded-xl shadow-lg hover:opacity-70 hover:scale-[101%] hover:shadow-xl"
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

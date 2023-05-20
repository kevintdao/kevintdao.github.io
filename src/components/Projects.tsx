import Project1 from "../assets/images/project1.png";
import Project2 from "../assets/images/project2.png";
import Project3 from "../assets/images/project3.png";
import Project4 from "../assets/images/project4.png";
import Project5 from "../assets/images/project5.png";
import Project6 from "../assets/images/project6.png";

const projects = [
  {
    title: "Tuneguessr",
    img: Project1,
    tech: "React, TypeScript, TailwindCSS",
    url: "/projects/project-1",
  },
  {
    title: "IoT LED Chessboard",
    img: Project2,
    tech: "React, TypeScript, TailwindCSS",
    url: "/projects/project-2",
  },
  {
    title: "Hospital Management System",
    img: Project3,
    tech: "React, TypeScript, TailwindCSS",
    url: "/projects/project-3",
  },
  {
    title: "HVAC Electronic Records",
    img: Project4,
    tech: "React, TypeScript, TailwindCSS",
    url: "/projects/project-4",
  },
  {
    title: "Student Medication Logs",
    img: Project5,
    tech: "React, TypeScript, TailwindCSS",
    url: "/projects/project-5",
  },
  {
    title: "Pooling/Scheduling System",
    img: Project6,
    tech: "React, TypeScript, TailwindCSS",
    url: "/projects/project-6",
  },
];

const ProjectItem = ({
  title,
  img,
  tech,
  url,
}: {
  title: string;
  img: string;
  tech: string;
  url: string;
}) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-lg shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-blue-600 to-indigo-600">
      <img
        src={img}
        alt={title}
        className="rounded-xl group-hover:opacity-10"
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl text-white tracking-wider text-center">
          {title}
        </h3>
        <p>{tech}</p>
        <a href={url}>
          <p>More Info</p>
        </a>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div className="col-span-3">
      <p className="uppercase text-xl tracking-widest text-indigo-600">
        Projects
      </p>
      <div className="py-4">
        <h2>What I have built</h2>
        <div className="grid md:grid-cols-2 gap-8 py-4">
          {projects.map((project) => (
            <ProjectItem
              title={project.title}
              img={project.img}
              tech={project.tech}
              url={project.url}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;

const projects = [
  {
    title: "Project 1",
    img: "https://picsum.photos/1280/720",
    tech: "React, TypeScript, TailwindCSS",
    url: "/projects/project-1",
  },
  {
    title: "Project 2",
    img: "https://picsum.photos/1280/720",
    tech: "React, TypeScript, TailwindCSS",
    url: "/projects/project-2",
  },
  {
    title: "Project 3",
    img: "https://picsum.photos/1280/720",
    tech: "React, TypeScript, TailwindCSS",
    url: "/projects/project-3",
  },
  {
    title: "Project 4",
    img: "https://picsum.photos/1280/720",
    tech: "React, TypeScript, TailwindCSS",
    url: "/projects/project-4",
  },
  {
    title: "Project 5",
    img: "https://picsum.photos/1280/720",
    tech: "React, TypeScript, TailwindCSS",
    url: "/projects/project-5",
  },
  {
    title: "Project 6",
    img: "https://picsum.photos/1280/720",
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
  );
};

export default Projects;

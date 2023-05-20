const items = [
  {
    label: "Languages",
    content: [
      "TypeScript",
      "JavaScript",
      "PHP",
      "Python",
      "HTML",
      "CSS",
      "Ruby",
      "Java",
      "C++",
      "C",
      "SQL",
    ],
  },
  {
    label: "Frameworks and Tools",
    content: [
      "React",
      "React Native",
      "Next.js",
      "Node.js",
      "Express",
      "TailwindCSS",
      "Bootstrap",
      "GIT",
      "GitHub",
      "GitLab",
      "MySQL",
      "PostgreSQL",
      "MongoDB",
      "Ruby on Rails",
      "Jest",
      "Cypress",
      "Django",
      "Cucumber",
      "Docker",
      "Playwright",
      "Heroku",
    ],
  },
];

const Skills = () => {
  return (
    <div className="col-span-3">
      <p className="uppercase text-xl tracking-widest text-indigo-600">
        Skills
      </p>
      {items.map((item) => (
        <div className="py-4">
          <h2>{item.label}</h2>
          <div className="flex flex-wrap flex-row justify-start py-2">
            {item.content.map((content) => (
              <p
                key={content}
                className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
              >
                {content}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;

const items = [
  {
    label: "Languages",
    content:
      "TypeScript, JavaScript, PHP, Python, HTML, CSS, Ruby, Java, C++, SQL",
  },
  {
    label: "Frameworks and Tools",
    content:
      "Node.js, React, React Native, Next.js, PostgreSQL, mySQL, Firebase, Socket.IO, Express, GIT, Bootstrap, TailwindCSS, Rails, Bootstrap, Jest, Django, Cucumber, Docker, Playwright, Heroku",
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
          <p>{item.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Skills;

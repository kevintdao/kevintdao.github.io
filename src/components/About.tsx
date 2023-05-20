const educations = [
  {
    date: "August 2021 - May 2023",
    school: "University of Iowa, Iowa City, IA",
    gpa: "GPA: 3.90/4.00",
    degree: "Master of Science (M.S) in Electrical & Computer Engineering",
  },
  {
    date: "August 2018 - May 2022",
    school: "University of Iowa, Iowa City, IA",
    gpa: "GPA: 3.89/4.00",
    degree: "Bachelor of Science (B.S.E) in Computer Science & Engineering",
  },
];

const experiences = [
  {
    date: "June 2021 - Present",
    position: "Software Developer",
    company: "Iowa Reading Research Center, Iowa City, IA",
    items: [
      "Engineered web applications using React, NodeJS, Express, PHP, and SQL in a small team setting to expedite research on elementary and middle school students; reduced the average analysis time by 40%.",
      "Revamped the UI/UX of 5 existing projects by integrating user feedback, resulting in a 40% increase in user retention and a 25% increase in daily active users.",
      "Restructured the codebase to eliminate redundant functions and improve code readability, reducing development time by 30% and increasing code maintainability.",
      "Mastered PHP programming language within 2 weeks to build a new feature for an existing project; feature increased user engagement by 40%.",
      "Produced comprehensive documentation for 3+ current and past projects to onboard new developers, reducing new hire ramp-up time by 60%.",
    ],
  },
];

const About = () => {
  return (
    <div className="col-span-3">
      <p className="uppercase text-xl tracking-widest text-indigo-600 text-center">
        About
      </p>
      <hr className="w-6 h-1 mx-auto my-4 bg-indigo-600 border-0 rounded" />
      <div className="py-4">
        <h2>Education</h2>
        {educations.map((education) => (
          <div className="py-2">
            <p>{education.date}</p>
            <div className="flex justify-between">
              <p>{education.school}</p>
              <p>{education.gpa}</p>
            </div>
            <p>{education.degree} </p>
          </div>
        ))}
      </div>

      <div className="py-4">
        <h2>Experiences</h2>
        {experiences.map((experience) => (
          <div className="py-2">
            <p>{experience.date}</p>
            <p>{experience.position}</p>
            <p>{experience.company}</p>
            <ul className="list-disc list-desc ml-6">
              {experience.items.map((item) => (
                <li className="cursor-default" key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;

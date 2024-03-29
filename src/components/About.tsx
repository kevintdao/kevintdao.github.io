const educations = [
  {
    date: "August 2021 - May 2023",
    school: "University of Iowa, Iowa City, IA",
    gpa: "GPA: 3.90/4.00",
    degree: "M.S in Electrical & Computer Engineering",
    focus: "Focus: Software Engineering & Machine Learning",
  },
  {
    date: "August 2018 - May 2022",
    school: "University of Iowa, Iowa City, IA",
    gpa: "GPA: 3.89/4.00",
    degree: "B.S.E in Computer Science & Engineering",
    focus: "Focus: Software Engineering",
    distinction: "Graduated with Distinction",
  },
];

const experiences = [
  {
    date: "June 2023 - Present",
    position: "Cloud Developer",
    company: "Collins Aerospace - Cedar Rapids, IA",
    items: [],
  },
  {
    date: "June 2021 - July 2023",
    position: "Software Developer",
    company: "Iowa Reading Research Center - Iowa City, IA",
    items: [
      "Engineered web applications using React, NodeJS, Express, PHP, and SQL in a small team setting to expedite research on elementary and middle school students; reduced the average analysis time by 40%.",
      "Revamped the UI/UX of 5 existing projects by integrating user feedback, resulting in a 40% increase in user retention and a 25% increase in daily active users.",
      "Restructured the codebase to eliminate redundant functions and improve code readability, reducing development time by 30% and increasing code maintainability.",
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
        <h2 className="text-center md:text-left">Education</h2>
        {educations.map((education) => (
          <div className="py-4">
            <p className="text-sm text-gray-500 italic">{education.date}</p>
            <p className="text-xl font-bold">{education.degree}</p>
            <div className="flex flex-col justify-start md:flex-row md:justify-between uppercase font-semibold">
              <p>{education.school}</p>
              <p>{education.gpa}</p>
            </div>
            <p className="text-sm text-gray-500 italic">
              {education.distinction}
            </p>
          </div>
        ))}
      </div>

      <div className="py-4">
        <h2 className="text-center md:text-left">Experiences</h2>
        {experiences.map((experience) => (
          <div className="py-4">
            <p className="text-sm text-gray-500 italic">{experience.date}</p>
            <p className="text-xl font-bold">{experience.position}</p>
            <p className="uppercase font-semibold text">{experience.company}</p>
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

import Typescript from "../assets/svg/typescript-icon.svg";
import JavaScript from "../assets/svg/javascript.svg";
import PHP from "../assets/svg/php.svg";
import Python from "../assets/svg/python.svg";
import HTML from "../assets/svg/html-5.svg";
import CSS from "../assets/svg/css-3.svg";
import Ruby from "../assets/svg/ruby.svg";
import Java from "../assets/svg/java.svg";
import CPlusPlus from "../assets/svg/c-plusplus.svg";
import C from "../assets/svg/c.svg";
import React from "../assets/svg/react.svg";
import NextJS from "../assets/svg/nextjs-icon.svg";
import NodeJS from "../assets/svg/nodejs-icon.svg";
import Express from "../assets/svg/express.svg";
import TailwindCSS from "../assets/svg/tailwindcss-icon.svg";
import Bootstrap from "../assets/svg/bootstrap.svg";
import Git from "../assets/svg/git-icon.svg";
import GitHub from "../assets/svg/github-icon.svg";
import GitLab from "../assets/svg/gitlab.svg";
import MySQL from "../assets/svg/mysql-icon.svg";
import PostgreSQL from "../assets/svg/postgresql.svg";
import MongoDB from "../assets/svg/mongodb-icon.svg";
import Rails from "../assets/svg/rails.svg";
import Jest from "../assets/svg/jest.svg";
import Cypress from "../assets/svg/cypress-icon.svg";
import Django from "../assets/svg/django-icon.svg";
import Cucumber from "../assets/svg/cucumber.svg";
import Docker from "../assets/svg/docker-icon.svg";
import Playwright from "../assets/svg/playwright.svg";
import Heroku from "../assets/svg/heroku-icon.svg";
import Vercel from "../assets/svg/vercel-icon.svg";

const items = [
  {
    label: "Languages",
    contents: [
      {
        name: "TypeScript",
        icon: Typescript,
      },
      {
        name: "JavaScript",
        icon: JavaScript,
      },
      {
        name: "PHP",
        icon: PHP,
      },
      {
        name: "Python",
        icon: Python,
      },
      {
        name: "HTML",
        icon: HTML,
      },
      {
        name: "CSS",
        icon: CSS,
      },
      {
        name: "Ruby",
        icon: Ruby,
      },
      {
        name: "Java",
        icon: Java,
      },
      {
        name: "C++",
        icon: CPlusPlus,
      },
      {
        name: "C",
        icon: C,
      },
    ],
  },
  {
    label: "Frameworks and Tools",
    contents: [
      {
        name: "React",
        icon: React,
      },
      {
        name: "Next.js",
        icon: NextJS,
      },
      {
        name: "Node.js",
        icon: NodeJS,
      },
      {
        name: "Express",
        icon: Express,
      },
      {
        name: "TailwindCSS",
        icon: TailwindCSS,
      },
      {
        name: "Bootstrap",
        icon: Bootstrap,
      },
      {
        name: "Git",
        icon: Git,
      },
      {
        name: "GitHub",
        icon: GitHub,
      },
      {
        name: "GitLab",
        icon: GitLab,
      },
      {
        name: "MySQL",
        icon: MySQL,
      },
      {
        name: "PostgreSQL",
        icon: PostgreSQL,
      },
      {
        name: "MongoDB",
        icon: MongoDB,
      },
      {
        name: "Rails",
        icon: Rails,
      },
      {
        name: "Jest",
        icon: Jest,
      },
      {
        name: "Cypress",
        icon: Cypress,
      },
      {
        name: "Django",
        icon: Django,
      },
      {
        name: "Cucumber",
        icon: Cucumber,
      },
      {
        name: "Docker",
        icon: Docker,
      },
      {
        name: "Playwright",
        icon: Playwright,
      },
      {
        name: "Heroku",
        icon: Heroku,
      },
      {
        name: "Vercel",
        icon: Vercel,
      },
    ],
  },
];

const Skills = () => {
  return (
    <div className="col-span-3">
      <p className="uppercase text-xl tracking-widest text-indigo-600 text-center">
        Skills
      </p>
      <hr className="w-6 h-1 mx-auto my-4 bg-indigo-600 border-0 rounded" />
      {items.map((item) => (
        <div className="py-4">
          <h2 className="text-center md:text-left">{item.label}</h2>
          <div className="flex flex-wrap flex-row justify-center py-2 md:justify-start">
            {item.contents.map((content) => (
              <div
                key={content.name}
                className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold flex flex-col items-center gap-2 hover:scale-[102%] shadow-md"
              >
                <img
                  src={content.icon}
                  alt={content.name}
                  className="w-12 h-12"
                />
                <p>{content.name}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;

import { useState } from "react";

const Skills = () => {
  const [showSkills, setShowSkills] = useState(false);

  const toggleSkills = () => {
    setShowSkills(!showSkills);
  };

  const skillsData = [
    { name: "TypeScript", imgSrc: "/img/typescript-logo.svg" },
    { name: "JavaScript", imgSrc: "/img/js.png" },
    { name: "React JS & Native", imgSrc: "/img/reacticon.svg" },
    { name: "Next JS", imgSrc: "/img/nextjs-icon.png" },
    { name: "Prisma", imgSrc: "/img/prisma.svg" },
    { name: "Twig", imgSrc: "/img/twig.png" },
    { name: "Sass", imgSrc: "/img/sass.svg" },
    { name: "Symfony", imgSrc: "/img/symfony.svg" },
    { name: "Tailwind", imgSrc: "/img/tailwind.svg" },
    { name: "Node JS", imgSrc: "/img/nodejs.png" },
    { name: "Mongo DB", imgSrc: "/img/mongodb-icon-2.svg" },
    { name: "POSTGRE SQL", imgSrc: "/img/postgresql-logo.svg" },
    { name: "Docker", imgSrc: "/img/docker.svg" },
    { name: "Figma", imgSrc: "/img/figma.png" },
    { name: "GitHub", imgSrc: "/img/github.svg" },
  ];

  return (
    <div className="skills text-white flex flex-col justify-center">
      <div className="flex justify-center items-center">
        <h2 className="mt-4 h2txt text-xl">SKILLS</h2>
        <span
          id="arrow"
          className={`ml-2 mt-4 animate-bounce md:hidden transform`}
          onClick={toggleSkills}
        >
          &#9660;
        </span>
      </div>
      <div className="mt-1">
        <hr className="custom-hr border-t-2 border-b-2 text-center md:w-1/6 w-1/3 my-4 mx-auto" />
        {/* Affichage skills en grand écran et caché en petit écran */}
        <div className="hidden p-3 md:grid md:m-8 m-28 mt-10 justify-items-center grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {skillsData.map((skill) => (
            <div key={skill.name} className="flex flex-col items-center">
              <img
                src={skill.imgSrc}
                alt={`${skill.name} picture`}
                className={`mt-2 h-16 md:h-16 lg:h-24`}
              />
              <p className="mt-2">{skill.name}</p>
            </div>
          ))}
        </div>

        {/* Affichage skills en petit écran et caché en grand écran */}
        {showSkills && (
          <div className="md:hidden lg:hidden grid justify-items-center place-content-center text-center grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 m-1 mt-20">
            {skillsData.map((skill) => (
              <div
                key={skill.name}
                className={`flex flex-col place-content-center items-center w-1/2 h-1/2 ${
                  skill.name === "Sass" || skill.name === "Tailwind"
                    ? "mt-4"
                    : ""
                }`}
              >
                <img
                  src={skill.imgSrc}
                  alt={`${skill.name} picture`}
                  className={`mt-2 h-20 sm:h-16`}
                />
                <p className="mt-2">{skill.name}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Skills;

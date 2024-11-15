import { useState } from "react";
import { FormattedMessage } from "react-intl";
import { Carousel, Card } from "./AppleCardCarousel";

export function AppleCardsCarouselDemo() {
  const [selectedProject, setSelectedProject] = useState(null);

  // Function to open the modal with the selected project
  const openModal = (cardIndex) => {
    const project = projectContent[cardIndex];
    setSelectedProject(project);
  };

  // Function to close the modal
  const closeModal = () => {
    setSelectedProject(null);
  };

  // Mapping the cards and adding onClick to open the modal
  const cards = data.map((card, index) => (
    <div key={index} onClick={() => openModal(index)}>
      <Card card={card} index={index} />
    </div>
  ));

  return (
    <div className="w-full h-full ">
      <Carousel items={cards} />
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={closeModal} />
      )}
    </div>
  );
}

// Modal component to display project details
function ProjectModal({ project, onClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50"
        onClick={onClose}
      ></div>
      <div className="bg-custom-dark rounded-lg p-6 max-w-lg w-full z-50 shadow-lg relative max-h-[45vh] md:max-h-[90vh] overflow-y-auto scrollbar scrollbar-thumb-black lg:mt-32">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-64 object-fit rounded-lg mb-4"
        />
        <h2 className="text-xl text-custom-green font-bold mb-2">
          <FormattedMessage id={project.title} />
        </h2>
        <p className="text-sm text-white">
          <FormattedMessage id={project.description} />
        </p>
        <div className="flex flex-wrap space-x-4 mt-4">
          {project.techLogos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Technology logo ${index}`}
              className="h-8 w-auto mb-4"
            />
          ))}
        </div>
        <div className="flex flex-row justify-between">
          <button
            onClick={onClose}
            className="mt-4 w-36 h-11 bg-custom-red text-white text-center text-lg flex items-center justify-center"
          >
            <img src="/img/close.svg" alt="GitHub" className="h-5 w-5 mr-2" />
            <FormattedMessage id="Close" defaultMessage="Close" />
          </button>
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            <button className="mt-4 w-36 h-11 bg-custom-green text-white text-center text-lg flex items-center justify-center">
              <img
                src="/img/github2.svg"
                alt="GitHub"
                className="h-5 w-5 mr-2"
              />
              <FormattedMessage id="GitHub" />
            </button>
          </a>
        </div>
        {project.view ? (
          <div className="flex justify-center">
            <a href={project.view} target="_blank" rel="noopener noreferrer">
              <button className="mt-4 w-36 h-11 bg-blue-600 text-white text-center text-lg flex items-center justify-center">
                <img src="/img/eyes.png" className="h-5 w-5 mr-2" />
                <FormattedMessage id="View" />
              </button>
            </a>
          </div>
        ) : null}
      </div>
    </div>
  );
}

// Array representing cards in the carousel
const data = [
  {
    category: <FormattedMessage id="categoryWebApp" defaultMessage="Web App" />,
    title: (
      <FormattedMessage
        id="titleGlycowatch"
        defaultMessage="Traqueur de glycémie"
      />
    ),
    src: "/img/glycowatchpresentation.png",
  },
  {
    category: <FormattedMessage id="categoryWebApp" defaultMessage="Web App" />,
    title: (
      <FormattedMessage
        id="titleEnglishLearning"
        defaultMessage="For learning English"
      />
    ),
    src: "/img/enligsh-tchai-presentation.png",
  },
  {
    category: <FormattedMessage id="categoryWebApp" defaultMessage="Web App" />,
    title: (
      <FormattedMessage
        id="titleDrivingSchool"
        defaultMessage="For Driving School Center"
      />
    ),
    src: "/img/freedriving-presentation.png",
  },
  {
    category: <FormattedMessage id="categoryWebApp" defaultMessage="Web App" />,
    title: (
      <FormattedMessage id="titleBarber" defaultMessage="For Barber Business" />
    ),
    src: "/img/odb-presentation.svg",
  },
  {
    category: <FormattedMessage id="categoryWebApp" defaultMessage="Web App" />,
    title: <FormattedMessage id="titleCapsuleRH" defaultMessage="Capsule RH" />,
    src: "/img/capsulerh-presentation.svg",
  },
];

// Project details used for the modal content
const projectContent = [
  {
    title: "projectGlycowatchTitle",
    description: "projectGlycowatchDescription",
    badge: "Next JS/Prisma/PostgreSQL",
    image: "/img/capture-presentation-glycowatch-2.svg",
    techLogos: [
      "/img/nextjs-icon.png",
      "/img/prisma.svg",
      "/img/typescript-logo.svg",
      "/img/postgresql-logo.svg",
    ],
    link: "https://github.com/EddyBough/GlycoWatch",
    view: "https://glyco-watch.vercel.app/home",
  },
  {
    title: "projectEnglishTchaiTitle",
    description: "projectEnglishTchaiDescription",
    badge: "Vite JS/Symfony",
    image: "/img/myenglishtchaiscreen.svg",
    techLogos: [
      "/img/figma.png",
      "/img/vitejs-logo.svg",
      "/img/tailwind.svg",
      "/img/js.svg",
      "/img/php.svg",
      "/img/apiplatform.svg",
      "/img/postgresql-logo.svg",
      "/img/symfony.svg",
      "/img/docker.svg",
    ],
    link: "https://github.com/may-english-tchai/web-app",
    view: "https://may-english-tchai.vercel.app/",
  },
  {
    title: "projectFreeDrivingTitle",
    description: "projectFreeDrivingDescription",
    badge: "Vite JS/Symfony",
    image: "/img/freedrivingscreen.svg",
    techLogos: [
      "/img/figma.png",
      "/img/vitejs-logo.svg",
      "/img/tailwind.svg",
      "/img/js.svg",
      "/img/php.svg",
      "/img/apiplatform.svg",
      "/img/postgresql-logo.svg",
      "/img/symfony.svg",
      "/img/docker.svg",
    ],
    link: "https://github.com/free-driving/free-driving-web-app",
  },
  {
    title: "titleODB",
    description: "descriptionODB",
    badge: "Twig & Node JS",
    image: "/img/odbscreen.svg",
    techLogos: [
      "/img/twig.png",
      "/img/css3logo.svg",
      "/img/nodejs.png",
      "/img/mongodb-icon-2.svg",
    ],
    link: "https://github.com/EddyBough/ODBproject",
  },
  {
    title: "titleCapsuleHR",
    description: "descriptionCapsuleRH",
    badge: "Twig & Node JS",
    image: "/img/capsulerh-presentation.svg",
    techLogos: [
      "/img/twig.png",
      "/img/css3logo.svg",
      "/img/nodejs.png",
      "/img/mongodb-icon-2.svg",
    ],
    link: "https://github.com/EddyBough/rhproject",
  },
];

import { useState } from 'react';

const Skills = () => {
  const [showSkills, setShowSkills] = useState(false);

  const toggleSkills = () => {
    setShowSkills(!showSkills);
  };

  return (
    <div className="skills text-white flex flex-col justify-center">
      <div className="flex justify-center items-center">
        <h2 className="mt-8">SKILLS</h2>
        <span id="arrow" className="ml-2 mt-8 md:hidden" onClick={toggleSkills}>
          &#9660;
        </span>
      </div>
      <div className="mt-1">
        <hr className="custom-hr border-t-2 border-b-2 text-center md:w-1/6 w-1/3 my-4 mx-auto" />
        {/* Affichage skills en grand écran et caché en petit écran */}
        <div className="hidden md:grid m-28 mt-10 justify-items-center grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            <div className='flex flex-col items-center'><img src="/img/html5.svg" alt="htmlpicture" /><p className='mt-2'>HTML</p></div>
            <div className='flex flex-col items-center'><img src="/img/css3logo.svg" alt="csspicture" /><p className='mt-2'>CSS</p></div>
            <div className='flex flex-col items-center'><img src="/img/js.png" alt="jspicture" /><p className='mt-2'>JavaScript</p></div>
            <div className='flex flex-col items-center'><img src="/img/reacticon.svg" alt="reactjspicture" /><p className='mt-2'>React JS & Native</p></div>
            <div className='flex flex-col items-center'><img src="/img/bootstrap.png" alt="bootstrappicture" /><p className='mt-2'>Bootstrap</p></div>
            <div className='flex flex-col items-center'><img src="/img/twig.png" alt="twigpicture" /><p className='mt-2'>Twig</p></div>
            <div className='flex flex-col items-center'><img src="/img/sass.svg" alt="sasspicture" /><p className='mt-2'>Sass</p></div>
            <div className='flex flex-col items-center'><img src="/img/symfony.svg" alt="symfonyjspicture" /><p className='mt-2'>Symfony</p></div>
            <div className='flex flex-col items-center'><img src="/img/tailwind.svg" alt="tailwindpicture" /><p className='mt-2'>Tailwind</p></div>
            <div className='flex flex-col items-center'><img src="/img/nodejs.png" alt="nodejspicture" /><p className='mt-2'>Node JS</p></div>
            <div className='flex flex-col items-center'><img src="/img/mongodb-icon-2.svg" alt="mongoDBpicture" /><p className='mt-2'>Mongo DB with Mongoose</p></div>
            <div className='flex flex-col items-center'><img src="/img/sql.svg" alt="reactjspicture" /><p className='mt-2'>SQL</p></div>
            <div className='flex flex-col items-center'><img src="/img/wordpress.svg" alt="wordpresspicture" /><p className='mt-2'>Wordpress</p></div>
            <div className='flex flex-col items-center'><img src="/img/docker.svg" alt="dockerpicture" /><p className='mt-2'>Docker</p></div>
            <div className='flex flex-col items-center'><img src="/img/figma.png" alt="figmapicture" /><p className='mt-2'>Figma</p></div>
            <div className='flex flex-col items-center'><img src="/img/apiplatform.svg" alt="apiplatformpicture" /><p className='mt-2'>API Platform</p></div>
            <div className='flex flex-col items-center'><img src="/img/graphql.svg" alt="graphqlpicture" /><p className='mt-2'>GraphQL</p></div>
            <div className='flex flex-col items-center'><img src="/img/github.svg" alt="graphqlpicture" /><p className='mt-2'>GitHub</p></div>
          </div>

        {/* Affichage skills en petit écran et caché en grand écran */}
        {showSkills && (
          <div className="md:hidden lg:hidden grid justify-items-center grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 m-1">
            <div className='flex flex-col items-center w-1/2'><img src="/img/html5.svg" alt="htmlpicture" /><p className='mt-1'>HTML</p></div>
            <div className='flex flex-col items-center w-1/2'><img src="/img/css3logo.svg" alt="csspicture" /><p>CSS</p></div>
            <div className='flex flex-col items-center w-1/2 h-1/2 mt-8'><img src="/img/js.png" alt="jspicture" /><p className='mt-9'>JavaScript</p></div>
            <div className='flex flex-col items-center w-1/2'><img src="/img/reacticon.svg" alt="reactjspicture" /><p>React JS & Native</p></div>
            <div className='flex flex-col items-center w-1/2 h-1/2'><img src="/img/bootstrap.png" alt="bootstrappicture" /><p className='mt-2'>Bootstrap</p></div>
            <div className='flex flex-col items-center w-1/2 h-1/2'><img src="/img/twig.png" alt="twigpicture" /><p className='mt-2'>Twig</p></div>
            <div className='flex flex-col items-center w-1/2 h-1/2'><img src="/img/sass.svg" alt="sasspicture" /><p className='mt-2'>Sass</p></div>
            <div className='flex flex-col items-center justify-center w-1/2 h-1/2'><img src="/img/symfony.svg" alt="symfonyjspicture" /><p className='mt-2'>Symfony</p></div>
            <div className='flex flex-col items-center w-1/2 h-1/2'><img src="/img/tailwind.svg" alt="tailwindpicture" /><p className='mt-11'>Tailwind</p></div>
            <div className='flex flex-col items-center justify-center w-1/2 h-1/2'><img src="/img/nodejs.png" alt="nodejspicture" /><p className='mt-2'>Node JS</p></div>
            <div className='flex flex-col items-center w-1/2 h-1/2'><img src="/img/mongodb-icon-2.svg" alt="mongoDBpicture" /><p className='mt-2'>Mongo DB</p></div>
            <div className='flex flex-col items-center w-1/2 h-1/2'><img src="/img/sql.svg" alt="reactjspicture" /><p className='mt-2'>SQL</p></div>
            <div className='flex flex-col items-center w-1/2 h-1/2'><img src="/img/wordpress.svg" alt="wordpresspicture" /><p className='mt-2'>Wordpress</p></div>
            <div className='flex flex-col items-center justify-center w-1/2 h-1/2'><img src="/img/docker.svg" alt="dockerpicture" /><p className='mt-2'>Docker</p></div>
            <div className='flex flex-col items-center w-1/2 h-1/2'><img src="/img/figma.png" alt="figmapicture" /><p className='mt-2'>Figma</p></div>
            <div className='flex flex-col items-center w-1/2 h-1/2'><img src="/img/apiplatform.svg" alt="apiplatformpicture" /><p className='mt-2'>API Platform</p></div>
            <div className='flex flex-col items-center justify-center w-1/2 h-1/2'><img src="/img/graphql.svg" alt="graphqlpicture" /><p className='mt-2'>GraphQL</p></div>
            <div className='flex flex-col items-center w-1/2 h-1/2'><img src="/img/github.svg" alt="graphqlpicture" /><p className='mt-6'>GitHub</p></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Skills;



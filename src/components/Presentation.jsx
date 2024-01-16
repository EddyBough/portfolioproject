import "../assets/styles/presentation.scss";

const Presentation = () => {
  return (
    <div className="presentation flex flex-col md:flex-row">
      {/* Div de gauche */}
      <div className="  p-8 md:w-1/2 md:h-auto">
        <div className="text-center md:text-left md:ml-5 md:mt-14">
          <h2 className="md:text-xl font-bold">CREATIVE DEVELOPER FULLSTACK</h2>
          <h3 className="text-2xl text-white md:text-3xl font-extrabold">
            I’M A CREATIVE DEVELOPER
          </h3>
          <hr className="custom-hr border-t-2 border-b-2 text-center md:w-1/4 w-1/3 my-4 mx-auto md:mx-0" />
          <p className="mb-4 text-white text-s md:h-auto">
          Hello everyone, I&apos;m Eddy and I&apos;m a full-stack developer. <br />
  I have a good understanding of programming and have worked on many amazing projects. <br />
  I&apos;m always learning and growing, which is one of the things I love most about my job. <br /> 
  You can check out some of my work below.
          </p>
          <div className="flex justify-center md:justify-start">
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <div className="w-20 h-20 relative">
  <div className="custom-button absolute w-full h-full rounded-full micro"></div>
  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
    <div className="w-0 h-0 border-l-[20px] border-l-transparent border-t-[30px] border-t-white-500 border-r-[20px] border-r-transparent rounded"></div>
  </div>
</div></a>
<p className="text-white m-3 mt-7">Click here to see my CV</p>
          </div>
        </div>
      </div>

      {/* Div de droite */}
      <div className="w-full md:w-full">
        <img
          className="h-60 w-full md:w-full object-cover md:h-screen"
          src="/img/image11.png"
          alt="Image"
        />
      </div>
    </div>
  );
};

export default Presentation;

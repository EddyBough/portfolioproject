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
            Hello everyone, I’m Eddy and I’m a fullstack developer <br /> I have
            good knowledge and basics in coding <br />I have worked in many
            amazing project I’m still learning the job. <br /> You can check
            some of my work lower in the page
          </p>
          <div className="flex space-x-4">
            <button className="py-2 rounded cursor-pointer">
              <img src="/public/img/imagebutton.svg" alt="Image" />
            </button>
            <p className="text-white mt-10">Click here to see my CV</p>
          </div>
        </div>
      </div>

      {/* Div de droite */}
      <div className="w-full md:w-full">
        <img
          className="h-60 w-full md:w-full md:h-screen"
          src="/img/image11.png"
          alt="Image"
        />
      </div>
    </div>
  );
};

export default Presentation;

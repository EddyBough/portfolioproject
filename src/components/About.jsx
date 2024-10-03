import { FormattedMessage } from "react-intl";

const About = () => {
  return (
    <div id="aboutMeSection" className="about flex flex-col lg:flex-row">
      {/* Div de gauche */}
      <div className="md:h-auto">
        <img
          className="h-auto lg:h-[800px] lg:w-[550px] md:w-screen md:h-full md:object-cover lg:object-cover"
          src="/img/onthemoon2.png"
          alt="futurepicture"
        />
      </div>

      {/* Div de droite */}
      <div className="flex flex-col justify-center items-center md:items-start md:ml-10">
        <div className="space-y-8 text-center md:mt-10 mt-10 md:text-left m-2">
          <h3 className="text-xl">
            <FormattedMessage id="AboutMe" />
          </h3>
          <h4 className="md:text-4xl text-2xl text-white">
            <FormattedMessage id="reinventingMyself" />
          </h4>
          <hr className="custom-hr border-t-2 border-b-2 my-4 m-20 md:mx-0 md:w-1/4" />
          <p className="text-white text-s">
            <FormattedMessage id="everyProjectDifferent" />
            <br />
            <FormattedMessage id="elevateProjects" />
            <br />
            <FormattedMessage id="TechnologyDescription" />
            <br />
            <FormattedMessage id="redefineInnovation" />
            <br />
            <FormattedMessage id="prideReinventing" />
            <br />
            <FormattedMessage id="opportunityShowcase" />
            <br />
            <FormattedMessage id="finalCollaborationMessage" />
          </p>
          <div className="flex justify-center md:flex-row md:justify-start md:p-0 p-5 items-center space-x-3 md:m-0 m-1">
            <img src="/img/cleancode.svg" alt="cleancode" />
            <p className="text-white md:text-sm text-xs">
              <FormattedMessage id="cleanCode" />
            </p>
            <img src="/img/moderndesign.svg" alt="moderndesign" />
            <p className="text-white md:text-sm text-xs">
              <FormattedMessage id="modernDesign" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

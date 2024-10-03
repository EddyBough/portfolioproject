import { Link as ScrollLink } from "react-scroll";
import { FormattedMessage } from "react-intl";

const Footer = () => {
  return (
    <div className="footer flex flex-col h-96 space-y-8 items-center justify-center">
      <div className="">
        <a href="/">
          <img className="w-26 h-20" src="/img/logo1v3.png" alt="logo" />
        </a>
      </div>
      <div className="flex flex-row justify-center md:space-x-8 space-x-6">
        <a
          href="http://github.com/EddyBough?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="h-11" src="/img/github2.svg" alt="github" />
        </a>
        <a
          href="http://www.linkedin.com/in/eddy-boughanmi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="h-11" src="/img/linkedin2.svg" alt="linkedin" />
        </a>
      </div>
      <div className="flex flex-row md:text-sm text-[12px] text-white">
        <p className="text-white">
          <FormattedMessage id="allRightsReserved" />
        </p>
      </div>
    </div>
  );
};

export default Footer;

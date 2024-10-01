import { Link as ScrollLink } from "react-scroll";
import { FormattedMessage } from "react-intl";

const Footer = () => {
  return (
    <div className="footer flex flex-col h-96 space-y-10 items-center justify-center">
      <div className="">
        <a href="/">
          <img className="w-16 h-16" src="/img/logo1v3.png" alt="logo" />
        </a>
      </div>
      <div>
        <ul className="flex flex-row md:justify-center md:space-x-4 space-x-3 md:text-sm text-[10px] text-white">
          <li className="cursor-pointer">
            <ScrollLink
              to="presentationSection"
              smooth={true}
              duration={500}
              activeClass="active-link"
              offset={-130}
            >
              <FormattedMessage id="home" />
            </ScrollLink>
          </li>
          <li className="cursor-pointer">
            <ScrollLink
              to="aboutMeSection"
              smooth={true}
              duration={500}
              activeClass="active-link"
              offset={-70}
            >
              <FormattedMessage id="aboutMe" />
            </ScrollLink>
          </li>
          <li className="cursor-pointer">
            <ScrollLink
              to="serviceSection"
              smooth={true}
              duration={500}
              activeClass="active-link"
              offset={-90}
            >
              <FormattedMessage id="services" />
            </ScrollLink>
          </li>
          <li className="cursor-pointer">
            <ScrollLink
              to="portfolioSection"
              smooth={true}
              duration={500}
              activeClass="active-link"
              offset={-130}
            >
              <FormattedMessage id="portfolio" />
            </ScrollLink>
          </li>
          <li className="cursor-pointer">
            <ScrollLink
              to="contactSection"
              smooth={true}
              duration={500}
              activeClass="active-link"
              offset={-80}
            >
              <FormattedMessage id="contactMe" />
            </ScrollLink>
          </li>
        </ul>
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

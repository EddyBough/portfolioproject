import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import LanguageSwitcher from "./LanguageSwitcher";

const Navmenu = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  // Function to redirect to the targeted component whatever we are in any pages
  const handleRedirectToHome = (sectionId) => {
    if (location.pathname !== "/") {
      navigate("/", { replace: true });
      setTimeout(() => {
        // setTimeout to let some time until ScrollLink is activated
        document
          .getElementById(sectionId)
          ?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  return (
    <div className="navmenu">
      <div className="text-white md:p-4">
        <div className="lg:hidden flex justify-between flex-wrap">
          <Link to="/">
            <img
              src="/img/logo1v3.png"
              alt="Logo"
              className="h-16 mr-7 md:h-20 lg:h-32 m-5 object-cover"
            />
          </Link>
          <div className="flex mr-10">
            <button
              onClick={toggleMenu}
              className={`text-xl text-white burger-icon animate__animated ${
                isMenuOpen ? "animate__flipInX" : "animate__flipInY"
              }`}
            >
              <span className="text-5xl">&#8801;</span>
            </button>
          </div>

          {isMenuOpen && (
            <ul className="flex flex-col space-y-3 items-center m-3 md:m-0 mt-4 w-full">
              <li className="cursor-pointer">
                {location.pathname === "/" ? (
                  <ScrollLink
                    to="presentationSection"
                    smooth={true}
                    duration={500}
                    offset={-270}
                    onClick={closeMenu}
                  >
                    <FormattedMessage id="home" />
                  </ScrollLink>
                ) : (
                  <button
                    onClick={() => handleRedirectToHome("presentationSection")}
                  >
                    <FormattedMessage id="home" />
                  </button>
                )}
              </li>
              <li className="cursor-pointer">
                {location.pathname === "/" ? (
                  <ScrollLink
                    to="aboutMeSection"
                    smooth={true}
                    duration={500}
                    offset={-60}
                    onClick={closeMenu}
                  >
                    <FormattedMessage id="aboutMe" />
                  </ScrollLink>
                ) : (
                  <button
                    onClick={() => handleRedirectToHome("aboutMeSection")}
                  >
                    <FormattedMessage id="aboutMe" />
                  </button>
                )}
              </li>
              <li className="cursor-pointer">
                {location.pathname === "/" ? (
                  <ScrollLink
                    to="serviceSection"
                    smooth={true}
                    duration={500}
                    offset={-230}
                    onClick={closeMenu}
                  >
                    <FormattedMessage id="services" />
                  </ScrollLink>
                ) : (
                  <button
                    onClick={() => handleRedirectToHome("serviceSection")}
                  >
                    <FormattedMessage id="services" />
                  </button>
                )}
              </li>
              <li className="cursor-pointer">
                {location.pathname === "/" ? (
                  <ScrollLink
                    to="portfolioSection"
                    smooth={true}
                    duration={500}
                    offset={-250}
                    onClick={closeMenu}
                  >
                    <FormattedMessage id="portfolio" />
                  </ScrollLink>
                ) : (
                  <button
                    onClick={() => handleRedirectToHome("portfolioSection")}
                  >
                    <FormattedMessage id="portfolio" />
                  </button>
                )}
              </li>
              <li className="cursor-pointer">
                {location.pathname === "/" ? (
                  <ScrollLink
                    to="contactSection"
                    smooth={true}
                    duration={500}
                    offset={-250}
                    onClick={closeMenu}
                  >
                    <FormattedMessage id="contactMe" />
                  </ScrollLink>
                ) : (
                  <button
                    onClick={() => handleRedirectToHome("contactSection")}
                  >
                    <FormattedMessage id="contactMe" />
                  </button>
                )}
              </li>
              <li className="p-1">
                <LanguageSwitcher />
              </li>
            </ul>
          )}
        </div>

        <div className="hidden lg:flex justify-between items-center">
          <div className="flex justify-center">
            <Link to="/">
              <img
                src="/img/logo1v3.png"
                alt="Logo"
                className="h-32 mt-0 object-cover ml-4"
              />
            </Link>
          </div>
          <ul className="flex lg:mt-6 space-x-9 mr-14">
            <li className="cursor-pointer">
              {location.pathname === "/" ? (
                <ScrollLink
                  to="presentationSection"
                  smooth={true}
                  duration={500}
                  offset={-130}
                >
                  <FormattedMessage id="home" />
                </ScrollLink>
              ) : (
                <button
                  onClick={() => handleRedirectToHome("presentationSection")}
                >
                  <FormattedMessage id="home" />
                </button>
              )}
            </li>
            <li className="cursor-pointer">
              {location.pathname === "/" ? (
                <ScrollLink
                  to="aboutMeSection"
                  smooth={true}
                  duration={500}
                  offset={-70}
                >
                  <FormattedMessage id="aboutMe" />
                </ScrollLink>
              ) : (
                <button onClick={() => handleRedirectToHome("aboutMeSection")}>
                  <FormattedMessage id="aboutMe" />
                </button>
              )}
            </li>
            <li className="cursor-pointer">
              {location.pathname === "/" ? (
                <ScrollLink
                  to="serviceSection"
                  smooth={true}
                  duration={500}
                  offset={-230}
                >
                  <FormattedMessage id="services" />
                </ScrollLink>
              ) : (
                <button onClick={() => handleRedirectToHome("serviceSection")}>
                  <FormattedMessage id="services" />
                </button>
              )}
            </li>
            <li className="cursor-pointer">
              {location.pathname === "/" ? (
                <ScrollLink
                  to="portfolioSection"
                  smooth={true}
                  duration={500}
                  offset={-130}
                >
                  <FormattedMessage id="portfolio" />
                </ScrollLink>
              ) : (
                <button
                  onClick={() => handleRedirectToHome("portfolioSection")}
                >
                  <FormattedMessage id="portfolio" />
                </button>
              )}
            </li>
            <li className="cursor-pointer">
              {location.pathname === "/" ? (
                <ScrollLink
                  to="contactSection"
                  smooth={true}
                  duration={500}
                  offset={-130}
                >
                  <FormattedMessage id="contactMe" />
                </ScrollLink>
              ) : (
                <button onClick={() => handleRedirectToHome("contactSection")}>
                  <FormattedMessage id="contactMe" />
                </button>
              )}
            </li>
            <li className="block">
              <LanguageSwitcher />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navmenu;

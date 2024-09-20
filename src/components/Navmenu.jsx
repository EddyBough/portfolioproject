import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { FormattedMessage } from "react-intl";
import LanguageSwitcher from "./LanguageSwitcher";

const Navmenu = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="navmenu">
      <div className="text-white md:p-4">
        {/* --- Mobile & Tablette --- */}
        <div className="lg:hidden flex justify-between flex-wrap">
          {/* Logo centré (mobile et tablette) */}
          <a href="/" className="">
            <img
              src="/img/logo1v3.png"
              alt="Logo"
              className="h-16 mr-7 md:h-20 lg:h-32 m-5 object-cover"
            />
          </a>

          {/* Menu burger à droite (mobile et tablette) */}
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

          {/* Menu centré en dessous du logo (mobile et tablette) */}
          {isMenuOpen && (
            <ul className="flex flex-col space-y-3 items-center m-3 md:m-0 mt-4 w-full">
              <li className="cursor-pointer">
                <ScrollLink
                  to="presentationSection"
                  smooth={true}
                  duration={500}
                  activeClass="active-link"
                  offset={-270}
                  onClick={closeMenu}
                >
                  <FormattedMessage id="home" />
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="aboutMeSection"
                  smooth={true}
                  duration={500}
                  activeClass="active-link"
                  offset={-60}
                  onClick={closeMenu}
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
                  offset={-230}
                  onClick={closeMenu}
                >
                  <FormattedMessage id="services" />
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="portfolioSection"
                  smooth={true}
                  duration={500}
                  activeClass="active-link"
                  offset={-250}
                  onClick={closeMenu}
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
                  offset={-250}
                  onClick={closeMenu}
                >
                  <FormattedMessage id="contactMe" />
                </ScrollLink>
              </li>
              <li className="p-1">
                <LanguageSwitcher />
              </li>
            </ul>
          )}
        </div>

        {/* --- Bureau (LG) --- */}
        <div className="hidden lg:flex justify-between items-center">
          {/* Logo (bureau) */}
          <div className="flex justify-center">
            <a href="/">
              <img
                src="/img/logo1v3.png"
                alt="Logo"
                className="h-32 mt-0 object-cover ml-4"
              />
            </a>
          </div>
          {/* Menu en ligne (bureau) */}
          <ul className="flex lg:mt-6 space-x-9 mr-14">
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
                offset={-230}
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
                offset={-130}
              >
                <FormattedMessage id="contactMe" />
              </ScrollLink>
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

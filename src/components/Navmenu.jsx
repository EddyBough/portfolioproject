import { useState } from 'react';
import { Link as ScrollLink } from "react-scroll";


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
        <div className="md:flex justify-between items-center">
          <div className="flex justify-center"> 
            <a href="/">
              <img src="/img/logo1v2.png" alt="Logo" className="md:h-32 md:mt-0 mt-3 sm: h-14" />
            </a>
          </div>
          <div className="md:ml-auto md:mt-14"> 
            {/* Menu pour les écrans moyens et grands */}
            <ul className="md:flex space-x-8 md:mr-14 sm: hidden">
              <li className='cursor-pointer'>
              <ScrollLink to="presentationSection" smooth={true} duration={500} activeClass="active-link" offset={-130}>
                  HOME
                  </ScrollLink> 
              </li>
              <li className='cursor-pointer'>
              <ScrollLink to="aboutMeSection" smooth={true} duration={500} activeClass="active-link" offset={-70}>
                ABOUT ME
              </ScrollLink>
              </li>
              <li className='cursor-pointer'>
              <ScrollLink to="serviceSection" smooth={true} duration={500} activeClass="active-link" offset={-230}>
                  SERVICES
                  </ScrollLink>
              </li>
              <li className='cursor-pointer'>
              <ScrollLink to="portfolioSection" smooth={true} duration={500} activeClass="active-link" offset={-130}>
                  PORTFOLIO
                  </ScrollLink>
              </li>
              <li className='cursor-pointer'>
              <ScrollLink to="contactSection" smooth={true} duration={500} activeClass="active-link" offset={-130}>
                  CONTACT ME
                  </ScrollLink>
              </li>
            </ul>

            {/* Bouton pour afficher/masquer le menu sur les petits écrans */}
            <div className="md:hidden flex justify-end text-center p-3 -mt-14">
              <button
                onClick={toggleMenu}
                className={`text-xl text-white burger-icon animate__animated ${
                  isMenuOpen ? 'animate__flipInX' : 'animate__flipInY'
                }`}
              >
                <span className="text-5xl ">&#8801;</span> 
              </button>
            </div>

            {/* Menu pour les petits écrans */}
            {isMenuOpen && (
              <ul className="md:hidden flex flex-col space-y-3 items-center mt-2">
                <li className='cursor-pointer'>
                <ScrollLink to="presentationSection" smooth={true} duration={500} activeClass="active-link" offset={-270} onClick={closeMenu}>
                    HOME
                    </ScrollLink> 
                </li>
                <li>
                <ScrollLink to="aboutMeSection" smooth={true} duration={500} activeClass="active-link" offset={-60} onClick={closeMenu}>
                ABOUT ME
              </ScrollLink>
                </li>
                <li className='cursor-pointer'>
              <ScrollLink to="serviceSection" smooth={true} duration={500} activeClass="active-link" offset={-230} onClick={closeMenu}>
                  SERVICES
                  </ScrollLink>
                </li>
                <li>
                <ScrollLink to="portfolioSection" smooth={true} duration={500} activeClass="active-link" offset={-250} onClick={closeMenu}>
                    PORTFOLIO
                    </ScrollLink>
                </li>
                <li className='cursor-pointer m-1 pb-5'>
                <ScrollLink to="contactSection" smooth={true} duration={500} activeClass="active-link" offset={-250} onClick={closeMenu}>
                    CONTACT ME
                    </ScrollLink>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navmenu;





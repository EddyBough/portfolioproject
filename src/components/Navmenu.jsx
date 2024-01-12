import { useState } from 'react';
import '../assets/styles/navmenu.scss';

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
          <div className="flex justify-center"> {/* Utiliser 'items-center' pour aligner le logo au centre */}
            <a href="http://">
              <img src="/img/logo1v2.png" alt="Logo" className="md:h-32 md:mt-0 mt-3 sm: h-14" />
            </a>
          </div>
          <div className="md:ml-auto md:mt-14"> {/* Utiliser 'ml-auto' pour déplacer le menu à droite */}
            {/* Menu pour les écrans moyens et grands */}
            <ul className="md:flex space-x-8 md:mr-14 sm: hidden">
              <li>
                <a id="home" href="#" onClick={closeMenu}>
                  HOME
                </a>
              </li>
              <li>
                <a href="#" onClick={closeMenu}>
                  ABOUT ME
                </a>
              </li>
              <li>
                <a href="#" onClick={closeMenu}>
                  SERVICES
                </a>
              </li>
              <li>
                <a href="#" onClick={closeMenu}>
                  PORTFOLIO
                </a>
              </li>
              <li>
                <a href="#" onClick={closeMenu}>
                  CONTACT ME
                </a>
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
                <span className="text-5xl ">&#8801;</span> {/* Icône de burger */}
              </button>
            </div>

            {/* Menu pour les petits écrans */}
            {isMenuOpen && (
              <ul className="md:hidden flex flex-col space-y-3 items-center mt-2">
                <li>
                  <a id="home" href="#" onClick={closeMenu}>
                    HOME
                  </a>
                </li>
                <li>
                  <a href="#" onClick={closeMenu}>
                    ABOUT ME
                  </a>
                </li>
                <li>
                  <a href="#" onClick={closeMenu}>
                    SERVICES
                  </a>
                </li>
                <li>
                  <a href="#" onClick={closeMenu}>
                    PORTFOLIO
                  </a>
                </li>
                <li className='m-1 pb-5'>
                  <a href="#" onClick={closeMenu}>
                    CONTACT ME
                  </a>
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





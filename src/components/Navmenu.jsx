import { useState } from 'react';
import "../assets/styles/navmenu.scss";


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
      <div className="text-white p-4">
        <div className="grid md:grid-cols-7 items-center">
          <div className="sm: flex justify-center">
            <img src="/img/logo1.svg" alt="Logo" className="md:h-32 mt-6 sm: h-28 w-60" />
          </div>
          <div className="md:col-span-5 mt-14">
            {/* Menu pour les écrans moyens et grands */}
            <ul className="md:flex space-x-8 justify-end sm: hidden">
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
            <div className="md:hidden text-center sm:-mt-7">
              <button onClick={toggleMenu} className={`text-xl text-white burger-icon animate__animated ${isMenuOpen ? 'animate__flipInX' : 'animate__flipInY'}`}>
                <span className="text-5xl">&#8801;</span> {/* Icône de burger */}
              </button>
            </div>

            {/* Menu pour les petits écrans */}
            {isMenuOpen && (
              <ul className="md:hidden flex flex-col items-center mt-3">
                <li className='m-1'>
                  <a id="home" href="#" onClick={closeMenu}>
                    HOME
                  </a>
                </li>
                <li className='m-1'>
                  <a href="#" onClick={closeMenu}>
                    ABOUT ME
                  </a>
                </li>
                <li className='m-1'>
                  <a href="#" onClick={closeMenu}>
                    SERVICES
                  </a>
                </li>
                <li className='m-1'>
                  <a href="#" onClick={closeMenu}>
                    PORTFOLIO
                  </a>
                </li>
                <li className='m-1'>
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
}

export default Navmenu;




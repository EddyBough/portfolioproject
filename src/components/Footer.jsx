import { Link as ScrollLink } from "react-scroll";

const Footer = () => {
    return (
      <div className="footer flex flex-col h-96 space-y-10 items-center justify-center">
        <div className="">
          <a href="/"><img className="w-16 h-16" src="/img/logo1v3.png" alt="" /></a>
        </div>
        <div>
          <ul className="flex flex-row md:justify-center md:space-x-4 space-x-3 md:text-sm text-[12px] text-white">
          <li className='cursor-pointer'>
              <ScrollLink to="presentationSection" smooth={true} duration={500} activeClass="active-link" offset={-130}>
                  HOME
                  </ScrollLink> 
              </li>
            <li className="cursor-pointer">
            <ScrollLink to="aboutMeSection" smooth={true} duration={500} activeClass="active-link" offset={-70}>
                ABOUT ME
              </ScrollLink>
            </li>
            <li className='cursor-pointer'>
              <ScrollLink to="serviceSection" smooth={true} duration={500} activeClass="active-link" offset={-90}>
                  SERVICES
                  </ScrollLink>
            </li>
            <li className='cursor-pointer'>
              <ScrollLink to="portfolioSection" smooth={true} duration={500} activeClass="active-link" offset={-130}>
                  PORTFOLIO
                  </ScrollLink>
            </li>
            <li className='cursor-pointer'>
              <ScrollLink to="contactSection" smooth={true} duration={500} activeClass="active-link" offset={-80}>
                  CONTACT ME
                  </ScrollLink>
            </li>
          </ul>
        </div>
        <div className="flex flex-row justify-center md:space-x-8 space-x-6"><img src="/img/facebook.svg" alt="fb" /><img src="/img/x.svg" alt="x" /><a href="http://www.linkedin.com/in/eddy-boughanmi" target="_blank" rel="noopener noreferrer"><img src="/img/linkedin.svg" alt="linkedin" /></a></div>
      <div className="flex flex-row md:text-sm text-[12px] text-white"><p className="text-white">© 2024 Eddy Boughanmi. All Rights Reserved.</p></div>
      </div>
    );
  }
  
  export default Footer;
  
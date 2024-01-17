const Footer = () => {
    return (
      <div className="footer flex flex-col h-96 space-y-10 items-center justify-center">
        <div className="">
          <img className="w-16 h-16" src="/img/logo1v3.png" alt="" />
        </div>
        <div>
          <ul className="flex flex-row md:justify-center md:space-x-4 space-x-3 md:text-sm text-[12px] text-white">
            <li>
              <a href="#">
                HOME
              </a>
            </li>
            <li>
              <a href="#">
                ABOUT ME
              </a>
            </li>
            <li>
              <a href="#">
                SERVICES
              </a>
            </li>
            <li>
              <a href="#">
                PORTFOLIO
              </a>
            </li>
            <li>
              <a href="#">
                CONTACT ME
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-row justify-center md:space-x-8 space-x-6"><img src="/img/facebook.svg" alt="fb" /><img src="/public/img/x.svg" alt="x" /><img src="/public/img/linkedin.svg" alt="" /></div>
      <div className="flex flex-row md:text-sm text-[12px] text-white"><p className="text-white">© 2024 Eddy Boughanmi. All Rights Reserved.</p></div>
      </div>
    );
  }
  
  export default Footer;
  
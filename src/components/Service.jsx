import { FormattedMessage } from 'react-intl';
import MeteorsDemo from "./MeteorsDemo.jsx";

const Services = () => {
  return (
    <div id="serviceSection" className="service md:p-20 flex flex-col md:flex-row">
      {/* Div de gauche */}
      <div className="flex flex-col justify-center md:w-1/2">
        <div className="flex justify-center">
          <h2 className="h2txt text-2xl mt-16 md:mt-16"><FormattedMessage id="myServices" /></h2>
        </div>
        <div className="flex justify-center">
          <h3 className="text-white text-3xl mt-8"><FormattedMessage id="whatIDo" /></h3>
        </div>
        <div>
          <hr className="custom-hr mt-8 border-t-2 border-b-2 text-center md:w-1/6 w-1/3 my-4 mx-auto" />
        </div>
      </div>

      {/* Div de droite - cartes par MeteorsDemo */}
      <div className="flex flex-col md:mt-4 md:flex md:justify-center p-12 md:p-9 items-center md:w-screen">
        <div className="flex flex-col md:flex-row lg:flex-row md:space-x-32 space-y-8 md:space-y-0 lg:space-y-0">
          <MeteorsDemo
            imageSrc="/public/img/website.png" 
            title={<FormattedMessage id="websiteMobileAppsTitle" />}
            description={<FormattedMessage id="websiteMobileAppsDescription" />} />
          <MeteorsDemo
            imageSrc="/public/img/brand.png" 
            title={<FormattedMessage id="brandIdentityTitle" />}
            description={<FormattedMessage id="brandIdentityDescription" />} />
        </div>
        <div className="flex flex-col md:flex-row lg:flex-row md:space-x-32 mt-8 md:mt-6 space-y-8 md:space-y-0 lg:space-y-0">
          <MeteorsDemo
            imageSrc="/public/img/uxdesign.png" 
            title={<FormattedMessage id="uiUxDesignTitle" />}
            description={<FormattedMessage id="uiUxDesignDescription" />} />
          <MeteorsDemo
            imageSrc="/public/img/SEO.png" 
            title={<FormattedMessage id="searchEngineOptimizationTitle" />}
            description={<FormattedMessage id="searchEngineOptimizationDescription" />} />
        </div>
      </div>
    </div>
  );
}

export default Services;



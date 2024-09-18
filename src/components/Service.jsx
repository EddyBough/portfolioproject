import { FormattedMessage } from "react-intl";
import MeteorsDemo from "./ui/MeteorsDemo.jsx";

const Services = () => {
  return (
    <div
      id="serviceSection"
      className="service md:p-20 flex flex-col lg:flex-row"
    >
      {/* Div de gauche */}
      <div className="flex flex-col justify-center lg:w-1/2">
        <div className="flex justify-center">
          <h2 className="h2txt text-xl mt-16 md:mt-16">
            <FormattedMessage id="myServices" />
          </h2>
        </div>
        <div className="flex justify-center">
          <h3 className="text-white text-3xl mt-8">
            <FormattedMessage id="whatIDo" />
          </h3>
        </div>
        <div>
          <hr className="custom-hr mt-8 border-t-2 border-b-2 text-center md:w-1/6 w-1/3 my-4 mx-auto" />
        </div>
      </div>

      {/* Div de droite */}
      <div className="flex flex-col md:mt-4 p-12 md:p-9 items-center w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-6 ">
          <MeteorsDemo
            imageSrc="/img/website.png"
            title={<FormattedMessage id="websiteMobileAppsTitle" />}
            description={<FormattedMessage id="websiteMobileAppsDescription" />}
          />
          <MeteorsDemo
            imageSrc="/img/brand.png"
            title={<FormattedMessage id="brandIdentityTitle" />}
            description={<FormattedMessage id="brandIdentityDescription" />}
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-6  mt-8 md:gap-10">
          <MeteorsDemo
            imageSrc="/img/uxdesign.png"
            title={<FormattedMessage id="uiUxDesignTitle" />}
            description={<FormattedMessage id="uiUxDesignDescription" />}
          />
          <MeteorsDemo
            imageSrc="/img/SEO.png"
            title={<FormattedMessage id="searchEngineOptimizationTitle" />}
            description={
              <FormattedMessage id="searchEngineOptimizationDescription" />
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Services;

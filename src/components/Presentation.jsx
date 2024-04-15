import { FormattedMessage } from 'react-intl';

const Presentation = () => {
  return (
    <div id="presentationSection" className="presentation flex flex-col md:flex-row">
      {/* Div de gauche */}
      <div className="  p-8 md:w-1/2 md:h-auto">
        <div className="text-center md:text-left md:ml-5 md:mt-14">
          <h2 className="md:text-xl font-bold"><FormattedMessage id="creativeDeveloperFullstack" /></h2>
          <h3 className="text-2xl text-white md:text-3xl font-extrabold">
            <FormattedMessage id="creativeDeveloper" />
          </h3>
          <hr className="custom-hr border-t-2 border-b-2 text-center md:w-1/4 w-1/3 my-4 mx-auto md:mx-0" />
          <div className="mb-4 text-white text-s md:h-auto">
          <p><FormattedMessage id="introPart1" /></p>
          <p><FormattedMessage id="introPart2" /></p>
          <p><FormattedMessage id="introPart3" /></p>
          <p><FormattedMessage id="introPart4" /></p>
          </div>
          <div className="flex justify-center md:justify-start">
          <a href="/img/myCV.pdf" target="_blank" rel="noopener noreferrer">
            <div className="w-20 h-20 relative">
  <div className="custom-button absolute w-full h-full rounded-full micro"></div>
  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
    <div className="w-0 h-0 border-l-[20px] border-l-transparent border-t-[30px] border-t-white-500 border-r-[20px] border-r-transparent rounded"></div>
  </div>
</div></a>
<p className="text-white m-3 mt-7"><FormattedMessage id="clickHereToSeeCV"/></p>
          </div>
        </div>
      </div>

      {/* Div de droite */}
      <div className="w-full md:w-full">
        <img
          className="h-60 w-full md:w-full object-cover md:h-screen"
          src="/img/image11.png"
          alt="Image"
        />
      </div>
    </div>
  );
};

export default Presentation;

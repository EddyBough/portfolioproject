import { FormattedMessage } from "react-intl";
import { AppleCardsCarouselDemo } from "./ui/AppleCardsCarouselDemo";

const Creation = () => {
  return (
    <div
      id="portfolioSection"
      className="creation flex flex-col items-center space-y-5"
    >
      <h3 id="portfolioTitle" className="mt-8 text-xl">
        <FormattedMessage id="portfolioTitle" />
      </h3>
      <h4 id="latestProjectTitle" className="text-white md:text-4xl text-2xl">
        <FormattedMessage id="latestProjectTitle" />
      </h4>
      <hr className="custom-hr border-t-2 border-b-2 text-center md:w-1/6 w-1/3 my-4 mx-auto" />
      <AppleCardsCarouselDemo />
    </div>
  );
};

export default Creation;

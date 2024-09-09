import PropTypes from "prop-types";
import { Meteors } from "./Meteor";

export function MeteorsDemo({ imageSrc, title, description }) {
  return (
    <div className="w-full relative max-w-xs">
      <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl"></div>
      <div className="relative shadow-xl bg-card1 px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col items-center">
        {imageSrc && (
          <img
            src={imageSrc}
            alt={title}
            className="mb-4 w-20 h-17 object-cover rounded-lg"
          />
        )}
        <h1 className="font-bold text-l text-white mb-4 relative z-50 text-center">
          {title}
        </h1>
        <p className="font-normal text-base  mb-4 relative z-50 text-white text-center">
          {description}
        </p>
        <Meteors number={20} />
      </div>
    </div>
  );
}

MeteorsDemo.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default MeteorsDemo;

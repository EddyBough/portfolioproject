import React from "react";

interface ButtonCVProps {
  href: string;
  title: string;
  text: string;
}

const ButtonCV: React.FC<ButtonCVProps> = ({ href, title, text }) => {
  return (
    <div className="relative inline-flex group">
      {/* Dégradé à l'extérieur du bouton */}
      <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] rounded-xl blur-3xl opacity-70 group-hover:opacity-100 group-hover:scale-[0.85] transition-all duration-200"></div>
      {/* Bouton avec le dégradé interne */}
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        title={title}
        className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gradient-to-r from-[#121816] via-[#172825] to-[#1c3531] font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
        role="button"
      >
        {text}
      </a>
    </div>
  );
};

export default ButtonCV;

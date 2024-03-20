

import MeteorsDemo from "./MeteorsDemo.jsx" // Assure-toi que le chemin d'importation est correct

const Services = () => {
  return (
    <div id="serviceSection" className="service md:p-20 flex flex-col md:flex-row">
      {/* Div de gauche */}
      <div className="flex flex-col justify-center md:w-1/2">
        <div className="flex justify-center">
          <h2 className="h2txt mt-16 md:mt-16">MY SERVICES</h2>
        </div>
        <div className="flex justify-center">
          <h3 className="text-white text-3xl mt-8">What I Do</h3>
        </div>
        <div>
          <hr className="custom-hr mt-8 border-t-2 border-b-2 text-center md:w-1/6 w-1/3 my-4 mx-auto" />
        </div>
      </div>

      {/* Div de droite - Remplacement des cartes par MeteorsDemo */}
      <div className="flex flex-col md:mt-4 md:flex md:justify-center p-12 md:p-9 items-center md:w-screen">
        <div className="flex flex-col md:flex-row lg:flex-row md:space-x-32 space-y-8 md:space-y-0 lg:space-y-0">
        <MeteorsDemo
        imageSrc="/public/img/website.png" 
        title="Website and Mobile Applications" 
        description="The Best Web and Mobile Application solutions and Database" />
        <MeteorsDemo
        imageSrc="/public/img/brand.png" 
        title="Brand Identity" 
        description="Logo, Colors Idendity, Brand Development and so much more" />
        </div>
        <div className="flex flex-col md:flex-row lg:flex-row md:space-x-32 mt-8 md:mt-6 space-y-8 md:space-y-0 lg:space-y-0">
        <MeteorsDemo
        imageSrc="/public/img/uxdesign.png" 
        title="UI & UX Design" 
        description="Modern Design and Respect for Design charters" />
        <MeteorsDemo
        imageSrc="/public/img/SEO.png" 
        title="Search Engine Optimization" 
        description="Keywords and Structure for optimal visibility and better SEO" />
      </div>
      </div>
    </div>
  );
}

export default Services;

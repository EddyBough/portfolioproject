const Services = () => {
    return (
      <div id="serviceSection" className="service md:p-20 flex flex-col md:flex-row">
      {/* Div de gauche */}
      <div className="flex flex-col justify-center it md:w-1/2">
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
  
      {/* Div de droite */}
      <div className="flex flex-col md:mt-4 md:flex md:justify-center p-12 md:p-9 items-center md:w-screen">
    <div className="flex flex-col md:flex-row">
      {/* Première Card */}
      <div className="bg-card1 flex h-36 w-56 flex-col items-center p-4 rounded-md mb-4 md:mr-8">
        <img src="/public/img/brand.png" alt="brandidendity" />
        <p className="text-white p-3">Brand Idendity</p>
      </div>
  
      {/* Deuxième Card */}
      <div className="bg-card2 flex h-36 w-56 flex-col items-center text-center p-4 rounded-md mb-4 md:ml-4">
        <img src="/public/img/website.png" alt="website" />
        <p className="text-white p-3">Website & Applications</p>
      </div>
    </div>
  
    <div className="flex flex-col md:flex-row">
      {/* Troisième Card */}
      <div className="bg-card2 flex flex-col h-36 w-56 items-center p-4 rounded-md mb-4 md:mr-8">
        <img src="/public/img/uxdesign.png" alt="uxuxidesign" />
        <p className=" text-white p-7">UI & UX Design</p>
      </div>
  
      {/* Quatrième Card */}
      <div className="bg-card1 flex flex-col h-36 w-56 items-center p-4 rounded-md mb-4 md:ml-4">
        <img src="/public/img/ad.png" alt="ads" />
        <p className="text-white p-3">Ads</p>
      </div>
    </div>
  </div>
  
  
  
  
  
  
    </div>
    )
  }
  
  export default Services
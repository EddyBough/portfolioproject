

const About = () => {
  return (
    <div className="about md:flex flex-row">
    {/* Div de gauche */}
    <div className="md:h-auto">
        <img src="/img/futurepic.svg" alt="futurepicture" />
    </div>

      {/* Div de droite */}
      
      <div className="flex flex-col justify-center items-center md:items-start md:ml-10">
  <div className="flex flex-col justify-center space-y-8 text-center md:mt-0 mt-10 md:text-left m-2">
    <h3>ABOUT ME</h3>
    <h4 className="md:text-4xl text-2xl text-white">I&apos;m reinventing Myself in Each Every New Project</h4>
    <hr className="custom-hr border-t-2 border-b-2 my-4 m-20 md:mx-0 md:w-1/4" />
    <p className="text-white text-s">Every project are different because you are unique. For all budget. <br />
    Elevate your projects with a touch of uniqueness! My service redefine innovation,<br /> ensuring that each project is a masterpiece on its own. <br />
    I take pride in reinventing myself with every new endeavor,
    bringing fresh perspectives and creativity. <br />
    Every collaboration is an opportunity to showcase your distinctiveness. </p>
    <div className="flex justify-center md:flex-row md:justify-start items-center space-x-3 md:m-0 m-1">
        <img src="/img/cleancode.svg" alt="cleancode" /><p className="text-white md:text-sm text-xs">Clean Code</p>
        <img src="/img/moderndesign.svg" alt="moderndesign" /><p className="text-white md:text-sm text-xs">Modern Design</p>

    </div>
  </div>
</div>


        
      

      </div>
  )
}

export default About
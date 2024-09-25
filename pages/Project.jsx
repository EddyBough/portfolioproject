import Navmenu from "../src/components/Navmenu";
import Footer from "../src/components/Footer";

const Project = () => {
  return (
    <div>
      <Navmenu />
      <div className="h-96 bg-black flex justify-center">
        <p className="text-center">Page en travaux</p>
      </div>
      <Footer />
    </div>
  );
};

export default Project;

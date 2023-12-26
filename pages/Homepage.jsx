import Presentation from "../src/components/Presentation";
import Skills from "../src/components/Skills";
import Navmenu from "../src/components/navmenu";
import Service from "../src/components/Service";
import About from "../src/components/About";


const HomePage = () => {
	return (
		<>
			<Navmenu />
			<Presentation />
			<Skills />
			<Service/>
			<About/>
		</>
	);
};

export default HomePage;

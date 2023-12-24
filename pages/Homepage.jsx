import Presentation from "../src/components/Presentation";
import Skills from "../src/components/Skills";
import Navmenu from "../src/components/navmenu";
import Service from "../src/components/Service";


const HomePage = () => {
	return (
		<>
			<Navmenu />
			<Presentation />
			<Skills />
			<Service/>
		</>
	);
};

export default HomePage;

import { About } from "./components/About";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Nav } from "./components/Nav";
import { ScrollToTop } from "./components/ScrollToTop";
import { Services } from "./components/Services";
import { Tours } from "./components/Tours";
import { tours } from "./data/tourData";
import { services } from "./data/serviceData";
import { navLinks, socialLinks } from "./data/navigationData";

function App() {
	return (
		<>
			<Nav links={navLinks} socialLinks={socialLinks} />
			<Hero />
			<About />
			<Services items={services} />
			<Tours items={tours} />
			<Footer links={navLinks} socialLinks={socialLinks} />
			<ScrollToTop />
		</>
	);
}

export default App;

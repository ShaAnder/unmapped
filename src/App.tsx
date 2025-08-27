import { Nav } from "./components/Nav";

function App() {
	// select span
	const date: number = new Date().getFullYear();

	return (
		<>
			<Nav />
			{/* <span id="date">{date}</span> */}
		</>
	);
}

export default App;

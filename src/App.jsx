import { useState } from "react"
import Header from "./components/header"
import Nav from "./components/nav"
import Movies from "./components/movies"
import CircleDiagramLanguage from "./components/cirkeldiagram_language"
import "./App.css"

function App() {
	const [count, setCount] = useState(0)

	return (
		<>
			<Header></Header>
			<Nav></Nav>
			{/* <Movies></Movies> */}
			<CircleDiagramLanguage></CircleDiagramLanguage>
			<h2></h2>
		</>
	)
}

export default App

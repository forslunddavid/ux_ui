import { useState } from "react"
import Header from "./components/header"
import Nav from "./components/nav"
import Movies from "./components/movies"
import CircleDiagramLanguage from "./components/circlediagram_language"
import "./App.css"
import LineDiagramLength from "./components/linediagram_length"
import BardiagramMonth from "./components/bardiagram_months"

function App() {
	const [count, setCount] = useState(0)

	return (
		<>
			<Header></Header>
			<Nav></Nav>
			{/* <Movies></Movies> */}
			<CircleDiagramLanguage></CircleDiagramLanguage>
			<LineDiagramLength></LineDiagramLength>
			<BardiagramMonth></BardiagramMonth>
			<h2></h2>
		</>
	)
}

export default App

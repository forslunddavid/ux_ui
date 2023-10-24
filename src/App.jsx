import { useState } from "react"
import Header from "./components/Header"
import Nav from "./components/Nav"
import Movies from "./components/movies"
import "./App.css"

function App() {
	const [count, setCount] = useState(0)

	return (
		<>
			<Header></Header>
			<Nav></Nav>
			<Movies></Movies>
			<h2></h2>
		</>
	)
}

export default App

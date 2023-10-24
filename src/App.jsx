import { useState } from "react"
import Header from "./components/Header"
import Nav from "./components/Nav"
import "./App.css"

function App() {
	const [count, setCount] = useState(0)

	return (
		<>
			<Header></Header>
			<Nav></Nav>
			<h2></h2>
		</>
	)
}

export default App

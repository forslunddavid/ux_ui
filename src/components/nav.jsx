function Nav({ setShowMovies }) {
	return (
		<nav>
			<button onClick={() => setShowMovies(true)}>Filmer</button>
			<button onClick={() => setShowMovies(false)}>Data</button>
		</nav>
	)
}

export default Nav

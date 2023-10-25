function Nav({ setShowMovies, setShowSearch }) {
	return (
		<nav>
			<button
				onClick={() => {
					setShowMovies(true)
					setShowSearch(false)
				}}
			>
				Filmer
			</button>

			<button
				onClick={() => {
					setShowSearch(true)
					setShowMovies(false)
				}}
			>
				Sök
			</button>

			<button
				onClick={() => {
					setShowMovies(false)
					setShowSearch(false)
				}}
			>
				Data
			</button>
		</nav>
	)
}

export default Nav

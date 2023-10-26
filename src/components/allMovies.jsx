import documentariesData from "../data/documentaries.json"
import featureFilmsData from "../data/feature-films.json"
import specialsData from "../data/specials.json"
import { motion } from "framer-motion"

function AllMovies() {
	const allMovies = [
		...documentariesData,
		...featureFilmsData,
		...specialsData,
	]

	const headerVariants = {
		hidden: { x: -100 },
		visible: { x: 0 },
		transition: {
			type: "spring",
			stiffness: 200,
			damping: 10,
		},
	}

	const cardVariants = {
		hidden: { x: -100, opacity: 0 },
		visible: { x: 0, opacity: 1 },
		transition: {
			type: "spring",
			stiffness: 200,
			damping: 10,
		},
	}

	return (
		<>
			<div>
				<motion.h2
					variants={headerVariants}
					initial="hidden"
					animate="visible"
				>
					Alla Filmer
				</motion.h2>
				<ul className="moviecontainer">
					{allMovies.map((movie, index) => (
						<motion.li
							className="movie"
							key={index}
							variants={cardVariants}
							initial="hidden"
							animate="visible"
						>
							<h3>{movie.Title}</h3>
							<p>Genre: {movie.Genre}</p>
							<p>Premiär: {movie.Premiere}</p>
							<p>Speltid: {movie.Runtime}</p>
							<p>Språk: {movie.Language}</p>
						</motion.li>
					))}
				</ul>
			</div>
		</>
	)
}

export default AllMovies

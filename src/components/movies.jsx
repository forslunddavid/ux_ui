import featureFilmsData from "../data/feature-films.json"
import { motion } from "framer-motion"

const headerVariants = {
	hidden: { x: -100 },
	visible: { x: 0 },
	transition: { type: "spring", stiffness: 200, damping: 10 },
}

const cardVariants = {
	hidden: { x: -100, opacity: 0 },
	visible: { x: 0, opacity: 1 },
	transition: { type: "spring", stiffness: 400, damping: 20 },
}

function FeatureFilms() {
	const featureFilms = [...featureFilmsData]

	return (
		<>
			<div>
				<motion.h2
					variants={headerVariants}
					initial="hidden"
					animate="visible"
				>
					Filmer
				</motion.h2>
				<ul className="moviecontainer">
					{featureFilms.map((movie, index) => (
						<motion.li
							variants={cardVariants}
							initial="hidden"
							animate="visible"
							className="movie"
							key={index}
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

export default FeatureFilms

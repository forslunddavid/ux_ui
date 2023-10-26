import { useState } from "react"
import { motion } from "framer-motion"

//Principer: Squash när jag trycker på knappen. Follow through, menyknapparna i dropdownen fortsätter röra sig lite efter att meny öppnat sig. Timing för att justera animeringars rörelser. Anticipation, när man hovrar över knapparna så blir de större (indikation på att man kan interagera med dem). Använde Pose to pose när jag designade menyrörelsen. (Exaggeration?)

const itemVariants = {
	open: {
		opacity: 1,
		y: 0,
		transition: { type: "spring", stiffness: 300, damping: 24 },
	},
	closed: {
		opacity: 0,
		y: 20,
		transition: { duration: 0.2 },
	},
}

function Nav({ onCategoryChange }) {
	const [filmsOpen, setFilmsOpen] = useState(false)
	const [dataOpen, setDataOpen] = useState(false)
	const [selectedCategory, setSelectedCategory] = useState("all")

	const handleClick = (category) => {
		setSelectedCategory(category)
		onCategoryChange(category)
	}

	return (
		<div className="navbar">
			<motion.nav initial={false} className="menu">
				<div className={`menu-button ${filmsOpen ? "open" : ""}`}>
					<motion.button
						whileTap={{ scale: 0.9 }}
						whileHover={{
							scale: 1.1,
							transition: { duration: 0.2 },
						}}
						onClick={() => setFilmsOpen(!filmsOpen)}
					>
						Filmer
						<motion.div
							variants={{
								open: { rotate: 180 },
								closed: { rotate: 0 },
							}}
							transition={{ duration: 0.2 }}
							style={{ originY: 0.55 }}
						>
							<svg width="15" height="15" viewBox="0 0 20 20">
								<path d="M0 7 L 20 7 L 10 16" />
							</svg>
						</motion.div>
					</motion.button>

					<motion.ul
						className={`menu ul ${filmsOpen ? "open" : ""}`}
						animate={filmsOpen ? "open" : "closed"}
						variants={{
							open: {
								clipPath: "inset(0% 0% 0% 0% round 10px)",
								transition: {
									type: "spring",
									bounce: 0,
									duration: 0.7,
									delayChildren: 0.3,
									staggerChildren: 0.05,
								},
							},
							closed: {
								clipPath: "inset(10% 50% 90% 50% round 10px)",
								transition: {
									type: "spring",
									bounce: 0,
									duration: 0.3,
								},
							},
						}}
						style={{ pointerEvents: filmsOpen ? "auto" : "none" }}
					>
						<motion.li
							variants={itemVariants}
							onClick={() => handleClick("all")}
						>
							Alla Filmer
						</motion.li>
						<motion.li
							variants={itemVariants}
							onClick={() => handleClick("movies")}
						>
							Filmer
						</motion.li>
						<motion.li
							variants={itemVariants}
							onClick={() => handleClick("specials")}
						>
							Specials
						</motion.li>
						<motion.li
							variants={itemVariants}
							onClick={() => handleClick("documentaries")}
						>
							Dokumentärer
						</motion.li>
					</motion.ul>
				</div>

				<div className="menu-button">
					<motion.button
						whileTap={{ scale: 0.9 }}
						whileHover={{
							scale: 1.1,
							transition: { duration: 0.2 },
						}}
						onClick={() => setDataOpen(!dataOpen)}
					>
						Data
						<motion.div
							variants={{
								open: { rotate: 180 },
								closed: { rotate: 0 },
							}}
							transition={{ duration: 0.2 }}
							style={{ originY: 0.55 }}
						>
							<svg width="15" height="15" viewBox="0 0 20 20">
								<path d="M0 7 L 20 7 L 10 16" />
							</svg>
						</motion.div>
					</motion.button>

					<motion.ul
						className={`menu ul ${dataOpen ? "open" : ""}`}
						animate={dataOpen ? "open" : "closed"}
						variants={{
							open: {
								clipPath: "inset(0% 0% 0% 0% round 10px)",
								transition: {
									type: "spring",
									bounce: 0,
									duration: 0.7,
									delayChildren: 0.3,
									staggerChildren: 0.05,
								},
							},
							closed: {
								clipPath: "inset(10% 50% 90% 50% round 10px)",
								transition: {
									type: "spring",
									bounce: 0,
									duration: 0.3,
								},
							},
						}}
						style={{ pointerEvents: dataOpen ? "auto" : "none" }}
					>
						<motion.li
							variants={itemVariants}
							onClick={() => handleClick("language")}
						>
							Språk
						</motion.li>
						<motion.li
							variants={itemVariants}
							onClick={() => handleClick("month")}
						>
							Releasedatum
						</motion.li>
						<motion.li
							variants={itemVariants}
							onClick={() => handleClick("length")}
						>
							Längd
						</motion.li>
						<motion.li
							variants={itemVariants}
							onClick={() => handleClick("genre")}
						>
							Genre
						</motion.li>
					</motion.ul>
				</div>

				<div className="menu-button">
					<motion.button
						whileTap={{ scale: 0.9 }}
						whileHover={{
							scale: 1.1,
							transition: { duration: 0.2 },
						}}
						onClick={() => handleClick("search")}
						// onClick={() => {
						// 	setShowSearch(true)
						// 	console.log("klicka")
						// }}
					>
						Sök
					</motion.button>
				</div>
			</motion.nav>
		</div>
	)
}

export default Nav

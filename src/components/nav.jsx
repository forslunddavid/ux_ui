import { useState } from "react"
import { motion } from "framer-motion"

//Principer: Squash när jag trycker på knappen. Follow through, menyknapparna i dropdownen fortsätter röra sig lite efter att meny öppnat sig. Timing för att justera animeringars rörelser. Anticipation, när man hovrar över knapparna så blir de större (indikation på att man kan interagera med dem). Använde Pose to pose när jag designade menyrörelsen. (Exaggeration? Staging (skuggor)?)

const itemVariants = {
	open: {
		// När menyn är öppen, sätt opacity till 1 för att göra objekt synliga.
		opacity: 1,
		// Sätt y till 0 för att placera objektet på sin ursprungliga position.
		y: 0,
		// Använd en fjäderliknande övergång med specifika parametrar för smidig rörelse.
		transition: { type: "spring", stiffness: 200, damping: 10 },
	},
	closed: {
		// När menyn är stängd, sätt opacity till 0 för att gömma objektet.
		opacity: 0,
		// Flytta objektet nedåt (positivt y-värde) med 20 enheter för att dölja det.
		y: 20,
		// Använd en kortare övergångstid (0.3 sekunder) för snabb döljning.
		transition: { duration: 0.3 },
	},
}

function Nav({ onCategoryChange }) {
	const [filmsOpen, setFilmsOpen] = useState(false)
	const [dataOpen, setDataOpen] = useState(false)
	const [selectedCategory, setSelectedCategory] = useState("all")

	const handleClick = (category) => {
		setSelectedCategory(category)
		onCategoryChange(category)
		closeMenus()
	}

	const openFilms = () => {
		setFilmsOpen(true)
		setDataOpen(false)
		if (filmsOpen) {
			closeMenus()
		}
	}

	const openData = () => {
		setDataOpen(true)
		setFilmsOpen(false)
		if (dataOpen) {
			closeMenus()
		}
	}

	const closeMenus = () => {
		setFilmsOpen(false)
		setDataOpen(false)
	}

	return (
		<section className="navbar" id="navbar">
			<motion.nav initial={false} className="menu">
				<div className={`menu-button ${filmsOpen ? "open" : ""}`}>
					<motion.button
						whileTap={{ scale: 0.9 }}
						whileHover={{
							scale: 1.1,
							transition: { duration: 0.2 },
						}}
						onClick={openFilms}
					>
						Filmer
						<motion.div
							initial={filmsOpen ? "open" : "closed"}
							animate={filmsOpen ? "open" : "closed"}
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
						className={`open-menu menu ul ${
							filmsOpen ? "open" : ""
						}`}
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
							whileTap={{ scale: 0.9 }}
							whileHover={{
								scale: 1.1,
								transition: { duration: 0.2 },
							}}
							variants={itemVariants}
							onClick={() => handleClick("all")}
						>
							Alla Filmer
						</motion.li>
						<motion.li
							whileTap={{ scale: 0.9 }}
							whileHover={{
								scale: 1.1,
								transition: { duration: 0.2 },
							}}
							variants={itemVariants}
							onClick={() => handleClick("movies")}
						>
							Filmer
						</motion.li>
						<motion.li
							whileTap={{ scale: 0.9 }}
							whileHover={{
								scale: 1.1,
								transition: { duration: 0.2 },
							}}
							variants={itemVariants}
							onClick={() => handleClick("specials")}
						>
							Specials
						</motion.li>
						<motion.li
							whileTap={{ scale: 0.9 }}
							whileHover={{
								scale: 1.1,
								transition: { duration: 0.2 },
							}}
							variants={itemVariants}
							onClick={() => handleClick("documentaries")}
						>
							Dokumentärer
						</motion.li>
					</motion.ul>
				</div>

				<div className={`menu-button ${dataOpen ? "open" : ""}`}>
					<motion.button
						whileTap={{ scale: 0.9 }}
						whileHover={{
							scale: 1.1,
							transition: { duration: 0.2 },
						}}
						onClick={openData}
					>
						Data
						<motion.div
							initial={dataOpen ? "open" : "closed"}
							animate={dataOpen ? "open" : "closed"}
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
						className={`open-menu menu ul ${
							dataOpen ? "open" : ""
						}`}
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
							whileTap={{ scale: 0.9 }}
							whileHover={{
								scale: 1.1,
								transition: { duration: 0.2 },
							}}
							variants={itemVariants}
							onClick={() => handleClick("language")}
						>
							Språk
						</motion.li>
						<motion.li
							whileTap={{ scale: 0.9 }}
							whileHover={{
								scale: 1.1,
								transition: { duration: 0.2 },
							}}
							variants={itemVariants}
							onClick={() => handleClick("month")}
						>
							Releasedatum
						</motion.li>
						<motion.li
							whileTap={{ scale: 0.9 }}
							whileHover={{
								scale: 1.1,
								transition: { duration: 0.2 },
							}}
							variants={itemVariants}
							onClick={() => handleClick("length")}
						>
							Längd
						</motion.li>
						<motion.li
							whileTap={{ scale: 0.9 }}
							whileHover={{
								scale: 1.1,
								transition: { duration: 0.2 },
							}}
							variants={itemVariants}
							onClick={() => handleClick("genre")}
						>
							Genre
						</motion.li>
					</motion.ul>
				</div>

				<div className="menu-button search-button">
					<motion.button
						whileTap={{ scale: 0.9 }}
						whileHover={{
							scale: 1.1,
							transition: { duration: 0.2 },
						}}
						onClick={() => handleClick("search")}
					>
						Sök
					</motion.button>
				</div>
			</motion.nav>
		</section>
	)
}

export default Nav

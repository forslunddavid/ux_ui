import { useState } from "react"
import { motion } from "framer-motion"

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

function Nav({ setShowMovies, setShowSearch }) {
	const [filmsOpen, setFilmsOpen] = useState(false)
	const [dataOpen, setDataOpen] = useState(false)
	const [searchOpen, setSearchOpen] = useState(false)

	return (
		<div className="navbar">
			<motion.nav initial={false} className="menu">
				<div className={`menu-button ${filmsOpen ? "open" : ""}`}>
					<motion.button
						whileTap={{ scale: 0.97 }}
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
						<motion.li variants={itemVariants}>
							Alla Filmer
						</motion.li>
						<motion.li variants={itemVariants}>Filmer</motion.li>
						<motion.li variants={itemVariants}>Specials</motion.li>
						<motion.li variants={itemVariants}>
							Dokumentärer
						</motion.li>
					</motion.ul>
				</div>

				<div className="menu-button">
					<motion.button
						whileTap={{ scale: 0.97 }}
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
						<motion.li variants={itemVariants}>Språk</motion.li>
						<motion.li variants={itemVariants}>
							Releasedatum
						</motion.li>
						<motion.li variants={itemVariants}>Längd</motion.li>
						<motion.li variants={itemVariants}>Genre</motion.li>
					</motion.ul>
				</div>

				<div className="menu-button">
					<motion.button
						whileTap={{ scale: 0.97 }}
						onClick={() => {
							setShowSearch(true)
							setShowMovies(false)
						}}
					>
						Sök
					</motion.button>
				</div>
			</motion.nav>
		</div>
	)
}

export default Nav

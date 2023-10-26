import { motion } from "framer-motion"

const headerVariants = {
	hidden: { y: -100 },
	visible: { y: 0 },
	transition: { type: "spring", stiffness: 200, damping: 10 },
}

function Header() {
	return (
		<>
			<header>
				<motion.h1
					variants={headerVariants}
					initial="hidden"
					animate="visible"
					className="header"
				>
					Movieflex
				</motion.h1>
			</header>
		</>
	)
}

export default Header

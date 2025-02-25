"use client";

import styled from "styled-components";
import { motion } from "framer-motion";

const StyledLogoLoader = styled(motion.div)`
	width: 100%;
	height: 100vh;
	background-color: #1f7a8c;
	color: #fff;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Logo = styled(motion.span)`
	font-family: "Satisfy", sans-serif;
	font-size: 5rem;
	width: 5%;
`;

const backgroundVariants = {
	hidden: { y: "-100vh", opacity: 0 },
	visible: {
		y: 0,
		opacity: 1,
		transition: {
			// delay: 0.02,
			duration: 1,
			ease: [0.76, 0, 0.24, 1],
		},
	},
	exit: {
		y: "-100vh",
		opacity: 0,
		transition: {
			// delay: 0.02,
			duration: 1,
			ease: [0.76, 0, 0.24, 1],
		},
	},
};

const textVariants = {
	hidden: { y: 20, opacity: 0 },
	visible: (i) => ({
		y: 0,
		opacity: 1,
		transition: {
			delay: 1.2 + i * 0.02, // Each letter appears after the previous one
			duration: 0.3,
			ease: [0.76, 0, 0.24, 1],
		},
	}),
	exit: (i) => ({
		y: 20,
		opacity: 0,
		transition: {
			delay: i * 0.02, // Each letter appears after the previous one
			duration: 0.3,
			ease: [0.76, 0, 0.24, 1],
		},
	}),
};

const AnimatedText = () => {
	const text = "Kardinal laundry";

	return (
		<StyledLogoLoader
			variants={backgroundVariants}
			initial="hidden"
			animate="visible"
			exit="exit"
		>
			{Array.from(text).map((letter, index) => (
				<Logo
					key={index}
					variants={textVariants}
					initial="hidden"
					animate="visible"
					exit="exit"
					custom={index}
				>
					{letter}
				</Logo>
			))}
		</StyledLogoLoader>
	);
};

function LogoLoader() {
	return <AnimatedText />;
}

export default LogoLoader;

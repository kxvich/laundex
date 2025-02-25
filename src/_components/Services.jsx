"use client";

import Button from "@/_components/Button";
import Footer from "@/_components/Footer";
import styled from "styled-components";
import { useRouter } from "next/navigation";
import Loader from "@/_components/Loader";
import { useState } from "react";
import useMediaQuery from "@/Hooks/useMediaQuery";
import { AnimatePresence, motion } from "framer-motion";
import { useUser } from "@/contexts/UserContexts";
import SideBar from "./SideBar";

const ServicesPage = styled.div``;
const LogoContainer = styled.div`
	overflow: hidden;
	margin-bottom: 1.5rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-right: 2rem;
`;
const Logo = styled(motion.h1)`
	padding: 2rem;
	color: #022b3a;
	font-size: 2.5rem;
	position: relative;
	font-family: "Satisfy", serif;
	display: inline-block;
	cursor: pointer;
`;
const Container = styled.div`
	padding: 2rem;
	text-align: center;
`;
const HeaderContainer = styled.div`
	overflow: hidden;
	margin-bottom: 1.5rem;
`;
const Header = styled(motion.h3)`
	color: #022b3a;
	font-size: 2rem;
	font-weight: 100;
	font-family: "poppins", sans-serif !important;
`;
const HeadingContainer = styled.div`
	overflow: hidden;
	margin-bottom: 1.5rem;
`;
const Heading = styled(motion.h1)`
	color: #022b3a;
	font-size: 4rem;
	font-family: "poppins", sans-serif !important;
`;
const Paragraph = styled(motion.p)`
	color: #022b3a;
	font-size: 1.8rem;
	font-family: "poppins", sans-serif !important;
`;
const BackgroundImage = styled(motion.div)`
	width: 100%;
	height: 80vh;
	background-image: url("/images/servicesBackground1.jpg");
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 2rem;

	@media only screen and (max-width: 26.75rem) {
		height: 50vh;
	}
`;
const ImageText = styled(motion.h1)`
	color: #fff;
	font-size: 6rem;
	text-align: center;
	font-family: "poppins", sans-serif !important;
`;
const ParagraphContainer = styled.div`
	text-align: center;
	margin-bottom: 4rem;
	overflow: hidden;
`;
const Paragraph2 = styled(motion.p)`
	margin: 0 auto;
	width: 80%;
	font-size: 1.8rem;
	color: #022b3a;
	font-family: "poppins", sans-serif !important;
`;
const Heading2Container = styled.div`
	overflow: hidden;
`;
const Heading2 = styled.h2`
	padding: 2rem;
	font-size: 2rem;
	color: #022b3a;
	text-align: center;
	font-family: "poppins", sans-serif !important;
`;
const Paragraph3 = styled.p`
	margin: 0 auto 4rem;
	width: 90%;
	font-size: 1.8rem;
	color: #022b3a;
	text-align: center;
	font-family: "poppins", sans-serif !important;
`;
const ButtonContainer = styled.div`
	margin-bottom: 3.5rem;
	animation-fill-mode: backwards;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 2rem;
`;
const Menu = styled.li`
	color: #00b4d8;
	font-size: 2rem;
	display: none;
	margin-right: 1.3rem;

	@media only screen and (max-width: 56.25rem) {
		display: inline-block;
	}
`;

function Services() {
	const { isOpen, setIsOpen } = useUser();
	const isMobile = useMediaQuery("(max-width: 765px)");
	const [isLoading, setIsLoading] = useState(false);
	const router = useRouter();

	function handleRouting(page) {
		setIsLoading(true);
		router.push(page);
		setIsLoading(false);
	}

	function handleMenu() {
		setIsOpen(true);
	}

	return (
		<ServicesPage>
			{isLoading && <Loader />}

			<LogoContainer>
				<Logo
					initial={{ opacity: 0, y: 100 }}
					animate={{
						opacity: 1,
						y: 0,
						transition: { duration: 0.8, ease: [0.75, 0, 0.24, 1], delay: 0.1 },
					}}
					exit={{
						opacity: 0,
						y: 100,
						transition: { duration: 0.8, ease: [0.75, 0, 0.24, 1] },
					}}
					// onClick={() => router.push("/")}
				>
					<Menu onClick={handleMenu}>
						<i className="fa-solid fa-bars"></i>
					</Menu>
					Kardinal laundry
				</Logo>
				<Button onclick={() => router.back()}>Back</Button>
			</LogoContainer>
			<Container>
				<HeaderContainer>
					<Header
						initial={{ opacity: 0, y: 100 }}
						animate={{
							opacity: 1,
							y: 0,
							transition: {
								duration: 0.8,
								ease: [0.75, 0, 0.24, 1],
								delay: 0.2,
							},
						}}
					>
						SERVICES
					</Header>
				</HeaderContainer>
				<HeadingContainer>
					<Heading
						initial={{ opacity: 0, y: 100 }}
						animate={{
							opacity: 1,
							y: 0,
							transition: {
								duration: 0.8,
								ease: [0.75, 0, 0.24, 1],
								delay: 0.3,
							},
						}}
					>
						The Best Care For Your Clothes
					</Heading>
				</HeadingContainer>
				<ParagraphContainer>
					<Paragraph
						initial={{ opacity: 0, y: 100 }}
						animate={{
							opacity: 1,
							y: 0,
							transition: {
								duration: 0.8,
								ease: [0.75, 0, 0.24, 1],
								delay: 0.4,
							},
						}}
					>
						We provide the best care for your clothes with expert laundry
						services.
					</Paragraph>
				</ParagraphContainer>
			</Container>
			<BackgroundImage
				initial={{ opacity: 0, scale: 0.8 }}
				animate={{
					opacity: 1,
					scale: 1,
					transition: {
						duration: 0.8,
						ease: [0.75, 0, 0.24, 1],
						delay: 0.5,
					},
				}}
			>
				<ImageText
					initial={{ opacity: 0, y: 100 }}
					animate={{
						opacity: 1,
						y: 0,
						transition: {
							duration: 0.8,
							ease: [0.75, 0, 0.24, 1],
							delay: 0.6,
						},
					}}
				>
					What
					<span style={{ display: "block", fontSize: "4rem" }}>We Do?</span>
				</ImageText>
			</BackgroundImage>
			<ParagraphContainer>
				<Paragraph2
					initial={{ opacity: 0, y: 100 }}
					animate={{
						opacity: 1,
						y: 0,
						transition: {
							duration: 0.8,
							ease: [0.75, 0, 0.24, 1],
							delay: 0.7,
						},
					}}
				>
					At Kardinal Laundry, we transform your laundry experience with a
					perfect blend of simplicity and efficiency.
				</Paragraph2>
			</ParagraphContainer>
			<Heading2Container>
				<Heading2
					initial={{ opacity: 0, y: 100 }}
					animate={{
						opacity: 1,
						y: 0,
						transition: {
							duration: 0.8,
							ease: [0.75, 0, 0.24, 1],
							delay: 0.8,
						},
					}}
				>
					Convenient Pickup & Delivery Service
				</Heading2>
			</Heading2Container>
			<ParagraphContainer>
				<Paragraph3
					initial={{ opacity: 0, y: 100 }}
					animate={{
						opacity: 1,
						y: 0,
						transition: {
							duration: 0.8,
							ease: [0.75, 0, 0.24, 1],
							delay: 0.9,
						},
					}}
				>
					At Kardinal Laundry, we make laundry effortless with our reliable
					pickup and delivery service. Simply schedule a pickup, and we’ll
					handle the rest—washing, drying, and folding—before delivering your
					fresh, clean clothes right to your doorstep.
				</Paragraph3>
			</ParagraphContainer>
			<ButtonContainer>
				<Button
					initial={{ opacity: 0, y: 100 }}
					animate={{
						opacity: 1,
						y: 0,
						transition: {
							duration: 0.8,
							ease: [0.75, 0, 0.24, 1],
							delay: 1.1,
						},
					}}
					onclick={() => handleRouting("/signup")}
				>
					Sign Up
				</Button>
				<Button
					initial={{ opacity: 0, y: 100 }}
					animate={{
						opacity: 1,
						y: 0,
						transition: {
							duration: 0.8,
							ease: [0.75, 0, 0.24, 1],
							delay: 1.2,
						},
					}}
					onclick={() => handleRouting("/login")}
				>
					Log In
				</Button>
			</ButtonContainer>

			<Footer />
			<AnimatePresence>{isMobile && isOpen && <SideBar />}</AnimatePresence>
		</ServicesPage>
	);
}

export default Services;

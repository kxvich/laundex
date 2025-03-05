"use client";

import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import Button from "./Button";
import { useRouter } from "next/navigation";
import { useUser } from "@/contexts/UserContexts";
import useMediaQuery from "@/Hooks/useMediaQuery";
import Footer from "./Footer";
import SideBar from "./SideBar";

const ContactPage = styled.div``;
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
	font-family: "Bebas Neue", sans-serif;
	display: inline-block;
	cursor: pointer;
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
const SectionPricing = styled.section`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 2rem 2rem 0;
`;
const ContactBoxContainer = styled.div`
	display: flex;
	justify-content: space-between;
	width: 95%;
	margin-bottom: 7rem;
	gap: 3rem;
	font-family: "poppins", sans-serif !important;

	@media only screen and (max-width: 48rem) {
		flex-direction: column;
		align-items: center;
		width: 90%;
		margin-bottom: 3rem;
	}
`;
const ContactBox = styled(motion.div)`
	font-family: "poppins", sans-serif !important;
	border: 2px solid #0077b6;
	border-radius: 1rem;
	flex: 1;
	padding-top: 2rem;
	padding-bottom: 1rem;
	text-align: center;
	display: flex;
	flex-direction: column;

	@media only screen and (max-width: 48rem) {
		justify-content: space-between;
		margin-bottom: 4rem;
		width: 100%;
	}
`;
const ContactIcon = styled.div`
	color: #0077b6;
	font-size: 4rem;
	margin-bottom: 0.5rem;
`;
const ContactPlan = styled.h2`
	font-size: 2.5rem;
	color: #90e0ef;
	margin-bottom: 1rem;
`;
const ContactText = styled.h2`
	font-size: 2rem;
	color: #00b4d8;
	margin-bottom: 2rem;
`;
const List = styled.ul`
	list-style: none;
	display: flex;
	align-items: center;
`;
const ListItem = styled.li`
	color: #00b4d8;
	font-size: 1.5rem;
	cursor: pointer;
	&:not(:last-child) {
		margin-right: 3rem;
	}
	@media only screen and (max-width: 56.25rem) {
		display: none;
	}
`;

function Contact() {
	const { isOpen, setIsOpen } = useUser();
	const isMobile = useMediaQuery("(max-width: 765px)");
	const router = useRouter();

	function handleMenu() {
		setIsOpen(true);
	}
	return (
		<ContactPage style={{ height: isOpen ? "100vh" : "" }}>
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
					HypWash
				</Logo>
				<List>
					<ListItem onClick={() => router.push("/services")}>Services</ListItem>
					<ListItem onClick={() => router.push("/pricing")}>Pricing</ListItem>
					<ListItem onClick={() => router.push("/outsourcing")}>
						Outsourcing
					</ListItem>
					<Button
						initial={{ opacity: 0, y: 100 }}
						animate={{
							opacity: 1,
							y: 0,
							transition: { duration: 0.8, ease: [0.75, 0, 0.24, 1] },
						}}
						exit={{
							opacity: 0,
							y: 100,
							transition: { duration: 0.8, ease: [0.75, 0, 0.24, 1] },
						}}
						onclick={() => router.back()}
					>
						Back
					</Button>
				</List>
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
						CONTACT
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
						Let us know how we can help.
					</Heading>
				</HeadingContainer>
			</Container>
			<SectionPricing>
				<ContactBoxContainer>
					<ContactBox
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
						exit={{
							opacity: 0,
							y: 100,
							transition: { duration: 0.8, ease: [0.75, 0, 0.24, 1] },
						}}
					>
						<ContactIcon>
							<i class="fa-solid fa-comments"></i>
						</ContactIcon>
						<ContactPlan>Chat to support</ContactPlan>
						<ContactText> we are here to help</ContactText>
						<ContactText> hello@hypwash.com</ContactText>
					</ContactBox>
					<ContactBox
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
						exit={{
							opacity: 0,
							y: 100,
							transition: { duration: 0.8, ease: [0.75, 0, 0.24, 1] },
						}}
					>
						<ContactIcon>
							<i class="fa-solid fa-location-dot"></i>
						</ContactIcon>
						<ContactPlan>Visit us</ContactPlan>
						<ContactText> Visit our office HQ</ContactText>
						<ContactText> View on Google Maps</ContactText>
					</ContactBox>
					<ContactBox
						initial={{ opacity: 0, y: 100 }}
						animate={{
							opacity: 1,
							y: 0,
							transition: {
								duration: 0.8,
								ease: [0.75, 0, 0.24, 1],
								delay: 0.5,
							},
						}}
						exit={{
							opacity: 0,
							y: 100,
							transition: { duration: 0.8, ease: [0.75, 0, 0.24, 1] },
						}}
					>
						<ContactIcon>
							<i class="fa-solid fa-phone"></i>
						</ContactIcon>
						<ContactPlan>Call us</ContactPlan>
						<ContactText> Mon - Sunday from 8am to 5pm</ContactText>
						<ContactText> +2347048313236</ContactText>
					</ContactBox>
				</ContactBoxContainer>
			</SectionPricing>
			<Footer />
			<AnimatePresence>{isMobile && isOpen && <SideBar />}</AnimatePresence>
		</ContactPage>
	);
}

export default Contact;

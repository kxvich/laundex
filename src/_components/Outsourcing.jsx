"use client";

import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import Button from "./Button";
import { useRouter } from "next/navigation";
import { useUser } from "@/contexts/UserContexts";
import useMediaQuery from "@/Hooks/useMediaQuery";
import Footer from "./Footer";
import SideBar from "./SideBar";

const StyledOutsourcing = styled.div``;
const Container = styled.div`
	height: 40vh;
    display: flex;
    justify-content: center;
    align-items: center;

    @media only screen and (max-width: 48rem) {
        height: 50vh;
    }
`;
const Text = styled.h1``;
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
const Menu = styled.li`
	color: #00b4d8;
	font-size: 2rem;
	display: none;
	margin-right: 1.3rem;

	@media only screen and (max-width: 56.25rem) {
		display: inline-block;
	}
`;

function Outsourcing() {
	const { isOpen, setIsOpen } = useUser();
	const isMobile = useMediaQuery("(max-width: 765px)");
	const router = useRouter();

	function handleMenu() {
		setIsOpen(true);
	}
	return (
		<StyledOutsourcing>
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
				<List>
					<ListItem onClick={() => router.push("/services")}>Services</ListItem>
					<ListItem onClick={() => router.push("/pricing")}>Pricing</ListItem>
					<ListItem onClick={() => router.push("/contact")}>Contact</ListItem>
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
				<Text>COMING SOON</Text>
			</Container>
			<Footer />
			<AnimatePresence>{isMobile && isOpen && <SideBar />}</AnimatePresence>
		</StyledOutsourcing>
	);
}

export default Outsourcing;

"use client";

import styled from "styled-components";
import Button from "./Button";
import { useUser } from "@/contexts/UserContexts";
import useMediaQuery from "@/Hooks/useMediaQuery";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";

const Nav = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-top: 2.5rem;
	@media only screen and (max-width: 30rem) {
		margin-bottom: 1.5rem;
	}
`;
const Container = styled.div`
	overflow: hidden;
`;
const Logo = styled(motion.h1)`
	color: #022b3a;
	font-size: 2.5rem;
	position: relative;
	font-family: "Bebas Neue", sans-serif;
	display: inline-block;
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
const Menu = styled.li`
	color: #00b4d8;
	font-size: 2rem;
	display: none;
	margin-right: 1.3rem;
	cursor: pointer;

	@media only screen and (max-width: 56.25rem) {
		display: inline-block;
	}
`;

function Navigation() {
	const { setIsOpen } = useUser();
	// const isMobile = useMediaQuery("(max-width: 765px)");
	const router = useRouter();
	function handleMenu() {
		setIsOpen(true);
	}
	return (
		<Nav>
			<Container>
				<Logo
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
				>
					<Menu onClick={handleMenu}>
						<i className="fa-solid fa-bars"></i>
					</Menu>
					HYPWASH
				</Logo>
			</Container>

			<List>
				<ListItem onClick={() => router.push("/services")}>Services</ListItem>
				<ListItem onClick={() => router.push("/pricing")}>Pricing</ListItem>
				<ListItem onClick={() => router.push("/contact")}>Contact</ListItem>
				<ListItem>Outsourcing</ListItem>
				<Link href={"/login"}>
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
					>
						Log in
					</Button>
				</Link>
			</List>
		</Nav>
	);
}

export default Navigation;

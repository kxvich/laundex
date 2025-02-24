import styled, { keyframes } from "styled-components";
import Button from "./Button";
import { useState } from "react";
import useMediaQuery from "@/Hooks/useMediaQuery";
import { useRouter } from "next/navigation";
import Link from "next/link";

const MoveDown = keyframes`
0%{
	opacity: 0;
	transform: translateY(-2rem);
}
100%{
	opacity: 1;
	transform: translateY(0);
}
`;

const Nav = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-top: 2.5rem;
	animation: ${MoveDown} 1s 0.25s;
	animation-fill-mode: backwards;
	@media only screen and (max-width: 30rem) {
		margin-bottom: 1.5rem;
	}
`;
const Logo = styled.h1`
	color: #022b3a;
	font-size: 2.5rem;
	position: relative;
	font-family: "Satisfy", serif;
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

	@media only screen and (max-width: 56.25rem) {
		display: inline-block;
	}
`;

const SideBar = styled.div`
	height: 100vh;
	width: 100%;
	background-color: #fff;
	position: fixed;
	top: 0;
	right: 0;
	z-index: 20;
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-direction: column;
	padding-top: 3rem;
	border-bottom: 1px solid #022b3a;
	animation: ${MoveDown} 0.5s;
	animation-fill-mode: backwards;
	transition: all 0.2s;
`;
const SideBarList = styled.ul`
	list-style: none;
	text-align: center;
`;
const SideBarListItem = styled.li`
	font-size: 2.5rem;
	text-transform: capitalize;
	animation: ${MoveDown} 0.5s 0.3s;
	animation-fill-mode: backwards;
	&:not(:last-child) {
		margin-bottom: 2rem;
	}
`;
const TopGroup = styled.div`
	width: 88%;
`;
const Top = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
	margin-bottom: 4rem;
	animation: ${MoveDown} 0.5s 0.2s;
	animation-fill-mode: backwards;
`;
const Close = styled.span`
	font-size: 2.5rem;
`;
const ButtonContainer = styled.div`
	margin-bottom: 3.5rem;
	animation: ${MoveDown} 0.5s 0.4s;
	animation-fill-mode: backwards;
`;

function Navigation() {
	const [isOpen, setIsOpen] = useState(false);
	const isMobile = useMediaQuery("(max-width: 500px)");
	const router = useRouter();
	function handleMenu() {
		setIsOpen(true);
	}
	return (
		<Nav>
			<Logo>
				<Menu onClick={handleMenu}>
					<i className="fa-solid fa-bars"></i>
				</Menu>
				{/* <i className="fa-solid fa-link"></i> */}
				Laundex
			</Logo>

			<List>
				<ListItem onClick={() => router.push("/services")}>Services</ListItem>
				<ListItem>Pricing</ListItem>
				<ListItem>About Us</ListItem>
				<ListItem>Contact</ListItem>
				<ListItem>Outsourcing</ListItem>
				<Link href={"/login"}>
					<Button>Log in</Button>
				</Link>

				{isMobile && isOpen && (
					<SideBar>
						<TopGroup>
							<Top>
								<Logo>Laundex</Logo>
								<Close onClick={() => setIsOpen(false)}>
									<i className="fa-solid fa-x"></i>
								</Close>
							</Top>
							<SideBarList>
								<SideBarListItem>Pricing</SideBarListItem>
								<SideBarListItem>About Us</SideBarListItem>
								<SideBarListItem>Contact</SideBarListItem>
								<SideBarListItem>Outsourcing</SideBarListItem>
							</SideBarList>
						</TopGroup>
						<ButtonContainer>
							<Button onclick={() => router.push("/signup")} width={"34rem"}>
								Sign up
							</Button>
						</ButtonContainer>
					</SideBar>
				)}
			</List>
		</Nav>
	);
}

export default Navigation;

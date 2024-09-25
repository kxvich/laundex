import styled, { keyframes } from "styled-components";
import Button from "./Button";
import { useState } from "react";
import useMediaQuery from "@/Hooks/useMediaQuery";
import { useRouter } from "next/navigation";

const MoveDown = keyframes`
0%{
	transform: translateY(-2rem);
}
100%{
	transform: translateY(0);
}
`;

const Nav = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-top: 2.5rem;
	animation: movedown 1s;
	animation-fill-mode: backwards;
	@media only screen and (max-width: 30rem) {
		margin-bottom: 1.5rem;
	}
`;
const Logo = styled.h1`
	color: #022b3a; /* 0077b6*/
	font-size: 2.25rem;
	position: relative;
`;

const List = styled.ul`
	list-style: none;
	display: flex;
	align-items: center;
`;
const ListItem = styled.li`
	color: #00b4d8;
	font-size: 1.5rem;
	&:not(:last-child) {
		margin-right: 3rem;
	}
	@media only screen and (max-width: 56.25rem) {
		display: none;
	}
`;
// const Menu = styled.li`
// 	color: #00b4d8;
// 	font-size: 2rem;
// 	display: none;

// 	@media only screen and (max-width: 56.25rem) {
// 		display: inline-block;
// 	}
// `;

// const SideBar = styled.div`
// 	height: 70vh;
// 	width: 100%;
// 	background-color: #fff;
// 	position: fixed;
// 	top: 0;
// 	right: 0;
// 	z-index: 20;
// 	display: flex;
// 	justify-content: flex-start;
// 	align-items: center;
// 	flex-direction: column;
// 	padding-top: 8rem;
// 	border-bottom: 1px solid #022b3a;
// 	animation:${MoveDown} .5s  ;
// 	animation-fill-mode: backwards;
// 	transition: all .2s;
// `;
// const SideBarList = styled.ul`
// 	list-style: none;
// 	text-align: center;
// `;
// const SideBarListItem = styled.li`
// 	font-size: 2.5rem;
// 	text-transform: capitalize;
// 	&:not(:last-child) {
// 		margin-bottom: 2rem;
// 	}
// `;
// const Close = styled.span`
// 	position: absolute;
// 	top: 7%;
// 	left: 10%;
// 	font-size: 2.5rem;
// `;

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
				<i className="fa-solid fa-link"></i>
				Laundex
			</Logo>

			<List>
				<ListItem>Services</ListItem>
				<ListItem>Pricing</ListItem>
				<ListItem>About Us</ListItem>
				<ListItem>Contact</ListItem>
				<ListItem>Outsourcing</ListItem>
				<Button onclick={() => router.push("/login")}>Log in</Button>
				{/* <Menu onClick={handleMenu}>
					<i className="fa-solid fa-bars"></i>
				</Menu> */}
				{/* {isMobile && isOpen && (
					<SideBar>
						<Close onClick={() => setIsOpen(false)}>
							<i className="fa-solid fa-x"></i>
						</Close>
						<SideBarList>
							<SideBarListItem>Pricing</SideBarListItem>
							<SideBarListItem>About Us</SideBarListItem>
							<SideBarListItem>Contact</SideBarListItem>
							<SideBarListItem>Outsourcing</SideBarListItem>
						</SideBarList>
					</SideBar>
				)} */}
			</List>
		</Nav>
	);
}

export default Navigation;

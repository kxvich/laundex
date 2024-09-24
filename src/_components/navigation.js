import styled from "styled-components";
import Button from "./Button";
import Link from "next/link";

const Nav = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-top: 2.5rem;
	animation: movedown 1s;
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
const Menu = styled.li`
	color: #00b4d8;
	font-size: 2rem;
	display: none;

	@media only screen and (max-width: 56.25rem) {
		display: inline-block;
		
	}
`;
function Navigation() {
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
				<Link style={{marginRight: "3rem"}} href="/login">
					<Button>Log in</Button>
				</Link>
				<Menu>
					<i className="fa-solid fa-bars"></i>
				</Menu>
			</List>
		</Nav>
	);
}

export default Navigation;

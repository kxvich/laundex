import styled from "styled-components";
import Button from "./Button";

const Nav = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
const Logo = styled.h1`
	color: #0077b6;
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
`;
function Navigation() {
	return (
		<Nav>
			<Logo>Laundex</Logo>

			<List>
				<ListItem>Home</ListItem>
				<ListItem>Services</ListItem>
				<ListItem>Pricing</ListItem>
				<ListItem>About Us</ListItem>
				<ListItem>Contact</ListItem>
				<Button>Log in</Button>
			</List>
		</Nav>
	);
}

export default Navigation;

import styled from "styled-components";

const StyledFooter = styled.section`
	background-color: #0077b6;
	height: 50vh;
	padding: 3rem 7rem;
	display: flex;
	justify-content: space-between;
`;
const Logo = styled.h1`
	color: #fff;
	font-size: 2.25rem;
	position: relative;
`;
const NavLinksContainer = styled.div`
	display: flex;
`;
const NavLinksHeading = styled.h2`
	color: #fff;
	margin-bottom: 1rem;
`;
const NavLinks = styled.ul`
	list-style: none;
	&:not(:last-child) {
		margin-right: 6rem;
	}
`;
const NavLinksItem = styled.li`
	color: #edf2fb;
	font-size: 1.2rem;
	margin-bottom: 1rem;
`;

function Footer() {
	return (
		<StyledFooter>
			<Logo>
				<i class="fa-solid fa-link"></i>
				Laundex
			</Logo>
			<NavLinksContainer>
				<NavLinks>
					<NavLinksHeading>Navigation</NavLinksHeading>
					<NavLinksItem>Home</NavLinksItem>
					<NavLinksItem>Login</NavLinksItem>
					<NavLinksItem>Signup</NavLinksItem>
					<NavLinksItem>Pricing</NavLinksItem>
					<NavLinksItem>About us</NavLinksItem>
				</NavLinks>
				<NavLinks>
					<NavLinksHeading>Resources</NavLinksHeading>

					<NavLinksItem>Promos</NavLinksItem>
					<NavLinksItem>Outsourcing</NavLinksItem>
					<NavLinksItem>Reviews</NavLinksItem>
					<NavLinksItem>FAQs</NavLinksItem>
				</NavLinks>
				<NavLinks>
					<NavLinksHeading>Contact</NavLinksHeading>

					<NavLinksItem>
						<span className="margin-right-small">
							<i class="fa-brands fa-facebook"></i>
						</span>
						Facebook
					</NavLinksItem>
					<NavLinksItem>
                    <span className="margin-right-small">
                    <i class="fa-brands fa-x-twitter"></i>
						</span>
                        X
                    </NavLinksItem>
					<NavLinksItem>
                    <span className="margin-right-small">
							<i class="fa-brands fa-instagram"></i>
						</span>
                        Instagram
                    </NavLinksItem>
					<NavLinksItem>
                    <span className="margin-right-small">
							<i class="fa-brands fa-at"></i>
						</span>
                        Gmail
                    </NavLinksItem>
					<NavLinksItem>
                    <span className="margin-right-small">
							<i class="fa-solid fa-phone"></i>
						</span>
                        Customer care
                    </NavLinksItem>
				</NavLinks>
			</NavLinksContainer>
		</StyledFooter>
	);
}

export default Footer;

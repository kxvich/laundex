import useMediaQuery from "@/Hooks/useMediaQuery";
import styled from "styled-components";
import { useRouter } from "next/navigation";

const StyledFooter = styled.section`
	background-color: #0077b6;
	height: 50vh;
	padding: 3rem 7rem;
	display: flex;
	justify-content: space-between;

	@media only screen and (max-width: 48rem) {
		height: 40vh;
		padding: 3rem;
	}
`;
const Logo = styled.h1`
	color: #fff;
	font-size: 2.5rem;
	position: relative;
	font-family: "Bebas Neue", sans-serif;
	display: inline-block;
	@media only screen and (min-width: 56.25rem) {
		font-size: 4rem;
	}
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
	font-size: 1.4rem;
	margin-bottom: 1rem;
	cursor: pointer;

	@media only screen and (max-width: 48rem) {
		font-size: 1.25rem;
	}
`;

function Footer() {
	const router = useRouter();
	const isMobile = useMediaQuery("(max-width: 500px)");
	return (
		<StyledFooter>
			{!isMobile && <Logo>HypWash</Logo>}
			<NavLinksContainer>
				<NavLinks>
					<NavLinksHeading>Navigation</NavLinksHeading>
					<NavLinksItem onClick={() => router.push("/")}>Home</NavLinksItem>
					<NavLinksItem onClick={() => router.push("/login")}>
						Login
					</NavLinksItem>
					<NavLinksItem onClick={() => router.push("/signup")}>
						Signup
					</NavLinksItem>
					<NavLinksItem onClick={() => router.push("/pricing")}>
						Pricing
					</NavLinksItem>
					<NavLinksItem onClick={() => router.push("/services")}>
						Services
					</NavLinksItem>
				</NavLinks>
				<NavLinks>
					<NavLinksHeading>Resources</NavLinksHeading>

					<NavLinksItem>Promos</NavLinksItem>
					<NavLinksItem onClick={() => router.push("/outsourcing")}>
						Outsourcing
					</NavLinksItem>
					<NavLinksItem>Reviews</NavLinksItem>
					<NavLinksItem>FAQs</NavLinksItem>
				</NavLinks>
				<NavLinks>
					<NavLinksHeading>Contact</NavLinksHeading>

					<NavLinksItem>
						{!isMobile ? (
							<>
								<span className="margin-right-small">
									<i className="fa-brands fa-facebook"></i>
								</span>
								Facebook
							</>
						) : (
							"Facebook"
						)}
					</NavLinksItem>
					<NavLinksItem>
						{!isMobile ? (
							<>
								<span className="margin-right-small">
									<i className="fa-brands fa-x-twitter"></i>
								</span>
								X
							</>
						) : (
							"X"
						)}
					</NavLinksItem>
					<NavLinksItem>
						{!isMobile ? (
							<>
								<span className="margin-right-small">
									<i className="fa-brands fa-instagram"></i>
								</span>
								Instagram
							</>
						) : (
							"Instagram"
						)}
					</NavLinksItem>
					<NavLinksItem>
						{!isMobile ? (
							<>
								<span className="margin-right-small">
									<i className="fa-brands fa-at"></i>
								</span>
								Gmail
							</>
						) : (
							"Gmail"
						)}
					</NavLinksItem>
					<NavLinksItem>
						{!isMobile ? (
							<>
								<span className="margin-right-small">
									<i className="fa-solid fa-phone"></i>
								</span>
								Customer care
							</>
						) : (
							"Customer care"
						)}
					</NavLinksItem>
				</NavLinks>
			</NavLinksContainer>
		</StyledFooter>
	);
}

export default Footer;

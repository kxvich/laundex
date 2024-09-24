import styled from "styled-components";
import Navigation from "@/_components/navigation";
import Image from "next/image";
import Button from "./Button";
import Link from "next/link";

const StyledHeader = styled.header`
	max-width: 90%;
	margin: 0 auto;
	/* height: 100vh; */
	position: relative;
	padding-bottom: 2rem;
`;

const HeaderContent = styled.div`
	display: flex;
	justify-content: space-between;
	/* align-items: center; */

	@media only screen and (max-width: 30rem) {
		flex-direction: column;
		align-items: center;
	}
`;

const HeaderTextContainer = styled.div`
	align-self: flex-start;
	width: 50%;
	padding-top: 3.5rem;
	@media only screen and (max-width: 30rem) {
		width: 100%;
		text-align: center;
	}
`;
const HeadingTextPrimary = styled.h1`
	color: #022b3a;
	width: 45%;
	font-size: 3.7rem;
	margin-bottom: 1.5rem;
	animation: moveup 1s 0.25s;
	@media only screen and (max-width: 30rem) {
		width: 100%;
	}
`;
const HeadingTextSecondary = styled.h2`
	color: #0077b6;
	font-size: 1.1rem;
	animation: moveup 1s;
`;
const HeadingTextParagraph = styled.p`
	color: #0077b6;
	font-size: 1.37rem;
	margin-bottom: 3rem;
	width: 75%;
	font-weight: 500;
	line-height: 2.2rem;
	animation: moveup 1s 0.5s;
	@media only screen and (max-width: 30rem) {
		width: 100%;
	}
`;

const HeaderImageContainer = styled.div`
	position: relative;
	height: 52rem;
	width: 50%;
	@media only screen and (max-width: 30rem) {
		width: 100%;
	}
`;

const DecorAsterisk = styled.span`
	font-size: 3rem;
	color: #03045e;
	border-radius: 50%;
	position: absolute;
	top: ${(props) => props.top};
	left: ${(props) => props.left};
	transform: translate(-50%, -50%);
	animation: spin 2s linear infinite;
	z-index: 10;
`;

const decorationAsteriskPositions = [
	{ top: "40%", left: "40%" },
	{ top: "25%", left: "0%" },
	{ top: "15%", left: "90%" },
	{ top: "90%", left: "60%" },
];

function Header() {
	return (
		<StyledHeader>
			<Navigation />
			{decorationAsteriskPositions.map((value, i) => (
				<DecorAsterisk top={value.top} left={value.left} key={i}>
					<i className="fa-solid fa-asterisk"></i>
				</DecorAsterisk>
			))}

			<HeaderContent>
				<HeaderTextContainer>
					<HeadingTextSecondary>
						Where Your Clothes Sparkle Again!
					</HeadingTextSecondary>
					<HeadingTextPrimary>
						Making Your Laundry Day, a Breeze!
					</HeadingTextPrimary>
					<HeadingTextParagraph>
						{`Welcome to Laundex Laundry, your trusted partner in keeping your clothes spotless and fresh! We understand that life gets busy, and laundry can often take a back seat. That's why we're here to make laundry day easy and hassle-free. Whether it's a single shirt or a mountain of laundry, our expert team is dedicated to delivering exceptional service with a personal touch.`}
					</HeadingTextParagraph>
					<Link href="/signup">
						<Button>Get started &rarr;</Button>
					</Link>
				</HeaderTextContainer>

				<HeaderImageContainer>
					<Image
						src={"/images/headerImage.png"}
						fill
						style={{ objectFit: "cover" }}
						alt="header-image"
						priority
					/>
				</HeaderImageContainer>
			</HeaderContent>
		</StyledHeader>
	);
}

export default Header;

import { styled } from "styled-components";
import Navigation from "@/app/_components/navigation";
import Image from "next/image";
import Button from "./Button";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";

const StyledHeader = styled.header`
	max-width: 90%;
	margin: 0 auto;
	position: relative;
	padding-bottom: 2rem;
`;
const HeaderContent = styled.div`
	display: flex;
	justify-content: space-between;

	@media only screen and (max-width: 56.25rem) {
		flex-direction: column;
		align-items: center;
	}
`;
const HeaderTextContainer = styled.div`
	align-self: flex-start;
	width: 50%;
	padding-top: 3.5rem;

	@media only screen and (max-width: 56.25rem) {
		width: 100%;
		text-align: center;
		margin-bottom: 3rem;
	}
`;
const HeadingTextPrimaryContainer = styled.div`
	overflow: hidden;
	margin-bottom: 1.5rem;
`;
const HeadingTextPrimary = styled(motion.h1)`
	color: #022b3a;
	width: 45%;
	font-size: 3.7rem;
	font-family: "poppins", sans-serif !important;
	@media only screen and (max-width: 56.25rem) {
		width: 100%;
	}
`;
const HeaderTextSecondaryContainer = styled.div`
	overflow: hidden;
`;
const HeadingTextSecondary = styled(motion.h2)`
	color: #0077b6;
	font-size: 1.1rem;
	font-family: "poppins", sans-serif !important;
`;
const HeadingTextParagraphContainer = styled.div`
	overflow: hidden;
	margin-bottom: 3rem;
`;
const HeadingTextParagraph = styled(motion.p)`
	color: #0077b6;
	font-size: 1.37rem;
	width: 75%;
	font-weight: 500;
	line-height: 2.2rem;
	font-family: "poppins", sans-serif !important;

	@media only screen and (max-width: 56.25rem) {
		width: 100%;
	}
`;
const ButtonContainer = styled(motion.div)``;
const HeaderImageContainer = styled(motion.div)`
	position: relative;
	height: 52rem;
	width: 50%;

	@media only screen and (max-width: 56.25rem) {
		width: 100%;
	}
`;
const DecorAsterisk = styled.span`
	font-size: 3rem;
	color: #03045e;
	border-radius: 50%;
	position: absolute;
	top: ${(props) => props.$top};
	left: ${(props) => props.$left};
	transform: translate(-50%, -50%);
	animation: spin 2s linear infinite;
	z-index: 10;
`;
const decorationAsteriskPositions = [
	{ $top: "50%", $left: "40%" },
	{ $top: "8%", $left: "0%" },
	{ $top: "17%", $left: "90%" },
	{ $top: "90%", $left: "60%" },
];

function Header() {
	const router = useRouter();
	return (
		<StyledHeader>
			<Navigation />
			{decorationAsteriskPositions.map((value, i) => (
				<DecorAsterisk $top={value.$top} $left={value.$left} key={i}>
					<i className="fa-solid fa-asterisk"></i>
				</DecorAsterisk>
			))}

			<HeaderContent>
				<HeaderTextContainer>
					<HeaderTextSecondaryContainer>
						<HeadingTextSecondary
							initial={{ opacity: 0, y: 100 }}
							animate={{
								opacity: 1,
								y: 0,
								transition: {
									duration: 0.8,
									ease: [0.75, 0, 0.24, 1],
									delay: 0.1,
								},
							}}
							exit={{
								opacity: 0,
								y: 100,
								transition: { duration: 0.8, ease: [0.75, 0, 0.24, 1] },
							}}
						>
							Where Your Clothes Sparkle Again!
						</HeadingTextSecondary>
					</HeaderTextSecondaryContainer>
					<HeadingTextPrimaryContainer>
						<HeadingTextPrimary
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
							exit={{
								opacity: 0,
								y: 100,
								transition: { duration: 0.8, ease: [0.75, 0, 0.24, 1] },
							}}
						>
							Making Your Laundry Day, a Breeze!
						</HeadingTextPrimary>
					</HeadingTextPrimaryContainer>
					<HeadingTextParagraphContainer>
						<HeadingTextParagraph
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
							{`Welcome to HypWash, your trusted partner in keeping your clothes spotless and fresh! We understand that life gets busy, and laundry can often take a back seat. That's why we're here to make laundry day easy and hassle-free. Whether it's a single shirt or a mountain of laundry, our expert team is dedicated to delivering exceptional service with a personal touch.`}
						</HeadingTextParagraph>
					</HeadingTextParagraphContainer>

					<ButtonContainer
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
						<Link href={"/signup"}>
							<Button $animation={`moveup 1s .8s`}>Get started &rarr;</Button>
						</Link>
					</ButtonContainer>
				</HeaderTextContainer>

				<HeaderImageContainer
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
					<Image
						src={"/images/headerImage.png"}
						fill
						sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
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

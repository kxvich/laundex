import { styled, keyframes } from "styled-components";
import Image from "next/image";
import Button from "./Button";
import useMediaQuery from "@/Hooks/useMediaQuery";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { useRouter } from "next/navigation";
const MoveUp = keyframes`
0%{
	transform: translateY(2rem);
}
100%{
	transform: translateY(0);
}
`;
const StyledMain = styled.main``;
const SectionHow = styled.section`
	/* background-color: #caf0f8; */
	background-image: linear-gradient(
			rgba(0, 180, 216, 0.8),
			rgba(0, 180, 216, 0.8)
		),
		url("/images/backgroundimage.webp");
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
	text-align: center;
	padding: 6rem 7rem 3rem;
	color: #edf2fb;
`;
const SectionHeading = styled.h2`
	font-size: 2.5rem;
	/* color: #0077b6; */
	color: ${(props) => props.color};
	margin-bottom: 10rem;
	opacity: 0;
	transition: opacity 0.6s ease-out, transform 0.6s ease-out;
	animation-fill-mode: forwards;

	&.visible {
		opacity: 1;
		animation: ${MoveUp} 0.6s ease-out;
	}
	@media only screen and (max-width: 48rem) {
		margin-bottom: 5rem;
	}
`;
const DescriptionContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 5rem;
	margin-bottom: 15rem;
	opacity: 0;
	transition: opacity 0.6s ease-out, transform 0.6s ease-out;
	animation-fill-mode: forwards;

	&.visible {
		opacity: 1;
		animation: ${MoveUp} 0.6s ease-out;
	}
	@media only screen and (max-width: 48rem) {
		flex-direction: column;
		padding: 0 1rem;
		gap: 2rem;
	}
`;
const DescriptionText = styled.div`
	width: 42%;
	text-align: left;
	@media only screen and (max-width: 48rem) {
		width: 100%;
		text-align: center;
		margin-bottom: 4rem;
		&:nth-child(2) {
			order: -1;
		}
	}
`;
const DescriptionTextHeading = styled.h2`
	font-size: 2.5rem;
	/* color: #0077b6; */
	color: #fff;
	@media only screen and (max-width: 30rem) {
		margin-bottom: 1rem;
	}
`;
const DescriptionTextParagraph = styled.p`
	font-size: 1.7rem;
	width: 100%;
	/* color: #0077b6; */
`;
const DescriptionImageContainer = styled.div`
	position: relative;
	height: 40rem;
	width: 50%;
	@media only screen and (max-width: 48rem) {
		width: 100%;
		border-radius: 2rem;
		overflow: hidden;
	}
`;
const SectionPricing = styled.section`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 6rem 7rem 8rem;
	/* background: linear-gradient(180deg, #fff 0%, #fff 50%, rgba(0,212,255,1) 50%);
	 */
	/* height: 100vh; */
`;
const PriceBoxContainer = styled.div`
	display: flex;
	justify-content: space-between;
	width: 85%;
	margin-bottom: 7rem;
	@media only screen and (max-width: 48rem) {
		flex-direction: column;
		align-items: center;
		width: 95%;
	}
`;
const PriceBox = styled.div`
	border: 2px solid #0077b6;
	border-radius: 1rem;
	width: 30rem;
	padding-top: 2rem;
	padding-bottom: 1rem;
	text-align: center;
	opacity: 0;
	transition: opacity 0.6s ease-out, transform 0.6s ease-out;
	animation-fill-mode: forwards;
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	&.visible {
		opacity: 1;
		animation: ${MoveUp} 0.6s ease-out;
	}
	@media only screen and (max-width: 48rem) {
		margin-bottom: 6rem;
		width: 100%;
	}
`;
const PriceIcon = styled.div`
	color: #0077b6;
	font-size: 4rem;
	margin-bottom: 0.5rem;
	animation: spin 2s linear infinite;
`;
const PricePlan = styled.h2`
	font-size: 2.5rem;
	color: #90e0ef;
	margin-bottom: 1rem;
`;
const Price = styled.h2`
	font-size: 2rem;
	color: #00b4d8;
	margin-bottom: 2rem;
`;
const PlanDescription = styled.div`
	border-top: 1px solid #00b4d8;
	padding-top: 1rem;
	font-size: 1.2rem;
	font-weight: 100;
`;
const Description = styled.h3`
	padding-bottom: 1rem;
	margin-bottom: 1rem;
	color: #0077b6;
	&:not(:last-child) {
		border-bottom: 1px solid #00b4d8;
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
	// { $top: "40%", $left: "40%" },
	{ $top: "25%", $left: "0%" },
	{ $top: "15%", $left: "90%" },
	{ $top: "90%", $left: "60%" },
	{ $top: "80%", $left: "20%" },
	{ $top: "5%", $left: "52%" },
	{ $top: "80%", $left: "90%" },
];

function Main() {
	const isMobile = useMediaQuery("(max-width: 500px)");
	const router = useRouter();
	const [ref, inView] = useInView({
		threshold: 0.1,
		triggerOnce: true,
	});
	const [ref1, inView1] = useInView({
		threshold: 0.1,
		triggerOnce: true,
	});
	const [ref2, inView2] = useInView({
		threshold: 0.1,
		triggerOnce: true,
	});
	const [ref3, inView3] = useInView({
		threshold: 0.1,
		triggerOnce: true,
	});
	const [ref4, inView4] = useInView({
		threshold: 0.1,
		triggerOnce: true,
	});
	const [ref5, inView5] = useInView({
		threshold: 0.1,
		triggerOnce: true,
	});
	const [ref6, inView6] = useInView({
		threshold: 0.1,
		triggerOnce: true,
	});
	const [ref7, inView7] = useInView({
		threshold: 0.1,
		triggerOnce: true,
	});
	return (
		<StyledMain>
			<SectionHow>
				<SectionHeading
					ref={ref}
					className={inView ? "visible" : ""}
					color="#fff"
				>
					HOW IT WORKS
				</SectionHeading>
				<DescriptionContainer ref={ref1} className={inView1 ? "visible" : ""}>
					<DescriptionText>
						<DescriptionTextHeading>
							CREATE AN ACCOUNT
							<span className="margin-left-small">
								<i className="fa-solid fa-right-to-bracket"></i>
							</span>
						</DescriptionTextHeading>
						<DescriptionTextParagraph>
							{`Welcome to HypWash. Start by creating an account. You can
							place and track your orders; it's fast and easy. If you have an
							account already, proceed to login.`}
						</DescriptionTextParagraph>
					</DescriptionText>
					<DescriptionImageContainer>
						<Image
							src="/images/signupVector.jpg"
							alt="signup-vector"
							fill
							sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
							style={{ objectFit: "cover", objectPosition: "top" }}
						/>
					</DescriptionImageContainer>
				</DescriptionContainer>
				<DescriptionContainer ref={ref2} className={inView2 ? "visible" : ""}>
					{isMobile === true ? (
						<>
							<DescriptionText>
								<DescriptionTextHeading>
									PLACE AN ORDER
									<span className="margin-left-small">
										<i className="fa-solid fa-box"></i>
									</span>
								</DescriptionTextHeading>
								<DescriptionTextParagraph>
									{`
							Once logged in, you can place an order by choosing a plan and filling the required information. You can also track your order and so much more.
							`}
								</DescriptionTextParagraph>
							</DescriptionText>
							<DescriptionImageContainer>
								<Image
									src="/images/orderVector.jpg"
									alt="signup-vector"
									fill
									style={{ objectFit: "cover", objectPosition: "top" }}
								/>
							</DescriptionImageContainer>
						</>
					) : (
						<>
							<DescriptionImageContainer>
								<Image
									src="/images/orderVector.jpg"
									alt="signup-vector"
									fill
									sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
									style={{ objectFit: "cover", objectPosition: "top" }}
								/>
							</DescriptionImageContainer>
							<DescriptionText>
								<DescriptionTextHeading>
									PLACE AN ORDER
									<span className="margin-left-small">
										<i className="fa-solid fa-box"></i>
									</span>
								</DescriptionTextHeading>
								<DescriptionTextParagraph>
									{`
							Once logged in, you can place an order by choosing a plan and filling the required information. You can also track your order and so much more.
							`}
								</DescriptionTextParagraph>
							</DescriptionText>
						</>
					)}
				</DescriptionContainer>
				<DescriptionContainer ref={ref3} className={inView3 ? "visible" : ""}>
					<DescriptionText>
						<DescriptionTextHeading>
							PICKUP AND DELIVERY SERVICES
							<span className="margin-left-small">
								<i className="fa-solid fa-truck-fast"></i>
							</span>
						</DescriptionTextHeading>
						<DescriptionTextParagraph>
							{`
							With different plans to choose from, you get to enjoy the ease of having your clothes picked up and delivered to you at the comfort of your home.
							`}
						</DescriptionTextParagraph>
					</DescriptionText>
					<DescriptionImageContainer>
						<Image
							src="/images/deliveryVector.jpg"
							alt="signup-vector"
							fill
							sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
							style={{ objectFit: "cover", objectPosition: "top" }}
						/>
					</DescriptionImageContainer>
				</DescriptionContainer>
				<DescriptionContainer ref={ref4} className={inView4 ? "visible" : ""}>
					{isMobile === true ? (
						<>
							<DescriptionText>
								<DescriptionTextHeading>
									ACTIVE CUSTOMER SERVICE
									<span className="margin-left-small">
										<i className="fa-solid fa-phone"></i>
									</span>
								</DescriptionTextHeading>
								<DescriptionTextParagraph>
									{`
							We pride ourselves on good customers relations and quality of service,so we offer top notch customer service to help assist in all your needs.
							`}
								</DescriptionTextParagraph>
							</DescriptionText>
							<DescriptionImageContainer>
								<Image
									src="/images/customerServiceVector.jpg"
									alt="signup-vector"
									fill
									style={{ objectFit: "cover", objectPosition: "top" }}
								/>
							</DescriptionImageContainer>
						</>
					) : (
						<>
							<DescriptionImageContainer>
								<Image
									src="/images/customerServiceVector.jpg"
									alt="signup-vector"
									fill
									sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
									style={{ objectFit: "cover", objectPosition: "top" }}
								/>
							</DescriptionImageContainer>
							<DescriptionText>
								<DescriptionTextHeading>
									ACTIVE CUSTOMER SERVICE
									<span className="margin-left-small">
										<i className="fa-solid fa-phone"></i>
									</span>
								</DescriptionTextHeading>
								<DescriptionTextParagraph>
									{`
							We pride ourselves on good customers relations and quality of service,so we offer top notch customer service to assist in all your needs.
							`}
								</DescriptionTextParagraph>
							</DescriptionText>
						</>
					)}
				</DescriptionContainer>
			</SectionHow>
			<SectionPricing>
				{decorationAsteriskPositions.map((value, i) => (
					<DecorAsterisk $top={value.$top} $left={value.$left} key={i}>
						<i className="fa-solid fa-asterisk"></i>
					</DecorAsterisk>
				))}
				<SectionHeading color="#0077B6">PRICING</SectionHeading>
				<PriceBoxContainer>
					<PriceBox ref={ref5} className={inView5 ? "visible" : ""}>
						<PriceIcon>
							<i className="fa-solid fa-star-half-stroke"></i>
						</PriceIcon>
						<PricePlan>Basic</PricePlan>
						<Price> (wash n fold)</Price>
						<Price>starting at ₦150</Price>
						<PlanDescription>
							<Description>Wash</Description>
							<Description>Fold</Description>
							<Description>Pick up & Delivery</Description>
							<Button onclick={() => router.push("/pricing")}>
								See pricing
							</Button>
						</PlanDescription>
					</PriceBox>
					<PriceBox ref={ref6} className={inView6 ? "visible" : ""}>
						<PriceIcon>
							<i className="fa-solid fa-star"></i>
						</PriceIcon>
						<PricePlan>Standard</PricePlan>
						<Price>starting at ₦400</Price>
						<PlanDescription>
							<Description>Wash n Fold </Description>
							<Description>Pressing & Packaging</Description>
							<Description>Pickup & Delivery</Description>
							<Button onclick={() => router.push("/pricing")}>
								See pricing
							</Button>
						</PlanDescription>
					</PriceBox>
					<PriceBox ref={ref7} className={inView7 ? "visible" : ""}>
						<PriceIcon>
							<i className="fa-solid fa-rocket"></i>
						</PriceIcon>
						<PricePlan>EXPRESS</PricePlan>
						<Price>starting at ₦600</Price>
						<PlanDescription>
							<Description>Wash n Fold </Description>
							<Description>Pressing & Packaging</Description>
							<Description>Pickup & Delivery</Description>
							<Description>24 hrs process time</Description>
							<Button onclick={() => router.push("/pricing")}>
								See pricing
							</Button>
						</PlanDescription>
					</PriceBox>
				</PriceBoxContainer>
				<Link href={"/signup"}>
					<Button>Get Started &rarr;</Button>
				</Link>
			</SectionPricing>
		</StyledMain>
	);
}

export default Main;

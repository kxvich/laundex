import styled from "styled-components";
import Image from "next/image";
import Button from "./Button";
const StyledMain = styled.main``;
const SectionHow = styled.section`
	/* background-color: #caf0f8; */
	background-image: linear-gradient(
			rgba(0, 180, 216, 0.8),
			rgba(0, 180, 216, 0.8)
		),
		url("/images/test.jpg");
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
`;
const DescriptionContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 5rem;
	margin-bottom: 15rem;
`;
const DescriptionText = styled.div`
	width: 42%;
	text-align: left;
`;
const DescriptionTextHeading = styled.h2`
	font-size: 2.5rem;
	/* color: #0077b6; */
	color: #fff;
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
`;
const PriceBox = styled.div`
	border: 2px solid #0077b6;
	border-radius: 1rem;
	width: 30rem;
	padding-top: 2rem;
	text-align: center;
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
	top: ${(props) => props.top};
	left: ${(props) => props.left};
	transform: translate(-50%, -50%);
	animation: spin 2s linear infinite;
	z-index: 10;
`;

const decorationAsteriskPositions = [
	// { top: "40%", left: "40%" },
	{ top: "25%", left: "0%" },
	{ top: "15%", left: "90%" },
	{ top: "90%", left: "60%" },
	{ top: "80%", left: "20%" },
	{ top: "13%", left: "52%" },
	{ top: "80%", left: "90%" },
];

function Main() {
	return (
		<StyledMain>
			<SectionHow>
				<SectionHeading color="#fff">HOW IT WORKS</SectionHeading>
				<DescriptionContainer>
					<DescriptionText>
						<DescriptionTextHeading>
							CREATE AN ACCOUNT
							<span className="margin-left-small">
								<i className="fa-solid fa-right-to-bracket"></i>
							</span>
						</DescriptionTextHeading>
						<DescriptionTextParagraph>
							{`Welcome to Laundex Laundry. Start by creating an account. You can
							place and track your orders; it's fast and easy. If you have an
							account already, proceed to login.`}
						</DescriptionTextParagraph>
					</DescriptionText>
					<DescriptionImageContainer>
						<Image
							src="/images/signupVector.jpg"
							alt="signup-vector"
							fill
							style={{ objectFit: "cover" }}
							objectPosition="top"
						/>
					</DescriptionImageContainer>
				</DescriptionContainer>
				<DescriptionContainer>
					<DescriptionImageContainer>
						<Image
							src="/images/orderVector.jpg"
							alt="signup-vector"
							fill
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
				</DescriptionContainer>
				<DescriptionContainer>
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
							style={{ objectFit: "cover",objectPosition: "top" }}
							
						/>
					</DescriptionImageContainer>
				</DescriptionContainer>
				<DescriptionContainer>
					<DescriptionImageContainer>
						<Image
							src="/images/customerServiceVector.jpg"
							alt="signup-vector"
							fill
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
							We pride ourselves on good customers relations and quality of service,so we offer top notch customer service to help assist in all your needs.
							`}
						</DescriptionTextParagraph>
					</DescriptionText>
				</DescriptionContainer>
			</SectionHow>
			<SectionPricing>
				{decorationAsteriskPositions.map((value, i) => (
					<DecorAsterisk top={value.top} left={value.left} key={i}>
						<i className="fa-solid fa-asterisk"></i>
					</DecorAsterisk>
				))}
				<SectionHeading color="#0077B6">PRICING</SectionHeading>
				<PriceBoxContainer>
					<PriceBox>
						<PriceIcon>
							<i className="fa-solid fa-star-half-stroke"></i>
						</PriceIcon>
						<PricePlan>CLASSIC</PricePlan>
						<Price>$ 10</Price>
						<PlanDescription>
							<Description>pick up or delivery</Description>
							<Description>-</Description>
							<Description>-</Description>
						</PlanDescription>
					</PriceBox>
					<PriceBox>
						<PriceIcon>
							<i className="fa-solid fa-star"></i>
						</PriceIcon>
						<PricePlan>CLASSIC+</PricePlan>
						<Price>$ 20</Price>
						<PlanDescription>
							<Description>pick up </Description>
							<Description>delivery</Description>
							<Description>-</Description>
						</PlanDescription>
					</PriceBox>
					<PriceBox>
						<PriceIcon>
							<i className="fa-solid fa-rocket"></i>
						</PriceIcon>
						<PricePlan>EXPRESS</PricePlan>
						<Price>$ 30</Price>
						<PlanDescription>
							<Description>pick up</Description>
							<Description> delivery</Description>
							<Description>24 hrs process time</Description>
						</PlanDescription>
					</PriceBox>
				</PriceBoxContainer>
				<Button>Get Started &rarr;</Button>
			</SectionPricing>
		</StyledMain>
	);
}

export default Main;

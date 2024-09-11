import styled from "styled-components";
import Image from "next/image";
const StyledMain = styled.main``;
const SectionHow = styled.section`
	padding-top: 3rem;
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
	padding: 3rem 7rem 0;
	color: #edf2fb;
	padding-bottom: 3rem;
`;
const SectionHeading = styled.h2`
	font-size: 2.5rem;
	/* color: #0077b6; */
	color:  ${(props ) => props.color  };
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
const sectionPricing = styled.section``
const priceBox = styled.div``

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
								<i class="fa-solid fa-right-to-bracket"></i>
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
							layout="fill"
							objectFit="cover"
							objectPosition="top"
						/>
					</DescriptionImageContainer>
				</DescriptionContainer>
				<DescriptionContainer>
					<DescriptionImageContainer>
						<Image
							src="/images/orderVector.jpg"
							alt="signup-vector"
							layout="fill"
							objectFit="cover"
							objectPosition="top"
						/>
					</DescriptionImageContainer>
					<DescriptionText>
						<DescriptionTextHeading>
							PLACE AN ORDER
							<span className="margin-left-small">
								<i class="fa-solid fa-box"></i>
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
								<i class="fa-solid fa-truck-fast"></i>
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
							layout="fill"
							objectFit="cover"
							objectPosition="top"
						/>
					</DescriptionImageContainer>
				</DescriptionContainer>
				<DescriptionContainer>
					<DescriptionImageContainer>
						<Image
							src="/images/customerServiceVector.jpg"
							alt="signup-vector"
							layout="fill"
							objectFit="cover"
							objectPosition="top"
						/>
					</DescriptionImageContainer>
					<DescriptionText>
						<DescriptionTextHeading>
							ACTIVE CUSTOMER SERVICE
							<span className="margin-left-small">
								<i class="fa-solid fa-phone"></i>
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
			<sectionPricing>
				<SectionHeading color="#0077B6">PRICING</SectionHeading>
				<priceBox></priceBox>
			</sectionPricing>
		</StyledMain>
	);
}

export default Main;

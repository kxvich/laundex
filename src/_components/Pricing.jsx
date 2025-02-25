"use client";

import { styled } from "styled-components";
import { motion } from "framer-motion";
import Footer from "./Footer";
import Button from "./Button";
import { useRouter } from "next/navigation";

const PricingPage = styled.div``;
const LogoContainer = styled.div`
	overflow: hidden;
	margin-bottom: 1.5rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 2rem;
`;
const Logo = styled(motion.h1)`
	color: #022b3a;
	font-size: 2.5rem;
	position: relative;
	font-family: "Satisfy", serif;
	display: inline-block;
	cursor: pointer;
`;
const Menu = styled.li`
	color: #00b4d8;
	font-size: 2rem;
	display: none;
	margin-right: 1.3rem;

	@media only screen and (max-width: 56.25rem) {
		display: inline-block;
	}
`;
const Container = styled.div`
	padding: 2rem;
	text-align: center;
`;
const HeaderContainer = styled.div`
	overflow: hidden;
`;
const Header = styled(motion.h3)`
	color: #022b3a;
	font-size: 2rem;
	font-weight: 100;
`;
const SectionPricing = styled.section`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 2rem 2rem 0;
`;
const PriceBoxContainer = styled.div`
	display: flex;
	justify-content: space-between;
	width: 95%;
	margin-bottom: 7rem;
	gap: 3rem;
	@media only screen and (max-width: 48rem) {
		flex-direction: column;
		align-items: center;
		width: 90%;
		margin-bottom: 3rem;
	}
`;
const PriceBox = styled(motion.div)`
	border: 2px solid #0077b6;
	border-radius: 1rem;
	flex: 1;
	padding-top: 2rem;
	padding-bottom: 1rem;
	text-align: center;
	display: flex;
	flex-direction: column;

	@media only screen and (max-width: 48rem) {
		justify-content: space-between;
		margin-bottom: 4rem;
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
	padding: 1rem 2rem;
	margin-bottom: 1rem;
	color: #0077b6;
	display: flex;
	justify-content: space-between;
	align-items: center;

	&:not(:last-child) {
		border-bottom: 1px solid #00b4d8;
	}
`;
const Item = styled.h3``;
const ItemPrice = styled.h3`
	font-size: 1.5rem;
	color: #00b4d8;
`;

function Pricing() {
	const router = useRouter();
	function handleMenu() {
		setIsOpen(true);
	}
	return (
		<PricingPage>
			<LogoContainer>
				<Logo
					initial={{ opacity: 0, y: 100 }}
					animate={{
						opacity: 1,
						y: 0,
						transition: { duration: 0.8, ease: [0.75, 0, 0.24, 1], delay: 0.1 },
					}}
					exit={{
						opacity: 0,
						y: 100,
						transition: { duration: 0.8, ease: [0.75, 0, 0.24, 1] },
					}}
					onClick={() => router.push("/")}
				>
					<Menu onClick={handleMenu}>
						<i className="fa-solid fa-bars"></i>
					</Menu>
					Kardinal laundry
				</Logo>
				<Button onclick={() => router.back()}>Back</Button>
			</LogoContainer>
			<Container>
				<HeaderContainer>
					<Header
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
					>
						PRICING
					</Header>
				</HeaderContainer>
			</Container>
			<SectionPricing>
				<PriceBoxContainer>
					<PriceBox
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
						<PriceIcon>
							<i className="fa-solid fa-star-half-stroke"></i>
						</PriceIcon>
						<PricePlan>Basic</PricePlan>
						<Price> (wash n fold)</Price>
						{/* <Price>starting at ₦150</Price> */}
						<PlanDescription>
							<Description>
								<Item>shirt</Item>
								<ItemPrice>150</ItemPrice>
							</Description>
							<Description>
								<Item>jeans</Item>
								<ItemPrice>200</ItemPrice>
							</Description>
							<Description>
								<Item>Hoodies, Sweaters and more</Item>
								<ItemPrice>300</ItemPrice>
							</Description>
							<Description>
								<Item>Native Wears(top and bottom)</Item>
								<ItemPrice>400</ItemPrice>
							</Description>
							<Description>
								<Item>Duvet</Item>
								<ItemPrice>3000</ItemPrice>
							</Description>
							<Description>
								<Item>Bedspread</Item>
								<ItemPrice>1500</ItemPrice>
							</Description>
							<Description>
								<Item>Pillowcases(two)</Item>
								<ItemPrice>350</ItemPrice>
							</Description>
							<Description>
								<Item>Towels</Item>
								<ItemPrice>350</ItemPrice>
							</Description>
							<Description>
								<Item>Underwear</Item>
								<ItemPrice>150</ItemPrice>
							</Description>
						</PlanDescription>
					</PriceBox>
					<PriceBox
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
						<PriceIcon>
							<i className="fa-solid fa-star"></i>
						</PriceIcon>
						<PricePlan>Standard</PricePlan>
						{/* <Price>starting at ₦400</Price> */}
						<PlanDescription>
							<Description>
								<Item>shirt</Item>
								<ItemPrice>400</ItemPrice>
							</Description>
							<Description>
								<Item>jeans</Item>
								<ItemPrice>500</ItemPrice>
							</Description>
							<Description>
								<Item>Hoodies, Sweaters and more</Item>
								<ItemPrice>500</ItemPrice>
							</Description>
							<Description>
								<Item>Native Wears(top and bottom)</Item>
								<ItemPrice>800</ItemPrice>
							</Description>
							<Description>
								<Item>Duvet</Item>
								<ItemPrice>3000</ItemPrice>
							</Description>
							<Description>
								<Item>Bedspread</Item>
								<ItemPrice>1500</ItemPrice>
							</Description>
							<Description>
								<Item>Pillowcases(two)</Item>
								<ItemPrice>500</ItemPrice>
							</Description>
							<Description>
								<Item>Towels</Item>
								<ItemPrice>500</ItemPrice>
							</Description>
							<Description>
								<Item>Underwear</Item>
								<ItemPrice>200</ItemPrice>
							</Description>
						</PlanDescription>
					</PriceBox>
					<PriceBox
						initial={{ opacity: 0, y: 100 }}
						animate={{
							opacity: 1,
							y: 0,
							transition: {
								duration: 0.8,
								ease: [0.75, 0, 0.24, 1],
								delay: 0.5,
							},
						}}
						exit={{
							opacity: 0,
							y: 100,
							transition: { duration: 0.8, ease: [0.75, 0, 0.24, 1] },
						}}
					>
						<PriceIcon>
							<i className="fa-solid fa-rocket"></i>
						</PriceIcon>
						<PricePlan>EXPRESS</PricePlan>
						<Price>(24hr processing time)</Price>
						{/* <Price>starting at ₦650</Price> */}
						<PlanDescription>
							<Description>
								<Item>shirt</Item>
								<ItemPrice>650</ItemPrice>
							</Description>
							<Description>
								<Item>jeans</Item>
								<ItemPrice>750</ItemPrice>
							</Description>
							<Description>
								<Item>Hoodies, Sweaters and more</Item>
								<ItemPrice>750</ItemPrice>
							</Description>
							<Description>
								<Item>Native Wears(top and bottom)</Item>
								<ItemPrice>1100</ItemPrice>
							</Description>
							<Description>
								<Item>Duvet</Item>
								<ItemPrice>4000</ItemPrice>
							</Description>
							<Description>
								<Item>Bedspread</Item>
								<ItemPrice>2500</ItemPrice>
							</Description>
							<Description>
								<Item>Pillowcases(two)</Item>
								<ItemPrice>700</ItemPrice>
							</Description>
							<Description>
								<Item>Towels</Item>
								<ItemPrice>700</ItemPrice>
							</Description>
							<Description>
								<Item>Underwear</Item>
								<ItemPrice>400</ItemPrice>
							</Description>
						</PlanDescription>
					</PriceBox>
				</PriceBoxContainer>
			</SectionPricing>
			<Footer />
		</PricingPage>
	);
}

export default Pricing;

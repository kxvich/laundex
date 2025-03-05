"use client";

import { styled, keyframes } from "styled-components";
import Link from "next/link";
import { toast } from "react-toastify";
import { useContext } from "react";
import { UserContext } from "../layout";

const MoveUp = keyframes`
0%{
	transform: translateY(1rem);
	opacity: 0;
}
100%{
	transform: translateY(0);
	opacity: 1;
}
`;
const MoveInLeft = keyframes`
0%{
	transform: translateX(-1rem);
	opacity: 0;
}
100%{
	transform: translateX(0);
	opacity: 1;
}`;
const TopContainer = styled.div`
	color: #fff;
	background-color: #1f7a8c;
	width: 100%;
	border-radius: 1rem;
	padding: 1rem 2rem;
	margin-bottom: 5rem;
	animation: ${MoveInLeft} 0.5s;
	animation-fill-mode: backwards;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
const NavName = styled.h1`
	font-size: 2.5rem;
	animation: ${MoveInLeft} 0.5s 0.2s;
	animation-fill-mode: backwards;
`;
const Message = styled.h2`
	animation: ${MoveInLeft} 0.5s 0.2s;
	animation-fill-mode: backwards;
	font-weight: 400;
`;
const Menu = styled.div`
	font-size: 2rem;
	cursor: pointer;
	@media only screen and (min-width: 56.25rem) {
		display: none;
	}
`;
const BoxContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 8rem 5rem;
	border-radius: 1rem;
	background-color: #1f7a8c;
	animation: ${MoveUp} 0.5s;
	animation-fill-mode: backwards;
	@media only screen and (max-width: 48rem) {
		flex-direction: column;
		padding: 4rem 0;
		gap: 3rem;
	}
`;
const Box1 = styled.div`
	width: 20rem;
	height: 18rem;
	border-radius: 1rem;
	border: 2px solid #77878b;
	background-color: #fff;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	cursor: pointer;
	box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
	text-align: center;
	animation: ${MoveUp} 0.5s 0.4s;
	animation-fill-mode: backwards;

	@media only screen and (max-width: 30rem) {
		margin-bottom: 5rem;
	}
`;
const Box2 = styled.div`
	width: 20rem;
	height: 18rem;
	border-radius: 1rem;
	border: 2px solid #77878b;
	background-color: #fff;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	cursor: pointer;
	box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
	text-align: center;
	animation: ${MoveUp} 0.5s 0.4s;
	animation-fill-mode: backwards;

	@media only screen and (max-width: 30rem) {
		margin-bottom: 5rem;
	}
`;
const Box3 = styled.div`
	width: 20rem;
	height: 18rem;
	border-radius: 1rem;
	border: 2px solid #77878b;
	background-color: #fff;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	cursor: pointer;
	box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
	text-align: center;
	animation: ${MoveUp} 0.5s 0.4s;
	animation-fill-mode: backwards;

	@media only screen and (max-width: 30rem) {
	}
`;
const BoxIcon = styled.div`
	color: #022b3a;
	font-size: 2rem;
`;
const BoxText = styled.h2`
	color: #1f7a8c;
	margin-bottom: 2rem;
`;
const BoxDescription = styled.p`
	font-size: 1.5rem;
	width: 80%;
	color: #1f7a8c;
`;

function Page() {
	const { setIsOpen } = useContext(UserContext);
	const toastMessage = (message) => {
		toast.dismiss();
		toast(message, {
			style: { backgroundColor: "#022b3a", color: "#fff", fontSize: "1.5rem" },
		});
	};
	return (
		<>
			<TopContainer>
				<div>
					<NavName>Support</NavName>
					<Message>get help and support</Message>
				</div>
				<Menu>
					<i onClick={() => setIsOpen(true)} className="fa-solid fa-bars"></i>
				</Menu>
			</TopContainer>

			<BoxContainer>
				<Link className="textDecor" href={"#"}>
					<Box1
						onClick={() =>
							toastMessage("this section has not been implemented")
						}
					>
						<BoxIcon>
							<i className="fa-solid fa-phone"></i>
						</BoxIcon>

						<BoxText>SELF-SERVICE SUPPORT</BoxText>
						<BoxDescription>
							<div>FAQs</div>
							<div>User Guides and Tutorials</div>
						</BoxDescription>
					</Box1>
				</Link>

				<Box2
					onClick={() => toastMessage("this section has not been implemented")}
				>
					<BoxIcon>
						<i className="fa-solid fa-headset"></i>
					</BoxIcon>
					<BoxText>CUSTOMER SUPPORT</BoxText>
					<BoxDescription>
						<div>contact us</div>
						<div>live chat</div>
						<div>report a problem</div>
					</BoxDescription>
				</Box2>
				<Box3
					onClick={() => toastMessage("this section has not been implemented")}
				>
					<BoxIcon>
						<i className="fa-solid fa-message"></i>
					</BoxIcon>
					<BoxText>POLICIES AND FEEDBACK</BoxText>
					<BoxDescription>
						<div>refunds policy</div>
						<div>dispute resolution</div>
						<div>feedback and rating</div>
					</BoxDescription>
				</Box3>
			</BoxContainer>
		</>
	);
}

export default Page;

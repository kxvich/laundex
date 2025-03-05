"use client";

import { styled, keyframes } from "styled-components";
import Link from "next/link";
import { useContext, useState } from "react";
import { UserContext } from "@/app/dashboard/layout";
import { toast } from "react-toastify";

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
		/* margin-bottom: 4rem;
		margin-right: 4rem; */
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
	const { data, setIsOpen } = useContext(UserContext);
	const {} = useContext;
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
					<NavName>Dashboard</NavName>
					<Message> Welcome {data && data[0]?.firstName}</Message>
				</div>
				<Menu>
					<i onClick={() => setIsOpen(true)} className="fa-solid fa-bars"></i>
				</Menu>
			</TopContainer>
			<BoxContainer>
				<Link className="textDecor" href={"/dashboard/newOrder"}>
					<Box1>
						<BoxIcon>
							<i className="fa-solid fa-plus"></i>
						</BoxIcon>

						<BoxText>NEW ORDER</BoxText>
						<BoxDescription>Place a new order</BoxDescription>
					</Box1>
				</Link>

				<Link className="textDecor" href={"/dashboard/trackOrder"}>
					<Box2>
						<BoxIcon>
							<i className="fa-solid fa-eye"></i>
						</BoxIcon>
						<BoxText>TRACK ORDER</BoxText>
						<BoxDescription>Track all orders</BoxDescription>
					</Box2>
				</Link>
				<Box3
					onClick={() => toastMessage("this section has not been implemented")}
				>
					<BoxIcon>
						<i className="fa-solid fa-truck"></i>
					</BoxIcon>
					<BoxText>PICK UP & DELIVERY</BoxText>
					<BoxDescription>
						schedule/reschedule pick up and delivery
					</BoxDescription>
				</Box3>
			</BoxContainer>
		</>
	);
}

export default Page;

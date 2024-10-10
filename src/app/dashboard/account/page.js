"use client";
import { styled, keyframes } from "styled-components";
import Script from "next/script";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// const Dashboard = styled.div`
// 	display: flex;
// 	height: 100vh;
// `;
// const SideBar = styled.div`
// 	background-color: #1f7a8c;
// 	padding: 6rem 0;
// 	width: 18%;
// `;
// const ProfileContainer = styled.div`
// 	display: flex;
// 	align-items: center;
// 	background-color: #022b3a;
// 	padding: 1rem 2rem;
// 	margin-bottom: 7rem;
// `;
// const ProfilePicture = styled.div`
// 	width: 3rem;
// 	height: 3rem;
// 	background-color: #1f7a8c;
// 	margin-right: 1rem;
// `;
// const Username = styled.h2`
// 	color: #fff;
// `;
// const SideBarlist = styled.ul`
// 	list-style-type: none;
// 	color: #fff;
// `;

// const SideBarIcon = styled.span`
// 	color: #fff;

// 	margin-right: 1rem;
// `;

// const SideBarlistItems = styled.li`
// 	font-size: 1.8rem;
// 	margin-bottom: 2rem;
// 	padding: 1rem 2rem;
// 	cursor: pointer;

// 	transition: all 0.3s;
// 	&:hover {
// 		background-color: #022b3a;
// 	}
// `;

// const Container = styled.div`
// 	flex: 1;
// 	padding: 7rem 4rem;
// `;

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
	@media only screen and (max-width: 30rem) {
		width: 90%;
	}
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
const BoxContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 8rem 5rem;
	border-radius: 1rem;
	background-color: #1f7a8c;
	animation: ${MoveUp} 0.5s;
	animation-fill-mode: backwards;
	@media only screen and (max-width: 30rem) {
		flex-direction: column;
		padding: 4rem 0;
		margin-bottom: 4rem;
		margin-right: 4rem;
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
	const toastMessage = (message) =>
		toast(message, {
			style: { backgroundColor: "#022b3a", color: "#fff", fontSize: "1.5rem" },
		});
	return (
		<>
			<ToastContainer
				position="top-center" // You can also try "bottom-center"
				autoClose={3000}
				hideProgressBar={false}
				closeOnClick
				pauseOnHover
				draggable
				theme="colored"
				// style={{
				// 	top: "50%", // Adjust this to center vertically
				// 	transform: "translateY(-50%)", // Adjust to center perfectly in Y axis
				// }}
			/>
			<Script
				src="https://kit.fontawesome.com/b778254e02.js"
				crossorigin="anonymous"
				strategy="afterInteractive"
			></Script>
			<TopContainer>
				<NavName>Account</NavName>
				<Message>update account information</Message>
			</TopContainer>
			<BoxContainer>
				<Link className="textDecor" href={"/dashboard/account/profile"}>
					<Box1>
						<BoxIcon>
							<i className="fa-solid fa-file"></i>
						</BoxIcon>

						<BoxText>UPDATE PROFILE</BoxText>
						<BoxDescription>Edit info</BoxDescription>
					</Box1>
				</Link>

				<Link className="textDecor" href={"/dashboard/account/history"}>
					<Box2>
						<BoxIcon>
							<i className="fa-solid fa-list"></i>
						</BoxIcon>
						<BoxText>ORDER HISTORY</BoxText>
						<BoxDescription>see order history</BoxDescription>
					</Box2>
				</Link>
				<Box3
					onClick={() => toastMessage("this section has not been implemented")}
				>
					<BoxIcon>
						<i className="fa-solid fa-credit-card"></i>
					</BoxIcon>
					<BoxText>PAYMENT METHOD</BoxText>
					<BoxDescription>update payment method</BoxDescription>
				</Box3>
			</BoxContainer>
		</>
	);
}

export default Page;

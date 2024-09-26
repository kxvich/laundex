"use client";
import { styled, keyframes } from "styled-components";
import Script from "next/script";
import Link from "next/link";

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
}`
const NavName = styled.h1`
	color: #1f7a8c;
	font-size: 2.5rem;
	animation: ${MoveInLeft} 0.5s;
	animation-fill-mode: backwards;
`;
const Message = styled.h2`
	color: #022b3a;
	margin-bottom: 5rem;
	animation: ${MoveInLeft} 0.5s;
	animation-fill-mode: backwards;
`;
const BoxContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 5rem;
	@media only screen and (max-width: 30rem) {
		flex-direction: column;
		padding: 0;
	}
`;
const Box = styled.div`
	width: 20rem;
	height: 18rem;
	border-radius: 1rem;
	border: 2px solid #1f7a8c;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	cursor: pointer;
	box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
	text-align: center;
	animation: ${MoveUp} 0.5s;
	animation-fill-mode: backwards;
	@media only screen and (max-width: 30rem) {
		margin-bottom: 5rem;
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
	return (
		<>
			<Script
				src="https://kit.fontawesome.com/b778254e02.js"
				crossorigin="anonymous"
				strategy="afterInteractive"
			></Script>
			<NavName>Account</NavName>
			<Message>update account information</Message>
			<BoxContainer>
				<Link className="textDecor" href={"#"}>
					<Box>
						<BoxIcon>
							<i className="fa-solid fa-file"></i>
						</BoxIcon>

						<BoxText>UPDATE PROFILE</BoxText>
						<BoxDescription>Edit info</BoxDescription>
					</Box>
				</Link>

				<Box>
					<BoxIcon>
						<i className="fa-solid fa-list"></i>
					</BoxIcon>
					<BoxText>ORDER HISTORY</BoxText>
					<BoxDescription>see order history</BoxDescription>
				</Box>
				<Box>
					<BoxIcon>
						<i className="fa-solid fa-credit-card"></i>
					</BoxIcon>
					<BoxText>PAYMENT METHOD</BoxText>
					<BoxDescription>update payment method</BoxDescription>
				</Box>
			</BoxContainer>
		</>
	);
}

export default Page;

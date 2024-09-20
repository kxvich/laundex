"use client";
import styled from "styled-components";
import Script from "next/script";
import Link from "next/link";

const Dashboard = styled.div`
	display: flex;
`;
const SideBar = styled.div`
	background-color: #1f7a8c;
	padding: 6rem 0 8.35rem;
	width: 18%;
`;
const ProfileContainer = styled.div`
	display: flex;
	align-items: center;
	background-color: #022b3a;
	padding: 1rem 2rem;
	margin-bottom: 7rem;
`;
const ProfilePicture = styled.div`
	width: 3rem;
	height: 3rem;
	background-color: #1f7a8c;
	margin-right: 1rem;
`;
const Username = styled.h2`
	color: #fff;
`;
const SideBarlist = styled.ul`
	list-style-type: none;
	color: #fff;
`;

const SideBarIcon = styled.span`
	color: #fff;

	margin-right: 1rem;
`;

const SideBarlistItems = styled.li`
	font-size: 1.8rem;
	margin-bottom: 2rem;
	padding: 1rem 2rem;
	cursor: pointer;

	transition: all 0.3s;
	&:hover {
		background-color: #022b3a;
	}
`;

const Container = styled.div`
	flex: 1;
	padding: 7rem 4rem;
`;

export default function Layout({ children }) {
	return (
		<>
			<Script
				src="https://kit.fontawesome.com/b778254e02.js"
				crossorigin="anonymous"
			></Script>
			<Dashboard>
				<SideBar>
					<ProfileContainer>
						<ProfilePicture></ProfilePicture>
						<Username>user</Username>
					</ProfileContainer>

					<SideBarlist>
						<Link className="textDecor" href="/dashboard">
							<SideBarlistItems>
								<SideBarIcon>
									<i className="fa-solid fa-house"></i>
								</SideBarIcon>
								Dashboard
							</SideBarlistItems>
						</Link>
						<Link href="/dashboard/account" className="textDecor">
							<SideBarlistItems>
								<SideBarIcon>
									<i className="fa-solid fa-user"></i>
								</SideBarIcon>
								Account
							</SideBarlistItems>
						</Link>
						<Link className="textDecor" href={"/dashboard/support"}>
						<SideBarlistItems>
							<SideBarIcon>
								<i className="fa-solid fa-headset"></i>
							</SideBarIcon>
							Support & Help
						</SideBarlistItems></Link>
						<Link className="textDecor" href={"/dashboard/settings"}>
							<SideBarlistItems>
								<SideBarIcon>
									<i className="fa-solid fa-gear"></i>
								</SideBarIcon>
								Settings
							</SideBarlistItems>
						</Link>
						<Link className="textDecor" href="/">
							<SideBarlistItems>
								<SideBarIcon>
									<i class="fa-solid fa-right-from-bracket"></i>
								</SideBarIcon>
								Logout
							</SideBarlistItems>
						</Link>
					</SideBarlist>
				</SideBar>
				<Container>{children}</Container>
			</Dashboard>
		</>
	);
}

"use client";

import styled, { keyframes } from "styled-components";
import Link from "next/link";
import supabase from "@/services/supabase";
import { usePathname, useRouter } from "next/navigation";
import { createContext, useEffect, useState } from "react";
import Loader from "@/app/_components/Loader";
import NotAuthorized from "@/app/_components/NotAuthorized";
import {
	// QueryClient,
	useQuery,
	QueryClientProvider,
} from "@tanstack/react-query";
import useMediaQuery from "@/Hooks/useMediaQuery";
import { motion } from "framer-motion";

const LogoContainer = styled.div`
	overflow: hidden;
`;
const Logo = styled(motion.h1)`
	padding: 2rem;
	color: #ffffff;
	font-size: 2.5rem;
	font-family: "Bebas Neue", sans-serif;
	display: inline-block;
	cursor: pointer;
`;
const SpinnerContainer = styled.div`
	height: 100vh;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;
const MoveInLeft = keyframes`
0%{
	transform: translateX(-1rem);
	opacity: 0;
}
100%{
	transform: translateX(0);
	opacity: 1;
}
`;
const Close = styled.span`
	margin: 0 0 1.5rem 1.5rem;
	color: #fff;
	font-size: 2.3rem;
`;
const Dashboard = styled.div`
	display: flex;
	background-color: #e5f0f0;
`;
const Menu = styled.div`
	font-size: 2rem;
	margin: 6rem 0 0 3rem;
	display: none;
`;
const SideBar = styled.div`
	background-color: #1f7a8c;
	padding: 1rem 0 13rem;
	width: 18%;
	animation: ${MoveInLeft} 0.2s;
	animation-fill-mode: backwards;
	@media only screen and (max-width: 48rem) {
		width: 85%;
		padding: 1.5rem 0 8.35rem;
		height: 100vh;
	}
`;
const ProfileContainer = styled.div`
	display: flex;
	align-items: center;
	background-color: #022b3a;
	padding: 1rem 2rem;
	margin-bottom: 1rem;
`;
const ProfilePicture = styled.div`
	width: 3rem;
	height: 3rem;
	background-color: #1f7a8c;
	margin-right: 1rem;
	border-radius: 50%;
`;
const Username = styled.h2`
	color: #fff;
	text-transform: capitalize;
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
	animation: ${MoveInLeft} 0.2s 0.25s;
	animation-fill-mode: backwards;

	transition: all 0.3s;
	&:hover {
		background-color: #022b3a;
	}
`;
const Container = styled.div`
	flex: 1;
	padding: 4rem;

	@media only screen and (max-width: 48rem) {
		padding: 3rem 2rem;
	}
`;

async function FetchRowById(id) {
	if (!id) return;
	const { data, error } = await supabase.from("users").select("*").eq("id", id);

	if (error) {
		console.log(error);
	}

	return data;
}

export const UserContext = createContext();

export default function Layout({ children }) {
	const router = useRouter();
	const [isLoading, setIsLoading] = useState(true);
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [userId, setUserId] = useState(null);
	const [userEmail, setUserEmail] = useState(null);
	const [isOpen, setIsOpen] = useState(false);
	const isMobile = useMediaQuery("(max-width: 765px)");
	const pathname = usePathname();

	useEffect(
		function () {
			async function checkUser() {
				const {
					data: { user },
					error,
				} = await supabase.auth.getUser();

				if (error || !user) {
					setIsLoading(false);
					setTimeout(() => {
						router.push("/login");
					}, 2000);
				} else {
					setIsAuthenticated(true);
					setIsLoading(false);
					const { id, email } = user;
					setUserId(`${id}`);
					setUserEmail(`${email}`);
				}
			}
			checkUser();
		},
		[router]
	);

	const {
		data,
		isLoading: queryLoading,
		isError,
		error,
	} = useQuery({
		queryKey: ["user", userId],
		queryFn: () => FetchRowById(userId),
		enabled: !!userId,
	});

	async function handleLogout() {
		const { error } = await supabase.auth.signOut();

		if (error) {
			console.log(error);
			alert(error);
		}
		router.replace("/");
	}

	return (
		<UserContext.Provider
			value={{ data, userEmail, userId, isOpen, setIsOpen }}
		>
			{isLoading && (
				<SpinnerContainer>
					<Loader />
				</SpinnerContainer>
			)}

			{!isAuthenticated && !isLoading && <NotAuthorized />}
			{isAuthenticated && !data ? (
				<SpinnerContainer>
					<Loader />
				</SpinnerContainer>
			) : null}
			{isAuthenticated && data && (
				<>
					<Dashboard>
						{/* {!isOpen && isMobile && (
							<Menu>
								<i
									onClick={() => setIsOpen(true)}
									className="fa-solid fa-bars"
								></i>
							</Menu>
						)} */}
						{!isMobile && (
							<SideBar>
								{isMobile && (
									<Close>
										<i
											onClick={() => setIsOpen(false)}
											className="fa-solid fa-x"
										></i>
									</Close>
								)}
								<LogoContainer>
									<Logo
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
										HypWash
									</Logo>
								</LogoContainer>
								<ProfileContainer>
									<ProfilePicture></ProfilePicture>
									<Username>
										{data && data[0]?.firstName && data[0].firstName}
									</Username>
								</ProfileContainer>

								<SideBarlist>
									<Link
										onClick={() => setIsOpen(false)}
										className="textDecor"
										href="/dashboard"
									>
										<SideBarlistItems
											className={pathname === "/dashboard" ? "active" : ""}
										>
											<SideBarIcon>
												<i className="fa-solid fa-house"></i>
											</SideBarIcon>
											Dashboard
										</SideBarlistItems>
									</Link>
									<Link
										onClick={() => setIsOpen(false)}
										href="/dashboard/account"
										className="textDecor"
									>
										<SideBarlistItems
											className={
												pathname === "/dashboard/account" ? "active" : ""
											}
										>
											<SideBarIcon>
												<i className="fa-solid fa-user"></i>
											</SideBarIcon>
											Account
										</SideBarlistItems>
									</Link>
									<Link
										onClick={() => setIsOpen(false)}
										className="textDecor"
										href={"/dashboard/support"}
									>
										<SideBarlistItems
											className={
												pathname === "/dashboard/support" ? "active" : ""
											}
										>
											<SideBarIcon>
												<i className="fa-solid fa-headset"></i>
											</SideBarIcon>
											Support & Help
										</SideBarlistItems>
									</Link>
									<Link
										onClick={() => setIsOpen(false)}
										className="textDecor"
										href={"/dashboard/settings"}
									>
										<SideBarlistItems
											className={
												pathname === "/dashboard/settings" ? "active" : ""
											}
										>
											<SideBarIcon>
												<i className="fa-solid fa-gear"></i>
											</SideBarIcon>
											Settings
										</SideBarlistItems>
									</Link>
									<Link
										onClick={(e) => {
											e.preventDefault();
											setIsLoading(true);
											handleLogout();
										}}
										className="textDecor"
										href="/"
									>
										<SideBarlistItems>
											<SideBarIcon>
												<i className="fa-solid fa-right-from-bracket"></i>
											</SideBarIcon>
											Logout
										</SideBarlistItems>
									</Link>
								</SideBarlist>
							</SideBar>
						)}
						{isOpen && isMobile && (
							<SideBar>
								{isMobile && (
									<Close>
										<i
											onClick={() => setIsOpen(false)}
											className="fa-solid fa-x"
										></i>
									</Close>
								)}
								<LogoContainer>
									<Logo
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
										HypWash
									</Logo>
								</LogoContainer>
								<ProfileContainer>
									<ProfilePicture></ProfilePicture>
									<Username>
										{data && data[0]?.firstName && data[0].firstName}
									</Username>
								</ProfileContainer>

								<SideBarlist>
									<Link
										onClick={() => setIsOpen(false)}
										className="textDecor"
										href="/dashboard"
									>
										<SideBarlistItems
											className={pathname === "/dashboard" ? "active" : ""}
										>
											<SideBarIcon>
												<i className="fa-solid fa-house"></i>
											</SideBarIcon>
											Dashboard
										</SideBarlistItems>
									</Link>
									<Link
										onClick={() => setIsOpen(false)}
										href="/dashboard/account"
										className="textDecor"
									>
										<SideBarlistItems
											className={
												pathname === "/dashboard/account" ? "active" : ""
											}
										>
											<SideBarIcon>
												<i className="fa-solid fa-user"></i>
											</SideBarIcon>
											Account
										</SideBarlistItems>
									</Link>
									<Link
										onClick={() => setIsOpen(false)}
										className="textDecor"
										href={"/dashboard/support"}
									>
										<SideBarlistItems
											className={
												pathname === "/dashboard/support" ? "active" : ""
											}
										>
											<SideBarIcon>
												<i className="fa-solid fa-headset"></i>
											</SideBarIcon>
											Support & Help
										</SideBarlistItems>
									</Link>
									<Link
										onClick={() => setIsOpen(false)}
										className="textDecor"
										href={"/dashboard/settings"}
									>
										<SideBarlistItems
											className={
												pathname === "/dashboard/settings" ? "active" : ""
											}
										>
											<SideBarIcon>
												<i className="fa-solid fa-gear"></i>
											</SideBarIcon>
											Settings
										</SideBarlistItems>
									</Link>
									<Link
										onClick={(e) => {
											e.preventDefault();
											setIsLoading(true);
											handleLogout();
										}}
										className="textDecor"
										href="/"
									>
										<SideBarlistItems>
											<SideBarIcon>
												<i className="fa-solid fa-right-from-bracket"></i>
											</SideBarIcon>
											Logout
										</SideBarlistItems>
									</Link>
								</SideBarlist>
							</SideBar>
						)}
						{!isOpen && <Container>{children}</Container>}
					</Dashboard>
				</>
			)}
		</UserContext.Provider>
	);
}

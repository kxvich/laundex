"use client";
import styled from "styled-components";
import Script from "next/script";
import Link from "next/link";
import supabase from "@/services/supabase";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Loader from "@/_components/Loader";
import NotAuthorized from "@/_components/NotAuthorized";
import {
	QueryClient,
	useQuery,
	QueryClientProvider,
} from "@tanstack/react-query";
const SpinnerContainer = styled.div`
	height: 100vh;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

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

	transition: all 0.3s;
	&:hover {
		background-color: #022b3a;
	}
`;

const Container = styled.div`
	flex: 1;
	padding: 7rem 4rem;
`;

async function FetchRowById(id) {
	if (!id) return;
	const { data, error } = await supabase.from("users").select("*").eq("id", id);

	if (error) {
		console.log(error);
		alert(error);
	}

	return data;
}

export default function Layout({ children }) {
	const router = useRouter();
	const [isLoading, setIsLoading] = useState(true);
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [userId, setUserId] = useState(null);
	const [queryClient] = useState(() => new QueryClient());

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
					const { id } = user;
					setUserId(`${id}`);
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
		<QueryClientProvider client={queryClient}>
			<Script
				src="https://kit.fontawesome.com/b778254e02.js"
				crossorigin="anonymous"
			></Script>
			{isLoading && (
				<SpinnerContainer>
					<Loader />
				</SpinnerContainer>
			)}

			{!isAuthenticated && !isLoading && <NotAuthorized />}
			{isAuthenticated && (
				<Dashboard>
					<SideBar>
						<ProfileContainer>
							<ProfilePicture></ProfilePicture>
							<Username>
								{data && data[0]?.firstName ? data[0].firstName : "User"}
							</Username>
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
								</SideBarlistItems>
							</Link>
							<Link className="textDecor" href={"/dashboard/settings"}>
								<SideBarlistItems>
									<SideBarIcon>
										<i className="fa-solid fa-gear"></i>
									</SideBarIcon>
									Settings
								</SideBarlistItems>
							</Link>
							<Link
								onClick={(e) => {
									e.preventDefault();
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
					<Container>{children}</Container>
				</Dashboard>
			)}
		</QueryClientProvider>
	);
}

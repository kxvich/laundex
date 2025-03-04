"use client";

import styled from "styled-components";
import Button from "./Button";
import { motion } from "framer-motion";
import { useUser } from "@/contexts/UserContexts";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const Container = styled.div`
	overflow: hidden;
	&:not(:last-child) {
		margin-bottom: 2rem;
	}
`;
const Logo = styled(motion.h1)`
	color: #022b3a;
	font-size: 2.5rem;
	position: relative;
	font-family: "Bebas Neue", sans-serif;
	display: inline-block;
	cursor: pointer;
`;
const SideBarPage = styled(motion.div)`
	width: 100%;
	/* height: 100vh; */
	background-color: #fff;
	position: fixed;
	top: 0;
	right: 0;
	z-index: 20;
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-direction: column;
	padding-top: 3rem;
	border-bottom: 1px solid #022b3a;
	transition: all 0.2s;
`;
const SideBarList = styled.ul`
	list-style: none;
	text-align: center;
`;
const SideBarListItem = styled(motion.li)`
	font-size: 2.5rem;
	text-transform: capitalize;
	cursor: pointer;
`;
const TopGroup = styled.div`
	width: 88%;
`;
const Top = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
	margin-bottom: 4rem;
`;
const Close = styled.span`
	font-size: 2.5rem;
`;
const ButtonContainer = styled(motion.div)`
	margin-bottom: 3.5rem;
	display: flex;
	gap: 2rem;
`;

function SideBar() {
	const router = useRouter();
	const { setIsOpen } = useUser();
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	return (
		<SideBarPage
			initial={{ opacity: 0, height: 0 }}
			animate={{
				opacity: 1,
				height: isMounted ? "100vh" : 0,
				position: "fixed",
				top: 0,
				right: 0,
				zIndex: 20,
				transition: { duration: 0.8, ease: [0.75, 0, 0.24, 1] },
			}}
			exit={{
				opacity: 0,
				height: 0,
				transition: { duration: 0.8, ease: [0.75, 0, 0.24, 1] },
			}}
		>
			<TopGroup>
				<Top>
					<Container>
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
							onClick={() => {
								router.push("/");
								setIsOpen(false);
							}}
						>
							HypWash
						</Logo>
					</Container>
					<Close
						onClick={() => {
							setIsOpen(false);
						}}
					>
						<i className="fa-solid fa-x"></i>
					</Close>
				</Top>
				<SideBarList>
					<Container>
						<SideBarListItem
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
								transition: {
									duration: 0.8,
									ease: [0.75, 0, 0.24, 1],
									delay: 0.5,
								},
							}}
							onClick={() => {
								router.push("/services");
								setIsOpen(false);
							}}
						>
							Services
						</SideBarListItem>
					</Container>
					<Container>
						<SideBarListItem
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
							exit={{
								opacity: 0,
								y: 100,
								transition: {
									duration: 0.8,
									ease: [0.75, 0, 0.24, 1],
									delay: 0.4,
								},
							}}
							onClick={() => {
								router.push("/pricing");
								setIsOpen(false);
							}}
						>
							Pricing
						</SideBarListItem>
					</Container>
					<Container>
						<SideBarListItem
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
								transition: {
									duration: 0.8,
									ease: [0.75, 0, 0.24, 1],
									delay: 0.2,
								},
							}}
							onClick={() => {
								router.push("/contact");
								setIsOpen(false);
							}}
						>
							Contact
						</SideBarListItem>
					</Container>
					<Container>
						<SideBarListItem
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
								transition: {
									duration: 0.8,
									ease: [0.75, 0, 0.24, 1],
									delay: 0.1,
								},
							}}
							onClick={() => {
								router.push("/outsourcing");
								setIsOpen(false);
							}}
						>
							Outsourcing
						</SideBarListItem>
					</Container>
				</SideBarList>
			</TopGroup>
			<ButtonContainer
				initial={{ opacity: 0, y: 100 }}
				animate={{
					opacity: 1,
					y: 0,
					transition: {
						duration: 0.8,
						ease: [0.75, 0, 0.24, 1],
						delay: 0.6,
					},
				}}
				exit={{
					opacity: 0,
					y: 100,
					transition: {
						duration: 0.8,
						ease: [0.75, 0, 0.24, 1],
					},
				}}
			>
				<Button onclick={() => router.push("/signup")} width={"15rem"}>
					Sign up
				</Button>
				<Button onclick={() => router.push("/login")} width={"15rem"}>
					Log in
				</Button>
			</ButtonContainer>
		</SideBarPage>
	);
}

export default SideBar;

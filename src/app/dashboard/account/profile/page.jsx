"use client";

import Button from "@/app/_components/Button";
import { useContext, useEffect, useState } from "react";
import { styled, keyframes } from "styled-components";
import { UserContext } from "../../layout";
import { useRouter } from "next/navigation";
import supabase from "@/services/supabase";
import {  toast } from "react-toastify";


const MoveUp = keyframes`
0%{
	transform: translateY(1rem);
	opacity: 0;
}
100%{
	transform: translateY(0);
	opacity: 1;
}`;
const Profile = styled.div`
	animation: ${MoveUp} 0.5s;
	animation-fill-mode: backwards;
	padding-bottom: 4rem;
`;
const ButtonContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
const Menu = styled.div`
	font-size: 2rem;
	cursor: pointer;

	@media only screen and (min-width: 56.25rem) {
		display: none;
	}
`;
const Form = styled.form`
	padding: 4rem;
	display: flex;
	justify-content: space-between;
	border: 1px solid #e5f0f0;
	border-radius: 1rem;
	margin-top: 2rem;
	margin-bottom: 3rem;
	background-color: #1f7a8c;

	@media only screen and (max-width: 48rem) {
		flex-direction: column;
		width: 100%;
		text-align: center;
	}
`;
const Heading = styled.h2`
	color: #fff;
	font-size: 2rem;
	margin-bottom: 2rem;
	animation: ${MoveUp} 0.5s 0.2s;
	animation-fill-mode: backwards;
	@media only screen and (max-width: 48rem) {
		text-align: center;
		width: 100%;
	}
`;
const Label = styled.label`
	display: block;
	font-size: 1.5rem;
	color: #fff;
	margin-bottom: 1rem;
	animation: ${MoveUp} 0.5s 0.2s;
	animation-fill-mode: backwards;
`;
const Input = styled.input`
	display: block;
	border: none;
	width: 50%;
	color: #fff;
	padding: 0.5rem;
	margin-bottom: 2rem;
	border-bottom: 1px solid #fff;
	transition: all 0.3s;
	background-color: transparent;
	animation: ${MoveUp} 0.5s 0.2s;
	animation-fill-mode: backwards;
	@media only screen and (max-width: 48rem) {
		width: 100%;
		text-align: center;
	}

	&:focus {
		outline: none;
		border-bottom: 1px solid #03045e;
	}

	&::placeholder {
		color: #fff;
	}
`;
const Container1 = styled.div`
	width: 50%;
	@media only screen and (max-width: 48rem) {
		width: 100%;
	}
`;
const SaveButtonContainer = styled.div`
	text-align: center;
`;

function Page() {
	const { data, userEmail, userId, setIsOpen } = useContext(UserContext);
	const router = useRouter();

	const toastMessage = (message) =>
		toast(message, {
			style: { backgroundColor: "#022b3a", color: "#fff", fontSize: "1.5rem" },
		});
	const [formData, setFormData] = useState({
		lastName: "",
		firstName: "",
		phoneNumber: "",
		email: "",
		address: "",
	});

	useEffect(() => {
		if (data && data.length > 0) {
			setFormData((formData) => ({
				...formData,
				firstName: ` ${data[0]?.firstName}`,
				lastName: `${data[0]?.lastName}`,
				phoneNumber: data[0]?.phoneNumber || "",
				email: userEmail,
				address: data[0]?.address || "",
			}));
		}
	}, [data, userEmail]);

	function handleChange(e) {
		const { name, type, checked, value } = e.target;
		if (type === "checkbox") {
			setFormData((formData) => ({
				...formData,
				clothes: {
					...formData.clothes,
					[name]: checked,
				},
			}));
		} else {
			setFormData({
				...formData,
				[name]: value,
			});
		}
	}

	async function handleSubmit(e) {
		e.preventDefault();

		const { data: currentUserData, error: fetchError } = await supabase
			.from("users")
			.select("*")
			.eq("email", userEmail);
		console.log("Current User Data:", currentUserData);

		const { data, error } = await supabase
			.from("users")
			.update(formData)
			.eq("id", userId)
			.select();

		if (error) {
			console.log(error);
			alert(error);
		}
		console.log(data);
		toastMessage("profile updated successfully");
		console.log("profile updated successfully");
		setTimeout(() => {
			router.replace("/dashboard/account");
		}, 2000);
	}
	return (
		<Profile>
			<ButtonContainer>
				<Menu>
					<i onClick={() => setIsOpen(true)} className="fa-solid fa-bars"></i>
				</Menu>
				<Button onclick={() => router.back()}>Back</Button>
			</ButtonContainer>
			<Form>
				<Container1>
					<Heading>Update Information:</Heading>
					<Label htmlFor="firstName">First Name: </Label>
					<Input
						name="firstName"
						placeholder="Enter first Name"
						type="text"
						value={formData.firstName}
						onChange={handleChange}
						required
					></Input>
					<Label htmlFor="lastName">Last Name: </Label>
					<Input
						name="lastName"
						placeholder="Enter lastName"
						type="text"
						value={formData.lastName}
						onChange={handleChange}
						required
					></Input>
					<Label htmlFor="phoneNumber">Phone Number: </Label>
					<Input
						name="phoneNumber"
						placeholder="Enter Phone Number"
						type="tel"
						value={formData.phoneNumber}
						onChange={handleChange}
						required
						pattern="[0-9]{11}"
						title="please enter a valid 11-digit number"
					></Input>
					<Label htmlFor="email">Email: </Label>
					<Input
						name="email"
						placeholder="Enter Email"
						type="text"
						value={formData.email}
						onChange={handleChange}
					></Input>
					<Label htmlFor="address">Address: </Label>
					<Input
						name="address"
						placeholder="Enter Address"
						type="text"
						value={formData.address}
						onChange={handleChange}
					></Input>
				</Container1>
			</Form>
			<SaveButtonContainer>
				<Button onclick={handleSubmit}>Save</Button>
			</SaveButtonContainer>
		</Profile>
	);
}

export default Page;

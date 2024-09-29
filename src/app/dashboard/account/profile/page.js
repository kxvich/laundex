"use client";

import Button from "@/_components/Button";
import { useContext, useEffect, useState } from "react";
import { styled, keyframes } from "styled-components";
import { UserContext } from "../../layout";
import { useRouter } from "next/navigation";
import supabase from "@/services/supabase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
`;
const Form = styled.form`
	padding-top: 4rem;
	display: flex;
	justify-content: space-between;

	@media only screen and (max-width: 30rem) {
		flex-direction: column;
		width: 100%;
	}
`;
const Heading = styled.h2`
	color: #022b3a;
	font-size: 2rem;
	margin-bottom: 2rem;
	@media only screen and (max-width: 30rem) {
		width: 100%;
	}
`;

const Label = styled.label`
	display: block;
	font-size: 1.5rem;
	color: #1f7a8c;
	margin-bottom: 1rem;
`;
const Input = styled.input`
	display: block;
	border: none;
	width: 50%;
	color: rgba(0, 0, 0, 0.8);
	padding: 0.5rem;
	margin-bottom: 2rem;
	border-bottom: 1px solid #022b3a;
	@media only screen and (max-width: 30rem) {
		width: 60%;
	}

	&:focus {
		outline: none;
		border-bottom: 1px solid #03045e;
	}
`;
const Container1 = styled.div`
	width: 50%;
	@media only screen and (max-width: 30rem) {
		width: 100%;
	}
`;

function Page() {
	const { data, userEmail, userId } = useContext(UserContext);
	const router = useRouter();

	const toastMessage = (message) =>
		toast(message, {
			style: { backgroundColor: "#022b3a", color: "#fff", fontSize: "1.5rem" },
		});
	const [formData, setFormData] = useState({
		surname: "",
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
				surname: `${data[0]?.surname}`,
				phoneNumber: data[0]?.phoneNumber || "",
				email: userEmail,
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
		console.log(userId);
		console.log(formData);

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
			<Button onclick={() => router.back()}>Back</Button>
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
					<Label htmlFor="Surname">Surname: </Label>
					<Input
						name="surname"
						placeholder="Enter surname"
						type="text"
						value={formData.surname}
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
			<Button onclick={handleSubmit}>Save</Button>
		</Profile>
	);
}

export default Page;

"use client";

import Button from "@/_components/Button";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { UserContext } from "../layout";
import { useRouter } from "next/navigation";
import supabase from "@/services/supabase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NewOrder = styled.div``;
const Form = styled.form`
	padding-top: 4rem;
	display: flex;
	justify-content: space-between;
`;
const Heading = styled.h2`
	color: #022b3a;
	font-size: 2rem;
	margin-bottom: 2rem;
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

	&:focus {
		outline: none;
		border-bottom: 1px solid #03045e;
	}
`;
const Selection = styled.select`
	width: 30%;
	padding: 1rem;
	border-radius: 1rem;
	border: 1px solid #1f7a8c;
	font-size: 1.2rem;
	color: #022b3a;
	background-color: white;
	outline: none;
	cursor: pointer;
	margin-bottom: 2rem;

	&:focus {
		border-color: #022b3a;
	}
`;
const Option = styled.option`
	background-color: white;
	color: #1f7a8c;
	padding: 1rem;
	font-size: 1rem;

	&:hover {
		background-color: #f0f0f0;
	}
`;
const ClotheItem = styled.div`
	width: 20%;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
const Checkbox = styled.input`
	margin-top: -1rem;
`;

const Container1 = styled.div`
	width: 50%;
`;
const Container2 = styled.div`
	width: 50%;
`;
function Page() {
	const { data, userEmail, userId } = useContext(UserContext);
	const router = useRouter();

	const toastMessage = (message) =>
		toast(message, {
			style: { backgroundColor: "#022b3a", color: "#fff", fontSize: "1.5rem" },
		});
	const [formData, setFormData] = useState({
		fullName: "",
		phoneNumber: "",
		email: "",
		address: "",
		contactMethod: "",
		plan: "",
		pickupDelivery: "",
		clothes: {
			shirts: false,
			pants: false,
			dresses: false,
			beddings: false,
			towels: false,
		},
		customEntry: "",
	});

	useEffect(() => {
		if (data && data.length > 0) {
			setFormData((formData) => ({
				...formData,
				fullName: `${data[0]?.surname} ${data[0]?.firstName}`,
				phoneNumber: data[0]?.phoneNumber || "",
				email: userEmail,
				contactMethod: "email",
				plan: "classic",
				pickupDelivery: "pickup",
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

		const { data, error } = await supabase
			.from("newOrder")
			.insert([
				{
					userId: userId,
					fullName: formData.fullName,
					phoneNumber: formData.phoneNumber,
					email: formData.email,
					address: formData.address,
					contactMethod: formData.contactMethod,
					plan: formData.plan,
					pickupDelivery: formData.pickupDelivery,
					clothes: {
						shirts: formData.clothes.shirts,
						pants: formData.clothes.pants,
						dresses: formData.clothes.dresses,
						beddings: formData.clothes.beddings,
						towels: formData.clothes.towels,
					},
					customEntry: formData.customEntry,
				},
			])
			.select();

		if (error) {
			console.log(error);
			alert(error);
		}
		toastMessage("order placed successfully");
		console.log("new order placed successfully");
		setTimeout(() => {
			router.replace("/dashboard");
		}, 2000);
	}
	return (
		<NewOrder>
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
					<Heading>Customer Information:</Heading>
					<Label htmlFor="fullName">Full Name: </Label>
					<Input
						name="fullName"
						placeholder="Enter Full Name"
						type="text"
						value={`${data && data[0]?.surname ? data[0].surname : ""} ${
							data && data[0]?.firstName ? data[0].firstName : ""
						}`}
						// onChange={handleChange}
					></Input>
					<Label htmlFor="phoneNumber">Phone Number: </Label>
					<Input
						name="phoneNumber"
						placeholder="Enter Phone Number"
						type="text"
						value={data && data[0]?.phoneNumber ? data[0].phoneNumber : ""}
						// onChange={handleChange}
					></Input>
					<Label htmlFor="email">Email: </Label>
					<Input
						name="email"
						placeholder="Enter Email"
						type="text"
						value={userEmail}
						// onChange={handleChange}
					></Input>
					<Label htmlFor="address">Address: </Label>
					<Input
						name="address"
						placeholder="Enter Address"
						type="text"
						value={formData.address}
						onChange={handleChange}
					></Input>
					<Label htmlFor="contact">Preferred Contact Method: </Label>
					<Selection
						id="contact"
						name="contactMethod"
						value={formData.contactMethod}
						onChange={handleChange}
					>
						<Option value="email">Email</Option>
						<Option value="phone">Phone</Option>
						<Option value="text">Text</Option>
					</Selection>
				</Container1>
				<Container2>
					<Heading>Choose plan:</Heading>
					<Label htmlFor="plan">choose preferred plan: </Label>
					<Selection
						id="plan"
						name="plan"
						value={formData.plan}
						onChange={handleChange}
					>
						<Option value="classic">Classic</Option>
						<Option value="classic+">Classic+</Option>
						<Option value="express">Express</Option>
					</Selection>
					<Label htmlFor="contact">Pickup and delivery: </Label>
					<Selection
						id="pickupDelivery"
						name="pickupDelivery"
						value={formData.pickupDelivery}
						onChange={handleChange}
					>
						{formData.plan === "classic" ? (
							<>
								<Option value="pickup">pickup</Option>
								<Option value="delivery">delivery</Option>
							</>
						) : (
							<>
								<Option value="pickup">pickup</Option>
								<Option value="delivery">delivery</Option>
								<Option value="Both">Both</Option>
							</>
						)}
					</Selection>
					<Heading>Clothes:</Heading>
					<ClotheItem>
						<Label htmlFor="shirts">shirts</Label>
						<Checkbox
							className="margin-left-small"
							type="checkbox"
							name="shirts"
							checked={formData.clothes.shirts}
							onChange={handleChange}
						></Checkbox>
					</ClotheItem>
					<ClotheItem>
						<Label htmlFor="pants">pants</Label>
						<Checkbox
							className="margin-left-small"
							type="checkbox"
							name="pants"
							checked={formData.clothes.pants}
							onChange={handleChange}
						></Checkbox>
					</ClotheItem>
					<ClotheItem>
						<Label htmlFor="dresses">dresses</Label>
						<Checkbox
							className="margin-left-small"
							type="checkbox"
							name="dresses"
							checked={formData.clothes.dresses}
							onChange={handleChange}
						></Checkbox>
					</ClotheItem>
					<ClotheItem>
						<Label htmlFor="beddings">beddings</Label>
						<Checkbox
							className="margin-left-small"
							type="checkbox"
							name="beddings"
							checked={formData.clothes.beddings}
							onChange={handleChange}
						></Checkbox>
					</ClotheItem>
					<ClotheItem>
						<Label htmlFor="towels">towels</Label>
						<Checkbox
							className="margin-left-small"
							type="checkbox"
							name="towels"
							checked={formData.clothes.towels}
							onChange={handleChange}
						></Checkbox>
					</ClotheItem>

					<Label htmlFor="customEntry">custom Entry: </Label>
					<Input
						name="customEntry"
						placeholder="Enter custom item"
						type="text"
						value={formData.customEntry}
						onChange={handleChange}
					></Input>
				</Container2>
			</Form>
			<Button onclick={handleSubmit}>Proceed To Pay</Button>
		</NewOrder>
	);
}

export default Page;

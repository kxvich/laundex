"use client";

import Button from "@/app/_components/Button";
import { useContext, useEffect, useState } from "react";
import { styled, keyframes } from "styled-components";
import { UserContext } from "../layout";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AnimatePresence, motion } from "framer-motion";
import dynamic from "next/dynamic";
import PaystackPop from "@paystack/inline-js";
// const PaystackPop = dynamic(() => import("@paystack/inline-js"), {
// 	ssr: false,
// });

const MoveUp = keyframes`
0%{
	transform: translateY(1rem);
	opacity: 0;
}
100%{
	transform: translateY(0);
	opacity: 1;
}`;
const NewOrder = styled.div`
	animation: ${MoveUp} 0.5s;
	animation-fill-mode: backwards;
	padding-bottom: 4rem;
`;
const Form = styled.form`
	padding: 4rem 0 2rem 4rem;
	display: flex;
	justify-content: space-between;
	border: 1px solid #e5f0f0;
	border-radius: 1rem;
	margin-top: 2rem;
	margin-bottom: 3rem;
	background-color: #1f7a8c;

	@media only screen and (max-width: 48em) {
		flex-direction: column;
		width: 100%;
	}
`;
const Heading = styled.h2`
	/* color: #022b3a; */
	color: #fff;
	font-size: 2rem;
	margin-bottom: 2rem;
	animation: ${MoveUp} 0.5s 0.2s;
	animation-fill-mode: backwards;

	@media only screen and (max-width: 48rem) {
		width: 100%;
	}
`;
const Label = styled.label`
	display: block;
	font-size: 1.5rem;
	/* color: #1f7a8c; */
	color: #fff;
	margin-bottom: 1rem;
	animation: ${MoveUp} 0.5s 0.2s;
	animation-fill-mode: backwards;

	@media only screen and (max-width: 31.25rem) {
		width: 50%;
	}

	@media only screen and (max-width: 31.25rem) {
		width: 50%;
	}
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
	}
	@media only screen and (max-width: 31.25rem) {
		width: 80%;
	}
	&::placeholder {
		color: #fff;
	}

	&:focus {
		outline: none;
		border-bottom: 1px solid #03045e;
	}
`;
const Selection = styled.select`
	width: 30%;
	padding: 1rem;
	border-radius: 1rem;
	border: 1px solid #fff;
	font-size: 1.2rem;
	color: #fff;
	background-color: transparent;
	outline: none;
	cursor: pointer;
	margin-bottom: 2rem;
	animation: ${MoveUp} 0.5s 0.2s;
	animation-fill-mode: backwards;

	@media only screen and (max-width: 48rem) {
		width: 50%;
	}

	@media only screen and (max-width: 31.25rem) {
		width: 80%;
	}

	&:focus {
		/* border-color: #022b3a; */
		border-color: #fff;
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
	width: 80%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	animation: ${MoveUp} 0.5s 0.2s;
	animation-fill-mode: backwards;
	@media only screen and (max-width: 48rem) {
		width: 90%;
	}
`;
const NumberPicker = styled.input`
	width: 6rem;
	background-color: transparent;
	color: #fff;
	border: 1px solid #fff;
	border-radius: 0.5rem;
	padding: 0.25rem 0.5rem;
	&:focus {
		outline: none;
	}
`;
const Container1 = styled.div`
	width: 50%;
	@media only screen and (max-width: 48rem) {
		width: 90%;
	}
`;
const Container2 = styled.div`
	width: 50%;

	@media only screen and (max-width: 48rem) {
		width: 90%;
	}
`;
const Summary = styled(motion.div)`
	background-color: #1f7a8c;
	padding: 2rem;
	border-radius: 1rem;
	margin-bottom: 2rem;
`;
const SummaryItem = styled.div`
	display: flex;
	color: #ffffff;
	justify-content: space-between;
	align-items: center;
	font-size: 1.5rem;
	margin-bottom: 1rem;
`;
const SummaryItemName = styled.p``;
const SummaryItemPrice = styled.p``;

function Page() {
	const { data, userEmail, userId } = useContext(UserContext);
	const router = useRouter();
	const [pricing, setPricing] = useState({
		shirts: 150,
		jeans: 200,
		hoodies: 300,
		native: 400,
		duvet: 3000,
		bedspread: 1500,
		pillowcases: 350,
		towels: 350,
		underwear: 150,
	});
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
		pickupDelivery: "pickup",
		clothes: {
			shirts: 0,
			jeans: 0,
			native: 0,
			hoodies: 0,
			bedspread: 0,
			duvet: 0,
			towels: 0,
			underwear: 0,
		},
		customEntry: "",
	});
	const [transportation, setTransportation] = useState(300);
	const totalPrice = Object.keys(pricing).reduce((total, item) => {
		const quantity = formData.clothes[item] || 0;
		return total + pricing[item] * quantity;
	}, 0);
	const [total, setTotal] = useState();
	const [FormError, setFormError] = useState({});

	useEffect(() => {
		if (data && data.length > 0) {
			setFormData((formData) => ({
				...formData,
				fullName: `${data[0]?.lastName} ${data[0]?.firstName}`,
				phoneNumber: data[0]?.phoneNumber || "",
				email: userEmail,
				address: data[0]?.address || "",
				contactMethod: "email",
				plan: "basic",
				pickupDelivery: "pickup",
			}));
		}
	}, [data, userEmail]);

	useEffect(
		function () {
			if (formData.plan === "basic") {
				setPricing({
					shirts: 150,
					jeans: 200,
					hoodies: 300,
					native: 400,
					duvet: 3000,
					bedspread: 1500,
					pillowcases: 350,
					towels: 350,
					underwear: 150,
				});
			}

			if (formData.plan === "standard") {
				setPricing({
					shirts: 400,
					jeans: 500,
					hoodies: 500,
					native: 800,
					duvet: 3000,
					bedspread: 1500,
					pillowcases: 500,
					towels: 500,
					underwear: 200,
				});
			}

			if (formData.plan === "express") {
				setPricing({
					shirts: 650,
					jeans: 750,
					hoodies: 750,
					native: 1100,
					duvet: 4000,
					bedspread: 2500,
					pillowcases: 700,
					towels: 700,
					underwear: 700,
				});
			}
		},

		[formData.plan]
	);

	useEffect(
		function () {
			if (
				formData.pickupDelivery === "pickup" ||
				formData.pickupDelivery === "delivery"
			) {
				setTotal(totalPrice + transportation);
			} else {
				setTransportation(() => 500);
				setTotal(totalPrice + transportation);
			}
		},
		[formData.pickupDelivery, totalPrice, transportation]
	);

	function handleChange(e) {
		const { name, type, value } = e.target;

		if (type === "number") {
			setFormData((formData) => ({
				...formData,
				clothes: {
					...formData.clothes,
					[name]: parseInt(value, 10) || 0,
				},
			}));
		} else {
			setFormData({
				...formData,
				[name]: value,
			});
		}
	}

	// async function handleSubmit(e) {
	// 	e.preventDefault();

	// 	const { data, error } = await supabase
	// 		.from("newOrder")
	// 		.insert([
	// 			{
	// 				userId: userId,
	// 				fullName: formData.fullName,
	// 				phoneNumber: formData.phoneNumber,
	// 				email: formData.email,
	// 				address: formData.address,
	// 				contactMethod: formData.contactMethod,
	// 				plan: formData.plan,
	// 				pickupDelivery: formData.pickupDelivery,
	// 				clothes: {
	// 					shirts: formData.clothes.shirts,
	// 					jeans: formData.clothes.jeans,
	// 					hoodies: formData.clothes.hoodies,
	// 					beddings: formData.clothes.beddings,
	// 					duvet: formData.clothes.duvet,
	// 					towels: formData.clothes.towels,
	// 				},
	// 				customEntry: formData.customEntry,
	// 			},
	// 		])
	// 		.select();

	// 	if (error) {
	// 		console.log(error);
	// 	}
	// 	toastMessage("order placed successfully");
	// 	console.log("new order placed successfully");
	// 	setTimeout(() => {
	// 		router.replace("/dashboard");
	// 	}, 2000);
	// }

	async function handlePayment(e) {
		e.preventDefault();

		if (formData.address === "") {
			setFormError({ ...FormError, addressError: "please add an address" });
			return;
		} else {
			setFormError({ ...FormError, addressError: "" });
		}

		if (totalPrice === 0) {
			setFormError({ ...FormError, itemError: "please select an item" });
			return;
		} else {
			setFormError({ ...FormError, itemError: "" });
		}

		const paystack = new PaystackPop();
		paystack.newTransaction({
			key: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY,
			email: userEmail,
			amount: total * 100,
			currency: "NGN",
			reference: `laundry_${Date.now()}`,
			metadata: {
				userId,
				fullName: formData.fullName,
				phoneNumber: formData.phoneNumber,
				email: formData.email,
				address: formData.address,
				contactMethod: formData.contactMethod,
				plan: formData.plan,
				pickupDelivery: formData.pickupDelivery,
				clothes: formData.clothes,
				customEntry: formData.customEntry,
			},
			onSuccess: async (response) => {
				const verifyResponse = await fetch("/api/verify-payment", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({ reference: response.reference }),
				});

				const verifyData = await verifyResponse.json();
				if (verifyData.success) {
					toastMessage("Payment Verified Successfully!");
					router.push("/dashboard");
				} else {
					toastMessage("Payment Verification Failed!");
				}
			},
			onCancel: () => {
				toastMessage("Transaction was canceled");
			},
		});
	}

	return (
		<NewOrder>
			<ToastContainer
				position="top-center"
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
						value={`${data && data[0]?.lastName ? data[0].lastName : ""} ${
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
						value={data?.[0].address}
						onChange={handleChange}
					></Input>
					{Object.keys(FormError).length > 0 && (
						<p
							style={{
								color: "red",
								fontSize: "1.5rem",
								display: "block",
							}}
						>
							{FormError.addressError}
						</p>
					)}
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
						<Option value="basic">Basic</Option>
						<Option value="standard">Standard</Option>
						<Option value="express">Express</Option>
					</Selection>
					<Label htmlFor="contact">Pickup and delivery: </Label>
					<Selection
						id="pickupDelivery"
						name="pickupDelivery"
						value={formData.pickupDelivery}
						onChange={handleChange}
					>
						<Option value="pickup">pickup(300)</Option>
						<Option value="delivery">delivery(300)</Option>
						<Option value="both">Both(500)</Option>
					</Selection>
					<Heading>Clothes:</Heading>
					{Object.entries(formData.clothes).map(([item, quantity]) => (
						<ClotheItem key={item}>
							<Label htmlFor={item}>
								{item.charAt(0).toUpperCase() + item.slice(1)}
							</Label>
							<NumberPicker
								name={item}
								type="number"
								min={0}
								max={100}
								step={1}
								value={quantity}
								onChange={handleChange}
							></NumberPicker>
						</ClotheItem>
					))}

					<Label htmlFor="customEntry">custom Entry: </Label>
					<Input
						name="customEntry"
						placeholder="Enter custom item"
						type="text"
						value={formData.customEntry}
						onChange={handleChange}
					></Input>
					{Object.keys(FormError).length > 0 && (
						<p
							style={{
								color: "red",
								fontSize: "1.5rem",

								display: "block",
							}}
						>
							{FormError.itemError}
						</p>
					)}
				</Container2>
			</Form>

			<AnimatePresence>
				{Object.values(formData.clothes).some((quantity) => quantity > 0) && (
					<Summary
						initial={{ opacity: 0, y: 100 }}
						animate={{
							opacity: 1,
							y: 0,
							transition: { duration: 0.5, ease: [0.75, 0, 0.24, 1] },
						}}
						exit={{ opacity: 0, y: 100 }}
					>
						{Object.keys(pricing).map((item) => {
							const quantity = formData.clothes[item];
							if (quantity > 0) {
								return (
									<SummaryItem key={item}>
										<SummaryItemName>
											{item.charAt(0).toUpperCase() + item.slice(1)}
										</SummaryItemName>
										<SummaryItemPrice>
											{pricing[item] * quantity}
										</SummaryItemPrice>
									</SummaryItem>
								);
							}
							return null;
						})}
						<SummaryItem>
							<SummaryItemName>Total(transport included)</SummaryItemName>
							<SummaryItemPrice>{total ? total : ""}</SummaryItemPrice>
						</SummaryItem>
					</Summary>
				)}
			</AnimatePresence>

			<Button onclick={handlePayment}>Proceed To Pay</Button>
		</NewOrder>
	);
}

export default Page;

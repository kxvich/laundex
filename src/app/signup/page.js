"use client";

import styled from "styled-components";
import Image from "next/image";
import Button from "@/_components/Button";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Loader from "@/_components/Loader";
import supabase from "@/services/supabase";
import InvalidCredentials from "@/_components/InvalidCredentials";
import useMediaQuery from "@/Hooks/useMediaQuery";
const SpinnerContainer = styled.div`
	height: 100vh;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const SignupPage = styled.div`
	background-image: linear-gradient(120deg, #fff 0, #fff 50%, #0077b6 50%);
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 3rem 0;
	@media only screen and (max-width: 30rem) {
		background-image: none;
	}
`;

const Container = styled.div`
	background-image: linear-gradient(120deg, #0077b6 0, #0077b6 50%, #fff 50%);
	width: 80%;
	border-radius: 2rem;
	padding: 4rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	@media only screen and (max-width: 30rem) {
		background-image: none;
		background-color: #0077b6;
	}
`;
const FormContainer = styled.div`
	width: 50%;
	@media only screen and (max-width: 30rem) {
		width: 100%;
	}
`;
const Form = styled.form`
	padding: 3rem 2rem;
	width: 50%;
	@media only screen and (max-width: 30rem) {
		width: 100%;
	}
`;
const SignupText = styled.h2`
	color: #fff;
	font-size: 3rem;
	margin-bottom: 2rem;
`;
const EmailLabel = styled.label`
	display: block;
	font-size: 1.5rem;
	color: #fff;
	margin-bottom: 1rem;
`;
const EmailInput = styled.input`
	display: block;
	border: none;
	width: 100%;
	color: rgba(0, 0, 0, 0.8);
	padding: 0.5rem;
	margin-bottom: 2rem;
	border-bottom: 1px solid #fff;

	&:focus {
		outline: none;
		border-bottom: 1px solid #03045e;
	}
`;
const UsernameLabel = styled.label`
	display: block;
	font-size: 1.5rem;
	color: #fff;
	margin-bottom: 1rem;
`;
const UsernameInput = styled.input`
	display: block;
	border: none;
	width: 100%;
	color: rgba(0, 0, 0, 0.8);
	padding: 0.5rem;
	margin-bottom: 2rem;
	border-bottom: 1px solid #fff;

	&:focus {
		outline: none;
		border-bottom: 1px solid #03045e;
	}
`;
const PasswordLabel = styled.label`
	display: block;
	font-size: 1.5rem;
	color: #fff;
	margin-bottom: 0.5rem;
`;
const PasswordInput = styled.input`
	display: block;
	border: none;
	width: 100%;
	color: rgba(0, 0, 0, 0.8);
	padding: 0.5rem;
	border-bottom: 1px solid #fff;
	margin-bottom: 2rem;

	&:focus {
		outline: none;
		border-bottom: 1px solid #03045e;
	}
`;
const NumberLabel = styled.label`
	display: block;
	font-size: 1.5rem;
	color: #fff;
	margin-bottom: 1rem;
`;
const NumberInput = styled.input`
	display: block;
	border: none;
	width: 100%;
	color: rgba(0, 0, 0, 0.8);
	padding: 0.5rem;
	margin-bottom: 4rem;
	border-bottom: 1px solid #fff;

	&:focus {
		outline: none;
		border-bottom: 1px solid #03045e;
	}
`;
const ImageContainer = styled.div`
	position: relative;
	width: 40%;
	height: 40rem;
	@media only screen and (max-width: 30rem) {
		display: none;
	}
`;

const NewUser = styled.h3`
	padding: 0 2rem;
	font-size: 1.5rem;
	color: #fff;
`;

function Page() {
	const router = useRouter();
	const [isLoading, setIsLoading] = useState(false);
	const isMobile = useMediaQuery("(max-width: 500px)");

	const [formData, setFormData] = useState({
		email: "",
		surname: "",
		firstName: "",
		password: "",
		phoneNumber: "",
	});
	const [error, setError] = useState("");
	const [credentials, setCredentials] = useState(false);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const checkUser = async (email) => {
		const { data, error } = await supabase
			.from("users")
			.select("email")
			.eq("email", email);
		return data && Array.isArray(data) && data.length > 0;
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsLoading(true);

		const userExists = await checkUser(formData.email);
		if (userExists) {
			setError("user already exists, log in instead");
			setIsLoading(false);
			setCredentials(true);
			setFormData({
				email: "",
				surname: "",
				firstName: "",
				password: "",
				phoneNumber: "",
			});
			return;
		}
		const { data, error: signupError } = await supabase.auth.signUp({
			email: formData.email,
			password: formData.password,
		});

		if (signupError) {
			alert(`Signup failed: ${signupError}`);

			return;
		}
		const { user, insertError } = await supabase
			.from("users")
			.insert([
				{
					id: data.user.id,
					surname: formData.surname,
					firstName: formData.firstName,
					phoneNumber: formData.phoneNumber,
					email: formData.email,
				},
			])
			.select();
		if (insertError) {
			console.error("Error inserting user data:", insertError.message);
			alert(`Error inserting user data: ${insertError.message}`);
			return;
		}
		setIsLoading(false);
		router.replace("/login");
		console.log("user registered:", data.user);

		setFormData({
			email: "",
			surname: "",
			firstName: "",
			password: "",
			phoneNumber: "",
		});
	};

	return (
		<>
			{isLoading && (
				<SpinnerContainer>
					<Loader />
				</SpinnerContainer>
			)}

			{!isLoading && (
				<SignupPage>
					<Container>
						<FormContainer>
							{credentials === true ? (
								<InvalidCredentials message={"Email already exists"} />
							) : (
								""
							)}
							<Button
								onclick={() => router.back()}
								$bgColor={"#fff"}
								color={"#03045E"}
							>
								Back
							</Button>
							<Form onSubmit={handleSubmit}>
								<SignupText>Sign up</SignupText>
								<EmailLabel htmlFor="email">Email </EmailLabel>
								<EmailInput
									type="email"
									name="email"
									placeholder="Enter Email"
									value={formData.email}
									onChange={handleChange}
									required
								></EmailInput>
								<UsernameLabel htmlFor="surname">Surname </UsernameLabel>
								<UsernameInput
									type="text"
									name="surname"
									placeholder="Enter Surname"
									value={formData.surname.toLowerCase()}
									onChange={handleChange}
									required
								></UsernameInput>
								<UsernameLabel htmlFor="firstName">First Name </UsernameLabel>
								<UsernameInput
									type="text"
									name="firstName"
									placeholder="Enter First Name"
									value={formData.firstName.toLowerCase()}
									onChange={handleChange}
									required
								></UsernameInput>
								<PasswordLabel htmlFor="password">Password </PasswordLabel>
								<PasswordInput
									type="text"
									name="password"
									placeholder="Enter Password"
									value={formData.password}
									onChange={handleChange}
									required
								></PasswordInput>
								<NumberLabel htmlFor="phoneNumber">Phone Number </NumberLabel>
								<NumberInput
									type="tel"
									name="phoneNumber"
									placeholder="Enter Phone Number"
									value={formData.phoneNumber}
									onChange={handleChange}
									required
									pattern="[0-9]{11}"
									title="please enter a valid 11-digit number"
								></NumberInput>

								{/* <Link onClick={Submit} className="btnLink" href="#">
							
						</Link> */}
								<Button type="submit" $bgColor={"#fff"} color={"#03045E"}>
									Signup
								</Button>
							</Form>
							<NewUser>
								<span>
									Already Have An Account
									<Link className="link margin-left-small" href={"/login"}>
										Login
									</Link>{" "}
								</span>
							</NewUser>
						</FormContainer>
						<ImageContainer>
							<Image
								src={"/images/signupVector.jpg"}
								alt="signupImaage"
								fill
								style={{ objectFit: "cover" }}
								priority
							/>
						</ImageContainer>
					</Container>
				</SignupPage>
			)}
		</>
	);
}

export default Page;

"use client";

import { styled, keyframes } from "styled-components";
// import Image from "next/image";
import Button from "@/app/_components/Button";
// import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Loader from "@/app/_components/Loader";
import supabase from "@/services/supabase";
import InvalidCredentials from "@/app/_components/InvalidCredentials";
import useMediaQuery from "@/Hooks/useMediaQuery";

const SpinnerContainer = styled.div`
	height: 100vh;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;
const MoveUp = keyframes`
0%{
	transform: translateY(1rem);
	opacity: 0;
}
100%{
	transform: translateY(0);
	opacity: 1;
}`;
const StyledSignUp = styled.div`
	padding: 2rem 3rem 5rem;
	@media only screen and (min-width: 26.75rem) and (max-width: 48rem) {
		padding: 5rem 3rem 0;
	}
`;
const TopContainer = styled.div`
	display: flex;
	justify-content: space-between;
	animation: ${MoveUp} 0.5s;
	animation-fill-mode: backwards;
`;
const Logo = styled.h1`
	color: #022b3a;
	font-size: 2.5rem;
	position: relative;
	font-family: "Bebas Neue", sans-serif;
	display: inline-block;
	cursor: pointer;
`;
const Support = styled.p`
	font-size: 1.4rem;
	@media only screen and (max-width: 48rem) {
		display: none;
	}
`;
const ReachOut = styled.span`
	color: #0077b6;
	margin-left: 1rem;
	padding-bottom: 0.1rem;
	transition: all 0.3s;
	cursor: pointer;
	&:hover {
		border-bottom: 1px solid #0077b6;
	}
`;
const Container = styled.div`
	margin-top: 3rem;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;
const Heading = styled.h2`
	color: #022b3a;
	font-size: 3.2rem;
	font-weight: 400;
	margin-bottom: 3.5rem;
	animation: ${MoveUp} 0.5s 0.2s;
	animation-fill-mode: backwards;

	@media only screen and (max-width: 48rem) {
		font-size: 2.8rem;
	}
	@media only screen and (max-width: 20rem) {
		font-size: 2.5rem;
	}
`;
const ProvidersContainer = styled.div`
	display: flex;
	justify-content: space-between;
	width: 43%;
	margin-bottom: 3.5rem;
	animation: ${MoveUp} 0.5s 0.3s;
	animation-fill-mode: backwards;
	@media only screen and (max-width: 48rem) {
		width: 90%;
		flex-direction: column;
	}
`;
const ProviderIcon = styled.span`
	margin-right: 0.7rem;
`;
const Apple = styled.p`
	border: 1px solid #022b3a;
	padding: 1rem 5rem;
	border-radius: 3rem;
	font-size: 1.4rem;
	color: #022b3a;
	transition: all 0.3s;
	cursor: pointer;
	text-align: center;
	&:hover {
		background-color: #022b3a;
		color: #fff;
	}
	@media only screen and (max-width: 48rem) {
		margin-bottom: 2rem;
		&:hover {
			background-color: none;
			color: none;
		}
	}
`;
const Google = styled.p`
	/* border: 1px solid #022b3a; */
	padding: 1rem 5rem;
	border-radius: 3rem;
	font-size: 1.4rem;
	background-color: #0077b6;
	color: #fff;
	transition: all 0.3s;
	text-align: center;

	&:hover {
		background-color: #022b3a;
		color: #fff;
	}

	@media only screen and (max-width: 48rem) {
		&:hover {
			background-color: none;
			color: none;
		}
	}
`;
const Or = styled.h3`
	color: #022b3a;
	font-size: 1.5rem;
	font-weight: 500;
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 42%;
	margin-bottom: 1.5rem;
	animation: ${MoveUp} 0.5s 0.3s;
	animation-fill-mode: backwards;
	@media only screen and (max-width: 48rem) {
		width: 85%;
	}
`;
const Line = styled.div`
	width: 24rem;
	height: 0.1rem;
	background-color: #bbb;
	@media only screen and (max-width: 48rem) {
		width: 22rem;
	}
`;
const Form = styled.form`
	width: 42%;
	animation: ${MoveUp} 0.5s 0.4s;
	animation-fill-mode: backwards;
	@media only screen and (max-width: 48rem) {
		width: 90%;
	}
`;
const Username = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
	margin-bottom: 2rem;
`;
const FirstName = styled.div`
	width: 45%;
`;
const LastName = styled.div`
	width: 45%;
`;
const FirstnameLabel = styled.label`
	display: block;
	font-size: 1.5rem;
	margin-bottom: 0.5rem;
`;
const FirstnameInput = styled.input`
	width: 100%;
	background-color: transparent;
	border: 1px solid #bbb;
	padding: 0.7rem;
	border-radius: 1rem;
	/* font-size: 1.6rem; */
	&:focus {
		outline: none;
	}
`;
const LastnameLabel = styled.label`
	display: block;
	font-size: 1.5rem;
	margin-bottom: 0.5rem;
`;
const LastnameInput = styled.input`
	width: 100%;
	background-color: transparent;
	border: 1px solid #bbb;
	padding: 0.7rem;
	border-radius: 1rem;
	/* font-size: 1.6rem; */

	&:focus {
		outline: none;
	}
`;
const Email = styled.div`
	width: 100%;
	margin-bottom: 2rem;
`;
const EmailLabel = styled.label`
	display: block;
	font-size: 1.5rem;
	margin-bottom: 0.5rem;
`;
const EmailInput = styled.input`
	width: 100%;
	background-color: transparent;
	border: 1px solid #bbb;
	padding: 0.7rem;
	border-radius: 1rem;
	/* font-size: 1.6rem; */

	&:focus {
		outline: none;
	}
`;
const Password = styled.div`
	width: 100%;
	margin-bottom: 2rem;
`;
const PasswordLabel = styled.label`
	display: block;
	font-size: 1.5rem;
	margin-bottom: 0.5rem;
`;
const Input = styled.div`
	width: 100%;
	height: 3.5rem;
	border: 1px solid #bbb;
	border-radius: 1rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-right: 1rem;
	@media only screen and (max-width: 30rem) {
		padding-right: 2rem;
		height: 4.5rem;
	}
`;
const PasswordInput = styled.input`
	width: 97%;
	background-color: transparent;
	border: none;
	padding: 0.7rem;
	flex: 1;
	&:focus {
		outline: none;
	}
`;
const Eye = styled.span`
	cursor: pointer;
`;
const PhoneNumber = styled.div`
	width: 100%;
	margin-bottom: 4rem;
`;
const PhoneNumberLabel = styled.label`
	display: block;
	font-size: 1.5rem;
	margin-bottom: 0.5rem;
`;
const PhoneNumberInput = styled.input`
	width: 100%;
	background-color: transparent;
	border: 1px solid #bbb;
	padding: 0.7rem;
	border-radius: 1rem;
	/* font-size: 1.6rem; */

	&:focus {
		outline: none;
	}
`;
const ButtonContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	animation: ${MoveUp} 0.5s 0.5s;
	animation-fill-mode: backwards;
`;
const ToLogin = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 2rem;
	animation: ${MoveUp} 0.5s 0.6s;
	animation-fill-mode: backwards;
`;
const Text = styled.p`
	font-size: 1.5rem;
`;
const LoginText = styled.span`
	color: #0077b6;
	margin-left: 1rem;
	padding-bottom: 0.1rem;
	transition: all 0.3s;
	cursor: pointer;
	&:hover {
		border-bottom: 1px solid #0077b6;
	}
`;

function Page() {
	const isMobile = useMediaQuery("(max-width: 500px)");
	const router = useRouter();
	const [isLoading, setIsLoading] = useState(false);
	const [signedIn, setSignedIn] = useState(false);
	const [formData, setFormData] = useState({
		email: "",
		lastName: "",
		firstName: "",
		password: "",
		phoneNumber: "",
	});
	const [showPassword, setShowPassword] = useState(false);
	const [error, setError] = useState("");
	const [credentials, setCredentials] = useState(false);
	const [validationError, setValidationError] = useState({});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};
	function handleValidation() {
		let newErrors = {};

		if (!formData?.firstName.trim()) {
			newErrors.firstName = "please enter your first name";
		}

		if (!formData?.lastName.trim()) {
			newErrors.lastName = "please enter your last name";
		}

		if (!formData?.email || !formData.email.trim()) {
			newErrors.email = "Email is required";
		} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
			newErrors.email = "Enter a valid email";
		}

		if (!formData?.password) {
			newErrors.password = "enter a password";
		}

		if (!formData?.phoneNumber) {
			newErrors.phoneNumber = "enter a phone number";
		}

		setValidationError(newErrors);
		return Object.keys(newErrors).length === 0;
	}

	const checkUser = async (email) => {
		const { data, error } = await supabase
			.from("users")
			.select("email")
			.eq("email", email);
		return data && Array.isArray(data) && data.length > 0;
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!handleValidation()) return;

		setIsLoading(true);
		const userExists = await checkUser(formData.email);
		if (userExists) {
			setError("user already exists, log in instead");
			setIsLoading(false);
			setCredentials(true);
			setFormData({
				email: "",
				lastName: "",
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
			console.log(signupError);
			return;
		}
		const { user, insertError } = await supabase
			.from("users")
			.insert([
				{
					id: data.user.id,
					lastName: formData.lastName,
					firstName: formData.firstName,
					phoneNumber: formData.phoneNumber,
					email: formData.email,
				},
			])
			.select();
		if (insertError) {
			console.error("Error inserting user data:", insertError.message);

			return;
		}
		router.replace("/login");
		setIsLoading(false);
		setSignedIn(true);
		setFormData({
			email: "",
			lastName: "",
			firstName: "",
			password: "",
			phoneNumber: "",
		});
	};
	const signInWithGoogle = async () => {
		const { error } = await supabase.auth.signInWithOAuth({
			provider: "google",
		});

		if (error) {
			alert("Error during sign-in:", error.message);
		}
	};

	return (
		<>
			{isLoading ? (
				<SpinnerContainer>
					<Loader />
				</SpinnerContainer>
			) : !signedIn ? (
				<StyledSignUp>
					<TopContainer>
						<Logo onClick={() => router.push("/")}>HypWash</Logo>
						<Support>
							Need support?
							<ReachOut onClick={() => router.push("/contact")}>
								Reach out
							</ReachOut>
						</Support>
					</TopContainer>
					<Container>
						<Heading>Sign up for ease of service</Heading>
						<ProvidersContainer>
							<Apple>
								<ProviderIcon>
									<i className="fa-brands fa-apple"></i> Continue with Apple
								</ProviderIcon>
							</Apple>
							<Google>
								<ProviderIcon>
									<i className="fa-brands fa-google "></i>
								</ProviderIcon>
								Continue with Google
							</Google>
						</ProvidersContainer>
						<Or>
							<>
								<Line></Line>
								Or
								<Line></Line>
							</>
						</Or>
						<Form onSubmit={handleSubmit}>
							<Username>
								<FirstName>
									<FirstnameLabel htmlFor="firstName">
										First name
									</FirstnameLabel>
									<FirstnameInput
										name="firstName"
										value={formData.firstName}
										type="text"
										// required
										onChange={handleChange}
									></FirstnameInput>
									{validationError.firstName && (
										<p style={{ color: "red", marginTop: ".5rem" }}>
											{validationError.firstName}
										</p>
									)}
								</FirstName>
								<LastName>
									<LastnameLabel htmlFor="lastName">Last name</LastnameLabel>
									<LastnameInput
										name="lastName"
										value={formData.lastName}
										type="text"
										// required
										onChange={handleChange}
									></LastnameInput>
									{validationError.lastName && (
										<p style={{ color: "red", marginTop: ".5rem" }}>
											{validationError.lastName}
										</p>
									)}
								</LastName>
							</Username>
							<Email>
								{credentials === true ? (
									<InvalidCredentials message={"Email already exists"} />
								) : (
									""
								)}
								<EmailLabel htmlFor="email">Email</EmailLabel>
								<EmailInput
									name="email"
									type="email"
									// required
									onChange={handleChange}
								></EmailInput>
								{validationError.email && (
									<p style={{ color: "red", marginTop: ".5rem" }}>
										{validationError.email}
									</p>
								)}
							</Email>
							<Password>
								<PasswordLabel htmlFor="password">Password</PasswordLabel>
								<Input>
									<PasswordInput
										name="password"
										value={formData.password}
										type={showPassword === true ? "text" : "password"}
										// required
										onChange={handleChange}
									></PasswordInput>
									<Eye onClick={() => setShowPassword(!showPassword)}>
										{showPassword ? (
											<i className="fa-solid fa-eye-slash"></i>
										) : (
											<i className="fa-solid fa-eye"></i>
										)}
									</Eye>
								</Input>
								{validationError.password && (
									<p style={{ color: "red", marginTop: ".5rem" }}>
										{validationError.password}
									</p>
								)}
							</Password>
							<PhoneNumber>
								<PhoneNumberLabel htmlFor="phoneNumber">
									Phone Number
								</PhoneNumberLabel>
								<PhoneNumberInput
									name="phoneNumber"
									value={formData.phoneNumber}
									type="tel"
									// required
									onChange={handleChange}
									pattern="[0-9]{11}"
									title="please enter a valid 11-digit number"
								></PhoneNumberInput>
								{validationError.phoneNumber && (
									<p style={{ color: "red", marginTop: ".5rem" }}>
										{validationError.phoneNumber}
									</p>
								)}
							</PhoneNumber>
							<ButtonContainer>
								{isMobile ? (
									<Button type="submit" width={"34rem"} $fontSize={"1.4rem"}>
										Create my account
									</Button>
								) : (
									<Button type="submit">Create my account</Button>
								)}
							</ButtonContainer>
							<ToLogin>
								<Text>
									Already have an account?
									<LoginText onClick={() => router.push("/login")}>
										Login
									</LoginText>
								</Text>
							</ToLogin>
						</Form>
					</Container>
				</StyledSignUp>
			) : (
				""
			)}
		</>
	);
}

export default Page;

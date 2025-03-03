"use client";

import { styled, keyframes } from "styled-components";
import Button from "@/app/_components/Button";
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
	margin-bottom: 4rem;
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
	/* flex: 1; */
	&:focus {
		outline: none;
	}
`;
const Eye = styled.span`
	cursor: pointer;
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
	const [loggedIn, setloggedIn] = useState(false);
	const [showPassword, setShowPassword] = useState(false);
	const [credentials, setCredentials] = useState(false);
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});

	function handleChange(e) {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	}
	async function handleSubmit(e) {
		e.preventDefault();
		setIsLoading(true);
		try {
			const { data, error } = await supabase.auth.signInWithPassword({
				email: formData.email,
				password: formData.password,
			});

			if (error) {
				setCredentials(true);
				setFormData({
					email: "",
					password: "",
				});
				setIsLoading(false);
				return;
			}
			router.replace("/dashboard");
			setIsLoading(false);
			setloggedIn(true);
		} catch (err) {
			console.log(err);
		}
	}
	return (
		<>
			{isLoading ? (
				<SpinnerContainer>
					<Loader />
				</SpinnerContainer>
			) : !loggedIn ? (
				<StyledSignUp>
					<TopContainer>
						<Logo onClick={() => router.push("/")}>HypWash</Logo>
						<Support>
							Need support?
							<ReachOut>Reach out</ReachOut>
						</Support>
					</TopContainer>
					<Container>
						<Heading>Log in to your account</Heading>
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
							{credentials === true ? (
								<InvalidCredentials
									message={"Invalid credentials, login again"}
								/>
							) : (
								""
							)}
							<Email>
								<EmailLabel htmlFor="email">Email</EmailLabel>
								<EmailInput
									name="email"
									type="email"
									required
									onChange={handleChange}
								></EmailInput>
							</Email>
							<Password>
								<PasswordLabel htmlFor="password">Password</PasswordLabel>
								<Input>
									<PasswordInput
										name="password"
										value={formData.password}
										type={showPassword === true ? "text" : "password"}
										required
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
							</Password>

							<ButtonContainer>
								{isMobile ? (
									<Button type="submit" width={"34rem"} $fontSize={"1.4rem"}>
										Continue
									</Button>
								) : (
									<Button type="submit">Continue</Button>
								)}
							</ButtonContainer>
							<ToLogin>
								<Text>
									Don't have a HypWash account?
									<LoginText onClick={() => router.push("/signup")}>
										Sign up
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

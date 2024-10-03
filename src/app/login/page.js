"use client";

import {styled,keyframes} from "styled-components";
import Image from "next/image";
import Button from "@/_components/Button";
import Link from "next/link";
import supabase from "@/services/supabase";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Loader from "@/_components/Loader";
import InvalidCredentials from "@/_components/InvalidCredentials";

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
}
`;

const LoginPage = styled.div`
	/* background-color: #caf0f8; */
	background-image: linear-gradient(120deg, #fff 0, #fff 50%, #0077b6 50%);
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	
	@media only screen and (max-width: 30rem) {
		background-image: none;
	}
`;

const Container = styled.div`
	background-image: linear-gradient(120deg, #0077b6 0, #0077b6 50%, #fff 50%);
	height: 80vh;
	width: 80%;
	border-radius: 2rem;
	padding: 4rem;
	display: flex;
	justify-content: space-between;
	animation: ${MoveUp} 0.5s;
	animation-fill-mode: backwards;
	/* overflow: hidden; */
	@media only screen and (max-width: 30rem) {
		background-image: none;
		background-color: #0077b6;
		padding: 4rem 2rem;
		height: 60vh;
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
	animation: ${MoveUp} 0.5s .4s;
	animation-fill-mode: backwards;
	@media only screen and (max-width: 30rem) {
		width: 100%;
	}
`;
const LoginText = styled.h2`
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
	margin-bottom: 4rem;

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
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});
	const router = useRouter();
	const [isLoading, setIsLoading] = useState(false);
	const [credentials, setCredentials] = useState(false);

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
				return;
			}

			router.replace("/dashboard");
		} catch (err) {
			console.log(err);
		} finally {
			setIsLoading(false);
		}
	}
	return (
		<>
			{isLoading && (
				<SpinnerContainer>
					<Loader />
				</SpinnerContainer>
			)}

			{!isLoading && (
				<LoginPage>
					<Container>
						<FormContainer>
							{credentials === true ? (
								<InvalidCredentials
									message={"Invalid credentials, login again"}
								/>
							) : (
								""
							)}

							{/* <Button $bgColor={"#fff"} color={"#03045E"}>
						Back
					</Button> */}
							<Form onSubmit={handleSubmit}>
								<LoginText>Login</LoginText>
								<EmailLabel htmlFor="email">Email </EmailLabel>
								<EmailInput
									placeholder="Enter Email"
									type="text"
									required
									name="email"
									value={formData.email}
									onChange={handleChange}
								></EmailInput>
								<PasswordLabel htmlFor="password">Password </PasswordLabel>
								<PasswordInput
									type="password"
									name="password"
									placeholder="Enter Password"
									value={formData.password}
									onChange={handleChange}
								></PasswordInput>

								<Button type="submit" $bgColor={"#fff"} color={"#03045E"}>
									Login
								</Button>

								{/* <Link className="btnLink" href="#">
							
						</Link> */}
							</Form>
							<NewUser>
								New here?{" "}
								<Link className="link margin-left-small" href={"/signup"}>
									Create An Account
								</Link>
							</NewUser>
						</FormContainer>
						<ImageContainer>
							<Image
								src={"/images/LoginVector.jpg"}
								alt="signupImaage"
								fill
								sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
								style={{ objectFit: "cover" }}
								priority
							/>
						</ImageContainer>
					</Container>
				</LoginPage>
			)}
		</>
	);
}

export default Page;

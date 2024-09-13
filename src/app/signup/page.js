"use client";

import styled from "styled-components";
import Image from "next/image";
import Button from "@/_components/Button";
import Link from "next/link";

const SignupPage = styled.div`
	background-image: linear-gradient(120deg, #fff 0, #fff 50%, #0077b6 50%);
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 3rem 0;
`;

const Container = styled.div`
	background-image: linear-gradient(120deg, #0077b6 0, #0077b6 50%, #fff 50%);
	width: 80%;
	border-radius: 2rem;
	padding: 4rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
const FormContainer = styled.div`
	width: 50%;
`;
const Form = styled.form`
	padding: 3rem 2rem;
	width: 50%;
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
`;

const NewUser = styled.h3`
	padding: 0 2rem;
	font-size: 1.5rem;
	color: #fff;
`;

function Page() {
	return (
		<SignupPage>
			<Container>
				<FormContainer>
					<Button bgColor={"#fff"} color={"#03045E"}>
						Back
					</Button>
					<Form>
						<SignupText>Sign up</SignupText>
						<EmailLabel>Email </EmailLabel>
						<EmailInput type="email" placeholder="Enter Email"></EmailInput>
						<UsernameLabel>Surname </UsernameLabel>
						<UsernameInput placeholder="Enter Surname"></UsernameInput>
						<UsernameLabel>First Name </UsernameLabel>
						<UsernameInput placeholder="Enter First Name"></UsernameInput>
						<PasswordLabel>Password </PasswordLabel>
						<PasswordInput
							type="password"
							placeholder="Enter Password"
						></PasswordInput>
						<NumberLabel>Phone Number </NumberLabel>
						<NumberInput
							type="tel"
							placeholder="Enter Phone Number"
						></NumberInput>

						<Link className="btnLink" href="#">
							<Button bgColor={"#fff"} color={"#03045E"}>
								Signup
							</Button>
						</Link>
					</Form>
					<NewUser>
						Already Have An Account?{" "}
						<Link className="link margin-left-small" href={"/login"}>
							Login
						</Link>
					</NewUser>
				</FormContainer>
				<ImageContainer>
					<Image
						src={"/images/signupVector.jpg"}
						alt="signupImaage"
						layout="fill"
						objectFit="cover"
					/>
				</ImageContainer>
			</Container>
		</SignupPage>
	);
}

export default Page;

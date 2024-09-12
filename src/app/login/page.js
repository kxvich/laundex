"use client";

import styled from "styled-components";
import Image from "next/image";
import Button from "@/_components/Button";
import Link from "next/link";

const LoginPage = styled.div`
	/* background-color: #caf0f8; */
	background-image: linear-gradient(120deg, #fff 0, #fff 50%, #0077b6 50%);
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Container = styled.div`
	background-image: linear-gradient(120deg, #0077b6 0, #0077b6 50%, #fff 50%);
	height: 85vh;
	width: 80%;
	border-radius: 2rem;
	padding: 4rem;
	display: flex;
	justify-content: space-between;
	/* overflow: hidden; */
`;
const FormContainer = styled.div`
	width: 50%;
`;
const Form = styled.form`
	padding: 3rem 2rem;
	width: 50%;
`;
const LoginText = styled.h2`
	color: #fff;
	font-size: 3rem;
	margin-bottom: 2rem;
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
`;

const NewUser = styled.h3`
	padding: 0 2rem;
	font-size: 1.5rem;
	color: #fff;
`;

function page() {
	return (
		<LoginPage>
			<Container>
				<FormContainer>
					<Button bgColor={"#fff"} color={"#03045E"}>
						Back
					</Button>
					<Form>
						<LoginText>Login</LoginText>
						<UsernameLabel>Username </UsernameLabel>
						<UsernameInput placeholder="Enter Username"></UsernameInput>
						<PasswordLabel>Password </PasswordLabel>
						<PasswordInput
							type="password"
							placeholder="Enter Password"
						></PasswordInput>

						<Link className="btnLink" href="#">
							<Button bgColor={"#fff"} color={"#03045E"}>
								Login
							</Button>
						</Link>
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
						layout="fill"
						objectFit="cover"
					/>
				</ImageContainer>
			</Container>
		</LoginPage>
	);
}

export default page;

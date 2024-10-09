"use client";

import {styled,keyframes} from "styled-components";
import { Satisfy } from "@next/font/google";
import Button from "@/_components/Button";
import useMediaQuery from "@/Hooks/useMediaQuery";

const MoveUp = keyframes`
0%{
	transform: translateY(1rem);
	opacity: 0;
}
100%{
	transform: translateY(0);
	opacity: 1;
}`;
const satisfy = Satisfy({
	weight: ["400"],
	subsets: ["latin"],
});
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
	font-family: ${satisfy.style.fontFamily};
	display: inline-block;
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
		width: 90%;
	}
`;
const Line = styled.div`
	width: 24rem;
	height: 0.1rem;
	background-color: #bbb;
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
    font-size: 1.6rem;
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
    font-size: 1.6rem;

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
    font-size: 1.6rem;

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
const PasswordInput = styled.input`
	width: 100%;
	background-color: transparent;
	border: 1px solid #bbb;
	padding: 0.7rem;
	border-radius: 1rem;
    font-size: 1.6rem;

	&:focus {
		outline: none;
	}
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
    font-size: 1.6rem;

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
	return (
		<StyledSignUp>
			<TopContainer>
				<Logo>Laundex</Logo>
				<Support>
					Need support?
					<ReachOut>Reach out</ReachOut>
				</Support>
			</TopContainer>
			<Container>
				<Heading>Sign up for ease of service</Heading>
				<ProvidersContainer>
					<Apple>
						<ProviderIcon>
							<i class="fa-brands fa-apple"></i> Continue with Apple
						</ProviderIcon>
					</Apple>
					<Google>
						<ProviderIcon>
							<i class="fa-brands fa-google "></i>
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
				<Form>
					<Username>
						<FirstName>
							<FirstnameLabel>First name</FirstnameLabel>
							<FirstnameInput></FirstnameInput>
						</FirstName>
						<LastName>
							<LastnameLabel>Last name</LastnameLabel>
							<LastnameInput></LastnameInput>
						</LastName>
					</Username>
					<Email>
						<EmailLabel>Email</EmailLabel>
						<EmailInput></EmailInput>
					</Email>
					<Password>
						<PasswordLabel>Password</PasswordLabel>
						<PasswordInput></PasswordInput>
					</Password>
					<PhoneNumber>
						<PhoneNumberLabel>PhoneNumber</PhoneNumberLabel>
						<PhoneNumberInput></PhoneNumberInput>
					</PhoneNumber>
					<ButtonContainer>
						{isMobile ? (
							<Button width={"34rem"} $fontSize={"1.4rem"}>
								Create my account
							</Button>
						) : (
							<Button>Create my account</Button>
						)}
					</ButtonContainer>
					<ToLogin>
						<Text>
							Already have an account?
							<LoginText>Login</LoginText>
						</Text>
					</ToLogin>
				</Form>
			</Container>
		</StyledSignUp>
	);
}

export default Page;



// "use client";

// import {styled,keyframes} from "styled-components";
// import Image from "next/image";
// import Button from "@/_components/Button";
// import Link from "next/link";
// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import Loader from "@/_components/Loader";
// import supabase from "@/services/supabase";
// import InvalidCredentials from "@/_components/InvalidCredentials";
// import useMediaQuery from "@/Hooks/useMediaQuery";
// const SpinnerContainer = styled.div`
// 	height: 100vh;
// 	width: 100%;
// 	display: flex;
// 	justify-content: center;
// 	align-items: center;
// `;
// const MoveUp = keyframes`
// 0%{
// 	transform: translateY(1rem);
// 	opacity: 0;
// }
// 100%{
// 	transform: translateY(0);
// 	opacity: 1;
// }
// `;

// const SignupPage = styled.div`
// 	background-image: linear-gradient(120deg, #fff 0, #fff 50%, #0077b6 50%);
// 	display: flex;
// 	justify-content: center;
// 	align-items: center;
// 	padding: 3rem 0;
// 	@media only screen and (max-width: 30rem) {
// 		background-image: none;
// 	}
// `;

// const Container = styled.div`
// 	background-image: linear-gradient(120deg, #0077b6 0, #0077b6 50%, #fff 50%);
// 	width: 80%;
// 	border-radius: 2rem;
// 	padding: 4rem;
// 	display: flex;
// 	justify-content: space-between;
// 	align-items: center;
// 	animation: ${MoveUp} 0.5s;
// 	animation-fill-mode: backwards;
// 	@media only screen and (max-width: 30rem) {
// 		background-image: none;
// 		background-color: #0077b6;
// 		padding: 2rem;
// 	}
// `;
// const FormContainer = styled.div`
// 	width: 50%;
// 	animation: ${MoveUp} 0.5s 0.4s;
// 	animation-fill-mode: backwards;
// 	@media only screen and (max-width: 30rem) {
// 		width: 100%;
// 	}
// `;
// const Form = styled.form`
// 	padding: 3rem 2rem;
// 	width: 50%;
	
// 	@media only screen and (max-width: 30rem) {
// 		width: 100%;
// 	}
// `;
// const SignupText = styled.h2`
// 	color: #fff;
// 	font-size: 3rem;
// 	margin-bottom: 2rem;
// `;
// const EmailLabel = styled.label`
// 	display: block;
// 	font-size: 1.5rem;
// 	color: #fff;
// 	margin-bottom: 1rem;
// `;
// const EmailInput = styled.input`
// 	display: block;
// 	border: none;
// 	width: 100%;
// 	color: rgba(0, 0, 0, 0.8);
// 	padding: 0.5rem;
// 	margin-bottom: 2rem;
// 	border-bottom: 1px solid #fff;

// 	&:focus {
// 		outline: none;
// 		border-bottom: 1px solid #03045e;
// 	}
// `;
// const UsernameLabel = styled.label`
// 	display: block;
// 	font-size: 1.5rem;
// 	color: #fff;
// 	margin-bottom: 1rem;
// `;
// const UsernameInput = styled.input`
// 	display: block;
// 	border: none;
// 	width: 100%;
// 	color: rgba(0, 0, 0, 0.8);
// 	padding: 0.5rem;
// 	margin-bottom: 2rem;
// 	border-bottom: 1px solid #fff;

// 	&:focus {
// 		outline: none;
// 		border-bottom: 1px solid #03045e;
// 	}
// `;
// const PasswordLabel = styled.label`
// 	display: block;
// 	font-size: 1.5rem;
// 	color: #fff;
// 	margin-bottom: 0.5rem;
// `;
// const PasswordInput = styled.input`
// 	display: block;
// 	border: none;
// 	width: 100%;
// 	color: rgba(0, 0, 0, 0.8);
// 	padding: 0.5rem;
// 	border-bottom: 1px solid #fff;
// 	margin-bottom: 2rem;

// 	&:focus {
// 		outline: none;
// 		border-bottom: 1px solid #03045e;
// 	}
// `;
// const NumberLabel = styled.label`
// 	display: block;
// 	font-size: 1.5rem;
// 	color: #fff;
// 	margin-bottom: 1rem;
// `;
// const NumberInput = styled.input`
// 	display: block;
// 	border: none;
// 	width: 100%;
// 	color: rgba(0, 0, 0, 0.8);
// 	padding: 0.5rem;
// 	margin-bottom: 4rem;
// 	border-bottom: 1px solid #fff;

// 	&:focus {
// 		outline: none;
// 		border-bottom: 1px solid #03045e;
// 	}
// `;
// const ImageContainer = styled.div`
// 	position: relative;
// 	width: 40%;
// 	height: 40rem;
// 	@media only screen and (max-width: 30rem) {
// 		display: none;
// 	}
// `;

// const NewUser = styled.h3`
// 	padding: 0 2rem;
// 	font-size: 1.5rem;
// 	color: #fff;
// `;

// function Page() {
// 	const router = useRouter();
// 	const [isLoading, setIsLoading] = useState(false);
// 	const isMobile = useMediaQuery("(max-width: 500px)");

// 	const [formData, setFormData] = useState({
// 		email: "",
// 		surname: "",
// 		firstName: "",
// 		password: "",
// 		phoneNumber: "",
// 	});
// 	const [error, setError] = useState("");
// 	const [credentials, setCredentials] = useState(false);

// 	const handleChange = (e) => {
// 		const { name, value } = e.target;
// 		setFormData({ ...formData, [name]: value });
// 	};

// 	const checkUser = async (email) => {
// 		const { data, error } = await supabase
// 			.from("users")
// 			.select("email")
// 			.eq("email", email);
// 		return data && Array.isArray(data) && data.length > 0;
// 	};

// 	const handleSubmit = async (e) => {
// 		e.preventDefault();
// 		setIsLoading(true);

// 		const userExists = await checkUser(formData.email);
// 		if (userExists) {
// 			setError("user already exists, log in instead");
// 			setIsLoading(false);
// 			setCredentials(true);
// 			setFormData({
// 				email: "",
// 				surname: "",
// 				firstName: "",
// 				password: "",
// 				phoneNumber: "",
// 			});
// 			return;
// 		}
// 		const { data, error: signupError } = await supabase.auth.signUp({
// 			email: formData.email,
// 			password: formData.password,
// 		});

// 		if (signupError) {
// 			alert(`Signup failed: ${signupError}`);
// 			console.log(signupError);

// 			return;
// 		}
// 		const { user, insertError } = await supabase
// 			.from("users")
// 			.insert([
// 				{
// 					id: data.user.id,
// 					surname: formData.surname,
// 					firstName: formData.firstName,
// 					phoneNumber: formData.phoneNumber,
// 					email: formData.email,
// 				},
// 			])
// 			.select();
// 		if (insertError) {
// 			console.error("Error inserting user data:", insertError.message);
// 			alert(`Error inserting user data: ${insertError.message}`);
// 			return;
// 		}
// 		setIsLoading(false);
// 		router.replace("/login");
// 		console.log("user registered:", data.user);

// 		setFormData({
// 			email: "",
// 			surname: "",
// 			firstName: "",
// 			password: "",
// 			phoneNumber: "",
// 		});
// 	};

// 	return (
// 		<>
// 			{isLoading && (
// 				<SpinnerContainer>
// 					<Loader />
// 				</SpinnerContainer>
// 			)}

// 			{!isLoading && (
// 				<SignupPage>
// 					<Container>
// 						<FormContainer>
// 							{credentials === true ? (
// 								<InvalidCredentials message={"Email already exists"} />
// 							) : (
// 								""
// 							)}
// 							<Button
// 								onclick={() => router.back()}
// 								$bgColor={"#fff"}
// 								color={"#03045E"}
// 							>
// 								Back
// 							</Button>
// 							<Form onSubmit={handleSubmit}>
// 								<SignupText>Sign up</SignupText>
// 								<EmailLabel htmlFor="email">Email </EmailLabel>
// 								<EmailInput
// 									type="email"
// 									name="email"
// 									placeholder="Enter Email"
// 									value={formData.email}
// 									onChange={handleChange}
// 									required
// 								></EmailInput>
// 								<UsernameLabel htmlFor="surname">Surname </UsernameLabel>
// 								<UsernameInput
// 									type="text"
// 									name="surname"
// 									placeholder="Enter Surname"
// 									value={formData.surname.toLowerCase()}
// 									onChange={handleChange}
// 									required
// 								></UsernameInput>
// 								<UsernameLabel htmlFor="firstName">First Name </UsernameLabel>
// 								<UsernameInput
// 									type="text"
// 									name="firstName"
// 									placeholder="Enter First Name"
// 									value={formData.firstName.toLowerCase()}
// 									onChange={handleChange}
// 									required
// 								></UsernameInput>
// 								<PasswordLabel htmlFor="password">Password </PasswordLabel>
// 								<PasswordInput
// 									type="text"
// 									name="password"
// 									placeholder="Enter Password"
// 									value={formData.password}
// 									onChange={handleChange}
// 									required
// 								></PasswordInput>
// 								<NumberLabel htmlFor="phoneNumber">Phone Number </NumberLabel>
// 								<NumberInput
// 									type="tel"
// 									name="phoneNumber"
// 									placeholder="Enter Phone Number"
// 									value={formData.phoneNumber}
// 									onChange={handleChange}
// 									required
// 									pattern="[0-9]{11}"
// 									title="please enter a valid 11-digit number"
// 								></NumberInput>

// 								{/* <Link onClick={Submit} className="btnLink" href="#">
							
// 						</Link> */}
// 								<Button type="submit" $bgColor={"#fff"} color={"#03045E"}>
// 									Signup
// 								</Button>
// 							</Form>
// 							<NewUser>
// 								<span style={{ width: "100%" }}>
// 									Already Have An Account
// 									<Link className="link margin-left-small" href={"/login"}>
// 										Login
// 									</Link>{" "}
// 								</span>
// 							</NewUser>
// 						</FormContainer>
// 						<ImageContainer>
// 							<Image
// 								src={"/images/signupVector.jpg"}
// 								alt="signupImaage"
// 								fill
// 								style={{ objectFit: "cover" }}
// 								priority
// 							/>
// 						</ImageContainer>
// 					</Container>
// 				</SignupPage>
// 			)}
// 		</>
// 	);
// }

// export default Page;



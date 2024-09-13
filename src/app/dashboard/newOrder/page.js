"use client";

import Button from "@/_components/Button";
import styled from "styled-components";

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
	return (
		<NewOrder>
			<Button>Back</Button>
			<Form>
				<Container1>
					<Heading>Customer Information:</Heading>
					<Label htmlFor="name">Full Name: </Label>
					<Input name="name" placeholder="Enter Full Name"></Input>
					<Label htmlFor="number">Phone Number: </Label>
					<Input name="number" placeholder="Enter Phone Number"></Input>
					<Label htmlFor="email">Email: </Label>
					<Input name="email" placeholder="Enter Email"></Input>
					<Label htmlFor="address">Address: </Label>
					<Input name="address" placeholder="Enter Address"></Input>
					<Label htmlFor="contact">Preferred Contact Method: </Label>
					<Selection id="contact" name="contact">
						<Option value="wash-fold">Email</Option>
						<Option value="dry-cleaning">Phone</Option>
						<Option value="ironing">Text</Option>
					</Selection>
				</Container1>
				<Container2>
					<Heading>Choose plan:</Heading>
					<Label htmlFor="plan">choose preferred plan: </Label>
					<Selection id="plan" name="plan">
						<Option value="classic">Classic</Option>
						<Option value="classic+">Classic+</Option>
						<Option value="express">Express</Option>
					</Selection>
					<Label htmlFor="contact">Pickup and delivery: </Label>
					<Selection id="contact" name="contact">
						<Option value="pickup">pickup</Option>
						<Option value="delivery">delivery</Option>
						<Option value="Both">Both</Option>
					</Selection>
					<Heading>Clothes:</Heading>
					<ClotheItem>
						<Label htmlFor="shirts">shirts</Label>
						<Checkbox
							className="margin-left-small"
							type="checkbox"
							name="shirts"
						></Checkbox>
					</ClotheItem>
					<ClotheItem>
						<Label htmlFor="pants">pants</Label>
						<Checkbox
							className="margin-left-small"
							type="checkbox"
							name="pants"
						></Checkbox>
					</ClotheItem>
					<ClotheItem>
						<Label htmlFor="dresses">dresses</Label>
						<Checkbox
							className="margin-left-small"
							type="checkbox"
							name="dresses"
						></Checkbox>
					</ClotheItem>
					<ClotheItem>
						<Label htmlFor="beddings">beddings</Label>
						<Checkbox
							className="margin-left-small"
							type="checkbox"
							name="beddings"
						></Checkbox>
					</ClotheItem>
					<ClotheItem>
						<Label htmlFor="towels">towels</Label>
						<Checkbox
							className="margin-left-small"
							type="checkbox"
							name="towels"
						></Checkbox>
					</ClotheItem>

					<Label htmlFor="customEntry">custom Entry: </Label>
					<Input name="customEntry" placeholder="Enter custom item"></Input>
				</Container2>
			</Form>
			<Button>Proceed To Pay</Button>
		</NewOrder>
	);
}

export default Page;

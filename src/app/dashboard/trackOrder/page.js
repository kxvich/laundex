"use client";

import { styled, keyframes } from "styled-components";
import Button from "@/_components/Button";
import { useRouter } from "next/navigation";
import supabase from "@/services/supabase";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { UserContext } from "../layout";
import Loader from "@/_components/Loader";
const SpinnerContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	/* align-items: center; */
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
const StyledTrackOrder = styled.div`
	animation: ${MoveUp} 0.5s;
	animation-fill-mode: backwards;
`;
const Container = styled.div`
	background-color: #1f7a8c;
	width: 100%;
	margin-top: 3rem;
	padding: 2rem 5rem;
	border-radius: 1rem;
	@media only screen and (max-width: 48rem) {
		width: 100%;
		padding: 3rem 1.5rem;
	}
`;
const SearchBarContainer = styled.div`
	display: flex;
	justify-content: space-between;
	margin: 0 auto;
	width: 50%;
	animation: ${MoveUp} 0.5s 0.2s;
	animation-fill-mode: backwards;
	@media only screen and (max-width: 48rem) {
        display: flex;
		justify-content:center;
		width: 100%;
	}
`;
const SearchBar = styled.input`
	flex: 1;
	border: 1px solid #fff;
	border-radius: 2rem;
	background-color: transparent;
	margin-right: 1rem;
	padding: 0 1rem;
	color: #fff;

	@media only screen and (max-width: 48rem) {
		font-size: 1.2rem;
	}

	&::placeholder {
		color: #ddd;
	}

	&:focus {
		outline: none;
	}
`;
const Heading = styled.h2`
	/* color: #022b3a; */
	color: #fff;
	font-size: 2rem;
	margin-bottom: 2rem;
	animation: ${MoveUp} 0.5s 0.2s;
	animation-fill-mode: backwards;
	margin-top: 4rem;
	@media only screen and (max-width: 30rem) {
		font-size: 1.6rem;
	}
`;
const Header = styled.div`
	/* padding: 0 2rem 0; */
	display: flex;
	color: #fff;
	display: flex;
	justify-content: space-between;
	margin-bottom: 2rem;
	animation: ${MoveUp} 0.5s 0.2s;
	animation-fill-mode: backwards;
	@media only screen and (max-width: 30rem) {
		font-size: 1.6rem;
	}
`;
const OrderIdHeader = styled.h3`
	font-size: 1.4rem;
	@media only screen and (max-width: 30rem) {
		font-size: 1.6rem;
	}
`;
const Status = styled.h3`
	font-size: 1.4rem;
	@media only screen and (max-width: 30rem) {
		font-size: 1.6rem;
	}
`;
const RecentOrder = styled.div`
	display: flex;
	color: #fff;
	display: flex;
	justify-content: space-between;
	padding-bottom: 0.5rem;
	animation: ${MoveUp} 0.5s 0.2s;
	animation-fill-mode: backwards;
	transition: all 0.3s;
	padding: 0.5rem 1rem;
	&:not(:last-child) {
		margin-bottom: 2rem;
		border-bottom: 1px solid #ddd;
	}
	&:hover {
		background-color: #e5f0f0;
		color: #022b3a;
	}
	@media only screen and (max-width: 48rem) {
		padding: 0;

		&:hover {
			background-color: none;
			color: none;
		}
	}
`;
const RecentOrderId = styled.h3`
	font-size: 1.4rem;
	@media only screen and (max-width: 30rem) {
		font-size: 1.2rem;
	}
`;
const RecentOrderStatus = styled.h3`
	font-size: 1.4rem;
	@media only screen and (max-width: 30rem) {
		font-size: 1.2rem;
	}
`;
const Message = styled.p`
	text-align: center;
	color: #fff;
	font-size: 2rem;
	animation: ${MoveUp} 0.5s 0.2s;
	animation-fill-mode: backwards;
`;

async function fetchPendingOrders(id) {
	if (!id) return;
	const { data, error } = await supabase
		.from("newOrder")
		.select("*")
		.eq("userId", id);
	if (error) {
		console.log(error);
	}
	return data || null;
}
function Page() {
	const { userId } = useContext(UserContext);
	const { data, isLoading, isError, error } = useQuery({
		queryKey: ["usersOrders", userId],
		queryFn: () => fetchPendingOrders(userId),
		enabled: !!userId,
	});
	const router = useRouter();

	return (
		<StyledTrackOrder>
			<Button onclick={() => router.back()}>Back</Button>

			<Container>
				<SearchBarContainer>
					<SearchBar placeholder="Enter your order id to track your laundry"></SearchBar>
					<Button>search</Button>
				</SearchBarContainer>
				<Heading>Recent orders:</Heading>
				{isLoading ? (
					<SpinnerContainer>
						<Loader />
					</SpinnerContainer>
				) : data && data.length > 0 ? (
					data
						.filter((value) => value.status === "pending")
						.map((value) => (
							<>
								<Header>
									<OrderIdHeader>Order ID</OrderIdHeader>
									<Status>Status</Status>
								</Header>
								<RecentOrder key={value.orderId}>
									<RecentOrderId>{value.orderId}</RecentOrderId>
									<RecentOrderStatus>{value.status}</RecentOrderStatus>
								</RecentOrder>
							</>
						))
				) : (
					<Message>You have no pending orders</Message>
				)}
			</Container>
		</StyledTrackOrder>
	);
}

export default Page;
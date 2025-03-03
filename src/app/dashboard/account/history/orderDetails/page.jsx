"use client";

import { styled, keyframes } from "styled-components";
import Button from "@/app/_components/Button";
import { useRouter, useSearchParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { UserContext } from "@/app/dashboard/layout";
import { fetchOrderHistory } from "../page";

const MoveUp = keyframes`
0%{
	transform: translateY(1rem);
	opacity: 0;
}
100%{
	transform: translateY(0);
	opacity: 1;
}`;
const StyledOrderDetails = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 5rem;
	animation: ${MoveUp} 0.5s;
	animation-fill-mode: backwards;
`;
const Container = styled.div`
	width: 70%;
	padding: 2rem 4rem;
	background-color: #1f7a8c;
	border-radius: 2rem;
	overflow: hidden;
	color: #fff;

	@media only screen and (max-width: 48rem) {
		width: 100%;
		margin-right: 2rem;
	}
`;

const Heading = styled.h1`
	margin-bottom: 2rem;
	animation: ${MoveUp} 0.5s 0.25s backwards;
`;
const ItemsContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 1.5rem;
	animation: ${MoveUp} 0.5s 0.25s backwards;
`;

const ItemName = styled.h2``;
const ItemValue = styled.h2``;

function OrderDetails() {
	const router = useRouter();
	const { userId } = useContext(UserContext);
	const { data: Details } = useQuery({
		queryKey: ["usersOrders", userId],
		queryFn: () => fetchOrderHistory(userId),
		enabled: !!userId, // Optional, to ensure the query runs only when `userId` is available
	});
	const searchParams = useSearchParams();
	const id = searchParams.get("id");

	id && console.log(`router query: ${id}`);

	return (
		<>
			<Button onclick={() => router.back()}>Back</Button>
			<StyledOrderDetails>
				<Container>
					<Heading>Order details:</Heading>
					{Details &&
						Object.entries(Details.at(id).clothes).map(([item, quantity]) => (
							<ItemsContainer key={item}>
								<ItemName>{item}</ItemName>
								<ItemValue>{quantity}</ItemValue>
							</ItemsContainer>
						))}
				</Container>
			</StyledOrderDetails>
		</>
	);
}

export default OrderDetails;

"use client";

import Button from "@/app/_components/Button";
import { createContext, useContext, useState } from "react";
import { styled, keyframes } from "styled-components";
import { UserContext } from "../../layout";
import { useRouter } from "next/navigation";
import supabase from "@/services/supabase";
import useMediaQuery from "@/Hooks/useMediaQuery";
import { useQuery } from "@tanstack/react-query";
import Loader from "@/app/_components/Loader";
const SpinnerContainer = styled.div`
	height: 100vh;
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
const History = styled.div`
	animation: ${MoveUp} 0.5s;
	animation-fill-mode: backwards;
`;
const ButtonContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
const Menu = styled.div`
	font-size: 2rem;
	cursor: pointer;
	@media only screen and (min-width: 56.25rem) {
		display: none;
	}
`;
const Container = styled.div`
	padding-top: 4rem;
	position: relative;
	/* height: 100vh; */
	overflow: hidden;
	display: flex;
	flex-direction: column;
`;
const Heading = styled.h2`
	color: #022b3a;
	font-size: 2rem;
	margin-bottom: 2.2rem;
	@media only screen and (max-width: 30rem) {
		width: 100%;
	}
`;
const TableWrapper = styled.div`
	border-radius: 1rem;
	overflow: hidden;
	border: 1px solid #022b3a;
	margin-bottom: 3rem;
	animation: ${MoveUp} 0.5s 0.25s backwards;
`;
const Table = styled.table`
	width: 100%;
	font-size: 1.25rem;
	animation: ${MoveUp} 0.5s 0.25s backwards;
	border-collapse: collapse;
`;
const TableHeader = styled.thead``;
const TableRow = styled.tr``;
const TableHead = styled.th`
	text-align: left;
	border-bottom: 2px solid #ddd;
	font-weight: bold;
	color: #1f7a8c;
	padding: 2rem 2rem 1rem;
	/* font-size: .2rem; */

	/* @media only screen and (max-width: 48rem ) {
		display: block;
	} */
`;
const TableBody = styled.tbody`
	background-color: #1f7a8c;
`;
const TableBodyRow = styled.tr`
	-webkit-tap-highlight-color: transparent;
	color: #fff;

	&:hover {
		background-color: #b7d5d4;
		color: #022b3a;
		transition: all 0.3s;
		cursor: pointer;
	}

	@media only screen and (max-width: 48rem) {
		&:hover,
		:active {
			background-color: none;
			color: none;
			transition: all 0.3s;
			cursor: pointer;
		}
	}
`;
const TableItem = styled.td`
	text-align: left;
	padding: 2rem 2rem 1rem;
	font-weight: 500;
	border-bottom: 1px solid #ddd;

	@media only screen and (max-width: 48rem) {
		font-size: 0.8rem;
	}
`;
export async function fetchOrderHistory(Id) {
	if (!Id) return;
	const { data, error } = await supabase
		.from("newOrder")
		.select("*")
		.eq("userId", Id);
	if (error) {
		console.log(error);
	}

	return data || null;
}

function Page() {
	const { userId, setIsOpen } = useContext(UserContext);
	const router = useRouter();
	const isMobile = useMediaQuery("(max-width: 500px)");

	function handleSelection(id) {
		router.push(`/dashboard/account/history/orderDetails?id=${id}`);
	}

	const {
		data: orderHistoryData,
		isLoading,
		isError,
		error,
	} = useQuery({
		queryKey: ["usersOrders", userId],
		queryFn: () => fetchOrderHistory(userId),
		enabled: !!userId,
	});
	console.log(orderHistoryData);

	return (
		<History>
			<ButtonContainer>
				<Menu>
					<i onClick={() => setIsOpen(true)} className="fa-solid fa-bars"></i>
				</Menu>
				<Button onclick={() => router.back()}>Back</Button>
			</ButtonContainer>

			<Container>
				<Heading>Order history:</Heading>
				{isLoading ? (
					<SpinnerContainer>
						<Loader />
					</SpinnerContainer>
				) : (
					<TableWrapper>
						{isMobile ? (
							<Table>
								<TableHeader>
									<TableRow>
										<TableHead>Date</TableHead>
										<TableHead>Order id</TableHead>
										<TableHead>Status</TableHead>
										<TableHead>Total</TableHead>
									</TableRow>
								</TableHeader>
								<TableBody>
									{orderHistoryData
										? orderHistoryData.map((value, index) => (
												<TableBodyRow
													key={value.orderId}
													onClick={() => handleSelection(index)}
												>
													<TableItem>{value.created_at.slice(0, 10)}</TableItem>
													<TableItem>{value.transactionId}</TableItem>
													<TableItem>{value.paymentStatus}</TableItem>
													<TableItem>{value.amount}</TableItem>
												</TableBodyRow>
										  ))
										: ""}
								</TableBody>
							</Table>
						) : (
							<Table>
								<TableHeader>
									<TableRow>
										<TableHead>Order id</TableHead>
										<TableHead>Date</TableHead>
										<TableHead>Plan</TableHead>
										<TableHead>Status</TableHead>
										<TableHead>Total</TableHead>
									</TableRow>
								</TableHeader>
								<TableBody>
									{orderHistoryData
										? orderHistoryData.map((value, index) => (
												<TableBodyRow
													key={value.orderId}
													onClick={() => handleSelection(index)}
												>
													<TableItem>{value.transactionId}</TableItem>
													<TableItem>{value.created_at.slice(0, 10)}</TableItem>
													<TableItem>{value.plan}</TableItem>
													<TableItem>{value.paymentStatus}</TableItem>
													<TableItem>{value.amount}</TableItem>
												</TableBodyRow>
										  ))
										: ""}
								</TableBody>
							</Table>
						)}
					</TableWrapper>
				)}
			</Container>
			{/* <Button>Save</Button> */}
		</History>
	);
}

export default Page;

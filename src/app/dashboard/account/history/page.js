"use client";

import Button from "@/_components/Button";
import { createContext, useContext, useState } from "react";
import { styled, keyframes } from "styled-components";
import { UserContext } from "../../layout";
import { useRouter } from "next/navigation";
import supabase from "@/services/supabase";
import useMediaQuery from "@/Hooks/useMediaQuery";

import {
	useQuery,
	QueryClient,
	QueryClientProvider,
} from "@tanstack/react-query";
import Loader from "@/_components/Loader";

const queryClient = new QueryClient();
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
// const Wrapper = styled.div`
// 	width: 100%;
// 	border: 1px solid #022b3a;
// 	border-radius: 1rem;
// 	align-self: center;
// 	animation: ${MoveUp} 0.5s;
// 	animation-fill-mode: backwards;
// `;
// const Header = styled.ul`
// 	list-style: none;
// 	display: flex;
// 	justify-content: space-between;
// 	align-items: center;
// 	font-size: 1.3rem;
// 	font-weight: bold;
// 	border-bottom: 2px solid #ddd;
// 	color: #1f7a8c;
// 	/* margin-bottom: 1.5rem; */
// 	padding: 1.5rem 3rem;
// `;
// const HeaderItems = styled.li`
// 	flex: 1;
// 	animation: ${MoveUp} 0.5s 0.25s backwards;
// `;

// const Row = styled.ul`
// 	display: flex;
// 	justify-content: space-between;
// 	align-items: center;
// 	list-style: none;
// 	width: 100%;
// 	background-color: #1f7a8c;
// 	padding: 1.5rem 3rem;
// 	animation: ${MoveUp} 0.5s 0.25s backwards;
// 	&:not(:last-child) {
// 		border-bottom: 1px solid #ddd;
// 	}
// 	&:hover {
// 		background-color: #022b3a;
// 		/* color: #022b3a; */
// 		transition: all 0.3s;
// 		cursor: pointer;
// 	}
// `;
// const RowItem = styled.li`
// 	color: #fff;
// 	flex: 1;
// 	font-size: 1.2rem;
// 	&:not(:last-child) {
// 		/* margin-bottom: 1.5rem; */
// 	}
// `;

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
	color: #fff;

	&:hover {
		background-color: #b7d5d4;
		color: #022b3a;
		transition: all 0.3s;
		cursor: pointer;
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
	const { data, userEmail, userId } = useContext(UserContext);
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
		<QueryClientProvider client={queryClient}>
			<History>
				<Button onclick={() => router.back()}>Back</Button>

				<Container>
					<Heading>Order history:</Heading>
					{isLoading ? (
						<SpinnerContainer>
							<Loader />
						</SpinnerContainer>
					) : (
						// <Wrapper>
						// 	{isMobile ? (
						// 		<>
						// 		<Header>
						// 			<HeaderItems>Date</HeaderItems>
						// 			<HeaderItems>Order id</HeaderItems>
						// 			<HeaderItems>Status</HeaderItems>
						// 		</Header>
						// 		{orderHistoryData
						// 				? orderHistoryData.map((value, index) => (
						// 						<>
						// 							<Row
						// 								key={index}
						// 								onClick={() => handleSelection(index)}
						// 							>
						// 								<RowItem>{value.created_at.slice(0, 10)}</RowItem>
						// 								<RowItem>{value.orderId}</RowItem>
						// 								<RowItem>{value.plan}</RowItem>

						// 							</Row>
						// 						</>
						// 				  ))
						// 				: ""}</>
						// 	) : (
						// 		<>
						// 			<Header>
						// 				<HeaderItems>Order id</HeaderItems>
						// 				<HeaderItems>Date</HeaderItems>
						// 				<HeaderItems>Plan</HeaderItems>
						// 				<HeaderItems>Status</HeaderItems>
						// 				<HeaderItems>Total</HeaderItems>
						// 			</Header>
						// 			{orderHistoryData
						// 				? orderHistoryData.map((value, index) => (
						// 						<>
						// 							<Row
						// 								key={index}
						// 								onClick={() => handleSelection(index)}
						// 							>
						// 								<RowItem>{value.orderId}</RowItem>
						// 								<RowItem>{value.created_at.slice(0, 10)}</RowItem>
						// 								<RowItem>{value.plan}</RowItem>
						// 								<RowItem>{value.status}</RowItem>
						// 								<RowItem>{"price"}</RowItem>
						// 							</Row>
						// 						</>
						// 				  ))
						// 				: ""}
						// 		</>
						// 	)}
						// </Wrapper>

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
														<TableItem>
															{value.created_at.slice(0, 10)}
														</TableItem>
														<TableItem>{value.orderId}</TableItem>
														<TableItem>{value.status}</TableItem>
														<TableItem>$40</TableItem>
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
														<TableItem>{value.orderId}</TableItem>
														<TableItem>
															{value.created_at.slice(0, 10)}
														</TableItem>
														<TableItem>{value.plan}</TableItem>
														<TableItem>{value.status}</TableItem>
														<TableItem>$40</TableItem>
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
		</QueryClientProvider>
	);
}

export default Page;

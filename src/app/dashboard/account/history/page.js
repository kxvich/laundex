"use client";

import Button from "@/_components/Button";
import { createContext, useContext, useState } from "react";
import { styled, keyframes } from "styled-components";
import { UserContext } from "../../layout";
import { useRouter } from "next/navigation";
import supabase from "@/services/supabase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
const Container = styled.form`
	padding-top: 4rem;
	position: relative;

	/* display: flex;
	justify-content: space-between; */

	/* @media only screen and (max-width: 30rem) {
		flex-direction: column;
		width: 100%;
	} */
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
						<TableWrapper>
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
													<TableItem>{value.created_at.slice(0, 10)}</TableItem>
													<TableItem>{value.plan}</TableItem>
													<TableItem>{value.status}</TableItem>
													<TableItem>$40</TableItem>
												</TableBodyRow>
										  ))
										: ""}
								</TableBody>
							</Table>
						</TableWrapper>
					)}
				</Container>
				{/* <Button>Save</Button> */}
			</History>
		</QueryClientProvider>
	);
}

export default Page;

import { NextResponse } from "next/server";
import supabase, { supabaseAdmin } from "@/services/supabase";

export async function POST(req) {
	try {
		const { reference } = await req.json();
		const PAYSTACK_SECRET_KEY = process.env.PAYSTACK_SECRET_KEY;

		const response = await fetch(
			`https://api.paystack.co/transaction/verify/${reference}`,
			{
				method: "GET",
				headers: {
					Authorization: `Bearer ${PAYSTACK_SECRET_KEY}`,
					"Content-Type": "application/json",
				},
			}
		);

		const paystackData = await response.json();

		if (!paystackData.status || paystackData.data.status !== "success") {
			return NextResponse.json(
				{ success: false, message: "Payment verification failed" },
				{ status: 400 }
			);
		}

		const paymentData = paystackData.data;
		const {
			userId,
			fullName,
			phoneNumber,
			email,
			address,
			contactMethod,
			plan,
			pickupDelivery,
			clothes,
			customEntry,
		} = paymentData.metadata;

		const { data, error } = await supabaseAdmin.from("newOrder").insert([
			{
				userId,
				fullName,
				phoneNumber,
				email,
				address,
				contactMethod,
				plan,
				pickupDelivery,
				clothes,
				customEntry,
				paymentStatus: "paid",
				transactionId: paymentData.reference,
				amount: paymentData.amount / 100,
			},
		]);

		if (error) {
			console.error("Error inserting into Supabase:", error);
			return NextResponse.json(
				{ success: false, message: "Database error", error },
				{ status: 500 }
			);
		}

		return NextResponse.json({
			success: true,
			message: "Payment Verified & Order Created Successfully",
			data,
		});
	} catch (error) {
		console.error("Server Error:", error);
		return NextResponse.json(
			{ success: false, message: "Server Error", error: error.message },
			{ status: 500 }
		);
	}
}

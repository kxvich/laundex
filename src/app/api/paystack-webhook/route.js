import { NextResponse } from "next/server";

export async function POST(req) {
	try {
		const payload = await req.json();
		console.log("Webhook received:", payload);

		if (payload.event === "charge.success") {
			return NextResponse.json(
				{ success: true, message: "Received" },
				{ status: 200 }
			);
		}

		return NextResponse.json(
			{ success: false, message: "Unhandled event" },
			{ status: 400 }
		);
	} catch (error) {
		console.error("Webhook error:", error);
		return NextResponse.json(
			{ success: false, message: "Error processing webhook" },
			{ status: 500 }
		);
	}
}

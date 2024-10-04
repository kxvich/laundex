"use client";

import "./globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import Script from "next/script";

export default function RootLayout({ children }) {
	const [queryClient] = useState(() => new QueryClient());
	return (
		<html lang="en">
			<head>
				<title>Laundex</title>
				<meta
					name="description"
					content="Your one-stop spot for all things laundry"
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</head>
			<body style={{ backgroundColor: "#e5f0f0" }}>
				<QueryClientProvider client={queryClient}>
					{children}
				</QueryClientProvider>
			</body>
		</html>
	);
}

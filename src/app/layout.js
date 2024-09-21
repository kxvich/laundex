"use client";

import "./globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

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
			<body>
				<QueryClientProvider client={queryClient}>
					{children}
				</QueryClientProvider>
			</body>
		</html>
	);
}

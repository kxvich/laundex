"use client";

import "./globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import Script from "next/script";
import { UserProvider } from "@/contexts/UserContexts";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function RootLayout({ children }) {
	const [queryClient] = useState(() => new QueryClient());
	return (
		<html lang="en">
			<head>
				<link rel="icon" href="/images/HYPWASHLOGO.png" type="image/png" />
				<Script
					src="https://kit.fontawesome.com/b778254e02.js"
					crossorigin="anonymous"
					strategy="beforeInteractive"
				></Script>
				<title>HypWash</title>
				<meta
					name="description"
					content="Your one-stop spot for all things laundry"
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</head>
			<body style={{ backgroundColor: "#e5f0f0" }}>
				<QueryClientProvider client={queryClient}>
					<UserProvider>
						{children}
						<ToastContainer
							position="top-center"
							autoClose={3000}
							hideProgressBar={false}
							closeOnClick
							pauseOnHover
							draggable
							theme="colored"
						/>
					</UserProvider>
				</QueryClientProvider>
			</body>
		</html>
	);
}

"use client";

// import Header from "@/_components/Header";
// import Main from "@/_components/Main";
// import Footer from "@/_components/Footer";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import LogoLoader from "@/_components/LogoLoader";
import { AnimatePresence, delay, motion } from "framer-motion";

const DynamicHeader = dynamic(() => import("@/_components/Header"), {
	ssr: false,
});
const DynamicMain = dynamic(() => import("@/_components/Main"), {
	ssr: false,
});
const DynamicFooter = dynamic(() => import("@/_components/Footer"), {
	ssr: false,
});

function Page() {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(function loader() {
		// setIsLoading(true);
		const timer = setTimeout(() => {
			setIsLoading(false);
		}, 3000);
		return () => clearTimeout(timer);
	}, []);

	return (
		<>
			<AnimatePresence>
				{isLoading && (
					<motion.div
						key="loader"
						initial={{ opacity: 1, y: 0 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: "-100vh" }}
						transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
					>
						<LogoLoader />
					</motion.div>
				)}
			</AnimatePresence>
			{!isLoading && (
				<>
					<DynamicHeader />
					<DynamicMain />
					<DynamicFooter />
				</>
			)}
		</>
		// <>
		// 	{isLoading ? (
		// 		<LogoLoader isLoading={isLoading} key="loader" />
		// 	) : (
		// 		<>
		// 			<DynamicHeader key="header" />
		// 			<DynamicMain key="main" />
		// 			<DynamicFooter key="footer" />
		// 		</>
		// 	)}
		// 	{/* <Header />
		// 	<Main />
		// 	<Footer /> */}
		// </>
	);
}

export default Page;

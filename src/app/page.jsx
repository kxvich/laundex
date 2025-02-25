"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import LogoLoader from "@/_components/LogoLoader";
import { AnimatePresence, motion } from "framer-motion";
import { useUser } from "@/contexts/UserContexts";
import useMediaQuery from "@/Hooks/useMediaQuery";

const DynamicHeader = dynamic(() => import("@/_components/Header"), {
	ssr: false,
});
const DynamicMain = dynamic(() => import("@/_components/Main"), {
	ssr: false,
});
const DynamicFooter = dynamic(() => import("@/_components/Footer"), {
	ssr: false,
});
const DynamicSideBar = dynamic(() => import("@/_components/SideBar"), {
	ssr: false,
});

function Page() {
	const [isLoading, setIsLoading] = useState(true);
	const { isOpen } = useUser();
	const isMobile = useMediaQuery("(max-width: 765px)");

	useEffect(() => {
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
						transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
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
			<AnimatePresence>
				{isMobile && isOpen && <DynamicSideBar />}
			</AnimatePresence>
		</>
	);
}

export default Page;

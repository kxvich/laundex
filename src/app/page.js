"use client";

import Script from "next/script";
import Header from "@/_components/Header";
import Main from "@/_components/Main";
import Footer from "@/_components/Footer";


function page() {
	return (
		<>
			<Script
				src="https://kit.fontawesome.com/b778254e02.js"
				crossorigin="anonymous"
			></Script>

			<Header />
			<Main />
			<Footer />
		</>
	);
}

export default page;

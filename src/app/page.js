"use client";
import Head from "next/head";
import Script from "next/script";
import Header from "@/_components/Header";
import Main from "@/_components/Main";

function page() {
	return (
		<>
			<Script
				src="https://kit.fontawesome.com/b778254e02.js"
				crossorigin="anonymous"
			></Script>

			<Header/>
			<Main/>
		</>
	);
}

export default page;

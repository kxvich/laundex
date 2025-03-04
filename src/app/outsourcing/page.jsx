"use client";
import dynamic from "next/dynamic";

const Outsourcing = dynamic(() => import("@/app/_components/Outsourcing"), {
	ssr: false,
});

function Page() {
	return <Outsourcing />;
}

export default Page;

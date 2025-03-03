"use client";
import dynamic from "next/dynamic";

const DynamicContact = dynamic(() => import("@/app/_components/Contact"), {
	ssr: false,
});

function Page() {
	return <DynamicContact />;
}

export default Page;

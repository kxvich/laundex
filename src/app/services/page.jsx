import dynamic from "next/dynamic";

const DynamicServices = dynamic(() => import("@/_components/Services"), {
	ssr: false,
});

function Page() {
	return <DynamicServices />;
}

export default Page;

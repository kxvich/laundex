import dynamic from "next/dynamic";

const DynamicSignUp = dynamic(() => import("@/_components/signUp"), {
	ssr: false,
});
function Page() {
	return <DynamicSignUp />;
}

export default Page;

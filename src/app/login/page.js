import dynamic from "next/dynamic";
const DynamicLogin = dynamic(() => import("@/_components/Login"), {
	ssr: false,
});
function Page() {
	return <DynamicLogin />;
}

export default Page;

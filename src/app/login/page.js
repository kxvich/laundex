import dynamic from "next/dynamic";
const DynamicLogin = dynamic(() => import("@/app/_components/Login"), {
	ssr: false,
});
function Page() {
	return <DynamicLogin />;
}

export default Page;

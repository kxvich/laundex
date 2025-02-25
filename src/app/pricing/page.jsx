import dynamic from "next/dynamic";

const DynamicPricing = dynamic(() => import("@/_components/Pricing"), {
	ssr: false,
});
function Page() {
	return <DynamicPricing />;
}

export default Page;

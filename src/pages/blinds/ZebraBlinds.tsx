import BlindsDetailPage from "@/components/BlindsDetailPage";
import { blindsCategories } from "@/data/blinds";

const data = blindsCategories.find((c) => c.slug === "zebra")!;

const ZebraBlinds = () => <BlindsDetailPage data={data} />;

export default ZebraBlinds;

import BlindsDetailPage from "@/components/BlindsDetailPage";
import { blindsCategories } from "@/data/blinds";

const data = blindsCategories.find((c) => c.slug === "roller")!;

const RollerBlinds = () => <BlindsDetailPage data={data} />;

export default RollerBlinds;

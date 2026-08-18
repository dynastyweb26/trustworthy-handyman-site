import BlindsDetailPage from "@/components/BlindsDetailPage";
import { blindsCategories } from "@/data/blinds";

const data = blindsCategories.find((c) => c.slug === "blackout")!;

const BlackoutBlinds = () => <BlindsDetailPage data={data} />;

export default BlackoutBlinds;

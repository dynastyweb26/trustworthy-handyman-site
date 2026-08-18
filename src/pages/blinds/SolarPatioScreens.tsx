import BlindsDetailPage from "@/components/BlindsDetailPage";
import { blindsCategories } from "@/data/blinds";

const data = blindsCategories.find((c) => c.slug === "solar-patio-screens")!;

const SolarPatioScreens = () => <BlindsDetailPage data={data} />;

export default SolarPatioScreens;

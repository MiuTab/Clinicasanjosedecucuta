import { ServicePageLayout } from "../../components/ServicePageLayout";
import { servicesData } from "../../data/servicesData";

export function UCIPage() {
  const data = servicesData.find((s) => s.id === "uci")!;
  return <ServicePageLayout data={data} />;
}

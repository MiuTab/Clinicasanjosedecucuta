import { ServicePageLayout } from "../../components/ServicePageLayout";
import { servicesData } from "../../data/servicesData";

export function UCINeonatalPage() {
  const data = servicesData.find((s) => s.id === "uci-neonatal")!;
  return <ServicePageLayout data={data} />;
}

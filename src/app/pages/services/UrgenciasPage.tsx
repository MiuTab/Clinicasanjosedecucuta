import { ServicePageLayout } from "../../components/ServicePageLayout";
import { servicesData } from "../../data/servicesData";

export function UrgenciasPage() {
  const data = servicesData.find((s) => s.id === "urgencias")!;
  return <ServicePageLayout data={data} />;
}

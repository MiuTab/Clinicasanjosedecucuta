import { ServicePageLayout } from "../../components/ServicePageLayout";
import { servicesData } from "../../data/servicesData";

export function OrtopediaPage() {
  const data = servicesData.find((s) => s.id === "ortopedia")!;
  return <ServicePageLayout data={data} />;
}

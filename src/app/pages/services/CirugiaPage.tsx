import { ServicePageLayout } from "../../components/ServicePageLayout";
import { servicesData } from "../../data/servicesData";

export function CirugiaPage() {
  const data = servicesData.find((s) => s.id === "cirugia")!;
  return <ServicePageLayout data={data} />;
}

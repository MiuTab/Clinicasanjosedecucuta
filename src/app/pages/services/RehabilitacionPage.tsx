import { ServicePageLayout } from "../../components/ServicePageLayout";
import { servicesData } from "../../data/servicesData";

export function RehabilitacionPage() {
  const data = servicesData.find((s) => s.id === "rehabilitacion")!;
  return <ServicePageLayout data={data} />;
}

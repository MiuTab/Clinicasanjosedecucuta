import { ServicePageLayout } from "../../components/ServicePageLayout";
import { servicesData } from "../../data/servicesData";

export function HospitalizacionPage() {
  const data = servicesData.find((s) => s.id === "hospitalizacion")!;
  return <ServicePageLayout data={data} />;
}

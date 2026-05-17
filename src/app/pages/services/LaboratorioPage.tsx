import { ServicePageLayout } from "../../components/ServicePageLayout";
import { servicesData } from "../../data/servicesData";

export function LaboratorioPage() {
  const data = servicesData.find((s) => s.id === "laboratorio")!;
  return <ServicePageLayout data={data} />;
}

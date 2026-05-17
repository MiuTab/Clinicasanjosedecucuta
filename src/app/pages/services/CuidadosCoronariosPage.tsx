import { ServicePageLayout } from "../../components/ServicePageLayout";
import { servicesData } from "../../data/servicesData";

export function CuidadosCoronariosPage() {
  const data = servicesData.find((s) => s.id === "cuidados-coronarios")!;
  return <ServicePageLayout data={data} />;
}

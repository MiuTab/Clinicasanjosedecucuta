import { ServicePageLayout } from "../../components/ServicePageLayout";
import { servicesData } from "../../data/servicesData";

export function ImagenologiaPage() {
  const data = servicesData.find((s) => s.id === "imagenologia")!;
  return <ServicePageLayout data={data} />;
}

import { AboutPageLayout } from "../../components/AboutPageLayout";
import { nosotrosData } from "../../data/nosotrosData";

export function CalidadPage() {
  const data = nosotrosData.find((p) => p.id === "calidad")!;
  return <AboutPageLayout data={data} />;
}

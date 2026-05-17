import { AboutPageLayout } from "../../components/AboutPageLayout";
import { nosotrosData } from "../../data/nosotrosData";

export function ObjetivosPage() {
  const data = nosotrosData.find((p) => p.id === "objetivos")!;
  return <AboutPageLayout data={data} />;
}

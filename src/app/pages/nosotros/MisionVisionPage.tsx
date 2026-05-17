import { AboutPageLayout } from "../../components/AboutPageLayout";
import { nosotrosData } from "../../data/nosotrosData";

export function MisionVisionPage() {
  const data = nosotrosData.find((p) => p.id === "mision-vision")!;
  return <AboutPageLayout data={data} />;
}

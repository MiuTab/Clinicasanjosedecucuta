import { AboutPageLayout } from "../../components/AboutPageLayout";
import { nosotrosData } from "../../data/nosotrosData";

export function ValoresPage() {
  const data = nosotrosData.find((p) => p.id === "valores")!;
  return <AboutPageLayout data={data} />;
}

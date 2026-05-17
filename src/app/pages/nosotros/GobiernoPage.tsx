import { AboutPageLayout } from "../../components/AboutPageLayout";
import { nosotrosData } from "../../data/nosotrosData";

export function GobiernoPage() {
  const data = nosotrosData.find((p) => p.id === "gobierno")!;
  return <AboutPageLayout data={data} />;
}

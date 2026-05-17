import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { Home } from "./pages/Home";
import { CirugiaPage } from "./pages/services/CirugiaPage";
import { UrgenciasPage } from "./pages/services/UrgenciasPage";
import { HospitalizacionPage } from "./pages/services/HospitalizacionPage";
import { OrtopediaPage } from "./pages/services/OrtopediaPage";
import { CuidadosCoronariosPage } from "./pages/services/CuidadosCoronariosPage";
import { UCIPage } from "./pages/services/UCIPage";
import { ImagenologiaPage } from "./pages/services/ImagenologiaPage";
import { RehabilitacionPage } from "./pages/services/RehabilitacionPage";
import { UCINeonatalPage } from "./pages/services/UCINeonatalPage";
import { LaboratorioPage } from "./pages/services/LaboratorioPage";
import { MisionVisionPage } from "./pages/nosotros/MisionVisionPage";
import { ValoresPage } from "./pages/nosotros/ValoresPage";
import { CalidadPage } from "./pages/nosotros/CalidadPage";
import { GobiernoPage } from "./pages/nosotros/GobiernoPage";
import { ObjetivosPage } from "./pages/nosotros/ObjetivosPage";
import { PqrPage } from "./pages/PqrPage";
import { BlogPage } from "./pages/BlogPage";
import { BlogPostPage } from "./pages/BlogPostPage";
import { ResultadosPage } from "./pages/ResultadosPage";
import { LegalPage } from "./pages/LegalPage";
import { PacientesInternacionalesPage } from "./pages/PacientesInternacionalesPage";
import { CareersPage } from "./pages/CareersPage";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      Component: Root,
      children: [
      { index: true, Component: Home },
      // Servicios
      { path: "servicios/cirugia", Component: CirugiaPage },
      { path: "servicios/urgencias", Component: UrgenciasPage },
      { path: "servicios/hospitalizacion", Component: HospitalizacionPage },
      { path: "servicios/ortopedia", Component: OrtopediaPage },
      { path: "servicios/cuidados-coronarios", Component: CuidadosCoronariosPage },
      { path: "servicios/uci", Component: UCIPage },
      { path: "servicios/imagenologia", Component: ImagenologiaPage },
      { path: "servicios/rehabilitacion", Component: RehabilitacionPage },
      { path: "servicios/uci-neonatal", Component: UCINeonatalPage },
      { path: "servicios/laboratorio", Component: LaboratorioPage },
      // Nosotros
      { path: "nosotros/mision-vision", Component: MisionVisionPage },
      { path: "nosotros/valores", Component: ValoresPage },
      { path: "nosotros/calidad", Component: CalidadPage },
      { path: "nosotros/gobierno", Component: GobiernoPage },
      { path: "nosotros/objetivos", Component: ObjetivosPage },
      { path: "pqr", Component: PqrPage },
      { path: "blog", Component: BlogPage },
      { path: "blog/:slug", Component: BlogPostPage },
      { path: "resultados", Component: ResultadosPage },
      { path: "legal", Component: LegalPage },
      { path: "pacientes-internacionales", Component: PacientesInternacionalesPage },
      { path: "carreras", Component: CareersPage },
    ],
  },
],
  { basename: '/Clinicasanjosedecucuta/' }
);

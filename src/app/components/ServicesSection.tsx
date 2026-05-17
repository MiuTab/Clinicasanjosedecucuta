import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router";
import { FadeIn, FadeInStagger, FadeInItem } from "./FadeIn";

const services = [
  {
    category: "Emergencias",
    title: "Urgencias",
    desc: "Atención inmediata 24 horas los 365 días del año para emergencias médicas de cualquier nivel de complejidad.",
    accent: true,
    slug: "/servicios/urgencias",
  },
  {
    category: "Intervención",
    title: "Cirugía",
    desc: "Salas quirúrgicas de alta tecnología para procedimientos electivos, de urgencias y de alta complejidad.",
    slug: "/servicios/cirugia",
  },
  {
    category: "Perinatal",
    title: "Maternidad",
    desc: "Unidad de obstetricia y neonatología con atención integral para la madre y el recién nacido.",
    slug: null,
  },
  {
    category: "Cuidado Intensivo",
    title: "Unidad de Cuidados Intensivos",
    desc: "UCI adultos, pediátrica y neonatal con monitoreo continuo y equipo especializado.",
    slug: "/servicios/uci",
  },
  {
    category: "Diagnóstico",
    title: "Laboratorio Clínico",
    desc: "Análisis clínicos, hematología, microbiología, patología y pruebas especializadas con resultados precisos.",
    slug: "/servicios/laboratorio",
  },
  {
    category: "Imagen",
    title: "Imágenes Diagnósticas",
    desc: "Tomografía, resonancia magnética, radiología digital, ecografía y gammagrafía de alta resolución.",
    slug: "/servicios/imagenologia",
  },
  {
    category: "Farmacéutico",
    title: "Farmacia Hospitalaria",
    desc: "Servicio farmacéutico integral con dispensación, farmacovigilancia y mezclas intravenosas.",
    slug: null,
  },
  {
    category: "Hematología",
    title: "Banco de Sangre",
    desc: "Captación, procesamiento y transfusión de hemoderivados bajo los más estrictos controles de calidad.",
    slug: "/servicios/laboratorio",
  },
  {
    category: "Hospitalario",
    title: "Hospitalización",
    desc: "Habitaciones individuales y compartidas con atención médica continua y confort para el paciente.",
    slug: "/servicios/hospitalizacion",
  },
  {
    category: "Rehabilitación",
    title: "Medicina Física y Rehabilitación",
    desc: "Programas de fisioterapia, terapia respiratoria y rehabilitación funcional para la recuperación integral.",
    slug: "/servicios/rehabilitacion",
  },
  {
    category: "Preventivo",
    title: "Nutrición y Dietética",
    desc: "Evaluación nutricional y planes alimentarios individualizados para pacientes hospitalizados y ambulatorios.",
    slug: null,
  },
  {
    category: "Apoyo",
    title: "Trabajo Social y Psicología",
    desc: "Acompañamiento psicosocial para pacientes y familias durante el proceso de atención hospitalaria.",
    slug: null,
  },
];

export function ServicesSection() {
  return (
    <section id="servicios" className="py-24 lg:py-32 bg-[#f8f9fb]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <FadeIn className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-10 bg-[rgb(0,133,132)]" />
              <span className="text-[rgb(0,133,132)] text-xs font-semibold uppercase tracking-[0.2em]">
                Portafolio de Servicios
              </span>
            </div>
            <h2 className="text-[#0d1b2a] leading-tight" style={{ fontSize: "clamp(1.9rem, 3.5vw, 2.75rem)", fontWeight: 700 }}>
              Servicios médicos<br />especializados.
            </h2>
          </div>
          <a
            href="#contacto"
            className="flex items-center gap-2 text-[rgb(0,133,132)] font-semibold text-sm hover:gap-3 transition-all duration-200 shrink-0"
          >
            Ver todos los servicios <ArrowUpRight size={16} />
          </a>
        </FadeIn>

        <FadeInStagger className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4" stagger={0.06}>
          {services.map((s) => {
            const cardClass = `group relative p-6 rounded-2xl border transition-all duration-300 cursor-pointer block h-full ${
              s.accent
                ? "border-[rgb(0,133,132)] bg-[rgb(0,133,132)] text-white hover:bg-[rgb(0,105,104)]"
                : "border-black/7 bg-white hover:shadow-lg hover:shadow-black/6 hover:-translate-y-1 hover:border-[rgb(0,133,132)]/20"
            }`;
            const cardContent = (
              <>
                <span
                  className={`inline-block text-[10px] font-semibold uppercase tracking-wider mb-3 px-2.5 py-1 rounded-full ${
                    s.accent
                      ? "bg-white/15 text-white/80"
                      : "bg-[rgb(0,133,132)]/8 text-[rgb(0,133,132)]"
                  }`}
                >
                  {s.category}
                </span>
                <h3
                  className={`font-semibold text-base mb-2.5 leading-snug ${
                    s.accent ? "text-white" : "text-[#0d1b2a]"
                  }`}
                >
                  {s.title}
                </h3>
                <p
                  className={`text-[13px] leading-relaxed ${
                    s.accent ? "text-white/75" : "text-[#6b7280]"
                  }`}
                >
                  {s.desc}
                </p>
                <div
                  className={`absolute top-5 right-5 transition-opacity duration-200 ${
                    s.accent ? "opacity-50 group-hover:opacity-100" : "opacity-0 group-hover:opacity-100"
                  }`}
                >
                  <ArrowUpRight
                    size={16}
                    className={s.accent ? "text-white" : "text-[rgb(0,133,132)]"}
                  />
                </div>
              </>
            );
            return (
              <FadeInItem key={s.title}>
                {s.slug ? (
                  <Link to={s.slug} className={cardClass}>{cardContent}</Link>
                ) : (
                  <div className={cardClass}>{cardContent}</div>
                )}
              </FadeInItem>
            );
          })}
        </FadeInStagger>
      </div>
    </section>
  );
}

import { ShieldCheck, Award, Users, Star } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { FadeIn, FadeInStagger, FadeInItem } from "./FadeIn";

const pillars = [
  {
    icon: <ShieldCheck size={22} className="text-[rgb(0,133,132)]" />,
    title: "Acreditación en Salud",
    body: "Certificados por el Instituto Colombiano de Normas Técnicas (ICONTEC) con acreditación en salud, garantía de procesos clínicos seguros y de alta calidad.",
  },
  {
    icon: <Award size={22} className="text-[rgb(0,133,132)]" />,
    title: "Nivel III de Complejidad",
    body: "Clasificados como institución de tercer nivel por el Ministerio de Salud, habilitados para atender casos de alta complejidad con la tecnología adecuada.",
  },
  {
    icon: <Users size={22} className="text-[rgb(0,133,132)]" />,
    title: "Equipo Humano de Excelencia",
    body: "Más de 450 especialistas en todas las áreas médicas, comprometidos con la formación continua y las mejores prácticas clínicas internacionales.",
  },
  {
    icon: <Star size={22} className="text-[rgb(0,133,132)]" />,
    title: "Tecnología de Vanguardia",
    body: "Infraestructura hospitalaria moderna, equipos de diagnóstico de última generación y quirófanos de alta complejidad para la atención integral del paciente.",
  },
];

const stats = [
  { value: "1936", label: "Año de Fundación" },
  { value: "88+", label: "Años al Servicio" },
  { value: "300", label: "Camas" },
  { value: "24/7", label: "Urgencias" },
  { value: "15+", label: "Especialidades" },
  { value: "100K+", label: "Pacientes / Año" },
];

export function TrustSection() {
  return (
    <section id="nosotros" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Top: text + image */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-24">
          <FadeIn direction="left">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-10 bg-[rgb(0,133,132)]" />
              <span className="text-[rgb(0,133,132)] text-xs font-semibold uppercase tracking-[0.2em]">
                Desde 1936
              </span>
            </div>
            <h2 className="text-[#0d1b2a] mb-6 leading-tight" style={{ fontSize: "clamp(1.9rem, 3.5vw, 2.75rem)", fontWeight: 700 }}>
              Una institución construida sobre décadas de confianza.
            </h2>
            <p className="text-[#4b5563] text-[17px] leading-relaxed mb-6">
              Clínica San José de Cúcuta es una institución prestadora de servicios de salud (IPS) de tercer nivel de complejidad, referente regional en Norte de Santander y el nororiente colombiano.
            </p>
            <p className="text-[#6b7280] text-base leading-relaxed mb-8">
              Fundada en 1936, la clínica ha evolucionado continuamente para ofrecer atención médica integral, humanizada y de alta calidad a los habitantes de la región y pacientes internacionales provenientes del vecino país Venezuela.
            </p>
            <div className="flex flex-wrap gap-3">
              {["ICONTEC", "MinSalud", "Nivel III", "ISO 9001"].map((cert) => (
                <span
                  key={cert}
                  className="px-4 py-1.5 rounded-full text-xs font-semibold border border-[rgb(0,133,132)]/30 text-[rgb(0,133,132)] bg-[rgb(0,133,132)]/5"
                >
                  {cert}
                </span>
              ))}
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={0.1}>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl shadow-black/10">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1734094546615-045bf5f7ea0e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900"
                  alt="Equipo médico Clínica San José"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b2a]/40 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl shadow-black/10 p-5 border border-black/5">
                <div className="text-[rgb(0,133,132)] font-bold text-3xl leading-none mb-1">88+</div>
                <div className="text-[#6b7280] text-xs uppercase tracking-wide">Años de Excelencia</div>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Stats bar */}
        <FadeIn>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-6 p-8 rounded-2xl bg-[#f8f9fb] border border-black/5 mb-20">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-[#0d1b2a] font-bold text-2xl leading-none mb-1.5">{stat.value}</div>
                <div className="text-[#9ca3af] text-xs uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Pillars */}
        <FadeInStagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p) => (
            <FadeInItem key={p.title}>
              <div className="group p-7 rounded-2xl border border-black/6 bg-white hover:shadow-lg hover:shadow-black/6 hover:-translate-y-1 transition-all duration-300 h-full">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-[rgb(0,133,132)]/8 mb-5 group-hover:bg-[rgb(0,133,132)]/15 transition-colors">
                  {p.icon}
                </div>
                <h3 className="text-[#0d1b2a] font-semibold text-base mb-3 leading-snug">{p.title}</h3>
                <p className="text-[#6b7280] text-[13.5px] leading-relaxed">{p.body}</p>
              </div>
            </FadeInItem>
          ))}
        </FadeInStagger>
      </div>
    </section>
  );
}

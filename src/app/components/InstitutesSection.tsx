import { ArrowUpRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { FadeIn, FadeInStagger, FadeInItem } from "./FadeIn";

const institutes = [
  {
    id: "corazon",
    name: "Instituto del Corazón",
    specialty: "Cardiología · Cirugía Cardiovascular",
    desc: "Centro de referencia regional para diagnóstico y tratamiento de enfermedades cardiovasculares, con hemodinámica, electrofisiología y cirugía cardíaca.",
    image: "https://images.unsplash.com/photo-1579684453423-f84349ef60b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    tag: "Cardiovascular",
  },
  {
    id: "mujer",
    name: "Instituto de la Mujer",
    specialty: "Ginecología · Obstetricia · Reproducción",
    desc: "Atención integral de la salud femenina en todas sus etapas: fertilidad, gestación, parto humanizado y menopausia.",
    image: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    tag: "Salud Femenina",
  },
  {
    id: "ortopedia",
    name: "Instituto de Ortopedia",
    specialty: "Traumatología · Cirugía Ortopédica",
    desc: "Diagnóstico y tratamiento de lesiones musculoesqueléticas con cirugía artroscópica, prótesis articulares y rehabilitación funcional.",
    image: "https://images.unsplash.com/photo-1666886573531-48d2e3c2b684?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    tag: "Ortopedia",
  },
  {
    id: "oncologia",
    name: "Instituto Oncológico",
    specialty: "Oncología Clínica · Radioterapia",
    desc: "Detección temprana, diagnóstico preciso y tratamiento integral del cáncer con quimioterapia, inmunoterapia y manejo del dolor.",
    image: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    tag: "Oncología",
  },
];

export function InstitutesSection() {
  return (
    <section id="institutos" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <FadeIn className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-10 bg-[rgb(0,133,132)]" />
              <span className="text-[rgb(0,133,132)] text-xs font-semibold uppercase tracking-[0.2em]">
                Centros de Alta Especialidad
              </span>
            </div>
            <h2 className="text-[#0d1b2a] leading-tight" style={{ fontSize: "clamp(1.9rem, 3.5vw, 2.75rem)", fontWeight: 700 }}>
              Institutos médicos<br />especializados.
            </h2>
          </div>
          <p className="text-[#6b7280] text-[15px] max-w-sm leading-relaxed">
            Centros de excelencia con tecnología de punta, equipos multidisciplinarios y protocolos clínicos internacionales.
          </p>
        </FadeIn>

        {/* Large feature card + 3 smaller */}
        <div className="grid lg:grid-cols-5 gap-5">
          <FadeIn direction="left" className="lg:col-span-3">
            <div className="group relative rounded-2xl overflow-hidden min-h-[420px] cursor-pointer h-full">
              <ImageWithFallback
                src={institutes[0].image}
                alt={institutes[0].name}
                className="w-full h-full object-cover absolute inset-0 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b2a]/85 via-[#0d1b2a]/30 to-transparent" />
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <span
                  className="inline-block text-[10px] font-semibold uppercase tracking-wider mb-3 px-2.5 py-1 rounded-full self-start"
                  style={{ backgroundColor: "rgba(0,133,132,0.9)", color: "white" }}
                >
                  {institutes[0].tag}
                </span>
                <h3 className="text-white text-2xl font-bold mb-2 leading-tight">{institutes[0].name}</h3>
                <p className="text-white/60 text-xs mb-3 font-medium">{institutes[0].specialty}</p>
                <p className="text-white/75 text-sm leading-relaxed mb-5">{institutes[0].desc}</p>
                <div className="flex items-center gap-2 text-[rgb(0,165,164)] text-sm font-semibold group-hover:gap-3 transition-all duration-200">
                  Conocer más <ArrowUpRight size={15} />
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeInStagger className="lg:col-span-2 flex flex-col gap-5" delay={0.15}>
            {institutes.slice(1).map((inst) => (
              <FadeInItem key={inst.id} direction="right">
                <div className="group relative rounded-2xl overflow-hidden flex-1 min-h-[120px] cursor-pointer">
                  <ImageWithFallback
                    src={inst.image}
                    alt={inst.name}
                    className="w-full h-full object-cover absolute inset-0 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0d1b2a]/85 via-[#0d1b2a]/50 to-transparent" />
                  <div className="absolute inset-0 p-6 flex flex-col justify-center">
                    <span
                      className="inline-block text-[10px] font-semibold uppercase tracking-wider mb-2 px-2 py-1 rounded-full self-start"
                      style={{ backgroundColor: "rgba(0,133,132,0.85)", color: "white" }}
                    >
                      {inst.tag}
                    </span>
                    <h3 className="text-white font-bold text-base leading-snug mb-1">{inst.name}</h3>
                    <p className="text-white/55 text-xs">{inst.specialty}</p>
                  </div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <ArrowUpRight size={16} className="text-white" />
                  </div>
                </div>
              </FadeInItem>
            ))}
          </FadeInStagger>
        </div>

        <FadeIn delay={0.1}>
          <div className="mt-8 text-center">
            <a
              href="#institutos"
              className="inline-flex items-center gap-2 text-[rgb(0,133,132)] font-semibold text-sm hover:gap-3 transition-all duration-200"
            >
              Ver todos los institutos <ArrowUpRight size={15} />
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

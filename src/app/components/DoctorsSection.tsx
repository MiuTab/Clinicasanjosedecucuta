import { ArrowUpRight, GraduationCap } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { FadeIn, FadeInStagger, FadeInItem } from "./FadeIn";

const doctors = [
  {
    id: 1,
    name: "Dr. Carlos Andrés Morales",
    specialty: "Cardiología Intervencionista",
    sub: "Hemodinàmica · Electrofisiología",
    credentials: "Especialista U. Nacional · Fellow ACC",
    image: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
  },
  {
    id: 2,
    name: "Dra. Laura Cristina Pérez",
    specialty: "Ginecología y Obstetricia",
    sub: "Medicina Fetal · Alto Riesgo",
    credentials: "Especialista U. Javeriana · Subespecialista",
    image: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
  },
  {
    id: 3,
    name: "Dr. Hernando José Castro",
    specialty: "Oncología Clínica",
    sub: "Quimioterapia · Inmunoterapia",
    credentials: "Especialista U. Antioquia · PhD Oncología",
    image: "https://images.unsplash.com/photo-1666886573531-48d2e3c2b684?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
  },
];

export function DoctorsSection() {
  return (
    <section id="medicos" className="py-24 lg:py-32 bg-[#f8f9fb]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeIn className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-10 bg-[rgb(0,133,132)]" />
              <span className="text-[rgb(0,133,132)] text-xs font-semibold uppercase tracking-[0.2em]">
                Cuerpo Médico
              </span>
            </div>
            <h2
              className="text-[#0d1b2a] leading-tight"
              style={{ fontSize: "clamp(1.9rem, 3.5vw, 2.75rem)", fontWeight: 700 }}
            >
              Especialistas al<br />servicio de su salud.
            </h2>
          </div>
          <a
            href="#medicos"
            className="flex items-center gap-2 text-[rgb(0,133,132)] font-semibold text-sm hover:gap-3 transition-all duration-200 shrink-0"
          >
            Ver directorio médico <ArrowUpRight size={16} />
          </a>
        </FadeIn>

        <FadeInStagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {doctors.map((doc) => (
            <FadeInItem key={doc.id}>
            <div
              className="group bg-white rounded-2xl overflow-hidden border border-black/6 hover:shadow-xl hover:shadow-black/8 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden bg-[#e5e7eb]">
                <ImageWithFallback
                  src={doc.image}
                  alt={doc.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-3">
                  <h3 className="text-[#0d1b2a] font-bold text-base leading-snug mb-1">{doc.name}</h3>
                  <p className="text-[rgb(0,133,132)] font-semibold text-sm">{doc.specialty}</p>
                  <p className="text-[#9ca3af] text-xs mt-0.5">{doc.sub}</p>
                </div>

                <div className="flex items-center gap-2 text-[#6b7280] text-xs pt-3 border-t border-black/5">
                  <GraduationCap size={13} className="text-[#9ca3af] shrink-0" />
                  <span>{doc.credentials}</span>
                </div>

                <div className="mt-4 flex items-center gap-2 text-[rgb(0,133,132)] text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  Ver perfil <ArrowUpRight size={14} />
                </div>
              </div>
            </div>
            </FadeInItem>
          ))}
        </FadeInStagger>

        {/* Bottom note */}
        <FadeIn delay={0.1}>
        <div className="mt-12 py-8 px-8 rounded-2xl bg-white border border-black/6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-[#0d1b2a] font-bold text-lg mb-1">+450 especialistas a su disposición</h4>
            <p className="text-[#6b7280] text-[14px]">
              Nuestro directorio médico incluye especialistas en más de 40 disciplinas clínicas y quirúrgicas.
            </p>
          </div>
          <a
            href="#medicos"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-[rgb(0,133,132)] text-[rgb(0,133,132)] font-semibold text-sm hover:bg-[rgb(0,133,132)] hover:text-white transition-all duration-200"
          >
            Directorio Completo <ArrowUpRight size={15} />
          </a>
        </div>
        </FadeIn>
      </div>
    </section>
  );
}

import { MapPin, Phone, Mail, Clock, ArrowUpRight } from "lucide-react";
import { Link } from "react-router";
import { FadeIn, FadeInStagger, FadeInItem } from "./FadeIn";

const contacts = [
  {
    icon: <MapPin size={18} className="text-[rgb(0,133,132)]" />,
    label: "Dirección",
    lines: ["Calle 13 #1E-74, Barrio Los Caobos", "Cúcuta, Norte de Santander", "Colombia"],
  },
  {
    icon: <Phone size={18} className="text-[rgb(0,133,132)]" />,
    label: "Teléfonos",
    lines: ["(607) 5895053", "WhatsApp: 318 322 8286"],
  },
  {
    icon: <Mail size={18} className="text-[rgb(0,133,132)]" />,
    label: "Correo Electrónico",
    lines: ["info@clinicasanjose.com.co", "citas@clinicasanjose.com.co"],
  },
  {
    icon: <Clock size={18} className="text-[rgb(0,133,132)]" />,
    label: "Horarios de Atención",
    lines: ["Consultas: Lun–Sáb 7:00–18:00", "Urgencias: 24 horas · 7 días"],
  },
];

export function LocationSection() {
  return (
    <section id="contacto" className="py-24 lg:py-32 bg-[#f8f9fb]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeIn className="mb-14">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-10 bg-[rgb(0,133,132)]" />
            <span className="text-[rgb(0,133,132)] text-xs font-semibold uppercase tracking-[0.2em]">
              Ubicación y Contacto
            </span>
          </div>
          <h2
            className="text-[#0d1b2a] leading-tight"
            style={{ fontSize: "clamp(1.9rem, 3.5vw, 2.75rem)", fontWeight: 700 }}
          >
            Encuéntrenos en el<br />corazón de Cúcuta.
          </h2>
        </FadeIn>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Map */}
          <FadeIn direction="left" className="lg:col-span-3 rounded-2xl overflow-hidden border border-black/6 shadow-lg shadow-black/5 min-h-[400px]">
            <iframe
              title="Clínica San José de Cúcuta"
              src="https://maps.google.com/maps?q=Cl.+13+%231+e+74,+Los+Caobos,+C%C3%BAcuta,+Norte+de+Santander,+Colombia&output=embed&z=17"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            />
          </FadeIn>

          {/* Contact cards */}
          <FadeInStagger className="lg:col-span-2 flex flex-col gap-4" delay={0.1}>
            {contacts.map((c) => (
              <FadeInItem key={c.label} direction="right">
              <div
                className="bg-white p-5 rounded-2xl border border-black/6 flex gap-4 hover:shadow-md hover:shadow-black/5 transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-xl bg-[rgb(0,133,132)]/8 flex items-center justify-center shrink-0 mt-0.5">
                  {c.icon}
                </div>
                <div>
                  <p className="text-[#9ca3af] text-[11px] font-semibold uppercase tracking-wider mb-1.5">{c.label}</p>
                  {c.lines.map((line, i) => (
                    <p key={i} className="text-[#374151] text-sm leading-relaxed">{line}</p>
                  ))}
                </div>
              </div>
              </FadeInItem>
            ))}

            <FadeInItem direction="right">
            <a
              href="#citas"
              className="mt-2 w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-white font-semibold text-sm transition-all hover:opacity-90 active:scale-[0.98]"
              style={{ backgroundColor: "rgb(0,133,132)" }}
            >
              Agendar Cita Online <ArrowUpRight size={15} />
            </a>
            </FadeInItem>
          </FadeInStagger>
        </div>

        {/* International patients banner */}
        <FadeIn delay={0.05} className="mt-10 p-8 rounded-2xl bg-[#0d1b2a] flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              
              <span className="text-white/50 text-xs font-semibold uppercase tracking-wider">Pacientes Internacionales</span>
            </div>
            <h4 className="text-white font-bold text-lg mb-1">¿Viene de otro país?</h4>
            <p className="text-white/55 text-[14px]">
              Contamos con un programa especializado de atención a pacientes internacionales con coordinación de citas, alojamiento y traductores.
            </p>
          </div>
          <Link
            to="/pacientes-internacionales"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/20 text-white font-semibold text-sm hover:bg-white/10 transition-all duration-200"
          >
            Información <ArrowUpRight size={15} />
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}

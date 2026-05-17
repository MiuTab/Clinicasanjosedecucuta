import { Link } from "react-router";
import { ChevronRight, Calendar, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import type { ServiceData } from "../data/servicesData";
import { servicesData } from "../data/servicesData";
import { FadeIn, FadeInStagger, FadeInItem } from "./FadeIn";

interface Props {
  data: ServiceData;
}

export function ServicePageLayout({ data }: Props) {
  const related = servicesData.filter((s) => s.id !== data.id).slice(0, 4);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative w-full min-h-[52vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src={data.heroImage}
            alt={data.title}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d1b2a]/92 via-[#0d1b2a]/70 to-[#0d1b2a]/25" />
        </div>

        {/* Teal left accent */}
        <div
          className="absolute left-0 top-0 bottom-0 w-1 z-10"
          style={{ backgroundColor: "rgb(0,133,132)" }}
        />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 pb-14 pt-20">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-white/45 text-xs mb-8">
            <Link to="/" className="hover:text-white/70 transition-colors">Inicio</Link>
            <ChevronRight size={12} />
            <span className="hover:text-white/70 transition-colors cursor-pointer">Servicios</span>
            <ChevronRight size={12} />
            <span className="text-white/80">{data.title}</span>
          </nav>

          <span
            className="inline-block text-[10px] font-semibold uppercase tracking-[0.2em] px-3 py-1.5 rounded-full text-white mb-5"
            style={{ backgroundColor: "rgba(0,133,132,0.85)" }}
          >
            {data.category}
          </span>

          <h1
            className="text-white mb-4 leading-tight"
            style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 700, lineHeight: 1.05 }}
          >
            {data.title}
          </h1>

          <p className="text-white/65 text-lg max-w-2xl leading-relaxed mb-8">
            {data.tagline}
          </p>

          <a
            href="#citas"
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl text-white font-semibold text-sm transition-all duration-200 hover:opacity-90 active:scale-[0.98]"
            style={{ backgroundColor: "rgb(0,133,132)" }}
          >
            <Calendar size={15} />
            {data.ctaLabel ?? "Agendar Cita"}
          </a>
        </div>
      </section>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">

          {/* Left: main content */}
          <div className="lg:col-span-2 space-y-10">

            {/* Description card */}
            <FadeIn>
            <div
              className="p-7 rounded-2xl border-l-4"
              style={{ backgroundColor: "rgba(0,133,132,0.05)", borderLeftColor: "rgb(0,133,132)" }}
            >
              <p className="text-[#374151] text-[17px] leading-relaxed">{data.description}</p>
            </div>
            </FadeIn>

            {/* Sections */}
            <FadeInStagger stagger={0.07}>
            {data.sections.map((section, i) => (
              <FadeInItem key={i}>
              <div className="space-y-3">
                {section.title && (
                  <h2
                    className="text-[#0d1b2a] font-bold leading-snug"
                    style={{ fontSize: "clamp(1.2rem, 2.5vw, 1.45rem)" }}
                  >
                    {section.title}
                  </h2>
                )}
                <p className="text-[#4b5563] text-[16px] leading-[1.8]">{section.body}</p>
              </div>
              </FadeInItem>
            ))}
            </FadeInStagger>

            {/* Staff section */}
            {data.staffItems && data.staffItems.length > 0 && (
              <FadeIn>
              <div>
                <h2
                  className="text-[#0d1b2a] font-bold mb-5 leading-snug"
                  style={{ fontSize: "clamp(1.2rem, 2.5vw, 1.45rem)" }}
                >
                  Personal Asistencial
                </h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {data.staffItems.map((item, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-[#f8f9fb] border border-black/5">
                      <CheckCircle2 size={16} className="text-[rgb(0,133,132)] mt-0.5 shrink-0" />
                      <span className="text-[#374151] text-sm leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              </FadeIn>
            )}
          </div>

          {/* Right: sidebar */}
          <FadeIn direction="right" delay={0.12} className="space-y-6">

            {/* Features card */}
            <div className="bg-[#f8f9fb] rounded-2xl p-6 border border-black/5">
              <h3 className="text-[#0d1b2a] font-bold text-base mb-5">Servicios y capacidades</h3>
              <ul className="space-y-2.5">
                {data.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div
                      className="w-1.5 h-1.5 rounded-full shrink-0"
                      style={{ backgroundColor: "rgb(0,133,132)" }}
                    />
                    <span className="text-[#4b5563] text-sm">{f.label}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA card */}
            <div
              className="rounded-2xl p-6 text-white"
              style={{ backgroundColor: "rgb(0,133,132)" }}
            >
              <h3 className="font-bold text-base mb-2">¿Necesita una cita?</h3>
              <p className="text-white/70 text-sm leading-relaxed mb-5">
                Nuestro equipo está listo para orientarle y programar su consulta con el especialista adecuado.
              </p>
              <a
                href="#citas"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-white font-semibold text-sm transition-all hover:bg-white/90 active:scale-[0.98]"
                style={{ color: "rgb(0,133,132)" }}
              >
                <Calendar size={15} />
                Agendar Cita
              </a>
              <a
                href="tel:6075895053"
                className="flex items-center justify-center gap-2 w-full py-2.5 mt-2 rounded-xl border border-white/25 text-white font-medium text-sm hover:bg-white/10 transition-all"
              >
                (607) 5895053
              </a>
            </div>

            {/* Opening hours */}
            <div className="bg-white rounded-2xl p-6 border border-black/6">
              <h3 className="text-[#0d1b2a] font-bold text-base mb-4">Horarios de Atención</h3>
              <div className="space-y-2.5 text-sm">
                {[
                  { day: "Lunes – Viernes", hours: "7:00 AM – 6:00 PM" },
                  { day: "Sábado", hours: "7:00 AM – 1:00 PM" },
                  { day: "Urgencias", hours: "24 horas · 7 días" },
                ].map((row) => (
                  <div key={row.day} className="flex justify-between items-center">
                    <span className="text-[#6b7280]">{row.day}</span>
                    <span className="text-[#0d1b2a] font-medium">{row.hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Related services */}
        <div className="mt-20 pt-12 border-t border-black/6">
          <FadeIn className="flex items-center gap-3 mb-8">
            <div className="h-px w-8" style={{ backgroundColor: "rgb(0,133,132)" }} />
            <span
              className="text-xs font-semibold uppercase tracking-[0.2em]"
              style={{ color: "rgb(0,133,132)" }}
            >
              Otros Servicios
            </span>
          </FadeIn>

          <FadeInStagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4" stagger={0.07}>
            {related.map((s) => (
              <FadeInItem key={s.id}>
              <Link
                to={s.slug}
                className="group block p-5 rounded-2xl border border-black/7 bg-[#f8f9fb] hover:shadow-md hover:shadow-black/6 hover:-translate-y-1 hover:border-[rgb(0,133,132)]/20 transition-all duration-300"
              >
                <span
                  className="inline-block text-[10px] font-semibold uppercase tracking-wider mb-3 px-2 py-1 rounded-full"
                  style={{
                    backgroundColor: "rgba(0,133,132,0.08)",
                    color: "rgb(0,133,132)",
                  }}
                >
                  {s.category.split("·")[0].trim()}
                </span>
                <h4 className="text-[#0d1b2a] font-semibold text-sm mb-1 leading-snug">{s.title}</h4>
                <div
                  className="flex items-center gap-1 text-xs font-medium mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  style={{ color: "rgb(0,133,132)" }}
                >
                  Ver servicio <ArrowUpRight size={12} />
                </div>
              </Link>
              </FadeInItem>
            ))}
          </FadeInStagger>
        </div>
      </div>

      {/* Bottom CTA banner */}
      <div className="bg-[#f8f9fb] border-t border-black/5">
        <FadeIn className="max-w-7xl mx-auto px-6 lg:px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-[#0d1b2a] font-bold text-xl mb-1">
              Atención médica avanzada con calidez humana.
            </h3>
            <p className="text-[#6b7280] text-sm">
              Más de 88 años cuidando la salud de las familias del Norte de Santander.
            </p>
          </div>
          <div className="flex gap-3 shrink-0">
            <Link
              to="/"
              className="px-5 py-2.5 rounded-xl border border-black/10 text-[#374151] font-medium text-sm hover:border-[rgb(0,133,132)] hover:text-[rgb(0,133,132)] transition-all"
            >
              Volver al Inicio
            </Link>
            <a
              href="#citas"
              className="px-5 py-2.5 rounded-xl text-white font-semibold text-sm transition-all hover:opacity-90 active:scale-[0.98]"
              style={{ backgroundColor: "rgb(0,133,132)" }}
            >
              Agendar Cita
            </a>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}

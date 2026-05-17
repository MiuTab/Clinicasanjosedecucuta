import { Link } from "react-router";
import { ChevronRight, Calendar, ArrowUpRight, CheckCircle2, Quote } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import type { NosotrosPage } from "../data/nosotrosData";
import { nosotrosData } from "../data/nosotrosData";
import { FadeIn, FadeInStagger, FadeInItem } from "./FadeIn";

interface Props {
  data: NosotrosPage;
}

export function AboutPageLayout({ data }: Props) {
  const related = nosotrosData.filter((p) => p.id !== data.id);

  return (
    <div className="min-h-screen bg-white">

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative w-full min-h-[52vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src={data.heroImage}
            alt={data.title}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d1b2a]/92 via-[#0d1b2a]/72 to-[#0d1b2a]/30" />
        </div>
        <div className="absolute left-0 top-0 bottom-0 w-1 z-10" style={{ backgroundColor: "rgb(0,133,132)" }} />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 pb-16 pt-20">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-white/45 text-xs mb-8">
            <Link to="/" className="hover:text-white/70 transition-colors">Inicio</Link>
            <ChevronRight size={12} />
            <span className="text-white/60">Nosotros</span>
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

          <p className="text-white/65 text-lg max-w-2xl leading-relaxed">
            {data.tagline}
          </p>
        </div>
      </section>

      {/* ── Body ─────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16">

        {/* Pull quote */}
        {data.pullQuote && (
          <FadeIn className="mb-10">
          <div
            className="p-7 lg:p-9 rounded-2xl border-l-4 flex gap-5"
            style={{ backgroundColor: "rgba(0,133,132,0.05)", borderLeftColor: "rgb(0,133,132)" }}
          >
            <Quote size={28} className="shrink-0 mt-1 opacity-30" style={{ color: "rgb(0,133,132)" }} />
            <p
              className="text-[#0d1b2a] leading-relaxed italic"
              style={{ fontSize: "clamp(1.05rem, 2vw, 1.2rem)", fontWeight: 500 }}
            >
              {data.pullQuote}
            </p>
          </div>
          </FadeIn>
        )}

        {/* Main sections — sidebar only shows highlights when they aren't
            already rendered below (calidad renders them in the strategy strip) */}
        <div className="grid lg:grid-cols-3 gap-10 mb-10">
          <FadeInStagger className="lg:col-span-2 space-y-8" stagger={0.08}>
            {data.sections.map((s, i) => (
              <FadeInItem key={i}>
              <div className="space-y-3">
                <h2
                  className="text-[#0d1b2a] font-bold leading-snug"
                  style={{ fontSize: "clamp(1.15rem, 2.5vw, 1.4rem)" }}
                >
                  {s.title}
                </h2>
                <p className="text-[#4b5563] text-[16px] leading-[1.85]">{s.body}</p>
              </div>
              </FadeInItem>
            ))}
          </FadeInStagger>

          {/* Sidebar: highlights only for pages that don't have a dedicated strip */}
          <FadeIn direction="right" delay={0.1} className="space-y-5">
            {data.highlights && data.highlights.length > 0 && data.id !== "calidad" && (
              <div className="bg-[#f8f9fb] rounded-2xl p-6 border border-black/5">
                <h3 className="text-[#0d1b2a] font-bold text-base mb-4">Puntos clave</h3>
                <ul className="space-y-2.5">
                  {data.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 size={15} className="shrink-0 mt-0.5" style={{ color: "rgb(0,133,132)" }} />
                      <span className="text-[#4b5563] text-sm">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Appointment CTA */}
            <div className="rounded-2xl p-6 text-white" style={{ backgroundColor: "rgb(0,133,132)" }}>
              <h3 className="font-bold text-base mb-2">¿Tiene alguna consulta?</h3>
              <p className="text-white/70 text-sm leading-relaxed mb-5">
                Nuestro equipo está disponible para orientarle sobre nuestros servicios, convenios y programas.
              </p>
              <a
                href="#citas"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-white font-semibold text-sm transition-all hover:bg-white/90"
                style={{ color: "rgb(0,133,132)" }}
              >
                <Calendar size={14} />
                Agendar Cita
              </a>
              <a
                href="tel:6075895053"
                className="flex items-center justify-center gap-1.5 w-full py-2.5 mt-2 rounded-xl border border-white/25 text-white font-medium text-sm hover:bg-white/10 transition-all"
              >
                (607) 5895053
              </a>
            </div>

            {/* Nosotros quick nav */}
            <div className="bg-white rounded-2xl p-6 border border-black/6">
              <h3 className="text-[#0d1b2a] font-bold text-sm mb-4 uppercase tracking-wide">Secciones Nosotros</h3>
              <ul className="space-y-1">
                {nosotrosData.map((p) => (
                  <li key={p.id}>
                    <Link
                      to={p.slug}
                      className={`flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-all duration-150 ${
                        p.id === data.id
                          ? "font-semibold text-white"
                          : "text-[#6b7280] hover:text-[#0d1b2a] hover:bg-[#f8f9fb]"
                      }`}
                      style={p.id === data.id ? { backgroundColor: "rgb(0,133,132)" } : {}}
                    >
                      {p.title}
                      {p.id !== data.id && <ChevronRight size={13} className="opacity-40" />}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>

        {/* ── Values cards ─────────────────────────────────────── */}
        {data.cards && data.cards.length > 0 && (
          <div className="mb-10">
            <FadeIn className="flex items-center gap-3 mb-8">
              <div className="h-px w-8" style={{ backgroundColor: "rgb(0,133,132)" }} />
              <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "rgb(0,133,132)" }}>
                {data.id === "valores"
                  ? "Principios Corporativos"
                  : data.id === "calidad"
                  ? "Objetivos de Calidad"
                  : "Objetivos Estratégicos"}
              </span>
            </FadeIn>
            <FadeInStagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5" stagger={0.07}>
              {data.cards.map((card, i) => (
                <FadeInItem key={i}>
                <div
                  className="group p-6 rounded-2xl border border-black/7 bg-[#f8f9fb] hover:shadow-lg hover:shadow-black/6 hover:-translate-y-1 transition-all duration-300"
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-xs font-bold mb-4 shrink-0"
                    style={{ backgroundColor: "rgb(0,133,132)" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="text-[#0d1b2a] font-bold text-base mb-2 leading-snug">{card.title}</h3>
                  {card.body && (
                    <p className="text-[#6b7280] text-[13.5px] leading-relaxed">{card.body}</p>
                  )}
                  {card.items && (
                    <ul className="mt-3 space-y-1.5">
                      {card.items.map((item, j) => (
                        <li key={j} className="flex items-center gap-2 text-[#6b7280] text-sm">
                          <div
                            className="w-1.5 h-1.5 rounded-full shrink-0"
                            style={{ backgroundColor: "rgb(0,133,132)" }}
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                </FadeInItem>
              ))}
            </FadeInStagger>
          </div>
        )}

        {/* ── Quality pillars ───────────────────────────────────── */}
        {data.pillars && data.pillars.length > 0 && (
          <div className="mb-10">
            <FadeIn className="flex items-center gap-3 mb-8">
              <div className="h-px w-8" style={{ backgroundColor: "rgb(0,133,132)" }} />
              <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "rgb(0,133,132)" }}>
                Fundamentos Pilares de Calidad
              </span>
            </FadeIn>
            <FadeInStagger className="grid md:grid-cols-3 gap-5" stagger={0.09}>
              {data.pillars.map((pillar, i) => (
                <FadeInItem key={i}>
                <div className="rounded-2xl overflow-hidden border border-black/7">
                  <div
                    className="px-6 py-4"
                    style={{ backgroundColor: "rgb(0,133,132)" }}
                  >
                    <div className="text-white/60 text-xs font-semibold uppercase tracking-widest mb-1">
                      Pilar {String(i + 1).padStart(2, "0")}
                    </div>
                    <h3 className="text-white font-bold text-base">{pillar.title}</h3>
                  </div>
                  <div className="bg-[#f8f9fb] px-6 py-5">
                    <ul className="space-y-2.5">
                      {pillar.items.map((item, j) => (
                        <li key={j} className="flex items-center gap-2.5 text-[#4b5563] text-sm">
                          <CheckCircle2 size={14} className="shrink-0" style={{ color: "rgb(0,133,132)" }} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                </FadeInItem>
              ))}
            </FadeInStagger>
          </div>
        )}

        {/* ── Strategy highlights strip ─────────────────────────── */}
        {data.highlights && data.highlights.length > 0 && data.id === "calidad" && (
          <FadeIn className="mb-10">
          <div className="p-8 rounded-2xl bg-[#0d1b2a]">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-[rgb(0,133,132)]" />
              <span className="text-white/50 text-xs font-semibold uppercase tracking-[0.2em]">
                Estrategia de Calidad
              </span>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {data.highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold text-white shrink-0 mt-0.5"
                    style={{ backgroundColor: "rgb(0,133,132)" }}
                  >
                    {i + 1}
                  </div>
                  <span className="text-white/65 text-sm leading-relaxed">{h}</span>
                </div>
              ))}
            </div>
          </div>
          </FadeIn>
        )}

        {/* ── Related Nosotros pages ────────────────────────────── */}
        <div className="mt-4 pt-12 border-t border-black/6">
          <FadeIn className="flex items-center gap-3 mb-8">
            <div className="h-px w-8" style={{ backgroundColor: "rgb(0,133,132)" }} />
            <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "rgb(0,133,132)" }}>
              Más sobre Nosotros
            </span>
          </FadeIn>
          <FadeInStagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4" stagger={0.07}>
            {related.map((p) => (
              <FadeInItem key={p.id}>
              <Link
                to={p.slug}
                className="group block p-5 rounded-2xl border border-black/7 bg-[#f8f9fb] hover:shadow-md hover:shadow-black/5 hover:-translate-y-1 hover:border-[rgb(0,133,132)]/20 transition-all duration-300"
              >
                <span
                  className="inline-block text-[10px] font-semibold uppercase tracking-wider mb-3 px-2 py-1 rounded-full"
                  style={{ backgroundColor: "rgba(0,133,132,0.08)", color: "rgb(0,133,132)" }}
                >
                  {p.category.split("·")[0].trim()}
                </span>
                <h4 className="text-[#0d1b2a] font-semibold text-sm leading-snug mb-1">{p.title}</h4>
                <p className="text-[#9ca3af] text-xs leading-relaxed line-clamp-2 mt-1">{p.tagline}</p>
                <div
                  className="flex items-center gap-1 text-xs font-medium mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  style={{ color: "rgb(0,133,132)" }}
                >
                  Leer más <ArrowUpRight size={11} />
                </div>
              </Link>
              </FadeInItem>
            ))}
          </FadeInStagger>
        </div>
      </div>

      {/* ── Bottom CTA ───────────────────────────────────────── */}
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
              className="px-5 py-2.5 rounded-xl text-white font-semibold text-sm transition-all hover:opacity-90"
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

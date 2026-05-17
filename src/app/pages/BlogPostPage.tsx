import { Link, useParams } from "react-router";
import { Clock, ChevronRight, ArrowUpRight, ArrowLeft, User } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { FadeIn, FadeInStagger, FadeInItem } from "../components/FadeIn";
import { blogArticles } from "../data/blogData";

export function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const article = blogArticles.find((a) => a.slug === slug);

  if (!article) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-[#0d1b2a] font-bold text-2xl mb-3">Artículo no encontrado</h1>
          <Link to="/blog" className="text-[rgb(0,133,132)] font-semibold text-sm hover:underline">
            Volver al blog
          </Link>
        </div>
      </div>
    );
  }

  const related = blogArticles
    .filter((a) => a.id !== article.id && (a.category === article.category || a.tags.some((t) => article.tags.includes(t))))
    .slice(0, 3);

  const fallbackRelated = blogArticles.filter((a) => a.id !== article.id).slice(0, 3);
  const relatedArticles = related.length >= 2 ? related : fallbackRelated;

  return (
    <div className="min-h-screen bg-white">

      {/* Hero */}
      <section className="relative w-full min-h-[56vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b2a]/95 via-[#0d1b2a]/55 to-[#0d1b2a]/20" />
        </div>
        <div className="absolute left-0 top-0 bottom-0 w-1 z-10" style={{ backgroundColor: "rgb(0,133,132)" }} />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 pb-14 pt-20">
          <nav className="flex items-center gap-1.5 text-white/45 text-xs mb-8">
            <Link to="/" className="hover:text-white/70 transition-colors">Inicio</Link>
            <ChevronRight size={12} />
            <Link to="/blog" className="hover:text-white/70 transition-colors">Blog</Link>
            <ChevronRight size={12} />
            <span className="text-white/70 line-clamp-1 max-w-xs">{article.title}</span>
          </nav>

          <span
            className="inline-block text-[10px] font-semibold uppercase tracking-[0.2em] px-3 py-1.5 rounded-full text-white mb-5"
            style={{ backgroundColor: "rgba(0,133,132,0.9)" }}
          >
            {article.category}
          </span>

          <h1
            className="text-white mb-5 leading-tight max-w-3xl"
            style={{ fontSize: "clamp(1.8rem, 4vw, 2.9rem)", fontWeight: 700, lineHeight: 1.1 }}
          >
            {article.title}
          </h1>

          <div className="flex flex-wrap items-center gap-5 text-white/55 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center">
                <User size={14} className="text-white" />
              </div>
              <div>
                <span className="text-white/90 font-medium">{article.author}</span>
                <span className="mx-1.5">·</span>
                <span>{article.authorRole}</span>
              </div>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock size={13} />
              <span>{article.readTime} de lectura</span>
            </div>
            <span>{article.date}</span>
          </div>
        </div>
      </section>

      {/* Article body */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14 lg:py-18">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">

          {/* Main content */}
          <div className="lg:col-span-2">
            <FadeIn>
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-[rgb(0,133,132)] text-sm font-semibold mb-10 hover:gap-3 transition-all duration-200"
              >
                <ArrowLeft size={14} />
                Volver al blog
              </Link>
            </FadeIn>

            <FadeInStagger className="space-y-8" stagger={0.07}>
              {article.sections.map((section, i) => (
                <FadeInItem key={i}>
                  <div className="space-y-3">
                    {section.title && (
                      <h2
                        className="text-[#0d1b2a] font-bold leading-snug"
                        style={{ fontSize: "clamp(1.15rem, 2.5vw, 1.4rem)" }}
                      >
                        {section.title}
                      </h2>
                    )}
                    <p className="text-[#4b5563] text-[16px] leading-[1.9]">{section.body}</p>
                  </div>
                </FadeInItem>
              ))}
            </FadeInStagger>

            {/* Tags */}
            <FadeIn className="mt-12 pt-8 border-t border-black/6">
              <p className="text-[#9ca3af] text-xs font-semibold uppercase tracking-wider mb-3">Temas relacionados</p>
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 rounded-full text-xs font-semibold"
                    style={{ backgroundColor: "rgba(0,133,132,0.08)", color: "rgb(0,133,132)" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </FadeIn>

            {/* Author card */}
            <FadeIn className="mt-8">
              <div className="flex gap-5 p-6 rounded-2xl bg-[#f8f9fb] border border-black/6">
                <div
                  className="w-14 h-14 rounded-full shrink-0 flex items-center justify-center text-white font-bold text-lg"
                  style={{ backgroundColor: "rgb(0,133,132)" }}
                >
                  {article.author.split(" ").find((w) => !["Dr.", "Dra."].includes(w))?.[0] ?? "M"}
                </div>
                <div>
                  <p className="text-[#0d1b2a] font-bold text-base mb-0.5">{article.author}</p>
                  <p className="text-[rgb(0,133,132)] text-sm font-medium mb-2">{article.authorRole}</p>
                  <p className="text-[#6b7280] text-sm leading-relaxed">
                    Especialista de la Clínica San José de Cúcuta con amplia experiencia clínica e investigativa en su área. Sus artículos están basados en evidencia científica actualizada y en su práctica clínica cotidiana.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Sidebar */}
          <FadeIn direction="right" delay={0.1} className="space-y-6">

            {/* CTA card */}
            <div className="rounded-2xl p-6 text-white" style={{ backgroundColor: "rgb(0,133,132)" }}>
              <h3 className="font-bold text-base mb-2">¿Necesita una consulta?</h3>
              <p className="text-white/70 text-sm leading-relaxed mb-5">
                Nuestros especialistas están disponibles para atenderle y resolver sus dudas de salud de forma personalizada.
              </p>
              <Link
                to="/"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-white font-semibold text-sm transition-all hover:bg-white/90"
                style={{ color: "rgb(0,133,132)" }}
              >
                Agendar Cita
              </Link>
              <a
                href="tel:6075895053"
                className="flex items-center justify-center gap-2 w-full py-2.5 mt-2 rounded-xl border border-white/25 text-white font-medium text-sm hover:bg-white/10 transition-all"
              >
                (607) 5895053
              </a>
            </div>

            {/* Category badge */}
            <div className="bg-[#f8f9fb] rounded-2xl p-6 border border-black/6">
              <h3 className="text-[#0d1b2a] font-bold text-sm mb-4 uppercase tracking-wide">Categoría</h3>
              <span
                className="inline-block px-4 py-2 rounded-full text-sm font-semibold"
                style={{ backgroundColor: "rgba(0,133,132,0.1)", color: "rgb(0,133,132)" }}
              >
                {article.category}
              </span>
            </div>

            {/* Article info */}
            <div className="bg-white rounded-2xl p-6 border border-black/6">
              <h3 className="text-[#0d1b2a] font-bold text-sm mb-4 uppercase tracking-wide">Información del artículo</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-[#6b7280]">Publicado</span>
                  <span className="text-[#0d1b2a] font-medium">{article.date}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#6b7280]">Tiempo de lectura</span>
                  <span className="text-[#0d1b2a] font-medium">{article.readTime}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#6b7280]">Autor</span>
                  <span className="text-[#0d1b2a] font-medium text-right max-w-[120px] leading-snug">{article.author}</span>
                </div>
              </div>
            </div>

            {/* All categories */}
            <div className="bg-[#f8f9fb] rounded-2xl p-6 border border-black/6">
              <h3 className="text-[#0d1b2a] font-bold text-sm mb-4 uppercase tracking-wide">Explorar por categoría</h3>
              <div className="flex flex-wrap gap-2">
                {Array.from(new Set(blogArticles.map((a) => a.category))).map((cat) => (
                  <Link
                    key={cat}
                    to="/blog"
                    className="text-xs px-2.5 py-1.5 rounded-full transition-all duration-150 border"
                    style={
                      cat === article.category
                        ? { backgroundColor: "rgb(0,133,132)", color: "white", borderColor: "rgb(0,133,132)" }
                        : { backgroundColor: "white", color: "#6b7280", borderColor: "rgba(0,0,0,0.08)" }
                    }
                  >
                    {cat}
                  </Link>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Related articles */}
        <div className="mt-20 pt-12 border-t border-black/6">
          <FadeIn className="flex items-center gap-3 mb-8">
            <div className="h-px w-8" style={{ backgroundColor: "rgb(0,133,132)" }} />
            <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "rgb(0,133,132)" }}>
              Artículos relacionados
            </span>
          </FadeIn>

          <FadeInStagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" stagger={0.08}>
            {relatedArticles.map((rel) => (
              <FadeInItem key={rel.id}>
                <Link
                  to={`/blog/${rel.slug}`}
                  className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-black/7 hover:shadow-lg hover:shadow-black/7 hover:-translate-y-1 transition-all duration-300 h-full"
                >
                  <div className="relative aspect-[16/9] overflow-hidden bg-[#e5e7eb]">
                    <ImageWithFallback
                      src={rel.image}
                      alt={rel.title}
                      className="w-full h-full object-cover absolute inset-0 group-hover:scale-105 transition-transform duration-700"
                    />
                    <span
                      className="absolute top-4 left-4 text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full text-white"
                      style={{ backgroundColor: "rgba(0,133,132,0.9)" }}
                    >
                      {rel.category}
                    </span>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex items-center gap-2 text-[#9ca3af] text-xs mb-2">
                      <Clock size={10} />
                      <span>{rel.readTime}</span>
                      <span>·</span>
                      <span>{rel.date}</span>
                    </div>
                    <h3 className="text-[#0d1b2a] font-bold text-sm leading-snug mb-2 line-clamp-3 flex-1">{rel.title}</h3>
                    <div
                      className="flex items-center gap-1 text-xs font-semibold mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                      style={{ color: "rgb(0,133,132)" }}
                    >
                      Leer artículo <ArrowUpRight size={12} />
                    </div>
                  </div>
                </Link>
              </FadeInItem>
            ))}
          </FadeInStagger>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="bg-[#f8f9fb] border-t border-black/5">
        <FadeIn className="max-w-7xl mx-auto px-6 lg:px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-[#0d1b2a] font-bold text-xl mb-1">Atención médica avanzada con calidez humana.</h3>
            <p className="text-[#6b7280] text-sm">Más de 88 años cuidando la salud de las familias del Norte de Santander.</p>
          </div>
          <div className="flex gap-3 shrink-0">
            <Link
              to="/blog"
              className="px-5 py-2.5 rounded-xl border border-black/10 text-[#374151] font-medium text-sm hover:border-[rgb(0,133,132)] hover:text-[rgb(0,133,132)] transition-all"
            >
              Ver más artículos
            </Link>
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-white font-semibold text-sm transition-all hover:opacity-90"
              style={{ backgroundColor: "rgb(0,133,132)" }}
            >
              Agendar Cita <ArrowUpRight size={14} />
            </Link>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}

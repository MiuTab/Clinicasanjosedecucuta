import { useState } from "react";
import { Link } from "react-router";
import { Clock, ArrowUpRight, ChevronRight } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { FadeIn, FadeInStagger, FadeInItem } from "../components/FadeIn";
import { blogArticles } from "../data/blogData";

const allCategories = ["Todos", ...Array.from(new Set(blogArticles.map((a) => a.category)))];

export function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filtered =
    activeCategory === "Todos"
      ? blogArticles
      : blogArticles.filter((a) => a.category === activeCategory);

  const [featured, ...rest] = filtered;

  return (
    <div className="min-h-screen bg-white">

      {/* Hero */}
      <section className="relative w-full min-h-[40vh] flex items-end overflow-hidden" style={{ backgroundColor: "#0d1b2a" }}>
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="absolute left-0 top-0 bottom-0 w-1 z-10" style={{ backgroundColor: "rgb(0,133,132)" }} />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 pb-14 pt-20">
          <nav className="flex items-center gap-1.5 text-white/45 text-xs mb-8">
            <Link to="/" className="hover:text-white/70 transition-colors">Inicio</Link>
            <ChevronRight size={12} />
            <span className="text-white/80">Blog</span>
          </nav>

          <span
            className="inline-block text-[10px] font-semibold uppercase tracking-[0.2em] px-3 py-1.5 rounded-full text-white mb-5"
            style={{ backgroundColor: "rgba(0,133,132,0.85)" }}
          >
            Artículos Médicos
          </span>

          <h1
            className="text-white mb-4 leading-tight"
            style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 700, lineHeight: 1.05 }}
          >
            Conocimiento al servicio<br />de su salud.
          </h1>
          <p className="text-white/60 text-lg max-w-2xl leading-relaxed">
            Artículos escritos por nuestros especialistas sobre prevención, diagnóstico y tendencias en salud para Colombia y la región.
          </p>
        </div>
      </section>

      {/* Body */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">

        {/* Category filter */}
        <FadeIn className="flex flex-wrap gap-2 mb-12">
          {allCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wide transition-all duration-200 ${
                activeCategory === cat
                  ? "text-white"
                  : "bg-[#f8f9fb] text-[#6b7280] hover:bg-[#f0f1f3] border border-black/7"
              }`}
              style={activeCategory === cat ? { backgroundColor: "rgb(0,133,132)" } : {}}
            >
              {cat}
            </button>
          ))}
        </FadeIn>

        {featured && (
          <>
            {/* Featured article */}
            <FadeIn className="mb-12">
              <Link
                to={`/blog/${featured.slug}`}
                className="group grid lg:grid-cols-5 rounded-2xl overflow-hidden border border-black/7 hover:shadow-xl hover:shadow-black/8 transition-all duration-300 bg-white"
              >
                <div className="lg:col-span-3 relative min-h-[280px] overflow-hidden">
                  <ImageWithFallback
                    src={featured.image}
                    alt={featured.title}
                    className="w-full h-full object-cover absolute inset-0 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black/10" />
                  <span
                    className="absolute top-5 left-5 text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full text-white"
                    style={{ backgroundColor: "rgba(0,133,132,0.9)" }}
                  >
                    {featured.category}
                  </span>
                </div>
                <div className="lg:col-span-2 p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-[#9ca3af] text-xs mb-4">
                      <Clock size={11} />
                      <span>{featured.readTime} de lectura</span>
                      <span>·</span>
                      <span>{featured.date}</span>
                    </div>
                    <h2 className="text-[#0d1b2a] font-bold leading-snug mb-3" style={{ fontSize: "clamp(1.15rem, 2vw, 1.4rem)" }}>
                      {featured.title}
                    </h2>
                    <p className="text-[#6b7280] text-[14px] leading-relaxed mb-5">{featured.excerpt}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {featured.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] px-2.5 py-1 rounded-full"
                          style={{ backgroundColor: "rgba(0,133,132,0.08)", color: "rgb(0,133,132)" }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[#0d1b2a] font-semibold text-sm">{featured.author}</p>
                      <p className="text-[#9ca3af] text-xs">{featured.authorRole}</p>
                    </div>
                    <div
                      className="flex items-center gap-1.5 font-semibold text-sm group-hover:gap-2.5 transition-all duration-200"
                      style={{ color: "rgb(0,133,132)" }}
                    >
                      Leer artículo <ArrowUpRight size={15} />
                    </div>
                  </div>
                </div>
              </Link>
            </FadeIn>

            {/* Rest of articles */}
            {rest.length > 0 && (
              <FadeInStagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" stagger={0.07}>
                {rest.map((article) => (
                  <FadeInItem key={article.id}>
                    <Link
                      to={`/blog/${article.slug}`}
                      className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-black/7 hover:shadow-lg hover:shadow-black/7 hover:-translate-y-1 transition-all duration-300 h-full"
                    >
                      <div className="relative aspect-[16/9] overflow-hidden bg-[#e5e7eb]">
                        <ImageWithFallback
                          src={article.image}
                          alt={article.title}
                          className="w-full h-full object-cover absolute inset-0 group-hover:scale-105 transition-transform duration-700"
                        />
                        <span
                          className="absolute top-4 left-4 text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full text-white"
                          style={{ backgroundColor: "rgba(0,133,132,0.9)" }}
                        >
                          {article.category}
                        </span>
                      </div>
                      <div className="p-6 flex flex-col flex-1">
                        <div className="flex items-center gap-2 text-[#9ca3af] text-xs mb-3">
                          <Clock size={10} />
                          <span>{article.readTime}</span>
                          <span>·</span>
                          <span>{article.date}</span>
                        </div>
                        <h3 className="text-[#0d1b2a] font-bold text-base leading-snug mb-2 line-clamp-3 flex-1">
                          {article.title}
                        </h3>
                        <p className="text-[#6b7280] text-[13px] leading-relaxed line-clamp-2 mb-5">{article.excerpt}</p>
                        <div className="flex items-center justify-between pt-4 border-t border-black/5">
                          <p className="text-[#374151] text-xs font-medium">{article.author}</p>
                          <ArrowUpRight
                            size={15}
                            className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                            style={{ color: "rgb(0,133,132)" }}
                          />
                        </div>
                      </div>
                    </Link>
                  </FadeInItem>
                ))}
              </FadeInStagger>
            )}
          </>
        )}

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="text-[#9ca3af] text-lg">No hay artículos en esta categoría por el momento.</p>
          </div>
        )}
      </div>

      {/* Bottom CTA */}
      <div className="bg-[#f8f9fb] border-t border-black/5">
        <FadeIn className="max-w-7xl mx-auto px-6 lg:px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-[#0d1b2a] font-bold text-xl mb-1">¿Tiene alguna duda sobre su salud?</h3>
            <p className="text-[#6b7280] text-sm">Consulte con nuestros especialistas. Estamos disponibles de lunes a sábado.</p>
          </div>
          <div className="flex gap-3 shrink-0">
            <Link
              to="/"
              className="px-5 py-2.5 rounded-xl border border-black/10 text-[#374151] font-medium text-sm hover:border-[rgb(0,133,132)] hover:text-[rgb(0,133,132)] transition-all"
            >
              Volver al Inicio
            </Link>
            <Link
              to="/#citas"
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

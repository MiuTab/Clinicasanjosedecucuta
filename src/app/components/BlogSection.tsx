import { ArrowUpRight, Clock } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { FadeIn, FadeInStagger, FadeInItem } from "./FadeIn";

const articles = [
  {
    id: 1,
    category: "Cardiología",
    title: "Factores de riesgo cardiovascular: lo que debe saber para proteger su corazón",
    excerpt:
      "La enfermedad cardiovascular sigue siendo la principal causa de mortalidad en Colombia. Conozca los factores modificables y cómo la detección temprana puede salvar su vida.",
    readTime: "5 min",
    date: "12 May 2026",
    image: "https://images.unsplash.com/photo-1579684453423-f84349ef60b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    featured: true,
  },
  {
    id: 2,
    category: "Oncología",
    title: "Detección temprana del cáncer: guía de chequeos preventivos por edad",
    excerpt:
      "Los programas de tamizaje y diagnóstico temprano aumentan significativamente las posibilidades de curación. Descubra cuáles exámenes debe realizarse según su etapa de vida.",
    readTime: "4 min",
    date: "8 May 2026",
    image: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    featured: false,
  },
  {
    id: 3,
    category: "Maternidad",
    title: "Parto humanizado: una experiencia centrada en la madre y el bebé",
    excerpt:
      "El modelo de parto humanizado respeta los tiempos fisiológicos del nacimiento y prioriza el bienestar emocional de la madre. Conozca nuestro programa de maternidad.",
    readTime: "3 min",
    date: "3 May 2026",
    image: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    featured: false,
  },
];

export function BlogSection() {
  const [featured, ...rest] = articles;

  return (
    <section id="blog" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeIn className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-10 bg-[rgb(0,133,132)]" />
              <span className="text-[rgb(0,133,132)] text-xs font-semibold uppercase tracking-[0.2em]">
                Blog · Artículos Médicos
              </span>
            </div>
            <h2
              className="text-[#0d1b2a] leading-tight"
              style={{ fontSize: "clamp(1.9rem, 3.5vw, 2.75rem)", fontWeight: 700 }}
            >
              Conocimiento al<br />servicio de su salud.
            </h2>
          </div>
          <a
            href="#blog"
            className="flex items-center gap-2 text-[rgb(0,133,132)] font-semibold text-sm hover:gap-3 transition-all duration-200 shrink-0"
          >
            Ver todos los artículos <ArrowUpRight size={16} />
          </a>
        </FadeIn>

        <div className="grid lg:grid-cols-5 gap-5">
          {/* Featured article */}
          <FadeIn direction="left" className="lg:col-span-3">
          <a
            href="#blog"
            className="group relative rounded-2xl overflow-hidden min-h-[360px] flex flex-col cursor-pointer w-full h-full relative rounded-2xl overflow-hidden min-h-[360px] flex flex-col cursor-pointer"
          >
            <ImageWithFallback
              src={featured.image}
              alt={featured.title}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b2a]/90 via-[#0d1b2a]/40 to-transparent" />
            <div className="relative mt-auto p-8">
              <span
                className="inline-block text-[10px] font-semibold uppercase tracking-wider mb-3 px-2.5 py-1 rounded-full"
                style={{ backgroundColor: "rgba(0,133,132,0.9)", color: "white" }}
              >
                {featured.category}
              </span>
              <h3 className="text-white font-bold text-xl leading-snug mb-3">{featured.title}</h3>
              <p className="text-white/65 text-sm leading-relaxed mb-4 line-clamp-2">{featured.excerpt}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 text-white/45 text-xs">
                  <Clock size={11} />
                  <span>{featured.readTime} de lectura</span>
                  <span>·</span>
                  <span>{featured.date}</span>
                </div>
                <div className="flex items-center gap-1.5 text-[rgb(0,165,164)] text-sm font-semibold group-hover:gap-2.5 transition-all duration-200">
                  Leer <ArrowUpRight size={14} />
                </div>
              </div>
            </div>
          </a>
          </FadeIn>

          {/* Side articles */}
          <FadeInStagger className="lg:col-span-2 flex flex-col gap-5" delay={0.12}>
            {rest.map((article) => (
              <FadeInItem key={article.id}>
              <a
                href="#blog"
                className="group flex gap-4 bg-[#f8f9fb] rounded-2xl overflow-hidden border border-black/5 hover:shadow-md hover:shadow-black/5 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
              >
                <div className="relative w-28 shrink-0 overflow-hidden">
                  <ImageWithFallback
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover absolute inset-0 group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-4 flex flex-col justify-center">
                  <span className="text-[rgb(0,133,132)] text-[10px] font-semibold uppercase tracking-wider mb-2">
                    {article.category}
                  </span>
                  <h3 className="text-[#0d1b2a] font-semibold text-sm leading-snug mb-2 line-clamp-3">{article.title}</h3>
                  <div className="flex items-center gap-2 text-[#9ca3af] text-[11px]">
                    <Clock size={10} />
                    <span>{article.readTime}</span>
                    <span>·</span>
                    <span>{article.date}</span>
                  </div>
                </div>
              </a>
              </FadeInItem>
            ))}

            {/* CTA card */}
            <div
              className="rounded-2xl p-6 flex flex-col justify-between"
              style={{ backgroundColor: "rgb(0,133,132)" }}
            >
              <div>
                <h4 className="text-white font-bold text-base mb-2">Suscríbase a nuestro boletín de salud</h4>
                <p className="text-white/65 text-xs leading-relaxed mb-4">
                  Reciba artículos médicos, noticias y consejos de prevención directamente en su correo.
                </p>
              </div>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Su correo electrónico"
                  className="flex-1 px-3 py-2 rounded-lg bg-white/15 text-white placeholder:text-white/45 text-xs border border-white/20 focus:outline-none focus:border-white/50 transition-colors"
                />
                <button className="px-3 py-2 rounded-lg bg-white text-[rgb(0,133,132)] text-xs font-semibold hover:bg-white/90 transition-colors shrink-0">
                  Suscribir
                </button>
              </div>
            </div>
          </FadeInStagger>
        </div>
      </div>
    </section>
  );
}

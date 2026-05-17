import { useState } from "react";
import { Link } from "react-router";
import {
  ChevronRight,
  ArrowUpRight,
  X,
  MapPin,
  Clock,
  Briefcase,
  AlertCircle,
  CheckCircle2,
  Star,
  Calendar,
  Users,
  Heart,
  Shield,
  BookOpen,
} from "lucide-react";
import { FadeIn, FadeInStagger, FadeInItem } from "../components/FadeIn";
import { jobPostings, JobPosting } from "../data/careersData";

const allDepartments = ["Todos", ...Array.from(new Set(jobPostings.map((j) => j.department)))];

const typeColors: Record<string, { bg: string; text: string }> = {
  "Tiempo Completo": { bg: "rgba(0,133,132,0.08)", text: "rgb(0,133,132)" },
  "Turno Rotativo": { bg: "rgba(13,27,42,0.07)", text: "#374151" },
  "Medio Tiempo": { bg: "rgba(245,158,11,0.1)", text: "#b45309" },
  Contrato: { bg: "rgba(99,102,241,0.1)", text: "#4f46e5" },
};

const benefits = [
  {
    icon: <Heart size={20} />,
    title: "Bienestar integral",
    desc: "Programa de bienestar laboral con actividades de salud física y mental para todos los colaboradores.",
  },
  {
    icon: <BookOpen size={20} />,
    title: "Formación continua",
    desc: "Acceso a cursos, diplomados y congresos médicos con cofinanciación institucional.",
  },
  {
    icon: <Shield size={20} />,
    title: "Estabilidad y prestaciones",
    desc: "Contratos directos con todas las prestaciones de ley, seguridad social y prima extralegal.",
  },
  {
    icon: <Users size={20} />,
    title: "Equipo multidisciplinario",
    desc: "Trabajo con especialistas de alto nivel en un entorno de referencia regional.",
  },
];

function TypeBadge({ type }: { type: JobPosting["type"] }) {
  const c = typeColors[type] ?? { bg: "rgba(0,133,132,0.08)", text: "rgb(0,133,132)" };
  return (
    <span
      className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full"
      style={{ backgroundColor: c.bg, color: c.text }}
    >
      {type}
    </span>
  );
}

function ApplicationModal({ job, onClose }: { job: JobPosting; onClose: () => void }) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(13,27,42,0.65)", backdropFilter: "blur(4px)" }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden">
        {/* Header */}
        <div className="flex items-start justify-between p-7 pb-5 border-b border-black/6">
          <div className="flex-1 pr-4">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <TypeBadge type={job.type} />
              {job.urgent && (
                <span className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full text-white" style={{ backgroundColor: "rgb(220,38,38)" }}>
                  Urgente
                </span>
              )}
            </div>
            <h3 className="text-[#0d1b2a] font-bold text-lg leading-tight">{job.title}</h3>
            <p className="text-[#6b7280] text-sm mt-0.5">{job.area} · {job.department}</p>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-xl flex items-center justify-center hover:bg-[#f3f4f6] transition-colors text-[#9ca3af] shrink-0"
          >
            <X size={18} />
          </button>
        </div>

        <div className="p-7 overflow-y-auto" style={{ maxHeight: "calc(100vh - 200px)" }}>
          {submitted ? (
            <div className="py-8 text-center">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5"
                style={{ backgroundColor: "rgba(0,133,132,0.1)" }}
              >
                <CheckCircle2 size={32} style={{ color: "rgb(0,133,132)" }} />
              </div>
              <h4 className="text-[#0d1b2a] font-bold text-xl mb-2">Postulación enviada</h4>
              <p className="text-[#6b7280] text-sm leading-relaxed">
                Hemos recibido su hoja de vida. El equipo de Talento Humano revisará su perfil y se pondrá en contacto con usted si cumple los requisitos de la vacante.
              </p>
              <button
                onClick={onClose}
                className="mt-6 px-6 py-2.5 rounded-xl text-white text-sm font-semibold transition-all hover:opacity-90"
                style={{ backgroundColor: "rgb(0,133,132)" }}
              >
                Cerrar
              </button>
            </div>
          ) : (
            <>
              <p className="text-[#4b5563] text-sm leading-relaxed mb-6">{job.description}</p>

              <div className="mb-6">
                <p className="text-[#0d1b2a] font-semibold text-sm mb-3">Requisitos</p>
                <ul className="space-y-2">
                  {job.requirements.map((r, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-[13px] text-[#4b5563]">
                      <CheckCircle2 size={14} className="mt-0.5 shrink-0" style={{ color: "rgb(0,133,132)" }} />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>

              {job.salary && (
                <div className="mb-6 p-4 rounded-xl" style={{ backgroundColor: "rgba(0,133,132,0.06)" }}>
                  <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: "rgb(0,133,132)" }}>Salario</p>
                  <p className="text-[#0d1b2a] font-semibold text-sm">{job.salary}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="pt-2 pb-1">
                  <p className="text-[#0d1b2a] font-semibold text-sm mb-4">Enviar hoja de vida</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-[11px] font-semibold uppercase tracking-wide text-[#6b7280] block mb-1.5">Nombre completo</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-black/10 text-sm text-[#0d1b2a] focus:outline-none focus:ring-2 focus:border-transparent"
                      style={{ "--tw-ring-color": "rgb(0,133,132)" } as React.CSSProperties}
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-semibold uppercase tracking-wide text-[#6b7280] block mb-1.5">Teléfono</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-black/10 text-sm text-[#0d1b2a] focus:outline-none focus:ring-2 focus:border-transparent"
                      style={{ "--tw-ring-color": "rgb(0,133,132)" } as React.CSSProperties}
                    />
                  </div>
                </div>
                <div>
                  <label className="text-[11px] font-semibold uppercase tracking-wide text-[#6b7280] block mb-1.5">Correo electrónico</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-black/10 text-sm text-[#0d1b2a] focus:outline-none focus:ring-2 focus:border-transparent"
                    style={{ "--tw-ring-color": "rgb(0,133,132)" } as React.CSSProperties}
                  />
                </div>
                <div>
                  <label className="text-[11px] font-semibold uppercase tracking-wide text-[#6b7280] block mb-1.5">Mensaje adicional (opcional)</label>
                  <textarea
                    rows={3}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Indique cualquier información relevante sobre su perfil..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-black/10 text-sm text-[#0d1b2a] resize-none focus:outline-none focus:ring-2 focus:border-transparent"
                    style={{ "--tw-ring-color": "rgb(0,133,132)" } as React.CSSProperties}
                  />
                </div>
                <div className="flex items-center gap-3 pt-1">
                  <button
                    type="button"
                    onClick={onClose}
                    className="flex-1 py-2.5 rounded-xl border border-black/10 text-sm font-medium text-[#374151] hover:border-black/20 transition-all"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-2.5 rounded-xl text-white text-sm font-semibold transition-all hover:opacity-90"
                    style={{ backgroundColor: "rgb(0,133,132)" }}
                  >
                    Enviar postulación
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export function CareersPage() {
  const [activeDepartment, setActiveDepartment] = useState("Todos");
  const [selectedJob, setSelectedJob] = useState<JobPosting | null>(null);

  const filtered =
    activeDepartment === "Todos"
      ? jobPostings
      : jobPostings.filter((j) => j.department === activeDepartment);

  const featured = jobPostings.find((j) => j.featured) ?? filtered[0];
  const rest = filtered.filter((j) => j.id !== featured?.id);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section
        className="relative w-full min-h-[44vh] flex items-end overflow-hidden"
        style={{ backgroundColor: "#0d1b2a" }}
      >
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
            <span className="text-white/80">Trabaje con Nosotros</span>
          </nav>

          <span
            className="inline-block text-[10px] font-semibold uppercase tracking-[0.2em] px-3 py-1.5 rounded-full text-white mb-5"
            style={{ backgroundColor: "rgba(0,133,132,0.85)" }}
          >
            Oportunidades de Empleo
          </span>

          <h1
            className="text-white mb-4 leading-tight"
            style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 700, lineHeight: 1.05 }}
          >
            Construya su carrera<br />donde la salud importa.
          </h1>
          <p className="text-white/60 text-lg max-w-2xl leading-relaxed">
            Únase al equipo de Clínica San José de Cúcuta, institución de tercer nivel con más de 35 años al servicio de la región.
          </p>

          <div className="flex flex-wrap gap-6 mt-8">
            <div className="flex items-center gap-2 text-white/50 text-sm">
              <Briefcase size={14} style={{ color: "rgb(0,133,132)" }} />
              <span>{jobPostings.length} vacantes activas</span>
            </div>
            <div className="flex items-center gap-2 text-white/50 text-sm">
              <AlertCircle size={14} style={{ color: "rgb(220,38,38)" }} />
              <span>{jobPostings.filter((j) => j.urgent).length} posiciones urgentes</span>
            </div>
            <div className="flex items-center gap-2 text-white/50 text-sm">
              <MapPin size={14} style={{ color: "rgb(0,133,132)" }} />
              <span>Cúcuta, Norte de Santander</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main body */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">

        {/* Department filter */}
        <FadeIn className="flex flex-wrap gap-2 mb-12">
          {allDepartments.map((dept) => (
            <button
              key={dept}
              onClick={() => setActiveDepartment(dept)}
              className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wide transition-all duration-200 ${
                activeDepartment === dept
                  ? "text-white"
                  : "bg-[#f8f9fb] text-[#6b7280] hover:bg-[#f0f1f3] border border-black/7"
              }`}
              style={activeDepartment === dept ? { backgroundColor: "rgb(0,133,132)" } : {}}
            >
              {dept}
            </button>
          ))}
        </FadeIn>

        {/* Featured job card */}
        {featured && activeDepartment === "Todos" && (
          <FadeIn className="mb-12">
            <button
              onClick={() => setSelectedJob(featured)}
              className="group w-full text-left grid lg:grid-cols-5 rounded-2xl overflow-hidden border border-black/7 hover:shadow-xl hover:shadow-black/8 transition-all duration-300 bg-white"
            >
              {/* Left panel — dark with pattern */}
              <div
                className="lg:col-span-2 relative min-h-[220px] p-8 flex flex-col justify-between"
                style={{ backgroundColor: "#0d1b2a" }}
              >
                <div
                  className="absolute inset-0 overflow-hidden"
                  style={{
                    backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.07) 1px, transparent 0)",
                    backgroundSize: "24px 24px",
                  }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1516841273335-e39b37888115?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=800"
                    alt=""
                    className="w-full h-full object-cover opacity-[0.18] group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="relative z-10">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <TypeBadge type={featured.type} />
                    {featured.urgent && (
                      <span className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full text-white" style={{ backgroundColor: "rgb(220,38,38)" }}>
                        Urgente
                      </span>
                    )}
                    <span className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full text-white" style={{ backgroundColor: "rgba(0,133,132,0.7)" }}>
                      Destacada
                    </span>
                  </div>
                  <p className="text-white/50 text-xs uppercase tracking-wider mb-2">{featured.department}</p>
                  <h2
                    className="text-white leading-snug"
                    style={{ fontSize: "clamp(1.1rem, 2vw, 1.35rem)", fontWeight: 700 }}
                  >
                    {featured.title}
                  </h2>
                </div>
                <div className="relative z-10 flex items-center gap-3 mt-6">
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: "rgba(0,133,132,0.3)" }}
                  >
                    <Star size={16} style={{ color: "rgb(0,133,132)" }} />
                  </div>
                  <div>
                    <p className="text-white/80 text-xs font-semibold">{featured.area}</p>
                    <p className="text-white/40 text-[11px]">Cierre: {featured.closing}</p>
                  </div>
                </div>
              </div>

              {/* Right panel */}
              <div className="lg:col-span-3 p-8 flex flex-col justify-between">
                <div>
                  <p className="text-[#4b5563] text-sm leading-relaxed mb-5">{featured.description}</p>
                  <div className="mb-5">
                    <p className="text-[#0d1b2a] font-semibold text-xs uppercase tracking-wider mb-3">Requisitos clave</p>
                    <ul className="space-y-2">
                      {featured.requirements.slice(0, 3).map((r, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-[13px] text-[#4b5563]">
                          <CheckCircle2 size={13} className="mt-0.5 shrink-0" style={{ color: "rgb(0,133,132)" }} />
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {featured.salary && (
                    <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm" style={{ backgroundColor: "rgba(0,133,132,0.07)", color: "rgb(0,133,132)" }}>
                      <span className="font-semibold text-xs">Salario:</span>
                      <span className="text-xs">{featured.salary}</span>
                    </div>
                  )}
                </div>
                <div className="flex items-center justify-between pt-6 border-t border-black/6 mt-6">
                  <div className="flex items-center gap-3 text-[#9ca3af] text-xs">
                    <Calendar size={12} />
                    <span>Cierre: {featured.closing}</span>
                  </div>
                  <div
                    className="flex items-center gap-1.5 font-semibold text-sm group-hover:gap-2.5 transition-all duration-200"
                    style={{ color: "rgb(0,133,132)" }}
                  >
                    Ver y postularse <ArrowUpRight size={15} />
                  </div>
                </div>
              </div>
            </button>
          </FadeIn>
        )}

        {/* Job grid */}
        {rest.length > 0 && (
          <FadeInStagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5" stagger={0.06}>
            {rest.map((job) => (
              <FadeInItem key={job.id}>
                <button
                  onClick={() => setSelectedJob(job)}
                  className="group w-full text-left flex flex-col bg-white rounded-2xl overflow-hidden border border-black/7 hover:shadow-lg hover:shadow-black/7 hover:-translate-y-1 transition-all duration-300 h-full"
                >
                  {/* Card top accent */}
                  <div
                    className="h-1.5 w-full"
                    style={{ backgroundColor: job.urgent ? "rgb(220,38,38)" : "rgb(0,133,132)" }}
                  />
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <TypeBadge type={job.type} />
                      {job.urgent && (
                        <span className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full text-white" style={{ backgroundColor: "rgb(220,38,38)" }}>
                          Urgente
                        </span>
                      )}
                    </div>

                    <p className="text-[#9ca3af] text-[11px] font-semibold uppercase tracking-wider mb-1.5">{job.department}</p>
                    <h3 className="text-[#0d1b2a] font-bold text-base leading-snug mb-1.5 flex-1">{job.title}</h3>
                    <p className="text-[#6b7280] text-xs mb-4">{job.area}</p>

                    <p className="text-[#6b7280] text-[13px] leading-relaxed line-clamp-2 mb-4">{job.description}</p>

                    <ul className="space-y-1.5 mb-5">
                      {job.requirements.slice(0, 2).map((r, i) => (
                        <li key={i} className="flex items-start gap-2 text-[12px] text-[#6b7280]">
                          <CheckCircle2 size={12} className="mt-0.5 shrink-0" style={{ color: "rgb(0,133,132)" }} />
                          <span className="line-clamp-1">{r}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="pt-4 border-t border-black/5 flex items-center justify-between">
                      <div className="flex items-center gap-1.5 text-[#9ca3af] text-xs">
                        <Clock size={11} />
                        <span>Cierre: {job.closing}</span>
                      </div>
                      <div
                        className="flex items-center gap-1 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                        style={{ color: "rgb(0,133,132)" }}
                      >
                        Postularse <ArrowUpRight size={13} />
                      </div>
                    </div>
                  </div>
                </button>
              </FadeInItem>
            ))}
          </FadeInStagger>
        )}

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="text-[#9ca3af] text-lg">No hay vacantes en este departamento por el momento.</p>
          </div>
        )}

        {/* Spontaneous application CTA */}
        <FadeIn className="mt-14">
          <div className="rounded-2xl border border-dashed border-[rgb(0,133,132)]/30 p-8 flex flex-col md:flex-row items-center justify-between gap-6" style={{ backgroundColor: "rgba(0,133,132,0.03)" }}>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] mb-2" style={{ color: "rgb(0,133,132)" }}>
                Hoja de Vida Espontánea
              </p>
              <h4 className="text-[#0d1b2a] font-bold text-lg mb-1">¿No encontró su perfil?</h4>
              <p className="text-[#6b7280] text-sm">
                Envíenos su hoja de vida. La conservamos en nuestra base de datos de talento humano para futuras vacantes.
              </p>
            </div>
            <button
              onClick={() => setSelectedJob({
                id: 0,
                department: "General",
                title: "Postulación Espontánea",
                type: "Tiempo Completo",
                area: "Talento Humano",
                description: "Envíenos su hoja de vida para que la tengamos en cuenta en futuras vacantes que se ajusten a su perfil profesional.",
                requirements: [],
                closing: "Permanente",
              })}
              className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-semibold text-sm transition-all hover:opacity-90"
              style={{ backgroundColor: "rgb(0,133,132)" }}
            >
              Enviar hoja de vida <ArrowUpRight size={15} />
            </button>
          </div>
        </FadeIn>
      </div>

      {/* Benefits section */}
      <section className="bg-[#f8f9fb] border-t border-black/5 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn className="mb-12">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-10" style={{ backgroundColor: "rgb(0,133,132)" }} />
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em]" style={{ color: "rgb(0,133,132)" }}>
                ¿Por qué elegirnos?
              </span>
            </div>
            <h2 className="text-[#0d1b2a] leading-tight" style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 700 }}>
              Beneficios para nuestros<br />colaboradores.
            </h2>
          </FadeIn>

          <FadeInStagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5" stagger={0.07}>
            {benefits.map((b) => (
              <FadeInItem key={b.title}>
                <div className="bg-white p-6 rounded-2xl border border-black/6 h-full">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                    style={{ backgroundColor: "rgba(0,133,132,0.08)", color: "rgb(0,133,132)" }}
                  >
                    {b.icon}
                  </div>
                  <h4 className="text-[#0d1b2a] font-bold text-sm mb-2">{b.title}</h4>
                  <p className="text-[#6b7280] text-[13px] leading-relaxed">{b.desc}</p>
                </div>
              </FadeInItem>
            ))}
          </FadeInStagger>
        </div>
      </section>

      {/* Bottom CTA */}
      <div className="border-t border-black/5">
        <FadeIn className="max-w-7xl mx-auto px-6 lg:px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-[#0d1b2a] font-bold text-xl mb-1">¿Tiene preguntas sobre las vacantes?</h3>
            <p className="text-[#6b7280] text-sm">Contáctese con Talento Humano: <span style={{ color: "rgb(0,133,132)" }}>talentohumano@clinicasanjose.com.co</span></p>
          </div>
          <div className="flex gap-3 shrink-0">
            <Link
              to="/"
              className="px-5 py-2.5 rounded-xl border border-black/10 text-[#374151] font-medium text-sm hover:border-[rgb(0,133,132)] hover:text-[rgb(0,133,132)] transition-all"
            >
              Volver al Inicio
            </Link>
            <a
              href="mailto:talentohumano@clinicasanjose.com.co"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-white font-semibold text-sm transition-all hover:opacity-90"
              style={{ backgroundColor: "rgb(0,133,132)" }}
            >
              Contactar RRHH <ArrowUpRight size={14} />
            </a>
          </div>
        </FadeIn>
      </div>

      {/* Application modal */}
      {selectedJob && (
        <ApplicationModal job={selectedJob} onClose={() => setSelectedJob(null)} />
      )}
    </div>
  );
}

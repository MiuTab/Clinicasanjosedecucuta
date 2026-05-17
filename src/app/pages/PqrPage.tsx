import { useState } from "react";
import { Link } from "react-router";
import {
  ChevronRight,
  ChevronDown,
  FileText,
  AlertCircle,
  RotateCcw,
  Lightbulb,
  MapPin,
  Phone,
  Mail,
  Clock,
  CheckCircle2,
  Send,
  ArrowUpRight,
} from "lucide-react";
import { FadeIn, FadeInStagger, FadeInItem } from "../components/FadeIn";

const pqrTypes = [
  {
    icon: <FileText size={22} />,
    label: "Petición",
    color: "bg-[rgb(0,133,132)]",
    desc: "Solicitud de información, documentos, historias clínicas, certificados médicos o cualquier trámite administrativo relacionado con su atención.",
    examples: ["Copia de historia clínica", "Certificado de atención médica", "Información sobre facturación", "Estado de cuenta de servicios"],
  },
  {
    icon: <AlertCircle size={22} />,
    label: "Queja",
    color: "bg-[#0d1b2a]",
    desc: "Manifestación de inconformidad por la calidad de la atención recibida, el trato del personal asistencial o administrativo, o las condiciones de las instalaciones.",
    examples: ["Trato inadecuado por parte del personal", "Demoras injustificadas en la atención", "Deficiencias en instalaciones", "Incumplimiento de protocolos"],
  },
  {
    icon: <RotateCcw size={22} />,
    label: "Reclamo",
    color: "bg-[#374151]",
    desc: "Inconformidad relacionada con cobros indebidos, errores en la facturación, servicios no prestados que fueron cobrados o incumplimiento de obligaciones contractuales.",
    examples: ["Cobro de servicios no prestados", "Error en liquidación de cuenta", "Incumplimiento de convenio o contrato", "Reembolso de pagos en exceso"],
  },
  {
    icon: <Lightbulb size={22} />,
    label: "Sugerencia",
    color: "bg-[rgb(0,133,132)]",
    desc: "Propuesta orientada a mejorar la calidad de nuestros servicios, la atención al paciente, los procesos internos o cualquier aspecto de la institución.",
    examples: ["Mejoras en tiempos de espera", "Nuevos servicios o especialidades", "Mejoras en señalización y acceso", "Iniciativas de humanización"],
  },
];

const channels = [
  {
    icon: <MapPin size={20} className="text-[rgb(0,133,132)]" />,
    title: "Presencial",
    lines: ["Oficina de Atención al Usuario", "Calle 13 #1E-74, Los Caobos, Cúcuta", "Lunes a viernes: 7:00 AM – 5:00 PM", "Sábados: 7:00 AM – 12:00 PM"],
  },
  {
    icon: <Phone size={20} className="text-[rgb(0,133,132)]" />,
    title: "Teléfono y WhatsApp",
    lines: ["(607) 5895053 ext. 120", "WhatsApp: 318 322 8286", "Lunes a sábado: 7:00 AM – 6:00 PM"],
  },
  {
    icon: <Mail size={20} className="text-[rgb(0,133,132)]" />,
    title: "Correo Electrónico",
    lines: ["pqr@clinicasanjose.com.co", "atencionalusuario@clinicasanjose.com.co", "Respuesta en máximo 2 días hábiles"],
  },
  {
    icon: <Clock size={20} className="text-[rgb(0,133,132)]" />,
    title: "Tiempos de Respuesta",
    lines: ["Petición de información: 10 días hábiles", "Petición de interés particular: 15 días hábiles", "Queja o Reclamo: 15 días hábiles", "Consulta: 30 días calendario"],
  },
];

const faqs = [
  {
    q: "¿Qué es el sistema PQRS y por qué es importante?",
    a: "El sistema de Peticiones, Quejas, Reclamos y Sugerencias (PQRS) es el mecanismo formal mediante el cual los pacientes, familiares y usuarios pueden comunicarse con la institución para solicitar información, manifestar inconformidades o proponer mejoras. En Colombia está regulado por la Ley 1755 de 2015 y es un derecho fundamental de todo ciudadano. Para la Clínica San José de Cúcuta, este sistema es una herramienta clave de mejora continua y de garantía de los derechos de los usuarios.",
  },
  {
    q: "¿Cuáles son los tiempos legales de respuesta?",
    a: "De acuerdo con la Ley 1755 de 2015, los tiempos máximos de respuesta son: peticiones de información o documentos, 10 días hábiles; peticiones de interés particular, 15 días hábiles; consultas a autoridades o expertos, 30 días calendario. Cuando no sea posible responder en el término establecido, la institución deberá informar al usuario las razones de la demora y señalar el plazo en que se dará respuesta, que no podrá exceder el doble del inicialmente previsto.",
  },
  {
    q: "¿Cómo puedo hacer seguimiento a mi PQRS?",
    a: "Al momento de radicar su PQRS, ya sea de forma presencial, telefónica o por correo electrónico, recibirá un número de radicado único. Con este número podrá consultar el estado de su solicitud comunicándose con nuestra Oficina de Atención al Usuario al teléfono (607) 5895053 ext. 120 o al correo pqr@clinicasanjose.com.co. También puede acercarse personalmente a la oficina en el horario de atención.",
  },
  {
    q: "¿Puedo presentar una PQRS de forma anónima?",
    a: "Sí, puede presentar quejas o sugerencias de forma anónima. Sin embargo, tenga en cuenta que si no proporciona sus datos de contacto, la institución no podrá enviarle una respuesta personalizada ni hacer seguimiento al caso. Para peticiones y reclamos que requieran una respuesta formal, la ley exige que el solicitante se identifique. En todos los casos, sus datos serán tratados con total confidencialidad conforme a la Ley 1581 de 2012 de Protección de Datos Personales.",
  },
  {
    q: "¿Cómo puedo solicitar una copia de mi historia clínica?",
    a: "La historia clínica es un documento de propiedad del paciente y puede solicitarla mediante una Petición formal. Debe presentarse con documento de identidad original en la Oficina de Atención al Usuario. Si actúa en nombre de un tercero, deberá presentar poder notariado o autorización expresa del titular. El plazo de entrega es de 10 días hábiles desde la radicación. En caso de urgencia debidamente justificada, se gestionará con mayor celeridad.",
  },
  {
    q: "¿Qué hago si no estoy satisfecho con la respuesta recibida?",
    a: "Si considera que la respuesta no resolvió su solicitud o no está de acuerdo con ella, tiene derecho a interponer un recurso de reposición ante la misma institución dentro de los 10 días hábiles siguientes a la notificación. Adicionalmente, puede acudir a la Superintendencia Nacional de Salud (línea gratuita 01 8000 513 700) o a la Personería Municipal de Cúcuta. En casos de vulneración de derechos, puede instaurar una acción de tutela ante los juzgados competentes.",
  },
  {
    q: "¿Cuáles son mis derechos como paciente en Colombia?",
    a: "Los derechos de los pacientes en Colombia están consagrados en la Resolución 13437 de 1991 del Ministerio de Salud y en la Ley 1751 de 2015 (Ley Estatutaria de Salud). Entre los principales derechos se encuentran: recibir atención oportuna, digna y de calidad; ser informado sobre su diagnóstico y opciones de tratamiento; obtener una segunda opinión médica; recibir atención de urgencias sin condicionamientos económicos; conocer el costo de los servicios antes de recibirlos; mantener la confidencialidad de su información médica; y presentar quejas y reclamos sin que esto afecte su atención.",
  },
  {
    q: "¿Existe algún costo por presentar una PQRS?",
    a: "No. La presentación de Peticiones, Quejas, Reclamos y Sugerencias es completamente gratuita y es un derecho reconocido por la ley colombiana. Ninguna entidad puede cobrar por recibir, tramitar o responder una PQRS. Si en algún momento se le exige algún pago para gestionar su solicitud, le pedimos reportarlo inmediatamente a nuestra Dirección General.",
  },
];

const emptyForm = { tipo: "", nombre: "", identificacion: "", email: "", telefono: "", asunto: "", descripcion: "", anonimo: false };

export function PqrPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [form, setForm] = useState(emptyForm);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setForm(emptyForm);
    setTimeout(() => setSubmitted(false), 6000);
  };

  return (
    <div className="min-h-screen bg-white">

      {/* Hero */}
      <section className="relative w-full min-h-[44vh] flex items-end overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{ backgroundColor: "#0d1b2a" }}
        />
        <div
          className="absolute inset-0 opacity-[0.06]"
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
            <span className="text-white/80">Peticiones, Quejas y Reclamos</span>
          </nav>

          <span
            className="inline-block text-[10px] font-semibold uppercase tracking-[0.2em] px-3 py-1.5 rounded-full text-white mb-5"
            style={{ backgroundColor: "rgba(0,133,132,0.85)" }}
          >
            Atención al Usuario
          </span>

          <h1
            className="text-white mb-4 leading-tight"
            style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 700, lineHeight: 1.05 }}
          >
            Peticiones, Quejas,<br />Reclamos y Sugerencias
          </h1>

          <p className="text-white/65 text-lg max-w-2xl leading-relaxed">
            Su opinión es fundamental para mejorar continuamente la calidad de nuestra atención. Escuchamos cada voz con la atención que merece.
          </p>
        </div>
      </section>

      {/* Body */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">

        {/* Intro card */}
        <FadeIn>
        <div
          className="mb-14 p-7 lg:p-9 rounded-2xl border-l-4 flex gap-5"
          style={{ backgroundColor: "rgba(0,133,132,0.05)", borderLeftColor: "rgb(0,133,132)" }}
        >
          <p className="text-[#374151] text-[17px] leading-relaxed">
            La Clínica San José de Cúcuta garantiza a todos sus pacientes, familiares y usuarios el derecho a presentar peticiones, quejas, reclamos y sugerencias de manera libre, ágil y respetuosa. Este sistema está regulado por la Ley 1755 de 2015 y es parte de nuestro compromiso institucional con la humanización de la salud y la mejora continua de nuestros servicios.
          </p>
        </div>
        </FadeIn>

        {/* PQR Types */}
        <FadeIn className="mb-5">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-8" style={{ backgroundColor: "rgb(0,133,132)" }} />
            <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "rgb(0,133,132)" }}>
              Tipos de Solicitud
            </span>
          </div>
        </FadeIn>
        <FadeInStagger className="grid sm:grid-cols-2 gap-5 mb-16" stagger={0.08}>
          {pqrTypes.map((type) => (
            <FadeInItem key={type.label}>
            <div className="p-6 rounded-2xl border border-black/7 bg-[#f8f9fb] hover:shadow-lg hover:shadow-black/6 hover:-translate-y-0.5 transition-all duration-300">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-white mb-4 ${type.color}`}>
                {type.icon}
              </div>
              <h3 className="text-[#0d1b2a] font-bold text-lg mb-2">{type.label}</h3>
              <p className="text-[#4b5563] text-[14px] leading-relaxed mb-4">{type.desc}</p>
              <ul className="space-y-1.5">
                {type.examples.map((ex) => (
                  <li key={ex} className="flex items-center gap-2.5 text-[#6b7280] text-sm">
                    <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: "rgb(0,133,132)" }} />
                    {ex}
                  </li>
                ))}
              </ul>
            </div>
            </FadeInItem>
          ))}
        </FadeInStagger>

        {/* Channels + Form */}
        <div className="grid lg:grid-cols-5 gap-10 mb-16">

          {/* Channels */}
          <div className="lg:col-span-2">
            <FadeIn className="flex items-center gap-3 mb-8">
              <div className="h-px w-8" style={{ backgroundColor: "rgb(0,133,132)" }} />
              <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "rgb(0,133,132)" }}>
                Canales de Atención
              </span>
            </FadeIn>
            <FadeInStagger className="flex flex-col gap-4" stagger={0.08}>
              {channels.map((ch) => (
                <FadeInItem key={ch.title}>
                <div className="bg-[#f8f9fb] rounded-2xl p-5 border border-black/6 flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white border border-black/6 flex items-center justify-center shrink-0 mt-0.5">
                    {ch.icon}
                  </div>
                  <div>
                    <p className="text-[#0d1b2a] font-semibold text-sm mb-1.5">{ch.title}</p>
                    {ch.lines.map((line, i) => (
                      <p key={i} className="text-[#6b7280] text-[13px] leading-relaxed">{line}</p>
                    ))}
                  </div>
                </div>
                </FadeInItem>
              ))}
            </FadeInStagger>
          </div>

          {/* Form */}
          <FadeIn direction="right" delay={0.1} className="lg:col-span-3">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-8" style={{ backgroundColor: "rgb(0,133,132)" }} />
              <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "rgb(0,133,132)" }}>
                Formulario en Línea
              </span>
            </div>

            <div className="bg-white rounded-2xl border border-black/7 p-8 shadow-sm">
              {submitted ? (
                <div className="text-center py-10">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5" style={{ backgroundColor: "rgba(0,133,132,0.1)" }}>
                    <CheckCircle2 size={28} style={{ color: "rgb(0,133,132)" }} />
                  </div>
                  <h3 className="text-[#0d1b2a] font-bold text-xl mb-3">Solicitud radicada con éxito</h3>
                  <p className="text-[#6b7280] text-sm leading-relaxed max-w-sm mx-auto">
                    Hemos recibido su solicitud. En los próximos 2 días hábiles recibirá un correo de confirmación con su número de radicado y los tiempos estimados de respuesta.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#374151] mb-1.5 uppercase tracking-wide">
                      Tipo de solicitud <span className="text-red-400">*</span>
                    </label>
                    <select
                      required
                      value={form.tipo}
                      onChange={(e) => setForm({ ...form, tipo: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-black/10 bg-[#f8f9fb] text-[#0d1b2a] text-sm focus:outline-none focus:ring-2 focus:ring-[rgb(0,133,132)]/30 focus:border-[rgb(0,133,132)] transition-all appearance-none"
                    >
                      <option value="">Seleccione el tipo</option>
                      <option value="peticion">Petición</option>
                      <option value="queja">Queja</option>
                      <option value="reclamo">Reclamo</option>
                      <option value="sugerencia">Sugerencia</option>
                    </select>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#374151] mb-1.5 uppercase tracking-wide">
                        Nombre completo <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        required={!form.anonimo}
                        disabled={form.anonimo}
                        placeholder="Ej: María García López"
                        value={form.nombre}
                        onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-black/10 bg-[#f8f9fb] text-[#0d1b2a] text-sm placeholder:text-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[rgb(0,133,132)]/30 focus:border-[rgb(0,133,132)] transition-all disabled:opacity-40"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#374151] mb-1.5 uppercase tracking-wide">
                        Número de identificación
                      </label>
                      <input
                        type="text"
                        disabled={form.anonimo}
                        placeholder="CC / CE / Pasaporte"
                        value={form.identificacion}
                        onChange={(e) => setForm({ ...form, identificacion: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-black/10 bg-[#f8f9fb] text-[#0d1b2a] text-sm placeholder:text-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[rgb(0,133,132)]/30 focus:border-[rgb(0,133,132)] transition-all disabled:opacity-40"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#374151] mb-1.5 uppercase tracking-wide">
                        Correo electrónico
                      </label>
                      <input
                        type="email"
                        disabled={form.anonimo}
                        placeholder="correo@ejemplo.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-black/10 bg-[#f8f9fb] text-[#0d1b2a] text-sm placeholder:text-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[rgb(0,133,132)]/30 focus:border-[rgb(0,133,132)] transition-all disabled:opacity-40"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#374151] mb-1.5 uppercase tracking-wide">
                        Teléfono de contacto
                      </label>
                      <input
                        type="tel"
                        disabled={form.anonimo}
                        placeholder="300 000 0000"
                        value={form.telefono}
                        onChange={(e) => setForm({ ...form, telefono: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-black/10 bg-[#f8f9fb] text-[#0d1b2a] text-sm placeholder:text-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[rgb(0,133,132)]/30 focus:border-[rgb(0,133,132)] transition-all disabled:opacity-40"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#374151] mb-1.5 uppercase tracking-wide">
                      Asunto <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Resuma brevemente su solicitud"
                      value={form.asunto}
                      onChange={(e) => setForm({ ...form, asunto: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-black/10 bg-[#f8f9fb] text-[#0d1b2a] text-sm placeholder:text-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[rgb(0,133,132)]/30 focus:border-[rgb(0,133,132)] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#374151] mb-1.5 uppercase tracking-wide">
                      Descripción detallada <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Describa detalladamente su solicitud: fecha de atención, servicio involucrado, personas o áreas relacionadas y los hechos relevantes."
                      value={form.descripcion}
                      onChange={(e) => setForm({ ...form, descripcion: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-black/10 bg-[#f8f9fb] text-[#0d1b2a] text-sm placeholder:text-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[rgb(0,133,132)]/30 focus:border-[rgb(0,133,132)] transition-all resize-none"
                    />
                  </div>

                  <label className="flex items-center gap-3 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={form.anonimo}
                      onChange={(e) => setForm({ ...form, anonimo: e.target.checked, nombre: "", identificacion: "", email: "", telefono: "" })}
                      className="w-4 h-4 rounded accent-[rgb(0,133,132)]"
                    />
                    <span className="text-[#6b7280] text-sm">Deseo presentar esta solicitud de forma anónima</span>
                  </label>

                  <button
                    type="submit"
                    className="mt-1 w-full flex items-center justify-center gap-2.5 py-3.5 rounded-xl text-white font-semibold text-sm transition-all duration-200 hover:opacity-90 active:scale-[0.98]"
                    style={{ backgroundColor: "rgb(0,133,132)" }}
                  >
                    <Send size={15} />
                    Radicar Solicitud
                  </button>

                  <p className="text-center text-[11px] text-[#9ca3af]">
                    Sus datos son tratados con total confidencialidad conforme a la Ley 1581 de 2012.
                  </p>
                </form>
              )}
            </div>
          </FadeIn>
        </div>

        {/* FAQ */}
        <FadeIn className="flex items-center gap-3 mb-8">
          <div className="h-px w-8" style={{ backgroundColor: "rgb(0,133,132)" }} />
          <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "rgb(0,133,132)" }}>
            Preguntas Frecuentes
          </span>
        </FadeIn>
        <FadeInStagger className="flex flex-col gap-3 mb-16" stagger={0.06}>
          {faqs.map((faq, i) => (
            <FadeInItem key={i}>
            <div className="rounded-2xl border border-black/7 overflow-hidden">
              <button
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left bg-white hover:bg-[#f8f9fb] transition-colors duration-150"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <span className="text-[#0d1b2a] font-semibold text-[15px] leading-snug">{faq.q}</span>
                <ChevronDown
                  size={17}
                  className={`shrink-0 transition-transform duration-200 text-[rgb(0,133,132)] ${openFaq === i ? "rotate-180" : ""}`}
                />
              </button>
              {openFaq === i && (
                <div className="px-6 pb-6 pt-1 bg-[#f8f9fb] border-t border-black/5">
                  <p className="text-[#4b5563] text-[15px] leading-[1.8]">{faq.a}</p>
                </div>
              )}
            </div>
            </FadeInItem>
          ))}
        </FadeInStagger>

        {/* Rights strip */}
        <FadeIn>
        <div className="p-8 rounded-2xl bg-[#0d1b2a]">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-[rgb(0,133,132)]" />
            <span className="text-white/50 text-xs font-semibold uppercase tracking-[0.2em]">
              Derechos del Paciente
            </span>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Recibir atención oportuna, digna y de calidad",
              "Ser informado sobre su diagnóstico y opciones de tratamiento",
              "Obtener una segunda opinión médica",
              "Mantener la confidencialidad de su información médica",
              "Presentar PQRS sin que afecte su atención",
              "Acceder a su historia clínica en cualquier momento",
            ].map((right, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle2 size={16} className="shrink-0 mt-0.5" style={{ color: "rgb(0,133,132)" }} />
                <span className="text-white/65 text-sm leading-relaxed">{right}</span>
              </div>
            ))}
          </div>
        </div>
        </FadeIn>
      </div>

      {/* Bottom CTA */}
      <div className="bg-[#f8f9fb] border-t border-black/5">
        <FadeIn className="max-w-7xl mx-auto px-6 lg:px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-[#0d1b2a] font-bold text-xl mb-1">
              Atención médica avanzada con calidez humana.
            </h3>
            <p className="text-[#6b7280] text-sm">
              Más de 35 años cuidando la salud de las familias del Norte de Santander.
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
              href="mailto:pqr@clinicasanjose.com.co"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-white font-semibold text-sm transition-all hover:opacity-90"
              style={{ backgroundColor: "rgb(0,133,132)" }}
            >
              Enviar por correo <ArrowUpRight size={14} />
            </a>
          </div>
        </FadeIn>
      </div>

    </div>
  );
}

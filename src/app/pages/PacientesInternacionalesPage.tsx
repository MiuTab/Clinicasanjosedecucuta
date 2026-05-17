import { useState } from "react";
import { Link } from "react-router";
import {
  ChevronRight,
  ArrowUpRight,
  CheckCircle2,
  MapPin,
  Phone,
  Mail,
  Globe,
  Plane,
  BedDouble,
  Languages,
  CalendarCheck,
  CreditCard,
  ShieldCheck,
  Clock,
} from "lucide-react";
import { FadeIn, FadeInStagger, FadeInItem } from "../components/FadeIn";

const steps = [
  {
    n: "01",
    title: "Contacto inicial",
    body: "Comuníquese con nuestra Coordinadora de Pacientes Internacionales por WhatsApp o correo electrónico con un resumen de su condición médica y los estudios previos disponibles.",
  },
  {
    n: "02",
    title: "Evaluación y presupuesto",
    body: "Un especialista revisará su caso de forma preliminar y le enviaremos en un plazo de 48 horas un presupuesto estimado con los procedimientos recomendados y las opciones de fechas disponibles.",
  },
  {
    n: "03",
    title: "Coordinación del viaje",
    body: "Confirmado el presupuesto, nuestro equipo le orienta sobre los documentos migratorios requeridos, opciones de alojamiento cercano a la clínica y transporte desde el terminal o el paso fronterizo.",
  },
  {
    n: "04",
    title: "Atención y seguimiento",
    body: "Al llegar, un coordinador le recibirá en la institución. Tras el alta o la consulta, se le entregará la documentación médica completa y se establecerá un plan de seguimiento con su médico en su país.",
  },
];

const services = [
  {
    icon: <CalendarCheck size={20} />,
    title: "Coordinación de citas",
    body: "Programación anticipada con el especialista de su elección antes de emprender el viaje, con confirmación escrita.",
  },
  {
    icon: <Languages size={20} />,
    title: "Apoyo en traducción",
    body: "Orientación en español, portugués e inglés para facilitar la comunicación médica durante su estancia.",
  },
  {
    icon: <BedDouble size={20} />,
    title: "Coordinación de alojamiento",
    body: "Convenios con hoteles y residencias cercanas a la clínica con tarifas preferenciales para pacientes y acompañantes.",
  },
  {
    icon: <Plane size={20} />,
    title: "Asistencia de llegada",
    body: "Orientación para el ingreso por el paso fronterizo de Cúcuta o el aeropuerto y transporte hasta la institución.",
  },
  {
    icon: <CreditCard size={20} />,
    title: "Opciones de pago internacionales",
    body: "Aceptamos pago en efectivo (pesos colombianos y dólares estadounidenses), transferencia bancaria internacional y algunos seguros internacionales.",
  },
  {
    icon: <ShieldCheck size={20} />,
    title: "Documentación médica completa",
    body: "Entrega de historia clínica, resultados, imágenes diagnósticas y epicrisis en formato digital y físico para su médico tratante.",
  },
];

const specialties = [
  "Cardiología e Hemodinámica",
  "Oncología Clínica y Radioterapia",
  "Ortopedia y Reemplazo Articular",
  "Cirugía Bariátrica",
  "Ginecología y Medicina Fetal",
  "Neurocirugía",
  "Cirugía Cardiovascular",
  "UCI y Cuidados Críticos",
  "Urología",
  "Imágenes Diagnósticas de Alta Complejidad",
];

const faqs = [
  {
    q: "¿Necesito visa para recibir atención médica en Colombia?",
    a: "Los ciudadanos venezolanos pueden ingresar a Colombia con cédula de identidad vigente o Permiso de Protección Temporal (PPT). Ciudadanos de Ecuador, Panamá, Perú y varios países latinoamericanos no requieren visa para estancias cortas. Para nacionales de otros países recomendamos verificar los requisitos migratorios vigentes en el portal de Migración Colombia (migracioncolombia.gov.co) o contactarnos para orientación específica.",
  },
  {
    q: "¿Cuánto tiempo antes debo contactarlos para programar mi cita?",
    a: "Para consultas ambulatorias recomendamos contactarnos con al menos 5 días hábiles de anticipación. Para procedimientos quirúrgicos o estudios de alta complejidad, lo ideal es iniciar el proceso con 2 a 3 semanas de antelación, lo que permite completar la coordinación de documentos, presupuesto, alojamiento y autorización de la cirugía.",
  },
  {
    q: "¿Aceptan seguros médicos internacionales?",
    a: "Trabajamos con algunos seguros internacionales bajo la modalidad de reembolso. Le recomendamos contactarnos con los datos de su aseguradora para verificar la cobertura antes de su viaje. Para pacientes particulares, los pagos se realizan directamente en la institución antes de los procedimientos electivos.",
  },
  {
    q: "¿Pueden mis familiares acompañarme durante la hospitalización?",
    a: "Sí. La Clínica San José de Cúcuta permite la presencia de un acompañante durante la hospitalización. Nuestro equipo puede orientar a su familia sobre opciones de alojamiento a pocos minutos de la institución con tarifas preferentes para acompañantes de pacientes.",
  },
  {
    q: "¿Cómo recibo mis resultados médicos si ya regresé a mi país?",
    a: "Todos los resultados de laboratorio, imágenes diagnósticas y el resumen de alta médica se entregan en formato digital a través de nuestro portal de resultados en línea, accesible desde cualquier país con el código de radicado. Los documentos físicos con firma del médico se pueden enviar por servicio de mensajería internacional a solicitud del paciente.",
  },
];

export function PacientesInternacionalesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white">

      {/* Hero */}
      <section className="relative w-full min-h-[50vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[#0d1b2a]">
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "32px 32px" }}
          />
          <div
            className="absolute right-0 top-0 bottom-0 w-1/2 opacity-10"
            style={{ background: "radial-gradient(ellipse at 80% 50%, rgb(0,133,132), transparent 70%)" }}
          />
        </div>
        <div className="absolute left-0 top-0 bottom-0 w-1 z-10" style={{ backgroundColor: "rgb(0,133,132)" }} />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 pb-16 pt-20">
          <nav className="flex items-center gap-1.5 text-white/40 text-xs mb-8">
            <Link to="/" className="hover:text-white/70 transition-colors">Inicio</Link>
            <ChevronRight size={12} />
            <span className="text-white/70">Pacientes Internacionales</span>
          </nav>

          <span
            className="inline-block text-[10px] font-semibold uppercase tracking-[0.2em] px-3 py-1.5 rounded-full text-white mb-5"
            style={{ backgroundColor: "rgba(0,133,132,0.85)" }}
          >
            Programa Internacional
          </span>

          <h1
            className="text-white mb-5 leading-tight max-w-3xl"
            style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 700, lineHeight: 1.05 }}
          >
            Atención médica de alto nivel,<br />a su alcance en Cúcuta.
          </h1>

          <p className="text-white/60 text-lg max-w-2xl leading-relaxed mb-8">
            Nuestra ubicación en la frontera colombo-venezolana nos convierte en el centro de referencia regional para pacientes de Venezuela, Ecuador y América Latina que buscan atención de tercer nivel con los más altos estándares clínicos.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="https://wa.me/573183228286"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl text-white font-semibold text-sm transition-all hover:opacity-90"
              style={{ backgroundColor: "rgb(0,133,132)" }}
            >
              Contactar por WhatsApp <ArrowUpRight size={15} />
            </a>
            <a
              href="mailto:internacional@clinicasanjose.com.co"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/20 text-white font-semibold text-sm hover:bg-white/10 transition-all"
            >
              Enviar correo
            </a>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">

        {/* Intro */}
        <FadeIn>
          <div
            className="mb-14 p-7 lg:p-9 rounded-2xl border-l-4"
            style={{ backgroundColor: "rgba(0,133,132,0.05)", borderLeftColor: "rgb(0,133,132)" }}
          >
            <p className="text-[#374151] text-[17px] leading-relaxed">
              La Clínica San José de Cúcuta cuenta con más de 88 años de trayectoria como institución de referencia para el norte de Colombia y la zona fronteriza. Nuestra proximidad con Venezuela, junto con nuestra capacidad instalada de tercer nivel de complejidad, nos posiciona como destino de salud para miles de pacientes internacionales que eligen Colombia por la calidad de su medicina, la disponibilidad oportuna de citas y los costos comparativamente favorables frente a otros países de la región.
            </p>
          </div>
        </FadeIn>

        {/* Why choose us */}
        <FadeIn className="mb-5">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-8" style={{ backgroundColor: "rgb(0,133,132)" }} />
            <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "rgb(0,133,132)" }}>
              Por qué elegirnos
            </span>
          </div>
        </FadeIn>

        <FadeInStagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16" stagger={0.07}>
          {[
            { icon: <Globe size={20} />, title: "Ubicación estratégica", body: "A minutos del puente internacional Simón Bolívar y del aeropuerto Camilo Daza, con fácil acceso desde Venezuela y el interior del país." },
            { icon: <ShieldCheck size={20} />, title: "Tercer nivel de complejidad", body: "Habilitados por el Ministerio de Salud de Colombia para la atención de las patologías de mayor complejidad médica y quirúrgica." },
            { icon: <Clock size={20} />, title: "Citas oportunas", body: "Tiempos de espera significativamente menores que en otros centros de referencia, con confirmación en 48 horas para la mayoría de especialidades." },
            { icon: <CreditCard size={20} />, title: "Costos accesibles", body: "Los servicios de salud en Colombia ofrecen una relación calidad-precio muy favorable frente a EEUU, Europa y países del cono sur." },
          ].map((item) => (
            <FadeInItem key={item.title}>
              <div className="p-6 rounded-2xl border border-black/7 bg-[#f8f9fb] h-full">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 text-white" style={{ backgroundColor: "rgb(0,133,132)" }}>
                  {item.icon}
                </div>
                <h3 className="text-[#0d1b2a] font-bold text-sm mb-2">{item.title}</h3>
                <p className="text-[#6b7280] text-[13px] leading-relaxed">{item.body}</p>
              </div>
            </FadeInItem>
          ))}
        </FadeInStagger>

        {/* Services */}
        <FadeIn className="flex items-center gap-3 mb-8">
          <div className="h-px w-8" style={{ backgroundColor: "rgb(0,133,132)" }} />
          <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "rgb(0,133,132)" }}>
            Servicios del programa
          </span>
        </FadeIn>

        <FadeInStagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16" stagger={0.07}>
          {services.map((s) => (
            <FadeInItem key={s.title}>
              <div className="flex gap-4 p-6 rounded-2xl border border-black/7 bg-white hover:shadow-md hover:shadow-black/5 hover:-translate-y-0.5 transition-all duration-300 h-full">
                <div className="w-10 h-10 rounded-xl shrink-0 flex items-center justify-center" style={{ backgroundColor: "rgba(0,133,132,0.1)", color: "rgb(0,133,132)" }}>
                  {s.icon}
                </div>
                <div>
                  <h3 className="text-[#0d1b2a] font-bold text-sm mb-1.5">{s.title}</h3>
                  <p className="text-[#6b7280] text-[13px] leading-relaxed">{s.body}</p>
                </div>
              </div>
            </FadeInItem>
          ))}
        </FadeInStagger>

        {/* Process + Specialties */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">

          {/* Steps */}
          <div>
            <FadeIn className="flex items-center gap-3 mb-8">
              <div className="h-px w-8" style={{ backgroundColor: "rgb(0,133,132)" }} />
              <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "rgb(0,133,132)" }}>
                Proceso de atención
              </span>
            </FadeIn>
            <FadeInStagger className="flex flex-col gap-6" stagger={0.08}>
              {steps.map((step) => (
                <FadeInItem key={step.n}>
                  <div className="flex gap-5">
                    <div
                      className="w-10 h-10 rounded-xl shrink-0 flex items-center justify-center text-xs font-bold text-white"
                      style={{ backgroundColor: "rgb(0,133,132)" }}
                    >
                      {step.n}
                    </div>
                    <div>
                      <h3 className="text-[#0d1b2a] font-bold text-sm mb-1">{step.title}</h3>
                      <p className="text-[#6b7280] text-[13px] leading-relaxed">{step.body}</p>
                    </div>
                  </div>
                </FadeInItem>
              ))}
            </FadeInStagger>
          </div>

          {/* Specialties */}
          <div>
            <FadeIn className="flex items-center gap-3 mb-8">
              <div className="h-px w-8" style={{ backgroundColor: "rgb(0,133,132)" }} />
              <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "rgb(0,133,132)" }}>
                Especialidades más solicitadas
              </span>
            </FadeIn>
            <FadeIn>
              <div className="bg-[#f8f9fb] rounded-2xl p-6 border border-black/6">
                <ul className="space-y-3">
                  {specialties.map((sp) => (
                    <li key={sp} className="flex items-center gap-3">
                      <CheckCircle2 size={15} className="shrink-0" style={{ color: "rgb(0,133,132)" }} />
                      <span className="text-[#374151] text-[14px]">{sp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* FAQ */}
        <FadeIn className="flex items-center gap-3 mb-8">
          <div className="h-px w-8" style={{ backgroundColor: "rgb(0,133,132)" }} />
          <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "rgb(0,133,132)" }}>
            Preguntas frecuentes
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
                  <ChevronRight
                    size={16}
                    className={`shrink-0 transition-transform duration-200 text-[rgb(0,133,132)] ${openFaq === i ? "rotate-90" : ""}`}
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

        {/* Contact strip */}
        <FadeIn>
          <div className="rounded-2xl bg-[#0d1b2a] p-8 lg:p-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-[rgb(0,133,132)]" />
              <span className="text-white/50 text-xs font-semibold uppercase tracking-[0.2em]">Coordinación Internacional</span>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <h3 className="text-white font-bold text-xl mb-3">Inicie su proceso hoy</h3>
                <p className="text-white/55 text-[15px] leading-relaxed mb-6">
                  Nuestro equipo de coordinación internacional está disponible de lunes a viernes de 7:00 AM a 5:00 PM (hora Colombia, UTC-5) y responde consultas de WhatsApp en horario ampliado. Escríbanos con un resumen de su condición y le orientamos sin ningún compromiso.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://wa.me/573183228286"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-white font-semibold text-sm transition-all hover:opacity-90"
                    style={{ backgroundColor: "rgb(0,133,132)" }}
                  >
                    WhatsApp <ArrowUpRight size={14} />
                  </a>
                  <a
                    href="mailto:internacional@clinicasanjose.com.co"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/20 text-white font-semibold text-sm hover:bg-white/10 transition-all"
                  >
                    Enviar correo
                  </a>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                {[
                  { icon: <Phone size={15} />, label: "(607) 5895053 ext. 130" },
                  { icon: <Mail size={15} />, label: "internacional@clinicasanjose.com.co" },
                  { icon: <MapPin size={15} />, label: "Calle 13 #1E-74, Los Caobos, Cúcuta" },
                ].map((c) => (
                  <div key={c.label} className="flex items-center gap-3 text-white/55 text-sm">
                    <div className="w-8 h-8 rounded-lg bg-white/8 flex items-center justify-center shrink-0" style={{ color: "rgb(0,133,132)" }}>
                      {c.icon}
                    </div>
                    {c.label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* Bottom CTA */}
      <div className="bg-[#f8f9fb] border-t border-black/5">
        <FadeIn className="max-w-7xl mx-auto px-6 lg:px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-[#0d1b2a] font-bold text-xl mb-1">Atención médica avanzada con calidez humana.</h3>
            <p className="text-[#6b7280] text-sm">Más de 88 años cuidando la salud de las familias del Norte de Santander y la región.</p>
          </div>
          <div className="flex gap-3 shrink-0">
            <Link to="/" className="px-5 py-2.5 rounded-xl border border-black/10 text-[#374151] font-medium text-sm hover:border-[rgb(0,133,132)] hover:text-[rgb(0,133,132)] transition-all">
              Volver al Inicio
            </Link>
            <Link to="/resultados" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-white font-semibold text-sm transition-all hover:opacity-90" style={{ backgroundColor: "rgb(0,133,132)" }}>
              Resultados Médicos <ArrowUpRight size={14} />
            </Link>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}

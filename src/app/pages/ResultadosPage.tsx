import { useState } from "react";
import { Link } from "react-router";
import {
  ChevronRight,
  Search,
  FileText,
  AlertCircle,
  CheckCircle2,
  User,
  Calendar,
  Stethoscope,
  FlaskConical,
  Printer,
  Download,
  Lock,
  Clock,
} from "lucide-react";
import { FadeIn } from "../components/FadeIn";

interface ResultValue {
  name: string;
  value: string;
  unit: string;
  reference: string;
  status: "normal" | "alto" | "bajo";
}

interface MedicalResult {
  code: string;
  patient: string;
  docId: string;
  age: number;
  doctor: string;
  doctorRole: string;
  date: string;
  type: string;
  service: string;
  diagnosis?: string;
  note?: string;
  values?: ResultValue[];
  findings?: string[];
  conclusion: string;
}

const mockResults: Record<string, MedicalResult> = {
  "CSJ-2026-0041": {
    code: "CSJ-2026-0041",
    patient: "María Elena García Rodríguez",
    docId: "37.482.910",
    age: 52,
    doctor: "Dr. Carlos Andrés Morales",
    doctorRole: "Cardiólogo Intervencionista · TP 45-228",
    date: "14 Mayo 2026",
    type: "Laboratorio Clínico",
    service: "Perfil Lipídico Completo",
    diagnosis: "Control de dislipidemia",
    values: [
      { name: "Colesterol Total", value: "198", unit: "mg/dL", reference: "< 200", status: "normal" },
      { name: "LDL Colesterol", value: "124", unit: "mg/dL", reference: "< 130", status: "normal" },
      { name: "HDL Colesterol", value: "48", unit: "mg/dL", reference: "> 50 (mujer)", status: "bajo" },
      { name: "Triglicéridos", value: "162", unit: "mg/dL", reference: "< 150", status: "alto" },
      { name: "VLDL", value: "32", unit: "mg/dL", reference: "< 30", status: "alto" },
      { name: "Índice Aterogénico", value: "4.1", unit: "", reference: "< 5.0", status: "normal" },
    ],
    conclusion:
      "Perfil lipídico con triglicéridos levemente elevados y HDL en límite inferior. Se recomienda continuar con tratamiento farmacológico actual y reforzar medidas dietéticas. Control en 3 meses.",
  },
  "CSJ-2026-0118": {
    code: "CSJ-2026-0118",
    patient: "Jorge Andrés Ramírez Suárez",
    docId: "91.345.672",
    age: 34,
    doctor: "Dr. Jorge Enrique Suárez",
    doctorRole: "Ortopedista y Traumatólogo · TP 38-115",
    date: "10 Mayo 2026",
    type: "Imágenes Diagnósticas",
    service: "Resonancia Magnética de Rodilla Derecha",
    diagnosis: "Dolor crónico rodilla derecha post-trauma",
    findings: [
      "Ruptura parcial del ligamento cruzado anterior en su tercio medio, con edema óseo asociado en platillo tibial lateral.",
      "Menisco medial íntegro. Menisco lateral con pequeña fisura horizontal en el cuerno posterior, sin desplazamiento.",
      "Cartílago articular con leve adelgazamiento focal en cóndilo femoral medial (grado I de Outerbridge).",
      "No se evidencia derrame articular significativo. Estructuras ligamentarias colaterales sin alteraciones.",
      "Tendón rotuliano y tendón cuadricipital de aspecto normal.",
    ],
    conclusion:
      "Hallazgos compatibles con lesión parcial de LCA y fisura meniscal lateral posterior. Se recomienda valoración por ortopedia para definir manejo quirúrgico versus conservador según evolución clínica.",
  },
  "CSJ-2026-0203": {
    code: "CSJ-2026-0203",
    patient: "Rosa Inés Castellanos Vega",
    docId: "46.891.234",
    age: 61,
    doctor: "Dra. Marcela Ortiz",
    doctorRole: "Endocrinóloga · TP 52-340",
    date: "8 Mayo 2026",
    type: "Laboratorio Clínico",
    service: "Perfil Glucémico y Función Renal",
    diagnosis: "Control Diabetes Mellitus tipo 2",
    values: [
      { name: "Glicemia en Ayunas", value: "134", unit: "mg/dL", reference: "70 – 100", status: "alto" },
      { name: "Hemoglobina Glicosilada (HbA1c)", value: "7.4", unit: "%", reference: "< 7.0", status: "alto" },
      { name: "Creatinina", value: "0.89", unit: "mg/dL", reference: "0.5 – 1.1", status: "normal" },
      { name: "Urea", value: "28", unit: "mg/dL", reference: "15 – 40", status: "normal" },
      { name: "Filtrado Glomerular (eGFR)", value: "74", unit: "mL/min/1.73m²", reference: "> 60", status: "normal" },
      { name: "Microalbuminuria", value: "42", unit: "mg/g creat.", reference: "< 30", status: "alto" },
    ],
    note: "Muestra tomada en ayuno de 10 horas. Procesada en Laboratorio Clínico CSJ.",
    conclusion:
      "Control glicémico con HbA1c levemente por encima de meta. Función renal conservada con microalbuminuria incipiente que requiere seguimiento estrecho. Se ajusta dosis de metformina y se indica control en 2 meses.",
  },
  "CSJ-2026-0077": {
    code: "CSJ-2026-0077",
    patient: "Luis Hernando Pedraza Torres",
    docId: "13.556.781",
    age: 45,
    doctor: "Dra. Laura Cristina Pérez",
    doctorRole: "Ginecóloga y Obstetra · TP 47-192",
    date: "5 Mayo 2026",
    type: "Laboratorio Clínico",
    service: "Hemograma Completo",
    diagnosis: "Evaluación preoperatoria",
    values: [
      { name: "Hemoglobina", value: "14.8", unit: "g/dL", reference: "13.5 – 17.5", status: "normal" },
      { name: "Hematocrito", value: "44.2", unit: "%", reference: "41 – 53", status: "normal" },
      { name: "Leucocitos", value: "7.200", unit: "/mm³", reference: "4.500 – 11.000", status: "normal" },
      { name: "Neutrófilos", value: "62", unit: "%", reference: "50 – 70", status: "normal" },
      { name: "Linfocitos", value: "30", unit: "%", reference: "20 – 40", status: "normal" },
      { name: "Plaquetas", value: "218.000", unit: "/mm³", reference: "150.000 – 400.000", status: "normal" },
    ],
    conclusion:
      "Hemograma dentro de parámetros normales. Paciente apto desde el punto de vista hematológico para procedimiento quirúrgico programado.",
  },
};

const statusConfig = {
  normal: { label: "Normal", color: "text-emerald-700", bg: "bg-emerald-50", border: "border-emerald-200" },
  alto:   { label: "Alto",   color: "text-red-600",     bg: "bg-red-50",     border: "border-red-200"     },
  bajo:   { label: "Bajo",   color: "text-amber-600",   bg: "bg-amber-50",   border: "border-amber-200"   },
};

export function ResultadosPage() {
  const [code, setCode] = useState("");
  const [result, setResult] = useState<MedicalResult | null>(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setError(false);
    setResult(null);
    setLoading(true);
    setTimeout(() => {
      const found = mockResults[code.trim().toUpperCase()];
      if (found) {
        setResult(found);
      } else {
        setError(true);
      }
      setLoading(false);
    }, 900);
  };

  const handleClear = () => {
    setCode("");
    setResult(null);
    setError(false);
  };

  return (
    <div className="min-h-screen bg-white">

      {/* Hero */}
      <section className="relative w-full flex items-end overflow-hidden" style={{ backgroundColor: "#0d1b2a", minHeight: "38vh" }}>
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "32px 32px" }}
        />
        <div className="absolute left-0 top-0 bottom-0 w-1 z-10" style={{ backgroundColor: "rgb(0,133,132)" }} />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 pb-14 pt-20">
          <nav className="flex items-center gap-1.5 text-white/45 text-xs mb-8">
            <Link to="/" className="hover:text-white/70 transition-colors">Inicio</Link>
            <ChevronRight size={12} />
            <span className="text-white/80">Resultados Médicos</span>
          </nav>
          <span
            className="inline-block text-[10px] font-semibold uppercase tracking-[0.2em] px-3 py-1.5 rounded-full text-white mb-5"
            style={{ backgroundColor: "rgba(0,133,132,0.85)" }}
          >
            Portal del Paciente
          </span>
          <h1
            className="text-white mb-4 leading-tight"
            style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 700, lineHeight: 1.05 }}
          >
            Consulta de Resultados<br />Médicos en Línea
          </h1>
          <p className="text-white/60 text-lg max-w-2xl leading-relaxed">
            Ingrese el código de radicado que aparece en su orden de examen o que recibió por WhatsApp para consultar sus resultados de forma segura.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16 lg:py-20">

        {/* Search card */}
        <FadeIn>
        <div className="bg-white rounded-2xl border border-black/8 shadow-lg shadow-black/5 p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: "rgba(0,133,132,0.1)" }}>
              <Lock size={18} style={{ color: "rgb(0,133,132)" }} />
            </div>
            <div>
              <h2 className="text-[#0d1b2a] font-bold text-base">Ingrese su código de radicado</h2>
              <p className="text-[#9ca3af] text-xs">Sus resultados son privados y solo accesibles con su código personal</p>
            </div>
          </div>

          <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9ca3af]" />
              <input
                type="text"
                value={code}
                onChange={(e) => { setCode(e.target.value); setError(false); }}
                placeholder="Ej: CSJ-2026-0041"
                className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-black/10 bg-[#f8f9fb] text-[#0d1b2a] text-sm placeholder:text-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[rgb(0,133,132)]/30 focus:border-[rgb(0,133,132)] transition-all uppercase tracking-wide"
              />
            </div>
            <button
              type="submit"
              disabled={!code.trim() || loading}
              className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-white font-semibold text-sm transition-all hover:opacity-90 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed shrink-0"
              style={{ backgroundColor: "rgb(0,133,132)" }}
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                  </svg>
                  Consultando...
                </span>
              ) : (
                <>
                  <Search size={15} />
                  Consultar
                </>
              )}
            </button>
          </form>

          {/* Error */}
          {error && (
            <div className="mt-4 flex items-start gap-3 p-4 rounded-xl bg-red-50 border border-red-200">
              <AlertCircle size={17} className="text-red-500 shrink-0 mt-0.5" />
              <div>
                <p className="text-red-700 font-semibold text-sm">Código no encontrado</p>
                <p className="text-red-600 text-xs mt-0.5 leading-relaxed">
                  Verifique que el código sea correcto y esté completo. Si el problema persiste, comuníquese con el Laboratorio al (607) 5895053.
                </p>
              </div>
            </div>
          )}

          <div className="mt-5 flex flex-wrap gap-4 text-xs text-[#9ca3af]">
            <span className="flex items-center gap-1.5">
              <Clock size={11} />
              Resultados disponibles 24–72 h después del examen
            </span>
            <span className="flex items-center gap-1.5">
              <Lock size={11} />
              Conexión cifrada · Datos protegidos
            </span>
          </div>
        </div>
        </FadeIn>

        {/* Result document */}
        {result && (
          <FadeIn>
          <div className="rounded-2xl border border-black/8 overflow-hidden shadow-xl shadow-black/8">

            {/* Document header */}
            <div className="px-8 py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4" style={{ backgroundColor: "rgb(0,133,132)" }}>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center shrink-0">
                  <svg viewBox="0 0 36 36" fill="none" className="w-6 h-6">
                    <path d="M18 4v28M4 18h28" stroke="white" strokeWidth="4" strokeLinecap="round" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-bold text-base leading-tight">Clínica San José de Cúcuta</p>
                  <p className="text-white/65 text-xs">Calle 13 #1E-74, Los Caobos · NIT 890.500.778-1</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-white/55 text-[10px] uppercase tracking-widest mb-0.5">Código de radicado</p>
                <p className="text-white font-bold text-lg tracking-widest">{result.code}</p>
              </div>
            </div>

            <div className="bg-white px-8 py-8">

              {/* Patient info */}
              <div className="grid sm:grid-cols-2 gap-5 mb-8 pb-8 border-b border-black/6">
                <div className="flex gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#f8f9fb] border border-black/6 flex items-center justify-center shrink-0">
                    <User size={15} className="text-[#6b7280]" />
                  </div>
                  <div>
                    <p className="text-[#9ca3af] text-[10px] font-semibold uppercase tracking-wider mb-0.5">Paciente</p>
                    <p className="text-[#0d1b2a] font-semibold text-sm">{result.patient}</p>
                    <p className="text-[#6b7280] text-xs">C.C. {result.docId} · {result.age} años</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#f8f9fb] border border-black/6 flex items-center justify-center shrink-0">
                    <Stethoscope size={15} className="text-[#6b7280]" />
                  </div>
                  <div>
                    <p className="text-[#9ca3af] text-[10px] font-semibold uppercase tracking-wider mb-0.5">Médico solicitante</p>
                    <p className="text-[#0d1b2a] font-semibold text-sm">{result.doctor}</p>
                    <p className="text-[#6b7280] text-xs">{result.doctorRole}</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#f8f9fb] border border-black/6 flex items-center justify-center shrink-0">
                    <FlaskConical size={15} className="text-[#6b7280]" />
                  </div>
                  <div>
                    <p className="text-[#9ca3af] text-[10px] font-semibold uppercase tracking-wider mb-0.5">Tipo de examen</p>
                    <p className="text-[#0d1b2a] font-semibold text-sm">{result.service}</p>
                    <p className="text-[#6b7280] text-xs">{result.type}</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#f8f9fb] border border-black/6 flex items-center justify-center shrink-0">
                    <Calendar size={15} className="text-[#6b7280]" />
                  </div>
                  <div>
                    <p className="text-[#9ca3af] text-[10px] font-semibold uppercase tracking-wider mb-0.5">Fecha de resultado</p>
                    <p className="text-[#0d1b2a] font-semibold text-sm">{result.date}</p>
                    {result.diagnosis && <p className="text-[#6b7280] text-xs">{result.diagnosis}</p>}
                  </div>
                </div>
              </div>

              {/* Values table */}
              {result.values && (
                <div className="mb-8">
                  <h3 className="text-[#0d1b2a] font-bold text-sm mb-4 flex items-center gap-2">
                    <div className="h-px flex-1 bg-black/6" />
                    <span>Resultados</span>
                    <div className="h-px flex-1 bg-black/6" />
                  </h3>
                  <div className="rounded-xl overflow-hidden border border-black/7">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-[#f8f9fb] border-b border-black/6">
                          <th className="text-left px-5 py-3 text-[#9ca3af] text-[10px] font-semibold uppercase tracking-wider">Parámetro</th>
                          <th className="text-right px-5 py-3 text-[#9ca3af] text-[10px] font-semibold uppercase tracking-wider">Resultado</th>
                          <th className="text-right px-5 py-3 text-[#9ca3af] text-[10px] font-semibold uppercase tracking-wider hidden sm:table-cell">Valores de referencia</th>
                          <th className="text-center px-5 py-3 text-[#9ca3af] text-[10px] font-semibold uppercase tracking-wider">Estado</th>
                        </tr>
                      </thead>
                      <tbody>
                        {result.values.map((v, i) => {
                          const s = statusConfig[v.status];
                          return (
                            <tr key={i} className={`border-b border-black/4 last:border-0 ${v.status !== "normal" ? "bg-red-50/30" : ""}`}>
                              <td className="px-5 py-3.5 text-[#374151] font-medium text-[13px]">{v.name}</td>
                              <td className="px-5 py-3.5 text-right font-bold text-[#0d1b2a] text-[13px]">
                                {v.value} <span className="text-[#9ca3af] font-normal text-xs">{v.unit}</span>
                              </td>
                              <td className="px-5 py-3.5 text-right text-[#9ca3af] text-xs hidden sm:table-cell">{v.reference}</td>
                              <td className="px-5 py-3.5 text-center">
                                <span className={`inline-block px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide ${s.color} ${s.bg} border ${s.border}`}>
                                  {s.label}
                                </span>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                  {result.note && (
                    <p className="text-[#9ca3af] text-xs mt-2 italic">{result.note}</p>
                  )}
                </div>
              )}

              {/* Findings (imaging) */}
              {result.findings && (
                <div className="mb-8">
                  <h3 className="text-[#0d1b2a] font-bold text-sm mb-4 flex items-center gap-2">
                    <div className="h-px flex-1 bg-black/6" />
                    <span>Hallazgos</span>
                    <div className="h-px flex-1 bg-black/6" />
                  </h3>
                  <ul className="space-y-3">
                    {result.findings.map((f, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full shrink-0 mt-0.5 flex items-center justify-center text-[10px] font-bold text-white" style={{ backgroundColor: "rgb(0,133,132)" }}>
                          {i + 1}
                        </div>
                        <p className="text-[#4b5563] text-[14px] leading-relaxed">{f}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Conclusion */}
              <div
                className="p-6 rounded-xl border-l-4 mb-8"
                style={{ backgroundColor: "rgba(0,133,132,0.05)", borderLeftColor: "rgb(0,133,132)" }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 size={15} style={{ color: "rgb(0,133,132)" }} />
                  <span className="text-[#0d1b2a] font-bold text-sm">Conclusión médica</span>
                </div>
                <p className="text-[#374151] text-[14px] leading-relaxed">{result.conclusion}</p>
              </div>

              {/* Signature area */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-6 border-t border-black/6">
                <div>
                  <p className="text-[#0d1b2a] font-bold text-sm">{result.doctor}</p>
                  <p className="text-[rgb(0,133,132)] text-xs font-medium">{result.doctorRole}</p>
                  <p className="text-[#9ca3af] text-xs mt-0.5">Clínica San José de Cúcuta</p>
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={() => window.print()}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-black/10 text-[#374151] font-medium text-xs hover:border-[rgb(0,133,132)] hover:text-[rgb(0,133,132)] transition-all"
                  >
                    <Printer size={13} />
                    Imprimir
                  </button>
                  <button
                    onClick={() => window.print()}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-white font-semibold text-xs transition-all hover:opacity-90"
                    style={{ backgroundColor: "rgb(0,133,132)" }}
                  >
                    <Download size={13} />
                    Descargar PDF
                  </button>
                </div>
              </div>
            </div>

            {/* Document footer */}
            <div className="px-8 py-4 bg-[#f8f9fb] border-t border-black/6 flex flex-col sm:flex-row items-center justify-between gap-2">
              <p className="text-[#9ca3af] text-[11px]">
                Documento generado digitalmente · Clínica San José de Cúcuta · {result.date}
              </p>
              <button
                onClick={handleClear}
                className="text-[rgb(0,133,132)] text-[11px] font-semibold hover:underline"
              >
                Consultar otro código
              </button>
            </div>
          </div>
          </FadeIn>
        )}

        {/* Info cards */}
        {!result && (
          <FadeIn>
          <div className="grid sm:grid-cols-3 gap-4 mt-4">
            {[
              { icon: <FileText size={16} />, title: "¿Dónde encuentro mi código?", body: "El código de radicado aparece en la parte superior de su orden médica o fue enviado por WhatsApp al número registrado." },
              { icon: <Clock size={16} />, title: "¿Cuándo están disponibles?", body: "Los resultados de laboratorio se publican entre 4 y 24 horas después de la toma. Imágenes diagnósticas, entre 24 y 72 horas." },
              { icon: <Lock size={16} />, title: "¿Son seguros mis datos?", body: "Sí. La consulta es cifrada, sus resultados son privados y solo accesibles con su código personal de radicado." },
            ].map((card) => (
              <div key={card.title} className="bg-[#f8f9fb] rounded-2xl p-5 border border-black/6">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center mb-3" style={{ backgroundColor: "rgba(0,133,132,0.1)", color: "rgb(0,133,132)" }}>
                  {card.icon}
                </div>
                <h4 className="text-[#0d1b2a] font-semibold text-sm mb-1.5">{card.title}</h4>
                <p className="text-[#6b7280] text-xs leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>
          </FadeIn>
        )}

        {/* Demo hint */}
        {!result && (
          <FadeIn delay={0.05}>
          <div className="mt-6 p-4 rounded-xl bg-[#f8f9fb] border border-black/7 flex items-start gap-3">
            <AlertCircle size={15} className="shrink-0 mt-0.5" style={{ color: "rgb(0,133,132)" }} />
            <p className="text-[#6b7280] text-xs leading-relaxed">
              <span className="font-semibold text-[#374151]">Modo de demostración:</span> Para probar el sistema puede usar los códigos{" "}
              <button onClick={() => setCode("CSJ-2026-0041")} className="font-bold underline underline-offset-2" style={{ color: "rgb(0,133,132)" }}>CSJ-2026-0041</button>,{" "}
              <button onClick={() => setCode("CSJ-2026-0118")} className="font-bold underline underline-offset-2" style={{ color: "rgb(0,133,132)" }}>CSJ-2026-0118</button>,{" "}
              <button onClick={() => setCode("CSJ-2026-0203")} className="font-bold underline underline-offset-2" style={{ color: "rgb(0,133,132)" }}>CSJ-2026-0203</button>{" "}
              o{" "}
              <button onClick={() => setCode("CSJ-2026-0077")} className="font-bold underline underline-offset-2" style={{ color: "rgb(0,133,132)" }}>CSJ-2026-0077</button>.
            </p>
          </div>
          </FadeIn>
        )}
      </div>

      {/* Bottom CTA */}
      <div className="bg-[#f8f9fb] border-t border-black/5">
        <FadeIn className="max-w-7xl mx-auto px-6 lg:px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-[#0d1b2a] font-bold text-xl mb-1">¿Necesita orientación sobre sus resultados?</h3>
            <p className="text-[#6b7280] text-sm">Agende una consulta con el especialista que solicitó sus exámenes.</p>
          </div>
          <div className="flex gap-3 shrink-0">
            <a
              href="tel:6075895053"
              className="px-5 py-2.5 rounded-xl border border-black/10 text-[#374151] font-medium text-sm hover:border-[rgb(0,133,132)] hover:text-[rgb(0,133,132)] transition-all"
            >
              (607) 5895053
            </a>
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-white font-semibold text-sm transition-all hover:opacity-90"
              style={{ backgroundColor: "rgb(0,133,132)" }}
            >
              Agendar Cita
            </Link>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}

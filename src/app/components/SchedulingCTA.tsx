import { Calendar, ArrowRight, Clock, CheckCircle } from "lucide-react";
import { useState } from "react";
import { FadeIn } from "./FadeIn";

const specialties = [
  "Cardiología",
  "Ginecología y Obstetricia",
  "Ortopedia y Traumatología",
  "Oncología",
  "Medicina Interna",
  "Pediatría",
  "Neurología",
  "Cirugía General",
  "Dermatología",
  "Oftalmología",
  "Urología",
  "Otorrinolaringología",
];

const benefits = [
  "Confirmación inmediata por WhatsApp",
  "Recordatorio 24h antes de su cita",
  "Atención puntual garantizada",
];

export function SchedulingCTA() {
  const [form, setForm] = useState({ name: "", specialty: "", date: "", phone: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: "", specialty: "", date: "", phone: "" });
  };

  return (
    <section id="citas" className="py-24 lg:py-32 relative overflow-hidden" style={{ backgroundColor: "rgb(0,133,132)" }}>
      {/* Subtle texture */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: copy */}
          <FadeIn direction="left">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-10 bg-white/40" />
              <span className="text-white/70 text-xs font-semibold uppercase tracking-[0.2em]">
                Programación de Citas
              </span>
            </div>
            <h2
              className="text-white leading-tight mb-6"
              style={{ fontSize: "clamp(1.9rem, 3.5vw, 2.75rem)", fontWeight: 700 }}
            >
              Su salud, a un clic de distancia.
            </h2>
            <p className="text-white/70 text-[17px] leading-relaxed mb-8">
              Agende su consulta con nuestros especialistas de manera rápida y sencilla. Sin filas, sin esperas innecesarias.
            </p>

            <div className="flex flex-col gap-3 mb-10">
              {benefits.map((b) => (
                <div key={b} className="flex items-center gap-3">
                  <CheckCircle size={17} className="text-white/60 shrink-0" />
                  <span className="text-white/80 text-[15px]">{b}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <Clock size={18} className="text-white" />
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">Lun–Sáb</div>
                  <div className="text-white/55 text-xs">7:00 AM – 6:00 PM</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <Calendar size={18} className="text-white" />
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">Urgencias</div>
                  <div className="text-white/55 text-xs">24 horas · 7 días</div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Right: form */}
          <FadeIn direction="right" delay={0.1}>
          <div className="bg-white rounded-2xl p-8 shadow-2xl shadow-black/20">
            {submitted ? (
              <div className="text-center py-8">
                <div className="w-14 h-14 rounded-full bg-[rgb(0,133,132)]/10 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle size={28} className="text-[rgb(0,133,132)]" />
                </div>
                <h3 className="text-[#0d1b2a] font-bold text-xl mb-2">¡Solicitud enviada!</h3>
                <p className="text-[#6b7280] text-sm">Un asesor se comunicará con usted en los próximos 30 minutos para confirmar su cita.</p>
              </div>
            ) : (
              <>
                <div className="mb-6">
                  <h3 className="text-[#0d1b2a] font-bold text-xl mb-1">Agendar Cita</h3>
                  <p className="text-[#9ca3af] text-sm">Complete el formulario y le confirmaremos a la brevedad.</p>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#374151] mb-1.5 uppercase tracking-wide">
                      Nombre completo
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ej: María García López"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-black/10 bg-[#f8f9fb] text-[#0d1b2a] text-sm placeholder:text-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[rgb(0,133,132)]/30 focus:border-[rgb(0,133,132)] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#374151] mb-1.5 uppercase tracking-wide">
                      Especialidad
                    </label>
                    <select
                      required
                      value={form.specialty}
                      onChange={(e) => setForm({ ...form, specialty: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-black/10 bg-[#f8f9fb] text-[#0d1b2a] text-sm focus:outline-none focus:ring-2 focus:ring-[rgb(0,133,132)]/30 focus:border-[rgb(0,133,132)] transition-all appearance-none"
                    >
                      <option value="">Seleccionar especialidad</option>
                      {specialties.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#374151] mb-1.5 uppercase tracking-wide">
                        Fecha preferida
                      </label>
                      <input
                        type="date"
                        required
                        value={form.date}
                        min={new Date().toISOString().split("T")[0]}
                        onChange={(e) => setForm({ ...form, date: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-black/10 bg-[#f8f9fb] text-[#0d1b2a] text-sm focus:outline-none focus:ring-2 focus:ring-[rgb(0,133,132)]/30 focus:border-[rgb(0,133,132)] transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#374151] mb-1.5 uppercase tracking-wide">
                        Teléfono / WhatsApp
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="300 000 0000"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-black/10 bg-[#f8f9fb] text-[#0d1b2a] text-sm placeholder:text-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[rgb(0,133,132)]/30 focus:border-[rgb(0,133,132)] transition-all"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="mt-2 w-full flex items-center justify-center gap-2.5 py-3.5 rounded-xl text-white font-semibold text-sm transition-all duration-200 hover:opacity-90 active:scale-[0.98]"
                    style={{ backgroundColor: "rgb(0,133,132)" }}
                  >
                    <Calendar size={16} />
                    Solicitar Cita
                    <ArrowRight size={15} />
                  </button>

                  <p className="text-center text-[11px] text-[#9ca3af]">
                    Sus datos están protegidos. No serán compartidos con terceros.
                  </p>
                </form>
              </>
            )}
          </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

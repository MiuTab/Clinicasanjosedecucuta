import { ArrowRight, Calendar, Phone } from "lucide-react";
import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const ease = [0.21, 0.47, 0.32, 0.98] as const;

export function HeroSection() {
  return (
    <section id="inicio" className="relative w-full overflow-hidden bg-[#f8f9fb] min-h-[92vh] flex items-center">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1579154491915-611e891d3a5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
          alt="Sala de cirugía Clínica San José"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d1b2a]/90 via-[#0d1b2a]/70 to-[#0d1b2a]/20" />
      </div>

      {/* Decorative teal bar — slides in from left */}
      <motion.div
        className="absolute left-0 top-0 bottom-0 w-1 z-10"
        style={{ backgroundColor: "rgb(0,133,132)" }}
        initial={{ scaleY: 0, originY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.7, ease }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full py-24 lg:py-32">
        <div className="max-w-2xl">

          {/* Eyebrow */}
          <motion.div
            className="flex items-center gap-3 mb-8"
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.2, ease }}
          >
            <div className="h-px w-10 bg-[rgb(0,133,132)]" />
            <span className="text-[rgb(0,165,164)] text-xs font-semibold uppercase tracking-[0.2em]">
              Nivel III de Complejidad · Cúcuta, Colombia
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="text-white mb-6"
            style={{ fontSize: "clamp(2.4rem, 5vw, 3.8rem)", fontWeight: 700, lineHeight: 1.05 }}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35, ease }}
          >
            Atención médica<br />
            avanzada con<br />
            <span style={{ color: "rgb(0,165,164)" }}>calidez humana.</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            className="text-white/70 text-lg mb-10 leading-relaxed max-w-xl"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.5, ease }}
          >
            Más de 88 años cuidando la salud de las familias del Norte de Santander con tecnología de vanguardia, especialistas de alto nivel y un compromiso genuino con cada paciente.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-wrap gap-4 mb-16"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.62, ease }}
          >
            <a
              href="#citas"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl text-white font-semibold text-sm transition-all duration-200 hover:opacity-90 hover:gap-3.5 active:scale-[0.98]"
              style={{ backgroundColor: "rgb(0,133,132)" }}
            >
              <Calendar size={16} />
              Agendar Cita
              <ArrowRight size={15} />
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl text-white border border-white/25 font-semibold text-sm transition-all duration-200 hover:border-white/50 hover:bg-white/10 active:scale-[0.98]"
            >
              Explorar Servicios
            </a>
          </motion.div>

          {/* Stats strip — staggered */}
          <motion.div
            className="flex flex-wrap gap-8"
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.1, delayChildren: 0.75 } } }}
          >
            {[
              { value: "88+", label: "Años de Trayectoria" },
              { value: "450+", label: "Médicos Especialistas" },
              { value: "300", label: "Camas Disponibles" },
              { value: "100K+", label: "Pacientes por Año" },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                variants={{
                  hidden: { opacity: 0, y: 12 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease } },
                }}
              >
                <div className="text-white font-bold text-2xl leading-none mb-1">{stat.value}</div>
                <div className="text-white/50 text-xs uppercase tracking-wide">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Emergency bar */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 z-10 py-4 px-6 lg:px-8"
        style={{ backgroundColor: "rgb(0,133,132)" }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.0, ease }}
      >
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
            <span className="text-white font-semibold text-sm">Urgencias 24 horas · 7 días a la semana</span>
          </div>
          <a href="tel:6075895053" className="flex items-center gap-2 text-white font-bold text-base hover:text-white/80 transition-colors">
            <Phone size={16} />
            (607) 5895053
          </a>
        </div>
      </motion.div>
    </section>
  );
}

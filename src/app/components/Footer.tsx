import { Link } from "react-router";
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, Twitter } from "lucide-react";

const footerLinks = {
  institution: {
    title: "Nosotros",
    links: [
      { label: "Misión y Visión", href: "/nosotros/mision-vision" },
      { label: "Valores y Principios", href: "/nosotros/valores" },
      { label: "Política de Calidad", href: "/nosotros/calidad" },
      { label: "Gobierno Corporativo", href: "/nosotros/gobierno" },
      { label: "Objetivos Institucionales", href: "/nosotros/objetivos" },
    ],
  },
  services: {
    title: "Servicios",
    links: [
      { label: "Urgencias 24/7", href: "/servicios/urgencias" },
      { label: "Cirugía", href: "/servicios/cirugia" },
      { label: "Hospitalización", href: "/servicios/hospitalizacion" },
      { label: "UCI Adultos", href: "/servicios/uci" },
      { label: "Imágenes Diagnósticas", href: "/servicios/imagenologia" },
      { label: "Rehabilitación", href: "/servicios/rehabilitacion" },
    ],
  },
  patients: {
    title: "Pacientes",
    links: [
      { label: "Agendar Cita", href: "/#citas" },
      { label: "Resultados Médicos", href: "/resultados" },
      { label: "PQR y Sugerencias", href: "/pqr" },
      { label: "Blog Médico", href: "/blog" },
    ],
  },
};

const social = [
  { icon: <Facebook size={16} />, href: "#", label: "Facebook" },
  { icon: <Instagram size={16} />, href: "#", label: "Instagram" },
  { icon: <Youtube size={16} />, href: "#", label: "YouTube" },
  { icon: <Twitter size={16} />, href: "#", label: "Twitter/X" },
];

export function Footer() {
  return (
    <footer className="bg-[#0d1b2a] text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-sm flex items-center justify-center" style={{ backgroundColor: "rgb(0,133,132)" }}>
                <svg viewBox="0 0 36 36" fill="none" className="w-5 h-5">
                  <path d="M18 4v28M4 18h28" stroke="white" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </div>
              <div>
                <div className="text-[14px] font-semibold leading-tight">Clínica San José</div>
                <div className="text-[9px] text-white/40 uppercase tracking-widest">de Cúcuta</div>
              </div>
            </div>

            <p className="text-white/45 text-[13px] leading-relaxed mb-6">
              Institución prestadora de servicios de salud de tercer nivel de complejidad. Más de 35 años al servicio de la región.
            </p>

            <div className="flex flex-col gap-2.5 text-[13px] text-white/50">
              <div className="flex items-start gap-2.5">
                <MapPin size={14} className="text-[rgb(0,133,132)] mt-0.5 shrink-0" />
                <span>Calle 13 #1E-74, Barrio Los Caobos, Cúcuta</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone size={14} className="text-[rgb(0,133,132)] shrink-0" />
                <span>(607) 5895053</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail size={14} className="text-[rgb(0,133,132)] shrink-0" />
                <span>info@clinicasanjose.com.co</span>
              </div>
            </div>

            <div className="flex gap-2 mt-6">
              {social.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg bg-white/6 flex items-center justify-center text-white/40 hover:bg-[rgb(0,133,132)] hover:text-white transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.values(footerLinks).map((col) => (
            <div key={col.title}>
              <h5 className="text-white font-semibold text-[13px] mb-5 uppercase tracking-wider">{col.title}</h5>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-white/45 text-[13px] hover:text-[rgb(0,165,164)] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-white/6" />

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-white/30 text-[12px]">
          <div className="flex flex-wrap items-center gap-1">
            <span>© {new Date().getFullYear()} Clínica San José de Cúcuta.</span>
            <span className="hidden md:inline">Todos los derechos reservados.</span>
            <span>·</span>
            <span>NIT 890.504.230-1</span>
            <span>·</span>
            <span>HABILITACIÓN MinSalud</span>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Link to="/legal#privacidad" className="hover:text-white/60 transition-colors">Política de Privacidad</Link>
            <Link to="/legal#terminos" className="hover:text-white/60 transition-colors">Términos de Uso</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

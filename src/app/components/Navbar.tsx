import { useState, useEffect } from "react";
import { Link } from "react-router";
import { Menu, X, ChevronDown, Phone } from "lucide-react";

const navLinks = [
  { label: "Inicio", href: "/" },
  {
    label: "Nosotros",
    href: "#nosotros",
    children: [
      { label: "Misión y Visión", href: "/nosotros/mision-vision" },
      { label: "Valores y Principios", href: "/nosotros/valores" },
      { label: "Política de Calidad", href: "/nosotros/calidad" },
      { label: "Gobierno Corporativo", href: "/nosotros/gobierno" },
      { label: "Objetivos Institucionales", href: "/nosotros/objetivos" },
    ],
  },
  {
    label: "Servicios",
    href: "#servicios",
    children: [
      { label: "Cirugía", href: "/servicios/cirugia" },
      { label: "Urgencias", href: "/servicios/urgencias" },
      { label: "Hospitalización", href: "/servicios/hospitalizacion" },
      { label: "Unidad de Ortopedia y Traumatología", href: "/servicios/ortopedia" },
      { label: "Unidad de Cuidados Coronarios", href: "/servicios/cuidados-coronarios" },
      { label: "Unidad de Cuidados Intensivos", href: "/servicios/uci" },
      { label: "Unidad de Imagenología", href: "/servicios/imagenologia" },
      { label: "Unidad de Rehabilitación", href: "/servicios/rehabilitacion" },
      { label: "UCI Neonatal Pediátrica", href: "/servicios/uci-neonatal" },
      { label: "Laboratorio y Banco de Sangre", href: "/servicios/laboratorio" },
    ],
  },
  { label: "Blog", href: "/blog" },
  { label: "Trabaje con Nosotros", href: "/carreras" },
  { label: "Contacto", href: "#contacto" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [lang, setLang] = useState<"ES" | "EN">("ES");

  useEffect(() => {
    const handler = () => {
      setScrolled(window.scrollY > 20);
      setOpenDropdown(null);
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      {/* Top bar */}
      <div className="hidden md:flex w-full bg-[rgb(0,133,132)] text-white text-xs items-center justify-between px-8 py-2">
        <div className="flex items-center gap-6">
          <a href="tel:6075895053" className="flex items-center gap-1.5 hover:text-white/80 transition-colors">
            <Phone size={12} />
            <span>(607) 5895053</span>
          </a>
          <span className="text-white/40">|</span>
          <span>WhatsApp: 318 322 8286</span>
        </div>
        <div className="flex items-center gap-4">
          <Link to="/resultados" className="hover:text-white/80 transition-colors">Resultados Médicos</Link>
          <span className="text-white/40">|</span>
          <Link to="/pqr" className="hover:text-white/80 transition-colors">PQR</Link>
          <span className="text-white/40">|</span>
          <button
            onClick={() => setLang(lang === "ES" ? "EN" : "ES")}
            className="flex items-center gap-1 hover:text-white/80 transition-colors font-medium"
          >
            <span>{lang === "ES" ? "🇨🇴 ES" : "🇺🇸 EN"}</span>
          </button>
        </div>
      </div>

      {/* Main nav */}
      <nav
        className={`w-full sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-black/5"
            : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-18 py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-sm flex items-center justify-center" style={{ backgroundColor: "rgb(0,133,132)" }}>
                <svg viewBox="0 0 36 36" fill="none" className="w-5 h-5">
                  <path d="M18 4v28M4 18h28" stroke="white" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </div>
              <div>
                <div className="text-[15px] font-semibold text-[#1a1a2e] leading-tight tracking-tight">Clínica San José</div>
                <div className="text-[10px] text-[#6b7280] uppercase tracking-widest leading-tight">de Cúcuta</div>
              </div>
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) =>
                link.children ? (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => setOpenDropdown(link.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <button className="flex items-center gap-1 px-3 py-2 text-[13px] text-[#374151] hover:text-[rgb(0,133,132)] transition-colors font-medium">
                      {link.label}
                      <ChevronDown
                        size={13}
                        className={`transition-transform duration-200 ${openDropdown === link.label ? "rotate-180" : ""}`}
                      />
                    </button>

                    {/*
                      The dropdown wrapper starts flush at top-full (no gap),
                      and the visible card is pushed down with pt-2 padding.
                      This keeps the hover zone continuous — no gap for the
                      mouse to escape through.
                    */}
                    <div
                      className={`absolute top-full left-0 z-50 transition-all duration-150 ${
                        openDropdown === link.label
                          ? "opacity-100 pointer-events-auto translate-y-0"
                          : "opacity-0 pointer-events-none -translate-y-1"
                      }`}
                      style={{ paddingTop: "8px" }}
                    >
                      <div
                        className={`bg-white border border-black/8 rounded-xl shadow-lg shadow-black/8 py-2 ${
                          link.label === "Servicios" ? "w-64" : "w-52"
                        }`}
                      >
                        {link.children.map((child) =>
                          child.href.startsWith("/") ? (
                            <Link
                              key={child.label}
                              to={child.href}
                              className="block px-4 py-2.5 text-[13px] text-[#4b5563] hover:text-[rgb(0,133,132)] hover:bg-[rgb(0,133,132)]/5 transition-colors"
                              onClick={() => setOpenDropdown(null)}
                            >
                              {child.label}
                            </Link>
                          ) : (
                            <a
                              key={child.label}
                              href={child.href}
                              className="block px-4 py-2.5 text-[13px] text-[#4b5563] hover:text-[rgb(0,133,132)] hover:bg-[rgb(0,133,132)]/5 transition-colors"
                              onClick={() => setOpenDropdown(null)}
                            >
                              {child.label}
                            </a>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                ) : link.href.startsWith("/") && !link.href.startsWith("/#") ? (
                  <Link
                    key={link.label}
                    to={link.href}
                    className="px-3 py-2 text-[13px] text-[#374151] hover:text-[rgb(0,133,132)] transition-colors font-medium"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    className="px-3 py-2 text-[13px] text-[#374151] hover:text-[rgb(0,133,132)] transition-colors font-medium"
                  >
                    {link.label}
                  </a>
                )
              )}
            </div>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="#citas"
                className="px-5 py-2.5 text-[13px] font-semibold text-white rounded-lg transition-all duration-200 hover:opacity-90 active:scale-[0.98]"
                style={{ backgroundColor: "rgb(0,133,132)" }}
              >
                Agendar Cita
              </a>
            </div>

            {/* Mobile toggle */}
            <button
              className="lg:hidden p-2 text-[#374151] hover:text-[rgb(0,133,132)] transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-black/8 bg-white px-6 pb-6 pt-4">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="py-3 text-[15px] text-[#374151] hover:text-[rgb(0,133,132)] border-b border-black/5 last:border-0 transition-colors font-medium"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#citas"
                className="mt-4 py-3 text-center text-[15px] font-semibold text-white rounded-xl transition-all"
                style={{ backgroundColor: "rgb(0,133,132)" }}
                onClick={() => setMobileOpen(false)}
              >
                Agendar Cita
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

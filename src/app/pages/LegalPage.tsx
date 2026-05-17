import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { ChevronRight } from "lucide-react";
import { FadeIn } from "../components/FadeIn";

type Tab = "privacidad" | "terminos";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-10">
      <h2 className="text-[#0d1b2a] font-bold mb-4" style={{ fontSize: "clamp(1.05rem, 2vw, 1.2rem)" }}>
        {title}
      </h2>
      <div className="space-y-3 text-[#4b5563] text-[15px] leading-[1.85]">{children}</div>
    </div>
  );
}

function SubSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-6">
      <h3 className="text-[#0d1b2a] font-semibold text-[14px] mb-2 uppercase tracking-wide">{title}</h3>
      <div className="space-y-2 text-[#4b5563] text-[15px] leading-[1.85]">{children}</div>
    </div>
  );
}

function Li({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2.5">
      <div className="w-1.5 h-1.5 rounded-full shrink-0 mt-2.5" style={{ backgroundColor: "rgb(0,133,132)" }} />
      <span>{children}</span>
    </li>
  );
}

export function LegalPage() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState<Tab>(
    location.hash === "#terminos" ? "terminos" : "privacidad"
  );

  useEffect(() => {
    if (location.hash === "#terminos") setActiveTab("terminos");
    if (location.hash === "#privacidad") setActiveTab("privacidad");
  }, [location.hash]);

  return (
    <div className="min-h-screen bg-white">

      {/* Hero */}
      <section className="relative w-full flex items-end overflow-hidden" style={{ backgroundColor: "#0d1b2a", minHeight: "32vh" }}>
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "32px 32px" }}
        />
        <div className="absolute left-0 top-0 bottom-0 w-1 z-10" style={{ backgroundColor: "rgb(0,133,132)" }} />
        <div className="relative z-10 w-full max-w-4xl mx-auto px-6 lg:px-8 pb-12 pt-20">
          <nav className="flex items-center gap-1.5 text-white/40 text-xs mb-6">
            <Link to="/" className="hover:text-white/70 transition-colors">Inicio</Link>
            <ChevronRight size={12} />
            <span className="text-white/70">Legal</span>
          </nav>
          <h1 className="text-white leading-tight" style={{ fontSize: "clamp(1.7rem, 4vw, 2.5rem)", fontWeight: 700 }}>
            Aviso Legal
          </h1>
          <p className="text-white/50 text-sm mt-2">Clínica San José de Cúcuta · NIT 890.504.230-1</p>
        </div>
      </section>

      {/* Tabs */}
      <div className="border-b border-black/8 bg-white sticky top-0 z-40">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="flex gap-0">
            {([
              { id: "privacidad" as Tab, label: "Política de Privacidad" },
              { id: "terminos" as Tab, label: "Términos de Uso" },
            ]).map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-4 text-sm font-semibold border-b-2 transition-all duration-150 ${
                  activeTab === tab.id
                    ? "border-[rgb(0,133,132)] text-[rgb(0,133,132)]"
                    : "border-transparent text-[#6b7280] hover:text-[#374151]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-14">
        {activeTab === "privacidad" && (
          <FadeIn key="privacidad">
            <div className="flex items-center justify-between mb-10 pb-6 border-b border-black/6">
              <div>
                <h2 className="text-[#0d1b2a] font-bold text-xl">Política de Privacidad y Tratamiento de Datos Personales</h2>
                <p className="text-[#9ca3af] text-sm mt-1">Última actualización: 1 de enero de 2026</p>
              </div>
            </div>

            <Section title="1. Responsable del Tratamiento">
              <p>
                La <strong className="text-[#0d1b2a]">Clínica San José de Cúcuta S.A.</strong>, identificada con NIT 890.504.230-1, con domicilio en Calle 13 #1E-74, Barrio Los Caobos, Cúcuta, Norte de Santander, Colombia, actúa como Responsable del Tratamiento de los datos personales que recopila a través de sus canales de atención presenciales, telefónicos y digitales.
              </p>
              <p>
                Para ejercer sus derechos como titular de datos o presentar consultas relacionadas con el tratamiento de su información personal, puede comunicarse a:{" "}
                <a href="mailto:datospersonales@clinicasanjose.com.co" className="font-medium" style={{ color: "rgb(0,133,132)" }}>
                  datospersonales@clinicasanjose.com.co
                </a>{" "}
                o al teléfono (607) 5895053.
              </p>
            </Section>

            <Section title="2. Marco Normativo">
              <p>
                Esta política se rige por la normativa vigente en Colombia en materia de protección de datos personales, en particular:
              </p>
              <ul className="space-y-1.5 mt-3">
                <Li>Ley 1581 de 2012 — Régimen General de Protección de Datos Personales.</Li>
                <Li>Decreto 1377 de 2013 — Reglamentación parcial de la Ley 1581 de 2012.</Li>
                <Li>Decreto 1074 de 2015 — Decreto Único Reglamentario del Sector Comercio, Industria y Turismo (Libro 2, Parte 2, Título 2, Capítulo 25).</Li>
                <Li>Ley 1751 de 2015 — Ley Estatutaria de Salud.</Li>
                <Li>Resolución 839 de 2017 del Ministerio de Salud — Historia clínica electrónica.</Li>
              </ul>
            </Section>

            <Section title="3. Datos Personales Recopilados">
              <SubSection title="3.1 Datos de identificación y contacto">
                <p>Nombres y apellidos, número y tipo de documento de identidad, fecha de nacimiento, sexo biológico, nacionalidad, dirección de residencia, número de teléfono, correo electrónico y entidad aseguradora.</p>
              </SubSection>
              <SubSection title="3.2 Datos de salud (categoría especial)">
                <p>Historia clínica, diagnósticos, resultados de exámenes de laboratorio e imágenes diagnósticas, tratamientos prescritos, medicamentos administrados, alergias, antecedentes familiares relevantes y cualquier otra información necesaria para la prestación de servicios de salud. Estos datos reciben tratamiento con protección reforzada conforme al artículo 5 de la Ley 1581 de 2012.</p>
              </SubSection>
              <SubSection title="3.3 Datos de navegación">
                <p>Al acceder a nuestro sitio web recopilamos de forma automatizada datos técnicos como dirección IP, tipo de navegador, sistema operativo, páginas visitadas y duración de la sesión, con fines estadísticos y de mejora de la experiencia de usuario. No utilizamos estos datos para identificar individualmente a los visitantes.</p>
              </SubSection>
            </Section>

            <Section title="4. Finalidades del Tratamiento">
              <ul className="space-y-1.5">
                <Li>Prestar servicios de salud, incluidos diagnóstico, tratamiento, hospitalización y seguimiento clínico.</Li>
                <Li>Gestionar la programación de citas médicas y confirmar las mismas por los canales de contacto registrados.</Li>
                <Li>Enviar resultados de exámenes de laboratorio e imágenes diagnósticas al titular o a quien este autorice.</Li>
                <Li>Facturar y gestionar el cobro de los servicios prestados ante el paciente, su aseguradora o el pagador correspondiente.</Li>
                <Li>Cumplir con las obligaciones de reporte ante las autoridades de salud, vigilancia epidemiológica y entes de control (Supersalud, Ministerio de Salud, INVIMA).</Li>
                <Li>Enviar comunicaciones institucionales, boletines de salud y recordatorios de cita cuando el titular haya otorgado su consentimiento expreso.</Li>
                <Li>Mejorar la calidad de nuestros servicios mediante análisis estadísticos anonimizados.</Li>
              </ul>
            </Section>

            <Section title="5. Base Jurídica del Tratamiento">
              <p>
                El tratamiento de datos se fundamenta en: (i) el consentimiento libre, previo, expreso e informado del titular, obtenido al momento de la atención o del registro en nuestros canales digitales; (ii) la ejecución de la relación contractual de prestación de servicios de salud; (iii) el cumplimiento de obligaciones legales en materia sanitaria; y (iv) el interés legítimo de la institución en mejorar la calidad asistencial.
              </p>
              <p>
                Para datos de salud se requiere siempre autorización explícita del titular, salvo las excepciones contempladas en el artículo 10 de la Ley 1581 de 2012 (tratamiento ordenado por autoridad judicial, datos necesarios para preservar la vida del titular o para proteger la salud pública).
              </p>
            </Section>

            <Section title="6. Transferencia y Transmisión de Datos">
              <p>La Clínica San José de Cúcuta no vende ni cede sus bases de datos a terceros con fines comerciales. Los datos personales podrán ser compartidos únicamente con:</p>
              <ul className="space-y-1.5 mt-3">
                <Li>Entidades promotoras de salud (EPS) y administradoras del régimen subsidiado (ARS) para efectos de facturación y autorización de procedimientos.</Li>
                <Li>Laboratorios externos, centros de imágenes y especialistas a quienes se refiere al paciente para complementar su atención.</Li>
                <Li>Autoridades de salud y entes regulatorios en cumplimiento de obligaciones legales de reporte.</Li>
                <Li>Proveedores tecnológicos que actúan como encargados del tratamiento, bajo contratos que garantizan estándares equivalentes de protección.</Li>
              </ul>
              <p className="mt-3">
                En ningún caso se realizarán transferencias internacionales de datos sin la autorización previa del titular o sin dar cumplimiento a los requisitos del artículo 26 de la Ley 1581 de 2012.
              </p>
            </Section>

            <Section title="7. Conservación de los Datos">
              <p>
                La historia clínica se conserva por un mínimo de 15 años contados desde la última atención, conforme a la Resolución 1995 de 1999 del Ministerio de Salud. Los datos de contacto y de facturación se conservan durante la vigencia de la relación con el paciente y hasta diez años adicionales para efectos de prescripción de obligaciones legales. Los datos de navegación web se eliminan transcurridos 24 meses.
              </p>
            </Section>

            <Section title="8. Derechos del Titular">
              <p>En su calidad de titular de datos personales usted tiene derecho a:</p>
              <ul className="space-y-1.5 mt-3">
                <Li><strong className="text-[#374151]">Conocer</strong> los datos personales que la institución trata sobre usted y la finalidad de dicho tratamiento.</Li>
                <Li><strong className="text-[#374151]">Actualizar y rectificar</strong> sus datos cuando sean inexactos o incompletos.</Li>
                <Li><strong className="text-[#374151]">Suprimir</strong> sus datos cuando no sean necesarios para las finalidades que justificaron su recopilación, salvo obligación legal de conservación.</Li>
                <Li><strong className="text-[#374151]">Revocar</strong> la autorización otorgada para el tratamiento de datos en cualquier momento, sin efecto retroactivo.</Li>
                <Li><strong className="text-[#374151]">Presentar quejas</strong> ante la Superintendencia de Industria y Comercio (SIC) si considera que sus derechos han sido vulnerados.</Li>
              </ul>
              <p className="mt-3">
                Para ejercer cualquiera de estos derechos, envíe su solicitud escrita a{" "}
                <a href="mailto:datospersonales@clinicasanjose.com.co" className="font-medium" style={{ color: "rgb(0,133,132)" }}>
                  datospersonales@clinicasanjose.com.co
                </a>{" "}
                indicando su nombre completo, número de identificación, derecho que desea ejercer y descripción del requerimiento. La institución dará respuesta en un plazo máximo de 10 días hábiles para consultas y 15 días hábiles para reclamos, conforme a los artículos 14 y 15 de la Ley 1581 de 2012.
              </p>
            </Section>

            <Section title="9. Seguridad de la Información">
              <p>
                La Clínica San José de Cúcuta implementa medidas técnicas, administrativas y físicas para proteger los datos personales contra acceso no autorizado, pérdida, alteración o divulgación indebida. Entre estas medidas se incluyen cifrado de bases de datos, controles de acceso por roles, auditorías periódicas de seguridad y capacitación continua del personal.
              </p>
            </Section>

            <Section title="10. Modificaciones a esta Política">
              <p>
                La institución se reserva el derecho de modificar esta política cuando sea necesario por cambios normativos, tecnológicos o institucionales. Las modificaciones serán publicadas en este sitio web con al menos 10 días hábiles de anticipación a su entrada en vigencia. El uso continuado del sitio o de los servicios de la institución tras la publicación de los cambios implica la aceptación de la política actualizada.
              </p>
            </Section>
          </FadeIn>
        )}

        {activeTab === "terminos" && (
          <FadeIn key="terminos">
            <div className="flex items-center justify-between mb-10 pb-6 border-b border-black/6">
              <div>
                <h2 className="text-[#0d1b2a] font-bold text-xl">Términos y Condiciones de Uso</h2>
                <p className="text-[#9ca3af] text-sm mt-1">Última actualización: 1 de enero de 2026</p>
              </div>
            </div>

            <Section title="1. Aceptación de los Términos">
              <p>
                El acceso y uso del sitio web de la <strong className="text-[#0d1b2a]">Clínica San José de Cúcuta S.A.</strong> implica la aceptación plena y sin reservas de los presentes Términos y Condiciones de Uso. Si no está de acuerdo con alguna de las disposiciones aquí contenidas, le solicitamos abstenerse de utilizar este sitio.
              </p>
              <p>
                Estos términos rigen la relación entre la Clínica San José de Cúcuta y cualquier persona que acceda al sitio web, utilice el portal de resultados médicos, solicite citas en línea o interactúe con cualquier otro servicio digital ofrecido por la institución.
              </p>
            </Section>

            <Section title="2. Objeto y Alcance">
              <p>
                Este sitio web tiene como propósito proporcionar información institucional sobre la Clínica San José de Cúcuta, facilitar la solicitud de citas médicas, permitir la consulta de resultados de exámenes mediante código de radicado, publicar contenido educativo sobre salud y habilitar canales de comunicación para peticiones, quejas, reclamos y sugerencias (PQRS).
              </p>
              <p>
                El contenido disponible en este sitio tiene carácter exclusivamente informativo. Ningún artículo, ficha de servicio o material publicado constituye un diagnóstico médico, prescripción terapéutica ni consejo clínico individualizado.
              </p>
            </Section>

            <Section title="3. Información Médica y Limitación de Responsabilidad Clínica">
              <p>
                Los artículos del blog y los contenidos de salud publicados en este sitio son elaborados por profesionales de la salud con fines educativos y de salud pública. No reemplazan la consulta médica presencial ni deben ser utilizados para autodiagnóstico o automedicación.
              </p>
              <p>
                La Clínica San José de Cúcuta no asume responsabilidad alguna por las decisiones de salud que el usuario tome basándose exclusivamente en la información publicada en este sitio web. Ante cualquier síntoma o duda médica, consulte a un profesional de la salud.
              </p>
            </Section>

            <Section title="4. Portal de Resultados Médicos">
              <SubSection title="4.1 Acceso y confidencialidad">
                <p>El acceso al portal de resultados médicos se realiza mediante un código de radicado único y personal. Este código es confidencial y de uso exclusivo del titular del examen o de quien este designe expresamente.</p>
              </SubSection>
              <SubSection title="4.2 Responsabilidad del usuario">
                <p>El usuario es responsable de mantener la confidencialidad de su código de radicado y de todas las actividades que se realicen con dicho código. La Clínica San José de Cúcuta no será responsable por el acceso no autorizado derivado de la divulgación voluntaria o involuntaria del código por parte del usuario.</p>
              </SubSection>
              <SubSection title="4.3 Naturaleza de los resultados digitales">
                <p>Los resultados disponibles en el portal digital tienen el mismo valor clínico que los documentos físicos. Sin embargo, para efectos médico-legales, contractuales o ante entidades de salud, puede requerirse el documento con firma física del profesional responsable, el cual puede solicitarse en la Oficina de Atención al Usuario.</p>
              </SubSection>
            </Section>

            <Section title="5. Solicitud de Citas en Línea">
              <p>
                El formulario de solicitud de citas disponible en este sitio genera una solicitud preliminar que debe ser confirmada por el equipo de Programación de la institución. La cita queda definitivamente agendada únicamente cuando el paciente recibe confirmación por WhatsApp o llamada telefónica al número registrado. La institución no garantiza disponibilidad inmediata con el especialista solicitado.
              </p>
            </Section>

            <Section title="6. Propiedad Intelectual">
              <p>
                Todos los contenidos de este sitio web —incluyendo textos, artículos, imágenes, logotipos, íconos, diseño gráfico y código fuente— son propiedad de la Clínica San José de Cúcuta o de sus respectivos titulares, y están protegidos por las leyes colombianas e internacionales de propiedad intelectual, en particular la Ley 23 de 1982 y la Decisión Andina 351 de 1993.
              </p>
              <p>
                Queda prohibida la reproducción total o parcial, transformación, distribución o comunicación pública de cualquier elemento de este sitio sin autorización previa y escrita de la institución, salvo usos permitidos por la ley para fines educativos o informativos no comerciales con atribución expresa.
              </p>
            </Section>

            <Section title="7. Uso Adecuado del Sitio">
              <p>El usuario se compromete a utilizar este sitio de conformidad con la ley y las buenas costumbres. En particular, queda prohibido:</p>
              <ul className="space-y-1.5 mt-3">
                <Li>Intentar acceder sin autorización a sistemas, bases de datos o cuentas de otros usuarios.</Li>
                <Li>Introducir, transmitir o difundir virus informáticos o cualquier otro código malicioso.</Li>
                <Li>Realizar scraping, indexación automatizada o extracción masiva de datos sin consentimiento escrito.</Li>
                <Li>Suplantar la identidad de otro paciente para acceder a resultados médicos que no le corresponden.</Li>
                <Li>Utilizar el portal de PQRS para presentar solicitudes con información falsa o con fines distintos a los previstos.</Li>
              </ul>
            </Section>

            <Section title="8. Disponibilidad del Servicio">
              <p>
                La Clínica San José de Cúcuta realizará sus mejores esfuerzos para mantener el sitio web operativo de forma continua. Sin embargo, no garantiza la disponibilidad ininterrumpida del servicio y se reserva el derecho de suspenderlo temporalmente por razones de mantenimiento, actualización o causas de fuerza mayor. En ningún caso dicha suspensión generará derecho a indemnización alguna para el usuario.
              </p>
            </Section>

            <Section title="9. Ley Aplicable y Jurisdicción">
              <p>
                Estos términos se rigen por las leyes de la República de Colombia. Para la resolución de cualquier controversia derivada del uso de este sitio web, las partes se someten a la jurisdicción de los jueces y tribunales competentes de la ciudad de Cúcuta, Norte de Santander, renunciando expresamente a cualquier otro fuero que pudiera corresponderles.
              </p>
            </Section>

            <Section title="10. Contacto">
              <p>
                Para consultas relacionadas con estos términos, comuníquese con la Dirección Jurídica de la Clínica San José de Cúcuta a través del correo{" "}
                <a href="mailto:juridica@clinicasanjose.com.co" className="font-medium" style={{ color: "rgb(0,133,132)" }}>
                  juridica@clinicasanjose.com.co
                </a>{" "}
                o en nuestra sede principal, Calle 13 #1E-74, Los Caobos, Cúcuta, en horario de lunes a viernes de 8:00 AM a 5:00 PM.
              </p>
            </Section>
          </FadeIn>
        )}

        {/* Bottom nav */}
        <div className="mt-14 pt-8 border-t border-black/6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#9ca3af] text-xs">
            Clínica San José de Cúcuta S.A. · NIT 890.504.230-1 · Cúcuta, Colombia
          </p>
          <div className="flex gap-4">
            <Link to="/" className="text-[rgb(0,133,132)] text-sm font-semibold hover:underline underline-offset-2">
              Volver al inicio
            </Link>
            <a href="mailto:info@clinicasanjose.com.co" className="text-[#6b7280] text-sm hover:text-[#374151] transition-colors">
              info@clinicasanjose.com.co
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

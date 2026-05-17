export interface JobPosting {
  id: number;
  department: string;
  title: string;
  type: "Tiempo Completo" | "Medio Tiempo" | "Contrato" | "Turno Rotativo";
  area: string;
  urgent?: boolean;
  featured?: boolean;
  description: string;
  requirements: string[];
  desirable?: string[];
  salary?: string;
  closing: string;
}

export const jobPostings: JobPosting[] = [
  {
    id: 1,
    department: "Medicina Clínica",
    title: "Médico Especialista en Cardiología",
    type: "Tiempo Completo",
    area: "Instituto del Corazón",
    urgent: true,
    featured: true,
    description:
      "Buscamos un cardiólogo clínico o intervencionista para incorporarse al equipo del Instituto del Corazón. El profesional realizará consultas ambulatorias, interpretación de estudios diagnósticos, participación en rondas de hospitalización y actividades académicas con residentes.",
    requirements: [
      "Título de Médico con especialización en Cardiología reconocida por el MEN",
      "Tarjeta profesional vigente ante el Tribunal Ético de Medicina",
      "Mínimo 2 años de experiencia clínica post-especialización",
      "Disponibilidad para turnos de urgencias 1 vez por semana",
    ],
    desirable: [
      "Subespecialización en Hemodinámica o Electrofisiología",
      "Experiencia en ecocardiografía transtorácica y transesofágica",
    ],
    salary: "Según perfil y experiencia",
    closing: "31 Mayo 2026",
  },
  {
    id: 2,
    department: "Enfermería",
    title: "Enfermero(a) Profesional — UCI Adultos",
    type: "Turno Rotativo",
    area: "Unidad de Cuidados Intensivos",
    urgent: true,
    description:
      "Profesional de enfermería para la UCI adultos con capacidad para manejar pacientes críticos, ventilación mecánica invasiva, monitoreo hemodinámico avanzado y trabajo interdisciplinario con el equipo médico.",
    requirements: [
      "Título profesional en Enfermería y tarjeta profesional vigente",
      "Mínimo 1 año de experiencia en UCI o áreas de alta complejidad",
      "Curso vigente de RCP avanzado (BLS + ACLS)",
      "Disponibilidad para turnos rotativos de 12 horas",
    ],
    desirable: [
      "Diplomado en Cuidado Crítico del Adulto",
      "Manejo de ventiladores Puritan Bennett o Dräger",
    ],
    salary: "Entre $3.200.000 y $4.100.000 COP + prestaciones de ley",
    closing: "25 Mayo 2026",
  },
  {
    id: 3,
    department: "Diagnóstico",
    title: "Tecnólogo en Imágenes Diagnósticas",
    type: "Tiempo Completo",
    area: "Unidad de Imagenología",
    description:
      "Tecnólogo para la operación de equipos de tomografía computarizada, resonancia magnética, radiología digital y fluoroscopia. Responsable del posicionamiento del paciente, adquisición de imágenes y gestión del PACS.",
    requirements: [
      "Título de Tecnólogo en Radiología e Imágenes Diagnósticas",
      "Tarjeta profesional vigente",
      "Experiencia mínima de 1 año en equipos de TC o RM",
    ],
    desirable: [
      "Manejo de equipos Siemens SOMATOM o GE Revolution",
      "Conocimiento de protocolos de contraste yodado y gadolinio",
    ],
    salary: "Entre $2.100.000 y $2.800.000 COP",
    closing: "20 Mayo 2026",
  },
  {
    id: 4,
    department: "Cirugía",
    title: "Instrumentador(a) Quirúrgico(a)",
    type: "Turno Rotativo",
    area: "Salas de Cirugía",
    description:
      "Instrumentador(a) para salas de cirugía electiva y de urgencias en procedimientos de alta y mediana complejidad. Participación en cirugías cardiovasculares, ortopédicas, abdominales y laparoscópicas.",
    requirements: [
      "Título de Instrumentación Quirúrgica y tarjeta profesional vigente",
      "Mínimo 2 años de experiencia en salas de cirugía de tercer nivel",
      "Manejo de instrumental laparoscópico y de cirugía robótica asistida",
      "Disponibilidad para turno nocturno y festivos",
    ],
    salary: "Según experiencia + recargos nocturnos y festivos",
    closing: "28 Mayo 2026",
  },
  {
    id: 5,
    department: "Laboratorio",
    title: "Bacterióloga — Laboratorio Clínico",
    type: "Tiempo Completo",
    area: "Laboratorio y Banco de Sangre",
    description:
      "Bacterióloga para el área de microbiología clínica. Responsable de la siembra, identificación y antibiograma de muestras clínicas, control de calidad interno y externo, y apoyo al programa de uso racional de antibióticos (PROA).",
    requirements: [
      "Título de Bacteriología y tarjeta profesional vigente",
      "Experiencia mínima de 1 año en laboratorio hospitalario de alta complejidad",
      "Manejo de VITEK 2 o MALDI-TOF",
    ],
    desirable: [
      "Conocimiento en sistemas de hemocultivos BacT/ALERT",
      "Formación en resistencia bacteriana y epidemiología hospitalaria",
    ],
    salary: "Entre $2.800.000 y $3.400.000 COP",
    closing: "22 Mayo 2026",
  },
  {
    id: 6,
    department: "Medicina Clínica",
    title: "Médico General — Urgencias",
    type: "Turno Rotativo",
    area: "Servicio de Urgencias",
    description:
      "Médico general para el servicio de urgencias de alta complejidad con cobertura 24/7. Atención inicial, triage, estabilización, solicitud de estudios diagnósticos y coordinación con especialistas de turno.",
    requirements: [
      "Título de Médico y tarjeta profesional vigente",
      "Cursos ACLS, ATLS y SVAP vigentes",
      "Disponibilidad para turnos de 12 horas rotativo incluido nocturno",
    ],
    desirable: [
      "Experiencia previa en urgencias hospitalarias",
      "Manejo de ultrasonido POCUS",
    ],
    salary: "Valor hora según tarifario CSJ + recargos de ley",
    closing: "30 Mayo 2026",
  },
  {
    id: 7,
    department: "Rehabilitación",
    title: "Fisioterapeuta — Rehabilitación Cardiopulmonar",
    type: "Tiempo Completo",
    area: "Unidad de Rehabilitación",
    description:
      "Fisioterapeuta con énfasis en rehabilitación cardiopulmonar para manejo de pacientes post-UCI, post-cirugía cardíaca y con EPOC. Trabajo en equipo multidisciplinario con cardiología, neumología y terapia respiratoria.",
    requirements: [
      "Título de Fisioterapia y tarjeta profesional vigente",
      "Experiencia mínima de 1 año en rehabilitación cardiopulmonar o UCI",
      "Manejo de espirometría y prueba de marcha de 6 minutos",
    ],
    salary: "Entre $2.400.000 y $3.000.000 COP",
    closing: "18 Mayo 2026",
  },
  {
    id: 8,
    department: "Administrativo",
    title: "Coordinadora de Atención al Usuario",
    type: "Tiempo Completo",
    area: "Oficina de Atención al Usuario",
    description:
      "Profesional para la coordinación del área de atención al usuario: gestión de PQRS, programación de citas, coordinación con servicios clínicos, seguimiento a pacientes internacionales y reporte de indicadores de satisfacción.",
    requirements: [
      "Profesional en Administración en Salud, Trabajo Social o afines",
      "Mínimo 2 años de experiencia en atención al usuario en IPS",
      "Manejo de software hospitalario (HIS) y herramientas ofimáticas",
      "Excelentes habilidades de comunicación asertiva y resolución de conflictos",
    ],
    desirable: [
      "Conocimiento del Sistema Obligatorio de Garantía de Calidad (SOGCS)",
      "Inglés nivel B1 o superior para atención a pacientes internacionales",
    ],
    salary: "Entre $2.200.000 y $2.800.000 COP",
    closing: "15 Mayo 2026",
  },
  {
    id: 9,
    department: "Enfermería",
    title: "Auxiliar de Enfermería — Hospitalización",
    type: "Turno Rotativo",
    area: "Pisos de Hospitalización",
    description:
      "Auxiliar de enfermería para pisos de hospitalización de medicina interna, cirugía y ortopedia. Administración de medicamentos, curaciones, toma de signos vitales y apoyo al cuidado básico del paciente.",
    requirements: [
      "Técnico en Auxiliar de Enfermería con tarjeta de habilitación vigente",
      "Curso de RCP básico (BLS) vigente",
      "Disponibilidad para turnos rotativos de 12 horas",
    ],
    salary: "SMLV + prestaciones de ley + recargos",
    closing: "20 Mayo 2026",
  },
];

export interface AboutSection {
  title: string;
  body: string;
}

export interface AboutCard {
  title: string;
  body?: string;
  items?: string[];
}

export interface AboutPillar {
  title: string;
  items: string[];
}

export interface NosotrosPage {
  id: string;
  slug: string;
  title: string;
  category: string;
  tagline: string;
  heroImage: string;
  pullQuote?: string;
  sections: AboutSection[];
  cards?: AboutCard[];
  pillars?: AboutPillar[];
  highlights?: string[];
}

export const nosotrosData: NosotrosPage[] = [
  {
    id: "mision-vision",
    slug: "/nosotros/mision-vision",
    title: "Misión y Visión",
    category: "Identidad Institucional",
    tagline: "El propósito que guía cada decisión clínica y organizacional.",
    heroImage:
      "https://images.unsplash.com/photo-1734094546615-045bf5f7ea0e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600",
    pullQuote:
      "Comprometidos con la seguridad del paciente, realizando buenas prácticas clínicas y mejorando continuamente todos los procesos.",
    sections: [
      {
        title: "Misión",
        body: "Somos una institución privada que presta servicios de salud, con énfasis en la atención del paciente de alta complejidad, con un equipo profesional de servicio que se fundamenta en el desarrollo organizacional armónico y humanizado. Comprometidos con la seguridad del paciente, realizando buenas prácticas clínicas y mejorando continuamente todos los procesos, para satisfacer las necesidades y expectativas de los clientes y sus familias.",
      },
      {
        title: "Historia Clínica Sistematizada",
        body: "La Clínica San José S.A. ha desarrollado e implementado la historia clínica sistematizada, la cual le permite al profesional un mejor manejo de la información, siempre en beneficio del paciente y en procura de dar respuesta a los problemas estadísticos de las entidades pagadoras y reguladoras del sector salud.",
      },
      {
        title: "Tecnología al servicio del paciente",
        body: "En la historia clínica sistematizada se almacenan textos, códigos e imágenes. Los archivos electrónicos pueden ser consultados desde múltiples sitios, en áreas locales o remotas, a través de la conexión en red. Los datos son archivados en formatos electrónicos que pueden ser traducidos a otros idiomas también electrónicamente.",
      },
      {
        title: "Continuidad e integración del cuidado",
        body: "Se resuelve así el problema de la fragmentación de la historia y, por lo tanto, el cuidado del paciente puede ser verdaderamente compartido por los equipos de salud, con evidente ahorro de esfuerzos y trabajo. Uno de los beneficios especiales es la capacidad para presentar diferentes tipos de datos —medicación, resultados de laboratorio, imágenes, incapacidades, descripciones quirúrgicas, notas de enfermería, epicrisis— en tiempo real, en todas las áreas de la clínica y fuera de ella, simultáneamente, tanto para los equipos médicos como para los auditores y las entidades de vigilancia en salud.",
      },
    ],
    highlights: [
      "Atención de alta complejidad",
      "Equipo profesional humanizado",
      "Seguridad del paciente",
      "Historia clínica sistematizada",
      "Buenas prácticas clínicas",
      "Mejora continua de procesos",
    ],
  },
  {
    id: "valores",
    slug: "/nosotros/valores",
    title: "Valores y Principios",
    category: "Cultura Organizacional",
    tagline: "Los principios que definen nuestra forma de actuar y relacionarnos.",
    heroImage:
      "https://images.unsplash.com/photo-1666886573531-48d2e3c2b684?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600",
    pullQuote:
      "Nuestros principios no son aspiraciones: son el estándar con el que evaluamos cada acción dentro de la institución.",
    sections: [
      {
        title: "Principios Corporativos",
        body: "Los principios corporativos de la Clínica San José de Cúcuta conforman el marco ético y cultural sobre el que se construyen todas las relaciones internas y externas de la institución. Fueron definidos mediante una metodología participativa, con la deliberación, análisis y consenso entre los niveles administrativos y operativos.",
      },
      {
        title: "Código de Ética",
        body: "El propósito del Código de Ética es facilitar una gestión ética de la Institución y generar pautas de conducta que reflejen las responsabilidades que deben cumplirse tanto interna como externamente con accionistas, empleados, proveedores, clientes, entidades de Gobierno y la comunidad en general, fomentando el desarrollo de relaciones de mutua confianza.",
      },
      {
        title: "Marco de conducta institucional",
        body: "El Código constituye el marco ético dentro del cual se realizan las actividades de los trabajadores de la Clínica de manera respetuosa entre sí y con los diferentes actores, buscando que prime el interés general sobre el particular. Sus normas son de riguroso y obligado cumplimiento por todos los colaboradores. Su desconocimiento o incumplimiento son considerados falta grave conforme a las disposiciones del Reglamento Interno de Trabajo.",
      },
    ],
    cards: [
      {
        title: "Respeto",
        body: "Reconocemos la dignidad de cada persona —paciente, familia y colaborador— como fundamento de toda relación institucional.",
      },
      {
        title: "Honestidad",
        body: "Actuamos con transparencia y coherencia entre lo que decimos y hacemos, generando confianza en cada interacción.",
      },
      {
        title: "Responsabilidad",
        body: "Asumimos con compromiso las consecuencias de nuestras decisiones clínicas, administrativas y sociales.",
      },
      {
        title: "Dignidad",
        body: "Garantizamos un trato humano, empático y sin discriminación a todos los usuarios y colaboradores de la institución.",
      },
      {
        title: "Compromiso",
        body: "Cumplimos con excelencia nuestras funciones, orientados siempre hacia la seguridad y satisfacción del paciente.",
      },
      {
        title: "Innovación y Creatividad",
        body: "Promovemos la búsqueda permanente de mejores soluciones clínicas, tecnológicas y organizacionales.",
      },
      {
        title: "Sentido de Pertenencia",
        body: "Nos identificamos con la misión institucional y trabajamos con orgullo por el desarrollo de la clínica y la región.",
      },
    ],
  },
  {
    id: "calidad",
    slug: "/nosotros/calidad",
    title: "Política de Calidad",
    category: "Gestión de Calidad",
    tagline: "Un compromiso permanente con la excelencia en cada proceso de atención.",
    heroImage:
      "https://images.unsplash.com/photo-1579154491915-611e891d3a5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600",
    pullQuote:
      "La Clínica San José está comprometida en prestar servicios efectivos, seguros, oportunos, eficientes y accesibles, con calidad y mejora continua.",
    sections: [
      {
        title: "Política de Calidad",
        body: "La Clínica San José de Cúcuta S.A. como Institución Prestadora de Servicios en Salud de Alta Complejidad, está comprometida en prestar servicios efectivos, seguros, oportunos, eficientes y accesibles, con calidad y mejora continua, enfocados hacia nuestros usuarios a través de un equipo humano calificado e idóneo, avanzada tecnología, convenios educativos y gestión por procesos que cumplan con las necesidades y expectativas de nuestros clientes, favoreciendo el reintegro a su núcleo social.",
      },
    ],
    cards: [
      {
        title: "Mejoramiento Continuo",
        body: "Propender por el mejoramiento continuo de la calidad en la atención médico-asistencial de los servicios de salud.",
      },
      {
        title: "Satisfacción del Cliente",
        body: "Lograr la satisfacción del cliente a través de la prestación oportuna y eficiente de los servicios de salud requeridos.",
      },
      {
        title: "Seguridad Clínica",
        body: "Asegurar que la atención cumpla con los más altos estándares de seguridad clínica, minimizando los riesgos en la prestación.",
      },
      {
        title: "Sistema de Gestión",
        body: "Lograr que el sistema de gestión y control de calidad se implemente, mantenga y mejore continuamente su eficacia y efectividad.",
      },
      {
        title: "Formación del Talento",
        body: "Promover la formación integral y el desarrollo personal-profesional del recurso humano con trato humanizado hacia los usuarios.",
      },
    ],
    pillars: [
      {
        title: "Enfoque al Usuario",
        items: ["Cultura de servicio", "Diseño orientado al cliente", "Cadena cliente-proveedor"],
      },
      {
        title: "Mejora Continua",
        items: ["Procesos y habilidades", "Productividad y estructura"],
      },
      {
        title: "Desarrollo de la Gente",
        items: ["Desarrollo personal", "Cultura de servicio", "Relaciones interpersonales y trabajo en equipo"],
      },
    ],
    highlights: [
      "Definir estándares para procesos prioritarios",
      "Medir continuamente los indicadores de calidad",
      "Evaluar la satisfacción de pacientes y entidades",
      "Establecer estrategias de mejoramiento",
      "Cultura de seguridad para el paciente",
      "Informar deberes y derechos de los pacientes",
    ],
  },
  {
    id: "gobierno",
    slug: "/nosotros/gobierno",
    title: "Gobierno Corporativo",
    category: "Transparencia Institucional",
    tagline: "Una gestión transparente, ética y responsable con todos los grupos de interés.",
    heroImage:
      "https://images.unsplash.com/photo-1581056771107-24ca5f033842?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600",
    pullQuote:
      "Fomentamos el desarrollo de relaciones de mutua confianza con accionistas, empleados, proveedores, clientes, entidades de Gobierno y la comunidad.",
    sections: [
      {
        title: "Código de Buen Gobierno",
        body: "En cumplimiento de lo dispuesto por la Ley 1122, la Clínica San José de Cúcuta S.A. constituye su Código de Buen Gobierno y de Ética, el cual deberá ser conocido y acogido en todos sus términos por los empleados de la institución. La institución empleó una metodología participativa para la definición de los principios rectores, conforme a la deliberación, análisis y consenso entre los niveles administrativos y operativos.",
      },
      {
        title: "Presentación Institucional",
        body: "La Clínica San José de Cúcuta S.A. presta los servicios de Urgencias, Hospitalización, UCI Adultos, Pediátrica y Coronaria, Rehabilitación, Cirugía, Cirugía Bariátrica, Imagenología, Laboratorio Clínico y Banco de Sangre de alta complejidad. Al hacer un análisis de la situación actual de la organización, el entorno social y político, los riesgos financieros y los logros obtenidos, así como los retos y dificultades, podemos afirmar que los últimos años han constituido un período de consolidación, crecimiento y demostración de la viabilidad de una institución que nació para convertirse en una de las mejores de la ciudad de Cúcuta.",
      },
      {
        title: "Calidad de la Atención",
        body: "Prestar servicios de salud con altos estándares de calidad que satisfagan las necesidades y expectativas de nuestros clientes, la seguridad del cliente interno y la conservación del medio ambiente, a través de un recurso humano idóneo, comprometido y proveedores competitivos, dentro de un marco de cultura y clima organizacional excelentes, con base en un sistema de autocontrol y mejoramiento continuo, que garantice un adecuado retorno.",
      },
      {
        title: "Código de Ética",
        body: "El propósito de este código es facilitar una gestión ética de la Institución y generar pautas de conducta que reflejen las responsabilidades que deben cumplirse tanto interna como externamente con todos los grupos de interés: accionistas, empleados, proveedores, clientes, entidades de Gobierno y la comunidad en general. Constituye el marco ético dentro del cual se realizan las actividades de los trabajadores de manera respetuosa, buscando que prime el interés general sobre el particular.",
      },
    ],
    highlights: [
      "Cumplimiento Ley 1122",
      "Metodología participativa",
      "Código de Ética vigente",
      "Transparencia con grupos de interés",
      "Autocontrol y mejora continua",
      "Marco ético obligatorio",
    ],
  },
  {
    id: "objetivos",
    slug: "/nosotros/objetivos",
    title: "Objetivos Institucionales",
    category: "Dirección Estratégica",
    tagline: "Las metas que orientan nuestro crecimiento y liderazgo regional.",
    heroImage:
      "https://images.unsplash.com/photo-1640876777002-badf6aee5bcc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600",
    pullQuote:
      "Continuar siendo la IPS líder en el programa de Cirugía Cardiovascular en la región, consolidando décadas de excelencia médica.",
    sections: [
      {
        title: "Objetivos Corporativos",
        body: "Nuestros objetivos corporativos definen las prioridades estratégicas que guían la gestión de la institución en sus dimensiones clínica, tecnológica, financiera y humana.",
      },
      {
        title: "Mejora de la Calidad en Nuestros Servicios",
        body: "La calidad es entendida como la metodología y filosofía para resolver problemas en la institución, articulando tres elementos clave: clientes, productos o servicios, y procesos. Nuestro modelo de calidad se sustenta en tres pilares: enfoque al cliente, mejora continua y desarrollo de nuestra gente.",
      },
    ],
    cards: [
      {
        title: "Práctica Médica de Excelencia",
        body: "Garantizar la práctica continua de los procedimientos médicos basada en la ética y los conocimientos técnicos pertinentes.",
      },
      {
        title: "Liderazgo Tecnológico",
        body: "Liderar en la región un nivel tecnológico acorde con las últimas innovaciones en medicina y gestión hospitalaria.",
      },
      {
        title: "Equilibrio y Sostenibilidad",
        body: "Lograr un equilibrio económico mediante una gestión empresarial adecuada que optimice los recursos y genere resultados.",
      },
      {
        title: "Desarrollo del Talento Humano",
        body: "Proporcionar un ambiente laboral que permita el crecimiento del talento humano como fuente de servicio y productividad.",
      },
      {
        title: "Alta Complejidad y Programas Especiales",
        body: "Ofertar servicios de alta complejidad: Cirugía Bariátrica, Laparoscópica avanzada, Cirugía Cardiovascular, Cuidados Críticos Coronarios, UCI Adulto, Pediátrico y Neonatal, Imagenología.",
      },
      {
        title: "Liderazgo Cardiovascular Regional",
        body: "Continuar siendo la IPS líder en el programa de Cirugía Cardiovascular en la región norte santandereana.",
      },
    ],
  },
];

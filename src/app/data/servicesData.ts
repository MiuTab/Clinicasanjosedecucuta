export interface ServiceSection {
  title?: string;
  body: string;
}

export interface ServiceFeature {
  label: string;
}

export interface ServiceData {
  id: string;
  slug: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  heroImage: string;
  sections: ServiceSection[];
  features: ServiceFeature[];
  staffItems?: string[];
  ctaLabel?: string;
}

export const servicesData: ServiceData[] = [
  {
    id: "cirugia",
    slug: "/servicios/cirugia",
    title: "Cirugía",
    category: "Intervención Quirúrgica",
    tagline: "Cirugía General Especializada y Estética",
    description:
      "Para la prestación de los servicios quirúrgicos la Clínica dispone de cinco modernas salas de cirugía, con un excelente equipo humano de profesionales médicos en diferentes especialidades, comprometidos con la calidad en la atención.",
    heroImage:
      "https://images.unsplash.com/photo-1640876777002-badf6aee5bcc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600",
    sections: [
      {
        title: "Nuestras especialidades quirúrgicas",
        body: "Contamos con un amplio portafolio de especialidades quirúrgicas atendidas por los mejores profesionales de la región, en instalaciones equipadas con tecnología de última generación.",
      },
      {
        title: "Cirugía Cardiovascular y Vascular",
        body: "Manejo integral y especializado de todas las patologías cardíacas y vasculares: revascularización cardíaca, cirugía vascular y de aorta, corrección de cardiopatías congénitas, cirugía vascular y angiológica, y cirugía de tórax.",
      },
      {
        title: "Cirugía General y Laparoscópica",
        body: "Ofrecemos cirugía general, gastrointestinal y laparoscópica con técnicas mínimamente invasivas: cirugía bariátrica, colecistectomía, apendicectomía, herniorrafía inguinal, cirugía antirreflujo, cistopexia y otras técnicas de mínimo acceso.",
      },
      {
        title: "Cirugía Especializada",
        body: "Contamos con especialistas en cirugía neurológica, cirugía de cabeza y cuello, cirugía ortopédica y traumatológica, cirugía plástica y estética, cirugía ginecológica, urológica, pediátrica, oftalmológica, otorrinolaringología, cirugía maxilofacial y cirugía oral. Adicionalmente ofrecemos manejo integral del dolor.",
      },
    ],
    features: [
      { label: "Cirugía Cardiovascular y de Aorta" },
      { label: "Cirugía Vascular y Angiológica" },
      { label: "Cirugía de Tórax" },
      { label: "Cirugía Neurológica" },
      { label: "Cirugía de Cabeza y Cuello" },
      { label: "Cirugía General y Gastrointestinal" },
      { label: "Cirugía Laparoscópica y Bariátrica" },
      { label: "Cirugía Ortopédica" },
      { label: "Cirugía Plástica y Estética" },
      { label: "Cirugía Ginecológica" },
      { label: "Cirugía Urológica" },
      { label: "Cirugía Pediátrica" },
      { label: "Cirugía Oftalmológica" },
      { label: "Otorrinolaringología" },
      { label: "Cirugía Maxilofacial y Oral" },
      { label: "Manejo del Dolor" },
    ],
    ctaLabel: "Agendar Consulta Quirúrgica",
  },
  {
    id: "urgencias",
    slug: "/servicios/urgencias",
    title: "Urgencias",
    category: "Atención de Emergencias",
    tagline: "Atención inmediata 24 horas, los 365 días del año",
    description:
      "Somos un equipo de profesionales médicos generales y especialistas altamente entrenados en el manejo inicial, diagnóstico y tratamiento de patologías de urgencia, interesados en que todos nuestros pacientes logren la mejoría y curación de las enfermedades que comprometen sus vidas.",
    heroImage:
      "https://images.unsplash.com/photo-1758404958502-44f156617bae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600",
    sections: [
      {
        title: "Política de calidad",
        body: "El servicio de urgencias se presta a toda la población del Norte de Santander y área de influencia que la requiera, ofreciendo tratamientos seguros de alta calidad y tecnología diagnóstica de punta, pensando en el bienestar y mejoría de la calidad de vida de nuestros usuarios.",
      },
      {
        title: "Infraestructura y equipamiento",
        body: "Contamos con urgencias adultos y pediátricas de II, III y IV nivel de atención, atención de consulta médica prioritaria para EPS adscritas y medicina prepagada. Disponemos de equipos de alta tecnología: monitores de presión arterial, EKG, pulsooximetría y desfibriladores. El servicio cuenta con salas de reanimación cardio-cerebro-pulmonar, 6 consultorios de atención, sala de pequeñas cirugías, sala de yesos y salas de observación dotadas con 21 camillas.",
      },
      {
        title: "Personal asistencial",
        body: "Contamos con personal entrenado en el manejo de pacientes de urgencias por turno de 6 horas, las 24 horas del día: 6 médicos, 2 enfermeras jefes y personal auxiliar de enfermería. Disponemos de médicos especialistas y subespecialistas en ortopedia, medicina interna, cirugía general, pediatría, ginecobstetricia, neurocirugía, neurología, urología, cirugía cardiovascular, hemodinámica, radiología, cirugía pediátrica, oftalmología, cardiología, neumología y cirugía maxilofacial.",
      },
      {
        title: "Imágenes diagnósticas en urgencias",
        body: "Radiografías, electrocardiogramas, ecografías, ecocardiogramas, electroencefalogramas y laboratorios especializados de II, III y IV nivel de atención disponibles para el servicio de urgencias.",
      },
    ],
    features: [
      { label: "Urgencias adultos y pediátricas" },
      { label: "II, III y IV nivel de atención" },
      { label: "6 médicos por turno · 24/7" },
      { label: "Salas de reanimación" },
      { label: "Sala de pequeñas cirurgías" },
      { label: "21 camillas de observación" },
      { label: "Especialistas disponibles 24h" },
      { label: "EKG, monitoreo y desfibriladores" },
    ],
    staffItems: [
      "6 médicos generales por turno de 6 horas",
      "2 enfermeras jefes por turno",
      "Personal auxiliar de enfermería",
      "Especialistas disponibles las 24 horas",
      "Médico coordinador",
      "Personal administrativo y de facturación",
    ],
    ctaLabel: "Urgencias: (607) 5895053",
  },
  {
    id: "hospitalizacion",
    slug: "/servicios/hospitalizacion",
    title: "Hospitalización",
    category: "Cuidado Intrahospitalario",
    tagline: "Atención continua para su recuperación integral",
    description:
      "El servicio de hospitalización presta atención médica con el objetivo de brindar tratamientos farmacológicos, clínicos, terapéuticos, ocupacionales y educativos, en pacientes posquirúrgicos o con alteración de su salud, para lograr su pronto reintegro al ambiente laboral, familiar y social.",
    heroImage:
      "https://images.unsplash.com/photo-1710074213379-2a9c2653046a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600",
    sections: [
      {
        title: "Atención médica continua",
        body: "Nuestro servicio de hospitalización ofrece cuidado directo y continuo al paciente durante su estancia, con un equipo médico y de enfermería disponible las 24 horas. La atención está orientada a estabilizar, recuperar y rehabilitar al paciente en el menor tiempo posible.",
      },
      {
        title: "Tratamientos integrales",
        body: "Ofrecemos tratamiento farmacológico especializado, manejo clínico integral, intervención terapéutica y ocupacional, y educación al paciente y su familia sobre el proceso de recuperación y los cuidados posteriores al alta.",
      },
      {
        title: "Instalaciones y comodidad",
        body: "Disponemos de habitaciones individuales y compartidas dotadas con los equipos necesarios para el monitoreo y la atención del paciente, en un entorno cómodo y tranquilo que favorece la recuperación. Contamos con más de 300 camas en distintas modalidades de hospitalización.",
      },
      {
        title: "Equipo multidisciplinario",
        body: "El servicio cuenta con la participación de médicos especialistas, enfermeras jefes, auxiliares de enfermería, nutricionistas, terapistas físicos y respiratorios, trabajadores sociales y psicólogos, todos comprometidos con la recuperación integral del paciente.",
      },
    ],
    features: [
      { label: "+300 camas disponibles" },
      { label: "Habitaciones individuales y compartidas" },
      { label: "Médico tratante las 24 horas" },
      { label: "Equipo de enfermería dedicado" },
      { label: "Nutrición y dietética" },
      { label: "Fisioterapia intrahospitalaria" },
      { label: "Trabajo social y psicología" },
      { label: "Educación al paciente y familia" },
    ],
    ctaLabel: "Solicitar Información",
  },
  {
    id: "ortopedia",
    slug: "/servicios/ortopedia",
    title: "Unidad de Ortopedia y Traumatología",
    category: "Ortopedia · Traumatología",
    tagline: "Infraestructura, tecnología y ciencia al servicio del movimiento",
    description:
      "Contamos con una adecuada infraestructura, tecnología a la vanguardia y personal científico altamente calificado, lo que nos permite brindar la mejor atención a nuestros pacientes en todas las patologías del sistema musculoesquelético.",
    heroImage:
      "https://images.unsplash.com/photo-1666886573531-48d2e3c2b684?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600",
    sections: [
      {
        title: "Atención ortopédica integral",
        body: "Nuestra unidad atiende ortopedia general para adultos y niños, con los más altos estándares de calidad y un equipo de especialistas comprometidos con la recuperación funcional completa del paciente.",
      },
      {
        title: "Cirugía articular y artroscopia",
        body: "Realizamos reemplazos articulares de cadera, rodilla y hombro, así como procedimientos artroscópicos de mínima invasión para el diagnóstico y tratamiento de lesiones ligamentarias, meniscales y de cartílago. Especializados en cirugía de mano y miembro superior, y cirugía de rodilla y pie.",
      },
      {
        title: "Trauma y cirugía de columna",
        body: "Atendemos trauma complejo esquelético en adultos y niños con los protocolos más actualizados. Contamos con experiencia en alargamiento y transporte óseo para deformidades y pérdidas óseas, además de cirugía de columna vertebral en todos sus segmentos.",
      },
    ],
    features: [
      { label: "Ortopedia general adultos y niños" },
      { label: "Reemplazos articulares" },
      { label: "Artroscopia" },
      { label: "Cirugía de mano y miembro superior" },
      { label: "Cirugía de rodilla y pie" },
      { label: "Trauma complejo esquelético" },
      { label: "Alargamiento y transporte óseo" },
      { label: "Cirugía de columna" },
    ],
    ctaLabel: "Agendar Consulta de Ortopedia",
  },
  {
    id: "cuidados-coronarios",
    slug: "/servicios/cuidados-coronarios",
    title: "Unidad de Cuidados Coronarios",
    category: "Cardiología · Cuidado Coronario",
    tagline: "Primera unidad coronaria especializada del departamento",
    description:
      "La primera clínica del departamento en ofrecer cuidado dirigido específicamente al paciente con patología coronaria. Adecuada para ofrecer servicios de salud con calidad, que permitan satisfacer y cubrir las necesidades de la población afectada.",
    heroImage:
      "https://images.unsplash.com/photo-1579684453423-f84349ef60b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600",
    sections: [
      {
        title: "Cobertura coronaria de referencia regional",
        body: "Nuestros servicios han sido diseñados para dar cobertura a las necesidades de atención de la población, convirtiéndonos en la primera clínica del departamento en ofrecer cuidado dirigido específicamente al paciente con patología coronaria.",
      },
      {
        title: "Hemodinámica y unidad cardiovascular",
        body: "Contamos con sala de hemodinámica para cateterismo cardíaco, angioplastia coronaria y otras intervenciones vasculares percutáneas. La unidad cardiovascular complementa la atención con monitoreo continuo y soporte hemodinámico avanzado.",
      },
      {
        title: "Equipo humano especializado",
        body: "La unidad está conformada por dos cirujanos cardiovasculares, médicos especialistas disponibles las 24 horas, médico general de apoyo permanente, enfermeras jefes y auxiliares de enfermería entrenados en cuidado crítico cardiovascular, fisioterapeutas, nutricionistas y terapeutas ocupacionales.",
      },
    ],
    features: [
      { label: "Hemodinámica y cateterismo" },
      { label: "Unidad cardiovascular" },
      { label: "Dos cirujanos cardiovasculares" },
      { label: "Médicos especialistas 24 horas" },
      { label: "Fisioterapia cardíaca" },
      { label: "Nutrición especializada" },
      { label: "Terapia ocupacional" },
      { label: "Monitoreo hemodinámico continuo" },
    ],
    ctaLabel: "Agendar Consulta Cardiológica",
  },
  {
    id: "uci",
    slug: "/servicios/uci",
    title: "Unidad de Cuidados Intensivos",
    category: "Cuidado Crítico · UCI Adulto",
    tagline: "Vigilancia permanente para los casos más críticos",
    description:
      "La Unidad de Cuidado Intensivo Adulto de la Clínica San José de Cúcuta se encarga de la atención de aquellas personas que por su delicado estado de salud requieren de una monitoría permanente y estrecha vigilancia.",
    heroImage:
      "https://images.unsplash.com/photo-1734094546615-045bf5f7ea0e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600",
    sections: [
      {
        title: "Capacidad y dotación",
        body: "La UCI adulto cuenta con 12 camas para pacientes con patología médica, coronaria, quirúrgica y de trauma. Dispone de equipos de excelente tecnología requeridos para el cuidado de los pacientes en estado crítico, con disponibilidad de todas las especialidades durante las 24 horas al día.",
      },
      {
        title: "Personal médico-asistencial",
        body: "El personal médico-asistencial es altamente calificado, con intensivistas especializados, enfermeras jefes con formación en cuidado crítico, auxiliares de enfermería entrenados y terapeutas respiratorios disponibles de manera permanente.",
      },
      {
        title: "Tecnología de soporte vital",
        body: "La unidad cuenta con ventiladores mecánicos de última generación, monitores multiparamétricos, dispositivos de soporte hemodinámico avanzado y equipos para terapia de reemplazo renal, garantizando la atención de las patologías más complejas.",
      },
    ],
    features: [
      { label: "12 camas de cuidado intensivo" },
      { label: "Patología médica, coronaria y quirúrgica" },
      { label: "Intensivistas especializados" },
      { label: "Todas las especialidades 24h" },
      { label: "Ventilación mecánica avanzada" },
      { label: "Monitoreo multiparamétrico" },
      { label: "Soporte hemodinámico" },
      { label: "Terapia de reemplazo renal" },
    ],
    ctaLabel: "Solicitar Información de UCI",
  },
  {
    id: "imagenologia",
    slug: "/servicios/imagenologia",
    title: "Unidad de Imagenología",
    category: "Diagnóstico por Imágenes",
    tagline: "Tecnología digital de vanguardia para diagnósticos precisos",
    description:
      "Nuestro centro dispone de un sistema radiológico digital empleado en todas las exploraciones. Estos sistemas permiten trabajar con una menor radiación para el paciente y con una gran calidad de imagen para la interpretación diagnóstica.",
    heroImage:
      "https://images.unsplash.com/photo-1581056771107-24ca5f033842?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600",
    sections: [
      {
        title: "Innovación y tecnología digital",
        body: "La radiología digital es una técnica limpia que no necesita sustancias químicas contaminantes, contribuyendo a la conservación del medio ambiente. Los sistemas digitales permiten la transmisión de imágenes de forma inmediata a consultorios y servicios de la institución.",
      },
      {
        title: "Ventajas del sistema radiológico digital",
        body: "Menor cantidad de radiación al paciente, mayor rapidez en el procedimiento, mayor calidad de imagen obtenida en cualquier tipo de paciente —obeso, pediátrico, en movimiento— y transmisión digital instantánea de imágenes a todos los servicios de la clínica.",
      },
      {
        title: "Estudios disponibles",
        body: "Realizamos una amplia gama de estudios: cabeza, cara, HPN/SPN, columnas cervical, dorsal-torácica y lumbosacra, abdomen, extremidades superiores e inferiores, cadera, sacro-coxis. Estudios especiales: colon por enema, cistografía, urografía intravenosa, tránsito intestinal, vías digestivas altas y bajas, corazón y grandes vasos, histerosalpingografía, esofagograma y mamografía bilateral o unilateral. Todos los estudios se realizan con previa cita y preparación del paciente.",
      },
    ],
    features: [
      { label: "Radiología digital de alta resolución" },
      { label: "Menor radiación al paciente" },
      { label: "Tomografía computarizada" },
      { label: "Resonancia magnética" },
      { label: "Ecografía y ecocardiografía" },
      { label: "Mamografía bilateral y unilateral" },
      { label: "Histerosalpingografía" },
      { label: "Urografía y estudios contrastados" },
    ],
    ctaLabel: "Agendar Estudio de Imagen",
  },
  {
    id: "rehabilitacion",
    slug: "/servicios/rehabilitacion",
    title: "Unidad de Rehabilitación",
    category: "Fisioterapia · Rehabilitación",
    tagline: "Recuperación funcional integral con calidad humana",
    description:
      "Contamos con un gran equipo humano liderado por un médico fisiatra, dispuesto a brindar todo lo necesario para la recuperación funcional, física o respiratoria del paciente y su reincorporación al entorno social y laboral.",
    heroImage:
      "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600",
    sections: [
      {
        title: "Fisioterapia especializada",
        body: "Basados en la definición de fisioterapia de la Organización Mundial de la Salud (2010), realizamos la ejecución de pruebas eléctricas y manuales para determinar el valor de la afectación, la fuerza muscular, las capacidades funcionales, amplitud del movimiento articular y las medidas de capacidad vital de los pacientes.",
      },
      {
        title: "Servicios intrahospitalarios",
        body: "En el servicio de fisioterapia de la Clínica San José se realizan terapia física, terapia respiratoria y rehabilitación cardíaca de pacientes hospitalizados. El equipo atiende directamente en las diferentes unidades de la clínica garantizando continuidad en el proceso rehabilitador.",
      },
      {
        title: "Consulta externa de rehabilitación",
        body: "Contamos con todos los equipos necesarios para atender patologías de alta complejidad en consulta externa, con personal asistencial altamente calificado y con calidad humana, orientado a la recuperación funcional y a la reintegración laboral y social del paciente.",
      },
    ],
    features: [
      { label: "Médico fisiatra especializado" },
      { label: "Terapia física y manual" },
      { label: "Terapia respiratoria" },
      { label: "Rehabilitación cardíaca" },
      { label: "Electroterapia" },
      { label: "Consulta externa de rehabilitación" },
      { label: "Atención intrahospitalaria" },
      { label: "Reintegración laboral y social" },
    ],
    ctaLabel: "Agendar Consulta de Rehabilitación",
  },
  {
    id: "uci-neonatal",
    slug: "/servicios/uci-neonatal",
    title: "UCI Neonatal Pediátrica",
    category: "Neonatología · Pediatría Crítica",
    tagline: "Cuidado especializado para los pacientes más pequeños",
    description:
      "Somos un grupo de profesionales especialistas en la vigilancia, el diagnóstico y el tratamiento de neonatos y pediátricos. Nuestro interés es que los niños superen las enfermedades que comprometen sus vidas, previniendo las secuelas, gracias a nuestro equipo multidisciplinario altamente calificado.",
    heroImage:
      "https://images.unsplash.com/photo-1504813184591-01572f98c85f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600",
    sections: [
      {
        title: "Misión",
        body: "En la UCI neonatal y pediátrica desarrollamos programas de diagnóstico, tratamiento y bioseguridad para satisfacer los requerimientos especiales de la población infantil con patologías críticas que comprometen la vida del paciente. Somos profesionales de la más alta calidad humana que realizamos tratamientos seguros y de alta tecnología diagnóstica y terapéutica.",
      },
      {
        title: "Política de calidad",
        body: "En UCI pediátrica prestamos servicios dirigidos a la población infantil con la meta de trabajar con un equipo interdisciplinario para ofrecer al paciente un desenlace favorable de su enfermedad que le ayude a salvar su vida y evitar secuelas, con tratamientos seguros y de alta tecnología diagnóstica y terapéutica.",
      },
      {
        title: "Personal asistencial",
        body: "Pediatra las 24 horas del día, 2 enfermeras jefes por turno, 1 auxiliar de enfermería por paciente en cuidado intensivo, 1 auxiliar por cada 2 pacientes en cuidado intermedio, y terapista respiratoria las 24 horas. Asistencia de cirujano pediatra, cardiólogo pediatra, nutricionista, terapista ocupacional, oftalmología, ortopedia y demás especialidades.",
      },
      {
        title: "Infraestructura y equipamiento",
        body: "Contamos con ventiladores de última tecnología, monitores de presión arterial, EKG, pulsooximetría y frecuencia respiratoria. Disponemos de 14 incubadoras cerradas, 1 servocuna y 3 camas para pacientes pediátricos. Se realizan Rx, ecografías, tomografías, EKG, ecocardiograma y laboratorios especializados.",
      },
    ],
    features: [
      { label: "Cuidados intensivos neonatales" },
      { label: "Cuidados intensivos pediátricos" },
      { label: "Cuidados intermedios neonatales" },
      { label: "14 incubadoras cerradas" },
      { label: "Pediatra 24 horas" },
      { label: "Terapia respiratoria continua" },
      { label: "Cirujano pediatra disponible" },
      { label: "Cardiólogo pediatra" },
    ],
    ctaLabel: "Solicitar Información",
  },
  {
    id: "laboratorio",
    slug: "/servicios/laboratorio",
    title: "Laboratorio y Banco de Sangre",
    category: "Laboratorio Clínico · Hematología",
    tagline: "Líderes regionales en diagnóstico de tercero y cuarto nivel",
    description:
      "Organización privada líder en la región norte santandereana, dedicada a satisfacer las necesidades y expectativas de los clientes a través de servicios integrales de laboratorio clínico y banco de sangre de tercer y cuarto nivel, trabajando con tecnología de última generación.",
    heroImage:
      "https://images.unsplash.com/photo-1579154491915-611e891d3a5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600",
    sections: [
      {
        title: "Laboratorio Clínico",
        body: "El Laboratorio Clínico de la Clínica San José de Cúcuta cuenta con tecnología de última generación que permite la realización de una gran cantidad de pruebas que facilitan al médico el diagnóstico, tratamiento y seguimiento de sus pacientes. Realizamos hematología, coagulación, inmunología, endocrinología, química sanguínea, uroanálisis, coproanálisis y microbiología.",
      },
      {
        title: "Banco de Sangre",
        body: "El Banco de Sangre y Laboratorio cuentan con un equipo profesional de trabajo que permite brindar a la comunidad médica, laboratorios y pacientes pruebas de excelente calidad. Se cumplen los principios de la política integrada: pruebas precisas, exactas, oportunas y de utilidad clínica.",
      },
      {
        title: "Equipo humano y procesos",
        body: "Se desarrollan los respectivos procesos en las fases preanalítica, analítica y postanalítica contando con profesionales en bacteriología que cumplen con el procesamiento de las muestras. El equipo incluye auxiliares de laboratorio y banco de sangre que brindan apoyo en la clasificación y preparación de las muestras.",
      },
    ],
    features: [
      { label: "Hematología y coagulación" },
      { label: "Inmunología y endocrinología" },
      { label: "Química sanguínea" },
      { label: "Uroanálisis y coproanálisis" },
      { label: "Microbiología especializada" },
      { label: "Banco de sangre certificado" },
      { label: "III y IV nivel de atención" },
      { label: "Resultados oportunos y precisos" },
    ],
    ctaLabel: "Agendar Toma de Muestra",
  },
];

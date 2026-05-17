export interface BlogArticle {
  id: number;
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  author: string;
  authorRole: string;
  date: string;
  readTime: string;
  image: string;
  featured?: boolean;
  tags: string[];
  sections: { title?: string; body: string }[];
}

export const blogArticles: BlogArticle[] = [
  {
    id: 1,
    slug: "factores-riesgo-cardiovascular-colombia",
    category: "Cardiología",
    title: "Factores de riesgo cardiovascular: lo que debe saber para proteger su corazón",
    excerpt:
      "La enfermedad cardiovascular es la principal causa de muerte en Colombia. Conozca los factores modificables y cómo la detección temprana puede marcar la diferencia.",
    author: "Dr. Carlos Andrés Morales",
    authorRole: "Cardiólogo Intervencionista",
    date: "12 Mayo 2026",
    readTime: "6 min",
    image:
      "https://images.unsplash.com/photo-1579684453423-f84349ef60b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    featured: true,
    tags: ["Corazón", "Prevención", "Hipertensión", "Colombia"],
    sections: [
      {
        body: "Las enfermedades cardiovasculares representan cerca del 30% de todas las muertes en Colombia, según el Ministerio de Salud y Protección Social. Pese a este panorama, la mayor parte de los eventos cardíacos —infartos, accidentes cerebrovasculares, fallas cardíacas— son prevenibles si se actúa a tiempo sobre los factores de riesgo modificables.",
      },
      {
        title: "Los factores de riesgo que sí puede controlar",
        body: "La hipertensión arterial afecta a más del 22% de los adultos colombianos y es el principal factor de riesgo para enfermedades del corazón. Junto a ella, la diabetes mellitus tipo 2, el tabaquismo, la obesidad abdominal, el sedentarismo y los niveles elevados de colesterol LDL conforman el grupo de factores modificables que, si se abordan oportunamente, reducen significativamente el riesgo de un evento cardiovascular mayor.",
      },
      {
        title: "El papel de la dieta y el estilo de vida",
        body: "La dieta típica de muchas regiones de Colombia, rica en grasas saturadas, frituras, sodio y azúcares simples, contribuye de manera directa al deterioro de la salud cardiovascular. Adoptar una alimentación basada en frutas, verduras, legumbres, granos enteros y proteínas magras, combinada con actividad física moderada de al menos 150 minutos semanales, puede reducir el riesgo de enfermedad coronaria entre un 20% y un 35%, según estudios publicados en el Journal of the American College of Cardiology.",
      },
      {
        title: "Detección temprana: el poder de los chequeos preventivos",
        body: "Un examen físico completo con medición de presión arterial, perfil lipídico, glicemia en ayunas y electrocardiograma permite identificar anomalías años antes de que produzcan síntomas. En la Clínica San José de Cúcuta recomendamos iniciar chequeos cardiovasculares anuales a partir de los 35 años, o antes si existe historia familiar de enfermedad coronaria, diabetes o hipertensión. La detección oportuna puede salvar vidas: el tratamiento temprano de la hipertensión reduce el riesgo de infarto en un 25%.",
      },
      {
        title: "¿Cuándo consultar al cardiólogo?",
        body: "Consulte con un especialista si presenta dolor o presión en el pecho, dificultad para respirar con el esfuerzo habitual, palpitaciones frecuentes, mareos o desmayos, o si tiene dos o más factores de riesgo mencionados. No espere a que aparezcan síntomas graves; la consulta preventiva es la herramienta más poderosa con que cuenta para proteger su corazón.",
      },
    ],
  },
  {
    id: 2,
    slug: "deteccion-temprana-cancer-guia-tamizaje",
    category: "Oncología",
    title: "Detección temprana del cáncer: guía de chequeos preventivos por edad",
    excerpt:
      "Los programas de tamizaje aumentan significativamente las posibilidades de curación. Descubra qué exámenes debe realizarse según su etapa de vida.",
    author: "Dr. Hernando José Castro",
    authorRole: "Oncólogo Clínico",
    date: "8 Mayo 2026",
    readTime: "7 min",
    image:
      "https://images.unsplash.com/photo-1581594549595-35f6edc7b762?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1200",
    tags: ["Cáncer", "Tamizaje", "Prevención", "Detección temprana"],
    sections: [
      {
        body: "En Colombia el cáncer ocupa el segundo lugar como causa de muerte, con más de 47.000 fallecimientos anuales según el Instituto Nacional de Cancerología. Sin embargo, cuando se detecta en estadios tempranos, la mayoría de los tipos de cáncer tienen tasas de supervivencia superiores al 80% a cinco años. El tamizaje —la búsqueda activa de la enfermedad antes de que produzca síntomas— es la estrategia más eficaz para lograrlo.",
      },
      {
        title: "Desde los 21 años: salud cervical",
        body: "La citología cervicovaginal (prueba de Papanicoláu) debe iniciarse a los 21 años y repetirse cada tres años en mujeres sin factores de riesgo. A partir de los 30 años, la prueba combinada de citología más test de VPH amplía el intervalo a cinco años si ambos resultados son negativos. El Programa Ampliado de Inmunizaciones de Colombia también incluye la vacuna contra el VPH, que previene cerca del 70% de los cánceres de cuello uterino.",
      },
      {
        title: "Desde los 40 años: mamografía y salud de la mama",
        body: "La mamografía de tamizaje anual está recomendada para mujeres desde los 40 años. En mujeres con antecedentes familiares de primer grado (madre, hermana) con cáncer de mama, se recomienda iniciar el tamizaje diez años antes de la edad de diagnóstico del familiar afectado. La autoexploración mensual sigue siendo una práctica complementaria valiosa para detectar cambios en la mama entre controles.",
      },
      {
        title: "Desde los 45 años: colonoscopia y cáncer colorrectal",
        body: "El cáncer colorrectal es el tercero más frecuente en Colombia. La colonoscopia de tamizaje cada 10 años, o la prueba de sangre oculta en heces anualmente, se recomienda a partir de los 45 años en personas sin síntomas ni factores de riesgo especiales. Quienes tienen un familiar de primer grado diagnosticado antes de los 60 años deben iniciar el tamizaje a los 40, o 10 años antes del diagnóstico familiar.",
      },
      {
        title: "Hombres: antígeno prostático específico (PSA)",
        body: "La medición del PSA en hombres es un tema de debate en la comunidad médica internacional. En Colombia, la Asociación Colombiana de Urología recomienda una conversación informada con el médico a partir de los 50 años —o a los 40 en hombres de raza negra o con antecedentes familiares— para decidir de forma individualizada si realizar la prueba. Un PSA elevado no siempre implica cáncer, pero orienta sobre la necesidad de estudios adicionales.",
      },
      {
        title: "La importancia de mantener el calendario",
        body: "Las guías de tamizaje son un punto de partida, no un límite. Su médico ajustará las recomendaciones según su historia personal y familiar. En la Clínica San José de Cúcuta contamos con programas de detección temprana para los principales tipos de cáncer, con equipos de diagnóstico de alta resolución y un equipo multidisciplinario listo para acompañarle en cada etapa.",
      },
    ],
  },
  {
    id: 3,
    slug: "parto-humanizado-colombia",
    category: "Maternidad",
    title: "Parto humanizado: una experiencia centrada en la madre y el bebé",
    excerpt:
      "El modelo de parto humanizado respeta los tiempos fisiológicos del nacimiento y prioriza el bienestar emocional. Conozca cómo funciona este enfoque en Colombia.",
    author: "Dra. Laura Cristina Pérez",
    authorRole: "Ginecóloga y Obstetra",
    date: "3 Mayo 2026",
    readTime: "5 min",
    image:
      "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    tags: ["Maternidad", "Parto", "Humanización", "Neonatología"],
    sections: [
      {
        body: "El parto humanizado no es una tendencia pasajera: es un derecho consagrado en la Política de Atención Integral en Salud (PAIS) del Ministerio de Salud de Colombia y en los lineamientos de la Organización Mundial de la Salud. Su premisa es sencilla y profunda: el nacimiento es un evento fisiológico y emocional que merece ser acompañado con respeto, información y el menor número posible de intervenciones innecesarias.",
      },
      {
        title: "¿Qué lo diferencia del modelo convencional?",
        body: "El modelo convencional de atención del parto tiende a medicalizar el proceso, aplicando intervenciones de rutina —como la episiotomía, la restricción de movimiento o el uso indiscriminado de oxitocina— independientemente de las necesidades de cada mujer. El parto humanizado, en cambio, parte de la evidencia científica: usa estas herramientas solo cuando son necesarias, fomenta la deambulación durante el trabajo de parto, permite la presencia de un acompañante elegido por la madre y promueve el contacto piel a piel inmediato tras el nacimiento.",
      },
      {
        title: "Beneficios comprobados para la madre y el recién nacido",
        body: "Los estudios publicados en The Lancet y Cochrane Collaboration muestran que el parto humanizado reduce la tasa de cesáreas innecesarias, disminuye el uso de analgesia, acorta la duración del trabajo de parto activo y mejora la experiencia percibida por la madre. El contacto piel a piel inmediato —conocido como contacto precoz— favorece la termorregulación del recién nacido, estimula la lactancia materna y fortalece el vínculo afectivo desde los primeros minutos de vida.",
      },
      {
        title: "El plan de parto: su voz en el momento del nacimiento",
        body: "Un plan de parto es un documento en el que la gestante expresa sus preferencias sobre el proceso: posición para el parto, uso de analgesia, quién desea como acompañante, cómo prefiere que se maneje el alumbramiento, entre otros aspectos. En la Clínica San José de Cúcuta, el equipo de obstetricia trabaja con cada madre para construir este plan de forma colaborativa durante el control prenatal, garantizando que sus decisiones sean respetadas en todo momento.",
      },
    ],
  },
  {
    id: 4,
    slug: "diabetes-tipo-2-prevencion-manejo",
    category: "Endocrinología",
    title: "Diabetes tipo 2 en Colombia: prevención, diagnóstico y manejo efectivo",
    excerpt:
      "Colombia supera los 3 millones de personas con diabetes. Aprenda a identificar los signos de alerta y las estrategias de prevención más efectivas.",
    author: "Dra. Marcela Ortiz",
    authorRole: "Endocrinóloga",
    date: "27 Abril 2026",
    readTime: "8 min",
    image:
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    tags: ["Diabetes", "Endocrinología", "Prevención", "Nutrición"],
    sections: [
      {
        body: "Según la Federación Internacional de Diabetes, Colombia tiene más de 3,2 millones de personas con diabetes tipo 2, y se estima que casi la mitad no sabe que la padece. Esta enfermedad crónica, caracterizada por niveles elevados de glucosa en sangre, no solo reduce la calidad de vida, sino que constituye un factor de riesgo mayor para enfermedades cardiovasculares, insuficiencia renal, neuropatía y ceguera.",
      },
      {
        title: "Factores de riesgo en la población colombiana",
        body: "Los factores de riesgo para desarrollar diabetes tipo 2 incluyen sobrepeso u obesidad (especialmente abdominal), antecedentes familiares de primer grado, sedentarismo, alimentación alta en carbohidratos refinados y azúcares, hipertensión arterial y antecedente de diabetes gestacional. En Colombia, la prevalencia de obesidad ha aumentado un 75% en los últimos 20 años, lo que proyecta un incremento sostenido de casos de diabetes en los próximos años.",
      },
      {
        title: "Señales de alerta que no debe ignorar",
        body: "Los síntomas clásicos de la diabetes tipo 2 —aumento de la sed, micción frecuente, pérdida de peso inexplicable, fatiga persistente y visión borrosa— suelen aparecer cuando la enfermedad ya tiene varios años de evolución. Por eso, la detección mediante un análisis de glucosa en ayunas (glicemia) o una hemoglobina glicosilada (HbA1c) es fundamental en personas con factores de riesgo, incluso sin síntomas. Un valor de HbA1c igual o superior a 6,5% confirma el diagnóstico.",
      },
      {
        title: "Prevención: un estilo de vida puede cambiarlo todo",
        body: "El Programa de Prevención de Diabetes del Instituto Nacional de Salud de Estados Unidos demostró que reducir el peso corporal en un 5-7% mediante dieta y ejercicio disminuye el riesgo de desarrollar diabetes tipo 2 en un 58%, superando incluso la eficacia de la metformina. En términos prácticos: 30 minutos de caminata a paso rápido cinco días a la semana, combinados con una dieta mediterránea o rica en fibra, son suficientes para lograr ese impacto.",
      },
      {
        title: "Manejo integral: más allá del medicamento",
        body: "Cuando ya existe el diagnóstico, el manejo de la diabetes tipo 2 combina modificaciones del estilo de vida con tratamiento farmacológico (que puede incluir metformina, inhibidores de SGLT2 o análogos de GLP-1, según el perfil del paciente) y un seguimiento multidisciplinario que involucra al médico internista o endocrinólogo, nutricionista, oftalmólogo y podólogo. El monitoreo regular de la HbA1c, la presión arterial y la función renal permite ajustar el tratamiento y prevenir complicaciones.",
      },
    ],
  },
  {
    id: 5,
    slug: "salud-mental-adultos-jovenes-colombia",
    category: "Salud Mental",
    title: "Salud mental en adultos jóvenes colombianos: señales, barreras y cómo pedir ayuda",
    excerpt:
      "El 52% de los trastornos mentales se manifiestan antes de los 25 años. Conocer las señales de alerta y dónde buscar apoyo puede cambiar el rumbo de una vida.",
    author: "Dra. Camila Bermúdez",
    authorRole: "Psiquiatra Clínica",
    date: "20 Abril 2026",
    readTime: "6 min",
    image:
      "https://images.unsplash.com/photo-1493836512294-502baa1986e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    tags: ["Salud Mental", "Ansiedad", "Depresión", "Jóvenes"],
    sections: [
      {
        body: "La Encuesta Nacional de Salud Mental de Colombia señala que uno de cada cuatro colombianos experimenta algún trastorno mental a lo largo de su vida, y que el acceso a tratamiento adecuado sigue siendo limitado: menos del 25% de quienes lo necesitan reciben atención especializada. En adultos jóvenes de 18 a 35 años, la ansiedad y la depresión son los trastornos más frecuentes, muchas veces subestimados o confundidos con el estrés normal de la vida moderna.",
      },
      {
        title: "Señales que merecen atención",
        body: "No toda tristeza es depresión, ni toda preocupación es un trastorno de ansiedad. Pero cuando la tristeza dura más de dos semanas, interfiere con el trabajo o las relaciones, viene acompañada de pérdida de interés en actividades que antes disfrutaba, cambios en el sueño o el apetito, o pensamientos negativos persistentes, es momento de consultar. En el caso de la ansiedad, la presencia de preocupación excesiva, tensión muscular, dificultad para concentrarse e irritabilidad casi diaria son indicadores relevantes.",
      },
      {
        title: "Las barreras que frenan la búsqueda de ayuda",
        body: "En Colombia, el estigma social sigue siendo la principal barrera para buscar ayuda psicológica o psiquiátrica. Expresiones culturales como «eso es cosa de locos» o la presión por «aguantar» impiden que muchas personas reconozcan su malestar como una condición de salud tratable. A esto se suman barreras de acceso: la escasez de especialistas en ciudades intermedias como Cúcuta, los tiempos de espera en el sistema de salud y el desconocimiento de los derechos que otorga el Plan de Beneficios en Salud para atención en salud mental.",
      },
      {
        title: "La importancia del entorno cercano",
        body: "La familia y los amigos juegan un papel determinante. Escuchar sin juzgar, validar el malestar de la persona y acompañarla a buscar ayuda profesional son acciones concretas de alto impacto. Evite minimizar («todos tenemos problemas») o dramatizar («algo muy grave te debe estar pasando»). La actitud más útil es la presencia: «Noto que estás pasando un momento difícil. Estoy aquí y me importa cómo te sientes.»",
      },
      {
        title: "Dónde buscar ayuda en Cúcuta y Norte de Santander",
        body: "El primer paso puede ser el médico general de su EPS, quien puede hacer una valoración inicial y derivar al psicólogo o psiquiatra según la necesidad. La Línea 106 de Salud Mental, disponible las 24 horas en todo el país, ofrece orientación telefónica gratuita en momentos de crisis. La Clínica San José de Cúcuta cuenta con servicio de psiquiatría y psicología clínica con atención tanto ambulatoria como para casos que requieren hospitalización.",
      },
    ],
  },
  {
    id: 6,
    slug: "vacunacion-adultos-colombia-guia",
    category: "Medicina Preventiva",
    title: "Vacunación en adultos: el calendario que muchos colombianos desconocen",
    excerpt:
      "Las vacunas no son solo para niños. Conozca el esquema de vacunación para adultos en Colombia y por qué mantenerlo al día es una decisión de salud pública.",
    author: "Dr. Felipe Rueda",
    authorRole: "Médico Internista",
    date: "14 Abril 2026",
    readTime: "5 min",
    image:
      "https://images.unsplash.com/photo-1584118624012-df056829fbd0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    tags: ["Vacunas", "Prevención", "Inmunización", "Colombia"],
    sections: [
      {
        body: "El Programa Ampliado de Inmunizaciones (PAI) de Colombia es reconocido internacionalmente como uno de los más robustos de América Latina. Sin embargo, la cobertura de vacunación en adultos sigue siendo baja comparada con la de la infancia. Muchas personas asumen erróneamente que, una vez completado el esquema infantil, no necesitan más vacunas. Esta creencia puede tener consecuencias serias para la salud individual y colectiva.",
      },
      {
        title: "Vacunas que todo adulto colombiano debería tener",
        body: "El Ministerio de Salud y Protección Social incluye en el esquema gratuito para adultos: la vacuna triple viral (sarampión, rubeola y paperas) si no tiene esquema completo; la toxoide tetánico-diftérico cada 10 años; la vacuna contra la influenza anualmente para mayores de 60 años, mujeres gestantes, trabajadores de la salud y personas con enfermedades crónicas; y la vacuna contra la hepatitis B en trabajadores de la salud y personas en riesgo.",
      },
      {
        title: "Grupos con necesidades especiales",
        body: "Los adultos mayores de 60 años deben recibir además la vacuna antineumocócica, que protege contra las formas graves de neumonía y meningitis bacteriana. Las mujeres gestantes tienen indicación de vacunarse contra la tos ferina (pertusis) en cada embarazo, entre las semanas 26 y 36, para proteger al recién nacido antes de que pueda ser vacunado. Las personas con enfermedades crónicas como diabetes, asma o insuficiencia renal tienen indicaciones específicas que el médico tratante debe evaluar.",
      },
      {
        title: "Vacunas de pago: cuándo considerarlas",
        body: "Fuera del esquema público gratuito, existen vacunas recomendadas que el adulto puede adquirir en centros de salud privados: vacuna contra el herpes zóster (culebrilla) para mayores de 50 años, vacuna contra la hepatitis A para viajeros internacionales, vacuna contra el meningococo para estudiantes universitarios que viven en residencias, y la vacuna contra el VPH para hombres y mujeres hasta los 45 años. Consulte a su médico cuáles son pertinentes para su perfil de riesgo.",
      },
    ],
  },
  {
    id: 7,
    slug: "hipertension-arterial-silenciosa-colombia",
    category: "Cardiología",
    title: "Hipertensión: la enfermedad silenciosa que afecta a 1 de cada 4 colombianos",
    excerpt:
      "La presión arterial elevada rara vez duele, pero sus consecuencias son devastadoras. Entender sus causas y cómo controlarla puede protegerle de un infarto o un derrame.",
    author: "Dr. Carlos Andrés Morales",
    authorRole: "Cardiólogo Intervencionista",
    date: "7 Abril 2026",
    readTime: "5 min",
    image:
      "https://images.unsplash.com/photo-1631815584191-0ed1723f0ead?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1200",
    tags: ["Hipertensión", "Corazón", "Prevención", "Salud vascular"],
    sections: [
      {
        body: "La hipertensión arterial —presión sostenida igual o superior a 130/80 mmHg— afecta a más del 22% de los adultos colombianos, según la Encuesta Nacional de Situación Nutricional (ENSIN). Su apodo, «el asesino silencioso», se debe a que en la mayoría de los casos no produce síntomas hasta que ya ha causado daño en órganos diana como el corazón, los riñones, el cerebro o los vasos sanguíneos.",
      },
      {
        title: "Por qué es tan peligrosa sin síntomas",
        body: "La presión arterial elevada ejerce una fuerza mecánica continua sobre las paredes de las arterias. Con el tiempo, esta presión daña el endotelio vascular, favorece la formación de placas de ateroma, hipertrofia el músculo cardíaco y deteriora la función renal. Cuando finalmente aparecen los síntomas —dolor de cabeza intenso, visión borrosa, dificultad para hablar— suele indicar una crisis hipertensiva o un evento agudo que requiere atención de urgencia.",
      },
      {
        title: "Factores que elevan la presión arterial",
        body: "El consumo excesivo de sodio (la dieta colombiana promedio duplica los 2.000 mg diarios recomendados por la OMS), el sobrepeso, el sedentarismo, el consumo de alcohol, el tabaquismo y el estrés crónico son los principales factores modificables. La predisposición genética también juega un papel: si ambos padres tienen hipertensión, el riesgo de desarrollarla supera el 50%.",
      },
      {
        title: "Control efectivo: hábitos y tratamiento",
        body: "La primera línea de manejo es siempre el cambio de estilo de vida: reducir el sodio, aumentar el consumo de potasio (frutas, verduras, legumbres), perder peso si hay sobrepeso, hacer ejercicio aeróbico regular y moderar el consumo de alcohol. Cuando estos cambios no son suficientes, el médico prescribirá medicamentos antihipertensivos —inhibidores de la ECA, ARA-II, calcioantagonistas o diuréticos— cuyo uso debe ser continuo y supervisado. Suspender el tratamiento porque la presión «está bien» es uno de los errores más frecuentes y peligrosos.",
      },
    ],
  },
  {
    id: 8,
    slug: "ortopedia-lesiones-rodilla-prevencion",
    category: "Ortopedia",
    title: "Lesiones de rodilla: cómo prevenirlas y cuándo es necesaria la cirugía",
    excerpt:
      "Las lesiones de ligamentos y meniscos son cada vez más frecuentes en la población activa. Conozca las opciones de tratamiento y los factores que determinan si se requiere intervención quirúrgica.",
    author: "Dr. Jorge Enrique Suárez",
    authorRole: "Ortopedista y Traumatólogo",
    date: "30 Marzo 2026",
    readTime: "6 min",
    image:
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    tags: ["Ortopedia", "Rodilla", "Ligamentos", "Rehabilitación"],
    sections: [
      {
        body: "La rodilla es la articulación más grande del cuerpo humano y, también, una de las más vulnerables a lesiones. En Colombia, las lesiones de ligamento cruzado anterior (LCA) y menisco son las que más frecuentemente requieren atención ortopédica, tanto en deportistas de alto rendimiento como en personas activas de todas las edades. El incremento del deporte recreativo y el sobrepeso han disparado su incidencia en la última década.",
      },
      {
        title: "Las lesiones más comunes y cómo ocurren",
        body: "La ruptura del ligamento cruzado anterior suele ocurrir en movimientos de pivote —cambios de dirección bruscos, aterrizajes deficientes desde salto o golpes directos en deportes de contacto—. La rotura de menisco, en cambio, puede ser aguda (por un giro forzado) o degenerativa (por desgaste progresivo en personas mayores de 40 años). En ambos casos, el dolor, la inflamación y la sensación de inestabilidad son los síntomas cardinales.",
      },
      {
        title: "Diagnóstico: el papel de la resonancia magnética",
        body: "La resonancia magnética (RM) de rodilla es el estudio de elección para confirmar lesiones ligamentarias y meniscales con una sensibilidad superior al 95%. A diferencia de la radiografía, que solo evalúa el hueso, la RM permite visualizar con detalle los tejidos blandos. En la Clínica San José de Cúcuta contamos con resonadores de 1,5 y 3 Teslas que permiten diagnósticos de alta precisión en tiempos de espera reducidos.",
      },
      {
        title: "¿Cirugía o rehabilitación? Los criterios que guían la decisión",
        body: "No toda lesión de rodilla requiere cirugía. Los factores que orientan hacia el tratamiento quirúrgico incluyen: edad joven con vida deportiva activa, inestabilidad funcional que limita las actividades cotidianas, lesión asociada de menisco reparable y fracaso del tratamiento conservador después de tres a seis meses. En lesiones meniscales degenerativas en mayores de 50 años, la evidencia actual muestra que la rehabilitación supervisada ofrece resultados equivalentes a la artroscopia en la mayoría de los casos.",
      },
      {
        title: "Prevención: el mejor tratamiento",
        body: "Los programas de prevención de lesiones de rodilla —basados en ejercicios de fortalecimiento muscular, propiocepción y técnica de movimiento— han demostrado reducir la incidencia de lesiones de LCA hasta en un 50% en estudios controlados. El calentamiento adecuado, el uso de calzado apropiado para cada deporte y evitar el sobrentrenamiento son medidas simples pero efectivas. En personas con sobrepeso, cada kilogramo perdido reduce cuatro veces la carga sobre la articulación de la rodilla.",
      },
    ],
  },
];

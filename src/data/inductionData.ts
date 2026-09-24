export interface FichaTecnica {
  nombre: string;
  rapExacto: string;
  competencia: string;
  objetivoDesempeno: string;
}

export interface SecuenciaPaso {
  etapa: 'Apertura' | 'Desarrollo' | 'Cierre';
  duracion: string;
  actividadPresencial: string;
  actividadVirtual: string;
  rolInstructorPresencial: string;
  rolInstructorVirtual: string;
  rolAprendizPresencial: string;
  rolAprendizVirtual: string;
  entregable: string;
}

export interface ProtocoloEvaluacion {
  mecanicaLudica: string;
  criteriosCualitativos: string[];
  instrumentoDual: string;
}

export interface RecursosSoporte {
  normativas: string[];
  enlacesOficiales: string[];
  promptsVisuales: string;
}

export interface JornadaData {
  dia: number;
  titulo: string;
  ficha: FichaTecnica;
  secuencia: SecuenciaPaso[];
  evaluacion: ProtocoloEvaluacion;
  recursos: RecursosSoporte;
}

export const INDUCTION_DAYS: JornadaData[] = [
  {
    dia: 1,
    titulo: "Mi contexto, oportunidades y marco normativo",
    ficha: {
      nombre: "Jornada 1: Inducción Institucional, Identidad y Contexto SENA",
      rapExacto: "240201500-01: Reconocer el rol de la Formación Profesional Integral del SENA y su direccionamiento estratégico en el marco de la sociedad del conocimiento.",
      competencia: "240201500: Promover la interacción idónea consigo mismo, con los demás y con la naturaleza en los contextos laboral y social.",
      objetivoDesempeno: "Apropiar la historia, los símbolos oficiales (himno, bandera, escudo, logo-símbolo), el direccionamiento estratégico (misión, visión, valores) y las oportunidades de formación (Circular 006 de 2016), asumiendo un rol activo como miembro de la comunidad SENA."
    },
    secuencia: [
      {
        etapa: "Apertura",
        duracion: "1 hora",
        actividadPresencial: "Recepción en el auditorio central o ambiente asignado. Dinámica rompehielos 'La telaraña de presentación'. Palabras de bienvenida por parte de la subdirección del centro y presentación del equipo de instructores líderes de la inducción.",
        actividadVirtual: "Sesión sincrónica de bienvenida en Teams/Meet. Video introductorio de la dirección general. Dinámica de presentación interactiva mediante un muro digital en Padlet donde cada aprendiz sube una foto y responde: ¿Qué expectativas tengo de formarme en el SENA?",
        rolInstructorPresencial: "Facilitar el registro de firmas de asistencia, liderar la dinámica rompehielos de forma lúdica y presentar el cronograma general de la semana.",
        rolInstructorVirtual: "Configurar la sala de videoconferencia, moderar el chat, compartir la pantalla con la presentación oficial y publicar el enlace de Padlet explicando las pautas de participación.",
        rolAprendizPresencial: "Presentarse ante sus compañeros, interactuar en la dinámica física y tomar apuntes sobre la estructura general del Centro de Formación.",
        rolAprendizVirtual: "Conectarse puntualmente, activar la cámara durante su presentación y completar su participación en el muro colaborativo de Padlet.",
        entregable: "Registro inicial en Zajuna LMS y publicación en el muro de Padlet (enlace o captura)."
      },
      {
        etapa: "Desarrollo",
        duracion: "2.5 horas",
        actividadPresencial: "Recorrido guiado por el Centro de Formación (Estaciones de Identidad SENA: Biblioteca, Bienestar, Administración, Talleres). En cada estación, un instructor expone un símbolo y pautas de la Circular 006 de 2016. Taller grupal para elaborar un mapa conceptual sobre la estructura del SENA.",
        actividadVirtual: "Navegación guiada por el micrositio web institucional y visualización de recursos interactivos de los símbolos del SENA. Desarrollo individual de la lectura autorregulada del documento 'Historia y Direccionamiento Estratégico del SENA' suministrado en la carpeta de inducción del LMS.",
        rolInstructorPresencial: "Guiar el recorrido físico, resolver dudas, organizar a los aprendices en grupos de trabajo de máximo 5 personas para el taller de cartografía conceptual y retroalimentar de manera constructiva.",
        rolInstructorVirtual: "Suministrar los archivos PDF y multimedia en Zajuna LMS. Realizar una transmisión sincrónica interactiva donde desglosa la historia, misión, visión y estructura organizacional, utilizando diapositivas oficiales.",
        rolAprendizPresencial: "Realizar el recorrido con respeto, integrarse en su equipo de trabajo, debatir los contenidos y diseñar de manera creativa la cartografía o mapa conceptual de la institución.",
        rolAprendizVirtual: "Analizar las lecturas obligatorias, ver los videos interactivos de la historia del SENA y estructurar un mapa conceptual interactivo utilizando herramientas gratuitas como Canva o CmapTools.",
        entregable: "Infografía o Mapa Conceptual interactivo sobre la Identidad Institucional, Direccionamiento Estratégico y Símbolos del SENA."
      },
      {
        etapa: "Cierre",
        duracion: "1.5 horas",
        actividadPresencial: "Socialización de mapas conceptuales. Ejecución del juego grupal 'Caja de Preguntas SENA' (Reto Trivia). Retroalimentación colectiva sobre el valor social de pertenecer a la institución más querida por los colombianos.",
        actividadVirtual: "Foro temático en Zajuna LMS: 'Mi rol en la FPI y el impacto social del SENA'. Cuestionario interactivo gamificado en Kahoot! o cuestionario integrado en el LMS para evaluar de forma lúdica los conceptos del Día 1.",
        rolInstructorPresencial: "Moderar la exposición de los mapas conceptuales de los aprendices, coordinar el juego de preguntas de cierre y realizar el cierre motivacional vinculando la FPI al proyecto de vida.",
        rolInstructorVirtual: "Abrir el foro de debate en Zajuna LMS, configurar y lanzar el enlace del juego interactivo Kahoot! o cuestionario, y retroalimentar de forma escrita las intervenciones de los aprendices en el foro.",
        rolAprendizPresencial: "Exponer el mapa conceptual grupal en el ambiente, participar con entusiasmo en la trivia del contexto SENA y asimilar la retroalimentación constructiva.",
        rolAprendizVirtual: "Responder a las preguntas del foro interactuando asertivamente con al menos un compañero de ficha y completar la trivia virtual en el LMS o Kahoot!.",
        entregable: "Cuestionario de Contexto Institucional completado en el portafolio (Captura de puntaje del Kahoot! o del cuestionario LMS)."
      }
    ],
    evaluacion: {
      mecanicaLudica: "Trivia SENA 'El Saber FPI' - Un reto de preguntas contrarreloj individual y grupal sobre los símbolos, historia y Circular 006 de 2016. En la modalidad virtual se juega mediante un cuestionario interactivo integrado con ranking dinámico.",
      criteriosCualitativos: [
        "Identifica de forma precisa los símbolos institucionales, la misión y la visión del SENA según el direccionamiento estratégico.",
        "Relaciona la Circular 006 de 2016 con las oportunidades y procesos de la inducción para aprendices.",
        "Muestra una actitud colaborativa, proactiva y respetuosa durante las interacciones con sus compañeros de ficha."
      ],
      instrumentoDual: "Lista de Verificación de Desempeño y Producto. Presencial: Lista de cotejo física diligenciada por el instructor en las exposiciones. Virtual: Rúbrica automatizada de entrega de portafolio y participación en foro interactivo dentro de Zajuna LMS."
    },
    recursos: {
      normativas: [
        "Circular 006 de 2016 (SENA - Lineamientos para el desarrollo de la Inducción de los Aprendices)",
        "Direccionamiento Estratégico del SENA (Misión, Visión, Valores institucionales)",
        "Decreto 249 de 2004 (Estructura interna del SENA)"
      ],
      enlacesOficiales: [
        "https://www.sena.edu.co (Portal Web Oficial del SENA)",
        "https://portal.zajuna.edu.co (Portal Oficial del LMS Zajuna)",
        "https://biblioteca.sena.edu.co (Sistema de Bibliotecas SENA)"
      ],
      promptsVisuales: "Banner institucional SENA Día 1: Ilustración digital moderna que representa la fachada o ambiente tecnológico de un Centro de Formación del SENA con aprendices vistiendo de forma reglamentaria (chalecos o camisetas con el logo institucional en verde y negro, actitud de liderazgo, diversidad e inclusión). El escudo institucional (piñón, hojas de café, caduceo) visible en la parte superior derecha. Colores corporativos dominantes: Verde SENA (#39A900), gris claro y blanco."
    }
  },
  {
    dia: 2,
    titulo: "Entornos TIC y modelo pedagógico SENA",
    ficha: {
      nombre: "Jornada 2: Apropiación Tecnológica y Enfoque por Competencias FPI",
      rapExacto: "240201500-02: Gestionar la información de acuerdo con los procedimientos establecidos y con las tecnologías de la información y la comunicación disponibles en la institución.",
      competencia: "240201500: Promover la interacción idónea consigo mismo, con los demás y con la naturaleza en los contextos laboral y social.",
      objetivoDesempeno: "Utilizar las plataformas digitales institucionales (Zajuna LMS, Sofía Plus, Biblioteca Virtual) y el correo institucional como herramientas clave del proceso FPI, bajo el enfoque pedagógico de formación basada en competencias."
    },
    secuencia: [
      {
        etapa: "Apertura",
        duracion: "1 hora",
        actividadPresencial: "Charla interactiva en la sala de sistemas o ambiente tecnológico. Dinámica 'El teléfono descompuesto digital' para reflexionar sobre los flujos de comunicación tecnológica en el SENA.",
        actividadVirtual: "Videoconferencia interactiva sobre la 'Estructura Tecnológica de Aprendizaje'. Video tutorial sobre la importancia de Zajuna LMS en el aprendizaje asincrónico y el rol de Sofía Plus en la gestión académica.",
        rolInstructorPresencial: "Presentar el mapa del ecosistema digital del SENA. Asegurar que todos los aprendices se encuentren debidamente sentados frente a una computadora conectada a Internet.",
        rolInstructorVirtual: "Iniciar la transmisión, proyectar diapositivas interactivas con diagramas del ecosistema TIC y dar instrucciones precisas sobre el acceso al correo institucional y Zajuna LMS.",
        rolAprendizPresencial: "Acceder a la computadora asignada, ingresar sus credenciales provisionales de Sofía Plus y Zajuna, y verificar que tiene acceso adecuado.",
        rolAprendizVirtual: "Conectarse puntualmente, seguir paso a paso la demostración del instructor, abrir las pestañas indicadas y reportar en el chat si tiene algún inconveniente técnico.",
        entregable: "Ingreso exitoso a la plataforma oficial Zajuna LMS y validación de credenciales."
      },
      {
        etapa: "Desarrollo",
        duracion: "2.5 horas",
        actividadPresencial: "Taller práctico presencial de apropiación TIC. Configuración del perfil de usuario en Zajuna LMS (foto formal de rostro, datos de contacto actualizados). Exploración guiada de los ambientes virtuales: envío de un mensaje de prueba al instructor, participación en el Foro Social y consulta en la biblioteca virtual.",
        actividadVirtual: "Ruta de autoaprendizaje TIC en Zajuna LMS. Consiste en seguir una serie de videotutoriales y completar micro-retos dentro del aula de inducción virtual, tales como: editar el perfil, participar en el foro social temático, descargar un artículo científico de la base de datos de biblioteca digital y subir una evidencia de prueba.",
        rolInstructorPresencial: "Recorrer el aula de cómputo brindando asistencia personalizada a quienes tengan problemas de acceso o contraseñas. Explicar los foros, mensajería interna, envío de evidencias, y el uso correcto de las bases de datos de la Biblioteca SENA.",
        rolInstructorVirtual: "Monitorear en tiempo real la actualización de perfiles de los aprendices y la participación en el foro social. Brindar soporte asincrónico inmediato mediante foros de dudas y correo institucional para solucionar inconvenientes técnicos.",
        rolAprendizPresencial: "Actualizar su perfil institucional en Zajuna LMS subiendo una foto adecuada y profesional, participar activamente en el Foro Social FPI, enviar el mensaje correspondiente y realizar búsquedas de material de apoyo en la Biblioteca Virtual.",
        rolAprendizVirtual: "Completar la ruta tecnológica paso a paso en Zajuna LMS de forma autónoma, actualizando sus datos, redactando su aporte en el foro social interactivo y descargando un documento de la biblioteca para la evidencia.",
        entregable: "Documento en formato PDF con la captura de pantalla del perfil actualizado en Zajuna LMS, la participación en el Foro Social de inducción y el comprobante de consulta en la Biblioteca Virtual."
      },
      {
        etapa: "Cierre",
        duracion: "1.5 horas",
        actividadPresencial: "Evaluación formativa lúdica grupal. Dinámica 'Ruta Tecnológica SENA': Se dibuja el ecosistema digital en el tablero y los equipos asocian cada trámite académico con la plataforma correspondiente mediante tarjetas magnéticas.",
        actividadVirtual: "Simulador interactivo en Zajuna LMS o trivial interactivo con preguntas basadas en situaciones reales sobre a qué plataforma acudir en cada caso (Ej: 'Si necesito certificar un curso, ¿dónde voy?', 'Si debo subir una tarea, ¿dónde entro?').",
        rolInstructorPresencial: "Moderar el juego grupal en el tablero, aclarar conceptos erróneos de las plataformas (Sofía Plus vs Zajuna) y realizar el cierre destacando la autonomía TIC.",
        rolInstructorVirtual: "Habilitar y evaluar el simulador de correspondencia TIC en Zajuna, retroalimentar públicamente las dudas comunes de navegación y publicar el logro del ranking de desempeño TIC.",
        rolAprendizPresencial: "Participar activamente en su equipo para colocar correctamente las tarjetas en el tablero y debatir las respuestas correctas de forma grupal.",
        rolAprendizVirtual: "Resolver el simulador o cuestionario de correspondencia digital en el LMS y asegurar la carga exitosa del archivo entregable en la carpeta correspondiente.",
        entregable: "Evidencia 2 subida al LMS Zajuna y puntaje obtenido en el simulador de correspondencia digital."
      }
    ],
    evaluacion: {
      mecanicaLudica: "Reto 'Ecosistema TIC Interactivo': Consiste en un emparejamiento lúdico de casos con plataformas virtuales de apoyo. En el aula física se realiza con tarjetas interactivas de 'Caso vs Plataforma'; en el entorno virtual, con una actividad de arrastrar y soltar interactiva dentro del aula Zajuna LMS.",
      criteriosCualitativos: [
        "Navega autónomamente y localiza herramientas en Zajuna LMS, Sofía Plus y Biblioteca Virtual.",
        "Actualiza el perfil del aprendiz conforme a las directrices institucionales (fotografía e información veraz).",
        "Interactúa asertivamente con los canales institucionales de mensajería virtual."
      ],
      instrumentoDual: "Cuestionario de correspondencia tecnológica interactivo. Rúbrica holística digital parametrizada en Zajuna LMS para la evaluación automática de la evidencia subida."
    },
    recursos: {
      normativas: [
        "Guía de Uso del LMS Zajuna (SENA)",
        "Manual de Usuario de Sofía Plus (SENA)",
        "Políticas de Uso de las TIC institucionales"
      ],
      enlacesOficiales: [
        "https://oferta.senasofiaplus.edu.co (Plataforma Sofía Plus)",
        "https://correo.misena.edu.co (Acceso al Correo Institucional MiSena)",
        "https://biblioteca.sena.edu.co (Buscador Iris de Biblioteca SENA)"
      ],
      promptsVisuales: "Gráfica interactiva de arquitectura TIC SENA: Infografía institucional que esquematiza el ecosistema digital del SENA. El logotipo de Zajuna LMS en el centro con un círculo verde brillante, conectado mediante flechas dinámicas a Sofía Plus (gestión académica), Correo MiSena (comunicación formal) y Biblioteca Virtual SENA (investigación y recursos bibliográficos). Elementos gráficos claros y limpios, utilizando tipografía moderna Sans-Serif y paleta corporativa oficial del SENA (verde, gris oscuro y blanco)."
    }
  },
  {
    dia: 3,
    titulo: "Identidad de mi programa y estilos de aprendizaje",
    ficha: {
      nombre: "Jornada 3: Caracterización de mi Programa de Formación y Estilos VAK",
      rapExacto: "240201500-03: Identificar las oportunidades que el Sena ofrece en el marco de la formación profesional de acuerdo con el contexto nacional e internacional y el programa de formación.",
      competencia: "240201500: Promover la interacción idónea consigo mismo, con los demás y con la naturaleza en los contextos laboral y social.",
      objetivoDesempeno: "Analizar el diseño curricular, perfil de egreso y alternativas de la etapa productiva del programa de formación, identificando el propio estilo de aprendizaje dominante (Visual, Auditivo, Kinestésico) para trazar estrategias de estudio de alto rendimiento."
    },
    secuencia: [
      {
        etapa: "Apertura",
        duracion: "1 hora",
        actividadPresencial: "Presentación del instructor técnico del programa. Dinámica de integración '¿Quiénes somos?' enfocada en las motivaciones de la especialidad técnica. Diálogo abierto sobre las competencias laborales del programa.",
        actividadVirtual: "Sesión sincrónica en videoconferencia dirigida por los instructores técnicos del programa. Dinámica interactiva de lluvia de ideas utilizando Mentimeter con la pregunta: ¿Qué competencias crees que desarrollarás en este programa?",
        rolInstructorPresencial: "Coordinar la dinámica, dar la bienvenida técnica y de especialidad, y explicar de forma sencilla qué es un diseño curricular y cómo se lee el programa en el SENA.",
        rolInstructorVirtual: "Iniciar la transmisión, guiar la lluvia de ideas en Mentimeter, explicar los objetivos laborales del programa técnico/tecnólogo y propiciar el diálogo asertivo mediante micrófono abierto.",
        rolAprendizPresencial: "Compartir sus conocimientos previos de la especialidad técnica y expresar sus metas profesionales en relación con el programa elegido.",
        rolAprendizVirtual: "Registrar sus expectativas en Mentimeter, participar con comentarios en el chat y escuchar de forma analítica el perfil de egreso de su formación.",
        entregable: "Registro en Mentimeter y síntesis mental de la especialidad académica."
      },
      {
        etapa: "Desarrollo",
        duracion: "2.5 horas",
        actividadPresencial: "Taller 'Conociendo mi Diseño Curricular'. Los aprendices estudian de manera física el programa y responden una guía de caracterización (competencias, RAP, horas de etapa lectiva y productiva, perfiles ocupacionales). Posteriormente, aplican el test físico de estilos de aprendizaje de Kolb o VAK.",
        actividadVirtual: "Autoaprendizaje guiado en Zajuna LMS. Descarga del diseño curricular oficial de la ficha. Diligenciamiento de la plantilla digital de Caracterización del Programa. Ejecución del Test interactivo de Estilos de Aprendizaje VAK desarrollado en la plataforma.",
        rolInstructorPresencial: "Proporcionar copias del diseño curricular impresas (o proyectar el archivo digital), explicar detalladamente la estructura curricular de créditos y horas lectivas/productivas. Explicar la teoría de estilos de aprendizaje VAK para el autoaprendizaje.",
        rolInstructorVirtual: "Habilitar el test interactivo VAK en Zajuna LMS. Responder dudas a través del foro técnico del LMS. Compartir la plantilla interactiva de caracterización del programa y dar ejemplos prácticos de cómo rellenarla.",
        rolAprendizPresencial: "Estudiar el diseño curricular en equipo, completar la guía de caracterización del programa técnico y responder con honestidad el test físico de estilos de aprendizaje, tabulando su puntaje.",
        rolAprendizVirtual: "Descargar y diligenciar la plantilla de caracterización de su programa, realizar el test virtual interactivo VAK y capturar los resultados con su perfil de aprendizaje correspondiente.",
        entregable: "Matriz de Caracterización de mi Programa de Formación (perfil de egreso, competencias) y Resultados tabulados del Test VAK de Estilos de Aprendizaje con 3 estrategias personalizadas."
      },
      {
        etapa: "Cierre",
        duracion: "1.5 horas",
        actividadPresencial: "Mesa redonda grupal: 'Estrategias de Aprendizaje FPI'. Cada aprendiz comparte su estilo dominante (Visual, Auditivo o Kinestésico) y cómo se organizará grupalmente para potenciar los proyectos de la formación.",
        actividadVirtual: "Participación en el foro interactivo de Zajuna LMS: 'Mi Estilo de Aprendizaje y el Trabajo Colaborativo en mi Programa'. Los aprendices deben debatir y comentar los resultados de sus compañeros.",
        rolInstructorPresencial: "Coordinar las participaciones en la mesa redonda, consolidar los estilos de la ficha (estadística rápida en tablero) para orientar futuras estrategias didácticas y cerrar con reflexiones de autoaprendizaje.",
        rolInstructorVirtual: "Monitorear la participación en el foro temático de Zajuna, retroalimentar las reflexiones individuales de los aprendices sobre sus estrategias de estudio digitales y publicar un resumen conceptual de estilos.",
        rolAprendizPresencial: "Debatir activamente en la mesa redonda, anotar estrategias de estudio útiles recomendadas por otros compañeros y asimilar el estilo de la ficha.",
        rolAprendizVirtual: "Completar su aporte reflexivo en el foro de inducción y retroalimentar de forma fundamentada la propuesta de estudio de al menos un compañero.",
        entregable: "Evidencia 3 completada y cargada en Zajuna LMS (Plantilla de Caracterización de Programa + Reporte de Estilo de Aprendizaje)."
      }
    ],
    evaluacion: {
      mecanicaLudica: "Muro de Perfiles 'Mi ADN de Aprendizaje' - Un lienzo colaborativo físico en el ambiente, o digital en Zajuna (foro de inducción), donde cada aprendiz representa visualmente su perfil (Ej: 'Soy Sofía, Diseñadora ADSO Visual - Planeo mis sistemas con diagramas') para armar un mapa colectivo de estilos de la ficha.",
      criteriosCualitativos: [
        "Describe las competencias del programa de formación y las relaciona con su perfil ocupacional de egreso.",
        "Reconoce su estilo de aprendizaje dominante (VAK) y propone al menos tres acciones concretas para optimizar su aprendizaje en el SENA.",
        "Estructura propuestas de trabajo colaborativo que aprovechan las fortalezas de los estilos de aprendizaje del equipo."
      ],
      instrumentoDual: "Formato de Autoevaluación de Estilos de Aprendizaje y Lista de Cotejo de Producto aplicada al entregable del portafolio digital en Zajuna LMS."
    },
    recursos: {
      normativas: [
        "Diseño Curricular del Programa de Formación asignado (SENA)",
        "Proyecto Formativo del Centro (SENA - Estrategia por Proyectos)",
        "Teoría del Aprendizaje Experiencial de David Kolb y Modelo VAK"
      ],
      enlacesOficiales: [
        "https://oferta.senasofiaplus.edu.co (Buscador de Programas y Perfiles SENA)",
        "https://www.sena.edu.co/es-co/formacion/Paginas/Estudie-en-el-SENA.aspx (Información de la Formación Profesional)"
      ],
      promptsVisuales: "Ilustración educativa moderna de Estilos de Aprendizaje SENA: Representación visual conceptual de tres perfiles de aprendices SENA en un ambiente de taller tecnológico interactuando según su estilo: un aprendiz visual analiza un plano o diagrama técnico en una pantalla táctil, una aprendiz auditiva debate activamente con auriculares en mano, y un tercer aprendiz kinestésico manipula una maqueta física o componente electrónico industrial. Estilo limpio con colores institucionales SENA dominantes."
    }
  },
  {
    dia: 4,
    titulo: "Reglamento del Aprendiz y Bienestar Integral",
    ficha: {
      nombre: "Jornada 4: Derechos, Deberes, Trámites y Bienestar del Aprendiz",
      rapExacto: "240201500-04: Concertar alternativas y acciones de formación para el desarrollo de las competencias del programa formación, con base en la política institucional, derechos y deberes.",
      competencia: "240201500: Promover la interacción idónea consigo mismo, con los demás y con la naturaleza en los contextos laboral y social.",
      objetivoDesempeno: "Comprender y aplicar los derechos, deberes, prohibiciones, trámites administrativos (aplazamiento, traslado, retiro) y procesos disciplinarios regulados por el Reglamento del Aprendiz (Acuerdo 007 de 2012), conociendo los programas de apoyo de Bienestar Integral al Aprendiz."
    },
    secuencia: [
      {
        etapa: "Apertura",
        duracion: "1 hora",
        actividadPresencial: "Presentación teatralizada o dramatización de casos de estudio sobre faltas disciplinarias típicas en el SENA (plagio, inasistencias injustificadas, uso del uniforme). Preguntas orientadoras: ¿Qué sanción merece este caso?",
        actividadVirtual: "Sesión sincrónica con el equipo de Bienestar al Aprendiz. Presentación multimedia interactiva sobre el portafolio de bienestar (salud, deporte, cultura, apoyos económicos). Charla introductoria sobre la convivencia y la ética en el SENA.",
        rolInstructorPresencial: "Liderar o coordinar las representaciones, propiciar la participación de los aprendices en el debate y formular las preguntas éticas orientadoras.",
        rolInstructorVirtual: "Moderar la sesión con el equipo de Bienestar, proyectar diapositivas interactivas con el organigrama de trámites estudiantiles y configurar los canales virtuales de asistencia.",
        rolAprendizPresencial: "Observar críticamente las dramatizaciones, participar de manera constructiva en la lluvia de ideas inicial sobre qué conductas están permitidas y cuáles no.",
        rolAprendizVirtual: "Conectarse puntualmente, plantear dudas a los profesionales de Bienestar a través del chat interactivo y asimilar la información sobre apoyos de sostenimiento.",
        entregable: "Respuestas preliminares de casos de convivencia y reglamento."
      },
      {
        etapa: "Desarrollo",
        duracion: "2.5 horas",
        actividadPresencial: "Taller Cooperativo 'Reglamentando mi formación'. Lectura y análisis del Acuerdo 007 de 2012 estructurado por capítulos (Cap. II Derechos, Cap. III Deberes, Cap. IV Prohibiciones, Cap. VIII Medidas Formativas y Sanciones). Los aprendices en grupos resuelven 3 casos disciplinares reales y estructuran la defensa o la sanción correspondiente.",
        actividadVirtual: "Estudio de Casos en Zajuna LMS. Descarga en PDF del Reglamento del Aprendiz. Desarrollo individual o colaborativo en equipos de trabajo virtuales del Taller 'Casos Prácticos de Reglamento'. Los aprendices analizan situaciones dadas por escrito (Ej: aprendiz que copia el proyecto de grado, inasistencia repetida sin justificar) y proponen soluciones fundamentadas en artículos exactos del reglamento.",
        rolInstructorPresencial: "Distribuir el reglamento digital o físico, supervisar el trabajo grupal guiando a los aprendices en la localización exacta de los artículos, explicar la diferencia entre faltas académicas y disciplinarias, y los pasos de un debido proceso.",
        rolInstructorVirtual: "Habilitar el taller para entrega virtual con instrucciones exhaustivas en el LMS. Crear salas grupales virtuales en Teams para la discusión de los casos y monitorear el progreso de cada equipo resolviendo dudas de interpretación normativa.",
        rolAprendizPresencial: "Analizar el Reglamento en equipo, debatir la resolución de los casos prácticos, citar textualmente los artículos reglamentarios aplicables y redactar el borrador del taller.",
        rolAprendizVirtual: "Analizar el Reglamento digitalmente, reunirse con su grupo de trabajo por videoconferencia o chat colaborativo, estructurar la resolución de los casos justificando con normas SENA y redactar el entregable en formato formal PDF.",
        entregable: "Taller Resuelto 'Estudio de Casos de Reglamento del Aprendiz SENA' en formato de informe técnico formal."
      },
      {
        etapa: "Cierre",
        duracion: "1.5 horas",
        actividadPresencial: "Simulación de Comité de Evaluación y Seguimiento grupal en el ambiente. Cada grupo defiende su resolución de caso frente a sus compañeros en un juego de roles. Cierre lúdico con una trivia de reglamento.",
        actividadVirtual: "Desafío 'Escape Room Digital del Reglamento SENA' o trivial interactivo de casos de reglamento alojado en Zajuna LMS. El aprendiz debe resolver correctamente 5 dilemas de reglamento para poder salir del laberinto virtual con éxito.",
        rolInstructorPresencial: "Actuar como presidente del Comité simulado, evaluar las propuestas de resolución de los aprendices, realizar el cierre formativo enfatizando los deberes y el debido proceso de defensa académica.",
        rolInstructorVirtual: "Configurar y verificar la realización del Escape Room o trivial interactivo del Reglamento, calificar con rúbrica los talleres de reglamento cargados y enviar retroalimentación detallada de casos.",
        rolAprendizPresencial: "Desempeñar su rol en el Comité simulado con profesionalismo y respeto, participando con argumentos jurídicos del reglamento y autoevaluando su asimilación disciplinaria.",
        rolAprendizVirtual: "Resolver de manera óptima el Escape Room o juego interactivo de Reglamento en Zajuna LMS, logrando las respuestas correctas y asimilando los trámites institucionales oficiales.",
        entregable: "Evidencia 4 completada (Taller de Reglamento subido y aprobado, captura del puntaje o certificado del Escape Room de Reglamento)."
      }
    ],
    evaluacion: {
      mecanicaLudica: "Escape Room Digital 'Fórmula Reglamento FPI': Un juego de roles interactivo y de resolución de dilemas donde los aprendices en grupos asumen el papel del 'Comité de Evaluación' para proponer medidas formativas ante faltas críticas. Para entornos virtuales se implementa con un cuestionario gamificado de lógica de escape.",
      criteriosCualitativos: [
        "Interpreta de manera rigurosa y correcta las normas, derechos y deberes consagrados en el Reglamento del Aprendiz SENA (Acuerdo 007 de 2012).",
        "Propone soluciones a situaciones de conflicto o faltas académicas aplicando de manera clara el Debido Proceso.",
        "Identifica los servicios del área de Bienestar Integral al Aprendiz y el canal administrativo oficial para tramitar novedades de su matrícula."
      ],
      instrumentoDual: "Rúbrica de Evaluación de Desempeño sobre el Estudio de Casos y Lista de Cotejo automatizada en el LMS para verificar la entrega integral de las resoluciones disciplinarias en el portafolio."
    },
    recursos: {
      normativas: [
        "Reglamento del Aprendiz SENA (Acuerdo 007 de 2012, Dirección General)",
        "Plan de Bienestar al Aprendiz (Resoluciones del SENA vigentes)",
        "Guía de trámites administrativos de matrícula y novedades estudiantiles"
      ],
      enlacesOficiales: [
        "https://www.sena.edu.co/es-co/transparencia/Normatividad/Acuerdo_007_de_2012.pdf (Reglamento Oficial PDF)",
        "https://www.sena.edu.co/es-co/formacion/Paginas/bienestar-al-aprendiz.aspx (Bienestar al Aprendiz)"
      ],
      promptsVisuales: "Diseño visual institucional de Comité de Evaluación y Bienestar SENA: Composición gráfica moderna que muestra a un instructor orientador y tres aprendices en un ambiente de diálogo asertivo y colaborativo (comité formativo). Al fondo, íconos gráficos flotantes y coloridos que representan Bienestar al Aprendiz (salud/corazón, deporte/balón, cultura/máscaras teatrales y apoyos/monedas). Un aprendiz sostiene una tableta donde se visualiza el 'Acuerdo 007 de 2012'. Colores claros, estilo dinámico y corporativo."
    }
  },
  {
    dia: 5,
    titulo: "Integración, liderazgo y compromiso con el entorno",
    ficha: {
      nombre: "Jornada 5: Pacto de Convivencia, Liderazgo, Sostenibilidad Ambiental y Cierre",
      rapExacto: "240201500-05: Desarrollar procesos comunicativos eficaces y asertivos dentro de criterios de racionalidad que posibiliten la convivencia, el establecimiento de acuerdos, la construcción de consensos y la resolución de conflictos en el entorno formativo y productivo.",
      competencia: "240201500: Promover la interacción idónea consigo mismo, con los demás y con la naturaleza en los contextos laboral y social.",
      objetivoDesempeno: "Co-crear y firmar el Pacto de Convivencia y Compromiso Ético de la ficha, asimilando principios de liderazgo asertivo, comunicación no violenta y sostenibilidad ambiental con el entorno natural en consonancia con la FPI."
    },
    secuencia: [
      {
        etapa: "Apertura",
        duracion: "1 hora",
        actividadPresencial: "Dinámica grupal al aire libre o en círculo en el aula: 'La red del compromiso'. Reflexión colectiva sobre la interdependencia, el cuidado mutuo del grupo de estudio y la responsabilidad compartida con los recursos naturales del Centro.",
        actividadVirtual: "Sesión sincrónica interactiva de cierre de inducción. Dinámica de apertura utilizando un lienzo digital en Miro/Jamboard donde los aprendices expresan de manera gráfica los valores que definirán la convivencia de su grupo durante la formación.",
        rolInstructorPresencial: "Dirigir la dinámica del compromiso en círculo físico, promover reflexiones sobre el liderazgo ético, la inteligencia colectiva y motivar la participación con preguntas de autocuidado grupal y ambiental.",
        rolInstructorVirtual: "Iniciar la transmisión, facilitar el acceso al tablero interactivo Miro explicando la consigna de co-creación de valores del aula y registrar los compromisos de convivencia iniciales.",
        rolAprendizPresencial: "Participar activamente en la dinámica grupal de confianza, expresar con honestidad sus principios éticos de estudio y reflexionar sobre el impacto de su conducta en el grupo.",
        rolAprendizVirtual: "Ingresar al tablero interactivo, aportar ideas de convivencia con notas de color y estructurar junto a sus compañeros los valores principales de su ficha.",
        entregable: "Lienzo preliminar de co-creación de valores para la ficha."
      },
      {
        etapa: "Desarrollo",
        duracion: "2.5 horas",
        actividadPresencial: "Taller de Co-creación del Pacto de Convivencia. Los aprendices en grupos proponen acuerdos relativos a la puntualidad, uso de dispositivos, comunicación, orden de los ambientes y gestión de residuos ecológicos. Redacción del documento único del 'Pacto de Convivencia de la Ficha'. Paralelamente, elaboran su bosquejo del 'Árbol de Proyecto de Vida' integrando metas técnicas y compromisos con la naturaleza.",
        actividadVirtual: "Talleres grupales colaborativos en canales del LMS. Co-creación del Pacto de Convivencia de la Ficha utilizando un editor de texto compartido en línea (Ej: Google Docs integrado en el LMS). Elaboración individual en herramientas digitales (Canva, Miro) del 'Árbol del Proyecto de Vida' plasmando sus metas profesionales y sus acciones de responsabilidad social y ecológica.",
        rolInstructorPresencial: "Guiar y mediar la redacción final del Pacto de Convivencia en el tablero del ambiente, velar por que los acuerdos sean razonables y conformes al reglamento. Orientar conceptualmente la importancia del cuidado del medio ambiente y el desarrollo humano integral en el Proyecto de Vida.",
        rolInstructorVirtual: "Monitorear las salas grupales virtuales, resolver dilemas de redacción de los acuerdos de convivencia estudiantil, recibir el documento de Pacto de Convivencia único y revisar los árboles digitales de proyecto de vida de los aprendices.",
        rolAprendizPresencial: "Aportar ideas concisas al Pacto de Convivencia, firmar digital o físicamente el pacto de su ficha de aprendizaje y estructurar de manera reflexiva su Árbol de Proyecto de Vida que integre metas académicas y ambientales.",
        rolAprendizVirtual: "Redactar asertivamente el Pacto de Convivencia grupal mediante el archivo en la nube, firmar el acuerdo electrónico de convivencia de la ficha y diseñar creativamente su Árbol digital de Proyecto de Vida.",
        entregable: "Pacto de Convivencia Co-creado de la Ficha (con firma del aprendiz) y Árbol de Proyecto de Vida que asocie metas formativas con el cuidado del medio ambiente."
      },
      {
        etapa: "Cierre",
        duracion: "1.5 horas",
        actividadPresencial: "Firma oficial del Pacto de Convivencia de la Ficha. Acto protocolario grupal de cierre. Evaluación formativa de la Semana de Inducción de forma gamificada mediante el juego 'El árbol de los logros'. Palabras de clausura y entrega simbólica de distintivos del SENA.",
        actividadVirtual: "Sesión sincrónica final. Presentación del Pacto de Convivencia consolidado. Envío formal del portafolio digital final consolidado. Dinámica interactiva de cierre en Mentimeter con la pregunta: ¿Cuál es mi mayor compromiso al finalizar esta inducción? Reflexión final del instructor.",
        rolInstructorPresencial: "Presidir la firma formal del Pacto de Convivencia en un afiche de la ficha, realizar la retroalimentación cualitativa final, validar las firmas y declarar cerrada la Semana de Inducción con motivación pedagógica.",
        rolInstructorVirtual: "Presentar en pantalla el documento final del Pacto de Convivencia firmado por todos en la plataforma, retroalimentar el cumplimiento integral del Portafolio del Aprendiz de inducción en Zajuna y dar un mensaje inspirador de cierre curricular.",
        rolAprendizPresencial: "Firma formalmente el afiche del pacto de convivencia, comparte sus metas del proyecto de vida en la dinámica de cierre, organiza el ambiente tecnológico de formación y celebra la culminación exitosa de la inducción.",
        rolAprendizVirtual: "Firma digitalmente la declaración del pacto, descarga su portafolio consolidado con las 5 evidencias de la semana cargadas y comparte sus reflexiones de motivación personal en Mentimeter.",
        entregable: "Evidencia 5 subida al LMS Zajuna. Portafolio del Aprendiz consolidado con las 5 evidencias de inducción verificadas."
      }
    ],
    evaluacion: {
      mecanicaLudica: "Pacto e Hito 'Mi Compromiso SENA': Los aprendices participan en la construcción grupal del 'Árbol de Convivencia y Sostenibilidad' en el ambiente formativo (físico o muro digital Miro), colgando hojas virtuales con sus compromisos éticos, ambientales y de liderazgo asertivo para sellar la semana de inducción de manera memorable.",
      criteriosCualitativos: [
        "Participa activamente en la construcción asertiva y consensuada de acuerdos de convivencia para su grupo de estudio.",
        "Establece una relación clara entre sus metas personales y el impacto ambiental y social de su formación en el marco de la sostenibilidad.",
        "Consolida y presenta de manera organizada su Portafolio del Aprendiz con todas las evidencias exigidas de la semana de inducción."
      ],
      instrumentoDual: "Rúbrica de evaluación de portafolio integral. Acta formal de Concertación de la Inducción debidamente diligenciada y firmada de forma presencial o con firma electrónica dentro de Zajuna LMS."
    },
    recursos: {
      normativas: [
        "Políticas de Gestión Ambiental del SENA (Sostenibilidad Integral)",
        "Lineamientos éticos y de liderazgo institucional del SENA",
        "Estatuto de Formación Profesional Integral del SENA (Resolución 1045 de 2012)"
      ],
      enlacesOficiales: [
        "https://www.sena.edu.co/es-co/sena/Paginas/PoliticaAmbiental.aspx (Política Ambiental SENA)",
        "https://zajuna.sena.edu.co/portal (Recursos de Convivencia del Aula)"
      ],
      promptsVisuales: "Ilustración de cierre y ecología SENA Día 5: Representación gráfica de un grupo de diversos aprendices del SENA de pie, sonriendo y sosteniendo de manera unida un afiche que contiene el 'Pacto de Convivencia'. A sus espaldas, se divisa un gran árbol verde saludable que representa el Proyecto de Vida y la Conservación de la Naturaleza. El sol brillante, elementos limpios de diseño ecológico, el logo del SENA estilizado en una esquina y un fondo corporativo verde sutil."
    }
  }
];

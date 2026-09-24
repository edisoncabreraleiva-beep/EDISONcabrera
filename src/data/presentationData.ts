export interface SlideData {
  num: number;
  title: string;
  narrative: string;
  content: string[];
  imagePrompt: string;
  character: string;
  environment: string;
  epp: string;
}

export interface PresentationData {
  dia: number;
  tema: string;
  introduccion: string;
  youtubeUrl: string;
  youtubeTitle: string;
  youtubeDuration: string;
  slides: SlideData[];
}

export const PRESENTATIONS: PresentationData[] = [
  {
    dia: 1,
    tema: "Identidad Institucional, Símbolos y Circular 006 de 2016",
    introduccion: "Diapositivas cortas interactivas creadas con Gemini Notebook para la apropiación rápida de la historia, la misión, la visión y el direccionamiento estratégico del SENA.",
    youtubeUrl: "https://www.youtube.com/watch?v=sU_K0Mv1D5k",
    youtubeTitle: "Historia y Símbolos Patrios del SENA - Símbolos de Identidad",
    youtubeDuration: "4:15",
    slides: [
      {
        num: 1,
        title: "¡Bienvenidos al SENA! Formación Profesional Integral",
        narrative: "El Instructor Carlos Gómez recibe a la nueva cohorte en el Auditorio de FPI. Les explica la importancia de portar con orgullo el polo oficial.",
        content: [
          "El SENA es la institución de formación pública más querida de los colombianos.",
          "Foco en la Formación Profesional Integral (FPI): técnica, tecnológica y humana.",
          "Principios rectores: el respeto, la solidaridad y la justicia social.",
          "Compromiso absoluto con el desarrollo productivo y la equidad social del país."
        ],
        character: "Instructor Carlos Gómez (Líder de Inducción) y Aprendiz Sofía Castro.",
        environment: "Auditorio de Formación Profesional, Regional Distrito Capital.",
        epp: "Gafas de seguridad y tapabocas reglamentario para el ingreso a los ambientes de práctica.",
        imagePrompt: "Fotografía fotorrealista de Instructor Carlos Gómez portando el chaleco verde institucional del SENA con el logotipo naranja bordado, sosteniendo una tableta de desarrollo. Al fondo se divisa el Auditorio de Formación Profesional iluminado, con aprendices reales portando uniforme de polo blanco."
      },
      {
        num: 2,
        title: "Fundación y Reseña Histórica del SENA",
        narrative: "En la biblioteca digital, la Aprendiz Sofía Castro investiga al fundador de la institución, Rodolfo Martínez Tono, y su visión transformadora.",
        content: [
          "Fundado en 1957 bajo el Decreto 118 de ese año.",
          "Iniciativa liderada por Rodolfo Martínez Tono para capacitar a la clase obrera.",
          "Nace como un esfuerzo conjunto entre el Gobierno, los gremios y los trabajadores.",
          "Evolución constante: de capacitación artesanal a automatización industrial e IA."
        ],
        character: "Aprendiz Sofía Castro (Ingresando a ADSO).",
        environment: "Biblioteca Central e Iris Hub Digital del SENA.",
        epp: "Ninguno (ambiente de estudio teórico), uso correcto del carné institucional en el pecho.",
        imagePrompt: "Aprendiz Sofía Castro, con polo blanco reglamentario del SENA, sentada en una moderna biblioteca escolar con estantes de madera y luz natural, revisando la historia de Rodolfo Martínez Tono en una laptop con pantalla brillante."
      },
      {
        num: 3,
        title: "Misión del SENA: Nuestro Deber Social",
        narrative: "El Instructor Carlos proyecta la misión en el tablero interactivo del ambiente de desarrollo de software para analizar su rol en la economía nacional.",
        content: [
          "Ofrecer formación profesional integral gratuita a todos los colombianos.",
          "Invertir en el desarrollo técnico y social de los trabajadores del país.",
          "Suministrar personal altamente calificado al sector productivo empresarial.",
          "Fomentar el empleo, la innovación tecnológica y el emprendimiento colectivo."
        ],
        character: "Instructor Carlos Gómez.",
        environment: "Ambiente de Simulación de Desarrollo de Software.",
        epp: "Ninguno, ambiente de cómputo seguro.",
        imagePrompt: "Instructor Carlos Gómez señalando en una gran pantalla interactiva táctil la palabra 'MISIÓN DEL SENA' resaltada en verde brillante, vistiendo camisa institucional con el logo de SENA en la manga."
      },
      {
        num: 4,
        title: "Visión del SENA: Líderes del Futuro",
        narrative: "Los aprendices debaten en mesa redonda sobre la proyección de la entidad para el año 2026, enfocados en el liderazgo tecnológico global.",
        content: [
          "Para 2026, consolidarnos como referente de formación técnica de calidad internacional.",
          "Pioneros en la adopción de tecnologías de vanguardia como IA, robótica y desarrollo verde.",
          "Sólida alianza con la industria global para la empleabilidad inmediata del egresado.",
          "Firme compromiso de inclusión social de comunidades marginadas y vulnerables."
        ],
        character: "Aprendices Sofía Castro, Edison Cabrera y sus compañeros de Ficha.",
        environment: "Aula Interactiva de Co-creación y Trabajo en Grupo.",
        epp: "Uniforme polo blanco reglamentario e identificación visible en el cuello.",
        imagePrompt: "Un grupo de aprendices con polos oficiales blancos del SENA cooperando en un salón iluminado por grandes ventanas, escribiendo notas en una pizarra de vidrio móvil con marcadores verdes y negros, con sonrisas de entusiasmo."
      },
      {
        num: 5,
        title: "Símbolos de Identidad: El Escudo Institucional",
        narrative: "Sofía Castro examina de cerca un escudo tallado en madera en el vestíbulo del centro, desglosando el valor simbólico de cada una de sus tres partes.",
        content: [
          "El Piñón (engranaje): Simboliza el desarrollo industrial, la mecánica y la tecnología.",
          "La Rama de Café: Representa el sector primario agropecuario, el campo y la agricultura nacional.",
          "El Caduceo (con alas): Simboliza el sector comercial, de servicios, mercadeo e investigación.",
          "Banderas y Escarapelas: El fondo blanco de paz con el escudo o logo-símbolo verde."
        ],
        character: "Aprendiz Sofía Castro.",
        environment: "Vereda de Acceso y Hall Principal del Centro de Formación.",
        epp: "Uniforme impecable con calzado cerrado adecuado para transitar pasillos.",
        imagePrompt: "Primer plano de un escudo tridimensional pulido del SENA en la pared del vestíbulo de un centro de formación. Una aprendiz lo señala mostrando respeto, con enfoque nítido en el piñón de madera y la rama de café tallada."
      },
      {
        num: 6,
        title: "El Himno del Aprendiz: Canto al Esfuerzo",
        narrative: "Al sonar el Himno oficial en el acto protocolario, la Ficha se pone de pie con reverencia para entonar el coro, liderado por el Subdirector Villalba.",
        content: [
          "Letra oficial escrita por Jesús María Martínez Burgos.",
          "Música compuesta por Daniel Marles Briñez.",
          "Exhorta al aprendiz a luchar por Colombia con nobleza, paz y honor.",
          "Se canta de forma obligatoria en todos los actos cívicos, inducciones y graduaciones."
        ],
        character: "Subdirector Diego Fernando Villalba y Aprendices Unidos.",
        environment: "Auditorio Cívico Central del Centro de Formación.",
        epp: "Uniforme formal de gala o polo reglamentario blanco en excelente estado.",
        imagePrompt: "Fotografía real del Auditorio del SENA donde el subdirector Diego Fernando Villalba y aprendices, de pie y con la mano derecha sobre el corazón, entonan solemnemente el himno con una gran bandera colombiana y una del SENA a los costados."
      },
      {
        num: 7,
        title: "La Circular 006 de 2016: Marco Regulatorio",
        narrative: "El Instructor Carlos detalla en una presentación interactiva cómo esta circular rige formalmente cada segundo del proceso de inducción actual.",
        content: [
          "Lineamiento operativo obligatorio emitido por la Dirección General del SENA.",
          "Estructura el programa de inducción en 5 jornadas continuas de 5 horas de duración.",
          "Establece la obligatoriedad de la Competencia Clave de Interacción Idónea (240201500).",
          "Determina que cada aprendiz debe consolidar un Portafolio de Evidencias de Inducción."
        ],
        character: "Instructor Carlos Gómez.",
        environment: "Ambiente de Formación Curricular de la Regional.",
        epp: "Ninguno, ambiente administrativo-académico seguro.",
        imagePrompt: "Instructor de pie en el estrado del aula, proyectando un documento digital de la Circular 006 de 2016 que detalla la competencia 240201500, con aprendices tomando notas digitales."
      },
      {
        num: 8,
        title: "Compromiso de Identidad: Mi Rol en el SENA",
        narrative: "Sofía Castro firma el pergamino simbólico del aprendiz para sellar formalmente su jornada inicial con orgullo e identidad corporativa.",
        content: [
          "Responsabilidad con el autoaprendizaje y la puntualidad académica.",
          "Respeto incondicional hacia los instructores, coordinadores y personal del centro.",
          "Apropiación de los valores corporativos de honestidad, respeto y liderazgo.",
          "Portar el uniforme con orgullo, representándolo con honor en la sociedad."
        ],
        character: "Aprendiz Sofía Castro e Instructor Carlos Gómez.",
        environment: "Plazoleta Central del Centro de Formación.",
        epp: "Gafas y chaleco de seguridad para recorridos por áreas de talleres.",
        imagePrompt: "Instructor Carlos y la aprendiz Sofía posando con una sonrisa sincera frente al logo del SENA en color naranja y verde de la fachada exterior, luciendo sus uniformes con altísimo honor y escarapelas oficiales de la inducción."
      }
    ]
  },
  {
    dia: 2,
    tema: "Entornos TIC y Modelo Pedagógico SENA",
    introduccion: "Guía interactiva que detalla las herramientas del ecosistema digital del SENA y el Enfoque de Formación Profesional Integral por Competencias.",
    youtubeUrl: "https://www.youtube.com/watch?v=sU_K0Mv1D5k", // Mock or representative official SENA tutorial url
    youtubeTitle: "Uso Correcto de las Plataformas Zajuna LMS y Sofía Plus",
    youtubeDuration: "6:40",
    slides: [
      {
        num: 1,
        title: "Ecosistema Tecnológico de Aprendizaje SENA",
        narrative: "La Instructora María Teresa, especialista en Ambientes Virtuales de Aprendizaje, introduce a Diego Leiva al aula de cómputo de alta tecnología.",
        content: [
          "El SENA cuenta con un robusto entorno digital para soportar el aprendizaje dual.",
          "Integración de plataformas académicas, administrativas y de consulta de datos.",
          "Promueve el desarrollo de habilidades digitales indispensables en la industria moderna.",
          "Disponibilidad asincrónica 24/7 para garantizar la autonomía curricular del aprendiz."
        ],
        character: "Instructora María Teresa y Aprendiz Diego Leiva.",
        environment: "Ambiente Tecnológico TIC, con terminales de alto rendimiento.",
        epp: "Filtros protectores de luz azul y calzado cerrado reglamentario.",
        imagePrompt: "Instructora de pelo oscuro en chaleco verde SENA guiando a un aprendiz frente a una pantalla de monitor grande que exhibe el ecosistema tecnológico institucional, ambiente limpio de laboratorio TIC."
      },
      {
        num: 2,
        title: "Sofía Plus: El Cerebro Administrativo SENA",
        narrative: "Diego Leiva ingresa a Sofía Plus para revisar el estado oficial de su matrícula y su hoja de vida académica.",
        content: [
          "Plataforma principal de administración y control escolar del SENA.",
          "Permite matricularse en programas de formación, cursos cortos y bilingüismo.",
          "Lugar oficial donde se publican las evaluaciones, juicios y calificaciones.",
          "Emisión y descarga de certificaciones oficiales con validación por código QR."
        ],
        character: "Aprendiz Diego Leiva.",
        environment: "Ambiente de Cómputo Integrado de la Regional.",
        epp: "Ninguno, postura ergonómica óptima frente al monitor de diseño.",
        imagePrompt: "Aprendiz Diego Leiva enfocado en primer plano con su polo reglamentario blanco, escribiendo sus datos de ingreso en el portal oficial de Sofía Plus en una pantalla LCD impecable."
      },
      {
        num: 3,
        title: "Zajuna LMS: El Aula Virtual de Formación",
        narrative: "En la sesión práctica, la Instructora María Teresa enseña a Diego cómo descargar la Guía de Aprendizaje en la interfaz renovada de Zajuna.",
        content: [
          "Lugar oficial de encuentro pedagógico asincrónico entre aprendiz e instructor.",
          "Acceso a materiales interactivos, lecturas complementarias y guías didácticas.",
          "Buzón oficial de entrega de evidencias de aprendizaje en formatos PDF, ZIP o video.",
          "Foros de discusión temáticos y mensajería directa con el equipo instructor."
        ],
        character: "Instructora María Teresa y Aprendiz Diego Leiva.",
        environment: "Ambiente Tecnológico TIC.",
        epp: "Ninguno, distanciamiento ergonómico reglamentario.",
        imagePrompt: "Ambiente real del SENA. Instructora María Teresa señalando a un aprendiz cómo subir una evidencia de inducción en la moderna plataforma Zajuna LMS con fondos corporativos verdes."
      },
      {
        num: 4,
        title: "Correo Institucional MiSena: Canal de Comunicación",
        narrative: "Diego configura su dirección @misena.edu.co en su celular para activar las herramientas corporativas de Microsoft Office 365 gratis.",
        content: [
          "Único canal formal de comunicación entre la administración, instructores y aprendices.",
          "Espacio de almacenamiento en la nube de OneDrive de 1 TB para respaldar evidencias.",
          "Acceso gratuito a la suite Office: Word, Excel, Teams y PowerPoint.",
          "Garantiza el flujo seguro de notificaciones académicas de la ficha técnica."
        ],
        character: "Aprendiz Diego Leiva.",
        environment: "Plazoleta Tecnológica de Conectividad Wi-Fi del Centro.",
        epp: "Uso correcto del tapabocas si la normativa de bioseguridad del centro lo exige.",
        imagePrompt: "Aprendiz Diego sentado en una banca de la plazoleta del SENA rodeado de vegetación, sonriendo mientras sostiene su smartphone configurando el correo oficial MiSena en un día despejado."
      },
      {
        num: 5,
        title: "Biblioteca Virtual Iris: El Portal del Saber",
        narrative: "Diego investiga en el Portal Iris del SENA, descargando un libro de bases de datos científicas para enriquecer su primera evidencia de proyecto.",
        content: [
          "Sistema de Bibliotecas del SENA con acceso a millones de recursos libres.",
          "Bases de datos indexadas de editoriales de prestigio como Scopus, IEEE y Springer.",
          "Libros digitales especializados de áreas técnicas disponibles para descarga libre.",
          "Repositorio institucional para consultar tesis y proyectos destacados de egresados."
        ],
        character: "Aprendiz Diego Leiva.",
        environment: "Biblioteca Física de la Regional Distrito Capital.",
        epp: "Carné institucional en cinta oficial en el cuello.",
        imagePrompt: "Vista de biblioteca silenciosa con computadoras de búsqueda Iris, donde Diego Leiva, con su uniforme del SENA, lee un artículo científico sobre desarrollo técnico con un fondo difuminado de estanterías de libros."
      },
      {
        num: 6,
        title: "Modelo Pedagógico SENA: Enfoque por Competencias",
        narrative: "La Instructora María Teresa dibuja en la pizarra un mapa que representa la Formación Profesional Integral (FPI) y su estructura pedagógica.",
        content: [
          "Formación Basada en Competencias: Saber (conocimiento), Saber Hacer (habilidad) y Saber Ser (actitud).",
          "Evaluación cualitativa: 'Aprobado' (A) o 'No Aprobado' (D), eliminando notas numéricas de frustración.",
          "Uso de Guías de Aprendizaje estructuradas para el trabajo colaborativo y autónomo.",
          "Orientado a resolver problemas de la vida real mediante el Proyecto Formativo."
        ],
        character: "Instructora María Teresa.",
        environment: "Ambiente de Formación Curricular.",
        epp: "Ninguno, ambiente libre de peligros.",
        imagePrompt: "Instructora María Teresa explicando de manera clara frente a un tablero de cristal con diagramas de 'Saber, Hacer y Ser' escritos con marcadores de colores llamativos, con actitud didáctica y empática."
      },
      {
        num: 7,
        title: "La Ruta del Aprendizaje: Etapa Lectiva y Productiva",
        narrative: "Diego analiza las dos grandes etapas de su formación técnica, planificando su ingreso seguro al sector productivo colombiano.",
        content: [
          "Etapa Lectiva: Desarrollo teórico-práctico en las aulas, laboratorios y talleres del SENA.",
          "Etapa Productiva: Aplicación directa de competencias en entornos laborales reales del país.",
          "Alternativas de etapa productiva: Contrato de Aprendizaje, Pasantía, Vínculo Laboral o Proyecto.",
          "Acompañamiento e inducción continua por parte del instructor de seguimiento de etapa."
        ],
        character: "Aprendiz Diego Leiva e Instructora María Teresa.",
        environment: "Taller Didáctico de Desarrollo de Proyectos.",
        epp: "Uso de calzado de seguridad cerrado reglamentario para el ambiente de proyectos.",
        imagePrompt: "Diego Leiva en un escritorio del taller de proyectos del SENA debatiendo con su instructora un plano de ruta de aprendizaje que describe la etapa lectiva y productiva en diagramas limpios."
      },
      {
        num: 8,
        title: "Compromiso Digital: Autonomía y Netiqueta",
        narrative: "Diego firma digitalmente las normas de netiqueta y uso responsable de las TIC en la plataforma Zajuna LMS para cerrar la jornada.",
        content: [
          "Uso ético y profesional de los foros académicos y chats corporativos.",
          "Respeto total de los derechos de autor: cero plagio y cita de fuentes bibliográficas.",
          "Cuidado absoluto de los equipos de cómputo y redes del Centro de Formación.",
          "Participación activa, autónoma y disciplinada en las actividades de Zajuna LMS."
        ],
        character: "Aprendiz Diego Leiva.",
        environment: "Ambiente Tecnológico TIC de la Regional.",
        epp: "Uso de gel antibacterial antes de manipular periféricos compartidos.",
        imagePrompt: "Diego Leiva escribiendo un correo formal en una computadora moderna, con luz de fondo verde SENA que refleja orden y pulcritud académica en las tecnologías institucionales."
      }
    ]
  },
  {
    dia: 3,
    tema: "Identidad del Programa de Formación y Estilos de Aprendizaje VAK",
    introduccion: "Diapositivas cortas interactivas para caracterizar el diseño curricular de la ficha técnica y diagnosticar el estilo de aprendizaje dominante (Visual, Auditivo, Kinestésico).",
    youtubeUrl: "https://www.youtube.com/watch?v=sU_K0Mv1D5k",
    youtubeTitle: "Cómo Identificar y Potenciar tus Estilos de Aprendizaje VAK en el SENA",
    youtubeDuration: "5:30",
    slides: [
      {
        num: 1,
        title: "Caracterización de mi Ficha de Formación",
        narrative: "El Instructor Técnico Alejandro recibe a Valeria en el taller de proyectos técnicos. Le enseña el diseño curricular oficial del programa.",
        content: [
          "Cada grupo de aprendices conforma una 'Ficha de Caracterización' con un código único.",
          "El Diseño Curricular define las competencias que el sector productivo demanda.",
          "La duración del programa se divide con exactitud en etapa lectiva y etapa productiva.",
          "Estudiamos bajo la estrategia de Aprendizaje por Proyectos (Proyecto Formativo)."
        ],
        character: "Instructor Técnico Alejandro y Aprendiz Valeria.",
        environment: "Taller de Práctica de Ficha (Especialidad Técnica).",
        epp: "Gafas de seguridad industriales y overol oficial del programa si es taller.",
        imagePrompt: "Instructor Alejandro con chaleco verde SENA y aprendiz Valeria con polo oficial blanco, sentados en un ambiente de taller técnico revisando una carpeta con diseño curricular impreso, rodeados de maquetas e instrumental técnico."
      },
      {
        num: 2,
        title: "Diseño Curricular: El Mapa de Ruta Técnico",
        narrative: "Valeria consulta las competencias clave y específicas en el diseño curricular en formato digital en el aula técnica.",
        content: [
          "Competencias Específicas: Saberes técnicos del área (ej: Programación de Software, Gastronomía).",
          "Competencias Claves: Habilidades transversales (Ética, Comunicación, Matemáticas, Salud Ocupacional).",
          "Resultado de Aprendizaje (RAP): El logro verificable de cada competencia académica.",
          "El Proyecto Formativo unifica todas las competencias en un producto real tangible."
        ],
        character: "Aprendiz Valeria.",
        environment: "Ambiente de Formación Técnica y Aula Tecnológica.",
        epp: "Bata protectora o chaleco oficial del programa, cabello recogido por bioseguridad.",
        imagePrompt: "Valeria con polo del SENA, sonriendo frente a una laptop donde se detalla el perfil ocupacional y competencias de su programa, luz de taller técnico limpia y ordenada de fondo."
      },
      {
        num: 3,
        title: "Perfil del Egresado y Sector Productivo",
        narrative: "El Instructor Alejandro expone en el pizarrón interactivo el perfil laboral y las empresas que demandan aprendices del SENA.",
        content: [
          "Perfil de Egreso: Las destrezas profesionales que el egresado dominará en su labor.",
          "Campos de acción: Sectores empresariales, de desarrollo tecnológico o industriales del país.",
          "Oportunidades de emprendimiento mediante el Fondo Emprender del SENA.",
          "Certificación SENA: Pasaporte de alta empleabilidad en Colombia y el exterior."
        ],
        character: "Instructor Técnico Alejandro y Aprendices.",
        environment: "Auditorio Técnico del Centro de Formación.",
        epp: "Ropa de trabajo cómoda y calzado cerrado industrial para áreas de simulación.",
        imagePrompt: "Instructor señalando una gráfica interactiva de oportunidades de empleo en el sector productivo con el sello oficial del Fondo Emprender y del SENA en una de las esquinas del aula."
      },
      {
        num: 4,
        title: "Etapa Productiva: Alternativas de Graduación",
        narrative: "Valeria estudia las opciones legales para cumplir con su etapa productiva y obtener el título oficial de tecnóloga.",
        content: [
          "Contrato de Aprendizaje: Vinculación formal con apoyo de sostenimiento económico empresarial.",
          "Vínculo Laboral: Desempeñarse directamente en una empresa en tareas del programa de formación.",
          "Proyecto Productivo: Creación de empresa propia con asesoría técnica de instructores.",
          "Pasantía: Práctica social o apoyo en entidades públicas de interés nacional."
        ],
        character: "Aprendiz Valeria e Instructor Alejandro.",
        environment: "Oficina de Enlace de Etapa Productiva del Centro.",
        epp: "Vestimenta formal/reglamentaria impecable y carné visible.",
        imagePrompt: "Valeria firmando una plantilla de planeación de etapa productiva en una mesa de juntas, con el instructor Alejandro guiándola amablemente con una carpeta institucional verde."
      },
      {
        num: 5,
        title: "Estilos de Aprendizaje: Modelo Sensorial VAK",
        narrative: "Valeria y su grupo de ficha realizan el test interactivo VAK para identificar cómo asimilan mejor la información técnica.",
        content: [
          "Modelo VAK: Visual (aprender viendo), Auditivo (oyendo) y Kinestésico (haciendo/tocando).",
          "Permite autodiagnosticar las fortalezas individuales de estudio de cada aprendiz.",
          "Fomenta que el instructor adapte sus estrategias didácticas según la ficha.",
          "Optimiza el rendimiento académico individual y el trabajo de equipo colaborativo."
        ],
        character: "Aprendiz Valeria y su Equipo de Trabajo de Ficha.",
        environment: "Ambiente de Co-Diseño Pedagógico.",
        epp: "Ninguno, postura ergonómica óptima.",
        imagePrompt: "Tres aprendices del SENA con sus polos oficiales interactuando con diferentes herramientas: uno revisa planos (Visual), otra dialoga con auriculares (Auditiva) y el tercero manipula un circuito físico de taller (Kinestésico)."
      },
      {
        num: 6,
        title: "El Aprendiz Visual (👁): Ver para Aprender",
        narrative: "Valeria descubre que su perfil es visual dominante y empieza a diseñar mapas conceptuales en la pizarra de cristal.",
        content: [
          "Retiene mejor la información mediante gráficos, videos, diagramas de flujo y colores.",
          "Prefiere leer el manual o la guía de aprendizaje antes de iniciar la práctica física.",
          "Estrategias útiles: Mapas mentales coloridos, tomar apuntes estructurados, códigos de color.",
          "Uso óptimo de las infografías de Zajuna LMS y videos interactivos del portal."
        ],
        character: "Aprendiz Valeria.",
        environment: "Ambiente de Co-Diseño de Proyectos.",
        epp: "Uniforme polo blanco reglamentario.",
        imagePrompt: "Valeria dibujando un mapa conceptual sumamente estructurado con marcadores verdes y negros en una gran pizarra de cristal en el ambiente del SENA, concentrada e inteligente."
      },
      {
        num: 7,
        title: "El Aprendiz Auditivo (👂): Escuchar y Dialogar",
        narrative: "Edison, compañero de Valeria, explica cómo asimila mejor debatiendo y repitiendo las explicaciones técnicas en voz alta.",
        content: [
          "Aprende mejor con conferencias, debates, audiolibros y charlas explicativas.",
          "Retiene conceptos claves repitiendo la información de la guía en voz alta.",
          "Estrategias útiles: Grabar notas de voz del taller, repasar en grupo por Teams, debates activos.",
          "Participación destacada en foros de discusión social y tutorías sincrónicas virtuales."
        ],
        character: "Aprendiz Edison Cabrera.",
        environment: "Aula Virtual / Cabina de Sonido de Bienestar.",
        epp: "Auriculares estéreo profesionales con micrófono para simulación de tutoría.",
        imagePrompt: "Aprendiz Edison Cabrera con polo del SENA, debatiendo activamente con auriculares puestos frente a un micrófono en una cabina de videoconferencia interactiva, con el logo del SENA visible."
      },
      {
        num: 8,
        title: "El Aprendiz Kinestésico (🛠): Aprender Haciendo",
        narrative: "En el ambiente de taller mecánico, Valeria y Edison manipulan el circuito físico aplicando la teoría directamente sobre los equipos.",
        content: [
          "Aprende mediante el movimiento físico, la experimentación directa y el tacto.",
          "Necesita pausas activas y relacionar la teoría con simulaciones corporales y de taller.",
          "Estrategias útiles: Construcción de prototipos físicos, simulaciones 3D, juegos de roles.",
          "El ambiente de taller del SENA es el hábitat ideal de rendimiento para este perfil."
        ],
        character: "Aprendices Valeria y Edison.",
        environment: "Taller Industrial de Práctica Especializada.",
        epp: "Overol del programa, casco de seguridad industrial naranja, guantes protectores de nitrilo y gafas de protección ocular.",
        imagePrompt: "Aprendices Valeria y Edison portando con orgullo overol industrial de taller del SENA, casco naranja reglamentario, gafas de protección ocular EPP y guantes de nitrilo, manipulando un tablero industrial cableado en el Centro de Formación."
      }
    ]
  },
  {
    dia: 4,
    tema: "Reglamento del Aprendiz y Bienestar Integral",
    introduccion: "Diapositivas cortas sobre el Acuerdo 007 de 2012, desglosando los derechos, deberes, prohibiciones, debido proceso y apoyos de bienestar del aprendiz SENA.",
    youtubeUrl: "https://www.youtube.com/watch?v=sU_K0Mv1D5k",
    youtubeTitle: "Conoce el Reglamento del Aprendiz SENA - Acuerdo 007 de 2012",
    youtubeDuration: "7:15",
    slides: [
      {
        num: 1,
        title: "El Reglamento del Aprendiz: Acuerdo 007 de 2012",
        narrative: "El Subdirector del Centro Diego Fernando Villalba se reúne con los aprendices para recalcar que la disciplina y la ética son las bases de la formación profesional integral.",
        content: [
          "El Acuerdo 007 de 2012 es la norma constitucional de convivencia del aprendiz SENA.",
          "Regula los derechos, deberes, prohibiciones y trámites administrativos de la matrícula.",
          "Asegura el debido proceso y la imparcialidad ante cualquier comité formativo.",
          "Aplica tanto en la etapa lectiva en el centro como en la etapa productiva empresarial."
        ],
        character: "Subdirector Diego Fernando Villalba y Aprendiz Edison Cabrera.",
        environment: "Sala de Juntas de la Subdirección de Centro.",
        epp: "Uniforme institucional impecable y escarapela de identificación oficial.",
        imagePrompt: "Fotografía real del subdirector Diego Fernando Villalba (de contextura seria pero amable, vistiendo traje ejecutivo formal y escarapela del SENA) explicando el Acuerdo 007 a aprendices sentados alrededor de una mesa de juntas de madera."
      },
      {
        num: 2,
        title: "Derechos Fundamentales del Aprendiz SENA",
        narrative: "Edison repasa sus derechos en la cartilla física del reglamento, sintiéndose respaldado por la institución más querida del país.",
        content: [
          "Recibir formación integral de alta calidad con instructores idóneos y herramientas de punta.",
          "Ser escuchado y respetado asertivamente, garantizando la libre expresión de su ser.",
          "Recibir los servicios de Bienestar al Aprendiz: salud, deporte, psicología, cultura y apoyos.",
          "Hacer uso de la biblioteca virtual, laboratorios, talleres y áreas de recreación del centro."
        ],
        character: "Aprendiz Edison Cabrera.",
        environment: "Zonas Verdes Comunes del Centro de Formación.",
        epp: "Ninguno, ambiente de descanso seguro.",
        imagePrompt: "Aprendiz Edison Cabrera luciendo polo oficial blanco del SENA, sentado en las gradas exteriores de un moderno Centro de Formación rodeado de jardines verdes, leyendo la cartilla impresa del Reglamento del Aprendiz."
      },
      {
        num: 3,
        title: "Deberes del Aprendiz: Nuestra Responsabilidad",
        narrative: "El Instructor Nelson recuerda al grupo de ficha el deber de presentarse adecuadamente uniformados y con sus elementos de protección en el taller.",
        content: [
          "Cumplir con puntualidad y regularidad las actividades programadas en el cronograma.",
          "Portar el uniforme de manera digna y pulcra exclusivamente para fines académicos.",
          "Utilizar obligatoriamente los Elementos de Protección Personal (EPP) en laboratorios y talleres.",
          "Cuidar con rigurosidad los equipos de cómputo, maquinaria y bienes físicos de la entidad."
        ],
        character: "Instructor Nelson y Aprendices de Ficha.",
        environment: "Taller Especializado del Centro de Formación.",
        epp: "Casco protector naranja, gafas de seguridad de policarbonato, chaleco de seguridad reflectivo verde, botas dieléctricas.",
        imagePrompt: "Instructor de pie en el taller técnico recordando las normas de deberes, mientras los aprendices portan correctamente su uniforme y EPP (gafas de seguridad y guantes protectores de nitrilo) en actitud de respeto profesional."
      },
      {
        num: 4,
        title: "Prohibiciones Críticas en la Formación",
        narrative: "Durante un taller, se debate sobre los actos que atentan contra la convivencia e integridad y que conllevan a sanciones disciplinarias graves.",
        content: [
          "Plagiar, copiar o suplantar identidad en evidencias y proyectos de Zajuna LMS.",
          "Ingresar al centro bajo el efecto de sustancias psicoactivas o alcohol.",
          "Portar armas, participar en riñas o generar violencia física o verbal.",
          "Utilizar el nombre o los canales de comunicación del SENA para fines de lucro personal."
        ],
        character: "Aprendiz Edison Cabrera e Instructor Nelson.",
        environment: "Aula de Computación de la Ficha.",
        epp: "Ninguno, ambiente controlado académico.",
        imagePrompt: "Ambiente real del SENA. Instructor señalando un cartel en el aula que prohíbe el fraude y plagio académico en los entornos virtuales de Zajuna LMS, con aprendices trabajando honestamente."
      },
      {
        num: 5,
        title: "Trámites Administrativos de Matrícula",
        narrative: "Edison consulta en el reglamento el procedimiento legal para solicitar un aplazamiento debido a motivos de salud familiar.",
        content: [
          "Aplazamiento: Suspensión temporal de la matrícula (máximo 1 año) por fuerza mayor.",
          "Traslado: Solicitar el cambio de programa de formación o de centro de formación.",
          "Reingreso: Solicitar formalmente retornar al programa una vez vencido el aplazamiento.",
          "Retiro Voluntario: Solicitud formal de desvinculación (conlleva sanción de no admisión de 6 meses)."
        ],
        character: "Aprendiz Edison Cabrera y Asesora de Apoyo de Registro y Control.",
        environment: "Oficina de Registro y Control Académico.",
        epp: "Carné institucional visible.",
        imagePrompt: "Diego Leiva en la ventanilla de Registro y Control Académico del SENA, recibiendo orientación de una funcionaria que viste uniforme administrativo de la regional, con folletos informativos sobre aplazamientos de matrícula."
      },
      {
        num: 6,
        title: "Tipificación de Faltas y Medidas Formativas",
        narrative: "Nelson detalla en el tablero la diferencia crucial entre faltas académicas (rendimiento) y disciplinarias (comportamiento) en el reglamento.",
        content: [
          "Clasificación de Faltas: Leves, Graves y Gravísimas.",
          "Criterios de valoración: Grado de participación, daño causado, antecedentes del aprendiz.",
          "Medidas Formativas: Llamado de atención verbal, plan de mejoramiento académico o disciplinario.",
          "Sanciones Oficiales: Llamado de atención escrito, condicionamiento de matrícula o cancelación de la misma."
        ],
        character: "Instructor Nelson.",
        environment: "Ambiente de Formación Curricular.",
        epp: "Ninguno.",
        imagePrompt: "Tablero interactivo que muestra un esquema de faltas leves, graves y gravísimas, con el instructor Nelson explicando las consecuencias éticas de cada una ante la ficha técnica."
      },
      {
        num: 7,
        title: "El Debido Proceso y Comité de Evaluación",
        narrative: "Se simula una mesa redonda que emula un Comité de Evaluación y Seguimiento, donde se garantiza el sagrado derecho a la defensa del aprendiz.",
        content: [
          "Comité de Evaluación: Órgano consultivo que analiza casos de faltas de los aprendices.",
          "Citación formal: El aprendiz recibe citación detallada con las presuntas faltas e informes.",
          "Derecho a la defensa: El aprendiz presenta descargos escritos y aporta pruebas de descargo.",
          "Decisión final: El subdirector de centro emite resolución motivada basada en las sugerencias del comité."
        ],
        character: "Instructor Nelson (Presidente de Comité), Vocero de Ficha y Aprendiz Edison Cabrera.",
        environment: "Ambiente de Simulaciones / Sala de Juntas Disciplinarias.",
        epp: "Uniforme polo blanco impecable y libreta de descargos.",
        imagePrompt: "Recreación de un Comité de Evaluación en el SENA. El instructor Nelson de pie, dos instructores más sentados y el aprendiz Edison Cabrera exponiendo sus descargos con calma y argumentos sólidos basados en el reglamento."
      },
      {
        num: 8,
        title: "Bienestar Integral al Aprendiz: Nuestro Apoyo",
        narrative: "Edison y sus compañeros celebran el cierre de la jornada conociendo las actividades recreativas y apoyos económicos que ofrece el área de Bienestar.",
        content: [
          "Apoyos socioeconómicos: Apoyos de sostenimiento regular, transporte y alimentación.",
          "Salud integral: Enfermería, asesoramiento psicológico, prevención y autocuidado.",
          "Cultura y Recreación: Talleres de música, danzas, teatro, torneos deportivos de fútbol y voleibol.",
          "Liderazgo de Voceros: Elección democrática de representantes y voceros de ficha."
        ],
        character: "Aprendiz Edison Cabrera e Instructora de Bienestar.",
        environment: "Gimnasio y Plazoleta de Bienestar de la Regional.",
        epp: "Uniforme deportivo del SENA (sudadera oficial verde con franjas grises).",
        imagePrompt: "Grupo alegre de aprendices del SENA con sudadera deportiva institucional en la cancha de Bienestar, posando con un balón de fútbol, sonriendo al instructor de deportes en un ambiente de sana recreación y compañerismo."
      }
    ]
  },
  {
    dia: 5,
    tema: "Integración, Liderazgo, Sostenibilidad y Compromiso con el Entorno",
    introduccion: "Diapositivas cortas interactivas para co-crear el Pacto de Convivencia, fomentar el liderazgo asertivo, el cuidado ambiental y consolidar el proyecto de vida en el SENA.",
    youtubeUrl: "https://www.youtube.com/watch?v=sU_K0Mv1D5k",
    youtubeTitle: "Pacto de Convivencia, Liderazgo y Sostenibilidad Ambiental SENA Regional",
    youtubeDuration: "6:10",
    slides: [
      {
        num: 1,
        title: "Pacto de Convivencia: Construcción Colectiva",
        narrative: "La Instructora Claudia, gestora ambiental y de convivencia del centro, reúne a los aprendices en círculo para concertar las reglas éticas de la ficha.",
        content: [
          "El Pacto de Convivencia es el acuerdo ético mutuo co-creado por la propia ficha de aprendizaje.",
          "Establece consensos claros sobre el respeto, la puntualidad y el orden del aula.",
          "Se enfoca en la resolución pacífica de conflictos internos sin recurrir a instancias sancionadoras.",
          "Es un compromiso firmado de forma oficial por todos los aprendices del programa."
        ],
        character: "Instructora Claudia y Aprendiz Edison Cabrera.",
        environment: "Zonas Verdes Comunes del Centro de Formación.",
        epp: "Carné institucional visible.",
        imagePrompt: "Instructora Claudia de pie con chaleco verde SENA liderando un círculo de aprendices sentados al aire libre, conversando amablemente sobre los valores éticos que definirán la convivencia de su ficha de formación."
      },
      {
        num: 2,
        title: "El Liderazgo Asertivo en la Formación Profesional",
        narrative: "Edison y Valeria realizan una dinámica de confianza para potenciar el liderazgo positivo dentro de los equipos de trabajo del proyecto.",
        content: [
          "Liderazgo en el SENA: Capacidad de guiar al equipo con el ejemplo, la empatía y la proactividad.",
          "Líder asertivo: Expresa sus ideas con claridad, firmeza y absoluto respeto hacia los demás.",
          "Fomenta el empoderamiento colectivo para alcanzar las metas del proyecto formativo.",
          "Valora la diversidad de talentos y promueve la inclusión dentro de la ficha de estudio."
        ],
        character: "Aprendices Edison Cabrera y Valeria.",
        environment: "Ambiente de Co-Diseño de Proyectos.",
        epp: "Uniforme polo blanco impecable.",
        imagePrompt: "Aprendiz Edison Cabrera de pie guiando con una sonrisa a su grupo de compañeros en un ejercicio de taller, con Valeria tomando apuntes en una pizarra con el título 'LIDERAZGO ASERTIVO FPI'."
      },
      {
        num: 3,
        title: "Comunicación No Violenta y Asertiva",
        narrative: "La Instructora Claudia dicta un taller práctico sobre cómo resolver desacuerdos en los proyectos de software mediante el diálogo estructurado y la escucha activa.",
        content: [
          "Escucha activa: Prestar atención sin juzgar, comprendiendo las necesidades del compañero.",
          "Comunicación Asertiva: Expresar sentimientos y hechos de forma objetiva y constructiva.",
          "Resolución de conflictos: Diálogo directo, concertación de acuerdos y enfoque en soluciones de mutuo beneficio.",
          "Evitar la agresión verbal o el aislamiento académico ante problemas de grupo."
        ],
        character: "Instructora Claudia y Aprendices de Ficha.",
        environment: "Aula de Convivencia e Inteligencia Emocional.",
        epp: "Ninguno, ambiente cálido académico.",
        imagePrompt: "Reunión de aprendices sentados en sillas en semicírculo debatiendo activamente en una clase del SENA, con gestos faciales empáticos y sonrisas de entendimiento mutuo."
      },
      {
        num: 4,
        title: "Sostenibilidad Ambiental: Compromiso del SENA",
        narrative: "En la huerta y jardín ecológico del centro, la Instructora Claudia enseña a Edison a separar adecuadamente los residuos según el código de colores institucional.",
        content: [
          "El SENA cuenta con una estricta Política de Gestión Ambiental y Sostenibilidad Integral.",
          "Cuidado absoluto de los recursos naturales: ahorro eficiente de agua y energía eléctrica.",
          "Uso responsable y reciclaje de papel, cartón y componentes electrónicos en los talleres.",
          "Código de colores de residuos: Blanco (aprovechables), Verde (orgánicos), Negro (no aprovechables)."
        ],
        character: "Instructora Claudia y Aprendiz Edison Cabrera.",
        environment: "Puntos Ecológicos y Áreas Verdes del Centro de Formación.",
        epp: "Guantes de protección ambiental de nitrilo y chaleco protector verde.",
        imagePrompt: "Aprendiz Edison con guantes protectores de nitrilo depositando residuos aprovechables en un caneco de reciclaje de color blanco, bajo la supervisión de la instructora Claudia en una zona verde del SENA."
      },
      {
        num: 5,
        title: "Mi Árbol de Proyecto de Vida",
        narrative: "Edison dibuja su árbol de proyecto de vida en un lienzo digital, uniendo sus aspiraciones de software con el cuidado de la madre tierra.",
        content: [
          "Las Raíces: Mis valores fundamentales, mi familia y mis orígenes en Colombia.",
          "El Tronco: Mi formación profesional integral en el SENA que me da solidez y estructura.",
          "Las Ramas y Hojas: Mis metas a corto, mediano y largo plazo en el sector productivo.",
          "Los Frutos: Mis aportes éticos, sociales y ambientales para un futuro sostenible del país."
        ],
        character: "Aprendiz Edison Cabrera.",
        environment: "Ambiente Tecnológico TIC con Pantallas de Diseño.",
        epp: "Ninguno, postura ergonómica erguida frente a la pantalla táctil.",
        imagePrompt: "Edison Cabrera manipulando una hermosa infografía en una pantalla táctil que muestra un árbol con raíces llamadas 'Valores' y frutos llamados 'Tecnología Sostenible', luciendo polo oficial del SENA."
      },
      {
        num: 6,
        title: "Selle de Compromiso: Firma del Pacto",
        narrative: "Edison estampa su firma con solemne seriedad en el pergamino del Pacto de Convivencia y Sostenibilidad de la ficha de formación.",
        content: [
          "Firma del pacto: Compromiso formal, público e individual de cumplimiento de los acuerdos.",
          "Sello de honor de la ficha técnica ante la subdirección del centro de formación.",
          "Asegura que el grupo se mantendrá unido y enfocado durante las etapas lectiva y productiva.",
          "Se archiva digitalmente en Zajuna LMS como parte de la evidencia 5 de la inducción."
        ],
        character: "Aprendiz Edison Cabrera e Instructor Carlos Gómez.",
        environment: "Plazoleta Central del Centro de Formación.",
        epp: "Uniforme polo blanco reglamentario impecable.",
        imagePrompt: "Primer plano de un gran pergamino que dice 'PACTO DE CONVIVENCIA FICHA 2879542' extendido sobre una mesa de la plazoleta. El aprendiz Edison Cabrera, con polo del SENA, firma el documento con un esfero negro, sonriendo."
      },
      {
        num: 7,
        title: "La Ceremonia de Siembra Colectiva",
        narrative: "En un acto memorable de cierre ecológico, Claudia y los aprendices siembran un árbol ornamental como símbolo viviente de su proyecto de vida.",
        content: [
          "Siembra de un árbol representativo: Guayacán Amarillo, Palma de Cera o Frailejón.",
          "Símbolo viviente de la responsabilidad ambiental adquirida en el SENA.",
          "La ficha adopta el cuidado continuo del árbol durante toda su etapa de formación lectiva.",
          "Vincula de manera imborrable el crecimiento académico con la preservación de la naturaleza."
        ],
        character: "Instructora Claudia, Aprendiz Edison Cabrera y Aprendiz Valeria.",
        environment: "Bosque de la Sostenibilidad y Jardines Ecológicos del Centro.",
        epp: "Guantes de lona reforzados para jardinería, palas de simulación seguras y botas dieléctricas / de seguridad.",
        imagePrompt: "Grupo de aprendices sonrientes (Edison y Valeria) y la instructora Claudia, usando guantes de lona, plantando cuidadosamente un pequeño brote de Guayacán en la tierra de un jardín del SENA, con luz cálida del sol."
      },
      {
        num: 8,
        title: "Culminación de Inducción FPI: ¡Nuevos Aprendices!",
        narrative: "El equipo de instructores felicita solemnemente a la Ficha por culminar con éxito la semana de inducción y haber habilitado su certificación.",
        content: [
          "Aprobación del 100% de las evidencias en el Portafolio de Aprendiz de inducción.",
          "Conocimiento riguroso de la Circular 006 de 2016 y el Reglamento Acuerdo 007.",
          "Habilitación inmediata del Certificado de Logro firmado por el Subdirector Diego Villalba.",
          "Inicio oficial de las clases técnicas de especialidad con plenas competencias ciudadanas."
        ],
        character: "Subdirector Diego Villalba, Instructor Carlos Gómez, Instructora Claudia y Aprendices Felices.",
        environment: "Auditorio Cívico Principal del Centro de Formación.",
        epp: "Uniforme polo blanco del SENA impecable.",
        imagePrompt: "El subdirector Diego Fernando Villalba y el instructor Carlos de pie en el auditorio central, aplaudiendo de forma entusiasta a un grupo numeroso de aprendices del SENA reales que sonríen y sostienen sus diplomas en señal de victoria."
      }
    ]
  }
];

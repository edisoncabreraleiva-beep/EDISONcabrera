export interface FallbackCase {
  title: string;
  context: string;
  situation: string;
  articles: string;
  questions: string[];
  gamifiedChallenge: string;
}

export const FALLBACK_CASES: Record<string, FallbackCase> = {
  "adso-reglamento": {
    title: "Caso de Estudio ADSO: El Código Compartido y los Límites Éticos",
    context: "En el programa de Análisis y Desarrollo de Software (ADSO), la colaboración técnica es constante. Sin embargo, el Acuerdo 007 de 2012 define límites estrictos sobre la propiedad intelectual y el plagio académico.",
    situation: "Durante la entrega de la evidencia de la base de datos de un sistema de ventas, Carlos, un aprendiz que trabaja y estudia, no logra terminar el script SQL por falta de tiempo. Su compañero de equipo, Mateo, le pasa su archivo completo para que 'se guíe'. Carlos, presionado por la fecha de cierre, copia textualmente el código de Mateo, cambia el nombre del autor y lo sube al LMS Zajuna. El instructor técnico detecta que ambos scripts son idénticos y contienen las mismas notas de autoría de Mateo.",
    articles: "Artículos aplicables del Reglamento (Acuerdo 007 de 2012): Artículo 9 (Deberes del Aprendiz, Numeral 13: Presentar evidencias que correspondan a su desempeño real y evitar plagios), Artículo 10 (Prohibiciones, Numeral 7: Plagiar o copiar documentos), y Artículo 27 y 28 (Medidas formativas y sancionatorias, como el Plan de Mejoramiento o Cancelación del Registro).",
    questions: [
      "¿Cuáles son las faltas éticas y disciplinarias en las que incurrieron Carlos y Mateo según el reglamento?",
      "¿Cuál es el debido proceso que debe adelantar el Instructor Técnico y el Comité de Evaluación del Centro de Formación?",
      "¿Qué alternativas de apoyo en Bienestar al Aprendiz o metodologías de estudio debió buscar Carlos antes de cometer plagio?"
    ],
    gamifiedChallenge: "Simulación de Juicio Académico de Software: Dividir la ficha en tres equipos: Defensores de Carlos, Fiscales del Reglamento y Miembros del Comité de Evaluación. Tienen 5 minutos de debate estructurado para dictaminar la sanción o plan de mejoramiento formativo idóneo."
  },
  "cocina-reglamento": {
    title: "Caso de Estudio Gastronomía: Higiene, Uniformidad y Disciplina en Cocina",
    context: "En el programa de Cocina y Gastronomía, el cumplimiento de las normas de Bioseguridad y el Reglamento de Uniformes no es solo estético, sino un requisito sanitario nacional y laboral directo.",
    situation: "La aprendiza Paula llega al taller de cocina industrial portando el uniforme incompleto (sin gorro de cocina reglamentario y con calzado deportivo común en lugar de zapatos antideslizantes). Además, insiste en ingresar al taller usando anillos y esmalte de uñas, argumentando que acaba de salir de un evento familiar. Al ser reconvenida por el instructor técnico del Centro de Formación, Paula reacciona de forma altanera manifestando que su derecho al libre desarrollo de la personalidad está por encima de las normas de cocina.",
    articles: "Artículos aplicables del Reglamento (Acuerdo 007 de 2012): Artículo 9 (Deberes, Numeral 10: Portar permanentemente y de manera correcta el uniforme asignado), Artículo 10 (Prohibiciones, Numeral 21: Incumplir las normas de bioseguridad del Centro), y Artículo 11 (Derechos, Numeral 5: Recibir formación con las debidas garantías de seguridad industrial).",
    questions: [
      "¿Cómo se pondera el derecho al libre desarrollo de la personalidad frente a los requisitos técnicos de bioseguridad del programa?",
      "¿Qué consecuencias inmediatas tiene el calzado inadecuado en un taller de cocina según la salud ocupacional?",
      "¿Cuáles son las medidas formativas correctivas que el reglamento contempla para esta situación?"
    ],
    gamifiedChallenge: "Carrera de Relevos de Bioseguridad: Un reto físico/digital interactivo donde los aprendices compiten para enumerar los 10 puntos críticos del uniforme reglamentario y las consecuencias de omitir cada uno, ganando insignias de 'Chef Seguro'."
  },
  "enfermeria-reglamento": {
    title: "Caso de Estudio Enfermería: Confidencialidad de Datos en Prácticas Clínicas",
    context: "El programa de Enfermería y Servicios de Salud exige la máxima confidencialidad. Los aprendices interactúan con pacientes reales y manejan historias clínicas confidenciales bajo estricta ley estatutaria de salud.",
    situation: "Durante su etapa práctica en una clínica del municipio, la aprendiza Juliana toma una fotografía con su teléfono móvil a un paciente en estado delicado, mostrando accidentalmente parte de sus datos de identificación. Posteriormente, sube la imagen a sus historias de Instagram con un mensaje de motivación: '¡Luchando por salvar vidas en el SENA!'. Un directivo de la clínica detecta la publicación y reporta formalmente la infracción al Centro de Formación por violación a la privacidad médica.",
    articles: "Artículos aplicables del Reglamento (Acuerdo 007 de 2012): Artículo 10 (Prohibiciones, Numeral 14: Usar de manera inadecuada o con fines distintos la información confidencial de las empresas de práctica), y Ley 1581 de 2012 (Protección de Datos Personales en Colombia).",
    questions: [
      "¿De qué manera la conducta de Juliana afecta la imagen corporativa del SENA y la alianza con la clínica prestadora de salud?",
      "¿Cuáles son las posibles repercusiones legales y disciplinarias del plagio o de la revelación de datos médicos?",
      "¿Qué papel cumple el debido proceso y cómo se tipifica esta falta (leve, grave o gravísima)?"
    ],
    gamifiedChallenge: "Taller del Defensor del Paciente: El grupo analiza el caso en un debate cronometrado de 3 minutos, simulando ser el Comité de Ética Médica de la clínica para proponer alternativas educativas y concientización digital."
  }
};

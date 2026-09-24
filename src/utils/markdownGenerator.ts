import { INDUCTION_DAYS } from '../data/inductionData';

export function generateInductionMarkdown(): string {
  let md = `# GUÍA OPERATIVA: SEMANA DE INDUCCIÓN DE FORMACIÓN PROFESIONAL INTEGRAL (FPI) - SENA\n`;
  md += `## Basado en la Circular 006 de 2016 y la Competencia Clave 240201500\n`;
  md += `**Direccionamiento Estratégico, Apropiación de Entornos TIC, Identidad, Reglamento del Aprendiz y Bienestar Integral**\n\n`;
  md += `--- \n\n`;

  INDUCTION_DAYS.forEach((jornada) => {
    md += `## Jornada del Día ${jornada.dia}: ${jornada.titulo}\n\n`;
    
    md += `### 1. FICHA TÉCNICA DE LA JORNADA\n`;
    md += `* **Nombre Canónico:** ${jornada.ficha.nombre}\n`;
    md += `* **Competencia Clave:** ${jornada.ficha.competencia}\n`;
    md += `* **Resultado de Aprendizaje (RAP) Exacto:** ${jornada.ficha.rapExacto}\n`;
    md += `* **Objetivo Formativo Específico (Desempeño):** ${jornada.ficha.objetivoDesempeno}\n\n`;

    md += `### 2. MATRIZ OPERATIVA DE SECUENCIA DIDÁCTICA (Doble Modalidad Dual)\n\n`;
    md += `| Etapa / Momento | Duración | Actividad Detallada (Presencial / Virtual) | Rol del Instructor / Facilitador | Rol del Aprendiz | Entregable para Portafolio |\n`;
    md += `| :--- | :--- | :--- | :--- | :--- | :--- |\n`;
    
    jornada.secuencia.forEach((paso) => {
      // Create detailed activity representation combining presencial & virtual
      const actividadCombinada = `**[PRESENCIAL]:** ${paso.actividadPresencial}<br><br>**[VIRTUAL/LMS]:** ${paso.actividadVirtual}`;
      const rolInstructorCombinado = `**[PRESENCIAL]:** ${paso.rolInstructorPresencial}<br><br>**[VIRTUAL/LMS]:** ${paso.rolInstructorVirtual}`;
      const rolAprendizCombinado = `**[PRESENCIAL]:** ${paso.rolAprendizPresencial}<br><br>**[VIRTUAL/LMS]:** ${paso.rolAprendizVirtual}`;
      
      md += `| ${paso.etapa} | ${paso.duracion} | ${actividadCombinada.replace(/\n/g, " ").replace(/\|/g, "\\|")} | ${rolInstructorCombinado.replace(/\n/g, " ").replace(/\|/g, "\\|")} | ${rolAprendizCombinado.replace(/\n/g, " ").replace(/\|/g, "\\|")} | ${paso.entregable.replace(/\n/g, " ").replace(/\|/g, "\\|")} |\n`;
    });
    
    md += `\n`;

    md += `### 3. PROTOCOLO DE EVALUACIÓN FORMATIVA GAMIFICADA\n`;
    md += `* **Mecánica Lúdica de Cierre:** ${jornada.evaluacion.mecanicaLudica}\n`;
    md += `* **Criterios de Evaluación Cualitativos (Juicio de Evaluación):**\n`;
    jornada.evaluacion.criteriosCualitativos.forEach((crit) => {
      md += `  - ${crit}\n`;
    });
    md += `* **Instrumento de Verificación Dual (Presencial / LMS):** ${jornada.evaluacion.instrumentoDual}\n\n`;

    md += `### 4. RECURSOS Y MATERIALES DE APOYO\n`;
    md += `* **Normatividad Institucional:**\n`;
    jornada.recursos.normativas.forEach((norma) => {
      md += `  - ${norma}\n`;
    });
    md += `* **Enlaces Oficiales y Manuales (SENA):**\n`;
    jornada.recursos.enlacesOficiales.forEach((enlace) => {
      md += `  - [${enlace}](${enlace})\n`;
    });
    md += `* **Sugerencia de Prompt Visual de Maquetado (Equipo de Diseño/Multimedia):**\n`;
    md += `  > *"${jornada.recursos.promptsVisuales}"*\n\n`;
    
    md += `--- \n\n`;
  });

  md += `## RECOMENDACIONES PEDAGÓGICAS PARA LA GESTIÓN DE EVIDENCIAS EN EL PORTAFOLIO\n`;
  md += `1. **Estructura de Carpetas:** El instructor debe orientar la creación de la carpeta principal 'Portafolio_Inducción_Ficha_XXXXXX' en Zajuna LMS o en formato físico.\n`;
  md += `2. **Evaluación Cualitativa:** No utilizar puntuaciones numéricas de 1-100; se debe calificar con el juicio de **Aprobado (A)** o **No Aprobado (D)**, acompañando de una retroalimentación formativa cualitativa inmediata.\n`;
  md += `3. **Mecanismos de Recuperación:** Si una evidencia no alcanza el criterio formativo, se debe concertar un Plan de Mejoramiento inmediato basado en un reto de aprendizaje alternativo.\n`;
  
  return md;
}

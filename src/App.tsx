import React, { useState } from 'react';
import { 
  BookOpen, 
  Play, 
  Wand2, 
  Briefcase, 
  FileCode, 
  CheckCircle, 
  Award, 
  Calendar, 
  Users, 
  Cpu, 
  Volume2, 
  Eye, 
  Compass, 
  AlertTriangle, 
  ChevronRight, 
  Copy, 
  Check, 
  Download, 
  Layers, 
  HelpCircle, 
  CheckSquare, 
  UserCheck, 
  Info,
  Smartphone,
  ExternalLink,
  Sparkles,
  TreePine,
  CheckSquare2,
  Lock,
  ArrowRight,
  FolderOpen,
  Globe
} from 'lucide-react';
import { INDUCTION_DAYS, JornadaData } from './data/inductionData';
import { PRESENTATIONS } from './data/presentationData';
import { generateInductionMarkdown } from './utils/markdownGenerator';
import { FALLBACK_CASES } from './data/fallbackCases';
import { getLocalFallbackTranslation } from './utils/localTranslator';
import spheresBg from './assets/images/sena_spheres_bg_image_1790257753856.jpg';
import roboticsLabImg from './assets/images/sena_robotic_lab_header_1790258213153.jpg';

const LSC_GLOSSARY: Record<string, { term: string; description: string; icon: React.ReactNode }> = {
  SENA: {
    term: "SENA",
    description: "Coloca la mano derecha a nivel de la frente con los dedos curvados simulando los dientes de un piñón o engranaje. Realiza un giro suave dos veces hacia adelante. Simboliza el desarrollo tecnológico, el engranaje del conocimiento y el logotipo histórico del SENA.",
    icon: (
      <svg className="w-16 h-16 text-emerald-600 mx-auto" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="28" stroke="currentColor" strokeWidth="4" strokeDasharray="8 4" className="animate-spin" style={{ animationDuration: '10s' }} />
        <circle cx="50" cy="50" r="14" fill="currentColor" opacity="0.25" />
        <path d="M48 35 C48 30, 52 30, 52 35 L52 55 C52 60, 48 60, 48 55 Z" fill="currentColor" className="animate-bounce" />
        <path d="M42 42 C38 42, 38 50, 42 50 L58 50 C62 50, 62 42, 58 42 Z" fill="currentColor" opacity="0.7" />
      </svg>
    )
  },
  Instructor: {
    term: "Instructor / Guía",
    description: "Lleva los dedos índice y medio de la mano derecha extendidos formando una 'V' (apuntando al frente) a la altura de la sien derecha. Realiza un movimiento fluido extendiendo la mano hacia el frente y ligeramente hacia arriba, representando guiar, proyectar y enseñar.",
    icon: (
      <svg className="w-16 h-16 text-emerald-600 mx-auto" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M30 65 L50 45 L55 52 L75 32" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M62 32 L75 32 L75 45" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="30" cy="45" r="8" fill="currentColor" opacity="0.3" />
        <path d="M42 38 C46 34, 54 34, 58 38" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="animate-pulse" />
      </svg>
    )
  },
  Aprendiz: {
    term: "Aprendiz / Investigador",
    description: "Ambas manos abiertas frente al pecho con las palmas hacia arriba. Realiza círculos suaves alternados aproximándolos hacia tu cuerpo, como si estuvieras atrayendo conocimiento de un gran libro abierto o asimilando nuevas competencias.",
    icon: (
      <svg className="w-16 h-16 text-emerald-600 mx-auto" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 62 C32 57, 45 57, 50 62 C55 57, 68 57, 78 62 L78 42 C68 37, 55 37, 50 42 C45 37, 32 37, 22 42 Z" fill="none" stroke="currentColor" strokeWidth="4" />
        <path d="M50 42 L50 62" stroke="currentColor" strokeWidth="4" />
        <line x1="50" y1="20" x2="50" y2="28" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="animate-pulse" />
        <line x1="36" y1="22" x2="42" y2="28" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        <line x1="64" y1="22" x2="58" y2="28" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      </svg>
    )
  },
  Induccion: {
    term: "Inducción / Acogida",
    description: "Entrelaza suavemente los dedos de ambas manos abiertas a la altura del pecho mientras realizas un movimiento circular envolvente. Simboliza la integración activa del aprendiz al Centro de Formación, conociendo el reglamento de convivencia.",
    icon: (
      <svg className="w-16 h-16 text-emerald-600 mx-auto" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M35 50 C35 42, 65 42, 65 50 C65 58, 35 58, 35 50" fill="none" stroke="currentColor" strokeWidth="4" strokeDasharray="4 2" className="animate-pulse" />
        <circle cx="41" cy="50" r="9" stroke="currentColor" strokeWidth="3" />
        <circle cx="59" cy="50" r="9" stroke="currentColor" strokeWidth="3" />
        <path d="M45 50 L55 50" stroke="currentColor" strokeWidth="4" className="animate-ping" style={{ animationDuration: '4s' }} />
      </svg>
    )
  },
  Evidencia: {
    term: "Evidencia / Portafolio",
    description: "Extiende la mano izquierda plana de forma horizontal como si sostuvieras una hoja (el portafolio de evidencias). Con la mano derecha cerrada en puño pero dejando los dedos índice y medio doblados formando un 'sello', da dos toques firmes y rítmicos sobre tu mano izquierda.",
    icon: (
      <svg className="w-16 h-16 text-emerald-600 mx-auto" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="25" y="25" width="50" height="50" rx="6" stroke="currentColor" strokeWidth="4" fill="none" />
        <path d="M38 52 L46 60 L62 42" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" className="animate-bounce" />
        <circle cx="50" cy="50" r="16" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
      </svg>
    )
  }
};

export default function App() {
  const [activeTab, setActiveTab] = useState<'guia' | 'juegos' | 'ia' | 'portafolio' | 'recursos' | 'certificado' | 'exportar'>('guia');
  
  // Certificate and student details states
  const [apprenticeFirstName, setApprenticeFirstName] = useState('Edison');
  const [apprenticeLastName, setApprenticeLastName] = useState('Cabrera Leiva');
  const [apprenticeDocType, setApprenticeDocType] = useState('Cédula de Ciudadanía');
  const [apprenticeDoc, setApprenticeDoc] = useState('1.094.887.221');
  const [apprenticeProgramState, setApprenticeProgramState] = useState('Análisis y Desarrollo de Software (ADSO)');
  const [apprenticeFichaState, setApprenticeFichaState] = useState('2879542');
  const [isRegModalOpen, setIsRegModalOpen] = useState(false);
  const [googleDriveUrl, setGoogleDriveUrl] = useState('https://drive.google.com/drive/folders/1SENA_Induccion_FPI_Evidencias_2026');
  const [isDriveConfigOpen, setIsDriveConfigOpen] = useState(false);
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);
  const [copiedReportText, setCopiedReportText] = useState(false);
  
  // DUA & ADDIE Accessibility states
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'xlarge'>('normal');
  const [highContrast, setHighContrast] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [isLscInterpreterOpen, setIsLscInterpreterOpen] = useState(false);
  const [selectedLscTerm, setSelectedLscTerm] = useState<string | null>(null);
  const [showTranscripts, setShowTranscripts] = useState(false);
  const [activeDriveTarget, setActiveDriveTarget] = useState<{
    dia: number;
    titulo: string;
    entregable: string;
  } | null>(null);
  const [copiedFolderText, setCopiedFolderText] = useState(false);
  const [copiedFileText, setCopiedFileText] = useState(false);

  const apprenticeName = `${apprenticeFirstName} ${apprenticeLastName}`.trim();

  // Tab Guía state
  const [selectedDay, setSelectedDay] = useState<number>(1);
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [modalityMode, setModalityMode] = useState<'all' | 'presencial' | 'virtual'>('all');

  // Hover Translation state
  const [translationActive, setTranslationActive] = useState(false);
  const [translationLang, setTranslationLang] = useState<'en' | 'fr'>('en');
  const [hoveredText, setHoveredText] = useState<string | null>(null);
  const [pointerCoords, setPointerCoords] = useState<{ x: number, y: number }>({ x: 0, y: 0 });
  const [translationCache, setTranslationCache] = useState<Record<string, string>>({});
  const [loadingTranslation, setLoadingTranslation] = useState(false);
  const [currentTranslation, setCurrentTranslation] = useState('');
  const [isPlayingLangAudio, setIsPlayingLangAudio] = useState(false);

  const cancelLangAudio = () => {
    try {
      window.speechSynthesis.cancel();
    } catch (e) {
      console.error(e);
    }
    setIsPlayingLangAudio(false);
  };

  const triggerTranslation = async (text: string, lang: 'en' | 'fr') => {
    const cacheKey = `${lang}:${text}`;
    if (translationCache[cacheKey]) {
      setCurrentTranslation(translationCache[cacheKey]);
      setLoadingTranslation(false);
      return;
    }

    setLoadingTranslation(true);
    setCurrentTranslation('');

    try {
      const response = await fetch('/api/translate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text, targetLang: lang })
      });
      if (!response.ok) {
        throw new Error('Server translation error');
      }
      const data = await response.json();
      const translation = data.translation;
      if (translation && !translation.includes('[Offline Fallback')) {
        setTranslationCache(prev => ({ ...prev, [cacheKey]: translation }));
        setHoveredText(current => {
          if (current === text) {
            setCurrentTranslation(translation);
          }
          return current;
        });
      } else {
        throw new Error('No valid translation returned');
      }
    } catch (err) {
      console.warn('Utilizando traductor local de respaldo...');
      const fallback = getLocalFallbackTranslation(text, lang);
      setTranslationCache(prev => ({ ...prev, [cacheKey]: fallback }));
      setHoveredText(current => {
        if (current === text) {
          setCurrentTranslation(fallback);
        }
        return current;
      });
    } finally {
      setLoadingTranslation(false);
    }
  };

  const handleTextHoverEnter = (text: string, e: React.MouseEvent) => {
    if (!translationActive) return;
    setHoveredText(text);
    setPointerCoords({ x: e.clientX, y: e.clientY });
    triggerTranslation(text, translationLang);
  };

  const handleTextHoverMove = (e: React.MouseEvent) => {
    if (!translationActive || !hoveredText) return;
    setPointerCoords({ x: e.clientX, y: e.clientY });
  };

  const handleTextHoverLeave = () => {
    if (!translationActive) return;
    setHoveredText(null);
    setCurrentTranslation('');
  };

  // Markdown copy state
  const [copiedMd, setCopiedMd] = useState(false);

  // Simulated Portfolio state
  const [portfolioNotes, setPortfolioNotes] = useState<Record<number, string>>({
    1: "",
    2: "",
    3: "",
    4: "",
    5: ""
  });
  const [portfolioCompleted, setPortfolioCompleted] = useState<Record<number, boolean>>({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false
  });
  const [uploadedFiles, setUploadedFiles] = useState<Record<number, string>>({});

  // AI custom case generator state
  const [programInput, setProgramInput] = useState('Análisis y Desarrollo de Software (ADSO)');
  const [topicInput, setTopicInput] = useState('Reglamento y Debido Proceso');
  const [modalityInput, setModalityInput] = useState('Dual (Presencial y LMS)');
  const [loadingAi, setLoadingAi] = useState(false);
  const [aiError, setAiError] = useState('');
  const [generatedCase, setGeneratedCase] = useState<{
    title: string;
    context: string;
    situation: string;
    articles: string;
    questions: string[];
    gamifiedChallenge: string;
  } | null>(null);

  // GAME STATES
  // Game 1: Trivia
  const [triviaAnswers, setTriviaAnswers] = useState<Record<number, number>>({});
  const [triviaSubmitted, setTriviaSubmitted] = useState(false);
  const [triviaScore, setTriviaScore] = useState(0);

  // Game 2: TIC Correspondence
  const [ticSelections, setTicSelections] = useState<Record<string, string>>({});
  const [ticFeedback, setTicFeedback] = useState<string | null>(null);

  // Game 3: VAK Test
  const [vakAnswers, setVakAnswers] = useState<Record<number, 'V' | 'A' | 'K'>>({});
  const [vakResult, setVakResult] = useState<{ V: number; A: number; K: number; dominant: string } | null>(null);

  // Game 4: Escape Room
  const [escapeAnswers, setEscapeAnswers] = useState<Record<number, string>>({});
  const [escapeStatus, setEscapeStatus] = useState<'playing' | 'escaped' | 'failed'>('playing');
  const [escapeFeedback, setEscapeFeedback] = useState<string | null>(null);

  // Game 5: Tree & Pact
  const [pledgeName, setPledgeName] = useState('');
  const [pledgeTree, setPledgeTree] = useState('Guayacán Amarillo');
  const [pledgeText, setPledgeText] = useState('Me comprometo a respetar a mis instructores y compañeros, fomentar la sostenibilidad en el Centro de Formación y participar de manera honesta y con dedicación.');
  const [pledgeSigned, setPledgeSigned] = useState(false);

  const activeDayData = INDUCTION_DAYS.find(d => d.dia === selectedDay) || INDUCTION_DAYS[0];

  // Helper: Toggle DUA TTS Screen Reader
  const handleToggleScreenReader = () => {
    if (isPlayingAudio) {
      window.speechSynthesis.cancel();
      setIsPlayingAudio(false);
      return;
    }

    // Compile educational text of current day & current slide for reading
    const currentPres = PRESENTATIONS.find(p => p.dia === selectedDay) || PRESENTATIONS[0];
    const currentSld = currentPres.slides[currentSlide] || currentPres.slides[0];
    
    let textToSpeak = `Jornada del Día ${selectedDay}: ${activeDayData.titulo}. `;
    textToSpeak += `Resultado de aprendizaje: ${activeDayData.ficha.rapExacto}. `;
    textToSpeak += `Tema de hoy: ${currentSld.title}. `;
    textToSpeak += `${currentSld.content.join('. ')}. `;
    textToSpeak += `Contexto visual: ${currentSld.imagePrompt}. `;
    textToSpeak += `Personaje real: ${currentSld.character}. Ambiente del Sena: ${currentSld.environment}. `;

    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    utterance.lang = 'es-CO';
    
    utterance.onend = () => {
      setIsPlayingAudio(false);
    };

    utterance.onerror = () => {
      setIsPlayingAudio(false);
    };

    setIsPlayingAudio(true);
    window.speechSynthesis.speak(utterance);
  };

  // Helper: Read active slide text out loud in the active execution language (es, en, fr)
  const handleSpeakActiveLanguage = () => {
    if (isPlayingLangAudio) {
      cancelLangAudio();
      return;
    }

    // Cancel other audio just in case
    if (isPlayingAudio) {
      window.speechSynthesis.cancel();
      setIsPlayingAudio(false);
    }

    const currentPres = PRESENTATIONS.find(p => p.dia === selectedDay) || PRESENTATIONS[0];
    const currentSld = currentPres.slides[currentSlide] || currentPres.slides[0];

    let langCode = 'es-CO';
    let textToSpeak = '';

    if (!translationActive) {
      langCode = 'es-CO';
      textToSpeak = `Título: ${currentSld.title}. Narrativa: ${currentSld.narrative}. Puntos clave: ${currentSld.content.join('. ')}`;
    } else if (translationLang === 'en') {
      langCode = 'en-US';
      const transTitle = getLocalFallbackTranslation(currentSld.title, 'en');
      const transNarrative = getLocalFallbackTranslation(currentSld.narrative, 'en');
      const transBullets = currentSld.content.map(b => getLocalFallbackTranslation(b, 'en')).join('. ');
      textToSpeak = `Title: ${transTitle}. Narrative: ${transNarrative}. Key aspects: ${transBullets}`;
    } else if (translationLang === 'fr') {
      langCode = 'fr-FR';
      const transTitle = getLocalFallbackTranslation(currentSld.title, 'fr');
      const transNarrative = getLocalFallbackTranslation(currentSld.narrative, 'fr');
      const transBullets = currentSld.content.map(b => getLocalFallbackTranslation(b, 'fr')).join('. ');
      textToSpeak = `Titre: ${transTitle}. Récit: ${transNarrative}. Aspects clés: ${transBullets}`;
    }

    try {
      const utterance = new SpeechSynthesisUtterance(textToSpeak);
      utterance.lang = langCode;

      utterance.onend = () => {
        setIsPlayingLangAudio(false);
      };

      utterance.onerror = () => {
        setIsPlayingLangAudio(false);
      };

      setIsPlayingLangAudio(true);
      window.speechSynthesis.speak(utterance);
    } catch (e) {
      console.error(e);
      setIsPlayingLangAudio(false);
    }
  };

  // Helper: Copy markdown
  const handleCopyMarkdown = () => {
    const mdText = generateInductionMarkdown();
    navigator.clipboard.writeText(mdText);
    setCopiedMd(true);
    setTimeout(() => setCopiedMd(false), 3000);
  };

  // Helper: Download markdown file
  const handleDownloadMarkdown = () => {
    const mdText = generateInductionMarkdown();
    const blob = new Blob([mdText], { type: 'text/markdown;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'SENA_Guia_Semana_Induccion_FPI.md');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Helper: Handle file upload simulation
  const handleSimulateUpload = (dayNum: number, filename: string) => {
    setUploadedFiles(prev => ({ ...prev, [dayNum]: filename }));
    setPortfolioCompleted(prev => ({ ...prev, [dayNum]: true }));
  };

  // Helper: Trigger Gemini API for custom case studies
  const handleGenerateCase = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoadingAi(true);
    setAiError('');
    setGeneratedCase(null);

    try {
      const response = await fetch('/api/generate-case', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          program: programInput,
          topic: topicInput,
          modality: modalityInput
        })
      });

      if (!response.ok) {
        throw new Error('No se pudo conectar con el servidor de IA.');
      }

      const data = await response.json();
      if (data.error) {
        throw new Error(data.error);
      }
      setGeneratedCase(data);
    } catch (err: any) {
      console.warn('Utilizando generador local de respaldo...');
      // Fallback generator based on selected inputs
      const fallbackKey = `${programInput.toLowerCase().includes('software') || programInput.toLowerCase().includes('adso') ? 'adso' : programInput.toLowerCase().includes('cocina') || programInput.toLowerCase().includes('gastronomía') ? 'cocina' : 'enfermeria'}-reglamento`;
      const fallback = FALLBACK_CASES[fallbackKey] || FALLBACK_CASES['adso-reglamento'];
      
      // Customize fallback slightly on the fly
      setGeneratedCase({
        title: fallback.title.replace('ADSO', programInput).replace('Gastronomía', programInput),
        context: fallback.context.replace('Análisis y Desarrollo de Software (ADSO)', programInput),
        situation: fallback.situation,
        articles: fallback.articles,
        questions: fallback.questions,
        gamifiedChallenge: fallback.gamifiedChallenge
      });
      setAiError('Nota: Mostrando caso optimizado del repositorio (servidor sin clave de API activa).');
    } finally {
      setLoadingAi(false);
    }
  };

  // Game Handlers
  // Game 1: Trivia
  const handleTriviaSubmit = () => {
    let score = 0;
    if (triviaAnswers[1] === 2) score++; // piñón
    if (triviaAnswers[2] === 1) score++; // circular 006
    if (triviaAnswers[3] === 1) score++; // café
    setTriviaScore(score);
    setTriviaSubmitted(true);
  };

  // Game 2: TIC Matching
  const ticTasks = [
    { id: 'calif', text: 'Visualizar mis notas oficiales de formación y matricular mi ficha', platform: 'Sofía Plus' },
    { id: 'foros', text: 'Interactuar con instructores en foros y descargar la Guía de Aprendizaje', platform: 'Zajuna (LMS)' },
    { id: 'libros', text: 'Acceder a bases de datos científicas y libros digitales gratuitos', platform: 'Biblioteca Virtual SENA' },
    { id: 'empleo', text: 'Inscribir mi hoja de vida y postularme a vacantes de trabajo nacionales', platform: 'Agencia Pública de Empleo (APE)' }
  ];

  const checkTicMatching = () => {
    let correct = 0;
    ticTasks.forEach(task => {
      if (ticSelections[task.id] === task.platform) correct++;
    });
    
    if (correct === 4) {
      setTicFeedback('¡Excelente! Has dominado el ecosistema TIC del SENA. Has habilitado tu Evidencia 2.');
      setPortfolioCompleted(prev => ({ ...prev, 2: true }));
      setUploadedFiles(prev => ({ ...prev, 2: 'Comprobante_Dominio_TIC_Simulador.pdf' }));
    } else {
      setTicFeedback(`Tienes ${correct} de 4 correctas. ¡Sigue probando para conocer el ecosistema!`);
    }
  };

  // Game 3: VAK Test
  const handleVakSelect = (qNum: number, value: 'V' | 'A' | 'K') => {
    setVakAnswers(prev => ({ ...prev, [qNum]: value }));
  };

  const calculateVak = () => {
    const answers = Object.values(vakAnswers);
    if (answers.length < 4) {
      alert('Por favor responde las 4 preguntas para tabular tus estilos.');
      return;
    }
    const count = { V: 0, A: 0, K: 0 };
    answers.forEach(a => count[a]++);
    
    let dominant = 'Visual';
    if (count.A > count.V && count.A > count.K) dominant = 'Auditivo';
    if (count.K > count.V && count.K > count.A) dominant = 'Kinestésico';
    
    setVakResult({
      V: Math.round((count.V / 4) * 100),
      A: Math.round((count.A / 4) * 100),
      K: Math.round((count.K / 4) * 100),
      dominant
    });
    
    setPortfolioCompleted(prev => ({ ...prev, 3: true }));
    setUploadedFiles(prev => ({ ...prev, 3: `Autoevaluacion_Estilo_VAK_${dominant}.pdf` }));
  };

  // Game 4: Escape Room
  const handleEscapeCheck = () => {
    const ans1 = escapeAnswers[1]; // Prohibición
    const ans2 = escapeAnswers[2]; // Derecho
    const ans3 = escapeAnswers[3]; // Deber

    if (ans1 === 'Prohibición' && ans2 === 'Derecho' && ans3 === 'Deber') {
      setEscapeStatus('escaped');
      setEscapeFeedback('¡Felicidades! Has resuelto los dilemas y desbloqueado el candado del Reglamento. Taller de Reglamento aprobado en tu portafolio.');
      setPortfolioCompleted(prev => ({ ...prev, 4: true }));
      setUploadedFiles(prev => ({ ...prev, 4: 'Taller_Reglamento_Aprobado_Simulado.pdf' }));
    } else {
      setEscapeStatus('failed');
      setEscapeFeedback('Algunas respuestas no son acordes al Acuerdo 007 de 2012. Revisa y reintenta el debido proceso para escapar.');
    }
  };

  // Game 5: Tree Pledge
  const handleSignPledge = () => {
    if (!pledgeName.trim()) {
      alert('Por favor escribe tu nombre completo para la firma.');
      return;
    }
    setPledgeSigned(true);
    setPortfolioCompleted(prev => ({ ...prev, 5: true }));
    setUploadedFiles(prev => ({ ...prev, 5: `Pacto_Induccion_Firmado_${pledgeName.replace(/\s+/g, '_')}.pdf` }));
  };

  // Portfolio general state count
  const portfolioProgressCount = Object.values(portfolioCompleted).filter(Boolean).length;
  const portfolioPercentage = Math.round((portfolioProgressCount / 5) * 100);

  return (
    <div 
      className={`min-h-screen flex flex-col transition-all duration-300 ${highContrast ? 'bg-slate-950 text-white' : 'theme-glass text-slate-100'}`}
      style={{ 
        fontSize: fontSize === 'large' ? '112%' : fontSize === 'xlarge' ? '125%' : '100%',
        backgroundImage: highContrast ? 'none' : `radial-gradient(circle at center, rgba(10, 10, 15, 0.45) 0%, rgba(5, 5, 8, 0.95) 100%), url(${spheresBg})`,
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: '#050508'
      }}
    >
      
      {/* INSTITUTIONAL TOP BAR */}
      <div className="bg-[#39A900] text-white text-xs px-4 py-2 flex justify-between items-center font-medium shadow-sm">
        <div className="flex items-center gap-2">
          <span className="bg-white text-[#39A900] px-1.5 py-0.5 font-bold rounded-sm">SENA</span>
          <span>SERVICIO NACIONAL DE APRENDIZAJE COLOMBIA • DIRECCIÓN DE FORMACIÓN PROFESIONAL</span>
        </div>
        <div className="hidden md:flex gap-4 items-center">
          <span>Competencia Clave: 240201500</span>
          <span>Circular 006 de 2016</span>
          <button 
            onClick={() => setIsDriveConfigOpen(true)}
            className="bg-emerald-850 hover:bg-emerald-750 text-emerald-100 font-bold px-2.5 py-1 rounded-sm flex items-center gap-1.5 transition-all text-xs tracking-wider cursor-pointer shadow-xs border border-emerald-700/50"
            title="Abrir o configurar carpeta de evidencias de Google Drive"
          >
            <FolderOpen className="w-3.5 h-3.5 text-emerald-300" />
            PORTAFOLIO ACTIVO
          </button>
        </div>
      </div>

      {/* DUA & ADDIE INCLUSIVE ACCESSIBILITY TOOLBAR */}
      <div className={`border-b shrink-0 px-4 py-3 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-xs transition-colors duration-300 ${highContrast ? 'bg-black text-yellow-300 border-yellow-300' : 'bg-slate-100 border-slate-200'}`}>
        <div className="flex items-center gap-3">
          <span className="p-2 bg-[#39A900] text-white rounded-lg text-lg font-black flex items-center justify-center shadow-md select-none animate-bounce">
            🤟
          </span>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="bg-indigo-600 text-white font-extrabold px-1.5 py-0.5 rounded-[4px] text-[9px] uppercase tracking-wider">DUA (Diseño Universal)</span>
              <span className="bg-slate-700 text-slate-100 font-extrabold px-1.5 py-0.5 rounded-[4px] text-[9px] uppercase tracking-wider">ADDIE</span>
            </div>
            <span className="font-extrabold text-[12px] block mt-0.5">Adaptaciones Tecnológicas para Aprendices con Diversidad Auditiva, Visual y de Lenguaje</span>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2.5 w-full md:w-auto">
          
          {/* VISUAL CONTROLS GROUP */}
          <div className={`flex items-center gap-1.5 p-1 rounded-lg border shadow-xs transition-colors ${highContrast ? 'bg-black border-yellow-300 text-yellow-300' : 'bg-white border-slate-200 text-slate-800'}`}>
            <span className="text-[10px] font-bold text-slate-500 uppercase px-1">Visual:</span>
            
            {/* Font Zoom */}
            <button
              onClick={() => {
                if (fontSize === 'normal') setFontSize('large');
                else if (fontSize === 'large') setFontSize('xlarge');
                else setFontSize('normal');
              }}
              className="px-2 py-1 bg-slate-200 hover:bg-slate-300 text-slate-800 rounded font-extrabold text-[11px] transition-all cursor-pointer flex items-center gap-1"
              title="Aumentar tamaño de letra (DUA - Representación)"
            >
              <span>A±</span>
              <span className="text-[9px] uppercase text-slate-500 font-mono">
                ({fontSize === 'normal' ? '1x' : fontSize === 'large' ? '1.15x' : '1.25x'})
              </span>
            </button>

            {/* High Contrast */}
            <button
              onClick={() => setHighContrast(!highContrast)}
              className={`px-2 py-1 rounded font-extrabold transition-all cursor-pointer text-[11px] flex items-center gap-1 ${highContrast ? 'bg-yellow-400 text-black border border-yellow-500 shadow-sm font-black' : 'bg-slate-200 hover:bg-slate-300 text-slate-800'}`}
              title="Alternar Modo de Alto Contraste para discapacidad visual (DUA)"
            >
              👁 {highContrast ? 'Contraste Normal' : 'Alto Contraste'}
            </button>
          </div>

          {/* HEARING CONTROLS GROUP */}
          <div className={`flex items-center gap-1.5 p-1 rounded-lg border shadow-xs transition-colors ${highContrast ? 'bg-black border-yellow-300 text-yellow-300' : 'bg-white border-slate-200 text-slate-800'}`}>
            <span className="text-[10px] font-bold text-slate-500 uppercase px-1">Auditivo:</span>
            
            {/* Screen Reader TTS */}
            <button
              onClick={handleToggleScreenReader}
              className={`px-2.5 py-1 rounded font-extrabold transition-all cursor-pointer text-[11px] flex items-center gap-1.5 ${isPlayingAudio ? 'bg-red-600 text-white animate-pulse' : 'bg-slate-200 hover:bg-slate-300 text-slate-800'}`}
              title="Lector de pantalla por voz - Audio Guía del Aprendiz (DUA)"
            >
              🔊 {isPlayingAudio ? 'Detener Audio' : 'Audio Guía (TTS)'}
            </button>

            {/* Video & Slide Transcripts */}
            <button
              onClick={() => setShowTranscripts(!showTranscripts)}
              className={`px-2.5 py-1 rounded font-extrabold transition-all cursor-pointer text-[11px] flex items-center gap-1.5 ${showTranscripts ? 'bg-[#39A900] text-white' : 'bg-slate-200 hover:bg-slate-300 text-slate-800'}`}
              title="Ver transcripciones textuales y subtítulos de apoyo (DUA)"
            >
              📝 {showTranscripts ? 'Ocultar Transcripción' : 'Subtítulos / Transcribir'}
            </button>
          </div>

          {/* SIGN LANGUAGE (LSC) GROUP */}
          <div className={`flex items-center gap-1.5 p-1 rounded-lg border shadow-xs transition-colors ${highContrast ? 'bg-black border-yellow-300 text-yellow-300' : 'bg-white border-slate-200 text-slate-800'}`}>
            <span className="text-[10px] font-bold text-slate-500 uppercase px-1">LSC Señas:</span>
            
            {/* Sign Language Virtual Interpreter */}
            <button
              onClick={() => {
                setIsLscInterpreterOpen(!isLscInterpreterOpen);
                if (!selectedLscTerm) setSelectedLscTerm('SENA'); // Default term
              }}
              className={`px-2.5 py-1 rounded font-extrabold transition-all cursor-pointer text-[11px] flex items-center gap-1.5 ${isLscInterpreterOpen ? 'bg-indigo-600 text-white' : 'bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200'}`}
              title="Abrir intérprete de Lengua de Señas Colombiana (LSC)"
            >
              🤟 Intérprete LSC
            </button>
          </div>

        </div>
      </div>

      {/* HEADER HERO */}
      <header className="bg-slate-900 text-white border-b-4 border-[#39A900] relative overflow-hidden shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            {/* Left/Middle Column: Branding & Info */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                {/* OFFICIAL ORANGE LOGO */}
                <div className="p-3 bg-white rounded-xl shadow-md shrink-0 flex items-center justify-center">
                  <img 
                    src="https://oficinavirtualderadicacion.sena.edu.co/oficinavirtual/Resources/logoSenaNaranja.png" 
                    alt="Logo SENA Naranja" 
                    className="w-16 h-16 object-contain"
                  />
                </div>
                
                <div className="space-y-1">
                  <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white">
                    Semana de Inducción FPI SENA v2026
                  </h1>
                  <p className="text-[#39A900] font-semibold text-sm">
                    Plataforma Curricular de Inducción de la Formación Profesional Integral
                  </p>
                </div>
              </div>
              
              <p className="text-slate-300 text-xs md:text-sm leading-relaxed max-w-2xl font-light">
                Herramienta Ejecutiva Operativa y Simulador Gamificado para Instructores y Aprendices. Cumple con la 
                <strong> Competencia Clave 240201500</strong> y los lineamientos de la <strong>Circular 006 de 2016</strong>.
              </p>

              {/* ACTIVE APPRENTICE PROFILE CARD */}
              <div className="bg-[#39A900]/15 border border-[#39A900]/30 rounded-xl p-3 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 max-w-xl shadow-xs">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#39A900]">Aprendiz en Inducción Activo</span>
                  </div>
                  <p className="text-sm font-extrabold text-white">
                    {apprenticeFirstName} {apprenticeLastName}
                  </p>
                  <p className="text-[11px] text-slate-300">
                    <span className="font-semibold text-slate-400">{apprenticeDocType}:</span> <span className="font-semibold text-white">{apprenticeDoc}</span> • <span className="font-semibold text-slate-400">Ficha:</span> <span className="font-semibold text-white">{apprenticeFichaState}</span>
                  </p>
                  <p className="text-[10.5px] text-slate-400 italic truncate max-w-xs sm:max-w-md">
                    Programa: {apprenticeProgramState}
                  </p>
                </div>
                
                <button 
                  onClick={() => setIsRegModalOpen(true)}
                  className="w-full sm:w-auto shrink-0 bg-[#39A900] hover:bg-[#329600] text-white px-3.5 py-2 rounded-lg text-xs font-bold transition-all shadow-md flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Users className="w-3.5 h-3.5" />
                  Registrar Ingreso 📝
                </button>
              </div>

              {/* QUICK STATUS PORTFOLIO */}
              <div className="bg-slate-800/80 p-3.5 rounded-xl border border-slate-700 max-w-md">
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-slate-300">Progreso Portafolio:</span>
                  <span className="font-bold text-[#39A900]">{portfolioPercentage}%</span>
                </div>
                <div className="w-full bg-slate-700 h-2.5 rounded-full overflow-hidden">
                  <div 
                    className="bg-[#39A900] h-full transition-all duration-500 ease-out" 
                    style={{ width: `${portfolioPercentage}%` }}
                  ></div>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-[10px] text-slate-400">
                    {portfolioProgressCount} de 5 Evidencias registradas
                  </span>
                  {portfolioProgressCount === 5 ? (
                    <span className="text-[10px] bg-emerald-500/20 text-emerald-400 font-semibold px-2 py-0.5 rounded">
                      ¡Completado! Certificado Habilitado
                    </span>
                  ) : (
                    <button
                      onClick={() => {
                        setPortfolioCompleted({ 1: true, 2: true, 3: true, 4: true, 5: true });
                        setUploadedFiles({
                          1: 'Infografia_Identidad_SENA_Simulada.pdf',
                          2: 'Comprobante_Dominio_TIC_Simulador.pdf',
                          3: 'Autoevaluacion_Estilo_VAK_Visual.pdf',
                          4: 'Taller_Reglamento_Aprobado_Simulado.pdf',
                          5: 'Pacto_Induccion_Firmado_Edison.pdf'
                        });
                        alert('Se han simulado y aprobado todas las evidencias del portafolio. ¡Tu certificado ya está listo para imprimir!');
                      }}
                      className="text-[10px] text-amber-400 hover:text-amber-300 font-bold underline"
                    >
                      Bypass: Aprobar Todo
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Right Column: Generated Image of SENA Environment with EPP */}
            <div className="lg:col-span-5">
              <div className="bg-slate-800 p-2 rounded-2xl border border-slate-700 shadow-xl overflow-hidden group">
                <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-950">
                  <img 
                    src={roboticsLabImg} 
                    alt="Ambiente de Aprendizaje de Robótica SENA" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 to-slate-950/0 p-3">
                    <p className="text-[10.5px] font-semibold text-white leading-tight">
                      Ambiente de Aprendizaje FPI SENA
                    </p>
                    <p className="text-[9.5px] text-slate-300 mt-0.5 leading-snug">
                      Instructores y aprendices reales con uniforme reglamentario y Elementos de Protección Personal (EPP).
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Decorative Grid Effect */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-950/20 via-slate-900 to-slate-900 opacity-60 z-0 pointer-events-none"></div>
      </header>

      {/* DASHBOARD TABS NAVIGATION */}
      <nav className="bg-white border-b border-slate-200 shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap gap-2 md:gap-4 py-2">
          <button 
            onClick={() => setActiveTab('guia')}
            className={`flex items-center gap-2 px-4 py-3 text-sm font-semibold border-b-2 transition-all duration-200 ${activeTab === 'guia' ? 'border-[#39A900] text-[#39A900]' : 'border-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-50'}`}
          >
            <BookOpen className="w-4.5 h-4.5" />
            Guía Pedagógica Operativa (Día 1-5)
          </button>
          
          <button 
            onClick={() => setActiveTab('juegos')}
            className={`flex items-center gap-2 px-4 py-3 text-sm font-semibold border-b-2 transition-all duration-200 ${activeTab === 'juegos' ? 'border-[#39A900] text-[#39A900]' : 'border-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-50'}`}
          >
            <Play className="w-4.5 h-4.5" />
            Zona Gamificada (Simulador)
            <span className="bg-orange-500 text-white text-[10px] px-1.5 py-0.5 rounded-full font-bold ml-1 animate-pulse">5 Retos</span>
          </button>

          <button 
            onClick={() => setActiveTab('ia')}
            className={`flex items-center gap-2 px-4 py-3 text-sm font-semibold border-b-2 transition-all duration-200 ${activeTab === 'ia' ? 'border-[#39A900] text-[#39A900]' : 'border-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-50'}`}
          >
            <Wand2 className="w-4.5 h-4.5" />
            Generador de Casos IA (Instructores)
            <span className="bg-[#39A900]/10 text-[#39A900] text-[10px] px-1.5 py-0.5 rounded-sm font-medium ml-1">Gemini</span>
          </button>

          <button 
            onClick={() => setActiveTab('portafolio')}
            className={`flex items-center gap-2 px-4 py-3 text-sm font-semibold border-b-2 transition-all duration-200 ${activeTab === 'portafolio' ? 'border-[#39A900] text-[#39A900]' : 'border-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-50'}`}
          >
            <Briefcase className="w-4.5 h-4.5" />
            Mi Portafolio del Aprendiz
            {portfolioProgressCount > 0 && (
              <span className="bg-[#39A900] text-white text-[10px] px-2 py-0.5 rounded-full font-bold ml-1">
                {portfolioProgressCount}
              </span>
            )}
          </button>

          <button 
            onClick={() => setActiveTab('recursos')}
            className={`flex items-center gap-2 px-4 py-3 text-sm font-semibold border-b-2 transition-all duration-200 ${activeTab === 'recursos' ? 'border-[#39A900] text-[#39A900]' : 'border-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-50'}`}
          >
            <Volume2 className="w-4.5 h-4.5" />
            Materiales e Himno 🎵
          </button>

          <button 
            onClick={() => setActiveTab('certificado')}
            className={`flex items-center gap-2 px-4 py-3 text-sm font-semibold border-b-2 transition-all duration-200 ${activeTab === 'certificado' ? 'border-[#39A900] text-[#39A900]' : 'border-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-50'}`}
          >
            <Award className="w-4.5 h-4.5" />
            Certificado de Logro 🏆
            {portfolioProgressCount === 5 ? (
              <span className="bg-emerald-500 text-white text-[10px] px-1.5 py-0.5 rounded-sm font-bold ml-1">Listo</span>
            ) : (
              <span className="bg-amber-500 text-white text-[10px] px-1.5 py-0.5 rounded-sm font-bold ml-1">Pendiente</span>
            )}
          </button>

          <button 
            onClick={() => setActiveTab('exportar')}
            className={`flex items-center gap-2 px-4 py-3 text-sm font-semibold border-b-2 transition-all duration-200 ${activeTab === 'exportar' ? 'border-[#39A900] text-[#39A900]' : 'border-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-50'}`}
          >
            <FileCode className="w-4.5 h-4.5" />
            Exportar Markdown Oficial
          </button>
        </div>
      </nav>

      {/* MAIN CONTAINER */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 md:p-6 transition-all duration-300">
        
        {/* TAB 1: GUÍA PEDAGÓGICA */}
        {activeTab === 'guia' && (
          <div className="space-y-6">
            
            {/* Modalidad Filter & Fast Select Day Header */}
            <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wide">Cronograma Oficial de Inducción FPI</h3>
                <p className="text-slate-800 text-sm">Selecciona una jornada oficial y la modalidad requerida para visualizar la secuencia didáctica completa.</p>
              </div>
              
              {/* Modality Filter */}
              <div className="flex bg-slate-100 p-1 rounded-lg border border-slate-200 w-full md:w-auto">
                <button 
                  onClick={() => setModalityMode('all')} 
                  className={`flex-1 md:flex-none px-3 py-1.5 text-xs font-semibold rounded-md transition-all ${modalityMode === 'all' ? 'bg-white text-slate-800 shadow-xs' : 'text-slate-500 hover:text-slate-900'}`}
                >
                  Vista Dual (Presencial + LMS)
                </button>
                <button 
                  onClick={() => setModalityMode('presencial')} 
                  className={`flex-1 md:flex-none px-3 py-1.5 text-xs font-semibold rounded-md transition-all ${modalityMode === 'presencial' ? 'bg-white text-[#39A900] shadow-xs' : 'text-slate-500 hover:text-slate-900'}`}
                >
                  Taller en Centro
                </button>
                <button 
                  onClick={() => setModalityMode('virtual')} 
                  className={`flex-1 md:flex-none px-3 py-1.5 text-xs font-semibold rounded-md transition-all ${modalityMode === 'virtual' ? 'bg-white text-[#39A900] shadow-xs' : 'text-slate-500 hover:text-slate-900'}`}
                >
                  Actividad Virtual (Zajuna)
                </button>
              </div>
            </div>

            {/* Quick-Jump Day Selector */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
              {INDUCTION_DAYS.map((jornada) => (
                <button
                  key={jornada.dia}
                  onClick={() => {
                    setSelectedDay(jornada.dia);
                    setCurrentSlide(0);
                  }}
                  className={`p-4 rounded-xl border text-left transition-all ${selectedDay === jornada.dia ? 'bg-emerald-50 border-[#39A900] ring-1 ring-[#39A900]/30 shadow-xs' : 'bg-white border-slate-200 hover:bg-slate-50 hover:border-slate-300'}`}
                >
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-[10px] font-bold text-emerald-700 uppercase">Jornada Día {jornada.dia}</span>
                    <span className="bg-emerald-100 text-emerald-800 text-[9px] px-1.5 py-0.5 rounded font-bold uppercase">5 horas</span>
                  </div>
                  <h4 className="text-xs font-bold text-slate-950 line-clamp-1">{jornada.titulo}</h4>
                </button>
              ))}
            </div>

            {/* DAY SPECIFIC DETAIL */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              
              {/* Left Column: Ficha Técnica & Evaluación */}
              <div className="lg:col-span-1 space-y-6">
                
                {/* FICHA TÉCNICA */}
                <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                  <div className="bg-slate-900 text-white px-4 py-3 border-b border-slate-800 flex items-center gap-2">
                    <Layers className="w-4 h-4 text-[#39A900]" />
                    <h3 className="font-bold text-sm uppercase tracking-wide">Ficha Técnica de la Jornada</h3>
                  </div>
                  <div className="p-4 space-y-4 text-xs">
                    <div>
                      <h4 className="font-bold text-slate-500 uppercase text-[9px]">Nombre Canónico</h4>
                      <p className="text-slate-900 font-semibold mt-0.5 text-xs">{activeDayData.ficha.nombre}</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-500 uppercase text-[9px]">Competencia Asociada</h4>
                      <p className="text-slate-900 mt-0.5">{activeDayData.ficha.competencia}</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-500 uppercase text-[9px]">Resultado de Aprendizaje (RAP)</h4>
                      <p className="text-emerald-800 bg-emerald-50 p-2 rounded border border-emerald-100 font-medium mt-0.5 leading-relaxed">
                        {activeDayData.ficha.rapExacto}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-500 uppercase text-[9px]">Objetivo de Desempeño</h4>
                      <p className="text-slate-700 mt-0.5 leading-relaxed">{activeDayData.ficha.objetivoDesempeno}</p>
                    </div>
                  </div>
                </div>

                {/* PROTOCOLO DE EVALUACIÓN GAMIFICADA */}
                <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                  <div className="bg-gradient-to-r from-emerald-800 to-slate-900 text-white px-4 py-3 flex items-center gap-2">
                    <Award className="w-4 h-4 text-[#39A900]" />
                    <h3 className="font-bold text-sm uppercase tracking-wide">Evaluación Formativa Gamificada</h3>
                  </div>
                  <div className="p-4 space-y-4 text-xs">
                    <div>
                      <span className="bg-orange-100 text-orange-900 px-2 py-0.5 rounded font-bold text-[9px] uppercase tracking-wider block w-fit mb-2">
                        Mecánica de Evaluación
                      </span>
                      <p className="text-slate-800 leading-relaxed font-semibold">{activeDayData.evaluacion.mecanicaLudica}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-bold text-slate-500 uppercase text-[9px] mb-1.5">Juicios de Evaluación Cualitativos</h4>
                      <ul className="space-y-2">
                        {activeDayData.evaluacion.criteriosCualitativos.map((crit, idx) => (
                          <li key={idx} className="flex gap-2 items-start text-slate-700">
                            <span className="text-[#39A900] font-bold mt-0.5">✓</span>
                            <span>{crit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-2 border-t border-slate-100">
                      <h4 className="font-bold text-slate-500 uppercase text-[9px]">Instrumento Adaptable Dual</h4>
                      <p className="text-slate-700 mt-1 bg-slate-50 p-2 rounded border border-slate-200 italic">
                        {activeDayData.evaluacion.instrumentoDual}
                      </p>
                    </div>

                    {/* Direct to game button */}
                    <button 
                      onClick={() => setActiveTab('juegos')}
                      className="w-full bg-[#39A900] hover:bg-[#329600] text-white py-2 text-center text-xs font-bold rounded-lg transition-all flex items-center justify-center gap-1.5 shadow-sm"
                    >
                      <Play className="w-3.5 h-3.5" />
                      Probar Simulador de Reto Día {activeDayData.dia}
                    </button>
                  </div>
                </div>

              </div>

              {/* Right Column: Secuencia Didáctica & Recursos */}
              <div className="lg:col-span-2 space-y-6">
                
                {/* INTERACTIVE MATRIZ DE SECUENCIA */}
                <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                  <div className="bg-slate-900 text-white px-4 py-3 flex justify-between items-center border-b border-slate-800">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-[#39A900]" />
                      <h3 className="font-bold text-sm uppercase tracking-wide">Secuencia Didáctica de la Jornada</h3>
                    </div>
                    <span className="text-xs text-slate-400">Total Duración: 5 horas</span>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse text-xs">
                      <thead>
                        <tr className="bg-slate-50 border-b border-slate-200 text-slate-600 font-bold uppercase text-[10px]">
                          <th className="p-3 w-28">Etapa / Duración</th>
                          <th className="p-3">Secuencia de Actividades</th>
                          <th className="p-3 w-52">Roles de Interacción</th>
                          <th className="p-3 w-40">Evidencia Verificable</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200">
                        {activeDayData.secuencia.map((paso, idx) => {
                          const showPresencial = modalityMode === 'all' || modalityMode === 'presencial';
                          const showVirtual = modalityMode === 'all' || modalityMode === 'virtual';

                          return (
                            <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                              <td className="p-3 align-top font-bold text-slate-900">
                                <span className="block text-emerald-800 uppercase tracking-wide text-[10px]">
                                  {paso.etapa}
                                </span>
                                <span className="text-slate-500 font-normal block mt-0.5 text-[11px]">
                                  ⏰ {paso.duracion}
                                </span>
                              </td>
                              
                              <td className="p-3 align-top space-y-2 leading-relaxed">
                                {showPresencial && (
                                  <div className="bg-emerald-50/50 p-2 rounded border border-emerald-100">
                                    <span className="text-[9px] font-bold text-emerald-800 uppercase block mb-0.5">Taller en Centro</span>
                                    <p className="text-slate-700">{paso.actividadPresencial}</p>
                                  </div>
                                )}
                                {showVirtual && (
                                  <div className="bg-blue-50/50 p-2 rounded border border-blue-100">
                                    <span className="text-[9px] font-bold text-blue-800 uppercase block mb-0.5">Zajuna LMS</span>
                                    <p className="text-slate-700">{paso.actividadVirtual}</p>
                                  </div>
                                )}
                              </td>

                              <td className="p-3 align-top space-y-2 text-[11px] text-slate-600 leading-relaxed">
                                {showPresencial && (
                                  <div className="border-l-2 border-emerald-300 pl-2">
                                    <span className="font-bold text-slate-800 text-[10px]">Presencial</span>
                                    <p className="mt-0.5"><span className="font-medium text-emerald-800">Instructor:</span> {paso.rolInstructorPresencial}</p>
                                    <p className="mt-0.5"><span className="font-medium text-slate-700">Aprendiz:</span> {paso.rolAprendizPresencial}</p>
                                  </div>
                                )}
                                {showVirtual && (
                                  <div className="border-l-2 border-blue-300 pl-2">
                                    <span className="font-bold text-slate-800 text-[10px]">Virtual (Zajuna)</span>
                                    <p className="mt-0.5"><span className="font-medium text-blue-800">Instructor:</span> {paso.rolInstructorVirtual}</p>
                                    <p className="mt-0.5"><span className="font-medium text-slate-700">Aprendiz:</span> {paso.rolAprendizVirtual}</p>
                                  </div>
                                )}
                              </td>

                              <td className="p-3 align-top font-medium text-slate-900 leading-relaxed">
                                <div className="bg-amber-50 p-2.5 rounded border border-amber-200">
                                  <span className="text-[9px] font-bold text-amber-800 uppercase tracking-wider block mb-1">
                                    📁 Entregable Portafolio
                                  </span>
                                  <p className="text-[11px] text-amber-950 font-semibold">{paso.entregable}</p>
                                  
                                  <button 
                                    onClick={() => {
                                      setActiveTab('portafolio');
                                    }}
                                    className="mt-3 flex items-center gap-1 text-[10px] text-amber-800 hover:text-amber-950 font-bold underline"
                                  >
                                    Subir evidencia <ChevronRight className="w-3 h-3" />
                                  </button>
                                </div>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* MATERIAL EDUCATIVO INTERACTIVO (PRESENTACIONES GEMINI NOTEBOOK & YOUTUBE) */}
                {(() => {
                  const currentPres = PRESENTATIONS.find(p => p.dia === selectedDay) || PRESENTATIONS[0];
                  const currentSld = currentPres.slides[currentSlide] || currentPres.slides[0];

                  return (
                    <div className="space-y-6">
                      
                      {/* SLIDESHOW DE LA TEMÁTICA */}
                      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden relative">
                        
                        {/* Header of Slideshow */}
                        <div className="bg-gradient-to-r from-[#39A900] to-emerald-800 text-white px-5 py-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <span className="bg-white text-[#39A900] text-[9px] font-bold px-2 py-0.5 rounded-sm uppercase tracking-wide">
                                Gemini Notebook v2026
                              </span>
                              <h3 className="font-extrabold text-sm uppercase tracking-wider">
                                Presentación de Apoyo Curricular • Día {selectedDay}
                              </h3>
                            </div>
                            <p className="text-xs text-emerald-100 font-light">
                              {currentPres.introduccion}
                            </p>
                          </div>
                          
                          {/* Slide Progress Badge */}
                          <span className="bg-emerald-950/40 border border-emerald-500/30 text-white text-xs font-bold px-3 py-1 rounded-full shrink-0">
                            Diapositiva {currentSlide + 1} de {currentPres.slides.length}
                          </span>
                        </div>

                        {/* Translation Control Sub-Bar */}
                        <div className="bg-slate-50 border-b border-slate-200 px-5 py-3 flex flex-col sm:flex-row justify-between items-center gap-3">
                          <div className="flex items-center gap-2">
                            <span className="p-1.5 bg-[#39A900]/10 text-[#39A900] rounded-lg">
                              <Globe className="w-4 h-4" />
                            </span>
                            <div className="text-left">
                              <h4 className="font-extrabold text-xs text-slate-800 uppercase tracking-wide">
                                Traducción Dinámica por Puntero (Bilingüe SENA)
                              </h4>
                              <p className="text-[10.5px] text-slate-500 leading-relaxed">
                                Active el traductor, elija idioma y ubique el puntero sobre los textos para ver su traducción con IA.
                              </p>
                            </div>
                          </div>

                          <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                            <button
                              onClick={() => {
                                setTranslationActive(!translationActive);
                                setHoveredText(null);
                                setCurrentTranslation('');
                                cancelLangAudio();
                              }}
                              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${translationActive ? 'bg-red-600 text-white shadow-sm' : 'bg-[#39A900] text-white hover:bg-[#329600]'}`}
                            >
                              {translationActive ? '🛑 Desactivar Traductor' : '🌐 Activar Traductor'}
                            </button>

                            <select
                              disabled={!translationActive}
                              value={translationLang}
                              onChange={(e) => {
                                const val = e.target.value as 'en' | 'fr';
                                setTranslationLang(val);
                                cancelLangAudio();
                                if (hoveredText) {
                                  triggerTranslation(hoveredText, val);
                                }
                              }}
                              className="bg-white border border-slate-300 text-slate-800 text-xs rounded-lg p-1.5 font-bold focus:ring-[#39A900] focus:border-[#39A900] disabled:bg-slate-100 disabled:text-slate-400 cursor-pointer"
                            >
                              <option value="en">🇬🇧 English (Inglés)</option>
                              <option value="fr">🇫🇷 Français (Francés)</option>
                            </select>

                            {/* TTS Listen Button */}
                            <button
                              onClick={handleSpeakActiveLanguage}
                              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${isPlayingLangAudio ? 'bg-amber-600 text-white animate-pulse' : 'bg-slate-200 hover:bg-slate-300 text-slate-800 border border-slate-300'}`}
                              title="Escuchar la diapositiva en el idioma de ejecución activo"
                            >
                              <span>🔊 {isPlayingLangAudio ? 'Detener Audio' : (!translationActive ? 'Escuchar (ES)' : translationLang === 'en' ? 'Listen (EN)' : 'Écouter (FR)')}</span>
                            </button>
                          </div>
                        </div>

                        {/* Slide Content Area */}
                        <div className="p-5 md:p-6 bg-slate-900 text-white min-h-[420px] flex flex-col justify-between relative">
                          
                          {/* Inner Decorative Grid */}
                          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-slate-800/40 via-slate-900 to-slate-950 opacity-50 pointer-events-none"></div>

                          {/* The active slide panel */}
                          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch relative z-10">
                            
                            {/* Left Side: Visual Context & EPP (Real characters, contexts, SENA environments) */}
                            <div className="lg:col-span-5 flex flex-col justify-between rounded-xl p-4 border border-slate-800 space-y-4" style={{ backgroundColor: '#476a23' }}>
                              <div className="space-y-3">
                                <span className="bg-[#39A900]/20 border border-[#39A900]/50 text-[#4ade80] text-[9.5px] font-bold px-2.5 py-1 rounded-sm uppercase tracking-wider block w-fit">
                                  Contexto Visual del Aprendizaje
                                </span>
                                
                                <p 
                                  onMouseEnter={(e) => handleTextHoverEnter(currentSld.imagePrompt, e)}
                                  onMouseMove={handleTextHoverMove}
                                  onMouseLeave={handleTextHoverLeave}
                                  className={`text-slate-300 text-xs leading-relaxed italic transition-all duration-200 ${translationActive ? 'hover:text-emerald-300 cursor-help border-b border-dashed border-emerald-500/50' : ''}`}
                                >
                                  "{currentSld.imagePrompt}"
                                </p>
                              </div>

                              {/* Characters and Environments metadata */}
                              <div className="space-y-2 border-t border-slate-850 pt-3 text-[11px]">
                                <div>
                                  <span className="text-slate-400 font-bold uppercase tracking-wider text-[9px] block">
                                    Personaje Real:
                                  </span>
                                  <p 
                                    onMouseEnter={(e) => handleTextHoverEnter(currentSld.character, e)}
                                    onMouseMove={handleTextHoverMove}
                                    onMouseLeave={handleTextHoverLeave}
                                    className={`text-slate-200 font-semibold transition-all duration-200 ${translationActive ? 'hover:text-emerald-300 cursor-help border-b border-dashed border-emerald-500/50' : ''}`}
                                  >
                                    {currentSld.character}
                                  </p>
                                </div>
                                <div>
                                  <span className="text-slate-400 font-bold uppercase tracking-wider text-[9px] block">
                                    Ambiente Real del SENA:
                                  </span>
                                  <p 
                                    onMouseEnter={(e) => handleTextHoverEnter(currentSld.environment, e)}
                                    onMouseMove={handleTextHoverMove}
                                    onMouseLeave={handleTextHoverLeave}
                                    className={`text-slate-200 font-semibold transition-all duration-200 ${translationActive ? 'hover:text-emerald-300 cursor-help border-b border-dashed border-emerald-500/50' : ''}`}
                                  >
                                    {currentSld.environment}
                                  </p>
                                </div>
                                <div>
                                  <span className="text-slate-400 font-bold uppercase tracking-wider text-[9px] block">
                                    Equipo de Protección Personal (EPP):
                                  </span>
                                  <span 
                                    onMouseEnter={(e) => handleTextHoverEnter(currentSld.epp, e)}
                                    onMouseMove={handleTextHoverMove}
                                    onMouseLeave={handleTextHoverLeave}
                                    className={`bg-amber-500/10 border border-amber-500/30 text-amber-400 px-2 py-0.5 rounded font-bold text-[10px] inline-block mt-0.5 transition-all duration-200 ${translationActive ? 'hover:text-emerald-300 cursor-help border-b border-dashed border-emerald-500/50' : ''}`}
                                  >
                                    ⚠️ {currentSld.epp}
                                  </span>
                                </div>
                              </div>
                            </div>

                            {/* Right Side: Educational slide content */}
                            <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
                              <div className="space-y-4">
                                <div className="space-y-1 text-left">
                                  <span className="text-[10px] font-bold tracking-widest text-emerald-400 uppercase">
                                    Tema 0{selectedDay} • Slide 0{currentSld.num}
                                  </span>
                                  <h4 
                                    onMouseEnter={(e) => handleTextHoverEnter(currentSld.title, e)}
                                    onMouseMove={handleTextHoverMove}
                                    onMouseLeave={handleTextHoverLeave}
                                    className={`text-lg md:text-xl font-extrabold text-white tracking-tight transition-all duration-200 ${translationActive ? 'hover:text-emerald-350 cursor-help border-b border-dashed border-emerald-500/50' : ''}`}
                                  >
                                    {currentSld.title}
                                  </h4>
                                </div>

                                {/* Narrative scenario */}
                                <div className="bg-slate-850 border-l-4 border-[#39A900] p-3 rounded-r-lg text-left">
                                  <span className="text-[8.5px] font-bold text-[#39A900] uppercase tracking-wider block mb-0.5">
                                    Narrativa de Aula Real
                                  </span>
                                  <p 
                                    onMouseEnter={(e) => handleTextHoverEnter(currentSld.narrative, e)}
                                    onMouseMove={handleTextHoverMove}
                                    onMouseLeave={handleTextHoverLeave}
                                    className={`text-slate-300 text-xs leading-relaxed italic transition-all duration-200 ${translationActive ? 'hover:text-emerald-350 cursor-help border-b border-dashed border-emerald-500/50' : ''}`}
                                  >
                                    {currentSld.narrative}
                                  </p>
                                </div>

                                {/* Bullet points */}
                                <div className="space-y-2 pt-2 text-left">
                                  <span className="text-slate-400 font-bold uppercase tracking-wider text-[9px] block">
                                    Aspectos Claves a Tratar según Guía FPI:
                                  </span>
                                  <ul className="space-y-2">
                                    {currentSld.content.map((point, pIdx) => (
                                      <li 
                                        key={pIdx} 
                                        onMouseEnter={(e) => handleTextHoverEnter(point, e)}
                                        onMouseMove={handleTextHoverMove}
                                        onMouseLeave={handleTextHoverLeave}
                                        className={`flex gap-2.5 items-start text-xs text-slate-200 transition-all duration-200 ${translationActive ? 'hover:text-emerald-350 cursor-help border-b border-dashed border-emerald-500/30' : ''}`}
                                      >
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#39A900] mt-1.5 shrink-0"></span>
                                        <span className="leading-relaxed">{point}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            </div>

                          </div>

                          {/* Navigation Buttons for Slide Deck */}
                          <div className="border-t border-slate-800 pt-4 mt-6 flex flex-col sm:flex-row justify-between items-center gap-3 relative z-10">
                            
                            {/* Previous Slide button */}
                            <button
                              disabled={currentSlide === 0}
                              onClick={() => {
                                cancelLangAudio();
                                setCurrentSlide(prev => Math.max(0, prev - 1));
                              }}
                              className="w-full sm:w-auto bg-slate-800 hover:bg-slate-750 disabled:bg-slate-900 disabled:text-slate-700 text-white font-bold text-xs px-4 py-2 rounded-lg transition-all flex items-center justify-center gap-2 border border-slate-700 disabled:border-slate-850"
                            >
                              ← Anterior Slide
                            </button>

                            {/* Center Dot Navigation indicator */}
                            <div className="flex gap-1.5 flex-wrap justify-center">
                              {currentPres.slides.map((_, dotIdx) => (
                                <button
                                  key={dotIdx}
                                  onClick={() => {
                                    cancelLangAudio();
                                    setCurrentSlide(dotIdx);
                                  }}
                                  className={`w-7 h-7 text-[11px] font-bold rounded-full transition-all flex items-center justify-center border ${currentSlide === dotIdx ? 'bg-[#39A900] text-white border-[#39A900]' : 'bg-slate-800 hover:bg-slate-700 text-slate-400 border-slate-700'}`}
                                  title={`Ir al Slide ${dotIdx + 1}`}
                                >
                                  {dotIdx + 1}
                                </button>
                              ))}
                            </div>

                            {/* Next Slide button */}
                            <button
                              disabled={currentSlide === currentPres.slides.length - 1}
                              onClick={() => {
                                cancelLangAudio();
                                setCurrentSlide(prev => Math.min(currentPres.slides.length - 1, prev + 1));
                              }}
                              className="w-full sm:w-auto bg-[#39A900] hover:bg-[#329600] disabled:bg-slate-900 disabled:text-slate-700 text-white font-bold text-xs px-4 py-2 rounded-lg transition-all flex items-center justify-center gap-2 disabled:border-slate-850"
                            >
                              Siguiente Slide →
                            </button>

                          </div>

                        </div>

                        {/* Floating Translation Tooltip near Cursor */}
                        {translationActive && hoveredText && (
                          <div 
                            className="fixed bg-slate-950/95 border border-emerald-500 rounded-xl p-4 shadow-2xl z-[999] max-w-sm pointer-events-none transition-all duration-75 text-white text-left"
                            style={{ 
                              left: `${pointerCoords.x + 15}px`, 
                              top: `${pointerCoords.y + 15}px`,
                              transform: 'translate(0, 0)',
                              boxShadow: '0 20px 40px rgba(0,0,0,0.8), 0 0 15px rgba(16,185,129,0.2)'
                            }}
                          >
                            <div className="flex items-center gap-1.5 border-b border-slate-850 pb-1.5 mb-2">
                              <Globe className="w-3.5 h-3.5 text-emerald-400 animate-spin" style={{ animationDuration: '4s' }} />
                              <span className="text-[10px] bg-emerald-600/30 text-emerald-400 font-extrabold px-1.5 py-0.5 rounded uppercase tracking-wider border border-emerald-500/20">
                                {translationLang === 'en' ? 'Inglés • English' : 'Francés • Français'}
                              </span>
                              {loadingTranslation ? (
                                <span className="text-[10px] text-slate-400 font-bold animate-pulse">
                                  Traduciendo con IA...
                                </span>
                              ) : (
                                <span className="text-[10px] text-emerald-400 font-bold">
                                  ✓ Traducido
                                  {process.env.GEMINI_API_KEY ? ' (IA)' : ' (Local)'}
                                </span>
                              )}
                            </div>

                            {loadingTranslation ? (
                              <div className="space-y-2 py-1 min-w-[200px]">
                                <div className="h-3 bg-slate-800 rounded w-full animate-pulse"></div>
                                <div className="h-3 bg-slate-800 rounded w-5/6 animate-pulse"></div>
                              </div>
                            ) : (
                              <p className="text-xs text-slate-100 leading-relaxed font-medium">
                                {currentTranslation || "SENA Traducción activa..."}
                              </p>
                            )}
                            
                            <div className="border-t border-slate-850 pt-1.5 mt-2 flex justify-between items-center text-[8px] text-slate-500 font-bold uppercase tracking-wider">
                              <span>SENA BILINGÜE</span>
                              <span>Gemini AI 🤖</span>
                            </div>
                          </div>
                        )}

                      </div>

                      {/* VIDEO TUTORIAL DE YOUTUBE */}
                      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                        <div className="p-4 border-b border-slate-100 bg-slate-50 flex items-center gap-2">
                          <span className="p-1.5 bg-red-100 text-red-600 rounded-lg">🎥</span>
                          <div>
                            <h4 className="font-extrabold text-xs uppercase tracking-wider text-slate-800">
                              Plataforma YouTube • Video de Consulta de Apoyo Temático
                            </h4>
                            <p className="text-[11px] text-slate-500">
                              Material complementario audiovisual para asimilar la Competencia 240201500.
                            </p>
                          </div>
                        </div>

                        <div className="p-5 flex flex-col md:flex-row items-center justify-between gap-4 bg-gradient-to-r from-red-50/20 via-white to-red-50/20">
                          <div className="space-y-2 flex-1">
                            <div className="flex items-center gap-2 text-xs">
                              <span className="bg-red-600 text-white font-bold px-2 py-0.5 rounded text-[9px] uppercase tracking-wide">
                                Video Día {selectedDay}
                              </span>
                              <span className="text-slate-400 font-semibold">•</span>
                              <span className="text-slate-500 font-semibold">Duración: {currentPres.youtubeDuration} min</span>
                            </div>
                            
                            <h3 className="font-extrabold text-slate-950 text-sm">
                              {currentPres.youtubeTitle}
                            </h3>
                            
                            <p className="text-xs text-slate-600 leading-relaxed">
                              Este recurso audiovisual es clave para profundizar en la jornada {selectedDay}. Muestra de forma práctica el contexto real del SENA para reforzar las explicaciones del instructor líder de la ficha.
                            </p>
                          </div>

                          <div className="shrink-0 w-full md:w-auto">
                            <a
                              href={currentPres.youtubeUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-red-600 hover:bg-red-700 text-white px-5 py-3 rounded-xl font-bold text-xs transition-all shadow-md flex items-center justify-center gap-2 w-full md:w-auto"
                            >
                              <Play className="w-4 h-4 fill-white" />
                              Ver Video en YouTube 🚀
                            </a>
                          </div>
                        </div>
                      </div>

                    </div>
                  );
                })()}

                {/* DUA TRANSCRIPTIONS & SUBTITLES SUPPORT */}
                {showTranscripts && (
                  <div className={`rounded-xl shadow-md border p-5 space-y-4 transition-all animate-fade-in ${highContrast ? 'bg-black text-yellow-300 border-yellow-300' : 'bg-slate-50 border-slate-200 text-slate-800'}`}>
                    <div className="flex items-center gap-2 border-b pb-2.5 border-slate-200/60">
                      <span className="p-1.5 bg-indigo-100 text-indigo-700 rounded text-base font-bold">📝</span>
                      <div>
                        <h4 className="font-extrabold text-xs uppercase tracking-wider">
                          Apoyo DUA: Transcripciones Completas y Accesibilidad de Audio (Día {selectedDay})
                        </h4>
                        <p className="text-[10.5px] text-slate-500 font-medium leading-relaxed">
                          Equivalente de texto para aprendices con diversidad auditiva, hipoacusia o dificultades de procesamiento.
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs leading-relaxed">
                      {/* Slide Transcript */}
                      <div className="space-y-2 bg-white/70 dark:bg-slate-900/40 p-4 rounded-lg border border-slate-200/40">
                        <span className="bg-emerald-105 text-emerald-850 px-2 py-0.5 rounded font-bold text-[9.5px] uppercase tracking-wide">
                          Audio-Guía de Diapositiva {currentSlide + 1}
                        </span>
                        <h5 className="font-extrabold text-slate-900 mt-1">{PRESENTATIONS.find(p => p.dia === selectedDay)?.slides[currentSlide]?.title}</h5>
                        <p className="text-slate-600 italic">
                          "En esta diapositiva, estudiamos {PRESENTATIONS.find(p => p.dia === selectedDay)?.slides[currentSlide]?.content.join('. ')}. 
                          Ambientado en el SENA: {PRESENTATIONS.find(p => p.dia === selectedDay)?.slides[currentSlide]?.environment} con el personaje real {PRESENTATIONS.find(p => p.dia === selectedDay)?.slides[currentSlide]?.character}."
                        </p>
                      </div>

                      {/* Video Transcript */}
                      <div className="space-y-2 bg-white/70 dark:bg-slate-900/40 p-4 rounded-lg border border-slate-200/40">
                        <span className="bg-red-105 text-red-800 px-2 py-0.5 rounded font-bold text-[9.5px] uppercase tracking-wide">
                          Subtítulos de Video Tutorial
                        </span>
                        <h5 className="font-extrabold text-slate-900 mt-1">{PRESENTATIONS.find(p => p.dia === selectedDay)?.youtubeTitle}</h5>
                        <p className="text-slate-600 font-medium">
                          <strong>[Audio Descrito]:</strong> El video inicia mostrando las instalaciones oficiales del SENA. El narrador explica de manera clara el tema de la jornada ({activeDayData.titulo}). 
                          Se presentan entrevistas de instructores líderes y aprendices egresados compartiendo experiencias operativas reales de la FPI, reforzando la normatividad de la Circular 006 de 2016 y cómo se integra el portafolio en la plataforma Zajuna.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* RECURSOS Y PROMPTS VISUALES */}
                <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden p-4 space-y-4">
                  <h3 className="font-bold text-xs uppercase tracking-wider text-slate-500">Recursos de Apoyo y Guía Visual</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                    <div className="space-y-2">
                      <h4 className="font-bold text-slate-900">Normativa Asociada</h4>
                      <ul className="space-y-1 text-slate-600">
                        {activeDayData.recursos.normativas.map((norm, i) => (
                          <li key={i} className="flex gap-1.5 items-start">
                            <span className="text-emerald-700 font-bold">•</span>
                            <span>{norm}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-bold text-slate-900">Manuales y Enlaces Oficiales</h4>
                      <ul className="space-y-1 text-slate-600">
                        {activeDayData.recursos.enlacesOficiales.map((enlace, i) => (
                          <li key={i} className="flex gap-1.5 items-center">
                            <ExternalLink className="w-3.5 h-3.5 text-emerald-600" />
                            <a href={enlace} target="_blank" rel="noreferrer" className="text-emerald-700 hover:underline truncate block">
                              {enlace}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 text-xs">
                    <div className="flex gap-1.5 items-center mb-1">
                      <Sparkles className="w-4 h-4 text-amber-500" />
                      <span className="font-bold text-slate-800">Prompt / Descripción Visual de Arte Institucional (Multimedia SENA)</span>
                    </div>
                    <p className="text-slate-600 italic leading-relaxed">
                      "{activeDayData.recursos.promptsVisuales}"
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        )}

        {/* TAB 2: ZONA GAMIFICADA */}
        {activeTab === 'juegos' && (
          <div className="space-y-6">
            <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
              <h2 className="text-lg font-extrabold text-slate-900 flex items-center gap-2">
                <Play className="w-5 h-5 text-[#39A900]" />
                Simulador de Retos Gamificados de la Semana de Inducción
              </h2>
              <p className="text-slate-600 text-sm mt-1">
                Para eliminar la fricción de la evaluación tradicional, cada jornada cierra con un hito gamificado interactivo. 
                Completa cada simulación para desbloquear tus insignias y evidencias oficiales en el portafolio del aprendiz.
              </p>
            </div>

            {/* Sub-tabs for individual games */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-2">
              <button 
                onClick={() => setSelectedDay(1)}
                className={`p-3 rounded-xl border text-center transition-all ${selectedDay === 1 ? 'bg-slate-900 text-white border-slate-900 shadow-xs' : 'bg-white border-slate-200 hover:bg-slate-50'}`}
              >
                <div className="text-[10px] uppercase font-bold text-orange-500 mb-0.5">Día 1: Trivia</div>
                <span className="text-xs font-bold block">Símbolos y Circular 006</span>
              </button>
              
              <button 
                onClick={() => setSelectedDay(2)}
                className={`p-3 rounded-xl border text-center transition-all ${selectedDay === 2 ? 'bg-slate-900 text-white border-slate-900 shadow-xs' : 'bg-white border-slate-200 hover:bg-slate-50'}`}
              >
                <div className="text-[10px] uppercase font-bold text-orange-500 mb-0.5">Día 2: TIC</div>
                <span className="text-xs font-bold block">Ecosistema Digital</span>
              </button>

              <button 
                onClick={() => setSelectedDay(3)}
                className={`p-3 rounded-xl border text-center transition-all ${selectedDay === 3 ? 'bg-slate-900 text-white border-slate-900 shadow-xs' : 'bg-white border-slate-200 hover:bg-slate-50'}`}
              >
                <div className="text-[10px] uppercase font-bold text-orange-500 mb-0.5">Día 3: Estilos</div>
                <span className="text-xs font-bold block">Test VAK de Aprendizaje</span>
              </button>

              <button 
                onClick={() => setSelectedDay(4)}
                className={`p-3 rounded-xl border text-center transition-all ${selectedDay === 4 ? 'bg-slate-900 text-white border-slate-900 shadow-xs' : 'bg-white border-slate-200 hover:bg-slate-50'}`}
              >
                <div className="text-[10px] uppercase font-bold text-orange-500 mb-0.5">Día 4: Escape Room</div>
                <span className="text-xs font-bold block">Dilemas de Reglamento</span>
              </button>

              <button 
                onClick={() => setSelectedDay(5)}
                className={`p-3 rounded-xl border text-center transition-all ${selectedDay === 5 ? 'bg-slate-900 text-white border-slate-900 shadow-xs' : 'bg-white border-slate-200 hover:bg-slate-50'}`}
              >
                <div className="text-[10px] uppercase font-bold text-orange-500 mb-0.5">Día 5: Compromiso</div>
                <span className="text-xs font-bold block">Pacto de Ficha y Sostenibilidad</span>
              </button>
            </div>

            {/* JUEGO DIA 1: TRIVIA INTERACTIVA */}
            {selectedDay === 1 && (
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm max-w-2xl mx-auto">
                <div className="flex justify-between items-center pb-4 border-b border-slate-100 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="bg-amber-100 text-amber-800 text-[10px] px-2.5 py-0.5 font-bold uppercase rounded">Reto Día 1</span>
                    <h3 className="font-extrabold text-slate-950 text-base">Trivia Contexto FPI & Símbolos</h3>
                  </div>
                  <span className="text-xs font-bold text-slate-500">Mecánica: Trivia contrarreloj</span>
                </div>

                <div className="space-y-4">
                  
                  {/* Q1 */}
                  <div className="space-y-2">
                    <p className="text-xs font-bold text-slate-900">1. ¿Qué representa el piñón (engranaje) en el escudo oficial del SENA?</p>
                    <div className="grid grid-cols-1 gap-2 text-xs">
                      {[
                        { val: 1, text: "A) La producción agrícola y el campo de Colombia" },
                        { val: 2, text: "B) Las industrias nacionales, la tecnología y el sector metalmecánico" },
                        { val: 3, text: "C) El comercio internacional y el intercambio de mercancías" }
                      ].map(opt => (
                        <button
                          key={opt.val}
                          disabled={triviaSubmitted}
                          onClick={() => setTriviaAnswers(prev => ({ ...prev, 1: opt.val }))}
                          className={`p-3 text-left border rounded-lg transition-all ${triviaAnswers[1] === opt.val ? 'bg-emerald-50 border-[#39A900] font-semibold' : 'hover:bg-slate-50 bg-white border-slate-200'}`}
                        >
                          {opt.text}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Q2 */}
                  <div className="space-y-2">
                    <p className="text-xs font-bold text-slate-900">2. ¿Qué lineamiento rige operativamente el desarrollo de la Semana de Inducción?</p>
                    <div className="grid grid-cols-1 gap-2 text-xs">
                      {[
                        { val: 1, text: "A) La Circular 006 de 2016 (SENA)" },
                        { val: 2, text: "B) El Acuerdo de la Junta Directiva 003 de 2018" },
                        { val: 3, text: "C) El Manual de Convivencia General" }
                      ].map(opt => (
                        <button
                          key={opt.val}
                          disabled={triviaSubmitted}
                          onClick={() => setTriviaAnswers(prev => ({ ...prev, 2: opt.val }))}
                          className={`p-3 text-left border rounded-lg transition-all ${triviaAnswers[2] === opt.val ? 'bg-emerald-50 border-[#39A900] font-semibold' : 'hover:bg-slate-50 bg-white border-slate-200'}`}
                        >
                          {opt.text}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Q3 */}
                  <div className="space-y-2">
                    <p className="text-xs font-bold text-slate-900">3. ¿Qué representa la rama de café en el escudo oficial?</p>
                    <div className="grid grid-cols-1 gap-2 text-xs">
                      {[
                        { val: 1, text: "A) El sector agrícola, el campo y la producción cafetera del país" },
                        { val: 2, text: "B) El bienestar social y la salud mental del aprendiz" },
                        { val: 3, text: "C) Las alianzas de intercambio científico con el extranjero" }
                      ].map(opt => (
                        <button
                          key={opt.val}
                          disabled={triviaSubmitted}
                          onClick={() => setTriviaAnswers(prev => ({ ...prev, 3: opt.val }))}
                          className={`p-3 text-left border rounded-lg transition-all ${triviaAnswers[3] === opt.val ? 'bg-emerald-50 border-[#39A900] font-semibold' : 'hover:bg-slate-50 bg-white border-slate-200'}`}
                        >
                          {opt.text}
                        </button>
                      ))}
                    </div>
                  </div>

                  {!triviaSubmitted ? (
                    <button
                      onClick={handleTriviaSubmit}
                      disabled={!triviaAnswers[1] || !triviaAnswers[2] || !triviaAnswers[3]}
                      className="w-full py-3 bg-slate-900 hover:bg-slate-800 disabled:bg-slate-200 text-white text-xs font-bold rounded-lg transition-all text-center uppercase"
                    >
                      Validar Respuestas
                    </button>
                  ) : (
                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-3">
                      <div className="flex items-center gap-2">
                        <Award className="w-5 h-5 text-amber-500" />
                        <span className="font-bold text-sm text-slate-900">¡Calificación Cualitativa Lograda!</span>
                      </div>
                      <p className="text-xs text-slate-600">
                        Puntaje obtenido: <span className="font-bold text-slate-900">{triviaScore} de 3 respuestas correctas.</span>
                      </p>
                      
                      {triviaScore === 3 ? (
                        <p className="text-xs font-bold text-emerald-800 bg-emerald-50 p-2.5 rounded border border-emerald-100">
                          Juicio: APREGADO (A). Tu Evidencia 1 ha sido desbloqueada e integrada exitosamente a tu Portafolio del Aprendiz.
                        </p>
                      ) : (
                        <div className="text-xs font-medium text-amber-800 bg-amber-50 p-2.5 rounded border border-amber-100">
                          Juicio: No Aprobado aún. Recuerda que puedes reintentar el cuestionario lúdico para afianzar tus conocimientos e integrarlo al Portafolio.
                        </div>
                      )}

                      <div className="flex gap-2">
                        <button 
                          onClick={() => {
                            setTriviaSubmitted(false);
                            setTriviaAnswers({});
                          }}
                          className="flex-1 bg-slate-200 hover:bg-slate-300 text-slate-800 py-2 text-xs font-bold rounded-lg text-center"
                        >
                          Reiniciar Cuestionario
                        </button>
                        {triviaScore === 3 && (
                          <button 
                            onClick={() => {
                              handleSimulateUpload(1, 'Infografia_Identidad_SENA_Simulada.pdf');
                              alert('Se ha guardado la Evidencia 1 aprobada en tu portafolio.');
                            }}
                            className="flex-1 bg-[#39A900] hover:bg-[#329600] text-white py-2 text-xs font-bold rounded-lg text-center shadow-xs"
                          >
                            Integrar al Portafolio 📁
                          </button>
                        )}
                      </div>
                    </div>
                  )}

                </div>
              </div>
            )}

            {/* JUEGO DIA 2: CORRESPONDENCIA TIC */}
            {selectedDay === 2 && (
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm max-w-2xl mx-auto">
                <div className="flex justify-between items-center pb-4 border-b border-slate-100 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="bg-amber-100 text-amber-800 text-[10px] px-2.5 py-0.5 font-bold uppercase rounded">Reto Día 2</span>
                    <h3 className="font-extrabold text-slate-950 text-base">Ruta de Correspondencia TIC</h3>
                  </div>
                  <span className="text-xs font-bold text-slate-500">Mecánica: Relacionar de Columnas</span>
                </div>

                <p className="text-xs text-slate-600 mb-4">
                  Asocia cada necesidad o trámite académico con la plataforma oficial que el SENA dispone en su ecosistema tecnológico.
                </p>

                <div className="space-y-4">
                  {ticTasks.map((task) => (
                    <div key={task.id} className="bg-slate-50 p-3 rounded-lg border border-slate-200 grid grid-cols-1 md:grid-cols-2 gap-3 items-center text-xs">
                      <div>
                        <span className="font-bold text-emerald-800 block uppercase text-[9px] tracking-wider mb-0.5">Necesidad</span>
                        <p className="text-slate-800">{task.text}</p>
                      </div>
                      <div>
                        <span className="font-bold text-slate-500 block uppercase text-[9px] tracking-wider mb-1">Elegir Plataforma SENA</span>
                        <select
                          value={ticSelections[task.id] || ''}
                          onChange={(e) => setTicSelections(prev => ({ ...prev, [task.id]: e.target.value }))}
                          className="w-full bg-white border border-slate-300 rounded-md p-2 text-xs text-slate-800 focus:border-[#39A900] focus:ring-1 focus:ring-[#39A900]/30 outline-hidden"
                        >
                          <option value="">-- Seleccionar Plataforma --</option>
                          <option value="Sofía Plus">Sofía Plus</option>
                          <option value="Zajuna (LMS)">Zajuna (LMS)</option>
                          <option value="Biblioteca Virtual SENA">Biblioteca Virtual SENA</option>
                          <option value="Agencia Pública de Empleo (APE)">Agencia Pública de Empleo (APE)</option>
                        </select>
                      </div>
                    </div>
                  ))}

                  <button
                    onClick={checkTicMatching}
                    className="w-full py-3 bg-[#39A900] hover:bg-[#329600] text-white text-xs font-bold rounded-lg transition-all text-center uppercase shadow-sm"
                  >
                    Validar Combinaciones
                  </button>

                  {ticFeedback && (
                    <div className="p-3 rounded-lg text-xs font-semibold text-center border bg-slate-50 text-slate-900 border-slate-200">
                      {ticFeedback}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* JUEGO DIA 3: TEST VAK DE ESTILOS */}
            {selectedDay === 3 && (
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm max-w-2xl mx-auto">
                <div className="flex justify-between items-center pb-4 border-b border-slate-100 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="bg-amber-100 text-amber-800 text-[10px] px-2.5 py-0.5 font-bold uppercase rounded">Reto Día 3</span>
                    <h3 className="font-extrabold text-slate-950 text-base">Test de Estilo de Aprendizaje Dominante (VAK)</h3>
                  </div>
                  <span className="text-xs font-bold text-slate-500">Mecánica: Autodiagnóstico</span>
                </div>

                <p className="text-xs text-slate-600 mb-4">
                  Responde las 4 situaciones para autoevaluar tu sistema de representación sensorial (Visual, Auditivo o Kinestésico). El resultado integrará tu evidencia 3.
                </p>

                <div className="space-y-4">
                  {/* Q1 */}
                  <div className="space-y-1.5 text-xs">
                    <p className="font-bold text-slate-900">1. Al asimilar una nueva instrucción de taller, prefiero:</p>
                    <div className="grid grid-cols-1 gap-2">
                      <button 
                        onClick={() => handleVakSelect(1, 'V')}
                        className={`p-2.5 text-left border rounded ${vakAnswers[1] === 'V' ? 'bg-emerald-50 border-[#39A900]' : 'bg-white hover:bg-slate-50'}`}
                      >
                        👁 Ver diagramas explicativos, esquemas o ver al instructor realizar el proceso en vivo.
                      </button>
                      <button 
                        onClick={() => handleVakSelect(1, 'A')}
                        className={`p-2.5 text-left border rounded ${vakAnswers[1] === 'A' ? 'bg-emerald-50 border-[#39A900]' : 'bg-white hover:bg-slate-50'}`}
                      >
                        👂 Escuchar la explicación teórica, la charla y discutir los pasos con mi equipo de ficha.
                      </button>
                      <button 
                        onClick={() => handleVakSelect(1, 'K')}
                        className={`p-2.5 text-left border rounded ${vakAnswers[1] === 'K' ? 'bg-emerald-50 border-[#39A900]' : 'bg-white hover:bg-slate-50'}`}
                      >
                        🛠 Manipular las herramientas, hacer el montaje físico y aprender mediante el ensayo y error.
                      </button>
                    </div>
                  </div>

                  {/* Q2 */}
                  <div className="space-y-1.5 text-xs">
                    <p className="font-bold text-slate-900">2. Si me encuentro perdido buscando un ambiente o auditorio en el Centro de Formación:</p>
                    <div className="grid grid-cols-1 gap-2">
                      <button 
                        onClick={() => handleVakSelect(2, 'V')}
                        className={`p-2.5 text-left border rounded ${vakAnswers[2] === 'V' ? 'bg-emerald-50 border-[#39A900]' : 'bg-white hover:bg-slate-50'}`}
                      >
                        👁 Consultar un plano digital, croquis o seguir los avisos y señalizaciones del lugar.
                      </button>
                      <button 
                        onClick={() => handleVakSelect(2, 'A')}
                        className={`p-2.5 text-left border rounded ${vakAnswers[2] === 'A' ? 'bg-emerald-50 border-[#39A900]' : 'bg-white hover:bg-slate-50'}`}
                      >
                        👂 Detener a un compañero, instructor o vigilante de seguridad para que me explique la ruta.
                      </button>
                      <button 
                        onClick={() => handleVakSelect(2, 'K')}
                        className={`p-2.5 text-left border rounded ${vakAnswers[2] === 'K' ? 'bg-emerald-50 border-[#39A900]' : 'bg-white hover:bg-slate-50'}`}
                      >
                        🛠 Caminar por los pasillos e ir descubriendo el terreno por mí mismo hasta ubicarme.
                      </button>
                    </div>
                  </div>

                  {/* Q3 */}
                  <div className="space-y-1.5 text-xs">
                    <p className="font-bold text-slate-900">3. Durante una sesión sincrónica virtual en Zajuna LMS, lo que más retiene mi atención es:</p>
                    <div className="grid grid-cols-1 gap-2">
                      <button 
                        onClick={() => handleVakSelect(3, 'V')}
                        className={`p-2.5 text-left border rounded ${vakAnswers[3] === 'V' ? 'bg-emerald-50 border-[#39A900]' : 'bg-white hover:bg-slate-50'}`}
                      >
                        👁 Las diapositivas, infografías, colores del maquetado y los esquemas gráficos presentados.
                      </button>
                      <button 
                        onClick={() => handleVakSelect(3, 'A')}
                        className={`p-2.5 text-left border rounded ${vakAnswers[3] === 'A' ? 'bg-emerald-50 border-[#39A900]' : 'bg-white hover:bg-slate-50'}`}
                      >
                        👂 El tono de voz del instructor, el debate en vivo y las preguntas resueltas por audio.
                      </button>
                      <button 
                        onClick={() => handleVakSelect(3, 'K')}
                        className={`p-2.5 text-left border rounded ${vakAnswers[3] === 'K' ? 'bg-emerald-50 border-[#39A900]' : 'bg-white hover:bg-slate-50'}`}
                      >
                        🛠 Ir ingresando paralelamente en otra ventana, replicar los clics de forma práctica inmediata.
                      </button>
                    </div>
                  </div>

                  {/* Q4 */}
                  <div className="space-y-1.5 text-xs">
                    <p className="font-bold text-slate-900">4. Al momento de preparar exposiciones o proyectos de formación:</p>
                    <div className="grid grid-cols-1 gap-2">
                      <button 
                        onClick={() => handleVakSelect(4, 'V')}
                        className={`p-2.5 text-left border rounded ${vakAnswers[4] === 'V' ? 'bg-emerald-50 border-[#39A900]' : 'bg-white hover:bg-slate-50'}`}
                      >
                        👁 Diseño un mapa mental colorido en Canva, infografías limpias y material de apoyo visual.
                      </button>
                      <button 
                        onClick={() => handleVakSelect(4, 'A')}
                        className={`p-2.5 text-left border rounded ${vakAnswers[4] === 'A' ? 'bg-emerald-50 border-[#39A900]' : 'bg-white hover:bg-slate-50'}`}
                      >
                        👂 Organizo un debate estructurado, grabo notas de voz o repaso de forma hablada con mis compañeros.
                      </button>
                      <button 
                        onClick={() => handleVakSelect(4, 'K')}
                        className={`p-2.5 text-left border rounded ${vakAnswers[4] === 'K' ? 'bg-emerald-50 border-[#39A900]' : 'bg-white hover:bg-slate-50'}`}
                      >
                        🛠 Creo maquetas, simulo el proceso técnico o realizo juegos de roles para apropiar la competencia.
                      </button>
                    </div>
                  </div>

                  <button
                    onClick={calculateVak}
                    className="w-full py-3 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-lg transition-all text-center uppercase"
                  >
                    Calcular Estilo Dominante VAK
                  </button>

                  {vakResult && (
                    <div className="bg-emerald-50 p-4 rounded-xl border border-[#39A900]/30 space-y-3 text-xs">
                      <div className="flex items-center gap-1.5">
                        <Award className="w-5 h-5 text-[#39A900]" />
                        <span className="font-bold text-slate-900">Resultado de Tu Perfil de Aprendizaje SENA</span>
                      </div>
                      
                      <div className="grid grid-cols-3 gap-2 text-center my-2">
                        <div className="bg-white p-2 rounded border border-slate-200">
                          <span className="font-bold text-slate-500 block uppercase text-[8px]">Visual</span>
                          <span className="text-sm font-extrabold text-slate-800">{vakResult.V}%</span>
                        </div>
                        <div className="bg-white p-2 rounded border border-slate-200">
                          <span className="font-bold text-slate-500 block uppercase text-[8px]">Auditivo</span>
                          <span className="text-sm font-extrabold text-slate-800">{vakResult.A}%</span>
                        </div>
                        <div className="bg-white p-2 rounded border border-slate-200">
                          <span className="font-bold text-slate-500 block uppercase text-[8px]">Kinestésico</span>
                          <span className="text-sm font-extrabold text-slate-800">{vakResult.K}%</span>
                        </div>
                      </div>

                      <div className="space-y-1">
                        <p className="font-bold text-slate-900">Estilo Dominante: <span className="text-[#39A900] underline">{vakResult.dominant}</span></p>
                        <p className="text-slate-600 leading-relaxed text-[11px]">
                          {vakResult.dominant === 'Visual' && 'Aprenderás mejor utilizando mapas mentales, guías multimedia y cuadros sinópticos de software en Zajuna LMS.'}
                          {vakResult.dominant === 'Auditivo' && 'Aprenderás mejor participando en debates, escuchando pódcast de formación y liderando discusiones en foros virtuales.'}
                          {vakResult.dominant === 'Kinestésico' && 'Tu mejor rendimiento se dará en los ambientes físicos, manipulando equipos, ejecutando proyectos reales y co-diseñando en equipo.'}
                        </p>
                      </div>

                      <p className="text-[10px] text-emerald-800 bg-white p-2 rounded border border-emerald-100 italic">
                        ¡Logro completado! Tus resultados de estilo y estrategias han sido exportados a la Evidencia 3 de tu Portafolio.
                      </p>
                    </div>
                  )}

                </div>
              </div>
            )}

            {/* JUEGO DIA 4: ESCAPE ROOM REGLAMENTO */}
            {selectedDay === 4 && (
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm max-w-2xl mx-auto">
                <div className="flex justify-between items-center pb-4 border-b border-slate-100 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="bg-amber-100 text-amber-800 text-[10px] px-2.5 py-0.5 font-bold uppercase rounded">Reto Día 4</span>
                    <h3 className="font-extrabold text-slate-950 text-base">Digital Escape Room: Defendiendo el Reglamento</h3>
                  </div>
                  <span className="text-xs font-bold text-slate-500">Mecánica: Escape Room de Casos</span>
                </div>

                <p className="text-xs text-slate-600 mb-4">
                  Para abrir la cerradura virtual, asume el rol del <strong>Comité de Evaluación y Seguimiento</strong> y define correctamente la clasificación jurídica según el Acuerdo 007 de 2012.
                </p>

                <div className="space-y-4 text-xs">
                  
                  {/* Case 1 */}
                  <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 space-y-2">
                    <p className="font-bold text-slate-900">Caso 1: Un aprendiz clona el proyecto de grado de otra ficha y lo entrega como propio en Zajuna LMS.</p>
                    <div className="flex flex-wrap gap-2">
                      {['Derecho', 'Deber', 'Prohibición'].map(opt => (
                        <button
                          key={opt}
                          onClick={() => setEscapeAnswers(prev => ({ ...prev, 1: opt }))}
                          className={`px-3 py-1.5 rounded text-xs font-bold border ${escapeAnswers[1] === opt ? 'bg-orange-500 text-white border-orange-600 shadow-xs' : 'bg-white hover:bg-slate-100 border-slate-200'}`}
                        >
                          Es una: {opt}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Case 2 */}
                  <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 space-y-2">
                    <p className="font-bold text-slate-900">Caso 2: Exponer mis descargos y ser escuchado asertivamente ante el Comité de Evaluación previo a sanción académica.</p>
                    <div className="flex flex-wrap gap-2">
                      {['Derecho', 'Deber', 'Prohibición'].map(opt => (
                        <button
                          key={opt}
                          onClick={() => setEscapeAnswers(prev => ({ ...prev, 2: opt }))}
                          className={`px-3 py-1.5 rounded text-xs font-bold border ${escapeAnswers[2] === opt ? 'bg-orange-500 text-white border-orange-600 shadow-xs' : 'bg-white hover:bg-slate-100 border-slate-200'}`}
                        >
                          Es un: {opt}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Case 3 */}
                  <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 space-y-2">
                    <p className="font-bold text-slate-900">Caso 3: Participar con regularidad y puntualidad en todas las actividades programadas de la especialidad técnica.</p>
                    <div className="flex flex-wrap gap-2">
                      {['Derecho', 'Deber', 'Prohibición'].map(opt => (
                        <button
                          key={opt}
                          onClick={() => setEscapeAnswers(prev => ({ ...prev, 3: opt }))}
                          className={`px-3 py-1.5 rounded text-xs font-bold border ${escapeAnswers[3] === opt ? 'bg-orange-500 text-white border-orange-600 shadow-xs' : 'bg-white hover:bg-slate-100 border-slate-200'}`}
                        >
                          Es un: {opt}
                        </button>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={handleEscapeCheck}
                    className="w-full py-3 bg-red-600 hover:bg-red-700 text-white text-xs font-bold rounded-lg transition-all text-center uppercase shadow-sm"
                  >
                    🔑 Abrir Candado del Escape Room
                  </button>

                  {escapeFeedback && (
                    <div className={`p-4 rounded-xl border text-xs leading-relaxed ${escapeStatus === 'escaped' ? 'bg-emerald-50 text-emerald-900 border-emerald-100' : 'bg-rose-50 text-rose-900 border-rose-100'}`}>
                      <div className="flex items-center gap-1.5 font-bold mb-1">
                        {escapeStatus === 'escaped' ? (
                          <CheckCircle className="w-4 h-4 text-[#39A900]" />
                        ) : (
                          <AlertTriangle className="w-4 h-4 text-rose-600" />
                        )}
                        <span>{escapeStatus === 'escaped' ? '¡PUERTA DESBLOQUEADA!' : 'ACCESO DENEGADO'}</span>
                      </div>
                      <p>{escapeFeedback}</p>
                    </div>
                  )}

                </div>
              </div>
            )}

            {/* JUEGO DIA 5: COMPROMISO Y ÁRBOL DE PROYECTO DE VIDA */}
            {selectedDay === 5 && (
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm max-w-2xl mx-auto">
                <div className="flex justify-between items-center pb-4 border-b border-slate-100 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="bg-amber-100 text-amber-800 text-[10px] px-2.5 py-0.5 font-bold uppercase rounded">Reto Día 5</span>
                    <h3 className="font-extrabold text-slate-950 text-base">Firma de Pacto de Convivencia y Bosque del Proyecto de Vida</h3>
                  </div>
                  <span className="text-xs font-bold text-slate-500">Mecánica: Firma Interactiva</span>
                </div>

                <div className="space-y-4 text-xs">
                  <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 space-y-3">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div>
                        <label className="font-bold text-slate-700 block uppercase text-[9px] mb-1">Nombre Completo del Aprendiz</label>
                        <input
                          type="text"
                          placeholder="Escribe tu nombre completo..."
                          value={pledgeName}
                          onChange={(e) => setPledgeName(e.target.value)}
                          className="w-full bg-white border border-slate-300 rounded-md p-2 text-xs"
                        />
                      </div>
                      <div>
                        <label className="font-bold text-slate-700 block uppercase text-[9px] mb-1">Especie Ecológica de Proyecto de Vida</label>
                        <select
                          value={pledgeTree}
                          onChange={(e) => setPledgeTree(e.target.value)}
                          className="w-full bg-white border border-slate-300 rounded-md p-2 text-xs"
                        >
                          <option value="Guayacán Amarillo">Guayacán Amarillo (Llanos Colombianos)</option>
                          <option value="Palma de Cera">Palma de Cera (Árbol Nacional de Colombia)</option>
                          <option value="Frailejón">Frailejón de Páramo (Guardián del Agua)</option>
                          <option value="Árbol del Pan">Árbol del Pan (Sabor de la Amazonía)</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="font-bold text-slate-700 block uppercase text-[9px] mb-1">Mi Declaración de Compromiso Ético y Ambiental</label>
                      <textarea
                        rows={3}
                        value={pledgeText}
                        onChange={(e) => setPledgeText(e.target.value)}
                        className="w-full bg-white border border-slate-300 rounded-md p-2 text-xs leading-relaxed"
                      />
                    </div>
                  </div>

                  {!pledgeSigned ? (
                    <button
                      onClick={handleSignPledge}
                      className="w-full py-3 bg-[#39A900] hover:bg-[#329600] text-white text-xs font-bold rounded-lg transition-all text-center uppercase shadow-sm"
                    >
                      🖋 Firmar Pacto Digital de Convivencia y Sembrar Árbol
                    </button>
                  ) : (
                    <div className="bg-emerald-50 p-5 rounded-xl border border-emerald-100 text-center space-y-4">
                      
                      {/* VIRTUAL TREE ART RENDERING */}
                      <div className="flex flex-col items-center justify-center p-3 bg-white rounded-lg border border-slate-100 max-w-xs mx-auto shadow-inner">
                        <TreePine className="w-16 h-16 text-emerald-600 animate-bounce" />
                        <span className="font-bold text-slate-900 mt-2 text-xs">{pledgeTree} Sembrado</span>
                        <span className="text-[10px] text-slate-500 italic">"Conectado con tu Proyecto de Vida en el SENA"</span>
                      </div>

                      <div className="space-y-1">
                        <p className="font-extrabold text-slate-950 text-sm">¡DECLARACIÓN DE INTEGRIDAD FIRMADA!</p>
                        <p className="text-slate-600 text-xs">
                          Yo, <strong className="text-slate-900">{pledgeName}</strong>, he firmado digitalmente mi compromiso con la ficha de formación del SENA y con la protección de la naturaleza.
                        </p>
                      </div>

                      <div className="text-[10px] bg-white p-2.5 rounded border border-emerald-100 text-slate-700 leading-relaxed text-left">
                        <strong className="block mb-0.5 text-slate-800">Copia del Compromiso Archivada:</strong>
                        "{pledgeText}"
                      </div>

                      <div className="flex gap-2">
                        <button
                          onClick={() => setPledgeSigned(false)}
                          className="flex-1 py-1.5 text-xs bg-slate-200 hover:bg-slate-300 rounded font-bold text-slate-800"
                        >
                          Modificar Declaración
                        </button>
                        <button
                          onClick={() => alert('Certificado de Convivencia Digital guardado exitosamente. ¡Bienvenido oficialmente al SENA!')}
                          className="flex-1 py-1.5 text-xs bg-slate-900 hover:bg-slate-800 text-white rounded font-bold shadow-xs"
                        >
                          Imprimir Certificado 🖨
                        </button>
                      </div>

                    </div>
                  )}

                </div>
              </div>
            )}

          </div>
        )}

        {/* TAB 3: GENERADOR IA DE CASOS DE REGLAMENTO */}
        {activeTab === 'ia' && (
          <div className="space-y-6">
            <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h2 className="text-lg font-extrabold text-slate-950 flex items-center gap-2">
                  <Wand2 className="w-5 h-5 text-emerald-600" />
                  Asistente de Personalización Curricular e IA SENA
                </h2>
                <p className="text-slate-600 text-xs mt-1">
                  Genera casos prácticos reales basados en el Reglamento del Aprendiz (Acuerdo 007 de 2012) contextualizados exactamente en tu programa de formación.
                </p>
              </div>
              <span className="bg-emerald-100 text-emerald-800 text-[10px] px-2.5 py-1 rounded font-bold uppercase">
                Powered by Gemini-3.8-Flash
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              
              {/* Form Input column */}
              <div className="lg:col-span-1 bg-white p-4 rounded-xl border border-slate-200 shadow-sm space-y-4">
                <h3 className="font-extrabold text-xs uppercase tracking-wide text-slate-500 mb-2">Parámetros del Caso de Estudio</h3>
                
                <form onSubmit={handleGenerateCase} className="space-y-3.5 text-xs">
                  <div>
                    <label className="font-bold text-slate-700 block mb-1">Programa de Formación Específico</label>
                    <select 
                      value={programInput} 
                      onChange={(e) => setProgramInput(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5"
                    >
                      <option value="Análisis y Desarrollo de Software (ADSO)">Análisis y Desarrollo de Software (ADSO)</option>
                      <option value="Cocina y Gastronomía">Cocina y Gastronomía</option>
                      <option value="Servicios de Enfermería y Salud">Servicios de Enfermería y Salud</option>
                      <option value="Mantenimiento Mecánico Industrial">Mantenimiento Mecánico Industrial</option>
                      <option value="Gestión Administrativa y de Talento Humano">Gestión Administrativa y de Talento Humano</option>
                    </select>
                  </div>

                  <div>
                    <label className="font-bold text-slate-700 block mb-1">Tema del Reglamento del Aprendiz</label>
                    <select 
                      value={topicInput} 
                      onChange={(e) => setTopicInput(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5"
                    >
                      <option value="Reglamento y Debido Proceso">Reglamento y Debido Proceso</option>
                      <option value="Higiene, Uniformes y Bioseguridad">Higiene, Uniformes y Bioseguridad</option>
                      <option value="Inasistencias, Retiros y Justificaciones">Inasistencias, Retiros y Justificaciones</option>
                      <option value="Confidencialidad y Uso Correcto de TIC">Confidencialidad y Uso Correcto de TIC</option>
                    </select>
                  </div>

                  <div>
                    <label className="font-bold text-slate-700 block mb-1">Modalidad de Formación</label>
                    <select 
                      value={modalityInput} 
                      onChange={(e) => setModalityInput(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5"
                    >
                      <option value="Dual (Presencial y LMS Zajuna)">Dual (Presencial y LMS Zajuna)</option>
                      <option value="100% Presencial (Taller Centro)">100% Presencial (Taller Centro)</option>
                      <option value="100% Virtual / Distancia (Zajuna)">100% Virtual / Distancia (Zajuna)</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    disabled={loadingAi}
                    className="w-full bg-slate-950 hover:bg-slate-900 disabled:bg-slate-200 text-white py-3 rounded-lg font-bold uppercase flex items-center justify-center gap-1.5 tracking-wide shadow-sm"
                  >
                    {loadingAi ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                        Analizando Reglamento...
                      </>
                    ) : (
                      <>
                        <Wand2 className="w-4 h-4" />
                        Generar Caso con IA
                      </>
                    )}
                  </button>
                </form>

                <div className="bg-amber-50 p-3 rounded-lg border border-amber-200 text-xs">
                  <div className="flex gap-1.5 items-center mb-1 text-amber-900">
                    <Info className="w-4 h-4 text-amber-600" />
                    <span className="font-bold">Uso para Instructores</span>
                  </div>
                  <p className="text-amber-800 leading-relaxed text-[11px]">
                    Utiliza esta herramienta durante el Día 4 para proporcionar a tus aprendices un dilema ético personalizado de su especialidad técnica. Copia el caso generado para publicarlo en Zajuna LMS.
                  </p>
                </div>
              </div>

              {/* Case Rendering column */}
              <div className="lg:col-span-2">
                
                {generatedCase ? (
                  <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
                    
                    {aiError && (
                      <div className="bg-emerald-50 text-emerald-800 border border-emerald-200 px-3 py-2 rounded text-[11px] font-medium flex items-center gap-1.5">
                        <Check className="w-4 h-4 text-emerald-600" />
                        {aiError}
                      </div>
                    )}

                    <div className="flex justify-between items-start border-b border-slate-100 pb-3">
                      <div>
                        <span className="text-[10px] font-bold text-emerald-800 uppercase bg-emerald-50 px-2 py-0.5 rounded tracking-wider">
                          Día 4: Reglamento del Aprendiz
                        </span>
                        <h3 className="text-base font-extrabold text-slate-950 mt-1">{generatedCase.title}</h3>
                      </div>
                      
                      <button 
                        onClick={() => {
                          const textToCopy = `TITULO: ${generatedCase.title}\nCONTEXTO: ${generatedCase.context}\nSITUACION: ${generatedCase.situation}\nARTICULOS: ${generatedCase.articles}\nPREGUNTAS:\n${generatedCase.questions.map((q, i) => `${i+1}. ${q}`).join('\n')}\nRETO: ${generatedCase.gamifiedChallenge}`;
                          navigator.clipboard.writeText(textToCopy);
                          alert('¡Caso de estudio copiado al portapapeles!');
                        }}
                        className="flex items-center gap-1 bg-slate-100 hover:bg-slate-200 px-2.5 py-1 rounded text-xs font-semibold text-slate-700 transition-all"
                      >
                        <Copy className="w-3.5 h-3.5" />
                        Copiar Caso
                      </button>
                    </div>

                    <div className="space-y-4 text-xs leading-relaxed text-slate-700">
                      <div>
                        <h4 className="font-bold text-slate-900 uppercase text-[9px] mb-1">Contexto Pedagógico</h4>
                        <p className="p-3 bg-slate-50 border border-slate-200 rounded text-slate-600 italic">
                          {generatedCase.context}
                        </p>
                      </div>

                      <div>
                        <h4 className="font-bold text-slate-900 uppercase text-[9px] mb-1">Narrativa de la Situación</h4>
                        <p className="text-slate-800 whitespace-pre-line bg-slate-50/50 p-3 rounded border border-slate-100 font-medium">
                          {generatedCase.situation}
                        </p>
                      </div>

                      <div>
                        <h4 className="font-bold text-slate-900 uppercase text-[9px] mb-1">Artículos Clave Aplicables (Acuerdo 007 de 2012)</h4>
                        <p className="text-slate-800 border-l-4 border-emerald-500 pl-3">
                          {generatedCase.articles}
                        </p>
                      </div>

                      <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                        <h4 className="font-bold text-slate-900 uppercase text-[9px] mb-2">Preguntas de Debate y Reflexión</h4>
                        <ol className="list-decimal pl-4 space-y-1.5 text-slate-800 font-medium">
                          {generatedCase.questions.map((question, i) => (
                            <li key={i}>{question}</li>
                          ))}
                        </ol>
                      </div>

                      <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                        <span className="text-[9px] font-bold text-amber-800 uppercase block mb-1">🎯 Propuesta de Reto de Cierre Gamificado</span>
                        <p className="text-slate-900 font-semibold">{generatedCase.gamifiedChallenge}</p>
                      </div>
                    </div>

                  </div>
                ) : (
                  <div className="bg-white rounded-xl border border-dashed border-slate-300 p-12 text-center flex flex-col items-center justify-center space-y-3 shadow-sm">
                    <div className="p-4 bg-slate-100 rounded-full text-slate-400">
                      <Wand2 className="w-8 h-8" />
                    </div>
                    <h3 className="font-bold text-sm text-slate-800">Ningún caso generado todavía</h3>
                    <p className="text-slate-500 text-xs max-w-sm">
                      Diligencia los campos de la izquierda y haz clic en "Generar Caso con IA" para estructurar un caso práctico ético personalizado para el Reglamento del Aprendiz SENA.
                    </p>
                  </div>
                )}

              </div>
            </div>

          </div>
        )}

        {/* TAB 4: PORTAFOLIO DEL APRENDIZ */}
        {activeTab === 'portafolio' && (
          <div className="space-y-6">
            
            {/* PORTFOLIO STATUS BAR */}
            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h2 className="text-lg font-extrabold text-slate-950 flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-emerald-600" />
                  Portafolio de Evidencias de Inducción del Aprendiz
                </h2>
                <p className="text-slate-600 text-xs mt-1">
                  En el SENA, tu Portafolio de Aprendiz es el repositorio oficial que compila tus evidencias aprobadas (Circular 006 de 2016) para certificar tu inducción.
                </p>
              </div>

              <button 
                onClick={() => setIsReportModalOpen(true)}
                className="bg-slate-950 hover:bg-slate-900 text-white px-4 py-2 text-xs font-bold rounded-lg shadow-xs transition-all flex items-center gap-1.5 hover:scale-105 active:scale-95 cursor-pointer"
              >
                Generar Reporte Oficial Portafolio 📄
              </button>
            </div>

            {/* GOOGLE DRIVE LINK BANNER */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-5 shadow-xs flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="p-1 bg-white rounded shadow-xs">📁</span>
                  <h4 className="font-extrabold text-blue-950 text-sm">Carpeta Oficial de Google Drive para la Ficha</h4>
                </div>
                <p className="text-xs text-blue-850 max-w-2xl leading-relaxed">
                  Sube tus evidencias completadas directamente a la carpeta de Google Drive configurada para tu ficha. Así tus instructores podrán verificar y consolidar tu portafolio oficial.
                </p>
                <p className="text-[11px] font-mono text-slate-500 truncate max-w-xs sm:max-w-xl">
                  Enlace de destino actual: <a href={googleDriveUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline font-semibold hover:text-blue-800">{googleDriveUrl}</a>
                </p>
              </div>

              <div className="flex gap-2 w-full sm:w-auto shrink-0">
                <button 
                  onClick={() => setIsDriveConfigOpen(true)}
                  className="w-full sm:w-auto bg-white border border-blue-300 hover:bg-slate-50 text-blue-900 px-4 py-2 text-xs font-bold rounded-lg cursor-pointer transition-all"
                >
                  Configurar Enlace ⚙️
                </button>
                <a 
                  href={googleDriveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 text-xs font-bold rounded-lg cursor-pointer transition-all shadow-xs flex items-center justify-center gap-1.5"
                >
                  Abrir Google Drive 🚀
                </a>
              </div>
            </div>

            {/* CHECKLIST AND SIMULATED UPLOADS */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              
              <div className="lg:col-span-2 space-y-4">
                
                {INDUCTION_DAYS.map((day) => {
                  const isDone = portfolioCompleted[day.dia];
                  const hasFile = uploadedFiles[day.dia];
                  const dayPaso = day.secuencia[1]; // get development step (middle) for default entregable

                  return (
                    <div 
                      key={day.dia} 
                      className={`p-5 rounded-xl border transition-all ${isDone ? 'bg-white border-[#39A900] shadow-xs' : 'bg-white border-slate-200'}`}
                    >
                      <div className="flex justify-between items-start gap-4">
                        <div className="flex items-start gap-3">
                          <button
                            onClick={() => setPortfolioCompleted(prev => ({ ...prev, [day.dia]: !prev[day.dia] }))}
                            className={`w-6 h-6 rounded-full flex items-center justify-center border transition-all mt-0.5 ${isDone ? 'bg-[#39A900] border-[#39A900] text-white' : 'border-slate-300 hover:border-slate-400'}`}
                          >
                            {isDone && <Check className="w-4 h-4" />}
                          </button>
                          
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="text-[10px] font-bold text-emerald-800 uppercase bg-emerald-50 px-2 py-0.5 rounded">
                                Evidencia Día {day.dia}
                              </span>
                              {isDone ? (
                                <span className="text-emerald-700 font-bold text-xs">Aprobado (A)</span>
                              ) : (
                                <span className="text-slate-400 font-medium text-xs">Por entregar</span>
                              )}
                            </div>
                            
                            <h4 className="font-extrabold text-slate-950 text-sm mt-1">{day.titulo}</h4>
                            <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                              <strong>Entregable Requerido:</strong> {dayPaso.entregable}
                            </p>
                          </div>
                        </div>

                        {/* File details, play, and Google Drive upload */}
                        <div className="flex flex-col items-end gap-2 shrink-0">
                          {hasFile ? (
                            <span className="text-[11px] font-extrabold bg-emerald-100 text-emerald-800 border border-[#39A900]/30 px-2.5 py-1 rounded block truncate max-w-[170px] text-center">
                              ✅ {hasFile}
                            </span>
                          ) : (
                            <button
                              onClick={() => {
                                setSelectedDay(day.dia);
                                setActiveTab('juegos');
                              }}
                              className="w-full text-center bg-emerald-50 hover:bg-emerald-100 text-[#39A900] border border-emerald-200 px-2.5 py-1 text-[10px] font-bold rounded-lg cursor-pointer transition-all"
                            >
                              Completar con Reto Lúdico 🎮
                            </button>
                          )}

                          <button
                            onClick={() => {
                              setActiveDriveTarget({
                                dia: day.dia,
                                titulo: day.titulo,
                                entregable: dayPaso.entregable
                              });
                            }}
                            className="w-full text-center bg-blue-600 hover:bg-blue-700 text-white px-2.5 py-1 text-[10px] font-bold rounded-lg flex items-center justify-center gap-1 cursor-pointer transition-all shadow-xs"
                          >
                            <FolderOpen className="w-3 h-3 text-blue-200" />
                            Enviar a Drive 🚀
                          </button>
                        </div>
                      </div>

                      {/* Notes / Reflexion Section */}
                      <div className="mt-4 pt-3 border-t border-slate-100 grid grid-cols-1 md:grid-cols-3 gap-3 items-end">
                        <div className="md:col-span-2">
                          <label className="text-[10px] font-bold text-slate-500 uppercase block mb-1">Reflexión Personal del Aprendiz para la Carpeta</label>
                          <input
                            type="text"
                            placeholder="Escribe tu reflexión formativa personal de este entregable..."
                            value={portfolioNotes[day.dia]}
                            onChange={(e) => setPortfolioNotes(prev => ({ ...prev, [day.dia]: e.target.value }))}
                            className="w-full bg-slate-50 border border-slate-200 rounded p-1.5 text-xs focus:bg-white"
                          />
                        </div>
                        
                        <div>
                          <label className="text-[10px] font-bold text-slate-500 uppercase block mb-1">Simular Carga de Archivo Manual</label>
                          <input
                            type="file"
                            onChange={(e) => {
                              const name = e.target.files?.[0]?.name || `Evidencia_Dia_${day.dia}_Cargada.pdf`;
                              handleSimulateUpload(day.dia, name);
                            }}
                            className="w-full text-[10px] text-slate-500 file:mr-2 file:py-1 file:px-2 file:rounded file:border-0 file:text-[10px] file:font-semibold file:bg-slate-100 file:text-slate-700 hover:file:bg-slate-200"
                          />
                        </div>
                      </div>

                    </div>
                  );
                })}

              </div>

              {/* Sidebar Info: Norms of Portfolio */}
              <div className="lg:col-span-1 space-y-4">
                
                <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm space-y-3 text-xs text-slate-700">
                  <h3 className="font-extrabold uppercase text-[#39A900] tracking-wider text-[11px] border-b border-slate-100 pb-2">
                    Lineamiento Oficial del Portafolio FPI
                  </h3>
                  
                  <p className="leading-relaxed">
                    De acuerdo con los artículos de la <strong>Circular 006 de 2016</strong>, las evidencias se catalogan como producto tangible. El instructor debe corroborar:
                  </p>

                  <ul className="space-y-2">
                    <li className="flex gap-2 items-start">
                      <span className="text-[#39A900] font-bold">✔</span>
                      <span><strong>Identidad (Día 1):</strong> Infografía donde se asocie el direccionamiento estratégico del SENA.</span>
                    </li>
                    <li className="flex gap-2 items-start">
                      <span className="text-[#39A900] font-bold">✔</span>
                      <span><strong>Entornos TIC (Día 2):</strong> Validación de la navegación en Zajuna y foro social de Ficha.</span>
                    </li>
                    <li className="flex gap-2 items-start">
                      <span className="text-[#39A900] font-bold">✔</span>
                      <span><strong>Identidad Programa (Día 3):</strong> Matriz de Estilos de Aprendizaje VAK y competencias de Ficha.</span>
                    </li>
                    <li className="flex gap-2 items-start">
                      <span className="text-[#39A900] font-bold">✔</span>
                      <span><strong>Reglamento (Día 4):</strong> Resolución de Estudio de Casos basada en la tipificación de faltas.</span>
                    </li>
                    <li className="flex gap-2 items-start">
                      <span className="text-[#39A900] font-bold">✔</span>
                      <span><strong>Integración (Día 5):</strong> Pacto de Convivencia y Árbol de Proyecto de Vida Co-creado.</span>
                    </li>
                  </ul>

                  <div className="bg-slate-50 p-2.5 rounded border border-slate-200">
                    <span className="font-bold text-slate-800 block mb-0.5">Juicio de Evaluación:</span>
                    <p className="text-[11px] italic text-slate-600">
                      "Aprobado" (A) o "No Aprobado" (D). Si se desaprueba, se debe concertar un plan de mejoramiento inmediato.
                    </p>
                  </div>
                </div>

              </div>

            </div>

          </div>
        )}

        {/* TAB: RECURSOS DE APOYO E HIMNO */}
        {activeTab === 'recursos' && (
          <div className="space-y-6">
            
            {/* Header section */}
            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
              <h2 className="text-lg font-extrabold text-slate-900 flex items-center gap-2">
                <Volume2 className="w-5 h-5 text-[#39A900]" />
                Centro de Recursos Didácticos, Diapositivas e Himno FPI
              </h2>
              <p className="text-slate-600 text-sm mt-1">
                Accede a las presentaciones oficiales, manuales de consulta y materiales curriculares requeridos para el desarrollo de cada jornada de inducción.
              </p>
            </div>

            {/* Himno SENA Card */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              
              {/* Left: Himno Card */}
              <div className="lg:col-span-5 bg-emerald-950 text-emerald-100 p-6 rounded-2xl border border-emerald-900 shadow-lg space-y-4">
                <div className="flex items-center gap-3 border-b border-emerald-800 pb-3">
                  <div className="p-2 bg-white rounded-lg">
                    <img 
                      src="https://oficinavirtualderadicacion.sena.edu.co/oficinavirtual/Resources/logoSenaNaranja.png" 
                      alt="Logo SENA" 
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-white text-sm">Himno Oficial del SENA</h3>
                    <p className="text-emerald-300 text-[11px] font-medium">Símbolo Patrio de Identidad de Aprendices</p>
                  </div>
                </div>

                {/* Lyrics Display */}
                <div className="bg-emerald-900/40 p-4 rounded-xl border border-emerald-800/60 max-h-[280px] overflow-y-auto text-xs leading-relaxed space-y-3 font-medium">
                  <p className="text-center font-bold text-white text-[13px] tracking-wider uppercase">Letra Oficial del Himno</p>
                  
                  <div className="text-center italic">
                    <p className="font-bold text-emerald-200">CORO</p>
                    <p>Estudiantes del SENA adelante,</p>
                    <p>por Colombia luchad con amor,</p>
                    <p>con el ánimo noble y constante,</p>
                    <p>sembremos la paz y el honor.</p>
                  </div>

                  <div className="text-center italic">
                    <p className="font-bold text-emerald-200">I</p>
                    <p>En los campos de la hermosa patria</p>
                    <p>donde brilla un eterno crisol,</p>
                    <p>nuestros brazos con fe constructores</p>
                    <p>le darán a la patria su sol.</p>
                  </div>

                  <div className="text-center italic">
                    <p className="font-bold text-emerald-200">II</p>
                    <p>Del trabajo la voz es himno</p>
                    <p>que pregona la paz y la unión,</p>
                    <p>en el yunque, en la huerta, en la ciencia,</p>
                    <p>se engrandece la patria nación.</p>
                  </div>
                  
                  <div className="text-center italic">
                    <p className="font-bold text-emerald-200">III</p>
                    <p>Con la mente en la cumbre sublime</p>
                    <p>y la mano extendida al deber,</p>
                    <p>el camino del triunfo trazamos</p>
                    <p>en el noble y constante aprender.</p>
                  </div>
                </div>

                {/* Anthem Actions */}
                <div className="pt-2 space-y-2">
                  <a 
                    href="https://www.sena.edu.co/es-co/sena/Paginas/himno.aspx" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center justify-center gap-2 bg-[#39A900] hover:bg-[#329600] text-white py-2.5 rounded-lg text-xs font-bold transition-all text-center w-full shadow-sm"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Ir al Enlace del Himno Oficial (Web SENA)
                  </a>
                  
                  <p className="text-[10px] text-emerald-300 text-center italic">
                    "Cantado obligatoriamente en los actos protocolarios de inducción y graduación."
                  </p>
                </div>
              </div>

              {/* Right: Presentation Materials & Consultation Documents */}
              <div className="lg:col-span-7 space-y-4">
                <h3 className="font-bold text-xs uppercase tracking-wider text-slate-500">Material de Consulta y Apoyo Curricular</h3>
                
                {/* 5 Cards for each of the 5 days */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    {
                      dia: 1,
                      aspecto: "Identidad Institucional",
                      titulo: "Historia, Símbolos y Circular 006 de 2016",
                      material: "Manual de Inducción FPI SENA v2026 (PDF - 42 págs.)",
                      presentacion: "Diapositivas de Identidad y Misión Institucional (PPTX)",
                      linkDoc: "https://www.sena.edu.co/es-co/transparencia/Normatividad/Circular_006_de_2016.pdf"
                    },
                    {
                      dia: 2,
                      aspecto: "Entornos Tecnológicos",
                      titulo: "Plataformas del Ecosistema Digital SENA",
                      material: "Guía de Usuario Zajuna LMS, Correo MiSena y Sofía Plus",
                      presentacion: "Presentación de Navegación del Aula Virtual (Interactiva)",
                      linkDoc: "https://portal.zajuna.edu.co"
                    },
                    {
                      dia: 3,
                      aspecto: "Identidad del Programa",
                      titulo: "Especialidad Técnica, RAP y Estilos de Aprendizaje",
                      material: "Estilos de Aprendizaje Kolb/VAK y Estrategias Pedagógicas",
                      presentacion: "Diapositivas - Caracterización Curricular de Ficha (PPTX)",
                      linkDoc: "https://oferta.senasofiaplus.edu.co"
                    },
                    {
                      dia: 4,
                      aspecto: "Reglamento del Aprendiz",
                      titulo: "Derechos, Deberes, Trámites y Debido Proceso",
                      material: "Reglamento del Aprendiz SENA - Acuerdo 007 de 2012 (Completo)",
                      presentacion: "Guía Explicativa del Comité de Evaluación y Casos Éticos",
                      linkDoc: "https://www.sena.edu.co/es-co/transparencia/Normatividad/Acuerdo_007_de_2012.pdf"
                    },
                    {
                      dia: 5,
                      aspecto: "Integración Ambiental",
                      titulo: "Pacto de Convivencia, Liderazgo y Sostenibilidad",
                      material: "Cartilla de Política Ambiental SENA y Proyecto de Vida",
                      presentacion: "Diapositivas de Liderazgo Asertivo y Convivencia de Ficha",
                      linkDoc: "https://www.sena.edu.co/es-co/sena/Paginas/PoliticaAmbiental.aspx"
                    }
                  ].map((mat) => (
                    <div key={mat.dia} className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs space-y-3 hover:border-emerald-300 transition-all flex flex-col justify-between">
                      <div className="space-y-1.5">
                        <div className="flex justify-between items-center">
                          <span className="bg-emerald-50 text-[#39A900] text-[9px] font-bold px-2 py-0.5 rounded uppercase">
                            Día {mat.dia}: {mat.aspecto}
                          </span>
                          <span className="text-[10px] text-slate-400 font-semibold">FPI-0{mat.dia}</span>
                        </div>
                        <h4 className="font-bold text-slate-950 text-xs">{mat.titulo}</h4>
                        
                        <div className="space-y-1 text-[11px] text-slate-600 pt-1">
                          <p className="flex gap-1 items-start">
                            <span className="text-[#39A900] font-bold">📂</span>
                            <span><strong>Lectura:</strong> {mat.material}</span>
                          </p>
                          <p className="flex gap-1 items-start">
                            <span className="text-blue-600 font-bold">📊</span>
                            <span><strong>Diapositiva:</strong> {mat.presentacion}</span>
                          </p>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100">
                        <a 
                          href={mat.linkDoc} 
                          target="_blank" 
                          rel="noreferrer" 
                          className="bg-slate-100 hover:bg-slate-200 text-slate-700 py-1.5 rounded font-bold text-[10px] text-center truncate"
                        >
                          Manual PDF 📄
                        </a>
                        <button 
                          onClick={() => alert(`Iniciando simulación de descarga para la presentación:\n"${mat.presentacion}"\n\nEl archivo se descargará en formato .pptx en tu carpeta local.`)}
                          className="bg-emerald-50 hover:bg-emerald-100 text-[#39A900] py-1.5 rounded font-bold text-[10px] truncate"
                        >
                          Diapositivas 📥
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

              </div>

            </div>

          </div>
        )}

        {/* TAB: CERTIFICADO DE LOGRO */}
        {activeTab === 'certificado' && (
          <div className="space-y-6">
            
            {/* Header section with parameters */}
            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
              <div className="lg:col-span-2 space-y-1">
                <h2 className="text-lg font-extrabold text-slate-900 flex items-center gap-2">
                  <Award className="w-5 h-5 text-[#39A900]" />
                  Emisión del Certificado Oficial de Inducción FPI
                </h2>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Una vez completadas y aprobadas las 5 evidencias en tu Portafolio del Aprendiz, esta plataforma emite tu certificado de aprobación de inducción, firmado digitalmente por el Subdirector de Centro, <strong>DIEGO FERNANDO VILLALBA</strong>.
                </p>
              </div>

              <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 text-xs flex flex-col justify-center items-center text-center">
                <span className="text-[10px] text-slate-500 uppercase font-semibold">Estado del Portafolio:</span>
                {portfolioProgressCount === 5 ? (
                  <span className="text-emerald-700 font-extrabold text-sm uppercase tracking-wide mt-1">
                    Aprobado de Matrícula (100%)
                  </span>
                ) : (
                  <div className="space-y-2 mt-1">
                    <span className="text-amber-700 font-bold block">
                      En Desarrollo ({portfolioProgressCount} de 5 completadas)
                    </span>
                    <button
                      onClick={() => {
                        setPortfolioCompleted({ 1: true, 2: true, 3: true, 4: true, 5: true });
                        setUploadedFiles({
                          1: 'Infografia_Identidad_SENA_Simulada.pdf',
                          2: 'Comprobante_Dominio_TIC_Simulador.pdf',
                          3: 'Autoevaluacion_Estilo_VAK_Visual.pdf',
                          4: 'Taller_Reglamento_Aprobado_Simulado.pdf',
                          5: 'Pacto_Induccion_Firmado_Edison.pdf'
                        });
                      }}
                      className="text-[10px] bg-amber-500 hover:bg-amber-600 text-white font-bold px-2.5 py-1 rounded-sm shadow-xs"
                    >
                      Autocompletar Evidencias
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Certificate Form & Preview layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              
              {/* Form customizer */}
              <div className="lg:col-span-4 bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-4 text-xs">
                <h3 className="font-extrabold uppercase text-slate-500 tracking-wider text-[11px] border-b pb-2">
                  Personalizar Datos de Matrícula
                </h3>

                <div className="space-y-3">
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="font-bold text-slate-700 block mb-1">Nombres</label>
                      <input 
                        type="text" 
                        value={apprenticeFirstName} 
                        onChange={(e) => setApprenticeFirstName(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-300 rounded p-2 text-xs focus:bg-white focus:border-[#39A900] outline-none"
                      />
                    </div>
                    <div>
                      <label className="font-bold text-slate-700 block mb-1">Apellidos</label>
                      <input 
                        type="text" 
                        value={apprenticeLastName} 
                        onChange={(e) => setApprenticeLastName(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-300 rounded p-2 text-xs focus:bg-white focus:border-[#39A900] outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="font-bold text-slate-700 block mb-1">Tipo Doc.</label>
                      <select 
                        value={apprenticeDocType}
                        onChange={(e) => setApprenticeDocType(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-300 rounded p-2 text-xs focus:bg-white focus:border-[#39A900] outline-none"
                      >
                        <option value="Cédula de Ciudadanía">Cédula de Ciudadanía</option>
                        <option value="Tarjeta de Identidad">Tarjeta de Identidad</option>
                        <option value="Cédula de Extranjería">Cédula de Extranjería</option>
                        <option value="NUI">Número Único de Identificación (NUI)</option>
                      </select>
                    </div>
                    <div>
                      <label className="font-bold text-slate-700 block mb-1">Número</label>
                      <input 
                        type="text" 
                        value={apprenticeDoc} 
                        onChange={(e) => setApprenticeDoc(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-300 rounded p-2 text-xs focus:bg-white focus:border-[#39A900] outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="font-bold text-slate-700 block mb-1">Programa de Formación</label>
                    <input 
                      type="text" 
                      value={apprenticeProgramState} 
                      onChange={(e) => setApprenticeProgramState(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-300 rounded p-2 text-xs focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="font-bold text-slate-700 block mb-1">Ficha de Caracterización (Número)</label>
                    <input 
                      type="text" 
                      value={apprenticeFichaState} 
                      onChange={(e) => setApprenticeFichaState(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-300 rounded p-2 text-xs focus:bg-white"
                    />
                  </div>
                </div>

                <div className="bg-amber-50 p-3 rounded-lg border border-amber-200 leading-relaxed text-amber-800">
                  <p className="font-bold text-[10.5px]">Nota para Impresión:</p>
                  <p className="text-[10px] mt-0.5">
                    Modifica cualquiera de estos campos y se reflejarán instantáneamente en tu Certificado Oficial de Logro. Usa el botón "Imprimir" para guardarlo en formato PDF.
                  </p>
                </div>
              </div>

              {/* Certificate Preview Card */}
              <div className="lg:col-span-8 space-y-4">
                
                {/* Visual Certificate Frame */}
                <div 
                  id="sena-certificate-frame"
                  className="bg-white p-8 md:p-12 rounded-2xl border-8 border-[#39A900] shadow-2xl relative overflow-hidden text-center space-y-6 select-none bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-emerald-50/20 to-white print:border-8 print:border-[#39A900] print:shadow-none"
                >
                  {/* Decorative Borders Inside */}
                  <div className="absolute inset-2 border border-[#39A900]/30 rounded-lg pointer-events-none"></div>
                  
                  {/* Watermark Logo behind */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
                    <img 
                      src="https://oficinavirtualderadicacion.sena.edu.co/oficinavirtual/Resources/logoSenaNaranja.png" 
                      alt="Watermark Logo SENA" 
                      className="w-96 h-96 object-contain"
                    />
                  </div>

                  {/* Top Certificate Header */}
                  <div className="relative z-10 flex flex-col items-center space-y-2">
                    <img 
                      src="https://oficinavirtualderadicacion.sena.edu.co/oficinavirtual/Resources/logoSenaNaranja.png" 
                      alt="SENA Logo" 
                      className="w-16 h-16 object-contain"
                    />
                    <div className="space-y-0.5">
                      <p className="text-[10px] md:text-xs font-bold tracking-widest text-[#39A900] uppercase">
                        Servicio Nacional de Aprendizaje • SENA
                      </p>
                      <p className="text-[9px] md:text-[10px] font-semibold text-slate-500 uppercase tracking-wider">
                        Dirección de Formación Profesional Integral • Regional Distrito Capital
                      </p>
                      <p className="text-[10px] md:text-xs font-bold text-slate-800">
                        Centro de Formación de Talento Humano y Tecnologías FPI
                      </p>
                    </div>
                  </div>

                  {/* Body Title */}
                  <div className="relative z-10 py-2">
                    <h3 className="text-xl md:text-2xl font-serif font-extrabold text-slate-900 tracking-wide uppercase">
                      Certificado de Logro Académico y Convivencia
                    </h3>
                    <div className="w-24 h-1 bg-[#39A900] mx-auto mt-2"></div>
                  </div>

                  {/* Recipient Details */}
                  <div className="relative z-10 space-y-3.5 text-xs md:text-sm">
                    <p className="text-slate-500 font-medium">Se otorga con mérito y reconocimiento oficial a:</p>
                    
                    <div className="space-y-1">
                      <p className="text-lg md:text-xl font-extrabold text-slate-950 font-sans tracking-tight">
                        {apprenticeName || "[Escribe tu Nombre]"}
                      </p>
                      <p className="text-slate-600 font-semibold text-xs">
                        Identificado con {apprenticeDocType} Nº: {apprenticeDoc || "[Escribe tu Documento]"}
                      </p>
                    </div>

                    <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed text-xs">
                      Por haber cursado, asimilado y aprobado satisfactoriamente el programa de 
                      <strong> Semana de Inducción de la Formación Profesional Integral (FPI)</strong>, 
                      para el programa de formación <strong>{apprenticeProgramState || "[Nombre del Programa]"}</strong>, 
                      Ficha de Caracterización <strong>{apprenticeFichaState || "[Número Ficha]"}</strong>, asimilando con excelencia la 
                      <strong> Competencia Clave 240201500</strong> de interacciones idóneas y ética social, de conformidad con los lineamientos oficiales de la 
                      <strong> Circular 006 de 2016</strong>.
                    </p>

                    <p className="text-slate-500 font-medium text-[11px]">
                      Duración Oficial: 25 horas certificadas de planeación didáctica dual.
                    </p>
                  </div>

                  {/* Bottom Signatures section */}
                  <div className="relative z-10 pt-4 grid grid-cols-2 gap-6 items-end max-w-xl mx-auto text-center">
                    
                    {/* Centered signature for Diego Villalba as Subdirector */}
                    <div className="col-span-2 flex flex-col items-center justify-center space-y-1">
                      {/* Stylized Digital Signature Graphic */}
                      <div className="font-serif italic text-lg text-emerald-800 font-extrabold select-none h-10 flex items-center justify-center">
                        Diego Fernando Villalba
                      </div>
                      
                      <div className="w-56 h-px bg-slate-300"></div>
                      
                      <p className="text-[11px] font-extrabold text-slate-950 uppercase tracking-tight">
                        DIEGO FERNANDO VILLALBA
                      </p>
                      <p className="text-[9px] text-slate-500 leading-none">
                        Subdirector de Centro de Formación SENA
                      </p>
                      <p className="text-[8px] text-[#39A900] font-semibold mt-0.5">
                        Firma Autorizada • Regional Distrito Capital
                      </p>
                    </div>

                  </div>

                  {/* Decorative corner accents */}
                  <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-[#39A900]/40"></div>
                  <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-[#39A900]/40"></div>
                  <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-[#39A900]/40"></div>
                  <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-[#39A900]/40"></div>
                  
                  {/* Security Barcode */}
                  <div className="relative z-10 pt-2 flex flex-col items-center justify-center space-y-1">
                    <div className="font-mono text-[9px] text-slate-400 select-none">
                      ||||| | ||||| | ||||| |||| | ||||| | ||| FPI-2026-CC-240201500
                    </div>
                    <span className="text-[8px] text-slate-400 font-bold tracking-widest">
                      Código de Verificación: SENA-CF-V2026-FPI
                    </span>
                  </div>

                </div>

                {/* Print button */}
                <div className="flex justify-end gap-3">
                  <button 
                    onClick={() => {
                      if (portfolioProgressCount < 5) {
                        alert('Atención: El portafolio no está al 100%. Puedes imprimir el certificado para pruebas, pero recuerda completar las evidencias para el registro oficial.');
                      }
                      window.print();
                    }}
                    className="bg-[#39A900] hover:bg-[#329600] text-white px-6 py-3 font-bold text-xs rounded-xl transition-all shadow-md flex items-center gap-2"
                  >
                    <Download className="w-4 h-4" />
                    Imprimir Certificado 🖨
                  </button>
                </div>

              </div>

            </div>

          </div>
        )}

        {/* TAB 5: EXPORTAR MARKDOWN OFICIAL */}
        {activeTab === 'exportar' && (
          <div className="space-y-6">
            <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h2 className="text-lg font-extrabold text-slate-950 flex items-center gap-2">
                  <FileCode className="w-5 h-5 text-emerald-600" />
                  Descargar y Copiar Guía Operativa Completa en Markdown
                </h2>
                <p className="text-slate-600 text-xs mt-1">
                  Genera la guía curricular rigurosa y exhaustiva de 5 jornadas oficiales (Circular 006 de 2016) lista para radicar en el Centro de Formación.
                </p>
              </div>

              <div className="flex gap-2 w-full md:w-auto">
                <button
                  onClick={handleCopyMarkdown}
                  className="flex-1 md:flex-none flex items-center justify-center gap-1.5 bg-slate-900 hover:bg-slate-800 text-white px-4 py-2 rounded-lg text-xs font-bold transition-all shadow-sm"
                >
                  {copiedMd ? <Check className="w-4 h-4 text-[#39A900]" /> : <Copy className="w-4 h-4" />}
                  {copiedMd ? '¡Copiado!' : 'Copiar Markdown'}
                </button>
                
                <button
                  onClick={handleDownloadMarkdown}
                  className="flex-1 md:flex-none flex items-center justify-center gap-1.5 bg-[#39A900] hover:bg-[#329600] text-white px-4 py-2 rounded-lg text-xs font-bold transition-all shadow-sm"
                >
                  <Download className="w-4 h-4" />
                  Descargar Archivo .md
                </button>
              </div>
            </div>

            {/* MARKDOWN BOX VIEW */}
            <div className="bg-slate-900 text-slate-100 p-6 rounded-xl border border-slate-800 overflow-x-auto max-h-[600px] text-xs font-mono whitespace-pre shadow-inner">
              {generateInductionMarkdown()}
            </div>
          </div>
        )}

      </main>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-slate-400 py-6 border-t border-slate-800 text-xs text-center">
        <div className="max-w-7xl mx-auto px-4 space-y-2">
          <p className="font-semibold text-slate-300">
            Guía Pedagógica Operativa y Simulador de Semana de Inducción FPI v2026.
          </p>
          <p>
            Fundamentado en la Circular 006 de 2016 y la Competencia Clave 240201500 del SENA.
          </p>
          <p className="text-[11px] text-slate-500">
            Desarrollado para el equipo de asesores pedagógicos, instructores y aprendices del Servicio Nacional de Aprendizaje.
          </p>
        </div>
      </footer>

      {/* REGISTRATION MODAL FOR NEW APPRENTICES */}
      {isRegModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 max-w-lg w-full overflow-hidden transform transition-all">
            
            {/* Header */}
            <div className="bg-[#39A900] text-white px-6 py-4 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <span className="text-xl">📝</span>
                <div>
                  <h3 className="font-extrabold text-sm md:text-base">Ingreso del Aprendiz a Inducción</h3>
                  <p className="text-[11px] text-emerald-100 font-light">Escribe los datos oficiales de tu matrícula para registrar el ingreso</p>
                </div>
              </div>
              <button 
                onClick={() => setIsRegModalOpen(false)}
                className="text-white/80 hover:text-white font-bold text-lg p-1.5 hover:bg-white/10 rounded-full transition-all cursor-pointer"
              >
                ✕
              </button>
            </div>

            {/* Form */}
            <form onSubmit={(e) => {
              e.preventDefault();
              setIsRegModalOpen(false);
            }} className="p-6 space-y-4 text-xs">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Nombres Completos *</label>
                  <input 
                    type="text" 
                    required
                    placeholder="Ej. Edison"
                    value={apprenticeFirstName}
                    onChange={(e) => setApprenticeFirstName(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5 text-xs focus:bg-white focus:border-[#39A900] focus:ring-1 focus:ring-[#39A900] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Apellidos *</label>
                  <input 
                    type="text" 
                    required
                    placeholder="Ej. Cabrera Leiva"
                    value={apprenticeLastName}
                    onChange={(e) => setApprenticeLastName(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5 text-xs focus:bg-white focus:border-[#39A900] focus:ring-1 focus:ring-[#39A900] outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Tipo de Identificación *</label>
                  <select 
                    value={apprenticeDocType}
                    onChange={(e) => setApprenticeDocType(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5 text-xs focus:bg-white focus:border-[#39A900] focus:ring-1 focus:ring-[#39A900] outline-none"
                  >
                    <option value="Cédula de Ciudadanía">Cédula de Ciudadanía</option>
                    <option value="Tarjeta de Identidad">Tarjeta de Identidad</option>
                    <option value="Cédula de Extranjería">Cédula de Extranjería</option>
                    <option value="NUI">Número Único de Identificación (NUI)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Número de Identificación *</label>
                  <input 
                    type="text" 
                    required
                    placeholder="Ej. 1.094.887.221"
                    value={apprenticeDoc}
                    onChange={(e) => setApprenticeDoc(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5 text-xs focus:bg-white focus:border-[#39A900] focus:ring-1 focus:ring-[#39A900] outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Formación a la que ingresa (Programa) *</label>
                <input 
                  type="text" 
                  required
                  placeholder="Ej. Análisis y Desarrollo de Software (ADSO)"
                  value={apprenticeProgramState}
                  onChange={(e) => setApprenticeProgramState(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5 text-xs focus:bg-white focus:border-[#39A900] focus:ring-1 focus:ring-[#39A900] outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Ficha de Caracterización *</label>
                <input 
                  type="text" 
                  required
                  placeholder="Ej. 2879542"
                  value={apprenticeFichaState}
                  onChange={(e) => setApprenticeFichaState(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5 text-xs focus:bg-white focus:border-[#39A900] focus:ring-1 focus:ring-[#39A900] outline-none"
                />
              </div>

              <div className="pt-3 border-t border-slate-100 flex justify-end gap-2 text-xs font-bold">
                <button 
                  type="button"
                  onClick={() => setIsRegModalOpen(false)}
                  className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg transition-all cursor-pointer"
                >
                  Cerrar
                </button>
                <button 
                  type="submit"
                  className="px-5 py-2 bg-[#39A900] hover:bg-[#329600] text-white rounded-lg transition-all shadow-md flex items-center gap-1 cursor-pointer"
                >
                  Registrar Ingreso 💾
                </button>
              </div>

            </form>
          </div>
        </div>
      )}

      {/* GOOGLE DRIVE CONFIGURATION MODAL */}
      {isDriveConfigOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 max-w-lg w-full overflow-hidden transform transition-all">
            
            {/* Header */}
            <div className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <span className="text-xl">📁</span>
                <div>
                  <h3 className="font-extrabold text-sm md:text-base">Carpeta de Google Drive (Portafolio FPI)</h3>
                  <p className="text-[11px] text-blue-100 font-light">Enlaza tu portafolio oficial a la carpeta establecida para tu ficha</p>
                </div>
              </div>
              <button 
                onClick={() => setIsDriveConfigOpen(false)}
                className="text-white/80 hover:text-white font-bold text-lg p-1.5 hover:bg-white/10 rounded-full transition-all cursor-pointer"
              >
                ✕
              </button>
            </div>

            {/* Content */}
            <div className="p-6 space-y-4 text-xs text-slate-700">
              <div className="bg-blue-50 p-3.5 rounded-xl border border-blue-200 space-y-2">
                <p className="font-extrabold text-blue-900">¿Para qué sirve este enlace?</p>
                <p className="text-blue-800 leading-relaxed text-[11px]">
                  Permite a los aprendices e instructores acceder directamente a la carpeta compartida en la nube establecida previamente para la ficha, simplificando la carga diaria de evidencias de inducción sin fricciones.
                </p>
              </div>

              <div className="space-y-3">
                <div>
                  <label className="block text-xs font-bold text-slate-800 uppercase mb-1">Enlace de Google Drive actual:</label>
                  <input 
                    type="url" 
                    value={googleDriveUrl}
                    onChange={(e) => setGoogleDriveUrl(e.target.value)}
                    placeholder="Pega la URL de tu carpeta de Google Drive aquí"
                    className="w-full bg-slate-50 border border-slate-300 rounded-lg p-3 text-xs font-mono focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none text-blue-900"
                  />
                  <p className="text-[10px] text-slate-400 mt-1 italic">
                    Puedes modificar este enlace para adaptarlo a la carpeta establecida por tu Instructor Vocacional.
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex flex-col sm:flex-row justify-end gap-2 text-xs font-bold">
                <button 
                  type="button"
                  onClick={() => setIsDriveConfigOpen(false)}
                  className="w-full sm:w-auto px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg transition-all cursor-pointer text-center"
                >
                  Cerrar
                </button>
                <a 
                  href={googleDriveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsDriveConfigOpen(false)}
                  className="w-full sm:w-auto px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all shadow-md flex items-center justify-center gap-1.5 cursor-pointer text-center"
                >
                  Abrir Carpeta Oficial 🚀
                </a>
              </div>

            </div>
          </div>
        </div>
      )}

      {/* ACTIVE DRIVE TARGET WORKFLOW MODAL */}
      {activeDriveTarget && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 max-w-xl w-full overflow-hidden transform transition-all">
            
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white px-6 py-4 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <span className="text-xl">📁</span>
                <div>
                  <h3 className="font-extrabold text-sm md:text-base">Estructurador Oficial de Carpeta en Google Drive</h3>
                  <p className="text-[11px] text-blue-100 font-light">Día {activeDriveTarget.dia}: {activeDriveTarget.titulo}</p>
                </div>
              </div>
              <button 
                onClick={() => {
                  setActiveDriveTarget(null);
                  setCopiedFolderText(false);
                  setCopiedFileText(false);
                }}
                className="text-white/80 hover:text-white font-bold text-lg p-1.5 hover:bg-white/10 rounded-full transition-all cursor-pointer"
              >
                ✕
              </button>
            </div>

            {/* Content */}
            <div className="p-6 space-y-4 text-xs text-slate-700">
              <div className="bg-blue-50/80 p-4 rounded-xl border border-blue-200 space-y-2">
                <p className="font-extrabold text-blue-900 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                  Estructuración FPI (Circular 006 de 2016)
                </p>
                <p className="text-blue-800 leading-relaxed text-[11px]">
                  Estimado(a) <strong>{apprenticeFirstName || "Aprendiz"}</strong>, para mantener tu Portafolio de Evidencias organizado y facilitar la calificación de los instructores, te guiamos para crear tu carpeta y estructurar el archivo:
                </p>
              </div>

              {/* STEP 1: FOLDER NAME */}
              <div className="space-y-1.5">
                <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider block">Paso 1: Nombre de tu Carpeta Personal en Drive</span>
                <p className="text-[11px] text-slate-600">Dentro de la carpeta de la ficha, crea una subcarpeta con este nombre:</p>
                <div className="flex gap-2">
                  <input 
                    type="text" 
                    readOnly
                    value={`${apprenticeLastName}, ${apprenticeFirstName} - Ficha ${apprenticeFichaState}`}
                    className="w-full bg-slate-50 border border-slate-200 font-bold p-2.5 rounded-lg text-slate-800 text-xs select-all focus:outline-none"
                  />
                  <button 
                    onClick={() => {
                      navigator.clipboard.writeText(`${apprenticeLastName}, ${apprenticeFirstName} - Ficha ${apprenticeFichaState}`);
                      setCopiedFolderText(true);
                      setTimeout(() => setCopiedFolderText(false), 2000);
                    }}
                    className={`shrink-0 px-3 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1 cursor-pointer ${copiedFolderText ? 'bg-emerald-600 text-white' : 'bg-slate-100 hover:bg-slate-200 text-slate-700'}`}
                  >
                    {copiedFolderText ? '¡Copiado! ✓' : 'Copiar 📋'}
                  </button>
                </div>
              </div>

              {/* STEP 2: FILE NAME */}
              <div className="space-y-1.5">
                <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider block">Paso 2: Nombre Recomendado del Archivo de Evidencia</span>
                <p className="text-[11px] text-slate-600">Nombra tu archivo de evidencia (PDF o Imagen) antes de subirlo:</p>
                <div className="flex gap-2">
                  <input 
                    type="text" 
                    readOnly
                    value={`Evidencia_Dia_${activeDriveTarget.dia}_${activeDriveTarget.entregable.split(' ')[0] || 'Entregable'}_${apprenticeFirstName.replace(/\s+/g, '_')}_${apprenticeLastName.replace(/\s+/g, '_')}`}
                    className="w-full bg-slate-50 border border-slate-200 font-mono p-2.5 rounded-lg text-blue-950 text-[11px] select-all focus:outline-none"
                  />
                  <button 
                    onClick={() => {
                      const fileName = `Evidencia_Dia_${activeDriveTarget.dia}_${activeDriveTarget.entregable.split(' ')[0] || 'Entregable'}_${apprenticeFirstName.replace(/\s+/g, '_')}_${apprenticeLastName.replace(/\s+/g, '_')}`;
                      navigator.clipboard.writeText(fileName);
                      setCopiedFileText(true);
                      setTimeout(() => setCopiedFileText(false), 2000);
                    }}
                    className={`shrink-0 px-3 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1 cursor-pointer ${copiedFileText ? 'bg-emerald-600 text-white' : 'bg-slate-100 hover:bg-slate-200 text-slate-700'}`}
                  >
                    {copiedFileText ? '¡Copiado! ✓' : 'Copiar 📋'}
                  </button>
                </div>
              </div>

              {/* FOOTER ACTIONS */}
              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row justify-end gap-2 text-xs font-bold">
                <button 
                  type="button"
                  onClick={() => {
                    setActiveDriveTarget(null);
                    setCopiedFolderText(false);
                    setCopiedFileText(false);
                  }}
                  className="w-full sm:w-auto px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg transition-all cursor-pointer text-center"
                >
                  Regresar
                </button>
                <button 
                  onClick={() => {
                    // Simulate uploading locally as well to make it satisfying!
                    const fileName = `Evidencia_Dia_${activeDriveTarget.dia}_${activeDriveTarget.entregable.split(' ')[0] || 'Entregable'}_${apprenticeFirstName.replace(/\s+/g, '_')}_${apprenticeLastName.replace(/\s+/g, '_')}.pdf`;
                    handleSimulateUpload(activeDriveTarget.dia, fileName);
                    
                    // Open Google Drive
                    window.open(googleDriveUrl, '_blank', 'noopener,noreferrer');
                    
                    // Close dialog
                    setActiveDriveTarget(null);
                  }}
                  className="w-full sm:w-auto px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all shadow-md flex items-center justify-center gap-1.5 cursor-pointer text-center"
                >
                  <FolderOpen className="w-4 h-4 text-blue-200" />
                  Ir a Google Drive y Subir 🚀
                </button>
              </div>

            </div>
          </div>
        </div>
      )}

      {/* PORTFOLIO OFFICIAL REPORT MODAL */}
      {isReportModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in overflow-y-auto">
          <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 max-w-4xl w-full my-8 overflow-hidden transform transition-all flex flex-col max-h-[90vh]">
            
            {/* Header */}
            <div className="bg-slate-950 text-white px-6 py-4 flex justify-between items-center shrink-0 border-b-4 border-[#39A900]">
              <div className="flex items-center gap-3">
                <img 
                  src="https://oficinavirtualderadicacion.sena.edu.co/oficinavirtual/Resources/logoSenaNaranja.png" 
                  alt="Logo SENA" 
                  className="w-8 h-8 object-contain bg-white p-1 rounded"
                />
                <div>
                  <h3 className="font-extrabold text-sm md:text-base text-white">Reporte Oficial de Portafolio de Inducción FPI</h3>
                  <p className="text-[11px] text-slate-300 font-light">
                    Circular 006 de 2016 • Competencia Clave: 240201500
                  </p>
                </div>
              </div>
              <button 
                onClick={() => setIsReportModalOpen(false)}
                className="text-white/80 hover:text-white font-bold text-lg p-1.5 hover:bg-white/10 rounded-full transition-all cursor-pointer"
              >
                ✕
              </button>
            </div>

            {/* Scrollable Document Content */}
            <div className="p-6 overflow-y-auto space-y-6 text-xs text-slate-800 flex-1 bg-slate-50">
              
              {/* PRINTABLE EMBEDDED SHEET */}
              <div 
                id="sena-report-printable"
                className="bg-white p-6 md:p-8 rounded-xl border border-slate-200 shadow-sm space-y-6 relative bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-slate-50/10 to-white"
              >
                {/* Institutional Flag Stripe */}
                <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#39A900] via-[#ff9c00] to-slate-900 rounded-t-lg"></div>

                {/* Report Header */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center border-b pb-4 border-slate-200">
                  <div className="md:col-span-1 flex justify-center md:justify-start">
                    <img 
                      src="https://oficinavirtualderadicacion.sena.edu.co/oficinavirtual/Resources/logoSenaNaranja.png" 
                      alt="Logo SENA Naranja" 
                      className="w-16 h-16 object-contain"
                    />
                  </div>
                  <div className="md:col-span-3 text-center md:text-left space-y-1">
                    <h2 className="text-sm font-extrabold tracking-widest text-[#39A900] uppercase">
                      SERVICIO NACIONAL DE APRENDIZAJE (SENA)
                    </h2>
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                      SISTEMA DE GESTIÓN DE LA FORMACIÓN PROFESIONAL INTEGRAL (FPI)
                    </p>
                    <h3 className="text-base font-extrabold text-slate-900 tracking-tight">
                      REPORTE UNIFICADO DE SEGUIMIENTO Y VERIFICACIÓN DE PORTAFOLIO
                    </h3>
                  </div>
                </div>

                {/* Metadata Grid */}
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-3 gap-x-4 text-[11px]">
                  <div>
                    <span className="text-[9px] font-bold text-slate-400 uppercase block">Nombre del Aprendiz</span>
                    <span className="font-extrabold text-slate-950 text-xs">{apprenticeName || "No registrado"}</span>
                  </div>
                  <div>
                    <span className="text-[9px] font-bold text-slate-400 uppercase block">Documento de Identidad</span>
                    <span className="font-bold text-slate-900">{apprenticeDocType}: <span className="font-extrabold text-slate-950">{apprenticeDoc || "No registrado"}</span></span>
                  </div>
                  <div>
                    <span className="text-[9px] font-bold text-slate-400 uppercase block">Ficha de Caracterización</span>
                    <span className="font-extrabold text-emerald-800 text-xs bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">{apprenticeFichaState || "Sin Ficha"}</span>
                  </div>
                  <div className="sm:col-span-2">
                    <span className="text-[9px] font-bold text-slate-400 uppercase block">Programa de Formación Académica</span>
                    <span className="font-bold text-slate-900">{apprenticeProgramState || "No registrado"}</span>
                  </div>
                  <div>
                    <span className="text-[9px] font-bold text-slate-400 uppercase block">Fecha y Hora de Emisión</span>
                    <span className="font-bold text-slate-800">{new Date().toLocaleDateString('es-CO')} {new Date().toLocaleTimeString('es-CO')}</span>
                  </div>
                </div>

                {/* Overall Progress Widget */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-3.5 rounded-lg border bg-slate-50 border-slate-200 gap-3">
                  <div className="space-y-1">
                    <span className="text-[9px] font-bold text-slate-400 uppercase block">Estado Consolidado del Portafolio</span>
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                      {portfolioProgressCount === 5 ? (
                        <span className="text-xs font-extrabold text-emerald-700 uppercase tracking-wider bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded">
                          ✓ COMPLETADO Y CALIFICADO - APTO (Juicio: A)
                        </span>
                      ) : (
                        <span className="text-xs font-extrabold text-amber-700 uppercase tracking-wider bg-amber-50 border border-amber-200 px-2 py-0.5 rounded">
                          ⚠ EN DESARROLLO ({portfolioProgressCount} de 5 Evidencias)
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="w-full sm:w-48 space-y-1 shrink-0">
                    <div className="flex justify-between text-[10px] font-bold">
                      <span className="text-slate-500">Progreso:</span>
                      <span className="text-[#39A900]">{portfolioPercentage}%</span>
                    </div>
                    <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                      <div 
                        className="bg-[#39A900] h-full transition-all duration-500" 
                        style={{ width: `${portfolioPercentage}%` }}
                      ></div>
                    </div>
                  </div>
                </div>

                {/* Deliverables Table */}
                <div className="space-y-3">
                  <h4 className="font-bold text-[#39A900] uppercase text-[10px] tracking-wider">
                    Desglose de Evidencias de Inducción Radicadas
                  </h4>

                  <div className="border border-slate-200 rounded-lg overflow-hidden">
                    <table className="w-full text-left border-collapse text-[11px]">
                      <thead>
                        <tr className="bg-slate-100 border-b border-slate-200 text-slate-700 font-bold uppercase text-[9px]">
                          <th className="p-3 w-10 text-center">Día</th>
                          <th className="p-3">Evidencia / Entregable Curricular</th>
                          <th className="p-3 w-28 text-center">Calificación</th>
                          <th className="p-3 w-48">Archivo Cargado</th>
                          <th className="p-3">Ubicación de Archivo Enviado</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 bg-white">
                        {INDUCTION_DAYS.map((day) => {
                          const isDone = portfolioCompleted[day.dia];
                          const fileName = uploadedFiles[day.dia];
                          const dayPaso = day.secuencia[1]; // developmental step

                          // Build simulated exact google drive URL
                          const personalFolder = `${apprenticeLastName}, ${apprenticeFirstName} - Ficha ${apprenticeFichaState}`;
                          const customFileLink = fileName 
                            ? `${googleDriveUrl}/${encodeURIComponent(personalFolder)}/${encodeURIComponent(fileName)}`
                            : googleDriveUrl;

                          return (
                            <tr key={day.dia} className="hover:bg-slate-50/40">
                              <td className="p-3 text-center font-extrabold text-slate-800 border-r border-slate-100 bg-slate-50/30">
                                0{day.dia}
                              </td>
                              <td className="p-3 space-y-1">
                                <span className="font-bold text-slate-900 block leading-tight">{day.titulo}</span>
                                <span className="text-[10px] text-slate-500 block leading-snug">
                                  <strong>Requerido:</strong> {dayPaso.entregable}
                                </span>
                                {portfolioNotes[day.dia] && (
                                  <p className="text-[10px] italic text-slate-600 bg-slate-50 p-1.5 rounded border border-slate-150 mt-1">
                                    "Reflexión: {portfolioNotes[day.dia]}"
                                  </p>
                                )}
                              </td>
                              <td className="p-3 text-center align-middle">
                                {isDone ? (
                                  <span className="bg-emerald-50 text-emerald-800 border border-emerald-200 font-extrabold px-2.5 py-1 rounded text-[10px] inline-flex items-center gap-1">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                                    APROBADO
                                  </span>
                                ) : (
                                  <span className="bg-rose-50 text-rose-800 border border-rose-200 font-extrabold px-2.5 py-1 rounded text-[10px] inline-flex items-center gap-1">
                                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
                                    PENDIENTE
                                  </span>
                                )}
                              </td>
                              <td className="p-3 align-middle text-slate-600 font-mono text-[10px] break-all">
                                {fileName ? (
                                  <div className="flex items-center gap-1 text-slate-800 font-semibold">
                                    <span>📄</span>
                                    <span>{fileName}</span>
                                  </div>
                                ) : (
                                  <span className="text-slate-400 italic">No suministrado</span>
                                )}
                              </td>
                              <td className="p-3 align-middle">
                                {fileName ? (
                                  <div className="space-y-1.5">
                                    <a 
                                      href={customFileLink}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="inline-flex items-center gap-1 bg-blue-50 border border-blue-200 hover:bg-blue-100 text-blue-700 font-extrabold px-2.5 py-1 rounded text-[10px] transition-all cursor-pointer whitespace-nowrap shadow-xs"
                                    >
                                      <ExternalLink className="w-3 h-3" />
                                      Ver Archivo en Drive 🚀
                                    </a>
                                    <div className="text-[9px] text-slate-500 leading-tight">
                                      <span className="font-bold text-slate-600 uppercase block text-[8px]">Ubicación Física de Red:</span>
                                      <span className="font-mono block mt-0.5 leading-relaxed truncate max-w-[200px]" title={`Google Drive > ${personalFolder} > ${fileName}`}>
                                        Drive › {personalFolder} › {fileName}
                                      </span>
                                    </div>
                                  </div>
                                ) : (
                                  <span className="text-slate-400 italic text-[10px]">Sin enlace disponible</span>
                                )}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Verification Signatures and Legal Text */}
                <div className="pt-6 border-t border-slate-200 space-y-4">
                  <p className="text-[10px] text-slate-500 leading-relaxed text-center">
                    Este reporte unifica las evidencias obligatorias de acuerdo con la <strong>Circular 006 de 2016</strong> y valida el proceso formativo de inducción para dar de alta la matrícula formal del aprendiz en el sistema SOFIA PLUS del SENA.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 max-w-xl mx-auto text-center">
                    <div className="space-y-1 flex flex-col items-center">
                      <div className="font-mono text-xs text-slate-400 h-8 flex items-end">
                        {apprenticeName}
                      </div>
                      <div className="w-40 h-px bg-slate-300"></div>
                      <span className="font-bold text-slate-900 uppercase text-[9px]">Firma del Aprendiz</span>
                      <span className="text-[8px] text-slate-500 leading-none">Documento: {apprenticeDoc}</span>
                    </div>

                    <div className="space-y-1 flex flex-col items-center">
                      <div className="font-serif italic text-emerald-800 text-sm font-extrabold h-8 flex items-end">
                        Diego Fernando Villalba
                      </div>
                      <div className="w-40 h-px bg-slate-300"></div>
                      <span className="font-bold text-slate-900 uppercase text-[9px]">Sello de Validación y Control</span>
                      <span className="text-[8px] text-slate-500 leading-none">Subdirector de Centro</span>
                    </div>
                  </div>
                </div>

              </div>

            </div>

            {/* Footer buttons */}
            <div className="bg-slate-50 px-6 py-4 flex flex-wrap justify-between items-center border-t border-slate-200 gap-3 shrink-0">
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">
                Verificador de Conformidad de Inducción FPI v2026
              </span>

              <div className="flex gap-2 text-xs font-bold">
                <button
                  type="button"
                  onClick={() => {
                    const personalFolder = `${apprenticeLastName}, ${apprenticeFirstName} - Ficha ${apprenticeFichaState}`;
                    
                    let reportText = `========================================================================\n`;
                    reportText += `REPORTE OFICIAL DE PORTAFOLIO DE INDUCCIÓN FPI - SENA\n`;
                    reportText += `========================================================================\n\n`;
                    reportText += `DATOS DEL APRENDIZ:\n`;
                    reportText += `- Nombre Completo: ${apprenticeName}\n`;
                    reportText += `- Identificación: ${apprenticeDocType} (${apprenticeDoc})\n`;
                    reportText += `- Programa: ${apprenticeProgramState}\n`;
                    reportText += `- Ficha: ${apprenticeFichaState}\n`;
                    reportText += `- Fecha de Generación: ${new Date().toLocaleString('es-CO')}\n`;
                    reportText += `- Estado Consolidado: ${portfolioProgressCount === 5 ? 'COMPLETADO (Juicio: A)' : 'EN DESARROLLO (' + portfolioProgressCount + ' de 5)'}\n\n`;
                    reportText += `DESGLOSE DE ENTREGABLES:\n`;
                    
                    INDUCTION_DAYS.forEach(day => {
                      const isDone = portfolioCompleted[day.dia];
                      const fileName = uploadedFiles[day.dia];
                      const dayPaso = day.secuencia[1];
                      const fileLink = fileName 
                        ? `${googleDriveUrl}/${encodeURIComponent(personalFolder)}/${encodeURIComponent(fileName)}`
                        : 'SIN ENVIAR';
                      
                      reportText += `Día ${day.dia}: ${day.titulo}\n`;
                      reportText += `  - Entregable: ${dayPaso.entregable}\n`;
                      reportText += `  - Calificación: ${isDone ? 'APROBADO' : 'PENDIENTE'}\n`;
                      reportText += `  - Archivo: ${fileName || 'No suministrado'}\n`;
                      reportText += `  - Ubicación en Drive: ${fileLink}\n\n`;
                    });
                    
                    reportText += `========================================================================\n`;
                    reportText += `Generado por la Plataforma Curricular de Inducción FPI\n`;
                    reportText += `SENA - Dirección de Formación Profesional - Circular 006 de 2016\n`;
                    reportText += `========================================================================`;
                    
                    navigator.clipboard.writeText(reportText);
                    setCopiedReportText(true);
                    setTimeout(() => setCopiedReportText(false), 2500);
                  }}
                  className={`px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-1 cursor-pointer ${copiedReportText ? 'bg-emerald-600 text-white' : 'bg-slate-800 hover:bg-slate-700 text-white'}`}
                >
                  {copiedReportText ? '¡Copiado! ✓' : 'Copiar Reporte Texto 📋'}
                </button>

                <button
                  type="button"
                  onClick={() => {
                    window.print();
                  }}
                  className="px-5 py-2 bg-[#39A900] hover:bg-[#329600] text-white rounded-lg transition-all shadow-md flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Imprimir Reporte 🖨</span>
                </button>

                <button 
                  type="button"
                  onClick={() => setIsReportModalOpen(false)}
                  className="px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-700 rounded-lg transition-all cursor-pointer"
                >
                  Cerrar
                </button>
              </div>

            </div>
          </div>
        </div>
      )}

      {/* SIGN LANGUAGE (LSC) VIRTUAL INTERPRETER PANEL */}
      {isLscInterpreterOpen && (
        <div className="fixed bottom-6 right-6 z-50 max-w-sm w-full bg-white rounded-2xl shadow-2xl border border-indigo-200 overflow-hidden transform hover:scale-[1.01] transition-all flex flex-col animate-fade-in text-slate-850">
          {/* Header */}
          <div className="bg-indigo-950 text-white px-4 py-3 flex justify-between items-center border-b-2 border-indigo-600">
            <div className="flex items-center gap-2">
              <span className="text-base">🤟</span>
              <div>
                <h4 className="font-extrabold text-xs">Intérprete LSC Virtual</h4>
                <p className="text-[9px] text-indigo-300 font-medium">Lengua de Señas Colombiana (DUA)</p>
              </div>
            </div>
            <button
              onClick={() => setIsLscInterpreterOpen(false)}
              className="text-indigo-200 hover:text-white font-bold text-xs p-1 hover:bg-indigo-900 rounded-full transition-all cursor-pointer"
            >
              ✕
            </button>
          </div>

          {/* Interactive Screen */}
          <div className="p-4 space-y-3.5 bg-indigo-50/20">
            
            {/* Virtual Sign Video/SVG Area */}
            <div className="bg-slate-900 rounded-xl p-3 aspect-video flex flex-col items-center justify-center border-2 border-indigo-150 relative overflow-hidden shadow-inner">
              {/* Scanlines / Television Effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/5 to-transparent pointer-events-none z-10"></div>
              
              {selectedLscTerm ? (
                <div className="text-center space-y-1 z-10">
                  {LSC_GLOSSARY[selectedLscTerm]?.icon}
                  <p className="text-[10px] font-extrabold text-indigo-400 tracking-wider uppercase">
                    Haciendo seña: {selectedLscTerm}
                  </p>
                </div>
              ) : (
                <span className="text-slate-400 font-bold text-[10px]">Selecciona un término para iniciar</span>
              )}

              {/* Small Overlay badge */}
              <span className="absolute top-2 right-2 bg-emerald-500 text-white font-extrabold text-[8px] px-1.5 py-0.5 rounded shadow-xs">
                SENA • LSC
              </span>
            </div>

            {/* Glossary selector buttons */}
            <div className="space-y-1.5">
              <span className="text-[9px] font-bold text-slate-500 uppercase tracking-wider block">
                Diccionario de Términos FPI SENA:
              </span>
              <div className="flex flex-wrap gap-1">
                {Object.keys(LSC_GLOSSARY).map((termKey) => (
                  <button
                    key={termKey}
                    onClick={() => setSelectedLscTerm(termKey)}
                    className={`px-2 py-1 rounded text-[10.5px] font-extrabold transition-all cursor-pointer ${selectedLscTerm === termKey ? 'bg-indigo-600 text-white shadow-xs' : 'bg-slate-250 text-slate-700 hover:bg-slate-350'}`}
                  >
                    {termKey}
                  </button>
                ))}
              </div>
            </div>

            {/* Explanatory description card */}
            {selectedLscTerm && (
              <div className="bg-white p-3 rounded-lg border border-indigo-100 shadow-xs space-y-1">
                <span className="text-[9px] font-bold text-indigo-600 uppercase block">
                  Descripción Técnica de Gesto:
                </span>
                <p className="text-[10.5px] text-slate-700 leading-relaxed font-medium">
                  {LSC_GLOSSARY[selectedLscTerm]?.description}
                </p>
              </div>
            )}

            {/* In-Context DUA / ADDIE Help Footer */}
            <p className="text-[9.5px] text-slate-500 leading-relaxed text-center italic bg-slate-50 p-2 rounded-md border">
              Este recurso ayuda a asimilar las competencias y el vocabulario SENA a aprendices con hipoacusia o sordera profunda.
            </p>
          </div>
        </div>
      )}

    </div>
  );
}

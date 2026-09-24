import express from 'express';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());

// Initialize Gemini SDK with User-Agent header as required
const apiKey = process.env.GEMINI_API_KEY;
const ai = new GoogleGenAI({
  apiKey: apiKey || '',
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    }
  }
});

// API endpoint for AI-assisted curriculum customization
app.post('/api/generate-case', async (req, res) => {
  try {
    const { program, topic, modality } = req.body;
    if (!program || !topic) {
      return res.status(400).json({ error: 'Faltan campos obligatorios: programa y tema.' });
    }

    if (!apiKey) {
      return res.status(500).json({ error: 'La clave GEMINI_API_KEY no está configurada en el servidor.' });
    }

    const systemInstruction = `Actúas como asesor pedagógico experto en la Formación Profesional Integral (FPI) del SENA (Colombia) y especialista en el Reglamento del Aprendiz (Acuerdo 007 de 2012). Tu objetivo es generar un caso de estudio real, formativo y adaptado para la semana de inducción, contextualizado en el programa de formación y tema indicado.`;

    const prompt = `Genera un caso práctico detallado para la inducción del programa de formación "${program}" sobre el tema "${topic}" (considerando la modalidad ${modality || 'Dual'}). El caso debe seguir la estructura:
1. Título del Caso (Llamativo e institucional)
2. Contexto del Programa (Cómo se aplica este tema al quehacer diario de este programa en particular)
3. Situación Problemática (Una narrativa de 2-3 párrafos donde un aprendiz cometa una falta o se enfrente a un dilema ético/académico/comunitario real en el SENA)
4. Artículos Clave del Reglamento Aplicables (Menciona artículos específicos del Acuerdo 007 de 2012 que se relacionan con deberes, derechos, prohibiciones o trámites)
5. Preguntas de Reflexión (3 preguntas desafiantes para que los aprendices debaten de forma grupal o virtual en Zajuna)
6. Reto Gamificado Propuesto (Una propuesta de mecánica de gamificación -ej. juego de roles, debate, escape room, trivia- para evaluar de forma formativa este caso sin fricción)

Responde en formato JSON con la siguiente estructura:
{
  "title": "string",
  "context": "string",
  "situation": "string",
  "articles": "string",
  "questions": ["string", "string", "string"],
  "gamifiedChallenge": "string"
}`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: prompt,
      config: {
        systemInstruction,
        responseMimeType: 'application/json',
        temperature: 0.7,
      }
    });

    const text = response.text;
    if (!text) {
      throw new Error('No se recibió respuesta de Gemini.');
    }

    const result = JSON.parse(text.trim());
    res.json(result);
  } catch (error: any) {
    console.error('Error generando caso con Gemini:', error);
    res.status(500).json({ error: error.message || 'Error interno del servidor al conectar con la IA.' });
  }
});

// API endpoint for real-time translation using Gemini AI
app.post('/api/translate', async (req, res) => {
  try {
    const { text, targetLang } = req.body;
    if (!text || !targetLang) {
      return res.status(400).json({ error: 'Faltan campos obligatorios: text y targetLang.' });
    }

    if (!apiKey) {
      return res.json({ translation: `[Offline Fallback - no api key] ${text}` });
    }

    const systemInstruction = `Actúas como un traductor profesional del SENA (Servicio Nacional de Aprendizaje). Traduce el texto provisto con precisión técnica y profesional al idioma ${targetLang === 'en' ? 'Inglés' : 'Francés'}. Conserva los términos pedagógicos de la FPI. Devuelve únicamente el texto traducido de forma directa, sin explicaciones ni comillas iniciales o finales.`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: `Traduce la siguiente frase al ${targetLang === 'en' ? 'Inglés' : 'Francés'}: "${text}"`,
      config: {
        systemInstruction,
        temperature: 0.3,
      }
    });

    const translatedText = response.text?.trim() || '';
    res.json({ translation: translatedText });
  } catch (error: any) {
    console.error('Error de traducción en Gemini:', error);
    res.status(500).json({ error: error.message || 'Error al traducir el texto.' });
  }
});

// Serve frontend: mount Vite in dev mode, or serve dist in production
const isProd = process.env.NODE_ENV === 'production' || fs.existsSync(path.resolve(__dirname, 'dist'));

if (!isProd) {
  // We are in development
  const { createServer: createViteServer } = await import('vite');
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'custom',
  });
  app.use(vite.middlewares);
  
  app.use('*', async (req, res, next) => {
    const url = req.originalUrl;
    try {
      let template = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8');
      template = await vite.transformIndexHtml(url, template);
      res.status(200).set({ 'Content-Type': 'text/html' }).end(template);
    } catch (e) {
      vite.ssrFixStacktrace(e as Error);
      next(e);
    }
  });
} else {
  // Serve static files in production
  app.use(express.static(path.resolve(__dirname, 'dist')));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'dist/index.html'));
  });
}

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

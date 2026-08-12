import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json({ limit: '15mb' }));
  app.use(express.urlencoded({ extended: true, limit: '15mb' }));

  // Health check endpoint
  app.get("/api/health", (_req, res) => {
    res.json({ status: "ok", church: "Canaan New Life Christian Church" });
  });

  // PDF Bulletin Parser using Gemini AI (Direct Upload or Email Webhook)
  app.post("/api/process-bulletin-pdf", async (req, res) => {
    try {
      const { pdfBase64, emailSubject } = req.body;
      const apiKey = process.env.GEMINI_API_KEY;

      if (!pdfBase64) {
        return res.status(400).json({ error: "Missing PDF data" });
      }

      if (!apiKey) {
        return res.status(500).json({ error: "GEMINI_API_KEY environment variable is missing" });
      }

      const ai = new GoogleGenAI({ apiKey });
      const promptText = `You are a church bulletin parsing expert.
Analyze the attached PDF church bulletin for Canaan New Life Christian Church (加南新生基督教會) and extract all the structured data into JSON format.

Return ONLY a raw JSON object with the following structure:
{
  "serviceDate": "e.g. 2026-08-09",
  "presider": "e.g. 鄭育青 弟兄",
  "speaker": "e.g. 孟蘇倫 牧師",
  "sermonTitle": "e.g. 人生真的轉眼成空嗎？",
  "sermonScripture": "e.g. 傳道書第 1 章第 2-3 節",
  "memoryVerse": "e.g. 你們要先求他的國和他的義，這些東西都要加給你們了。（馬太福音 6:33）",
  "memoryVerseRef": "e.g. 馬太福音 6:33",
  "nextWeekPresider": "e.g. 鄭育青 弟兄",
  "nextWeekSpeaker": "e.g. Ito 傳道",
  "bibleReadingPlan": [
    { "date": "8/10", "oldTestament": "詩 79-80", "newTestament": "羅 11:1-18" }
  ],
  "announcements": [
    "e.g. 感謝孟牧師今天帶來的信息..."
  ],
  "prayerItems": [
    "e.g. 為教會冷氣安裝工程守望..."
  ]
}

Ensure valid JSON with no markdown wrapping or code blocks if possible.`;

      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: [
          {
            role: 'user',
            parts: [
              {
                inlineData: {
                  mimeType: 'application/pdf',
                  data: pdfBase64.replace(/^data:application\/pdf;base64,/, '')
                }
              },
              { text: promptText }
            ]
          }
        ]
      });

      let jsonText = response.text || "";
      jsonText = jsonText.replace(/```json/g, '').replace(/```/g, '').trim();

      try {
        const parsedData = JSON.parse(jsonText);
        return res.json({ success: true, data: parsedData, subject: emailSubject || "Website Bulletin Update" });
      } catch (parseErr) {
        return res.json({ success: true, rawText: response.text, subject: emailSubject || "Website Bulletin Update" });
      }

    } catch (err: any) {
      console.error("PDF Processing Error:", err);
      res.status(500).json({ error: err.message || "Failed to process PDF bulletin" });
    }
  });

  // Webhook endpoint for automated inbound emails (SendGrid, Mailgun, AWS SES, Postmark, etc.)
  app.post("/api/webhook/email-bulletin", async (req, res) => {
    try {
      const subject = req.body?.subject || req.body?.['headers']?.['subject'] || "website update";
      const sender = req.body?.from || req.body?.sender || "web@canaannewlife.org";

      console.log(`[Email Webhook] Received email from ${sender} with subject: "${subject}"`);

      // Respond immediately to webhook provider
      res.status(200).json({
        status: "received",
        message: `Email received from ${sender}. Bulletin PDF parser triggered.`,
        targetEmail: "web@canaannewlife.org",
        subjectFilter: "website update"
      });
    } catch (err: any) {
      res.status(500).json({ error: err.message });
    }
  });

  // AI Pastoral Assistant & Bible Helper endpoint
  app.post("/api/pastoral-ai", async (req, res) => {
    try {
      const { prompt, topic, language } = req.body;
      const apiKey = process.env.GEMINI_API_KEY;

      if (!apiKey) {
        return res.status(200).json({
          reply: language === 'zh'
            ? "感謝您的查詢。願神賜福給您！『主是我的牧者，我必不至缺乏。』（詩篇 23:1）加南新生基督教會歡迎您本週日上午11:00與我們一起崇拜！"
            : "Thank you for reaching out! May God bless you abundantly. 'The LORD is my shepherd; I shall not want.' (Psalm 23:1). Canaan New Life Christian Church welcomes you to join us this Sunday at 11:00 AM!"
        });
      }

      const ai = new GoogleGenAI({ apiKey });
      const model = "gemini-2.5-flash";

      const systemInstruction = `You are a warm, encouraging, and biblically grounded pastoral assistant for Canaan New Life Christian Church (加南新生基督教會 - Canaan Shin Sheng Christian Church), located in Harbor City, CA.
Church status: Independent Nondenominational Christian Church (獨立基督教會), established 1984.
Church leadership: Led by the board of elders and deacons (萬四長老、張文辛長老、馬新民執事) and pastoral/presiding team (Guest Preacher Rev. Meng Sulun 孟蘇倫牧師, Evangelist Ito Ito傳道, Presider Brother Zheng Yuqing 鄭育青弟兄). There is no senior pastor.
Address: 25226 S. Western Ave, Harbor City, CA 90710.
Sunday Schedule: Sunday School at 10:00 AM, Sunday Worship at 11:00 AM, Fellowship Lunch at 12:30 PM, Choir Practice at 1:00 PM.
Thursday Online Prayer Meeting at 8:00 PM (Zoom ID: 8927547290, Passcode: 25226).

When responding:
- Keep the tone encouraging, respectful, comforting, and grounded in Christian Scripture.
- If the language parameter is 'zh' or the prompt contains Chinese characters, respond in warm Traditional Chinese (繁體中文).
- If the language parameter is 'en', respond in clear English.
- Provide relevant Bible verse references (e.g. NIV / CUV) where applicable.
- Briefly mention how Canaan New Life Christian Church is here to pray for them and welcome them to Sunday worship.`;

      const response = await ai.models.generateContent({
        model,
        contents: [
          { role: 'user', parts: [{ text: `${systemInstruction}\n\nUser Question/Request (${topic || 'General'}): ${prompt}` }] }
        ]
      });

      const replyText = response.text || (language === 'zh' ? '願上帝平安與您同在！' : 'May the peace of God be with you!');
      res.json({ reply: replyText });
    } catch (error) {
      console.error("Gemini API error:", error);
      res.status(200).json({
        reply: req.body?.language === 'zh'
          ? "『應當一無掛慮，只要凡事藉著禱告、祈求，和感謝，將你們所要的告訴神。神所賜、超越人所能理解的平安，必在基督耶穌裡保守你們的心懷意念。』（腓立比書 4:6-7）加南新生基督教會全體同工為您禱告！"
          : "'Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God. And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus.' (Philippians 4:6-7). Canaan New Life Christian Church is praying for you!"
      });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Canaan New Life Church server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();

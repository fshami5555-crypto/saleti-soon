
import { GoogleGenAI } from "@google/genai";

// Always use const ai = new GoogleGenAI({apiKey: process.env.API_KEY});
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getGeminiResponse = async (userMessage: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userMessage,
      config: {
        systemInstruction: `
          أنت المساعد الذكي لموقع "سلتي" (Saleti Web). 
          الموقع حالياً تحت الصيانة والتطوير لتقديم تجربة تسوق أفضل.
          كن ودوداً، احترافياً، ومتفائلاً.
          أخبر العملاء أننا نعمل بجد لنعود إليهم قريباً جداً بميزات جديدة ومنتجات مميزة.
          إذا سألوا عن موعد الإطلاق، قل "خلال الأيام القليلة القادمة".
          استخدم اللغة العربية الفصحى أو لهجة خليجية بيضاء مهذبة.
        `,
        temperature: 0.7,
      },
    });
    // The GenerateContentResponse object features a text property (not a method).
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "نعتذر، حدث خطأ أثناء معالجة طلبك. نحن نعمل على العودة قريباً!";
  }
};

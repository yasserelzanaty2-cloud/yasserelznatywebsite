import { GoogleGenAI } from "@google/genai";
import { BioFormData } from '../types';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateProfessionalBio = async (data: BioFormData): Promise<string> => {
  if (!process.env.API_KEY) {
    return "خطأ: مفتاح API غير موجود. يرجى التأكد من إعداد البيئة بشكل صحيح.";
  }

  const prompt = `
    أنت كاتب محتوى محترف متخصص في صياغة الملفات الشخصية (Portfolios).
    مهمتك هي إعادة صياغة المعلومات التالية لإنتاج قسم "عني" (About Me) احترافي جداً باللغة العربية.
    
    يجب أن تطبق القواعد التالية بدقة متناهية لضمان الجودة:
    1. مَن أنا: توضيح الهوية باختصار.
    2. ماذا أقدم: توضيح الخدمة الأساسية.
    3. لِمَن: تحديد الجمهور المستهدف بوضوح.
    4. التميز (USP): إبراز ما يجعل الشخص مختلفاً.
    5. الخبرة والأرقام: ذكر الإنجازات مدعومة بالأرقام والنتائج.
    6. القصة والسمات: سرد مهني بلمسة شخصية إنسانية.
    7. التنسيق: فقرات مترابطة ومنظمة تحتوي على كلمات مفتاحية قوية.
    8. المراجعة: لغة عربية فصحى سليمة، جذابة، وخالية من الأخطاء.
    9. الختام (Call to Action): دعوة واضحة وذكية للتواصل.

    المعلومات المدخلة من المستخدم:
    - الهوية: ${data.identity}
    - الخدمة: ${data.service}
    - الجمهور: ${data.targetAudience}
    - التميز: ${data.usp}
    - الخبرة والأرقام: ${data.experience}
    - القصة الشخصية: ${data.story}

    المطلوب:
    اكتب نصاً متماسكاً وجذاباً في حدود 8 أسطر تقريباً يجمع هذه العناصر بانسيابية. لا تضع العناوين الفرعية (مثل "من أنا:") بل اجعله نصاً سردياً متصلاً ومقسماً لفقرات ذكية.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        thinkingConfig: { thinkingBudget: 0 }, // Minimize latency
        temperature: 0.7,
      }
    });

    return response.text || "عذراً، لم أتمكن من إنشاء النص. حاول مرة أخرى.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "حدث خطأ أثناء الاتصال بالذكاء الاصطناعي. يرجى التحقق من الاتصال والمحاولة لاحقاً.";
  }
};
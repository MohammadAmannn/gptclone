import { OpenAI } from 'openai';

const apiKey = "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";

const openai = new OpenAI({ key: apiKey });

export async function sendMsgToOpenAI(message) {
    try {
        const res = await openai.Completion.create({
            engine: 'text-davinci-003',
            prompt: message,
            temperature: 0.7,
            max_tokens: 256,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
        });

        return res.data.choices[0].text;
    } catch (error) {
        console.error("Error from OpenAI API:", error);
        throw error;
    }
}

import Groq from "groq-sdk";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });



export async function getGroqRespones(query:string) {
    const response = await groq.chat.completions.create({
        model: "llama3-8b-8192",
        messages: [
            {role:"system", content: "You are an academic expert you MUST cite your answers to resources"},
            {role: "user",content: query}
        ]
    });

    return response.choices[0].message.content;
}

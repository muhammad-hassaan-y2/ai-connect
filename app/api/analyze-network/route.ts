import { Configuration, OpenAIApi } from "openai-edge";

const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(config);

export const runtime = "edge";

export async function POST(req: Request) {
  const { input } = await req.json();

  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content:
          "You are an AI expert in network analysis. Provide insights and potential solutions based on the given network information or logs.",
      },
      { role: "user", content: input },
    ],
    stream: true,
  });

  const reader = response.body?.getReader();
  const decoder = new TextDecoder();
  const encoder = new TextEncoder();

  const stream = new ReadableStream({
    async start(controller) {
      while (true) {
        const { done, value } = await reader?.read() ?? {};
        if (done) break;

        const decoded = decoder.decode(value, { stream: true });
        controller.enqueue(encoder.encode(decoded));
      }
      controller.close();
    },
  });

  return new Response(stream, {
    headers: { "Content-Type": "text/event-stream" },
  });
}

import { CopilotBackend, OpenAIAdapter } from "@copilotkit/backend";
import OpenAI from "openai";
export const runtime = "edge";
export async function POST(req: Request, res: any) {
  try {
    const copilotKit = new CopilotBackend();
    const openai = new OpenAI({
      apiKey: import.meta.env.VITE_OPENAI_KEY,
      baseURL: "https://api.naga.ac/v1", // Change according to youuu
    });
    // const RES = await copilotKit.response(
    //   req,
    //   new OpenAIAdapter({
    //     openai,
    //   })
    // );
    // console.log(RES)
    await copilotKit.streamHttpServerResponse(req, res, new OpenAIAdapter({
      openai
    }), {
      // make sure to modify CORS headers to match your frontend's origin
      "Access-Control-Allow-Origin": "http://localhost:3000",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE",
      "Access-Control-Allow-Headers": "X-Requested-With,content-type",
    }).catch(e => {
      res.send(e.message);
    })
    // return new Response("hi")
  } catch (e: any) {
    res.send(e.message);
  }
}

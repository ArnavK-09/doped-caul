/**
 * Imports
 */
import OpenAI from "openai";
import express from "express";
import process from "process";
import "dotenv/config";

/**
 * New Server Creation
 */
export const server = express();

/**
 * Extras
 */
server.use(express.json());
server.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "<your app url>");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

/**
 * Meta variables
 */
export const PORT = 6969;
export const runtime = "edge";

/**
 * New openai client creation
 */
const openai = new OpenAI({
  apiKey: process.env.OPENAI_KEY,
  baseURL: "https://api.naga.ac/v1", // Change according to you
});

/**
 * Hello world!
 */
server.get("/", (_, res) => {
  res.send(`Hello, World!`);
});

/**
 * Adding copilotkit backend fnctionality
 */
server.post("/", async (req, res) => {
  const stream = openai.beta.chat.completions.stream({
    model: "gpt-3.5-turbo",
    temperature: 0.5,
    messages: req.body.messages,
  });
  res.header("Content-Type", "text/plain");
  for await (const chunk of stream.toReadableStream()) {
    res.write(chunk);
  }
  res.end();
});

/**
 * Starting server
 */
server.listen(PORT, () =>
  console.log("[BACKEND] Copilot server started on port ", PORT)
);

/**
 * Error catch
 */
process.on("unhandledRejection", (e) => console.error(e));

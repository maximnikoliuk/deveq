import { ChatGPTAPI } from "chatgpt";

export const api = new ChatGPTAPI({
  // apiKey: process.env.OPENAI_API_KEY
  apiKey: "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",
  fetch: window.fetch.bind(this),
});

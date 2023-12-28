import { ChatGPTAPI } from "chatgpt";

export const api = new ChatGPTAPI({
  // apiKey: process.env.OPENAI_API_KEY
  apiKey: "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",
  fetch: window.fetch.bind(this),
});

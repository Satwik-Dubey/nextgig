import { Inngest } from "inngest";

export const inngest = new Inngest({
  id: "NextGig", // Unique app ID
  name: "NextGig",
  credentials: {
    gemini: {
      apiKey: process.env.GEMINI_API_KEY,
    },
  },
});
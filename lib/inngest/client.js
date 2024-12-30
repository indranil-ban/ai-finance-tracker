import { Inngest } from "inngest";

export const inngest = new Inngest({
  id: "cashcompass", // Unique app ID
  name: "Cash Compass",
  retryFunction: async (attempt) => ({
    delay: Math.pow(2, attempt) * 1000, // Exponential backoff
    maxAttempts: 2,
  }),
});

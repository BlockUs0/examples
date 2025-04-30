import { env } from "./env";
import { createBlockusClient } from "@blockus0/sdk";

const API_KEY = env.API_KEY;

export const blockusClient = createBlockusClient({
  apiKey: API_KEY,
});

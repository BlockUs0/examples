import { z } from "zod";
import "dotenv/config";

export const envSchema = z.object({
  API_KEY: z.string().nonempty(),
  PROJECT_ID: z.string().nonempty(),
  PLAYER_ID: z.string().nonempty(),
});

export const env = envSchema.parse(process.env);

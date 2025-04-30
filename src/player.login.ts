import { createBlockusClient } from "@blockus0/sdk";
import { env } from "./env";

const API_KEY = env.API_KEY;
const PROJECT_ID = env.PROJECT_ID;
const playerId = env.PLAYER_ID;

export async function loginPlayer(): Promise<string> {
  // Step 1: Create BlockusClient using your apiKey and project ID from Blockus.
  const blockusClient = createBlockusClient({
    apiKey: API_KEY,
  });

  // Step 2: Create a player.
  // We recommend to replace `playerId` with your internal DB user ID.
  const player = await blockusClient.loginPlayer(PROJECT_ID, playerId);

  // Step 3: Extract the Player Access Token.
  const { accessToken } = player;

  // Step 4: Use the Player Access Token to interact with the Players APIs.
  const playerInfo = await blockusClient.getPlayerInfo(accessToken);

  console.log(playerInfo);
  /*
  {
    createdAt: Date,
    loginMethod: 'api',
    externalId: string;
    userId: string;
    projectId: string;
  }
  */

  return accessToken;
}

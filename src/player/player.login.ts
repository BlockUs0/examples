import { env } from "../env";
import { blockusClient } from "../setup";

const playerId = env.PLAYER_ID;
const projectId = env.PROJECT_ID;

export async function loginPlayer(): Promise<string> {
  // We recommend to replace `playerId` with your internal DB user ID.
  const player = await blockusClient.loginPlayer(projectId, playerId);

  const { accessToken } = player;

  return accessToken;
}

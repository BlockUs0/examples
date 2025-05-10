import { env } from "../env";
import { blockusClient } from "../setup";

const playerId = env.PLAYER_ID;
const projectId = env.PROJECT_ID;

/*
  You can add some custom metadata inside our access token.
  It may be useful for some validations in the backend side.
*/
const metadata = {
  walletAddress: "<SOME_ADDRESS>",
};

export async function loginPlayer(): Promise<string> {
  // We recommend to replace `playerId` with your internal DB user ID.
  const player = await blockusClient.loginPlayer(projectId, playerId, metadata);

  const { accessToken } = player;

  console.log(accessToken);

  return accessToken;
}

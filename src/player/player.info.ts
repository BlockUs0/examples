import { blockusClient } from "../setup";

export async function getPlayerInfo(accessToken: string): Promise<void> {
  // We recommend to replace `playerId` with your internal DB user ID.
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
}

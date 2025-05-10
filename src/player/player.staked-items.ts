import { blockusClient } from "../setup";

export async function getStakedItems(accessToken: string): Promise<void> {
  const stakedItems = await blockusClient.getStakedItems(accessToken);

  console.log(stakedItems);
  /*

  */
}

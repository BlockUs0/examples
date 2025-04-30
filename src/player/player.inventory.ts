import { blockusClient } from "../setup";

export async function getPlayerInventory(accessToken: string): Promise<void> {
  const inventory = await blockusClient.getPlayerInventory(accessToken);

  console.log(inventory);
  console.log(
    `Minted Items: ${
      inventory.items.filter((i) => i.status === "minted").length
    }`
  );
  console.log(
    `Staked Items: ${
      inventory.items.filter((i) => i.status === "staked").length
    }`
  );
  /*
    {
      items: [
        {
          id: string;
          status: 'staked' | 'minted';
          walletAddress: string;
          txHash: string;
          chain: 'mainnet'; // 'mainnet' = Ethereum
          timestamp: Date
        },
    }
  */
}

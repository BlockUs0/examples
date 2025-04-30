import { blockusClient } from "../setup";

export async function getPlayerInventory(accessToken: string): Promise<void> {
  const inventory = await blockusClient.getPlayerInventory(accessToken);

  console.log(inventory);
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

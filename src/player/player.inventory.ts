import { blockusClient } from "../setup";

export async function getPlayerInventory(accessToken: string): Promise<void> {
  const playerInventory = await blockusClient.getPlayerInventory(accessToken);

  console.log(playerInventory);
  /*
    {
        items: [
            {
            id: 'e09ed451-9b2a-4485-a3de-8503ef920ebd',
            status: 'minted',
            walletAddress: '0x',
            txHash: '0x',
            chain: 'mainnet',
            timestamp: 1747040754338,
            tokenId: '10',
            collectionContractAddress: '0xb8D1de4219B750C51c0fCFd02A6d138D0589619B'
            }
        ]
    }
  */
}

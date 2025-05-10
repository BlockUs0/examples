import { blockusClient } from "../setup";

export async function getStakedItems(accessToken: string): Promise<void> {
  const stakedItems = await blockusClient.getStakedItems(accessToken);

  console.log(stakedItems);
  /*
  [  
    {
      id: '814a0234-184b-48fc-bb71-f5e2a6d1a440',
      userId: '2aa10c73-068a-43f3-bc97-a7a0a1c5669d',
      collectionContractAddress: '0xb8D1de4219B750C51c0fCFd02A6d138D0589619B',
      tokenId: '1',
      chain: 'mainnet',
      walletAddress: '0x71B81e78F08c3f2d799e3C1d5D4cE877ab0c8804',
      timestamp: '1745884286961',
      stakeProof: {
        type: 'evm',
        txHash: '0x5cf268e0f4cee08dbb47a3272dce151cd0c2b8eb537d811d18f4af76ba57e514'
      },
      verified: false,
      label: '1',
      status: 'PENDING',
      stakeStatus: 'staked',
      createdAt: '2025-04-28T20:51:27.000Z',
      updatedAt: '2025-04-28T20:51:27.000Z',
      deletedAt: null
    }
  ]
  */
}

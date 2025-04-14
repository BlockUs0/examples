import { createBlockusClient } from "@blockus0/sdk";

const API_KEY = "<API_KEY>";
const PROJECT_ID = "<PROJECT_ID>";
const BASE_URL = "<BASE_URL>";

async function createPlayer() {
  // Step 1: Create BlockusClient using your apiKey and project ID from Blockus.
  const blockusClient = createBlockusClient({
    apiKey: API_KEY,
    baseUrl: BASE_URL,
  });

  // Step 2: Create a player.
  // We recommend to replace `<Player ID>` with your internal DB user ID.
  const player = await blockusClient.loginPlayer(PROJECT_ID, "<Player ID>");

  // Step 3: Extract the Player Access Token.
  const { accessToken } = player;

  // Step 4: Use the Player Access Token to interact with the Players APIs.
  const playerInfo = await blockusClient.getPlayerInfo(accessToken);

  console.log(playerInfo);
}

createPlayer();

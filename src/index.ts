import { getPlayerInfo } from "./player/player.info";
import { getPlayerInventory } from "./player/player.inventory";
import { loginPlayer } from "./player/player.login";

async function main() {
  const accessToken = await loginPlayer();

  await getPlayerInfo(accessToken);

  await getPlayerInventory(accessToken);
}

main();

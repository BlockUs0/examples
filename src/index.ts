import { getPlayerInfo } from "./player/player.info";
import { getPlayerInventory } from "./player/player.inventory";
import { loginPlayer } from "./player/player.login";
import { getStakedItems } from "./player/player.staked-items";

async function main() {
  const accessToken = await loginPlayer();

  await getPlayerInfo(accessToken);

  await getStakedItems(accessToken);

  await getPlayerInventory(accessToken);
}

main();

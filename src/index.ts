import { getPlayerInfo } from "./player/player.info";
import { loginPlayer } from "./player/player.login";
import { getStakedItems } from "./player/player.staked-items";

async function main() {
  const accessToken = await loginPlayer();

  await getPlayerInfo(accessToken);

  await getStakedItems(accessToken);
}

main();

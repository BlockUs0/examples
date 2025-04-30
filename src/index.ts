import { loginPlayer } from "./player.login";

async function main() {
  const accessToken = await loginPlayer();

  console.log(accessToken);
}

main();

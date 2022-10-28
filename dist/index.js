import beautify from "js-beautify";
import fs from "fs";
import fetch from "node-fetch";
import { lastGameStatus, getPatchedGameFile } from "./util.js";
import { VERSION, UNMINIFY_SOUCE, dirname, GUI_LINK } from "./constants.js";
import hash from "./hash.js";
import path from "path";
const gs = lastGameStatus;
if (!gs) {
    throw new Error("The game status request failed.");
}
try {
    fs.mkdirSync(path.join(dirname, "docs"));
}
catch (e) { }
fs.writeFileSync(path.join(dirname, "docs", "game.min.js"), `// game.min.js v${gs.gameClientVersion}\n\n` +
    (UNMINIFY_SOUCE ? beautify : (_) => _)(await getPatchedGameFile(gs.gameClientVersion)));
fs.writeFileSync(path.join(dirname, "docs", "version"), VERSION);
fs.writeFileSync(path.join(dirname, "docs", "version"), VERSION);
fs.writeFileSync(path.join(dirname, "docs", "gui"), (await (await fetch(GUI_LINK)).text()));
fs.writeFileSync(path.join(dirname, "docs", "gameVersion"), gs.gameClientVersion);
fs.writeFileSync(path.join(dirname, "docs", "hash"), hash(`// game.min.js v${gs.gameClientVersion}\n\n` +
    (UNMINIFY_SOUCE ? beautify : (_) => _)(await getPatchedGameFile(gs.gameClientVersion))));
fs.writeFileSync(path.join(dirname, "docs", "index.html"), `<!DOCTYPE html>
		<html>
			<head>
				<title>Prodigy Game Patcher</title>
				<meta charset="utf-8" />
				<link rel="icon" type="image/png" href="https://raw.githubusercontent.com/ProdigyPNP/ProdigyMathGameHacking/master/.github/PTB.png"/>
			</head>	
			<body>
				<h1>Prodigy Gamefile Patcher</h1>
				<p>This is a tool for patching the game.min.js file of the Prodigy Game client.</p>
			</body>	
		</html>`);
//# sourceMappingURL=index.js.map
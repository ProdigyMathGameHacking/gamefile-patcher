import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";


/** Insert your own developer cheat menu here, if not it'll default to cheatGUI.
 * CAUTION: Only use cheat menus you completely trust. Cheat menus have complete JavaScript eval access. */
export const GUI_LINK : string = "" || "https://raw.githubusercontent.com/ProdigyPNP/ProdigyMathGameHacking/master/cheatGUI/dist/bundle.js";

/** If you want to cache cheatGUI history, set this to true.
 * CAUTION: This may use lots of memory, and slow down P-NP. */
export const GUI_HISTORY : boolean = false;

/** Insert your own PHEx download link here, if not it'll default to the PHEx on the official GitHub repo.
 * CAUTION: Only use PHEx downloads you completley trust. PHEx downloads have complete browser extension access. */
export const DOWNLOAD_LINK : string = "" || "https://raw.githubusercontent.com/ProdigyPNP/ProdigyMathGameHacking/master/PHEx/build/extension.zip";

/** Insert your own license link here, if not it'll default to the PHEx on the official GitHub repo.
 * CAUTION: Only use license links you completley trust. Please note that this URL must lead to a copy of the MPL-2.0 license of ProdigyPNP. */
export const LICENSE_LINK : string = "" || "https://github.com/ProdigyPNP/ProdigyMathGameHacking/blob/master/LICENSE.txt";

/** If you want to unminify game.min.js before it is outputted to the browser, set this to true.
 * CAUTION: This is not recommended, as it will increase the size of the game.min.js file. Use only for debugging. */
export const UNMINIFY_SOUCE : boolean = false;

/** Directory name */
export const dirname : string = path.resolve(fileURLToPath(import.meta.url), "../..");

/** Insert your own PHEx version here, if not P-NP will default to the one of the package.
 * CAUTION: PHEx will prompt to update if the version does not math this one's version. */
 export const VERSION : string = JSON.parse(fs.readFileSync(path.join(dirname, "package.json"), "utf8"))["version"];

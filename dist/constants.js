import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
export const GUI_LINK = "" || "https://raw.githubusercontent.com/ProdigyPNP/ProdigyMathGameHacking/master/cheatGUI/dist/bundle.js";
export const GUI_HISTORY = false;
export const DOWNLOAD_LINK = "" || "https://raw.githubusercontent.com/ProdigyPNP/ProdigyMathGameHacking/master/PHEx/build/extension.zip";
export const LICENSE_LINK = "" || "https://github.com/ProdigyPNP/ProdigyMathGameHacking/blob/master/LICENSE.txt";
export const UNMINIFY_SOUCE = false;
export const dirname = path.resolve(fileURLToPath(import.meta.url), "../..");
export const VERSION = JSON.parse(fs.readFileSync(path.join(dirname, "package.json"), "utf8"))["version"];
//# sourceMappingURL=constants.js.map
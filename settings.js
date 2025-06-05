const fs = require("fs");
const chalk = require("chalk")


global.pairingCode = "628386087723"

//~~~~~Setting Global~~~~~//

global.owner = ["6281936513894"] // Nomor Pemilik
global.bot = "628386087723" // Nomor Bot
global.namabot = "AteusCrasher Via Wa V1" // Nama Bot
global.namaown = "Always Hanzz" // Nama owner

let file = require.resolve(__filename);
fs.watchFile(file, () => {
    fs.unwatchFile(file);
    console.log(chalk.cyan("Update > "),
        chalk.black.bgBlue.bold(`${__filename}`));
    delete require.cache[file];
    require(file);
});

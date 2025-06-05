/* 

 • Credits : Always Hanzz
 • Base : Skyzopedia
 • Contact : https://wa.me/6281936513894
 • Channel WhatsApp : https://whatsapp.com/channel/0029VbAn30eEAKW7LciEAl3C
 
*/

const fs = require("fs");
const chalk = require("chalk")

//======Setting Pairing Code====//
global.pairingCode = "628386087723"

//==== Waktu Jeda Jpm & Pushkon ====//
global.delaypushkontak = 9000
global.delayjpm = 8000

//======Setting Owner======//
global.owner = "6281936513894"
global.namaOwner = "HanzzForrAbell"

//=====Setting Payment====//
global.dana = "083822176542"
global.ovo = "083144115086"
global.gopay = "Tidak Ada Payment Gopay"
global.qris = "https://i.ibb.co.com/5WV1PWZW/Qris.jpg"

let file = require.resolve(__filename);
fs.watchFile(file, () => {
    fs.unwatchFile(file);
    console.log(chalk.cyan("Update > "),
        chalk.black.bgBlue.bold(`${__filename}`));
    delete require.cache[file];
    require(file);
});
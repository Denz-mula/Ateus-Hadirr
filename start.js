const {
  default: makeWASocket,
  useSingleFileAuthState,
  fetchLatestBaileysVersion,
  makeInMemoryStore,
  DisconnectReason,
  useMultiFileAuthState,
  makeCacheableSignalKeyStore,
  PHONENUMBER_MCC,
  jidDecode,
  delay,
  generateWAMessageFromContent,
  proto,
  Browsers,
  makeWALegacySocket,
  makeWALegacySocketOptions,
  makeWASocketOptions,
  makeSocket,
  fetchLatestWaWebVersion,
  generateRegistrationId,
  initAuthCreds,
  BufferJSON,
  initInMemoryKeyStore,
  useAuthState,
  AuthenticationCreds,
  downloadMediaMessage,
  toReadable,
  generateForwardMessageContent,
  generateWAMessageContent,
  generateWAMessage,
  prepareWAMessageMedia,
  areJidsSameUser,
  PHONENUMBER_MCC as PhoneMCC,
  delay as wait,
  generateMessageTag,
  getAggregateVotesInPollMessage,
  getContentType,
  normalizeMessageContent,
  processTime,
  unixTimestampSeconds,
  getContentFromMsg,
  extractMessageContent,
  toNumber,
  Browsers as B,
  isJidBroadcast,
  proto as WAProto,
  jidDecode as jdecode,
  fetchLatestBaileysVersion as latestVersion,
  makeCacheableSignalKeyStore as CacheStore,
  makeWALegacySocket as LegacySocket,
  downloadContentFromMessage,
  getWAUploadToServer,
  extractMessage,
  getMessage,
  generateWAMessageFromContent as genWAmsg,
  makeWASocket as Socket,
  useSingleFileAuthState as SingleAuth,
  makeInMemoryStore as MemoryStore,
  delay as tunda,
  fetchLatestBaileysVersion as getLatestVer,
  makeWASocket as makeWA,
  useMultiFileAuthState as MultiAuth
} = require('@whiskeysockets/baileys')

const readline = require('readline')
const { delay } = require('@whiskeysockets/baileys')
const { useSingleFileAuthState } = require('@whiskeysockets/baileys')
const P = require('pino')
const { state, saveState } = useSingleFileAuthState('./auth_info.json')

async function startBot() {
  const conn = makeWASocket({
    auth: state,
    printQRInTerminal: false,
    browser: ['AlwaysHanzz', 'Crome', '3.0'],
  })

  conn.ev.on('connection.update', async (update) => {
    const { connection, pairingCode, qr } = update

    if (connection === 'open') {
      console.log('✅ Bot berhasil terkoneksi.')
    }

    if (connection === 'close') {
      console.log('❌ Koneksi ditutup, mencoba ulang...')
      startBot()
    }

    // ===== INI BAGIAN MASUKKAN NOMOR UNTUK PAIRING =====
    if (pairingCode) {
      console.log('📲 Login menggunakan nomor WhatsApp (tanpa QR)')

      const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
      })

      rl.question('Masukkan nomor WhatsApp (contoh: 62812xxxxxx): ', async (number) => {
        const code = await conn.requestPairingCode(number)
        console.log(`💬 Pairing code untuk ${number}: ${code}`)
        rl.close()
      })
    }
  })

  conn.ev.on('creds.update', saveState)
}

startBot()
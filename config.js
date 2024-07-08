//#ENJOY
/**
**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "";
global.location = "Sri lanka .";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "94789958225@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "srilank/ampara";
global.github = process.env.GITHUB || "https://github.com/DEXTER-BOTS/RCD-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vag1WQFJf05dF0pQeU3u";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vag1WQFJf05dF0pQeU3u";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "94789958225,94757660788,94770730717,94785274495";
global.owner = process.env.OWNER_NUMBER || "94789958225,94753574803";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "";
global.scan = "";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0hlcDlETFN6Ky9LN21BMEFaQ2xCcnhuNFo5VWF5K2RJL0Z3MkZUdkIyVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaEtZNk04cEVwbHNObEIzdFBDT1V6ZFdLamIzVHp5TWlyZURBU2VLR3EzND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFSzN4V1hHancwUFFIV2MrSi9FUmNMaE1BYmlQazEycGRuRXJ3dXYyUTE4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIxMFU3U01yb2lzZXF2dWlqOXp1NHVtdUlJalAwU0NQazNtbTZHOUdUZ2prPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBIRTIrQTRaUkJCenB5em5ZV2VZck9rdlJGdWFaeThyQkNPbkg1K2FHMk09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVQNFhGMHU1ODAyMFJYT3ZWUUtWaXJ0am5iUmdyYVpuOFhLcHM4Q0Ftd2M9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ1BVdEpIN2xhZndhNUZ4bzUyd2dWM1ZoMlpOcWhLQkwwSWU5czAyVTlIVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUQ3QnFuS2pKbkNPc0lLWlgya0tYSVhFcWtzUGk2dVRCK2ZpZkdYdG5uaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVQb0FKTVNNbXE5VkpsMk0ybkFpaWlrbUFYOU5uNTRYWWNwSmpPbUVxVGU0MklZUkNZNDZWN09SNEtwMHNtdjZRc3doTXBvV25EMENPVzQwOFIycUFBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MiwiYWR2U2VjcmV0S2V5IjoiekVWdm5FQnNKcXlaUnY5SkRaK0dnV1FTcTJVbDNNa1J0czgyTGtkWGNiYz0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoieXRHVXJyQjJSN1dpWlVkQkNZTElqUSIsInBob25lSWQiOiIzMjU3OTNhNC1mNGQzLTRiYzItOTgzYS1iZDFjN2U1YTFkZWUiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaTY4bUxxQ3YyNVd5dFN4aXRxdUhJcWl5dURJPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlkzdEl5ZWhpNjVZTnVwOWhEM29IYkUwaDZiQT0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJUNzlLMVRDWCIsIm1lIjp7ImlkIjoiOTQ3MjMwMzg3ODc6MzNAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi8J2Zj/CdmZ3wnZmW8J2Zp/CdmaogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDwnZmo8J2Zo/CdmZnwnZmlIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNLM0FucGtFRU1uaXI3UUdHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJLbHNJekYzVCt5YlYyQUFrTkJ6SGJ6Qk94SjdEOHlHSm1xdndVbDVDVmxBPSIsImFjY291bnRTaWduYXR1cmUiOiJvYVR4L3kwVUFxU3A4S2xZTFIrb1YwaTJNQzh0dUVteS91ZHIrNHFSSE9wc0tTamlKYzBsN2JqNUxFRi9hS2lOMmZ1NlhPK1ZMM3R4ako3OVR3bm5DZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiNHk3YWVROFBvUVVYNGJvMzN6bWpkbjBqdjV3QnpRVWZUYmFPYlRSVlpiYkpldVZ1NlBteG9HMXVWNEVBYnVwdzV3dTRuZERndlBDekY0R0pFK3AxRHc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDcyMzAzODc4NzozM0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJTcGJDTXhkMC9zbTFkZ0FKRFFjeDI4d1RzU2V3L01oaVpxcjhGSmVRbFpRIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIwNDQ3MzE4LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUVGNSJ9"
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-𝐑𝐂𝐃-𝐌𝐃-🏛️",
  author: process.env.PACK_AUTHER || "𝐑𝐂𝐃",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝐑𝐂𝐃 𝐌𝐃",
  ownername: process.env.OWNER_NAME || "𝐃𝐄𝐗𝐓𝐄𝐑,𝐕𝐈𝐏𝐄𝐑",
  errorChat: process.env.ERROR_CHAT || "94789958225",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});

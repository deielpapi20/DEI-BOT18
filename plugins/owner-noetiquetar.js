let handler = async (m, {conn, text}) => {
  let name = await conn.getName(m.sender);

conn.reply(m.chat, `*[ 💖 ️] No etiquetes a mi owner, si es algo urgente contacta con el a su chat privado para mas informacion*` ,m, { contextInfo:{ externalAdReply: {title: '𝕷𝖔𝖇𝖔-𝕭𝖔𝖙-𝕸𝕯', body: 'ᴇsᴄʀɪʙɪʀʟᴇ ᴀᴘʟᴀsᴛᴀɴᴛᴏ ᴀǫᴜɪ', sourceUrl: 'https://wa.me/+51975661139'}}})
}
handler.customPrefix = /@+51975661139/i;
handler.command = new RegExp();

export default handler;

//conn.reply(m.chat, `hhh`, m, { contextInfo:{ externalAdReply: {title: 'titulo', body: 'cuero', sourceUrl: global.md}}})

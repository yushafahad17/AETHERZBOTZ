import fs from 'fs'

let handler = async (m, { conn }) => {
let loadd = [
'⋘ 𝑃𝑙𝑒𝑎𝑠𝑒 𝑤𝑎𝑖𝑡...  𝑙𝑜𝑎𝑑𝑖𝑛𝑔 𝑑𝑎𝑡𝑎... ⋙',
'▒▒▒▒▒▒▒▒▒▒ 0%',
'█▒▒▒▒▒▒▒▒▒ 10%',
'███▒▒▒▒▒▒▒ 30%',
'█████▒▒▒▒▒ 50%',
'███████▒▒▒ 70%',
'█████████▒ 90%',
'██████████ 100%',
'Ｓｕｃｃｅｓｓ...'
 ]

let { key } = await conn.sendMessage(m.chat, {text: '_Loading_'})//Pengalih isu

for (let i = 0; i < loadd.length; i++) {
await conn.sendMessage(m.chat, {text: loadd[i], edit: key })}
	let pfft = `
ubah di bawah!!!
`;
 conn.sendMessage(m.chat, {
      video: { url: "https://btch.pages.dev/file/b3e9691adf81f6c2e69ed.mp4"},
      gifPlayback: true,
      caption: '*––––––『 BIG THANKS TO 』––––––*\n\n*ᴀᴅɪᴡᴀᴊsʜɪɴɢ*\n*ᴀᴇᴛʜᴇʀ*\n𝘼𝙚𝙩𝙝𝙚𝙧𝙨𝘾𝙤𝙙𝙚\n\n*––––––『 THANKS TO 』––––––*\n𝘼𝙚𝙩𝙝𝙚𝙧𝙨𝘾𝙤𝙙𝙚',
      contextInfo: {
      externalAdReply: {
      title: `© All Thanks To`,
      body: global.author,
      thumbnailUrl: 'https://btch.pages.dev/file/7576594882b09cbf341e9.jpg',
      sourceUrl: `https://aetherz.xyz`,
      mediaType: 1,
      renderLargerThumbnail: true
      }}})
              let vn = "./mp3/thanksto.mp3"
      
	conn.sendFile(m.chat, vn, "ehee.mp3", null, m, true, {
		type: "audioMessage",
		ptt: true,
	});
}
handler.command = /^(tqto|thanksto)$/i;

export default handler;
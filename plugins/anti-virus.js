
export async function before(m, { conn, isAdmin, isBotAdmin }) {
    if (m.isBaileys && m.fromMe)
        return !0
    if (!m.isGroup) return !1
    let chat = global.db.data.chats[m.chat]
    let bot = global.db.data.settings[this.user.jid] || {}
    let hapus = m.key.participant
    let bang = m.key.id
    let regVirtex = /(㜸ཽཽཽ͢͢͢|PLHIPS|ดุื|৭৭|๑๑|๒๒|[Đৡผ๖⃟])/i
    let isVirtexOn = regVirtex.exec(m.text)
    if (chat.antiVirtex && isVirtexOn && !m.fromMe) {
   await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: hapus }})
   await conn.groupParticipantsUpdate(m.chat, [m.sender], "remove")
        await conn.sendButton(m.chat, `*Font Virtext detect!*${isBotAdmin ? '' : '\n\n_Bot bukan admin_'}`, author, ['off antivirtex', '/disable antivirtex'], m)
        if (isBotAdmin && bot.restrict) {
       return m.reply('Ok!')
        await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        } else if (!bot.restrict) return m.reply('Owner disable auto kick!')
    }
    return !0
}
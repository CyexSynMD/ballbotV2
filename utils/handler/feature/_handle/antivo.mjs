const handle = async(m, { q, d, conn, isAdmin, mime }) => {
	if (!m.chat.endsWith(q.idgc)) return
	if (conn.db.data.chat[m.chat].antivo) {
		if (/viewOnce/.test(m.mtype)) {
			if (!isAdmin) return
			if (/image/.test(mime)) {
				let dl = await m.download();
				conn.sendMessage(m.chat, { image: dl, caption: `<Anti View Once/>\n\nMatikan anti View Once di *.info*\nCaption: ${m.text}`}, {quoted: d.f1('Anti View Once...','')})
			} else
			if (/video/.test(mime)) {
				let dl = await m.download();
				conn.sendMessage(m.chat, { video: dl, caption: `<Anti View Once/>\n\nMatikan anti View Once di *.info*\nCaption: ${m.text}`}, {quoted: d.f1('Anti View Once...','')})
			}
		}
	}
};

export default handle;
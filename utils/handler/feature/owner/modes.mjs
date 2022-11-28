const handle = async (m, { q, conn, bot, repl }) => {
	if (!m.isOwn) return repl(q.owner)
	if (m.args[0] == 'group') {
		if (conn.db.data.set[bot].group) return repl(q.active)
		
conn.db.data.set[bot].public = true
		conn.db.data.set[bot].group = true
		conn.db.data.set[bot].main = false
		conn.db.data.set[bot].antitag = false
		repl('Sukses mengganti nya ke mode group!\nSiapapun yang chat bot di private chat akan diarahkan ke group ballbot kecuali user premium!!!');
	} else if (m.args[0] == 'self') {
		if (!conn.db.data.set[bot].public) return repl(q.active)
		conn.db.data.set[bot].group = false
		conn.db.data.set[bot].public = false
		conn.db.data.set[bot].main = false
		conn.db.data.set[bot].antitag = false
		repl('Sukses mengganti nya ke mode Self\nBot cuma bisa di chat oleh Owner sendiri');
	} else if (m.args[0] == 'public') {
		if (conn.db.data.set[bot].public) return repl(q.active)
		conn.db.data.set[bot].group = false
		conn.db.data.set[bot].public = true
		conn.db.data.set[bot].main = false
		conn.db.data.set[bot].antitag = false
		repl('Sukses mengganti nya ke mode Public\nSemua user dapat chat bot');
	} else if (m.args[0] == 'main') {
			if (conn.db.data.set[bot].group) return repl(q.active)
		
	conn.db.data.set[bot].group = false
		conn.db.data.set[bot].public = true
		conn.db.data.set[bot].main = true
		conn.db.data.set[bot].antitag = false
		repl('Sukses mengganti nya ke mode maintenance\nBot only owner');
	} else if (m.args[0] == 'antitag') {
		conn.db.data.set[bot].antitag = true
		repl('Sukses membuat bot mode anti tag | owner tidak akan mendapatksn tag dari siapapun');
	} else {
		let list = [
				['Group', `.modes group`, ''],
				['Self', `.modes self`, ''],
				['Public', `.modes public`, ''],
				['Maintenance', `.modes main`, ''],
				['Antitag', `.modes antitag`, ''],
			]
		conn.sendlist(m.chat, `Hai owner!!\n${q.name} silahkan pilih mode nya disini!`, q.name, list, m)
	}
};

export default handle;
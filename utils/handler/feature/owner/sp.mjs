import { writeFileSync } from 'fs';

const handle = async (m, { q, conn, repl, bot }) => {
	if (!m.isOwn) return repl(q.owner)
	if (!m.quoted) return repl(`Mau simpan plugin apa? reply teks script nya bang`)
	if (!m.query) return repl(`Salah!!!\nContoh : *.${m.command} owner/bcgc*`)
	let path = './utils/handler/feature/'
	await writeFileSync(path+m.query+'.mjs', m.quoted.text)
	conn.db.data.set[bot].dateplugin = new Date() * 1
	repl(`Sukses tersave di path : ${path + m.query}`)
}

export default handle;
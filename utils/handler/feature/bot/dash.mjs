import fs from 'fs';

const handle = async (m, { q, conn, bot, repl }) => {
	let path = `./${q.session}/`
	let dir = fs.readdirSync(path)
	let all = 0
	let size = dir.map(v=> all += (fs.statSync(path+v)).size)
	let db = conn.db.data.set[bot].hit
	let teks = `DASHBOARD BOT\n\n`
				+ `Total hit : ${db.length}\n`
				+ `Last command hit : ${db.reverse().slice(0,1)[0].cmd}\n`
				+ `User last hit : @${db.reverse().slice(0,1)[0].user}\n`
				+ `Total Sessions : ${dir.length} Files\n`
				+ `Size All sessions : ${all.sizeString()}\n`
				+ `Starting Bot : ${(process.uptime() * 1000).timers()}\n`
 				+ `System OS : ${process.platform}\n`
 				+ `Nodejs Version : ${process.version}\n`
 				+ `Ram Used Bot : ${process.memoryUsage.rss().sizeString()}\n`
 				+ `Max Ram Server : ${process.env.SERVER_MEMORY || 0} MB\n`
 				+ `Region Server : ${process.env.TZ || 'Tidak diketahui'}\n`
 				+ `Location Server : ${process.env.P_SERVER_LOCATION || 'tidak diketahui'}\n`
	repl(teks)
}

export default handle;
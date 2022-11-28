import fs from 'fs';
let path = './utils/handler/feature/listcmd.json'

const handle = async (m, { q, conn, repl }) => {
	var cmd = JSON.parse(fs.readFileSync(path))
	let [cm, pth] = m.query.split('@')
	if (!cm) return repl(`Masukan dengan benar!\nContoh : ${m.command} command@pathnya`)
	if (!pth) return repl(`Masukan dengan benar!\nContoh : ${m.command} command@pathnya`)
	if (!cmd.includes([cm, pth])) {
		cmd.push([cm, pth])
		var newCmd = JSON.stringify(cmd)
		fs.writeFile(path, newCmd, err => {
			if (err) return repl('elorr')
			repl(`Sukses add command ${cm} dengan path ${pth}\nJangan sampe salah path nanti error`)
		})
	} else if (cmd.includes([cm, pth])) {
		let position = cmd.indexOf([cm, pth]);
		cmd.splice(position, 1);
		var nowData = JSON.stringify(cmd);
		fs.writeFile(path, nowData, err => {
			if (err) return repl('elorr')
			repl(`Sukses delete command ${cm} dengan path ${pth}\n\n`)
		}) 
	}
}

export default handle;
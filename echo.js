

/* Déclaration des arguments */
let arg1 = process.argv[2]
let arg2 = process.argv[3]
let arg3 = process.argv[4]

/* check des arguments */
if (process.argv.length !== 5) {
  console.log(`usage: node ls.js dossier`)
  process.exit(1)
}

/*
// S'agti il d'un Directory ?
const stats = fs.statSync(process.argv[2])
if (!stats.isFile()) {
  console.log(`Error: ${process.argv[2]} n'est pas un répertoire`)
  process.exit(1)
}
*/
console.log(`${arg1} ${arg2} ${arg3}`)
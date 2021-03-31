/*
node echo.js hello hard fork
hello hard fork
*/

/* Déclaration des arguments */
// On entreras les paramètres suivants: 1-node 2-echo.js 3-hello 4-hard 5- fork


/* code avec une boucle for */
let result = ''

for (let i = 2; i < process.argv.length; ++i) {
  result = result + " " + process.argv[i]
  // peut egalement s'écrire ainsi: result +=  process.argv[i] + " "
}
console.log(result)


/*code basic

if (process.argv.length !== 5) {
  console.log(`usage: node echo.js arg1 arg2 arg3`)
  process.exit(1)
}
console.log(`${process.argv[2]} ${process.argv[3]} ${process.argv[4]}`)
let result = ''
*/
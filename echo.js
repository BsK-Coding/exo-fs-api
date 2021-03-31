/*
node echo.js hello hard fork
hello hard fork
*/

/* Déclaration des arguments */
// On entreras les paramètres suivants: 1-node 2-echo.js 3-hello 4-hard 5- fork
let result = ''

for (let i = 2; i < process.argv.length; ++i) {
  result = result.push(process.argv[i])
  //console.log(process.argv[i])
}


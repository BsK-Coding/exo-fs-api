/*
node echo.js hello hard fork
hello hard fork
*/

/* Déclaration des arguments */
// On entreras les paramètres suivants: 1-node 2-echo.js 3-hello 4-hard 5- fork

/* check des arguments */
// Pas besoin de vérifier si les arguments sont des nombres car les arguments entré seront forcément des strings
if (process.argv.length !== 5) {
  console.log(`usage: node echo.js arg1 arg2 arg3`)
  process.exit(1)
}


console.log(`${process.argv[2]} ${process.argv[3]} ${process.argv[4]}`)
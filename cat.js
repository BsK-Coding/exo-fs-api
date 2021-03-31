/*
node cat.js file.txt

Affiche le contenu de file.txt sur l'écran Gestion d'erreur si pas le bon nombre d'arguments.
Gestion d'erreur si file.txt n'existe pas.
*/

const fs = require('fs')

/* check des erreurs au passage de la commande */
// Pas besoin de vérifier si les arguments sont des nombres car les arguments entré seront forcément des strings

if (process.argv.length !== 3) {
  console.log(`usage: node echo.js file`)
  process.exit(1)
}

if (!fs.existsSync(`${process.argv[2]}`)) {
  console.log(`Erreur: Ce fichier n'existe pas`)
  process.exit(1)
}

//Affichage du contenu du fichier

let file = fs.readFileSync(process.argv[2], 'utf-8')
console.log(file)

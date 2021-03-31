/*
Affiche les 10 dernières lignes du fichier file.txt.
Gestion de l'erreur si pas le bon nombre d'arguments.
Gestion de l'erreur si file.txt n'existe pas.

node tail.js file.txt
*/

const fs = require('fs')

/* CHECK DES ARGUMENTS */

//Check du nombre d'arguments
if (process.argv.length !== 3) {
  console.log(`usage: node tail.js file`)
  process.exit(1)
}

//Check de l'existance de notre fichier
if (!fs.existsSync(`${process.argv[2]}`)) {
  console.log(`Erreur: Le fichier n'existe pas`)
  process.exit(1)
}

/* PROGRAMME */

let nbLine = 10

//Récupération du contenu du fichier entré en argument 2
let file = fs.readFileSync(process.argv[2], 'utf-8')

//Split du contenu par ligne en se basant sur le saut de ligne
let fileSplit = file.split(`\n`)

//Détermination de l'index ou placer le .slice
let aLine = fileSplit.length - nbLine

//Récupération des 10 dernières lignes de notre contenu Split
let lastLine = fileSplit.slice(aLine).join('\n')
console.log(lastLine)
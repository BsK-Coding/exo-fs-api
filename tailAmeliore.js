/*
Affiche les 10 dernières lignes du fichier file.txt.
Gestion de l'erreur si pas le bon nombre d'arguments.
Gestion de l'erreur si file.txt n'existe pas.

node tail.js file.txt

Améliorer le programme pour prendre en compte le paramètre optionnel -n.

Par défaut tail affiche les 10 dernières ligne du fichier passé en paramètres, -n permet d'indiquer le nombre de dernières lignes à afficher:

node tail.js -n 20 file.txt

Affiche les 20 dernières lignes du fichier file.txt.
Attention -n suivi d'un nombre est optionnel, ne pas l'utiliser doit exécuter un affichage des 10 dernières ligne du fichier par défaut.
Gestion de l'erreur si pas le bon nombre d'arguments.
Gestion de l'erreur si file.txt n'existe pas.
Gestion de l'erreur si un mauvais argument optionnel est passé.
Gestion de l'erreur si le nombre ligne passé en arguments n'est pas convertible en nombre.
*/

const fs = require('fs')

/* CHECK DES ARGUMENTS */

//Check du nombre d'arguments
if ((process.argv.length !== 3) && (process.argv.length !== 5)) {
  console.log(`usage: node tailAmeliore.js -n number file`)
  process.exit(1)
}

//Check de l'existance de notre fichier
if ((!fs.existsSync(`${process.argv[4]}`) && (process.argv[2] === '-n') && (!isNaN(process.argv[3])))) {
  console.log(`Erreur: Le fichier n'existe pas`)
  process.exit(1)
}

/* PROGRAMME */

//Check si Directory et Launch
if ((process.argv[2] === '-n') && (!isNaN(process.argv[3]))) {
  if ((fs.statSync(process.argv[4])).isDirectory()) {
    console.log(`Erreur: Il s'agit d'un dossier, merci de renseigner un nom de fichier`)
    process.exit(1)
  }
  else {
    let nbLine2 = Number(process.argv[3])

    //Récupération du contenu du fichier entré en argument 2
    let file2 = fs.readFileSync(process.argv[4], 'utf-8')

    //Split du contenu par ligne en se basant sur le saut de ligne
    let fileSplit2 = file2.split(`\n`)

    //Détermination de l'index ou placer le .slice
    let aLine2 = fileSplit2.length - nbLine2

    //Récupération des 10 dernières lignes de notre contenu Split
    let lastLine2 = fileSplit2.slice(aLine2)
    console.log(lastLine2)
  }
}
else if ((fs.statSync(process.argv[2])).isDirectory()) {

  console.log(`usage: "node tailAmeliore.js file" pour obtenir les ${nbLine1} dernières lignes ou "node tailAmeliore.js -n number file" pour obtenir les ${nbLine2} dernière lignes`)
  process.exit(1)
} else {
  let nbLine1 = 10

  //Récupération du contenu du fichier entré en argument 2
  let file1 = fs.readFileSync(process.argv[3], 'utf-8')

  //Split du contenu par ligne en se basant sur le saut de ligne
  let fileSplit1 = file1.split(`\n`)

  //Détermination de l'index ou placer le .slice
  let aLine1 = fileSplit1.length - nbLine1

  //Récupération des 10 dernières lignes de notre contenu Split
  let lastLine1 = fileSplit1.slice(aLine1)
  console.log(lastLine1)
}


/* Correction Thibaut */
const { readFileSync, existsSync } = require('fs')
let nblign = 10
let indexFile = 2
// Check size of process.argv
if (process.argv.length !== 3 && process.argv.length !== 5) {
  console.log('usage: node tail.js [-n nb] file.txt')
  process.exit(1)
}
// Check -n presence
if (process.argv[2] === '-n') {
  if (isNaN(process.argv[3])) {
    console.log('entrer le nombre de lignes que vous voulez afficher')
    process.exit(1)
  }
  nblign = Number(process.argv[3])
  indexFile += 2
}
// Check if file exist
if (!existsSync(process.argv[indexFile])) {
  console.log('This file don\'t exist')
  process.exit(1)
}
// Read text on file
const text = readFileSync(process.argv[indexFile], 'utf-8').split('\n').slice(-nblign).join('\n')
console.log(text)
/*
node cat.js file.txt

Affiche le contenu de file.txt sur l'écran Gestion d'erreur si pas le bon nombre d'arguments.
Gestion d'erreur si file.txt n'existe pas.
*/

const fs = require('fs')

/* check des erreurs CAT Simple */
// Pas besoin de vérifier si les arguments sont des nombres car les arguments entré seront forcément des strings

if (process.argv.length !== 3) {
  console.log(`usage: node echo.js file`)
  process.exit(1)
}

if (!fs.existsSync(`${process.argv[2]}`)) {
  console.log(`Erreur: Ce fichier n'existe pas`)
  process.exit(1)
}

if (fs.existsSync(`${process.argv[2]}`)) {
  let file = fs.readFileSync(process.argv[2], 'utf-8')
  console.log(file)
  process.exit(1)
}

/************** check des erreurs CAT amélioré *******************/
if (!fs.existsSync(`${process.argv[2]}`)) {
  console.log(`Erreur: Ce fichier n'existe pas`)
  process.exit(1)
}

if (!fs.existsSync(`${process.argv[3]}`)) {
  console.log(`Erreur: Le second fichier n'a pas été renseigné`)
  process.exit(1)
}

if (!fs.existsSync(`${process.argv[4]}`)) {
  console.log(`Erreur: Le 3 ieme fichier n'a pas été renseigné`)
  process.exit(1)
}

//Affichage du contenu du/des fichier(s)

for (let i = 0; i < process.argv.length; i++) {
  if (fs.existsSync(`${process.argv[2]}`)) {
    let file = fs.readFileSync(process.argv[2], 'utf-8')
    console.log(file)
    continue
  }
  else if (fs.existsSync(`${process.argv[3]}`)) {
    let file = fs.readFileSync(process.argv[2], 'utf-8')
    console.log(file)
    continue
  }
  else if (fs.existsSync(`${process.argv[4]}`)) {
    let file = fs.readFileSync(process.argv[2], 'utf-8')
    console.log(file)
    process.exit(1)
  }
}




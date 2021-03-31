/*
Améliorer l'exercice cat.js précédent en ajoutant la possibilité d'afficher plusieurs fichiers.

node cat.js file1.txt file2.txt file3.txt

Affiche le contenu de file1.txt, file2.txt, file3.txt à la suite sur l'écran.
Gestion de l'erreur si pas le bon nombre d'arguments.
Gestion de l'erreur si l'un des fichiers à afficher n'existe pas.
*/

const fs = require('fs')

/* CHECK DES ARGUMENTS */
if (process.argv.length !== 5) {
  console.log(`usage: node echo.js file file1 file2`)
  process.exit(1)
}

// Check s'il s'agit d'un dossier, grace aux informations contenu dans "stats"
if ((fs.statSync(process.argv[2])).isDirectory() || (fs.statSync(process.argv[3])).isDirectory() || (fs.statSync(process.argv[4])).isDirectory()) {
  console.log(`Erreur: Il s'agit d'un dossier, merci de renseigner un nom de fichier`)
  process.exit(1)
}

if (!fs.existsSync(`${process.argv[2]}`)) {
  console.log(`Erreur: Le premier fichier n'existe pas`)
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

const arg = process.argv.slice(2)

let file = ''
for (let i = 0; i < (arg.length); i++) {
  if (fs.existsSync(`${arg[i]}`)) {
    file = fs.readFileSync(arg[i], 'utf-8')
    console.log(file)
  }
  else {
    console.log(`!! Le fichier n'existe pas !!`)
    continue
  }
}


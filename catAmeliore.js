const fs = require('fs')

// check des erreurs CAT amélioré
if (process.argv.length !== 5) {
  console.log(`usage: node echo.js file file1 file2`)
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


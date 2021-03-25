/*
node cp.js src.txt dst.txt

Copie src.txt vers dst.txt.
Gestion d'erreur si pas le bon nombre d'arguments.
Gestion d'erreur si src.txt n'existe pas.
*/

const fs = require('fs')

/* check des erreurs */
// Pas besoin de vérifier si les arguments sont des nombres car les arguments entré seront forcément des strings
if (process.argv.length !== 4) {
  console.log(`usage: node cp.js fileSrc fileDst`)
  process.exit(1)
}

if (fs.existsSync(`${process.argv[2]}`)) {
  fs.copyFileSync('src.txt', 'dst.txt')
  console.log(`le fichier ${process.argv[2]} à été copié`)
}
else {
  console.log(`Erreur: Le fichier source ${process.argv[2]} n'existe pas`)
}

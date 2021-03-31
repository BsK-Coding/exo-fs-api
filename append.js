/*
node append.js src1.txt src2.txt src3.txt dst.txt

Copie le contenu de src1.txt, src2.txt, src3.txt vers dst.txt.
append.js prend un nombre variable d'arguments, minimum 2 arguments.
Le fichier de destination sera toujours le dernier de la liste:

node append.js src.txt dst.txt
node append.js src1.txt src2.txt dst.txt

Gestion de l'erreur si pas le bon nombre d'arguments.
Gestion de l'erreur si l'un des fichiers sources à copier n'existe pas.
*/

const fs = require('fs')

/* CHECK D'ARGUMENTS */
// Check Paramètre d'entrer 1-node 2-append.js 3-file1 4-file2 5-file3 6-dstFile
if (process.argv.length - 1 < 4) {
  console.log(`usage: node echo.js file file1 file2 dstFile`)
  process.exit(1)
}

//Check si Dossier, grace aux informations contenu dans "stats"
//On aurrait pu l'écrire, également comme ci dessous
//const stats = fs.statSync(process.argv[2])
//if (stats.isDirectory()) {}
if ((fs.statSync(process.argv[2])).isDirectory()) {
  console.log(`Erreur: Il s'agit d'un dossier, merci de renseigner un nom de fichier`)
  process.exit(1)
}

if (!fs.existsSync(`${process.argv[2]}`)) {
  console.log(`Erreur: Le premier fichier n'existe pas`)
  process.exit(1)
}

if (!fs.existsSync(`${process.argv[3]}`)) {
  console.log(`Erreur: Le second fichier n'existe pas`)
  process.exit(1)
}

if (!fs.existsSync(`${process.argv[4]}`)) {
  console.log(`Erreur: Le 3 ieme fichier n'existe pas`)
  process.exit(1)
}

if (!fs.existsSync(`${process.argv[5]}`)) {
  console.log(`Erreur: Le fichier de destination n'existe pas`)
  //Rustine de dépannage en attendant de trouver la commande de création
  fs.copyFileSync('file.txt', 'dst.txt')
  console.log(`le fichier ${process.argv[5]} à été créé`)
  process.exit(1)
}
else {
  let openFile = ''

  for (const elem of process.argv.slice(2, -1)) {
    //Lira le contenu des fichiers entré en arguments
    openFile += fs.readFileSync(elem, 'utf-8') + '\n'
  }
  let dstFile = process.argv[process.argv.length - 1]
  fs.writeFileSync(dstFile, openFile.trim())

}


/* programme */

//"process.argv.slice(2, -2)" prend les arguments 2 à last -1 (Qui sera le fichier de destination de copie de contenu)

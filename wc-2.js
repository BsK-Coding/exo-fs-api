/* Coorection Amine */
const fs = require('fs')
let path = `./${process.argv[2]}`
let fileName = process.argv[2]


//les test 
if (process.argv.length < 3 || process.argv.length > 4) {
  console.log(`Error: this command exepts only one argument`)
  process.exit(1)
}

//cas de l'option -n
if (process.argv.length === 4) {

  path = `./${process.argv[3]}`
  fileName = process.argv[3]


  if (process.argv[2] !== '-l' && process.argv[2] !== '-w' && process.argv[2] !== '-c') {
    console.log(`Error: if you choose the option the first argument exepts only -l , -w , -c`)
    process.exit(1)
  }

}

if (!fs.existsSync(path)) {
  console.log(path)
  console.log(`Error: srcFile does not exist`)
  process.exit(1)
}

const txt = fs.readFileSync(path, 'utf-8')

switch (process.argv[2]) {
  case '-l':
    console.log(`${txt.split(`\n`).length} ${fileName}`)
    break
  case '-w':
    console.log(`${txt.split(` `).length} ${fileName}`)
    break
  case '-c':
    console.log(`${txt.length} ${fileName}`)
    break
  default:
    console.log(`${txt.split(`\n`).length} ${txt.split(` `).length} ${txt.length}  ${fileName}`)

}


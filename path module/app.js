/**
 * path is a inbuild module used to deal with paths of files and directories
 * link: https://nodejs.org/api/path.html
 */

const path = require('path')

console.log(`dirname: ${path.dirname(__filename)}`)
console.log(`basename: ${path.basename(__filename)}`)
console.log(`extension: ${path.extname(__filename)}`)
console.log(`filename: ${path.basename(__filename,path.extname(__filename))}`)
console.log(`path seperator: ${path.sep}`)
console.log('object:', path.parse(__filename))
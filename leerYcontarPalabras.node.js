//INFO: leer y contar palabras en javascript/node

var fs= require('fs'); //A: libreria para acceder a archivos
var src= fs.readFileSync('texto.txt','utf-8');
console.log("lei ",src);
var words= src.split(/[^a-zA-Z0-9]+/g);
console.log("tiene", words.length);
var wordsOut= words.map( w => "{"+w+"}").join(", ");
console.log("son", wordsOut);

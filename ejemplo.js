//INFO: un ejemplo simple de COMO programar con MENOS conceptos

texto= "Mauricio programa e javascript, porque con pocos conceptos puede crear muchas cosas distintas que sirven y funcionan. Se como Mauricio.";
//A: tengo un string

palabras= texto.split(/\W+/);
//A: tengo un Array, porque parti mi strings en cada secuencia de cosas que NO son palabras

palabraAcnt= {}; //A: tengo un diccionario clave valor
palabras.map(function (estaPalabra) { 
	palabraAcnt[estaPalabra]= (palabraAcnt[estaPalabra] || 0)+1;
});
//A: con la cuenta de cada palabra

console.log(palabraAcnt)

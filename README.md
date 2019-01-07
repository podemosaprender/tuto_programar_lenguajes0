# Programar y lenguajes: microtutorial PODEROSO

> Para que cualquier persona entienda como se elijen las herramientas y por qué


## ¿Cuántos CONCEPTOS necesito? ¿Cuántas palabras?

Los _conceptos_ son un costo __grande__ porque los tengo que aprender y entender.

Las _palabras_ __también__ son un costo porque cuando quiero modificar o entender el código necesito mantener más cosas coordinadas en mi cabeza, peor si no las puedo escribir cerca en el archivo (ej. los imports lejos de donde uso la clase)

* <leerYcontarPalabras.node.js> (35 palabras, 11 "conceptos")

Por las funciones que llame, la idea de importar un modulo, etc.

* <LeerYContarPalabras.java> (64 palabras)

Además de los de javascript
1. Cada paquete y su jerarquia (necesite 4)
2. Class
3. public
4. static
5. void
6. método main
7. throws Exception
8. declarar tipos de datos
9. Files.readAllBytes además de Paths.get
10. Templates como Stream<String>
11. Streams
12. Funciones inline como ->
13. Collectors
14. Todas las clases que use (ocho)

## ¡Pensalo como un camino!

Lo más difícil de programar es dividir lo que hay que hacer en partes que puedas entender por separado, sin dejar de entender como se coordinan. Igual que cocinás fideos con tuco: hacés o comprás los fideos, preparás el tuco, sacás todo al mismo tiempo para comer calentito.

Incluso si tu objetivo final es hacer un programa en Java (o C, o C++ u otro lenguaje que requiere mucho más detalle) __te conviene__ escribirlo primero en javascript u otro así de simple para probar hasta que entiendas bien el problema Y la solución (no se puede entender casi ningún problema serio sin PROBAR!)

Por eso __insisto__ en que aprendan a hacer pantallas web con javascript primero. Porque podés cobrar y porque pantallas web te van a pedir SIEMPRE, aunque hagas java.

## Las aplicaciones que SIRVEN y SE PAGAN

Pensá que ese código que querés que te paguen por escribir es para resolver problemas en la vida real!

Prácticamente en todos los casos las aplicaciones de verdad
* tienen pantalla y te piden que sea web y móvil
   también en las empresas, para no andar instalando en cada compu
* leen y guardan datos de algún almacenamiento
  * en general una base de datos relacional, usando SQL
  * a veces archivos
* tienen autenticación para saber quién lo esta usando y autorización para saber que puede ver o modificar y que no.
* probablemente se conecten con otros sistemas mediante APIs (la empresa necesita trabajar coordinada)
* tienen muchas reglas ej. si el pedido no llegó en 5 días avisarle a alguien de ventas que contacte al cliente, si no llega el pago en 15 días ...

Hay bastante para escribir, aunque bastante venga resuelto, entonces que el lenguaje aumente la complejidad y la dificultad para ver resultados y modificarlas es un gran problema: <https://en.wikipedia.org/wiki/List_of_failed_and_overbudget_custom_software_projects>

## ¡Además entendé los lenguajes!

En el fondo los lenguajes de computación __tienen que un poco ser parecidos__ porque hay una __ciencia de la computación__, que estudia TODO lo que se puede calcular siguiendo algún tipo de receta (algoritmo). Y conocemos dos formalismos para describirlo: las máquinas de Turing y el Cálculo Lambda. Sabemos que son equivalentes. 

Las _máquinas de Turing_ están inspiradas en su trabajo desencriptando los mensajes de los nazis, que encriptaban con la máquina Enigma: una máquina que mueve rueditas cada vez que apretas una letra para decidir en cual otra la convierte. Esas "rueditas que iban cambiando de estado" eran el problema y Turing dio una solución genial y eterna al __problema__ del estado en una computación: por donde va la ruedita -o la memoria de tu compu-, por donde puede ir, que resultados puede dar eso.

El [Cálculo Lambda](https://es.wikipedia.org/wiki/C%C3%A1lculo_lambda) se parece más a los lenguajes de programación que usamos, en especial si los usamos "funcionalmente" tratando de __liberarnos__ de la dificultad de entender __en que estado__ van a estar las cosas (que era la __dificultad__ que usaban los nazis para que no se entiendan sus mensajes!)

> Se puede considerar al cálculo lambda como el lenguaje universal de programación más pequeño. Consiste en una regla de transformación simple (sustitución de variables) y un esquema simple para definir funciones. El cálculo lambda es universal porque cualquier función computable puede ser expresada y evaluada a través de él. 

(cuando quieran, podemos hablar __años__ de uno de mis temas favoritos ;) )

## Un ejemplo concreto y práctico

La ventaja de entender eso es que se puede 
* Aprender a programar usando __el mínimo__ de conceptos
* Entender que las aplicaciones más grandes son composiciones sólo de eso

Así podés probar y entender rápido, y después detallar al nivel que requiera tu computadora/procesamiento lo que te haga falta (ej. una función que necesitas que maneje mejor la memoria o aproveche que sabés que los datos son todos números de un byte, etc.). Javascript y todos los lenguajes parecidos vienen preparados para eso, así funcionan los de data science tipo R o Python.

Podés ejecutar esto en la consola de tu navegador (y editarlo en github sin instalar nada)

__¿Qué conceptos necesitas?__

<ejemplo.js>

```
//INFO: un ejemplo simple de COMO programar con MENOS conceptos

texto= "Mauricio programa e javascript, porque con pocos conceptos puede crear muchas cosas distintas que sirven y funcionan. Se como Mauricio.";
//A: tengo un string

palabras= texto.split(/\W+/); //A: use una "expresion regular"
//A: tengo un Array, porque parti mi string separandolo cada secuencia de cosas que NO son palabras

palabraAcnt= {}; //A: tengo un diccionario clave valor
palabras.map(function (estaPalabra) { 
	palabraAcnt[estaPalabra]= (palabraAcnt[estaPalabra] || 0)+1;
});
//A: con la cuenta de cada palabra

console.log(palabraAcnt)
```

## El futuro de java según la historia y la ciencia ...

Todos los lenguajes como javascript, python, ruby, etc. son "hijos" de uno muy muy pequeño (menos de 10 conceptos) que se llama [Scheme](https://en.wikipedia.org/wiki/List_of_failed_and_overbudget_custom_software_projects). Apareció en 1975 y se sigue usando para resolver problemas __difíciles__. Javascript se le parece bastante más en que tiene _menos_ conceptos :)

<http://hyperpolyglot.org/scripting>

De ese (y todos los que se le parezcan) sabemos que se pueden "transpilar" a otros tipados, interpretar, portar a cualquier máquina o procesador aunque sea pequeño, etc.

Pero además sabemos que esa operación la puede hacer una compu _muy eficientemente_: la máquina javascript de node y tu chrome (v8) puede ejecutar un jueguitos de DOS como si fuera una PC entera, y en algunas cosas procesa datos a la misma velocidad que si hubieras escrito en C.

Y todos los que sabemos de lenguajes y proyectos grandes nos queremos _IR_ de java desde que salió, porque tiene una sintaxis burocrática sin remedio.

En los últimos 5 o 10 años mucha gente __ya se fue__ y usa(ba) [Scala](https://www.scala-lang.org/), se mudó a (Kotlin)[https://kotlinlang.org/] o peor todavía aceptó como Oracle que mantiene java que hace falta algo tan ágil como javascript: Java7 agrego motores de scripting, Java8 uno nativo más poderoso, y lo que viene es adaptar la Java Virtual Machine para que sea igual o más rápido que lo que escribís en java: https://github.com/graalvm/graaljs (es pariente de lo que se usa para smart contracts)

## ¿Qué nos queda?

Los frameworks (que __también__ son bastante parecidos entre lenguajes), ej. [laravel](https://laravel.com/) (php), [sails](https://sailsjs.com/) (js), Rails (ruby), Django (Python), y ahora Spring Boot, todos con su ORM, rutas, logger, etc.

Y sobretodo las __librerías__ ej. para leer tal o cual imágen, buscar tal o cual cosa en la imagen, generar tal o cual formato de archivo. Y son __importantisimas__ porque ahorran mucho trabajo, sin eso muchos proyectos no serían económicamente viables.

Por eso les recomiendo javascript: porque funciona en el browser pero __también__ sobre la JavaVirtualMachine y les deja usar __todas las librerías del ecosistema java__ (yo lo vengo haciendo en proyectos pagos y grandes desde hace más de una década).

## Conclusión

El tiempo que __invierten__ debería repartirse
* 60% conceptos de __sistemas__ 
   (ej. sin compu como se lleva una contabilidad, inventario, conciliación bancaria, acuerdo entre personas, etc.)
* 30% conceptos de __ciencias de la computacion__ 
   (ej. streams, como construir cosas con funciones, patrones, etc.)
* 10% como se escribe en tal o cual lenguaje
   googleando yo puedo programar en TODOS, si programo en el mismo un mes seguido ya no googleo, y me ven hacerlo en el grupo y en los proyectos que les mencioné vengo haciendo hace 30 años ;)

> Mauricio programa e javascript, porque con pocos conceptos puede crear muchas cosas distintas que sirven y funcionan. Se como Mauricio. 


## Extra ...

Por que los programas donde los cambios de estado están desparramados por el código __son un problema__ y programar con __funciones puras__ fáciles de entender porque sólamente dependen de sus parámetros está cada vez más de moda ...

<iframe width="560" height="315" src="https://www.youtube.com/embed/d2NWPG2gB_A" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

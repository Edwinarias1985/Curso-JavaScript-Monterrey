// Tema 1 Scripts
//Aquí se ve el código JavaScript
// alert("Bienvenido al nuevo lenguaje super fácil")
// Tema 1 Scripts

// Así es el comentario con JavaScript

// Tema 2 Variables y funciones
// Literales
12.57 // número decimal
12 // número entero
-12 // número negativo
"¡Hola mundo!" // cadena de caracteres con comillas dobles
'¡Hola mundo' // cadena de caracteres con comillas simples

// Variables
var x; // declarar una variable sin valor inicial
var x = 5; // declarar variable con valor inicial
var x = "¡Hola!"; // declarar una variable con un string asignado

// var var = 5; esta línea de codigo es incorrecta: utiliza var, que es una palabra reservada, como nombre
// var vari*able = 5; esta línea de código es incorrecta: utiliza un caracter especial para el nombre.
var mi_variable = 5; //esta línea es correcta, los "_" y "-" son simbolos válidos

//Copiamos el valor de la primera variable a la segunda
var a = 5;
var b = a; // Después de correr esta línea de código, JavaScript tendrá declaradas las cariables a y b con el valos numérico 5.
// Tema 2 variables y funciones

// Tema 3 variables y funciones

// Funciones, ejemplo

function miFuncion(a, b){
    // Aquí va el código de la función
    var resultado = a * b + a;// Esta línea aplica operaciones sobre los parámetros recibidos y  los guarda en una variable llamada "resultado"
    return resultado; // Esta línea termina la ejecución de la función y regresa el valor de la variable resultado.
}
    
function edwin(carro, moto){
    var resultado = carro * moto + carro;
    return resultado;
}
console.log(edwin(7,3)); // Resultado ejercicio 1

function miFuncion(a, b){
    var resultado = a * b + a;
    return resultado;
}
var respuesta = miFuncion(2, 3);
console.log(respuesta); // resultado ejercicio 2
// Vemos que hay dos formas de hacer el resultado a la fucnión.

// Desarrollado por Nicolas Cordero, para obtener más información con las mismassecciones

/*
!Introducción a JavaScript.
*Se dio una pequeña introducción acerca de JavaScript, las diferencias de este lenguaje a comparación de HTML y CSS y se vieron las competencias a adquirir en este módulo.
!Finaliza la introducción.
/


/
!TEMA 1: Scripts.
*Se muestra la forma en la que se puede usar JavaScript en HTML:
1- A tráves de la etiqueta script haciendo la conexión con un archivo externo.
<script src="../scripts/scripts.js"></script>
alert("Alerta");

2-Colocando el código JavaScript dentro de la etiqueta script sin necesidad de un archivo externo.
<script>
    alert("Alerta");
</script>
!Finaliza el TEMA 1: Scripts.
/


/
!TEMA 2: Variables.
*LITERALES: VALORES FIJOS
12.57                       --   Número decimal.
12                          --   Número entero.
-12                         --   Número negativo.
"¡Hola mundo!"              --   Cadena de caracteres con comillas dobles.
'¡Hola mundo!'              --   Cadena de caracteres con comillas simples.

*VARIABLES: CAMBIAN SU VALOR
var x;                      --   Declarar una variable sin valor inicial.
var x = 5;                  --   Declarar variable con valor inicial.
var x = "¡Hola mundo!"      --   Declarar una variable con un string asignado.


Como escribir correctamente una variable:
var var = 5; Incorrecta, utiliza var que es una palabra reservada.

var variable = 5; Incorrecta, utiliza un caracter especial para el nombre de la variable

var mivariable = 5; Correcta, los simbolos "-" y "" son válidos.


*Copiar el valor de la primera variable a la segunda
var a = 5;
var b = a;//Después de correr esta línea de código, JavaScript tendrá declaradas las variables a y b con el valor numérico 5
!Finaliza el TEMA 2: Variables.
*/

// Tema 3 Funciones

// Función que regresa un valor.
function mi_funcion(a,b){
    var resultado = a * b + a;
    return mi_funcion;
}
var respuesta = mi_funcion(7, 6);
console.log(respuesta); // se puede directamente llamar a la función desde el console.log sin necesidad de declarar una variable.

// Función que no regresa ningún valor.
function saludar(){
    console.log("Hola mundo")
}
saludar(); // Esta imprime "Hola Mundo", pero no devuelve nada.

// Ejercicio hecho por Edwin
function desarrollo(a,b){
    var gestion = a * b - a;
    console.log("Hello");
    return gestion;
}
console.log(desarrollo(5, 1));
var solucion = desarrollo(6, 8);
console.log(solucion);
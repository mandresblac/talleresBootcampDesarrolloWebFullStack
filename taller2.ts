/* Taller en Clase - TypeScript */

//Parte 1: 
/* Tipos de Datos
Declaración de Variables:
Declaren variables utilizando diferentes tipos de datos: número, cadena, booleano, arreglo, objeto, etc. 
*/

const edad: number = 25; // number
const nombre: string = "Juan"; // string
const mayorDeEdad: boolean = true; // boolean
const frutasFavoritas: string[] = ["fresa", "manzana", "melon", "piña"]; // array

// objeto
type vehiculo = {marca: string, modelo: string, matricula: number, usado: boolean};
const vehiculo: vehiculo = {marca: "renault", modelo: "sandero", matricula: 23079, usado: true};

/* Uso de Tipos de Literales:
Utilicen tipos de literales para limitar los valores de una variable. */

// Definición tipo literal
type Fruta = "pera" | "uva" | "banano";

// Declaración variable con tipo literal
let fruta1: `${Fruta}`;
let fruta2: `${Fruta}`;
let fruta3: `${Fruta}`;

fruta1 = "pera";
fruta2 = "uva";
fruta3 = "banano";

console.log(fruta1)
console.log(fruta2)
console.log(fruta3)

// Parte 2: Condicionales
/* Estructuras Condicionales:
Resuelvan un problema utilizando estructuras condicionales (if, else if, else). */

// Programa que recibe un número y devuelve si el número es par o impar
function numeroPar(num: number): string {
  if (num % 2 === 0) {
          return "par"
  } else {
          return "impar"
  }
}

let num: number = 12;
console.log(`${num} es número ${numeroPar(num)}`);

//Parte 3: Funciones
/* Funciones Básicas:
Creen funciones básicas con diferentes tipos de parámetros y tipos de retorno. */

//Funcion Multiplicar
const multiplicar = (n1: number, n2: number): number => {
  return n1 * n2
};
console.log(multiplicar(2, 3));

// Funcion saludar
const saludar = (saludo: string = "Hola", nombre: string): string => {
  return `${saludo}, ${nombre}`
};
console.log(saludar("Buenos dias", "Francisco"));

// Funcion que concatena o une dos arrays
const concatenarArreglos = (array1: number[], array2: number[]): number[] => array1.concat(array2);
const numeros1 = [1, 3, 5, 7, 9];
const numeros2 = [2, 4, 6, 8, 10];

console.log(concatenarArreglos(numeros1, numeros2));

/* Funciones con Parámetros Opcionales y Predeterminados:
Creen funciones que utilicen parámetros opcionales y con valores predeterminados.*/

// funcion para calcular precio
function calcularPrecio(precioUnitario: number, cantidad: number = 1): number {
  return precioUnitario * cantidad;
}
console.log(calcularPrecio(10));
console.log(calcularPrecio(20, 2));

// funcion para construir un mensaje
function construirMensaje(nombre: string = "amigo", hora: number) {
  (hora) 
  ? console.log(`Buenos días, ${nombre}! Son las ${hora} horas.`)
  : console.log(`Hola, ${nombre}!`);
}

console.log(construirMensaje("Maria", 10));
// 1. Imprime por consola el string 'Hello World'.
console.log('Hello World');
// 2. Declara una variable de las dos formas posibles, e imprime por consola los dos valores.
let num1 = 5;
const num2 = 7;
console.log(num1, num2);
// 3. Cambia ahora el valor de una de las dos variables e imprime por consola.
num1 = 15;
console.log(num1);
// 4. Crea dos variable numéricas e imprime el resultado de sumarlas por consola.
let num3 = 11;
let num4 = 2;
console.log(num3 + num4);
// 5. Declara dos variables de tipo string. Imprime por consola el resultado de concatenarlas.
let userName = 'John';
let surname = 'Nixon';
console.log(`${userName} ${surname}`);
// 6. Crea una función que imprima por consola el string 'Hello World'.
const greet = () => {
  return 'Hello World';
};
console.log(greet());
// 7. Crea una función que, al ser llamada, imprima por consola el resultado de la multiplicación de dos números introducidos como parámetros.
const multiplier = (num1, num2) => {
  return num1 * num2;
};
console.log(multiplier(5, 7));
// 8. Crea una función que imprima por consola el resultado de elevar al cubo un número dado como parámetro.
const cube = (num) => {
  return num ** 3;
};
console.log(cube(23));
// 9. Crea una función que saque por consola el área de un rectángulo de dimensiones dadas como parámetro.

const getRectangleArea = (width, length) => {
  return width * length;
};
console.log(getRectangleArea(5, 11));
// 10. Crea una función que imprima por consola un número al azar entre 0 y 10.

const getRandomNumber = () => {
  return Math.floor(Math.random() * 11);
};
console.log(getRandomNumber());
// 11. Adivina el número: Crea una función que primero guarde en una variable un número aleatorio del 1 al 10. Después, pregunte al usuario a través de un prompt un número del 1 al 10. Una vez recibida la respuesta, compare estos dos números. Si los números coinciden, imprime por consola un string indicando que el usuario ha acertado, sino, imprime por consola que el usuario ha fallado seguido del número correcto.
/*const numberGuesser = () => {
  let randomNumber = Math.ceil(Math.random() * 10);
  let userGuess = prompt('Adivina el número del 1 al 10');
  if (randomNumber === userGuess) {
    console.log('¡Has acertado!');
  } else {
    console.log('No has acertado. Sigue intentándolo');
  }
};
numberGuesser();*/
// 12. Crea una función que reciba un número como parámetro e imprima por consola si el número dado es par o impar.
const checkOddOrEven = (num) => {
  const isEven = () => {
    return num % 2 === 0;
  };
  const result = isEven(num) ? 'Even (Par)' : 'Odd (Impar)';
};
checkOddOrEven(7);
checkOddOrEven(14);
// 13. Crea una función que reciba un parámetro de tipo string e imprima por consola el string revertido. (ejemplo: 'casa' => 'asac).
function reverse(yourString) {
  let reversedWord = [];
  for (let i = yourString.length - 1; i >= 0; i--) {
    reversedWord.push(yourString[i]);
  }
  return reversedWord.join('');
}
console.log(reverse('palíndromo'));
// 14. Crea una función que devuelva la tabla de multiplicar de un número introducido como parámetro.
// LLama a la función desde console.log() para que el resultado se imprima por consola

const multiplicationTable = (num) => {
  let result = [];
  for (let i = 0; i < 11; i++) {
    result.push(num * i);
  }
  return result.join(' ');
};

console.log(multiplicationTable(5));
// 15. Crea una función que reciba un número por parámetros y retorne si el número recibido es un número primo.
// LLama a la función desde console.log() para que el resultado se imprima por consola

const isPrime = (number) => {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return number > 1;
};

console.log(isPrime(11) ? 'Es primo' : 'No es primo');

// num como parámetro y devulve el factorial de num
const factorial = (num) => {
  if (num < 0 || num % 1 !== 0) {
    return `El número ${num} no tiene factorial`;
  } else {
    let result = 1;
    for (let i = 1; i <= num; i++) {
      result = result * i;
    }
    return result;
  }
};
console.log(factorial(4));

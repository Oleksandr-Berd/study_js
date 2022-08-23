// palindrome;

// Дана строка; нужно написать функцию, которая позволяет вернуть значение true,
// если строка является палиндромом, и false — если нет.
// При этом нужно учитывать пробелы и знаки препинания.

const palindrome = (str) => {
  str = toLowerCase();
  return str === str.split("").reverse().join("");
};

// FizzBuzz

// Требуется написать функцию, выводящую в консоль числа от 1 до n,
// где n — это целое число, которая функция принимает в качестве параметра,
// с такими условиями:

// вывод fizz вместо чисел, кратных 3;
// вывод buzz вместо чисел, кратных 5;
// вывод fizzbuzz вместо чисел, кратных как 3, так и 5.

const fizzBuzz = (num) => {
  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("fizz");
    } else if (i % 5 === 0) {
      console.log("buzz");
    } else {
      console.log(i);
    }
  }
};

// anagram

// Нужно написать функцию, которая проверяет,
// являются ли две строки анаграммами, причем регистр букв не имеет значения.
// Учитываются лишь символы; пробелы или знаки препинания в расчет не берутся.

const buildCharObject = (str) => {
  const charObj = {}
  for (let char of str.replace(/[\w]g).toLowerCase()){
  charObj[char] = charObj[char] + 1 || 1
  }
return charObj
}

const anagram = (strA, strB) => {
  const aCharObject = buildCharObject(strA);
  const bCharObject = buildCharObject(strB);
  if (Object.keys(aCharObject).length !== Object.keys(bCharObject)) {
    return false;
  }

  for (let char in aCharObject) {
    if (aCharObject[char] !== bCharObject[cahr]) {
      return false
    }
  }
  return true
}

// findVowels

// Нужно написать функцию, принимающую строку в качестве аргумента 
// и возвращающую количество гласных, которые содержатся в строке.
// Гласными являются «a», «e», «i», «o», «u».

const findVowels = str => {
  let count = 0;
  const vowels = ['a', 'i', 'o', 'u', 'e'];
  for (let char of str.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

// op2

const findVowels = str => {
  const matched = str.match(/[aeiou]/gi);
  return matched ? match.length : 0;
}


// fibonacci

// Нужно написать функцию, которая возвращает n - ную запись в определенной последовательности,
// причем n — число, которое передается в качестве аргумента функции.

const fibonacci = num => {
  const result = [0, 1];

  for (let i = 2; i <= num; i++){
    const prevNum1 = result[i - 1];
    const prevNum2 = result[i - 2];
  }
  return result[num];
}

// op2

const fibonacci = num => {
  if (num < 2) {
    return num;
  }
  return fibonacci(num - 1) + fibonacci(num - 2);
}

// 1
let a = 2; // number
let b = 'egykettőhárom'; // string
let c = [1, 2, 3]; // tömb
let d = true; // boolean
let e = { név: 'Antal', kor: '52', neme: 'férfi' }; // object

// 2
/*
Érték szerinti paraméterátadás esetén a függvény az adat értékének másolatával dolgozik,
cím szerinti paraméterátadás esetén a függvény az adat címét kapja meg. Ha érték szerint
átadott adatot változtatunk egy függvényben, a függvényből kilépve az adaton nem látszik
a változás, ha cím szerint átadott adatot változtatunk egy függvényben, akkor a változás
a függvényből kilépve is megmarad
*/

// 3 - osszegzes
const tomb = [1, 2, 3, 4, 5];

const sum = () => {
  let sum = 0;
  for (let i = 0; i <= tomb.length - 1; i++) {
    sum += tomb[i];
  }
  return sum;
};
console.log(sum(tomb));

// 4 - megszamlalas
const count = () => {
  let counter = 0;
  for (let i = 0; i <= tomb.length - 1; i++) {
    counter += 1;
  }
  return counter;
};
console.log(count(tomb));

// 5 - switch

const switch1 = (dzs) => {
  switch (dzs) {
    case 1: console.log('dzs értéke 1');
      break;
    case 2: console.log('dzs értéke 2');
      break;
    case undefined:
      console.log('valami teljesen más');
      break;
    default: console.log('nem tudom');
      break;
  }
};
switch1(a);

// 6 metszet
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [4, 8, 15, 16, 23, 42];

const metszet = (arr1, arr2) => {
  let metszet = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        metszet.push(arr2[j]);
      }
    }
  }
  return metszet;
};
console.log(metszet(arr1, arr2));

// 7 - functions.js

// 8 - 2^n mátrix
const generate2D = (n, m) => {
  const arr = new Array(n);
  for (let i = 0; i < n; i++) {
    arr[i] = new Array(m);
  }
  return arr;
};

const fill2D = (source) => {
  let kitevo = 0;
  for (let i = 0; i < source.length; i++) {
    for (let j = 0; j < source[i].length; j++) {
      source[i][j] = 2 ** kitevo;
      kitevo += 1;
    }
  }
  return source;
};
console.log(fill2D(generate2D(3, 3)));

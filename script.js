// 2 пункт. Поместить в переменные и вывести в консоль результат выражений

console.log('');
console.log('2 пункт. Результат выражений');

let a1 = 5 % 3,
    a2 = 3 % 5,
    a3 = 5 + '3',
    a4 = '5' - 3,
    a5 = 75 + 'кг',
    a6 = 785 * 653,
    a7 = 100 / 25,
    a8 = 0 * 0,
    a9 = 0 / 2,
    a10 = 89 / 0,
    a11 = 98 + 2,
    a12 = 5 - 98,
    a13 = (8 + 56 * 4) / 5,
    a14 = (9 - 12) * 7 / (5+2),
    a15 = +"123",
    a16 = 1 || 0,
    a17 = false || true,
    a18 = true > 0;

console.log(a1, typeof a1);
console.log(a2, typeof a2);
console.log(a3, typeof a3);
console.log(a4, typeof a4);
console.log(a5, typeof a5);
console.log(a6, typeof a6);
console.log(a7, typeof a7);
console.log(a8, typeof a8);
console.log(a9, typeof a9);
console.log(a10, typeof a10);
console.log(a11, typeof a11);
console.log(a12, typeof a12);
console.log(a13, typeof a13);
console.log(a14, typeof a14);
console.log(a15, typeof a15);
console.log(a16, typeof a16);
console.log(a17, typeof a17);
console.log(a18, typeof a18);


// 3 пункт. Площадь прямоугольника

console.log('');
console.log('3 пункт. Площадь прямоугольника');

let width = 10,
    height = 23,
    SPryam = width * height + ' см2';

console.log(SPryam);


// 4 пункт. Объём цилиндра

console.log('');
console.log('4 пункт. Объём цилиндра');

let HCilindra = 10,
    RCilindra = a7 / 2;
    VCilindra = HCilindra * (RCilindra * RCilindra) * 3.1415 + ' см3'; /* Число Пи */

console.log(VCilindra);


// 5 пункт. Площадь круга

console.log('');
console.log('5 пункт. Площадь круга');

let r = 5,
    SKruga = (r * r) * 3.1415 + ' см2';

console.log(SKruga);


// 6 пункт. Площадь трапеции

console.log('');
console.log('6 пункт. Площадь трапеции');

var a = 5,
    b = 7,
    h = 10,
    STrap = (a + b) / 2 * h + ' см2';

console.log(STrap);


// 7 пункт. Найти переплату по кредиту

console.log('');
console.log('7 пункт. Переплата по кредиту');

let S = 2000000,
    p = 0.1,
    years = 5,
    Pereplata = (S * p) * years + ' рублей';

console.log(Pereplata);


// 8 пункт. Уравнения

console.log('');
console.log('8 пункт. х =');

var a = 8,
    b = 3,
    x = (16 - (a - 2 * b)) / 2;

console.log(x);

var x = (a - b * 15 ) / (b - 6);
    
console.log(x);

var x = 23780 / (1 + 2 + a + b);
    
console.log(x);
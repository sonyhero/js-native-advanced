console.log('lesson 2');

// Lexical environment
// http://jsflow.org/docs/lex-env/

//// Closure
// https://learn.javascript.ru/closure
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Closures
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%B7%D0%B0%D0%BC%D1%8B%D0%BA%D0%B0%D0%BD%D0%B8%D1%8F-%D0%B2-javascript-%D1%80%D0%B0%D0%B7-%D0%B8-%D0%BD%D0%B0%D0%B2%D1%81%D0%B5%D0%B3%D0%B4%D0%B0-c211805b6898
// https://www.youtube.com/watch?v=pahO5XjnfLA

//// Сurrying
// https://learn.javascript.ru/currying-partials
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%BA%D0%B0%D1%80%D1%80%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%B2-javascript-5ec4a1d88827

// Pattern Module
// https://habr.com/ru/company/ruvds/blog/419997/

// Recursion
// https://learn.javascript.ru/recursion
// https://www.youtube.com/watch?v=Kuq6oIN3PH0


// Task 01
// Реализовать функцию sum которая суммирует 2 числа следующим образом sum(3)(6) === 9

// const sum = (x: number) => {
//     return (y: number) => {
//         return y+x
//   }
//
// }
// console.log(sum(3)(6))


// Task 02
// Реализовать функцию makeCounter которая работает следующим образом:

// const makeCounter = () => {
//     let x = 0
//     return () => {
//         return ++x
//     }
// }
// const counter = makeCounter();
// const counter2 = makeCounter();
// console.log(counter()); // 1
// console.log(counter()); // 2
// console.log(counter2()); // 1
// console.log(counter()); // 3


// Task 03
// Переписать функцию из Task 02 так, что бы она принимала число в качестве аргумента и это число было стартовым значением счетчика
//
// const makeCounter = (n:number) => {
//     let x = n
//     return {
//         increase() {
//             return ++x
//         },
//         decrease() {
//             return --x
//         },
//         reset() {
//             return 0
//         },
//         set(n:number) {
//             return x=n
//         }
//     }
// }
// const increase = makeCounter(0).increase
// const decrease = makeCounter(0).decrease
// const reset = makeCounter(5).reset
// const set = makeCounter(3).set
//
// console.log(increase())
// console.log(increase())
// console.log(increase())
// console.log(decrease())
// console.log(decrease())
// console.log(decrease())
// console.log(reset())
// console.log(set(2))


// и возвращала следующий объект методов:
// increase: +1
// decrease: -1
// reset: установить счетчик в 0;
// set: установить счетчик в заданное значение;

// Task 04*
// Реализовать функцию superSum которая принимает число в качестве аргумента, которое указывает на количество слагаемых
// и что бы корректно работали следующие вызовы:
// 1) superSum(0) //0
// 2) superSum(3)(2)(5)(3) //10
// 3) superSum(3)(2)(5,3) //10
// 4) superSum(3)(2,5,3) //10
// 5) superSum(3)(2,5)(3) //10
// 6) superSum(3)(2,5)(3,9) //10

// P.S. типизируйте только аргументы, а при вызове функции используйте @ts-ignore

// Task 05
// решить все задачи по рекурсии которые даны в конце статьи https://learn.javascript.ru/recursion

// Вычислить сумму чисел до данного
// Рекурсия
// const sumTo = (n: number): number => {
//     if( n < 1) {
//         return 0
//     }
//     return n+(sumTo(n-1))
// }
// console.log(sumTo(3))
//Можно ли при помощи рекурсии посчитать sumTo(100000) - нет!

// Цикл
// const sumTo = (n: number): number => {
//     let sum = 0
//     for (let i = 0; i <= n; i++) {
//         sum+=i
//     }
//     return sum
// }
// console.log(sumTo(1000000))
//Можно ли при помощи цикла посчитать sumTo(100000) - да!

// Прогрессия
// const sumTo = (n: number): number => {
//     let sum
//     if( n < 1) {
//         return 0
//     }else {
//         sum = (2 + (n-1))/2*n
//     }
//     return sum
// }
// console.log(sumTo(1000000))
//Можно ли при помощи прогрессии посчитать sumTo(100000) - да!

// Вычислить факториал
// const factorial = (n: number): number => {
//     if (n) {
//         return n * factorial(n - 1)
//     } else
//         return 1
// }
//
// console.log(factorial(6))

// Task 06
// написать функцию, которая повторяет функционал метода flat массива на всю глубину.

    const flatted = (arr: any[], d: number = 1): any[] => {
    return d > 0 ? arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatted(val, d - 1) : val), [])
        : arr.slice();
};

console.log(flatted([1, 2, [3, 4, [5, 6]]], Infinity))

// just a plug
export default () => {
};
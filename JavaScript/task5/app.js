// Bir parametrli funksiya yazın, parametr olaraq cins(K,Q) və ad qəbul etsin. 
// Həmin funksiya geriyə funksiya göndərsin. 
// Geriyə göndərdiyi funksiyada əgər cins qadındırsa qarşısına Xanım, kişidirsə cənab yazılıb, console-a çıxarılsın.

// // Task 1 callback

// A: if-e ehtiyac yoxdu, ele callback-in argumentine ver getsin

// function add(num1,num2,callback) {
// if (callback === console.log) {
// console.log(num1 + num2)
// } 
// else if (callback === alert) {
// alert(num1 + num2)
// }
// }
// add(9, 10, console.log);

// // Task 2 womn.☕.

// function genderReveal (gender) {
//     if (gender === "M") {
//       return function (name) {
//         console.log(`Mr ${name}`)
//       }
//     } else if (gender === "W")
//       return function (name) {
//         console.log(`Mrs ${name}`)
//       }
//   }
//   const forMan = genderReveal("M")
//   forMan("Coşqun")
//   const forWoman = genderReveal("W")
//   forWoman("Rafael")

// // 1. Array constructoruna isEmpty() , removeDuplicates(), removeFalsies(), clear() methodlari elave edin. Diqqet edin ki, bu methodlar butun yaradilan massivlerde olmus olsun. (Array.prototype-a elave edilsin)

// let arr = [undefined, null, 2, 2, 19, "nineteen", "one"];

// Array.prototype.isEmpty = function () {
//   return this.length == 0;
// };

// Array.prototype.removeDuplicates = function () {
//   let newArray = [];
//   let sortedArray = this.sort();
//   for (let i = 0; i < sortedArray.length; i++) {
//     if (sortedArray[i] !== sortedArray[i + 1]) {
//       newArray.push(sortedArray[i]);
//     }
//   }
//   return newArray;
// };

// Array.prototype.removeFalsies = function () {
//     let newArray = [];
//     for (let i = 0; i < this.length; i++) {
//       if (Boolean(this[i])) {
//         newArray.push(this[i]);
//       }
//     }
//     return newArray;
// }

// Array.prototype.clear = function () {
// this.length = 0
// return this
// }

// -----------------------------------------------------------------------------------------------

// // 2. Object constructoruna objLength(), firstProperty(), lastProperty() kimi methodlar elave edin.

// let obj = {
//   name: "Bayern Munchen",
//   year: 1900,
//   weakness: null,
//   fanbase: undefined,
// };

// Object.prototype.objLength = function () {
//   return Object.keys(this).length;
// };

// Object.prototype.firstProperty = function () {
//   return Object.keys(this)[0];
// };

// Object.prototype.lastProperty = function () {
//   return Object.keys(this)[Object.keys(this).length - 1];
// };

// -----------------------------------------------------------------------------------------------

// // 3. Number constructoruna isPrime(), isEven(), isInfinity() kimi methodlar elave edin.

// let numb = 19;

// Number.prototype.isPrime = function () {
//   for (let i = 2; i < this; i++) {
//     if (this === 1) {
//       return false;
//     } else if (this % i == 0) {
//       return false;
//     } else {
//       return true;
//     }
//   }
// };

// Number.prototype.isEven = function () {
//   return this % 2 == 0;
// };

// Number.prototype.isEven = function () {
//   return this % 2 == 0;
// };

// Number.prototype.isInfinity = function () {
//   return this == Infinity;
// };

// -----------------------------------------------------------------------------------------------
// // 4. String constructoruna toCapitalize(), removeWhiteSpaces(), filterDigits() (cumleden reqemleri filterlesin ve geriye qaytarsin * )

// // "a12li37".filterDigits()  // [1,2,3,7]
// let str = "bayern Munchen 1900";

// String.prototype.toCapitalize = function () {
//   return this[0].toUpperCase() + this.slice(1, this.length);
// };

// String.prototype.removeWhiteSpaces = function () {
//   let newArray = this.split(" ");
//   return newArray.reduce((a, b) => {
//     return a + b;
//   });
// };

// String.prototype.filterDigits = function () {
//     let newArray = []
//     let splittedArray = this.split(' ')
//     for(let i =0;i<splittedArray.length ;i++){
//         if(splittedArray[i]>0 || splittedArray[i]<0){
//             newArray.push([splittedArray[i]])
//         }
//     }
//     return newArray
// };

// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------

// // Vehicle class-i yaradin. field-lari ( fuel , wheelCount, landOrAir)
// // Asagidakilar Vehicle-den torenir.
// // Car class-i yaradin. fieldlari: (model, country, fuel, wheelCount, landOrAir)
// // Plane class-i yaradin. fieldlari (model, country, fuel, wheelCount, landOrAir)
// // Calisin duzgun inheritance verin.

// class Vehicle {
//   constructor(fuel, wheelCount, landOrAir) {
//     this.fuel = fuel;
//     this.wheelCount = wheelCount;
//     this.landOrAir = landOrAir;
//   }
// }

// class Car extends Vehicle {
//   constructor(model, country, fuel, wheelCount, landOrAir) {
//     super(fuel, wheelCount, landOrAir);
//     this.model = model;
//     this.country = country;
//   }
// }

// class Plane extends Vehicle {
//   constructor(model, country, fuel, wheelCount, landOrAir) {
//     super(fuel, wheelCount, landOrAir);
//     this.model = model;
//     this.country = country;
//   }
// }

// const myCar = new Car("BMW", "Germany", "Gasoline", 4, "Land");
// const myPlane = new Plane(
//   "Christmas Bullet",
//   "USA",
//   "Low octane petroleum",
//   2,
//   "Air"
// );

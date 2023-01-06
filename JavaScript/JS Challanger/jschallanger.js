// //                                                    JS FUNDAMENTALS

// //1 Sum two numbers
// function myFunction(a, b) {
//   return a + b;
// }

// //2 Comparison operators, strict equality
// function myFunction(a, b) {
//   return a === b;
// }

// //3 Get type of value
// function myFunction(a) {
//   return typeof a;
// }

// //4 Get nth character of string
// function myFunction(a, n) {
//   return a[n - 1];
// }

// //5 Remove first n characters of string
// function myFunction(a) {
//   return a.slice(3);
// }

// //6 Get last n characters of string
// function myFunction(str) {
//   return str.slice(-3);
// }

// //7 Get first n characters of string
// function myFunction(a) {
//   return a.slice(0, 3);
// }

// //8 Find the position of one string in another
// function myFunction(a) {
//   return a.indexOf("is");
// }

// //9 Extract first half of string
// function myFunction(a) {
//   return a.slice(0, a.length / 2);
// }

// //10 Remove last n characters of string
// function myFunction(a) {
//   return a.slice(0, -3);
// }

// //11 Return the percentage of a number
// function myFunction(a, b) {
//   return (a * b) / 100;
// }

// //12 Basic JavaScript math operators
// function myFunction(a, b, c, d, e, f) {
//   return (((a + b - c) * d) / e) ** f;
// }

// //13 Check whether a string contains another string and concatenate
// function myFunction(a, b) {
//   return a.includes(b) ? b.concat(a) : a.concat(b);
// }

// //14 Check if a number is even
// function myFunction(a) {
//   return a % 2 === 0
// }

// //15 How many times does a character occur?
// function myFunction(a, b) {
//   return b.split(a).length - 1
// }

// //16 Check if a number is a whole number
// function myFunction(a, b) {
//   return parseInt(a) === a
// }

// //17 Multiplication, division, and comparison operators
// function myFunction(a, b) {
//   return a < b ? a / b : a * b
// }

// //18 Round a number to 2 decimal places ????????????????????????????
// function myFunction(a) {
//   return Math.round(a * 100) / 100;
// }

// //19 Split a number into its digits ????????????????????
// function myFunction(a) {
//   let newString = a.toString();
//   let array = newString.split('')
//   let newArray = []
//   for(let i =0;i<array.length;i++){
//     newArray.push(Number(array[i]))
//   }
//   return newArray
// }

// //                                                    JS ARRAYS              

// //1 Get nth element of array
// function myFunction(a, n) {
//   return a[n - 1]
// }

// //2 Remove first n elements of an array
// function myFunction(a) {
//   return a.slice(3)
// }

// //3 Get last n elements of an array
// function myFunction(a) {
//   return a.slice(-3)
// }

// //4 Get first n elements of an array
// function myFunction(a) {
//   return a.slice(0, 3);
// }

// //5 Return last n array elements
// function myFunction(a, n) {
//   return a.slice(-n);
// }

// //6 Remove a specific array element
// function myFunction( a, b ) {
//   return a.filter(elem => elem !== b)
// }

// //7 Count number of elements in JavaScript array
// function myFunction(a) {
//   return a.length;
// }

// //8 Count number of negative values in array
// function myFunction(a){
//   return a.filter((elem)=>elem<0).length
// }

// //9 Sort an array of strings alphabetically
// function myFunction( arr ) {
//   return arr.sort()
//   }

// //10 Sort an array of numbers in descending order
// function myFunction( arr ) {
//   return arr.sort((a, b) => b - a)
// }

// //11 Calculate the sum of an array of numbers
// function myFunction(a) {
// let sum = 0;
// for (let i in a) {
//   sum += a[i];
// }
//   return sum;
// }

// //12 Return the average of an array of numbers
// function myFunction(arr) {
//   let sum = 0;
//   for (let i in arr) {
//     sum += arr[i];
//   }
//   return sum / arr.length;
// }

//13 Return the longest string from an array of strings

// function myFunction(arr) {
//   let firstElem = "";
//   for (i in arr) {
//     if (arr[i].length > firstElem.length) {
//       firstElem = arr[i];
//     }
//   }
//   return firstElem;
// }

// //14 Check if all array elements are equal
// function myFunction(arr) {
//   return arr.every((elem) => elem === arr[0])
// }

// //15 Merge an arbitrary number of arrays
// function myFunction(...arrays) {
//   let emptyArray = []
//   let newArray = emptyArray.concat(...arrays)
//   return newArray
// }

// //16 Sort array by object property
// function myFunction(arr) {
//   return arr.sort((obj1, obj2) => obj1.b - obj2.b);
// }

// //17 Merge two arrays with duplicate values
// function myFunction(a, b) {
//   let newArray = [];
//   let sortedArray = a.concat(b).sort((elem1, elem2) => elem1 - elem2);
//   for (let i = 0; i < sortedArray.length; i++) {
//     if (sortedArray[i] !== sortedArray[i + 1]) {
//       newArray.push(sortedArray[i]);
//     }
//   }
//   return newArray;
// }

// //                                                    JS OBJECTS          

// //1 Accessing object properties one
// function myFunction(obj) {
//   return obj.country
// }

// //2 Accessing object properties two
// function myFunction(obj) {
//   return obj['prop-2']
// }

// //3 Accessing object properties three
// function myFunction(obj, key) {
//   return obj[key]
// }

// //4 Check if property exists in object
// function myFunction(a, b) {
//   return b in a;
// }

// //5 Check if property exists in object and is truthy
// function myFunction(a, b) {
//   return Boolean(a[b]);
// }

// //6 Creating Javascript objects one
// function myFunction(a) {
//   return { key: a };
// }

// //7 Creating Javascript objects two
// function myFunction(a, b) {
//   return { [a]: b };
// }

//8 Creating Javascript objects three

// function myFunction(a, b) {
//   let newObj = {};
//   for (i in a) {
//     newObj[a[i]] = b[i];
//   }
//   return newObj;
// }

// //9 Extract keys from Javascript object
// function myFunction(a) {
//   return Object.keys(a)
// }

// //10 Return nested object property  

// function myFunction(obj) {
//   if (obj.a && obj.a.b) {
//     return obj.a.b;
//   }
// }

// //11 Sum object values
// function myFunction(a) {
//   let newArray = Object.values(a);
//   let sum = 0;
//   for (let i in newArray) {
//     sum += newArray[i];
//   }
//   return sum;
// }

// //12 Remove a property from an object
// function myFunction(obj) {
//   delete obj.b;
//   return obj;
// }

// //13 Merge two objects with matching keys
// function myFunction(x, y) {
//   y.d = y.b
//   delete y.b
//   let obj = Object.assign({},x,y)
//   return obj
// }

//14 Multiply all object values by x

// function myFunction(a, b) {
//   for (i in a) {
//     a[i] = a[i] * b;
//   }
//   return a;
// }


// //                                                    JS DATES

// //1 Check if two dates are equal
// function myFunction(a, b) {
//   return a.getTime() === b.getTime()
// }

// //2 Return the number of days between two dates
// function myFunction(a, b) {
//   return Math.abs((a.getTime() - b.getTime())/86400000)
// }

// //3 Check if two dates fall on the exact same day
// function myFunction(a, b) {
//   return a.getDay() === b.getDay()
// }

// //4 Check if two dates are within 1 hour from each other
// function myFunction(a, b) {
//   return Math.abs(a.getTime() - b.getTime())/60000 <=60
// }

// //5 Check if one date is earlier than another
// function myFunction(a, b) {
//   return a.getTime() < b.getTime()
// }


// //                                                   JS SETS

// // Set 1 check if value

// function myFunction(set, val) {
//     return set.has(val);
//   }

// // Set 2 convert to array ??????????????

// // Set 3 get union of two sets ???????????????????

// // Set 4 creating js sets

// function myFunction(a, b, c) {
//   return new Set([a, b, c])
// }

// // Set 5 delete element from set

// function myFunction(set, val) {
//   set.delete(val);
//   return set;
// }
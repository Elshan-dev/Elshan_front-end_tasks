// // Task 1 odd even arrays 

const myArray = [2, 3, 7, 6, 2, 4, 9];

const splitByOddAndEven = (arr) => {
  let myArrayV2 = []
  let sortedArr = arr.sort()
  for (let i = 0; i < sortedArr.length; i++) {
    if (sortedArr[i] !== sortedArr[i + 1]) {
      myArrayV2.push(sortedArr[i]);
    }}
  
  const even = myArrayV2.filter((element) => {
    if (element % 2 == 0) {
      return element;
    }
  });
  const odd = myArrayV2.filter((elem) => {
    if (elem % 2 == 1) {
      return elem;
    }
  });
  return [even, odd];
};

console.log(splitByOddAndEven(myArray));

// // Task 2 Unique elements  (əgər indexi 4 olan "3" ilə indexi 7 olan "5"-in yerini dəyişsək funksiya yenə işləyəcək)

let myArray1 = [1, 1, 2, 3, 3, 4, 4, 5];
let newArray = [];
let onlyUnique = (array) => {
  let sortedArray = array.sort()
  for (let i = 0; i < sortedArray.length; i++) {
    if (sortedArray[i] !== sortedArray[i + 1]) {
      newArray.push(sortedArray[i]);
    } else {
      i++;
    }
  }
  return newArray;
};
console.log(onlyUnique(myArray1));

// // Task 3 find common words

const firstArray = ["dog", "cat", "parrot"];
const secondArray = ["lizard", "rat", "cat"];

const findCommonWords = (arr1, arr2) => {
  let commonWords = []
  for(let i in arr1){
    for(let x in arr2){
      if(arr1[i]=== arr2[x]){
        commonWords.push(arr1[i])
      }
    }
  }
return commonWords
};

console.log(findCommonWords(firstArray, secondArray));

// // Task 4 sort the array (əgər 6 yerinə 65 qoysaq funksiya yenə işləyəcək)

const mixedArray = ["b", 6, "a", "q", 7, 2];

const sortTheArray = () => {
  let numberArray = [];
  let stringArray = [];
  mixedArray.filter((elem) => {
    if (elem >= 0 || elem < 0) {
      numberArray.push(elem);
    } else {
      stringArray.push(elem);
    }
  });
  return numberArray.sort((a, b) => a - b).concat(stringArray.sort());
};
console.log(sortTheArray(mixedArray));
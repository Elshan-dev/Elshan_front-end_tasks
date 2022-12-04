// string_date
// // Task 1 repeat

// function repeatedSymbolCounter(a,b){
//     let say = 0
// for(let i of a){
//     if(i === b){
//        say++
//     }
//     else{
//         console.log('No matches')
//     }
// }
// return say
// }

// let answer = repeatedSymbolCounter('ALIONALI','A')
// console.log(answer)

// // Task 2 cap

// function capitalize(str){
//     let word = ''
//     for(let i in str){
//         if(i === '0'){
// word = word + str[0].toUpperCase()
// }
// else if (i !== '0') {
//    word = word + str[i]
// }
// }
// return word
// }

// let answer1 = capitalize('alion')
// console.log(answer1)

// // Task 3 kebab

// function snakeToKebab(str) {
// return   str.toLowerCase()
// }

// let answer2 = snakeToKebab('BU_TEST_UCUNDUR')
// console.log(answer2)

// // Task 4 format

// function nameFormat(str) {
//     let word2 = str.split(' ')
//     return word2[0]+ ' ' + word2[1][0] + '.'
// }

// let answer3 = nameFormat('Alion GreenHeart')
// console.log(answer3)

// // Task 5 ilkHerf

// function ilkHerfiDeyis(soz, ilkHerf) {
// let newword = soz.replace(soz[0],ilkHerf)
// return newword
// }

// let answer4 = ilkHerfiDeyis('alion','A')
// console.log(answer4)

// // Task 6 split

// function sentenceSplit(str) {
// return  str.split(' ')
// }

// let answer5 = sentenceSplit('Hasta la vista Bayern finalista')
// console.log(answer5)

// // Task 7 removecharacter

// function removeCharacterFromString(str,letter) {
// for(let i in str) {
// if(str[i] === letter) {
// return str.replace(str[i],'')  
// }
// }   
// }                               

// let answer6 = removeCharacterFromString('Elshan','a')
// console.log(answer6)

// // Task 8 gmail

// function verifyGmail(adress) {
//     if (adress.length >= 15 && adress.endsWith("@gmail.com")) {
//       alert(`Your email adress is ${adress}`)
//     } else {
//       alert(`Enter minimum of 5 symbols for username`)
//     }
//   }
// verifyGmail(prompt("Email adresinizi daxil edin:"))

// // Task 9 school

// let date = new Date()
// let school = date.getDay()
// function schoolday(){
//     if(school >=1 && school <=5) {
//         alert('Go to school')
//     }
//     else(
//         alert("Don't go to school")
//     )
// }
// schoolday()

// // Task 10 today

// let today = new Date()
// document.write(today)

// // Task 11 week

// let obj = {
//     1: 'Monday',
//     2: 'Tuesday',
//     3: 'Wednesday',
//     4: 'Thursday',
//     5: 'Friday',
//     6: 'Saturday',
//     0: 'Sunday'
// }
// let dateNow = new Date()
// dateNow.getDay()
// document.write(obj[dateNow.getDay()])

// // Task 12 month

// let obj = {
//     0: 'January',
//     1: 'February',
//     2: 'March',
//     3: 'April',
//     4: 'May',
//     5: 'June',
//     6: 'July',
//     7: 'August',
//     8: 'September',
//     9: 'October',
//     10: 'November',
//     11: 'December',
// }
// let dateNow = new Date()
// dateNow.getMonth()
// document.write(obj[dateNow.getMonth()])

// // Task 13 angel of death (w/o date)

// let userAge = +prompt('Enter your age:')
// function yearsLeft(userAge){
//     return 77 - userAge
// }
// let cavab = yearsLeft(userAge)
// alert(`You got ${cavab} more years,make the most of it`)

// // Task 13 angel of death (w/date)

// function reaper (birthyear) {
// let date = new Date();
// if (date.getFullYear() - birthyear < 77) {
//     alert(`You got ${77 - (date.getFullYear() - birthyear)} more years,make the most of it`);}
// else {alert('Knocking on your door')}
// }

// reaper(+prompt('Enter your birth year'))

// // Task 14 how much time?

// function HowMuchTime() {
// const now = Date.now();
// const dateOfBirth = new Date(prompt("Enter full date of birth (months start with 0):"));
// let ms = now - dateOfBirth.getTime();
// let sec = parseInt(ms / 1000);
// let min = parseInt(sec / 60);
// let hrs = parseInt(min / 60);
// let day = parseInt(hrs / 24);
// let mon = parseInt(day / 30);
// let yrs = parseInt(mon / 12);
// document.write(`${ms} milliseconds <br/>${sec} seconds <br/>${min} minutes <br/>${hrs} hours <br/>${day} days <br/>${mon} months <br/>${yrs} years`)
// }
// HowMuchTime();
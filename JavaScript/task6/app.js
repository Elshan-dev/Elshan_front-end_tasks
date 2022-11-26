// // Task 1

// const obj1 = {
//     ad: 'ger',
//     soyad: 'man'
// }

// const obj2 = {
//     ad: 'murebbe',
//     soyad: 'eldarov'
// }

// function deepclone(ob1,ob2){
// for (let key in ob1){
//     ob2[key]=ob1[key]
// }
// }

// deepclone(obj1,obj2)

// console.log(obj1,obj2)

// Task2 return

let anobject = {
    ad: 'ger',
    soyad: 'man'
}

function deleteProperty (a,b){
return delete b[a]
}

deleteProperty('soyad',anobject)

console.log(anobject.ad,anobject.soyad)

// // Task 2 if

// let obj = {
//     ad: 'ger',
//     soyad: 'man'
// }

// function deleteProperty (a,b){
// if (a===obj.soyad){
//     delete b['soyad']
// }
// else if (a===obj.ad){
//     delete b['ad']
// }
// }

// deleteProperty(obj.soyad,obj)

// console.log(obj.ad,obj.soyad)

// // Task 3

// const object = {
//     ad: 'pizza' ,
//     dad: 'ela' ,
//     olcu: '25sm',
// }

// let say = 0
// function objectCount (){
// for(let key in object){
//     say+=1
// }
// }

// objectCount()
// console.log (say)   
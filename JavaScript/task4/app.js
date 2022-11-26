// done ✅
let num1 = getnum()
let num2= getnum()
let pow = power(num1, num2)
let cem = sum(num1,num2)
let cixma = subtract(num1,num2)
let vurma = multiply(num1,num2)
let bolme = divide(num1,num2)

showresult(num1, num2, pow)
showresult(num1, num2, cem)
showresult(num1, num2, cixma)
showresult(num1, num2, vurma)
showresult(num1, num2, bolme)

function power (){
    return num1**num2
}

function getnum(){
   return +prompt('Enter number:')
}

function showresult (a,b,c){
    console.log(`Cavab :${c}`)
}

function sum(){
    return num1+num2
}

function subtract(){
    return num1-num2
}

function multiply(){
    return num1*num2
}

function divide(){
    return num1/num2
}

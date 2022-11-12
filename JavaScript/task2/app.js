// Task1 squareroot

let eded=+(prompt('Enter number:'))
let kvadratkok= Math.sqrt(eded)
console.log(kvadratkok)

// Task2 fahrenheit

let celsius=+(prompt('Enter celsius'))
let fahrenheit= celsius*1.8+32
console.log(fahrenheit)

// Task3 <>0

let num=+(prompt('Enter number:'))
if (num>0) {
    console.log('Positive')
}
else if (num<0) {
    console.log('Negative')
}
else if (num=='0'){
    console.log('Zero')
}
else {
    console.log('Error')
}

// Task4 odd even

let num1=+prompt('Enter number:')
if (num1 % 2 =='0'){
    console.log('An even number')
}
else if(num1%2 >0){
    console.log('An odd number')
}
else if(num1%2 <0){
    console.log('An odd number')
}
else{
    console.log('Not supported')
}

// Task5 max

let numero1=+prompt('Enter first number:')
let numero2=+prompt('Enter second number:')
let numero3=+prompt('Enter third number:')
console.log(Math.max(numero1,numero2,numero3))

// Task6 with if else

let numb1=+prompt('Enter number:')
let numb2=+prompt('Enter number:')
let operator1=prompt('Enter operator:')
if(operator1==='+') {
    console.log(numb1+numb2)
}
else if (operator1==='-'){
    console.log(numb1-numb2)
}
else if (operator1==='*'){
    console.log(numb1*numb2)
}
else if (operator1==='/'){
    console.log(numb1/numb2)
}
else {
    console.log('Not supported')
}

// Task6 with switch case

let numbr1=+prompt('Enter number:')
let numbr2=+prompt('Enter number:')
let operator=prompt('Enter operator:')
switch(operator){
    case '+':
        console.log(numbr1+numbr2)
        break;
        case '-':
            console.log(numbr1-numbr2)
            break;
            case '*':
                console.log(numbr1*numbr2)
                break;
                case '/':
                    console.log(numbr1/numbr2)
                    break;
                    default:
                        console.log('Not supported')
}
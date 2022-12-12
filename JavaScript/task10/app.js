// A: done ✅
let body = document.querySelector('body')
let circleOneElement = document.querySelector('.one')

circleOneElement.onclick = () => {
    body.style.backgroundColor = 'grey'
}

let circleTwoElement = document.querySelector('.two')

circleTwoElement.onclick = () => {
    body.style.backgroundColor = 'red'
}
let circleThreeElement = document.querySelector('.three')

circleThreeElement.onclick = () => {
    body.style.backgroundColor = 'blue'
}
let circleFourElement = document.querySelector('.four')

circleFourElement.onclick = () => {
    body.style.backgroundColor = 'yellow'
}

// Task circle 
// A: done ✅
let diameterElement = document.getElementById('diameter')
let buttonElement = document.getElementById('btn')
let lengthElement = document.getElementById('length')
let areaElement = document.getElementById('area')
let circleElement = document.getElementById('circle')

buttonElement.onclick = () => {
    if (diameterElement.value >=10 && diameterElement.value <=100){
circleElement.style.width = diameterElement.value +'px'
circleElement.style.height = diameterElement.value +'px'
lengthElement.innerHTML = `Length of circle: ${parseInt(diameterElement.value*Math.PI)}`
areaElement.innerHTML = `Area of circle: ${parseInt(diameterElement.value/2*Math.PI*diameterElement.value/2)}`
}
else {alert('You had one job 🤦🏻‍♂️')}
}

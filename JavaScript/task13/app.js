// A: done ✅
const rootElem = document.getElementById('root')
const simsim = document.createElement('h2')
rootElem.appendChild(simsim)

let message = ''
window.addEventListener('keydown',(element)=> {
    if(element.key === 'Backspace'){
        message = message.slice(0,message.length-1)
    }
    else{
    message+= element.key
}
    if(message === 'simsimacil'){
        simsim.textContent = 'xos geldin menim agam'
    }
})

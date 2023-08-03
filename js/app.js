const adviceNumber = document.querySelector('.advice-number')
const qouteElement = document.querySelector('.qoute')
const btnElement = document.querySelector('.btn')
let url = 'https://api.adviceslip.com/advice'



async function getAdvice(url) {
    let response = await fetch(url + '?t=' + Date.now()) 
    let data = await response.json()

    adviceNumber.innerHTML = `ADVICE #${data.slip.id}`
    qouteElement.innerHTML = `‘‘${data.slip.advice}’’`
} 

btnElement.addEventListener('click', (e) => {
    e.preventDefault()
    getAdvice(url)
})
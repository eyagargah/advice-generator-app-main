const adviceContent = document.querySelector('.advice-content')
const adviceNumber = document.querySelector('.advice-id')

const button = document.querySelector('#quoteGenerator')

button.addEventListener('click' , getAdvice)
function getAdvice(){
    fetch('	https://api.adviceslip.com/advice').then(response =>
    {
        return response.json()
    }).then(adviceData => {
        const adviceNum = adviceData.slip.id
        const adviceText = adviceData.slip.advice
    
        adviceNumber.textContent = adviceNum
        adviceContent.textContent = adviceText
    }).catch(
        error => { console.log(error)}
    )
}

window.onload = () => {
    getAdvice()
}
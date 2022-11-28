const colors = ["red", "green", "#333", "yellow"]
const btn = document.getElementById('btn')
let color = document.querySelector('.color')

btn.addEventListener('click', () => {
    let pinter = randNumber()
    color.textContent = colors[pinter]
    document.body.style.backgroundColor = colors[pinter]
})

function randNumber(){
    return Math.floor(Math.random() * colors.length)
}
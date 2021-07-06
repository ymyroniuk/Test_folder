let board = document.querySelector('#board');
let colors = ['#B22222', '#00BFFF', '#FF4500', '#2ecc71', 'coral', '#00FA9A']
const SQUARES_NUMBER = 500;

for (let i = 0; i < SQUARES_NUMBER; i++) {
    let square = document.createElement('div');
    square.classList.add('square')

    square.addEventListener('mouseover', setColor)
    square.addEventListener('mouseleave', removeColor)
    
    board.append(square)
}
function setColor(event) {
    let square = event.target
    let color = getRandomColor()
    square.style.backgroundColor = color;
    square.style.boxShadow = `0 0 2px ${color}, 0 0 10px${color}`
}
function removeColor(event) {
    let square = event.target
    square.style.backgroundColor = '#1d1d1d'
    square.style.boxShadow = `0 0 2px #000`
}
function getRandomColor() {
    let index = Math.floor(Math.random() * colors.length)
    return colors[index]
}
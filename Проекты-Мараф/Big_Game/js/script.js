let startBtn = document.querySelector('#start');
let screens = document.querySelectorAll('.screen');
let timeList = document.querySelector('#time-list')
let timeEl = document.querySelector('#time')
let board = document.querySelector('#board')


let time = 0
let score = 0

let colors = ['#00FFFF', '#00008B', '#FF8C00', '#2ecc71', '#9932CC', '#FFD700']


startBtn.addEventListener('click', event => {
  event.preventDefault()
  screens[0].classList.add('up')
})

timeList.addEventListener('click', event => {
  if (event.target.classList.contains('time-btn')) {
    time = parseInt(event.target.getAttribute('data-time'))
    screens[1].classList.add('up')
    startGame()
  }
})
board.addEventListener('click', event => {
  if (event.target.classList.contains('circle')) {
    score++
    event.target.remove()
    createRandomCircle()
    }
})

function startGame() {
  setInterval(decreaseTime, 1000)
  createRandomCircle()
  setTime(time)
}
function finishGame() {
  board.innerHTML = `<h1>Score:<span class='primary'>${score}</span></h1>`
  timeEl.parentNode.classList.add('hide')
}
function decreaseTime() {
  if (time === 0) {
    finishGame()
  } else {
    let current = --time
  if (current < 10) {
    current = `0${current}`
  }
  setTime(current)
  }
}
function setTime(value) {
  timeEl.innerHTML = `00:${value}`
}
function createRandomCircle() {
  let circle = document.createElement('div')
  circle.classList.add('circle')

  let size = getRandomNumber(10, 60)
  let {width, height} = board.getBoundingClientRect()

  let x = getRandomNumber(0, width - size)
  let y = getRandomNumber(0, height - size)

  board.append(circle)

  let color = getRandomColor()

  circle.style.background = color
  circle.style.boxShadow = `0 0 2px ${color}, 0 0 10px${color}`
  circle.style.width = `${size}px`
  circle.style.height = `${size}px`
  circle.style.top = `${y}px`
  circle.style.left = `${x}px`
}
function getRandomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min)
}
function getRandomColor() {
  let index = Math.floor(Math.random() * colors.length)
  return colors[index]
}






//За читерить 

//function winner() {
  //  function kill() {
   //     const circles = document.querySelector('.circle')
   //     if (circles) {
    //        circles.click()
    //    }
   // }
   // setInterval(kill, 5)
//}
let dragAndDrop = () => {
    let card = document.querySelector('.js-card')
    let cells = document.querySelectorAll('.js-cell')

let dragStart = function() {
    setTimeout(() => {
        this.classList.add('hide')
    }, 0)
 }

 let dragEnd = function() {
     this.classList.remove('hide')
 }
 let dragOver = function(event) {
     event.preventDefault()
 }
 let dragEnter = function() {
     this.classList.add('hovered')
 }
 let dragLeave = function(event) {
     event.preventDefault()
     this.classList.remove('hovered')
 }
 let dragDrop = function() {
     this.append(card)
     this.classList.remove('hovered')
 }
          
    cells.forEach((cell) => {
        cell.addEventListener('dragover',dragOver)
        cell.addEventListener('dragenter',dragEnter)
        cell.addEventListener('dragleave',dragLeave)
        cell.addEventListener('drop',dragDrop)
    })
  

    card.addEventListener('dragstart', dragStart)
    card.addEventListener('dragend', dragEnd)
}
dragAndDrop()
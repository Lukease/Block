const block1 = document.querySelector('.box')

block1.addEventListener('click' , newElement)

function newElement(event) {
   const newBox = document.createElement('div')
   newBox.classList.add('box')
   event.target.appendChild(newBox)
   event.target.removeEventListener('click',newElement)
   newBox.addEventListener('click',newElement)
}

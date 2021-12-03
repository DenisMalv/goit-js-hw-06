const decrement = document.querySelector('button[data-action="decrement"]')
const increment = document.querySelector('button[data-action="increment"]')
const value = document.querySelector('#value')
let counterValue = 0
 
decrement.addEventListener('click',() => value.textContent =  counterValue+=-1)
increment.addEventListener('click',() => value.textContent =  counterValue+=+1)

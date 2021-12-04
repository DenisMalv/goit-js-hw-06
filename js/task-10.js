function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const controls = document.querySelector('#controls')
const input = controls.firstElementChild
const boxes = document.querySelector('#boxes')
const createButton = document.querySelector('button[data-create]')
const destroyButton = controls.lastElementChild

console.log(input)
console.log(createButton)
console.log(destroyButton)
console.log(boxes)
// const numberOfboxes = input.addEventListener('input', (e) => e.currentTarget.value)
let width = 30
let height = 30
input.value = 0
createButton.addEventListener('click', () => createBoxes(input.value)
)
destroyButton.addEventListener('click', () => {
  boxes.innerHTML = ''
  width = 30
  height = 30
  input.value = 0
})

function createBoxes(amount) {
 
  for (let i = 1; i <= amount; i += 1){
    
    boxes.insertAdjacentHTML("beforeend", `<div style="width: ${width}px; height: ${height}px; background-color: ${getRandomHexColor()};"></div >`)
    width += 10
    height += 10
    
  }
  
}
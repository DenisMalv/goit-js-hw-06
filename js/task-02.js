const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsList = document.getElementById('ingredients')

const ingredientEl = ingredients.map(element => {

  const eachEl = document.createElement('li')
        eachEl.textContent=element
        eachEl.classList.add('item')

  return eachEl
})
ingredientsList.append(...ingredientEl)
const category   = document.querySelector('#categories')

const arrayOfChildren = [...category.children]
console.log(`Number of categories: ${arrayOfChildren.length}`)
arrayOfChildren.forEach(children => {
    console.log(`Category: ${children.firstElementChild.textContent}`)
    console.log(`Elements: ${children.lastElementChild.children.length}`)
})

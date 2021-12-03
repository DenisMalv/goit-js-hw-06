const input = document.querySelector("#validation-input")
console.dir(input)
// input.classList.add('invalid')
console.log(input.value.length)
console.log(input.dataset.length)
console.log(Number(input.dataset.length))

// const i = input.addEventListener("input", (e) => { console.log(e.currentTarget.value) })

input.addEventListener('blur', () => {
    if (input.value.trim().length === Number(input.dataset.length)) {
        input.classList.add('valid')
        input.classList.remove('invalid')
    } 
    else {
        input.classList.add('invalid')
        input.classList.remove('valid')
    }
    })
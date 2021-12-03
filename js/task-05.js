const input = document.querySelector("#name-input")
const output = document.querySelector("#name-output")
console.log(input)
console.log(output)

input.addEventListener("input", (e) =>
    (input.value.trim() !== '')
        ? output.textContent = e.currentTarget.value
        : output.textContent = `Anonymous`
   )
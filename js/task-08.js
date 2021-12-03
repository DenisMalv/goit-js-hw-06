const form = document.querySelector('.login-form')
const button = form.lastElementChild
const inputEmail = form.email
const inputPassword = form.password

form.addEventListener("submit", formSubmit)

function formSubmit(event) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget);

     formData.forEach((value, name) => {

        if (value.trim() === '' ) {
            inputEmail.focus()
        alert(`Все поля должны быть заполнены!`)
        }
       
       console.log({ [name]: value })
       form.reset()

    })
}


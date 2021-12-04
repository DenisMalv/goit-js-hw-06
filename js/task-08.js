const form = document.querySelector('.login-form')
const button = form.lastElementChild
const inputEmail = form.email
const inputPassword = form.password

form.addEventListener("submit", formSubmit)


function formSubmit(event) {
    event.preventDefault()
    const formElements = event.currentTarget.elements

    const formData = new FormData(event.currentTarget);
    console.dir(formElements)

    if (formElements.email.value.trim() === '' || formElements.password.value.trim()==='') {
     return alert(`Все поля должны быть заполнены!`)
    } else {
        console.log(
            {
                [formElements.email.name]: formElements.email.value,
                [formElements.password.name]: formElements.password.value,
            }
        )
        return form.reset() 
    }
}


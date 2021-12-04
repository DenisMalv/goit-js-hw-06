const form = document.querySelector('.login-form')
const button = form.lastElementChild
const inputEmail = form.email
const inputPassword = form.password

form.addEventListener("submit", formSubmit)


function formSubmit(event) {
    event.preventDefault()
    const { email, password } = event.currentTarget.elements

    if (email.value.trim() === '' || password.value.trim() === '') {
        return alert(`Все поля должны быть заполнены!`)
    }
    const formData = new FormData(event.currentTarget);
    // // console.dir(formElements)
    const dataValue = {}
    formData.forEach((value, name) => dataValue[name] = value)
    console.log(dataValue)
    form.reset()
}

    
    



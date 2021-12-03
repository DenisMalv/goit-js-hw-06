const form = document.querySelector('.login-form')
const button = form.lastElementChild
const inputEmail = form.email
const inputPassword = form.password

form.addEventListener("submit", formSubmit)


function formSubmit(event) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget);
    
    if (inputEmail.value.trim() === '' || inputPassword.value.trim()==='') {
     return alert(`Все поля должны быть заполнены!`)
    } else {
        formData.forEach((value, name) => {
           console.log({ [name]: value })
           return form.reset() 
        })
    }
   
   
   
 
}


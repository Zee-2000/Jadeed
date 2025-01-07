const loginForm = document.getElementsByClassName("login")
const email = document.getElementById("email1")
const passwd = document.getElementById("passwd1")

loginForm.addEventListener('submit', (event)=>
{
    event.preventDefault()

    const mail = email.value
    const pass = passwd.value
    const re = new RegExp("ab*c")

    if(mail.trim() === '')
    {
        alert("Invalid Email")
    }
    return
    if(pass.trim() === '')
    {
        alert("Invalid password")
    }
    return
})
//Later some updates on authentication 
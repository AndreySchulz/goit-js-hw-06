const loginFormRef = document.querySelector('.login-form');
let formInfo = []
loginFormRef.addEventListener("submit", (event)=>{
    event.preventDefault();
    const {elements: {email, password}}= event.currentTarget;
    if(email.value=== "" || password.value === ""){
        alert("все поля должны быть заполнены.")
    }
    formInfo.email = email.value
    formInfo.password = password.value
    loginFormRef.reset()
    console.log(formInfo)
})

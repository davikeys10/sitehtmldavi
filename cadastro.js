// ---------- VALIDAÇÃO USERNAME ---------- //
let usernameInput = document.getElementById("username");
let usernameLabel = document.querySelector('label[for="username"]');
let usernameHelper = document.getElementById("username-helper");

function mostrarPopup(input, label) { 

// Mostrar popup de campo obrigatório
    usernameInput.addEventListener("focus", () => {
    usernameLabel.classList.add("required-popup")
})

// Ocultar popup de campo obrigatório
    usernameInput.addEventListener("blur", () => {
    usernameLabel.classList.remove("required-popup")
})
}
mostrarPopup(usernameInput, usernameLabel)

// Validar valor do input
usernameInput.addEventListener("input", (e)=>{
    let valor = e.target.value
    if(valor.lenght <= 3) {
        usernameInput.classList.remove("correct")
        usernameInput.classList.add("erro")
        usernameHelper.innerText = "seu usuario precisa ter mais de 3 caracteres"
        usernameHelper.classList.add("visible")
    } else {
        usernameInput.classList.remove("error")
        usernameInput.classList.add("correct")
        usernameHelper.classList.remove("visible")
    }
})

//validar Email
let userEmailLabel = document.querySelector("label[for='email']")
let userEmailInput = document.getElementById("email")
let userEmailHelper = document.getElementById("email-helper")



mostrarPopup(userEmailInput, userEmailLabel)

userEmailInput.addEventListener("input", (e) => {
    let valor = e.target.value
    if(valor.includes("@") && valor.includes(".")){
        userEmailInput.classList.remove("error")
        userEmailHelper.classList.remove("visible")
        userEmailInput.classList.add("correct")
    } else {
        userEmailInput.classList.remove("correct")
        userEmailInput.classList.add("error")
        userEmailHelper.innerText = "Email inválido"
        userEmailHelper.classList.add("visible")

    }
    }
)

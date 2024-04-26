import validate from "./validations/validate.js"

let inputNome = document.getElementById("input-nome")
let inputAno = document.getElementById("input-ano")
let inputEmail = document.getElementById("input-email")
let inputSenha = document.getElementById("input-senha")

inputNome.onchange = (event) => {
    console.log(inputNome.value)
    validate("nome", inputNome);
}

inputAno.onblur = (event) => {
    console.log(inputAno.value)
    validate("ano", inputAno);
}

inputEmail.onchange = (event) => {
    console.log(inputEmail.value)
    validate("email", inputEmail);
}

inputSenha.onchange = (event) => {
    console.log(inputSenha.value)
    validate("senha", inputSenha);
}
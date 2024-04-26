import validarNome from "./validations/nome-validation.js"

let inputNome = document.getElementById("input-nome")
let inputData = document.getElementById("input-data")
let inputEmail = document.getElementById("input-email")
let inputSenha = document.getElementById("input-senha")

inputNome.onchange = (event) => {
    console.log(inputNome.value)
    validarNome(inputNome);
}

inputData.onblur = (event) => {
    console.log(inputData.value)
}

inputEmail.onchange = (event) => {
    console.log(inputEmail.value)
}

inputSenha.onchange = (event) => {
    console.log(inputSenha.value)
}
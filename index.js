import validate from "./validations/validate.js"

let inputNome = document.getElementById("input-nome")
let inputAno = document.getElementById("input-ano")
let inputEmail = document.getElementById("input-email")
let inputSenha = document.getElementById("input-senha")
let botaoEnviar = document.getElementById("submit-button")

inputNome.onchange = (event) => {
    validate("nome", inputNome);
}

inputAno.onblur = (event) => {
    validate("ano", inputAno);
}

inputEmail.onchange = (event) => {
    validate("email", inputEmail);
}

inputSenha.onchange = (event) => {
    validate("senha", inputSenha);
}

botaoEnviar.addEventListener("click", (event) => {

    const allInputs = ["nome", "ano", "email", "senha"]

    for(let idx in allInputs) {

        let tipo = allInputs[idx]

        if(!validate(tipo, document.getElementById("input-"+tipo))){
            event.preventDefault();
            alert("Por favor, preencha todos os campos corretamente.");
            return;
        }
    }

    alert("Cadastro efetuado com sucesso! :)");

});
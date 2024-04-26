import validarNome from "./nome-validation.js"
import validarAno from "./ano-validation.js"
import validarEmail from "./email-validation.js"
import validarSenha from "./senha-validation.js"

export default function validate(tipo, input) {
    const value = input.value
    const errorMessage = document.getElementById(`text-error-${tipo}`)

    if(validations[tipo](value)){
        errorMessage.className = "esconde-texto"
        input.className = "input-validado"
    } else {
        errorMessage.className = ""
        input.className = "input-error"
    }
}

const validations = {
    "nome": validarNome,
    "ano": validarAno,
    "email": validarEmail,
    "senha": validarSenha,
}
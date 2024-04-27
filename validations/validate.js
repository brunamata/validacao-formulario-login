import validarNome from "./nome-validation.js"
import validarAno from "./ano-validation.js"
import validarEmail from "./email-validation.js"
import { validarSenha, getClassificacaoSenha} from "./senha-validation.js"

export default function validate(tipo, input) {
    const value = input.value
    const errorMessage = document.getElementById(`text-error-${tipo}`)

    const validarValor = validations[tipo](value)

    if(validarValor){
        errorMessage.className = "esconde-texto"
        input.className = "input-validado"

        if(tipo == "senha") {
            limparTextoSenhas();

            const classificacao = getClassificacaoSenha(value)
            const text = document.getElementById("classificacao-senha-"+classificacao);
            text.className=""
        }

    } else {
        if(tipo == "senha") limparTextoSenhas()

        errorMessage.className = ""
        input.className = "input-error"
    }

    return validarValor
}

const validations = {
    "nome": validarNome,
    "ano": validarAno,
    "email": validarEmail,
    "senha": validarSenha,
}

function limparTextoSenhas() {

    const classificacoes = ["fraca", "moderada", "forte"]

    for (let idx in classificacoes) {
        const text = document.getElementById("classificacao-senha-"+classificacoes[idx]);
        text.className="esconde-texto"
    }

}
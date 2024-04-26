export default function validarNome(inputNome) {
    const nome = inputNome.value
    const errorMessage = document.getElementById("text-error-nome")

    if(nomeEhValido){
        console.log("é valido")
        errorMessage.className = "esconde-texto"
    } else {
        console.log("Não é válido")
        errorMessage.className = ""
    }

}

function nomeEhValido(nome) {

    let regex = /^[a-zA-Z]{6,}$/;

    return regex.test(nome)
}

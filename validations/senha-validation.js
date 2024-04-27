export function validarSenha(senha) {

    const nome = document.getElementById("input-nome").value
    const ano = document.getElementById("input-ano").value

    // verifica nome ou ano na senha
    if((nome && senha.includes(nome)) ||
            (ano && senha.includes(ano.toString()))) { 
        return false
    }

    let regex = new RegExp(`^(?=.*[@#%&!+])(?=.*\\d)(?=.*[a-zA-Z]).{6,20}$`);
    return regex.test(senha)
}

export function getClassificacaoSenha(senha) {

    for(let idx in classificacoesRegex){

        let regex = Object.values(classificacoesRegex[idx])[0]

        if(regex.test(senha)){
             return Object.keys(classificacoesRegex[idx])
        }

    }

    //default: senha fraca, pois pode até ter mais caracteres, mas não atende ao requisito para "aumentar de nível"
    return "fraca"

}

const classificacoesRegex = [
    {"forte": /^(?=(?:[^@#$%^&!+]*(?:[@#$%^&!+][^@#$%^&!+]*){2,}))(?=(?:\D*\d){2,})(?=(?:[^A-Z]*[A-Z]){2,}).{13,}$/},
    {"moderada": /^(?=.*[@#$%^&!+])(?=.*\d)(?=.*[A-Z]).{9,}$/},
    {"fraca": /^(?=.*[@#$%^&!+])(?=.*\d).{1,7}$/}
]

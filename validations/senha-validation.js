import validarNome from "./nome-validation.js";

export default function validarSenha(senha) {

    const nome = document.getElementById("input-nome").value
    const ano = document.getElementById("input-ano").value

    const nomeEscapado = nome.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

    let regex = new RegExp(`^(?!.*(${nomeEscapado}|${ano}))(?=.*[!@#%&+])(?=.*\\d)(?=.*[a-zA-Z]).{6,20}$`);

    return regex.test(senha)
}
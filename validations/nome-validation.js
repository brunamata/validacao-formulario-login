export default function validarNome(nome) {

    let regex = /^[a-zA-Z]{7,}$/;
    //comprimento maior que 6 é no mínimo 7

    return regex.test(nome)
}

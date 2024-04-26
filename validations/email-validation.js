export default function validarEmail(email) {

    let regex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.(?:br|com|net|org|com\.br)$/;

    return regex.test(email)
}

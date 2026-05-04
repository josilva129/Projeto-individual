function validaEmail() {
    let email = input_email.value
    let conter = ['@', '.com']
    let validacao = 0

    for (let i = 0; i < conter.length; i++) {

        if (email.includes(conter[i])) {
            validacao++
        }
    }

    if (validacao != 2) {
        p_mensagem.innerHTML = 'Digite um endereço de e-mail válido'
        return false
    }

    p_mensagem.innerHTML = ''
    return true
}

function validaSenha() {
    let senha = input_senha.value
    
    if(senha == '' || senha.length < 8){
        div_mensagem.innerHTML = 'Informe a senha'
        return false
    }

    div_mensagem.innerHTML = ''
    return true
}

function entrar() {

    let emailValido = validaEmail()
    let senhaValida = validaSenha()
    
     if(emailValido && senhaValida){
        setTimeout(() => {
            window.location.href = './home.html'
        }, 1000)
    }
   
}
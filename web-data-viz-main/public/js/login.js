function validaEmail() {
    let email = input_email.value
    let conter = ['@', '.com']
    let validacao = 0
    let mensagem = ''

    for (let i = 0; i <= conter.length; i++) {

        if (email.includes(conter[i])) {
            validacao++
        }
    }

    if (validacao != 2) {
        mensagem = 'Digite um endereço de e-mail válido'
    }

    p_mensagem.innerHTML = mensagem
}

function validaSenha() {
    let senha = input_senha.value
    let mensagem = ''
    
    if(senha == ''){
        mensagem = 'Informe a senha'
    }

    div_mensagem.innerHTML = mensagem
}

function entrar() {
    validaEmail()
    validaSenha()

     if(validaEmail() && validaSenha()){
        setTimeout(() => {
            window.location.href = './home.html'
        }, '1000')
    }
   
}
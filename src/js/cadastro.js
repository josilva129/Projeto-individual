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
    let validacao = 0
    let mensagem = ''

    let caracteres = [
        '@', '#', '$', '%', '&', '*', '!', '?',
        '_', '-', '+', '=', '.', ',',
        '(', ')', '[', ']', '{', '}',
        '^', '~', '|', '/',
        ':', ';', "'", '"'
    ];

    let numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

    for(let i = 0; i <= caracteres.length; i++){

        if(senha.includes(caracteres[i])){
            validacao++
        }
    }

    for(let i = 0; i <= numeros.length; i++){

        if(senha.includes(numeros[i])){
            validacao++
        }
    }

    if(senha.toLowerCase() && senha.toUpperCase()){
        validacao++
    }


    if(senha.length >= 8){
        validacao++
    }
    

    if(validacao < 4){
        mensagem = `
        ❌ Minimo de 8 caracteres <br>
        ❌ Pelo menos 1 número<br>
        ❌ Combinação de caracteres maiúsculos e minúsculos.
        `
    }

    div_mensagem.innerHTML = mensagem
}

function validaRepetirSenha(){
    let repetirSenha = input_repetir_senha.value
    let senha = input_senha.value
    let mensagem = ''

    if(repetirSenha != senha){
        mensagem = 'Confirmação inválida. As senhas devem coincidir.'
    }

    p_mensagemSenha.innerHTML = mensagem

}

function validaNome(){
    let nome = input_nome.value
    let mensagem = ''

    if(nome == ''){
        mensagem = 'Informe o nome'
    }

    p_mensagemNome.innerHTML = mensagem

}

function validaSobreNome(){
    let sobreNome = input_sobrenome.value
    let mensagem = ''

    if(sobreNome == ''){
        mensagem = 'Informe o sobrenome'
    }

    p_mensagemSobreNome.innerHTML = mensagem
}

function cadastrar(){
    validaEmail()
    validaSenha()
    validaRepetirSenha()
    validaNome()
    validaSobreNome()
}
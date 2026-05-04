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
        mensagem = 'Digite um endereço de e-mail válido'
        p_mensagem.innerHTML = mensagem
        return false
    }

    p_mensagem.innerHTML = ''
    return true
}

function validaSenha() {
    let senha = input_senha.value
    let validacao = 0

    let caracteres = [
        '@', '#', '$', '%', '&', '*', '!', '?',
        '_', '-', '+', '=', '.', ',',
        '(', ')', '[', ']', '{', '}',
        '^', '~', '|', '/',
        ':', ';', "'", '"'
    ];

    let numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

    for(let i = 0; i < caracteres.length; i++){

        if(senha.includes(caracteres[i])){
            validacao++
            break
        }
    }

    for(let i = 0; i < numeros.length; i++){

        if(senha.includes(numeros[i])){
            validacao++
            break
        }
    }

    if(senha !== senha.toLowerCase() && senha !== senha.toUpperCase()){
        validacao++
    }


    if(senha.length >= 8){
        validacao++
    }
    

    if(validacao < 4){
        div_mensagem.innerHTML = `
            ❌ Minimo de 8 caracteres <br>
            ❌ Pelo menos 1 número<br>
            ❌ Combinação de caracteres maiúsculos e minúsculos.
            `
        return false
    }

    div_mensagem.innerHTML = ''
    return true
}

function validaRepetirSenha(){
    let repetirSenha = input_repetir_senha.value
    let senha = input_senha.value

    if(repetirSenha != senha){
        p_mensagemSenha.innerHTML = 'Confirmação inválida. As senhas devem coincidir.'
        return false
    }

    p_mensagemSenha.innerHTML = ''
    return true

}

function validaNome(){
    let nome = input_nome.value

    if(nome == ''){
        p_mensagemNome.innerHTML = 'Informe o nome'
        return false
    }

    p_mensagemNome.innerHTML = ''
    return true

}

function validaSobreNome(){
    let sobreNome = input_sobrenome.value

    if(sobreNome == ''){
        p_mensagemSobreNome.innerHTML = 'Informe o sobrenome'
        return false
    }

    p_mensagemSobreNome.innerHTML = ''
    return true
}

function validaCasa(){
    let casa = select_casa.value;

    if(casa == 'selecione'){
        p_mensagemCasa.innerHTML = 'Informe sua casa de hogwarts'
        return false
    }

    p_mensagemCasa.innerHTML = ''
    return true
}

function validaNascimento(){
    let nascimento = input_nascimento.value

    if(nascimento == ''){
        p_mensagemNascimento.innerHTML= 'Informe sua data de nascimento'
        return false
    } 

    p_mensagemNascimento.innerHTML = ''
    return true
}

function cadastrar(){
    let emailValido = validaEmail()
    let senhaValida = validaSenha()
    let repetirValido = validaRepetirSenha()
    let nomeValido = validaNome()
    let sobrenomeValido = validaSobreNome()
    let casaValida = validaCasa()
    let nascimentoValido = validaNascimento()

     if (
        !emailValido ||
        !senhaValida ||
        !repetirValido ||
        !nomeValido ||
        !sobrenomeValido ||
        !casaValida ||
        !nascimentoValido
    ) {
        return
    }

    var nome = input_nome.value;
    var sobrenome = input_sobrenome.value;
    var email = input_email.value;
    var senha = input_senha.value;
    var repSenha = input_repetir_senha.value;
    var nascimento = input_nascimento.value;
    let casa = select_casa.value;

    console.log("Enviando dados...");

    fetch("/usuarios/cadastrar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            nomeServer: nome,
            sobrenomeServer: sobrenome,
            emailServer: email,
            senhaServer: senha,
            repSenhaServer: repSenha,
            nascimentoServer: nascimento,
            casaServer: casa
        })
    })
    .then(function (resposta) {
        console.log("Resposta:", resposta);

        if (resposta.ok) {
            alert("Cadastro realizado com sucesso!");
            window.location = "login.html";
        } else {
            alert("Erro ao cadastrar");
        }
    })
    .catch(function (erro) {
        console.log("Erro:", erro);
    });
}
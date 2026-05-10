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

    var emailVar = input_email.value
    var senhaVar = input_senha.value
    
     if(emailValido && senhaValida){

            fetch("usuarios/autenticar", {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            emailServer: emailVar,
            senhaServer: senhaVar
        })
    }).then(function(resposta){
        console.log("ESTOU NO THEN DO entrar()!")

        if(resposta.ok) {
            console.log(resposta);

            resposta.json().then(json => {
                console.log(json);
                console.log(JSON.stringify(json));
                localStorage.EMAIL_USUARIO = json.email;
                localStorage.NOME_USUARIO = json.nome;
                localStorage.ID_USUARIO = json.idUsuario;

                setTimeout(() => {
                    window.location = "./home.html";
                }, 1000)
            });
        } else {
            console.log("Houve um erro ao tentar realizar o login!");

            resposta.text().then(texto => {
                console.log(texto);
                div_mensagem.innerHTML = 'Login incorreto'
            });
        }
    }).catch(function(erro) {
        console.log(erro)
    })

    return false;
        
    }

    
   
}
function acessoPermitido() {

    let main = document.querySelector('.main')
    let acessoNegado = document.getElementById('acessoNegado')
    let textoRedirecionando = document.getElementById('redirecionando')

    let contador = 5

    var idUsuario = localStorage.ID_USUARIO

    if (!idUsuario) {
        if (main) {
            main.style.display = 'none'
        }

        if (acessoNegado) {
            acessoNegado.style.display = 'flex'
        }

        let redireciona = setInterval(() => {

            if(textoRedirecionando){
                document.getElementById('redirecionando').innerHTML = `Redirecionando para a página HOME <b>${contador}</b>`;
            contador--
            }

            if (contador < 0) {
                 window.location = './home.html'

                clearInterval(redireciona)
            }
        }, 1000)

        return false

    }
    return true;
}

function encerrarSessao() {
    localStorage.clear();
    window.location = './login.html'
}
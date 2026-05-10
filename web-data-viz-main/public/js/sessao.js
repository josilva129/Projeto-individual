function acessoPermitido() {

    let main = document.querySelector('.main')
    let contador = 5

    var idUsuario = localStorage.ID_USUARIO

    if (!idUsuario) {
        main.style.display = 'none'
        acessoNegado.style.display = 'flex'

        setInterval(() => {
            document.getElementById('redirecionando').innerHTML = `Redirecionando para a página HOME <b>${contador}</b>`;
            contador--

            if (contador < 0) {
                let redireciona = window.location = './home.html'

                clearInterval(redireciona)
            }
        }, 1000)

    }
    return true;
}

function encerrarSessao() {
    localStorage.clear();
    window.location = './login.html'
}
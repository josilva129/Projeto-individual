
function validado(){

    let btnSair = document.querySelector('.sair')
    let buttons = document.querySelector('.loginCadastro')

    let permitido = acessoPermitido()

    if(permitido){
        buttons.classList.add('oculto')
    } else {
        btnSair.classList.add('oculto')
    }
}

validado()
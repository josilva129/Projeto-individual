


function validado(){

    let btnSair = document.querySelector('.sair')
    let buttons = document.querySelector('.loginCadastro')

    let permitido = acessoPermitido()

    if(permitido){
        buttons.style.display = 'none'
    } else {
        btnSair.style.display = 'none'
    }
}

validado()
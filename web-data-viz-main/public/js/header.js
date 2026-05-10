let buttons = document.querySelector('.loginCadastro')
let btnSair = document.querySelector('.sair')

function validado(){

    let permitido = acessoPermitido()

    if(permitido){
        buttons.style.display = 'none'
    } else {
        btnSair.style.display = 'none'
    }
}

validado()
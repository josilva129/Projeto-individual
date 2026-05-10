 let buttons = document.querySelector('.loginCadastro')

function validado(){

    let permitido = acessoPermitido()

    if(permitido){

        buttons.style.display = 'none'
    }
}

validado()
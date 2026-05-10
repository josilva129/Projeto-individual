
function validado(){

    let permitido = acessoPermitido()

    if(!permitido){
        let main = document.querySelector('.main')

        main.style.display = 'none'
    }

}

validado()
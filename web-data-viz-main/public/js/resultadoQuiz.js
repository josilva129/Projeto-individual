
function carregarResultado(){
    fetch(`/quiz/listarResultados/${localStorage.ID_USUARIO}`)
    .then(function(resposta){
        return resposta.json();
    })

    .then(function(dados){
        console.log(dados);

        linhasResultados.innerHTML = ''
        if(dados.length == 0){
            linhasResultados.innerHTML = `
                <div class="semResultado">
                    Você ainda não realizou nenhum quiz
                </div>
            `;
            return
        }

        for(let i = 0; i < dados.length; i++){

            let resultado = ''

            if(dados[i].pontuacao <= 3){
                resultado = 'Trouxa'
            } else if(dados[i].pontuacao <= 6){
                resultado = 'Bruxo iniciante'
            } else if(dados[i].pontuacao <= 8){
                resultado = 'Aluno de Hogwarts'
            } else {
                resultado = 'Mestre das relíquias'
            }

            linhasResultados.innerHTML += 
            `<div class="linha">
                <div>${dados[i].pontuacao}</div>
                <div>${resultado}</div>
                <div>${dados[i].dataResultado}</div>
            </div>

            <div class="divisao"></div>
            `
        }
    })
}

carregarResultado();
const quiz = [

    {
        pergunta: 'Qual destes objetos foi destruído para eliminar uma das Horcruxes de Voldemort?',

        alternativas: [
            'Espada de Godric Gryffindor',
            'O diário de Tom Riddle',
            'A Varinha das Varinhas',
            'O Mapa do Maroto'
        ],

        correta: 1
    },

    {
        pergunta: 'Qual é o patrono de Harry Potter?',

        alternativas: [
            'Cervo',
            'Lobo',
            'Fênix',
            'Coruja'
        ],

        correta: 0
    },

    {
        pergunta: 'Qual é o nome da prisão dos bruxos em Harry Potter?',

        alternativas: [
            'Nurmengard',
            'Azkaban',
            'Hogwarts',
            'Godric Hollow'
        ],

        correta: 1
    },

    {
        pergunta: 'Qual feitiço é utilizado para desarmar um oponente?',

        alternativas: [
            'Avada Kedavra',
            'Lumos',
            'Expelliarmus',
            'Expecto Patronum'
        ],

        correta: 2
    },

    {
        pergunta: 'Qual professor lecionava Defesa Contra as Artes das Trevas em "O Cálice de Fogo"?',

        alternativas: [
            'Remo Lupin',
            'Bartô Crouch Jr.',
            'Alastor Moody',
            'Horácio Slughorn'
        ],

        correta: 2
    },

    {
        pergunta: 'Quem foi o verdadeiro dono da Varinha das Varinhas antes de Harry Potter?',

        alternativas: [
            'Severus Snape',
            'Alvo Dumbledore',
            'Lord Voldemort',
            'Draco Malfoy'
        ],

        correta: 3
    },

    {
        pergunta: 'Qual foi o ingrediente raro roubado por Hermione do escritório de Snape para preparar a Poção Polissuco?',

        alternativas: [
            'Asfódelo em pó',
            'Pó de chifre de bicórnio',
            'Raiz de mandrágora',
            'Sangue de salamandra'
        ],

        correta: 1
    },

    {
        pergunta: 'Qual foi a primeira senha da Mulher Gorda mostrada nos filmes para entrar na sala comunal da Grifinória?',

        alternativas: [
            'Caput Draconis',
            'Fortuna Major',
            'Pig Snout',
            'Mimbulus Mimbletonia'
        ],

        correta: 0
    },

    {
        pergunta: 'Qual o nome do fantasma da casa Sonserina?',

        alternativas: [
            'Barão Sangrento',
            'Nick Quase Sem Cabeça',
            'Frei Gorducho',
            'Helena Ravenclaw'
        ],

        correta: 0
    },

    {
        pergunta: 'Qual objeto permitia que Harry respirasse debaixo d’água durante a segunda tarefa do Torneio Tribruxo?',

        alternativas: [
            'Hidromel encantado',
            'Erva-do-mar',
            'Guelricho',
            'Poção de Guelras'
        ],

        correta: 2
    }

]

let perguntaAtual = 0;
let numAtual = 1
let textoDoBotao = 'Proxima pergunta'
let pontuacao = 0

function carregarPergunta() {

    document.getElementById('numeroQuestao').innerHTML = `Questão ${numAtual++}`

    document.getElementById('textoBotao').innerHTML = textoDoBotao

    document.getElementById('perguntasDinamicas').innerHTML =
        quiz[perguntaAtual].pergunta;

    document.getElementById('alt1').innerHTML =
        quiz[perguntaAtual].alternativas[0];

    document.getElementById('alt2').innerHTML =
        quiz[perguntaAtual].alternativas[1];

    document.getElementById('alt3').innerHTML =
        quiz[perguntaAtual].alternativas[2];

    document.getElementById('alt4').innerHTML =
        quiz[perguntaAtual].alternativas[3];
}

function proxima() {

    let respostaMarcada =
        document.querySelector('input[name="questao"]:checked');

        if (respostaMarcada == null) {

        alert("Escolha uma alternativa");

        return;
    }

    verificarResposta()

    perguntaAtual++;

    if(perguntaAtual >= 9){
        textoDoBotao = 'Finalizar quiz'
    }

    if (perguntaAtual < quiz.length) {

        carregarPergunta();

    } else {

        setTimeout(() => {
            alert(pontuacao)
        },2000)

    }

   
}

function verificarResposta(){

    let respostaMarcada =
        document.querySelector('input[name="questao"]:checked');


    let respostaUsuario = Number(respostaMarcada.value);

    let respostaCorreta = quiz[perguntaAtual].correta;

    if(respostaUsuario == respostaCorreta){

       pontuacao++
    } 


}


carregarPergunta();
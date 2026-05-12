
function validado() {

  var permitido = acessoPermitido()

  if (permitido) {
    const ctxFilmes = document.getElementById('filmesPopulares');

    new Chart(ctxFilmes, {
      type: 'bar',
      data: {
        labels: [
          "Relíquias da Morte II",
          "Relíquias da Morte I",
          "Cálice de Fogo",
          "Enigma do Príncipe",
          "Câmara Secreta",
          "Pedra Filosofal",
          "Ordem da Fênix",
          "Prisioneiro de Azkaban",


        ],
        datasets: [{
          label: 'Popularidade (score)',
          data: [96, 90, 88, 83, 82, 80, 78, 76],
          backgroundColor: '#d4af37',
          borderRadius: 3,
        }]
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        plugins: {
          legend: {
            display: false
          },
          title: {
            display: true,
            text: 'Filmes mais populares de Harry Potter',
            color: '#fff'
          }
        },
        scales: {
          x: {
            beginAtZero: true,
            ticks: {
              color: '#ffffff'
            },
            grid: {
              color: 'rgba(255,255,255,0.2)'
            }
          },
          y: {
            ticks: {
              color: '#ffffff'
            },
            grid: {
              color: 'rgba(255,255,255,0.1)'
            },

          }
        }
      }
    });

    const ctxFeiticos = document.getElementById('feiticosPopulares');

    new Chart(ctxFeiticos, {
      type: 'bar',
      data: {
        labels: [
          "Expelliarmus",
          "Estupefaça",
          "Expecto Patronum",
          "Avada Kedavra",
          "Crucio",
          "Imperio",
          "Accio",
          "Lumos",
        ],
        datasets: [{
          label: 'Popularidade (score)',
          data: [24, 19, 11, 8, 5, 4, 4, 4],
          backgroundColor: '#d4af37',
          borderRadius: 3,
        }]
      },
      options: {
        indexAxis: 'y',
        responsive: true,

        plugins: {
          legend: {
            display: false
          },
          title: {
            display: true,
            text: 'Feitiços mais populares de Harry Potter',
            color: '#fff'
          }
        },

        scales: {
          x: {
            beginAtZero: true,
            ticks: {
              color: '#ffffff'
            },
            grid: {
              color: 'rgba(255,255,255,0.2)'
            }
          },
          y: {
            ticks: {
              color: '#ffffff'
            },
            grid: {
              color: 'rgba(255,255,255,0.1)'
            },
            categoryPercentage: 0.7,
            barPercentage: 0.8
          }
        }
      }
    });

    
  }

  return true
}

function buscarCasa(){
  fetch("/dashboard/casaUsuarios")
  .then(function(resposta){
    return resposta.json();
  })

  .then(function(dados){
    console.log(dados);

    document.getElementById('casaUsuarios').innerHTML = dados[0].casa;
  })
}

validado()
buscarCasa()




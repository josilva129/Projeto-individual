function validado() {
  var permitido = acessoPermitido();

  if (permitido) {
    const ctxFilmes = document.getElementById("filmesPopulares");

    new Chart(ctxFilmes, {
      type: "bar",
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
        datasets: [
          {
            label: "Popularidade (score)",
            data: [96, 90, 88, 83, 82, 80, 78, 76],
            backgroundColor: "#d4af37",
            borderRadius: 3,
          },
        ],
      },
      options: {
        indexAxis: "y",
        responsive: true,
        plugins: {
          legend: {
            display: false,
          },
          title: {
            display: true,
            text: "Filmes mais populares de Harry Potter",
            color: "#fff",
          },
        },
        scales: {
          x: {
            beginAtZero: true,
            ticks: {
              color: "#ffffff",
            },
            grid: {
              color: "rgba(255,255,255,0.2)",
            },
          },
          y: {
            ticks: {
              color: "#ffffff",
            },
            grid: {
              color: "rgba(255,255,255,0.1)",
            },
          },
        },
      },
    });

    fetch("/dashboard/feiticos")
      .then(function (resposta) {
        return resposta.json();
      })
      .then(function (dados) {
        let nomes = [];
        let popularidade = [];

        for (let i = 0; i < dados.length; i++) {
          nomes.push(dados[i].nomeFeitico);
          popularidade.push(dados[i].popularidade);
        }

        const ctxFeiticos = document.getElementById("feiticosPopulares");

        new Chart(ctxFeiticos, {
          type: "bar",
          data: {
            labels: nomes,
            datasets: [
              {
                label: "Popularidade (score)",
                data: popularidade,
                backgroundColor: "#d4af37",
                borderRadius: 3,
              },
            ],
          },
          options: {
            indexAxis: "y",
            responsive: true,

            plugins: {
              legend: {
                display: false,
              },
              title: {
                display: true,
                text: "Feitiços mais populares de Harry Potter",
                color: "#fff",
              },
            },

            scales: {
              x: {
                beginAtZero: true,
                ticks: {
                  color: "#ffffff",
                },
                grid: {
                  color: "rgba(255,255,255,0.2)",
                },
              },
              y: {
                ticks: {
                  color: "#ffffff",
                },
                grid: {
                  color: "rgba(255,255,255,0.1)",
                },
                categoryPercentage: 0.7,
                barPercentage: 0.8,
              },
            },
          },
        });
      });
  }

  return true;
}

function buscarCasa() {
  fetch("/dashboard/casaUsuarios")
    .then(function (resposta) {
      return resposta.json();
    })

    .then(function (dados) {
      console.log(dados);

      document.getElementById("casaUsuarios").innerHTML = dados[0].casa;
    });
}

//Calculo Matematico
function arqComp() {
  let bilheteria = [
    {
      filme: "As Relíquias da Morte",
      valor: 1.34,
    },
    {
      filme: "Harry Potter e a Pedra Filosofal",
      valor: 1.02,
    },
    {
      filme: "Harry Potter e as Relíquias da Morte ",
      valor: 0.972,
    },
    {
      filme: "Harry Potter e a Ordem da Fênix ",
      valor: 0.942,
    },
    {
      filme: "Harry Potter e o Enigma do Príncipe",
      valor: 0.934,
    },
    {
      filme: "Harry Potter e a Câmara Secreta",
      valor: 0.926,
    },
    {
      filme: "Harry Potter e o Cálice de Fogo",
      valor: 0.896,
    },
    {
      filme: "Harry Potter e o Prisioneiro de Azkaban",
      valor: 0.795,
    },
  ];

  let total = 0;

  for (let i = 0; i < bilheteria.length; i++) {
    total += bilheteria[i].valor;
  }

  let moedaTotal = total.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

  bilhoes.innerHTML = `${moedaTotal} Bilhões`;
  return true;
}

validado();
buscarCasa();
arqComp();

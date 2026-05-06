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

const ctxBilheteria = document.getElementById('bilheteria');


new Chart(ctxBilheteria, {
  type: 'line',
  data: {
    labels: [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8"
    ],
    datasets: [{
        label: 'Bilheteria mundial (US$ milhoes)',
      data: [
        1020,
        926,
        795,
        896,
        942,
        934,
        972,
        1340
      ],
      borderColor: '#d4af37',
      backgroundColor: 'rgba(212, 175, 55, 0.2)',
      tension: 0.3,
      pointBackgroundColor: '#fff',
      pointBorderColor: '#d4af37',
      pointRadius: 5,
      fill: true
    }]
  },
  options: {
    responsive: true,

    plugins: {
      legend: {
       display: false
      },
      title: {
        display: true,
        text: 'Bilheteria dos filmes de Harry Potter',
        color: '#ffffff'
      }
    },

    scales: {
      x: {
        ticks: {
          color: '#ffffff'
        },
        grid: {
          color: 'rgba(255,255,255,0.1)'
        }
      },
      y: {
        beginAtZero: true,
        ticks: {
          color: '#ffffff'
        },
        grid: {
          color: 'rgba(255,255,255,0.1)'
        }
      }
    }
  }
});
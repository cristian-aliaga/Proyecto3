const ApiEndpointDolar = 'https://mindicador.cl/api/uf';
const display = document.querySelector("Chart2");

const getData = async () => {
  const res = await fetch(ApiEndpointDolar);
  const data = await res.json();
  return data.serie;
}

let valorUF = [];
let fechaUF = [];

export const displayChart2 = async () => {
  const payloads = await getData();
  valorUF = payloads.map(payload => payload.valor)
  fechaUF = payloads.map(payload => payload.fecha)

  const ctx = document.getElementById('Chart2');

  let labelsDate = [
    fechaUF[0, 0].substring(0, 10),
    fechaUF[0, 1].substring(0, 10),
    fechaUF[0, 2].substring(0, 10),
    fechaUF[0, 3].substring(0, 10)
  ]

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labelsDate,
      datasets: [{
        label: 'UF',
        data: valorUF.slice(0, 7),
        borderWidth: 1,
        borderColor: '#363435',
        backgroundColor: '#666565',
      },
      ]

    },
    options: {
      scales: {
        y: {
          beginAtZero: false
        }
      },
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          callbacks: {
            label: function (context) {
              let label = context.dataset.label || '';
              if (label) {
                label += ': $';
              }
              if (context.parsed.y !== null) {
                label += context.parsed.y + '-';
              }
              return label;
            }
          }
        },
        title: {
          display: true,
          text: 'Varlor UF',
          font: {
            weight: 'bold',
            size: 12
          },
          padding: {
            top: 0,
            bottom: 10
          }
        }
      }
    }
  });

}
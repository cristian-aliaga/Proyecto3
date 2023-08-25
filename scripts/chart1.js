async function getData(){
    const url1 = 'https://mindicador.cl/api/dolar'
    const url2 = 'https://mindicador.cl/api/euro'
    const response1 = await fetch(url1)
    const data1 = await response1.json()
    const response2 = await fetch(url2)
    const data2 = await response2.json()
    return {
        dolar: data1.serie, 
        euro: data2.serie
    };
}

let valorDolar = [];
let fechaDolar = [];
let valorEuro = [];

export const displayChart1 = async () => {
    const payloads = await getData();
    valorDolar = payloads.dolar.map(payload => payload.valor)
    fechaDolar = payloads.dolar.map(payload => payload.fecha)
    valorEuro = payloads.euro.map(payload => payload.valor)
  
    const ctx = document.getElementById('Chart1');

    let labelsDate =[
      fechaDolar[0, 0].substring(0, 10),
      fechaDolar[0, 1].substring(0, 10),
      fechaDolar[0, 2].substring(0, 10),
      fechaDolar[0, 3].substring(0, 10),
      fechaDolar[0, 5].substring(0, 10),
      fechaDolar[0, 6].substring(0, 10),
      fechaDolar[0, 7].substring(0, 10),
      fechaDolar[0, 8].substring(0, 10),
      fechaDolar[0, 9].substring(0, 10),
      fechaDolar[0, 10].substring(0, 10),
      fechaDolar[0, 11].substring(0, 10),
      fechaDolar[0, 12].substring(0, 10),
      fechaDolar[0, 13].substring(0, 10),
      fechaDolar[0, 14].substring(0, 10),
      fechaDolar[0, 15].substring(0, 10),
      fechaDolar[0, 16].substring(0, 10),
      fechaDolar[0, 17].substring(0, 10),
      fechaDolar[0, 18].substring(0, 10),
      fechaDolar[0, 19].substring(0, 10),
      fechaDolar[0, 10].substring(0, 10),
      fechaDolar[0, 21].substring(0, 10),
      fechaDolar[0, 22].substring(0, 10),
      fechaDolar[0, 23].substring(0, 10),
      fechaDolar[0, 24].substring(0, 10),
      fechaDolar[0, 25].substring(0, 10)
    ]

    new Chart(ctx, {
      data: {
        labels: labelsDate,
        datasets: [{
          type: 'bar',
          label: 'Dolar',
          data: valorDolar,
          borderWidth: 1,
          borderColor: '#363435',
          backgroundColor: '#666565',
        },{
            type: 'line',
            label: 'Euro',
            data: valorEuro,
            borderWidth: 1,
            borderColor: '#363435',
            backgroundColor: '#9c9c9c'
          }
        ]
  
      },
      options: {
        scales: {
          y: {
            beginAtZero: false
          }
        },
        plugins: {
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
            text: 'Varlor Cambio',
            font: {
              weight: 'bold',
              size: 18
            },
            padding: {
              top: 1,
              bottom: 5
            }
          }
        }
      }
    });
  
  }
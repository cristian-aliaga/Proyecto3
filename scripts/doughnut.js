async function getData() {
    const url = 'https://api.coindesk.com/v1/bpi/currentprice.json'
    const response = await fetch(url)
    const data = await response.json()
    return {
        usd: data.bpi.USD,
        gbp: data.bpi.GBP,
        eur: data.bpi.EUR,
    };
}

export const displayDoughnut = async () => {
    const payloads = await getData();
    let bitcoinUSD = payloads.usd.rate_float;
    let bitcoinEUR = payloads.eur.rate_float;
    let bitcoinGBP = payloads.gbp.rate_float;
    const ctx = document.getElementById('doughnut');
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['USD', 'EUR', 'GBP'],
            datasets: [{
                label: '$',
                data: [bitcoinUSD, bitcoinEUR, bitcoinGBP],
                backgroundColor: [
                    'rgb(204, 204, 204)',
                    'rgb(181, 179, 179)',
                    'rgb(161, 159, 159)'
                ],
                hoverOffset: 4,
                borderWidth: 1,
                borderColor: [
                    'rgb(120, 120, 120)',
                    'rgb(120, 120, 120)',
                    'rgb(120, 120, 120)',
                  ],
            }]
        },
        options: {
            responsive: false,
            plugins: {
                legend: {
                    position: 'left',
                },
                title: {
                    display: true,
                    text: 'Bitcoin Price Index'
                }
            }
        },
    });
}
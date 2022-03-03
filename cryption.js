//Document Gets
const btcValue = document.getElementById('btc-value');
const reloadBtn = document.getElementById('reload-btn');

const options = {
    method: 'GET',
    url: 'https://data.messari.io/api/v1/assets/bitcoin/metrics',
}

const btcPrice = async () => {
    try {
    const res = await axios.request(options);
    const data = res.data.data.market_data.price_usd;
    const dataAbs = Math.abs(data);
    const dataSign = Math.sign(data);

    btcValue.innerText = `The BTC price is $${dataAbs > 999 ? dataSign
    * ((dataAbs/1000).toFixed(1)) + 'k' : dataSign*dataAbs}`;
    } catch (e) {
        console.log('ERROR!!!', e);
    }
}

function load() {
    window.location.reload();
}

reloadBtn.addEventListener('click', load);

btcPrice();





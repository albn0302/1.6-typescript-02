export function setupCounter(element: HTMLDivElement) {
  const updateCounter = async () => {
    try {
      const response = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
      const data = await response.json();

      const bitcoinUSD = data.bpi.USD.rate;
      const bitcoinGBP = data.bpi.GBP.rate;
      const bitcoinEUR = data.bpi.EUR.rate;

      element.innerHTML = ` 
        <ul class="counter-bg">
          <li>USD: ${bitcoinUSD}$</li>
          <li>GBP: ${bitcoinGBP}£</li>
          <li>EUR: ${bitcoinEUR}€</li>
        </ul>
      `
    } catch (error) {
      console.error('Error when fetching Bitcoin data:', error);
      element.innerHTML = 'Error when fetching Bitcoin data.'
    }
  }

  updateCounter();
  setInterval(updateCounter, 60000);
}

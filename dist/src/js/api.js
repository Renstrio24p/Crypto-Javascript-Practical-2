import styles from '../assets/sass/modules/app.module.scss';

export default function API() {
  fetch('https://api.coingecko.com/api/v3/exchange_rates?page=1')
    .then((response) => response.json())
    .then((data) => {
      const rates = data.rates;
      // Access the rates data here and perform further operations
      displayCurrencies(rates);
      console.log(rates);
    })
    .catch((error) => {
      console.log('An error occurred while fetching data:', error);
    });

  function displayCurrencies(rates) {
    const rootElement = document.getElementById('start');
    rootElement.innerHTML = '';

    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.placeholder = 'Search Currency';
    searchInput.addEventListener('input', handleSearch);

    const currenciesContainer = document.createElement('div');

    for (const key in rates) {
      const currency = rates[key];
      const currencyElement = document.createElement('div');
      currencyElement.innerHTML = `
        <div class=${styles['crypto-box']}>
          <div class=${styles['image-container']}>
            <img src="${getImageURL(currency.type)}" alt="${currency.type}" />
          </div>
          <div>
            <h2>Name: ${currency.name}</h2>
            <p>Type: ${currency.type}</p>
            <p>Unit: ${currency.unit}</p>
            <p>Value: ${currency.value}</p>
          </div>
        </div>
      `;
      currenciesContainer.appendChild(currencyElement);
    }

    rootElement.appendChild(searchInput);
    rootElement.appendChild(currenciesContainer);
  }

  function handleSearch(event) {
    const searchTerm = event.target.value.toLowerCase();
    const currencyElements = document.querySelectorAll(`.${styles['crypto-box']}`);

    currencyElements.forEach((currencyElement) => {
      const currencyName = currencyElement.querySelector('h2').textContent.toLowerCase();
      currencyElement.style.display = currencyName.includes(searchTerm) ? 'flex' : 'none';
    });
  }

  function getImageURL(type) {
    // Add conditions to return the image URL based on the currency type
    if (type === 'crypto') {
      return './src/assets/images/crypto.jpg';
    } else if (type === 'fiat') {
      return './src/assets/images/fiat.webp';
    } else if (type === 'commodity') {
      return './src/assets/images/commodity.jpg';
    } else {
      return 'path_to_default_image.png';
    }
  }
}


export default function API(){

    const ListCrypto = document.getElementById('list-crypto');
    const Loading = document.getElementById('loading');
    const Notification = document.getElementById('notification');
  
    let page = 1;
  
    function DataFetch() {
      Loading.style.display = 'block';
  
      fetch(`https://api.coingecko.com/api/v3/exchange_rates?page=${page}`)
        .then((response) => response.json())
        .then((data) => {
          const rates = data.rates;
  
          // Tenary IF Else
          { rates.length === 0 ?
            Notification.style.display = 'block':
            rates.forEach((rates) => {
              const ItemList = document.createElement('li');
              ItemList.textContent = `${rates.name}: ${rates.value}`;
              ListCrypto.appendChild(ItemList);
            });
  
            page++;
            console.log(rates)
            Loading.style.display = 'none';
          }
        })
        .catch((error) => {
          console.log('An error occurred while fetching data:', error);
          Loading.style.display = 'none';
        });
    }
  
    function LazyLoading() {
      const TopScroll = window.pageYOffset || document.documentElement.scrollTop;
      const WinHeight = window.innerHeight || document.documentElement.clientHeight;
      const DocHeight = document.documentElement.scrollHeight;
  
      { TopScroll + WinHeight >= DocHeight - 100 && DataFetch() }
    }
  
    window.addEventListener('scroll', LazyLoading);
}


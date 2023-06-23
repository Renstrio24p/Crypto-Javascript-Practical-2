
export default function API(){

    const ListCrypto = document.getElementById('list-crypto');
    const Loading = document.getElementById('loading');
    const Notification = document.getElementById('notification');

    let Page = 1;

    function DataFetch(){
        Loading.style.display = 'block';

        fetch(`https://api.coingecko.com/api/v3/exchange_rates?page=${Page}`)
        .then((response) => response.json())
        .then((data) => {
            const Rates = data.Rates;

            {
                Rates.length === 0 ? 
                Notification.style.display = 'block' :
                Rates.forEach((Rates)=>{
                    const ItemList = document.createElement('li');
                    ItemList.textContent = `
                        ${Rates.name} : ${Rates.value}`;
                        ListCrypto.appendChild(ItemList);

                });

                Page++;
                Loading.style.display = 'none';
            }
        })
        .catch((error) => {
            console.log('An Error occured while fetching data : ', error);
            Loading.style.display = 'none';
        });
    }
    // Create Lazy Load Function
    
    function LazyLoading(){
        const TopScroll = window.pageYOffset || document.documentElement.scrollTop;
        const WinHeight = window.innerHeight || document.documentElement.clientHeight;
        const DocHeight = document.documentElement.scrollHeight;

        {
            scrollTop + WinHeight >= DocHeight - 100 && DataFetch();
        }
        return DataFetch();
    }

    window.addEventListener('scroll', LazyLoading);

    document.getElementById('container-list').innerHTML = `
    
        <h1> Crypto Currency Rates </h1>
        <ul id="list-crypto"></ul>
        <div id="loading"> Loading... </div>
        <div id="notification"> No more record found.</div>
    
    `


}


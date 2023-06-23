import './assets/sass/index.scss'

import API from "./js/api";

API();
 
   document.getElementById('root').innerHTML = `
     <h1>Crypto Currency Rates</h1>
     <ul id="list-crypto"></ul>
     <div id="loading">Loading...</div>
     <div id="notification">No more records found.</div>
   `;
 
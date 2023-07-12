import UniqueHash from "./security/hasher";
import './assets/sass/index.scss'
import Start from "./start";

const DOM = document.getElementById('app');
DOM.id = UniqueHash();
Start(DOM);
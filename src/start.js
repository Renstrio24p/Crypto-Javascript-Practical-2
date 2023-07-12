import API from "./js/api"
import styles from './assets/sass/modules/app.module.scss'
import Render from "./render/render";

export default function Start(DOM){

    API();

    DOM.innerHTML = (
        `
            <div id='start' class=${styles['crypto-container']}>
            </div>
            <footer id=footer></footer>
        `
    )

    Render();

}
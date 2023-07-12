import Footer from "../js/footer";
import UniqueHash from "../security/hasher";

export default function Render(){

    const Foot = document.getElementById('footer');

    // this allow the rendering method to change every hashed in the webpage eveytime the user loads the page.
    window.addEventListener('DOMContentLoaded', () => {
        Foot.id = UniqueHash();
    })

    // Rendered the Footer Component
    Footer(Foot);
}
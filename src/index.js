import 'bootstrap/dist/css/bootstrap.css';
import './style.css';


function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }
document.getElementById("darkMode").addEventListener("click", darkMode);




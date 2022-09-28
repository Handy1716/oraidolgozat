import 'bootstrap/dist/css/bootstrap.css';
import './style.css';


function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }
function kepUrl() {
   // var element = document.img;
    document.getElementById("kep").src = document.getElementById("kepurl").value;
    document.getElementById("kep").style.width = document.getElementById("szelesseg").value + 'px';
    document.getElementById("kep").style.border = document.getElementById("keret").value + 'px solid';
    document.getElementById("kep").style.borderColor = document.getElementById("szin").value;
 }



 
document.getElementById("darkMode").addEventListener("click", darkMode);
document.getElementById("darkMode").addEventListener("click", darkMode);
document.getElementById("kepurl").addEventListener("keyup", kepUrl);
document.getElementById("szelesseg").addEventListener("keyup", kepUrl);
document.getElementById("keret").addEventListener("keyup", kepUrl);
document.getElementById("szin").addEventListener("keyup", kepUrl);




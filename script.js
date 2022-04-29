/*display login pop up when client hover to "My Account"
  then hide login pop up when client click anywhere outside the pop up
*/

const login = document.querySelector(".link-login");
const loginpop = document.querySelector(".dropdown-content")

login.addEventListener("mouseover", function() {
  loginpop.style.display = "block";
});

window.addEventListener("click", function(e) {
  console.log(e);
  if (!loginpop.contains(e.target)) {
    loginpop.style.display = 'none';
  }
});

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}
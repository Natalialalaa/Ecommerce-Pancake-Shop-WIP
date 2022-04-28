/*when mouse hover to .dropdown-content, 
*/

const login = document.querySelector(".link-login");
const loginpop = document.querySelector(".dropdown-content")

login.addEventListener("mouseover", function() {
  loginpop.style.display = "block";
});

window.addEventListener("click", function(e) {
  if (e.target.class !== "content-form" ){
    loginpop.style.display = "none";
  }
});
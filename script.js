/*display login pop up when client hover to "My Account",
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



/*main article 1: pancake image ->
 3 steps sizing, SLIDER value -> 
 tiny, normal, XxL */

const slider = document.getElementById("myRange");
const output = document.getElementById("slide-value");
const pancakeSize = document.getElementById("sizes-img");

slider.oninput = sizingPancake = () => {
  let sliderValue = slider.value;

  pancakeSize.style.width = (125 * sliderValue) + 'px';
  output.innerHTML = sliderValue < 2 ? 'petit' : sliderValue > 2 ?'XXL' : 'medium' ;
}

/*abort previous prototype 

  slider.oninput = function() {
  output.innerHTML = this.value;

  if (this.value = 3){
    
  } else if (this.value = 9){

  }

}*/



/*main article 2: flavors image ->
 3 images changing -> RADIO BUTTON value -> 
 matcha, chocolate, strawberry */


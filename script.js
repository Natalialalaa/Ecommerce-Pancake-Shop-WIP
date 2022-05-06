/*display login pop up when client hover to "My Account",
  then hide login pop up when client click anywhere outside the pop up
*/

const login = document.querySelector(".link-login");
const loginpop = document.querySelector(".dropdown-content");

login.addEventListener("mouseover", function() {
  loginpop.style.display = "block";
});

window.addEventListener("click", function(e) {
  //console.log(e);
  if (!loginpop.contains(e.target)) {
    loginpop.style.display = 'none';
  }
});


/*main article 1: pancake image -> 3 steps sizing, SLIDER value -> tiny, normal, XxL */

const slider = document.getElementById("myRange");
const output = document.getElementById("slide-value");
const pancakeSize = document.getElementById("sizes-img");

slider.oninput = sizingPancake = () => {
  //let responsivePancake = pancakeSize.offsetWidth;
  let sliderValue = slider.value;

  pancakeSize.style.width = (125 * sliderValue) + 'px';
  output.innerHTML = sliderValue < 2 ? 'petit' : sliderValue > 2 ?'XXL' : 'medium' ;
}


/*main article 2: flavors image -> 3 images changing -> Radio button value / checked */

const changingToppings = () => {
  const flavorsPic = document.getElementById("flavours-pic");

  if (document.getElementById("matcha").checked) {
  flavorsPic.src = "Visuals/flavour-matcha.png";
  } else if (document.getElementById("chocolate").checked) { 
  flavorsPic.src = "Visuals/flavour-chocolate.png";
  }  else if (document.getElementById("strawberry").checked) { 
  flavorsPic.src = "Visuals/flavour-strawberry.png";
  }
}


/*main article 3: toppings category -> filter */
  /* Add the "show" class (display:block) to the filtered elements,
  and remove the "show" class from the elements that are not selected */

// Show filtered elements
function filterSelection(e) {
  const flavors = document.querySelectorAll(".topping-variants div"); // select all tooping variants divs
  let filter = e.target.dataset.filter;

  //console.log(filter); // grab the value in the event target's data-filter attribute
  //console.log(flavors);

  flavors.forEach(flavors => {

    flavors.classList.contains(filter) // does the flavors have the filter in its class list? Hide elements that are not selected
    
    ? flavors.classList.remove('hidden') // if yes, make sure .hidden is not applied
    : flavors.classList.add('hidden'); // if no, apply .hidden
  });
}

// Add active class to the current control button (highlight it)

/* !! Work still in progress !!*/
/*responsive navbar : when user click hamburger icon,
  show side navbar from the left to the right (dropdown login included on lower part)
  then blur all background elements, focusing on sidebar */

const burgerIcon = document.querySelector("#sidebar-icon");
const sidebar = document.querySelector(".top-nav-links");

burgerIcon.addEventListener("click", showSidebar = (e) => {
  console.log(e)
  console.log(sidebar);

  //sidebar.style.display = "block";
  sidebar.classList.toggle("nav-right-test");
  //sidebar.classList.toggle("nav-right-test");
});
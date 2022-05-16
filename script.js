/*display login pop up when client hover to "My Account",
  then hide login pop up when client click anywhere outside the pop up
*/
const login = document.querySelector(".link-login");
const loginpop = document.querySelector(".dropdown-content");

login.addEventListener("mouseover", function() {
  loginpop.style.display = "block";
});

window.addEventListener("click", function(e) {
  if (!loginpop.contains(e.target)) {
    loginpop.style.display = 'none';
  }
});

const createButton = document.getElementsByClassName('create-button')[0];

let scrollToCreate = () => {
  //scrollBy(x-coord, y-coord)
  //check position by dev tools -> properties -> offsetTop;
  window.scrollBy(0, 890);
}

createButton.addEventListener('click', scrollToCreate);

let userSize;
/*main article 1: pancake image -> 3 steps sizing, SLIDER value -> tiny, normal, XxL */
let sizingPancake = () => {
  const slider = document.getElementById("myRange");
  const output = document.getElementById("slide-value");
  const pancakeSize = document.getElementById("sizes-img");
  //let responsivePancake = pancakeSize.offsetWidth;
  let sliderValue = slider.value;
  pancakeSize.style.width = (125 * sliderValue) + 'px';

  output.textContent = sliderValue < 2 ? 'petit' : sliderValue > 2 ? 'XXL' : 'medium' ;
   userSize = output.textContent;

  return userSize;
}



/*main article 2: flavors image -> 3 images changing -> Radio button value / checked */
let userFlavor = "";
let changingFlavour = () => {
  const flavorsPic = document.getElementById("flavours-pic");

  if (document.getElementById("matcha").checked) {
    flavorsPic.src = "Visuals/flavour-matcha.png";
    userFlavor = "matcha";
  } else if (document.getElementById("chocolate").checked) { 
    flavorsPic.src = "Visuals/flavour-chocolate.png";
    userFlavor = "chocolate";
  } else if (document.getElementById("strawberry").checked) { 
    flavorsPic.src = "Visuals/flavour-strawberry.png";
    userFlavor = "strawberry";
  }

  return userFlavor;
}



/*main article 3: toppings category -> filter Add the "show" class (display:block) to the filtered elements,
and remove the "show" class from the elements that are not selected */
const toppings = document.querySelectorAll(".topping-variants div");

let filterTopping = (e) => {
  // grab the value in the event target's data-filter attribute
  let filter = e.target.dataset.filter;

  toppings.forEach(topping => {
    topping.classList.contains(filter) // does the topping have the filter in its class list? Hide elements that are not selected
    ? topping.classList.remove('hidden') // if yes, make sure .hidden is not applied
    : topping.classList.add('hidden'); // if no, apply .hidden
  });

}

const selectedToppings = document.querySelectorAll(".topping");

selectedToppings.forEach(selectedTopping => {
  selectedTopping.addEventListener('click', changeColor = (e) => {
    e.target.classList.toggle("toppingClicked");
  })
});

/*add and remove topping selection dynamically*/
let toppingList = [];
let userTopping;
selectedToppings.forEach(selectedTopping => {
  selectedTopping.addEventListener('click', getToppingName = (e) => {
    let myToppings = e.target.textContent; 

    if(!toppingList.includes(myToppings)){          //checking whether toppingList array contain clicked value
      toppingList.push(myToppings);               //adding to array if value doesnt exists yet    
      //get the last item from ToppingList array
      const selectedToppingList = toppingList[toppingList.length - 1];
      //then create element with last array value
      let listText = document.getElementsByClassName('list-text')[0];
      const el = document.createElement('p');
      el.innerHTML = selectedToppingList;
      el.className = 'selected-topping';
      listText.appendChild(el);
    } else {
      toppingList.splice(toppingList.indexOf(myToppings), 1);  //deleting
      let selectedToppings = document.querySelectorAll('.selected-topping');
      //.selected-topping element that want to be removed 
      let removedToppingName = e.target.innerText;
      //iterate over all .selected-toppings and remove element that have removedToppingName as innerText
      for (let i = 0; i < selectedToppings.length; i++) {
        if (selectedToppings[i].innerText === removedToppingName){
          selectedToppings[i].remove();
        }
      }
      //? or use array.findIndex(function(currentValue, index, arr), thisValue)
    }
    userTopping = toppingList.toString().toLowerCase();
    return userTopping;
  })
});



/* !! Work still in progress !!*/
/*responsive navbar : when user click hamburger icon,
  show side navbar from the left to the right (dropdown login included on lower part)
  then blur all background elements, focusing on sidebar 
*/

const burgerIcon = document.querySelector("#sidebar-icon");

burgerIcon.addEventListener("click", showSidebar = () => {
  //sidebar.style.display = "block";
  const sidebar = document.querySelector(".top-nav-links");
  sidebar.classList.toggle("top-nav-links-mobile");
});


/* get 3 pancakes-personalized articles value result:
sizes -> userSize -> petit/ medium/ XXL
flavours -> userFlavour -> Matcha/ Chocolate/ Strawberry
topping-variants div inner html -> userTopping 12 variations

/* prototype 1 
let userCommand = (userSize, userFlavour, userTopping) => { 
}
*/

let userCommand = () => {

  let finalCommand = document.querySelector(".result-name");

  //change result-name inner html
  finalCommand.textContent = "your command is " + userSize + " " + userFlavor + " pancake with " + userTopping + " toppings !";
  //load immediately after each main value interaction/changes
}


const addToBasketButton = document.getElementsByClassName('result-button')[0];
addToBasketButton.addEventListener('click', userCommand);
/*add to my basket => increase .cart-value*/
/*create my pancakes button auto scroll to personalized pancake section*/

/*become our partner left right button = review carousel*/
// invite button
const addGuestButton = document.querySelector(".invite");
// label for the invite button
const guestInputLabel = document.querySelector(".add-guest label");
// text input box
const guestInput = document.querySelector(".add-guest input");
// unordered list (not yet visible)
const guestList = document.querySelector(".guest-list");
// span class for number of guests attending
const guestCount = document.querySelector(".attendance");
// alert when guest list is full (not yet visible)
const guestFull = document.querySelector(".alert");
// only appears when the guest list is full
const assignButton = document.querySelector(".assign");
// populate the guest's names and their assigned dish
const assignedItems = document.querySelector(".assigned-items");

addGuestButton.addEventListener("click", function () {
  // a variable to capture the value user input
  const guest = guestInput.value;
  // console.log(guest);
  // test if empty
  if (guest !== "") {
    // if not empty, call these functions
    addToList(guest);
    clearInput();
    updateGuestCount();
  }
});
// dynamically clear user input
const clearInput = function () {
  guestInput.value = "";
};
// create a list of guests
const addToList = function (guest) {
  const listItem = document.createElement("li");
  listItem.innerText = guest;
  guestList.append(listItem);
};
// count the number of guests
const updateGuestCount = function () {
  const guests = document.querySelectorAll(".guest-list li");
  guestCount.innerText = guests.length;
  // when the count is 8, party's full and no more registration
  if (guests.length === 8) {
    addGuestButton.classList.add("hide");
    guestInput.classList.add("hide");
    guestInputLabel.classList.add("hide");
    guestFull.classList.remove("hide");
  }
};
// when the guest list is full, assign dishes
const assignItems = function () {
  // the array of savory chocolate dishes =p
  const potluckItems = [
    "Cocoa-Rubbed Baby Back Ribs",
    "White Chocolate Baba Ghannouj",
    "Triple Chocolate Beef & Bean Chili",
    "Pepper-Crusted Beef Tenderloin with Chocolate-Port Sauce",
    "Slow Cooker Chicken Mole",
    "Cocoa Nib Pesto",
    "Daube de Boeuf A la Gasconne",
    "Asado de Bodas",
    "Pollo en Mole Poblano",
    "Chile Ancho Sopa de Chocolate",
    "Pumpkin-Filled Chocolate Ravioli"
  ];
  // select all the list elements with the class
  const allGuests = document.querySelectorAll(".guest-list li");
  // loop over the array
  for (let guest of allGuests) {
    // create an index for the dishes
    let randomPotluckIndex = Math.floor(Math.random() * potluckItems.length);
    // apply the index to the dishes
    let randomPotluckItem = potluckItems[randomPotluckIndex];
    // create list items
    let listItem = document.createElement("li");
    // set the text of the list items
    listItem.innerText = `${guest.innerText} is bringing ${randomPotluckItem}.`;
    // append the list items to the assigned items variable
    assignedItems.append(listItem);
    // update the potLuckItems array each time a dish is assigned by removing the randomPotluckIndex so it won't be assigned twice
    potluckItems.splice(randomPotluckIndex, 1);
  }
};
// on clicking the assign dishes button, the dishes are assigned
assignButton.addEventListener("click", function () {
  assignItems();
  // prevent a dish being assigned twice
  assignButton.disabled = true;
});

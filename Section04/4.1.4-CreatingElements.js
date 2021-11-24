// create a new unordered list (ul) element
const newUnorderedList = document.createElement("ul");
// remove the paragraph element in the nav-bar
document.querySelector(".nav-bar > p").remove();
// add your new ul element to the nav-bar
navBar.appendChild(newUnorderedList);
// create two new list item (li) elements, and add some text to them
let listItem1 = document.createElement("li");
let listItem2 = document.createElement("li");
listItem1.textContent = "Home";
listItem2.textContent = "About";
// add the li elements to the ul in the nav-bar
navBar.appendChild(listItem1);
navBar.appendChild(listItem2);
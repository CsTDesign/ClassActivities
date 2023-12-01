// create a new unordered list (ul) element
const newUl = document.createElement("ul");
// remove the paragraph element in the nav-bar
document.querySelector("nav > p").remove();
// add your new ul element to the nav-bar
document.querySelector("nav").appendChild(newUl);
// create two new list item (li) elements, and add some text to them
const listItem1 = document.createElement("li");
const listItem2 = document.createElement("li");
listItem1.textContent = "first list item";
listItem2.textContent = "second list item";
// add the li elements to the ul in the nav-bar
newUl.appendChild(listItem1);
newUl.appendChild(listItem2);

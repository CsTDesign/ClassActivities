// select the root node
const root = document.querySelector("body");
console.log(root);
// select the last child of the root node
console.log(root.lastElementChild);
// select all the children of the body element
console.log(root.children);
// select the next sibling of the h2 node
const nextSibH2 = document.querySelector("h2").nextElementSibling;
console.log(nextSibH2);
// select the parent element of the h1 node
const parentH1 = document.querySelector("h1").parentElement;
console.log(parentH1);

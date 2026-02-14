
// Bubbling :Event bubbling is the process where an event triggered on a child element flows up to its all parents in the DOM.
//Capturing : Event capturing is the process where an event starts at the top elemnet and flows down to the target element in the DOM tree.
let outer = document.getElementById("outer");
let inner = document.getElementById("inner");
let btn = document.getElementById("btn");

outer.addEventListener("click", function() {
    alert("Outer DIV clicked");
});

inner.addEventListener("click", function() {
    alert("Inner DIV clicked");
});

btn.addEventListener("click", function() {
    alert("Button clicked");
});



//You can tell addEventListener to use capturing  :

// outer.addEventListener("click", function() {
//     alert("Outer DIV clicked - Capturing");
// }, true); // third parameter true = use capturing

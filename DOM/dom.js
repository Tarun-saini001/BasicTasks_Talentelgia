function changeText() {
    document.getElementById("heading").innerHTML = "Hello world" // ById
}



// get by className : getElementsByClassName() is used to select all elements that have the same class name.
//  It returns a collection (array-like object) of elements

function changeColor() {
    let elements = document.getElementsByClassName("text");
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.color="red";
    }
}


//Selects the first matching element using a selector.

// function changeSelect(){
//     document.querySelector(".select").style.color="green"
// }


//Selects all matching elements.
function changeSelect(){
   let elements= document.querySelectorAll(".select")
    elements.forEach(function(item){
        item.style.color = "green";
    });
}


// addEventListner : Add multiple events to the same element
let button = document.getElementById("btn");
let paragraph = document.getElementById("text");

button.addEventListener("click", function() {
    paragraph.innerText = "Button was clicked";
});
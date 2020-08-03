//When the user scrolls the page execute myFunction
window.onscroll = function() {myFunction()};

var collection = document.getElementsByClassName("nav-bar-blue"); //Gets the HTML collection of the navbar
var navbar = collection[0];	//
var sticky = navbar.offsetTop;	//Get the numeric value of how far the navbar is offset from the top of the page

//The function adds/removes the sticky class to the navbar
function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}

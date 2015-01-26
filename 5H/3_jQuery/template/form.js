$(document).ready(function() {

/* Given a DOM element, adds error styling */
var makeError = function(el) {
  el
    .css("border", "solid rgb(181, 19, 19)")
    .css("background-color", "rgba(181, 19, 19, 0.8)")
};

/* Given a DOM element, removes error styling */
var clearError = function(el) {
  el
    .css("border", "solid rgba(255, 255, 255, 0.1)")
    .css("background-color", "rgb(255, 255, 255)")      
};

// any helper functions here


// event handler code below:

$("#username").focusout(function() {
  console.log("you just left the username field");
})

$("#age").focusout(function() {
  console.log("you just left the age field");
})

$("#email").focusout(function() {
  console.log("you just left the email field");
})

})
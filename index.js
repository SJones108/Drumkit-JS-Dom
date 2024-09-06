// // Check if JS is connected
// alert("JavaScript is connected!");

// Get the number of drum buttons
var numDrumButtons = document.querySelectorAll(".drum").length;
// console.log("Number of drum buttons: " + numDrumButtons); // This should log 7

// Loop through all drum buttons and add event listeners
for (var i = 0; i < numDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        // alert("Button clicked!");  // Log when a button is clicked
        var buttonInnerHTML = this.innerHTML;
        soundFromKeys(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
   });
}

document.addEventListener("keydown", function(event) {
   soundFromKeys(event.key);
   buttonAnimation(event.key);
});

function soundFromKeys(key) {
   switch(key) {
      case "w":
         var audio = new Audio("sounds/crash.mp3");
         audio.play(); 
          break;
      case "a":
         var audio = new Audio("sounds/snare.mp3");
         audio.play(); 
         break;
      case "s":
         var audio = new Audio("sounds/kick-bass.mp3");
         audio.play(); 
         break;
      case "d":
         var audio = new Audio("sounds/tom-1.mp3");
         audio.play(); 
         break;
      case "j":
         var audio = new Audio("sounds/tom-2.mp3");
         audio.play(); 
         break;
      case "k":
         var audio = new Audio("sounds/tom-3.mp3");
         audio.play(); 
         break;
      case "l":
         var audio = new Audio("sounds/tom-4.mp3");
         audio.play(); 
         break;

      default: console.log(buttonInnerHTML);
     }
}

function buttonAnimation (currentKey) {
   var activeButton = document.querySelector("." + currentKey);
   activeButton.classList.add("pressed");
   setTimeout(function() {
      activeButton.classList.remove("pressed")
   }, 100);
}
   

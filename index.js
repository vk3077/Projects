var length1 = document.querySelectorAll(".drum").length;
for (var i = 0; i < length1; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var buttonInnerHTML = this.innerHTML;
    switch (buttonInnerHTML) {
      case "w":
        var tom1 = new Audio("music/sounds_tom-1.mp3");
        tom1.play();

        break;
      case "a":
        var tom2 = new Audio("music/sounds_tom-2.mp3");
        tom2.play();
        break;
      case "s":
        var tom3 = new Audio("music/sounds_tom-3.mp3");
        tom3.play();
        break;
      case "d":
        var tom4 = new Audio("music/sounds_tom-4.mp3");
        tom4.play();
        break;
      case "j":
        var snare = new Audio("music/sounds_snare.mp3");
        snare.play();
        break;
      case "k":
        var crash = new Audio("music/sounds_crash.mp3");
        crash.play();
        break;
      case "l":
        var kick = new Audio("music/sounds_kick-bass.mp3");
        kick.play();
        break;
      default:
        console.log(buttonInnerHTML);

    }
    addAnimation(buttonInnerHTML);
  });
}
document.addEventListener("keypress", function(event) {
  var keyword = event.key;
  switch (keyword) {
    case "w":
      var tom1 = new Audio("music/sounds_tom-1.mp3");
      tom1.play();

      break;
    case "a":
      var tom2 = new Audio("music/sounds_tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("music/sounds_tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("music/sounds_tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var snare = new Audio("music/sounds_snare.mp3");
      snare.play();
      break;
    case "k":
      var crash = new Audio("music/sounds_crash.mp3");
      crash.play();
      break;
    case "l":
      var kick = new Audio("music/sounds_kick-bass.mp3");
      kick.play();
      break;
    default:
      console.log(keyword);


  }
    addAnimation(keyword);
});

function addAnimation(buttonKey) {
  var activeButton = document.querySelector("." + buttonKey);
  activeButton.classList.add("pressed");
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}

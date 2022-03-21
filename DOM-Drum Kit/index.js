
var x, i;
x = document.querySelectorAll(".drum");
for(i = 0; i< x.length; i++) {
    x[i].addEventListener("click", handleClick)
}
function handleClick() {
    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
    
}

document.addEventListener("keydown", function(event){
    makeSound(event.key);

    buttonAnimation(event.key);
});

function makeSound(key){
    switch (key) {
        case "w":
            var tom1 = new Audio("Sounds/sounds_tom-1.mp3");
            tom1.play();
        break;
        case "a":
            var tom2 = new Audio("sounds/sounds_tom-2.mp3")
            tom2.play();
        break;
        
        case "s":
            var tom3 = new Audio("sounds/sounds_tom-3.mp3");
            tom3.play();
        break;

        case "d":
            var tom4 = new Audio("sounds/sounds_tom-4.mp3");
            tom4.play();
        break;

        case "j":
            var snare = new Audio("sounds/sounds_snare.mp3");
            snare.play();
        break;

        case "l":
            var kickBass = new Audio("sounds/sounds_kick-bass.mp3");
            kickBass.play();
        break;

        case "k":
            var crash = new Audio("Sounds/sounds_crash.mp3");
            crash.play();
        break;
        default:
            break;
    }
}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100);
}
var numberOfDrums = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrums; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        var key = this.innerHTML;
        makeSound(key);
        animation(key);
    });
}

document.addEventListener("keydown", function(e) {
    makeSound(e.key);
    animation(e.key);
});

function animation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);

    if (activeButton) { // Ensure element exists
        activeButton.classList.add("pressed");

        // Remove the class after 100ms for the animation effect
        setTimeout(function() {
            activeButton.classList.remove("pressed");
        }, 100);
    }
}



function makeSound(key) {
    switch (key) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;

        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;

        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;

        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;

        case "j":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;

        case "k":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;

        case "l":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;

        default:


    }
}
var gamePattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];
var userClickedPattern = [];


function nextSequence() {
    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    var randomColorId = "#"+randomChosenColour;


    $(randomColorId).fadeIn(100).fadeOut(100).fadeIn(100);
    
    playSound(randomChosenColour);

    animatePress(randomChosenColour);

}



$(".btn").on("click", function(){

    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
});

function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColour) {
    $("#" + currentColour).addClass("pressed");

    setTimeout(function() {
        $("#" + currentColour).removeClass("pressed");
    },100);
}


$("body").on("keypress" , function(e) {

    nextSequence();
    

})


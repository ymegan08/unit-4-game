// Random number generator function
function generateRandomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Stores random number into variable
var rand = generateRandomNumber(19,120);

// Displays new random number when page is loaded/refreshed
window.onload = function(){
    document.getElementById("random-number").innerHTML = rand;
    $("#random-number-text").html(rand);
}

// Counter to track the user's total
var counter = 0;

// Initialize win/lose variables
var wins = 0;
var losses = 0;
$("#wins").html("Wins: " + wins);
$("#losses").html("Losses: " + losses);

// Create array of crystals
var crystalArray = [
    { name: "Red Crystal", image: "assets/images/red-crystal.png"},
    { name: "Blue Crystal", image: "assets/images/blue-crystal.png"},
    { name: "Green Crystal", image: "assets/images/green-crystal.png"},
    { name: "Yellow Crystal", image: "assets/images/yellow-crystal.png"}
];

// Create array of random number options for crystals
var numberOptions = [];
for (var i = 0;  i < 4; i++){
    numberOptions[i] = generateRandomNumber(1,12);
}

// Update page with crystals that hold random numbers
for (var i=0; i < crystalArray.length; i++){
    var img = $("<img>");
    img.addClass("crystal-image");
    img.attr("src", crystalArray[i].image);
    img.attr("data-crystalvalue", numberOptions[i]);
    $("#crystals").append(img);
}

// New random number, counter gets reset
function reset(){
    rand = generateRandomNumber(19,120);
    document.getElementById("random-number").innerHTML = rand;
    $("#random-number-text").html(rand);
    counter = 0;
    $("#total-score-text").html(counter);
    $(".crystal-image").attr("data-crystalvalue", generateRandomNumber(1,12));
}

// On click event for crystals, update counter, wins, and losses
$(".crystal-image").on("click", function(){
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    counter += crystalValue;
    $("#total-score-text").html(counter)
    if (counter === rand) {
        wins++;
        $("#wins").html("Wins: " + wins);
        reset();
    }
    else if (counter >= rand) {
        losses++;
        $("#losses").html("Losses: " + losses);
        reset();
    }
});
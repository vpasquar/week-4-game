window.onload = function() {

var counter = 0
var targetNumber = 0
var winSwitch = false
//var wins = 0
//var losses = 0
var firstRun = true

//startUp();
//$("#reset").click(resetGame);
$("#start").click(resetGame);


};

var counter = 0
var targetNumber = 0
var winSwitch = false
var wins = 0
var losses = 0
var firstRun = true

$("#crystals").on("click",".crystal-image",function(){

  var crystalValue = ($(this).attr("data-crystalvalue"));
  console.log(crystalValue);
  crystalValue = parseInt(crystalValue);
    
  counter += crystalValue;
    
  $("#runningScore").html("Your Score:" + counter);

   checkScore();
});  
//$(".crystal-image").click(calcScore);

  function startUp() {
     targetNumber = Math.floor(Math.random() * 100) + 1;
     $("#number-to-guess").html("target: " + targetNumber);
     counter = 0;
     // Now for the hard part. Creating multiple crystals each with their own unique number value.
     // We begin by expanding our array to include four options.
     var numberOptions = [10, 5, 3, 7];
     var imageLinks = []
     // Next we create a for loop to create crystals for every numberOption.
     for (var i = 0; i < numberOptions.length; i++) {
       // For each iteration, we will create an imageCrystal
       var imageCrystal = $("<img>");
       // First each crystal will be given the class ".crystal-image".
       // This will allow the CSS to take effect.
       imageCrystal.addClass("crystal-image");
       // Each imageCrystal will be given a src link to the crystal image
       imageCrystal.attr("src", "http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg");
       // Each imageCrystal will be given a data attribute called data-crystalValue.
       // This data attribute will be set equal to the array value.
       imageCrystal.attr("data-crystalvalue", numberOptions[i]);
       // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
       $("#crystals").append(imageCrystal);
     }
  };
  
  //function calcScore() {  
  //  var crystalValue = ($(this).attr("data-crystalvalue"));
  //  console.log(crystalValue);
  //  crystalValue = parseInt(crystalValue);
  //  
  //  counter += crystalValue;
  //  
  //  $("#runningScore").html("Your Score:" + counter);
  //
  //  checkScore();
 // };

  function checkScore() {
    if (counter === targetNumber) {
      alert("You win!");
      winSwitch = true
      wins++
      logRecord();
      }
    else if (counter >= targetNumber) {
      alert("You lose!");
      winSwitch = false
      losses++
      logRecord();
     // resetGame();
    }
    else if (counter < targetNumber) {
      console.log(counter)
      console.log(targetNumber)
      alert("keep going!");
    }
  };

  function logRecord(){
         
    $("#stats").html("wins: " + wins + "  " + "losses: " + losses);  
  }

  function resetGame(){
    $("#runningScore").html(null);
    $("#crystals").html(null);
    startUp();
  };
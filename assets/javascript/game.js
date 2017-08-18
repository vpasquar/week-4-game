window.onload = function() {

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
        crystalValue = parseInt(crystalValue);
    
    counter += crystalValue;
    
    $("#runningScore").html("Your Score:" + counter);

    checkScore();
});  


  function startUp() {

      targetNumber = Math.floor(Math.random() * 40) + 1;
      $("#number-to-guess").html("target: " + targetNumber);
      counter = 0;
    
      // We begin by expanding our array to include four options.
      var numberOptions = [10, 5, 3, 7];
      var imageLinks = ["assets/images/crystal1.jpg","assets/images/crystal2.jpg",
                       "assets/images/crystal3.jpg","assets/images/crystal4.jpg"]
      // Next we create a for loop to create crystals for every numberOption.
      for (var i = 0; i < numberOptions.length; i++) {

         // For each iteration, we will create an imageCrystal
         var imageCrystal = $("<img>");
         // First each crystal will be given the class ".crystal-image".
         // This will allow the CSS to take effect.
         imageCrystal.addClass("crystal-image");
         // Each imageCrystal will be given a src link to the crystal image
         imageCrystal.attr("src",imageLinks[i]);
         // Each imageCrystal will be given a data attribute called data-crystalValue.
         // This data attribute will be set equal to the array value.
         if (i < 3) {
            imageCrystal.attr("data-crystalvalue", numberOptions[i]);
         }
         else {
            var randomNum = Math.floor(Math.random() * 10) + 1;
            imageCrystal.attr("data-crystalvalue",randomNum);
         }   
         // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
         $("#crystals").append(imageCrystal);
      }
  };
  
  //updates score based on latest click, lets user know what to do next
  function checkScore() {

      if (counter === targetNumber) {
          $("#message-area").html("You win! Press restart")
          winSwitch = true
          wins++
          logRecord();
      }

      else if (counter >= targetNumber) {
          $("#message-area").html("You Lose! Press restart")
          winSwitch = false
          losses++
          logRecord();
      }

      else if (counter < targetNumber) {
          $("#message-area").html("keep going! " 
                                  + (targetNumber-counter) + " to go!")
      }

  };

//prints wins and losses 
  function logRecord(){     

      $("#stats").html("wins: " + wins + "  " + "losses: " + losses);  
  }

//resets current game counters
  function resetGame(){
      $("#runningScore").html(null);
      $("#crystals").html(null);
      $("#message-area").html(null);

       logRecord();
        startUp();
  };
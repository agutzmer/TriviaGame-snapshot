
 // global variables 

  var countDownTimer = 25;
  var itemNumber = 0;
  var correctResponses = 0;
  var totalResponses = 0;
  var timeOutID;
  var intervalID;

//
// objects and functions
//
var randomizer = { targetNumber: 0, runningTotal: 0, lapisNumber: 0, onyxNumber: 0, quartzNumber: 0, turquoizeNumber: 0,
    chooseRandomNumbers: function () {
      targetNumber = Math.floor((Math.random() * 101) ) + 19; 
      lapisNumber =  Math.floor((Math.random() * 11) ) + 1;  
      onyxNumber =  Math.floor((Math.random() * 11) ) + 1;
      quartzNumber =  Math.floor((Math.random() * 11) ) + 1;
      turquoizeNumber =  Math.floor((Math.random() * 11) ) + 1;
      runningTotal = 0;
      return (true);
      }};

  function displayWinsLosses () {
    winsText = wins.toString();
    lossesText = losses.toString();
    winLossBoxText = "Wins: ";
    winLossBoxText = winLossBoxText.concat(winsText);
    winLossBoxText = winLossBoxText.concat("<p></p>");
    winLossBoxText = winLossBoxText.concat("Losses: ");
    winLossBoxText = winLossBoxText.concat(lossesText);
    $("#winLossBox").html(winLossBoxText);   
  }

  function displayItem (itemIndex) {
     
   var items = [
    {"stem":"Which college football team plays in the Big House?", "choice_1":"Alabama  ", "choice_2":"Michigan  ", "choice_3":"Nebraska  ", "choice_4":"USC", "correct":"button_2" },            
    {"stem":"Which pitcher throws a knuckleball?", "choice_1":"Bartolo Colon  ", "choice_2":"Kyle Hendricks  ", "choice_3":"R A Dickey  ", "choice_4":"Clayton Kershaw  ", "correct":"button_3" },  
    {"stem":"Which grand slam event comes first in the year?", "choice_1":"US Open  ", "choice_2":"French Open  ", "choice_3":"Australian Open  ", "choice_4":"Wimbledon  ","correct":"button_3" },  
    {"stem":"Which is a publicly owned franchise", "choice_1":"Cowboys  ", "choice_2":"Giants  ", "choice_3":"Raiders  ", "choice_4":"Packers  ", "correct":"button_4" },  
    {"stem":"Which team has the third oldest stadium in baseball?", "choice_1":"Cubs  ", "choice_2":"Red Sox  ", "choice_3":"White Sox  ", "choice_4":"Dodgers  ", "correct":"button_4" } 
    ]; 
 
      $("#questionStem").html(items[itemIndex].stem);
      $("#button_1_Label").html(items[itemIndex].choice_1);
 	    $("#button_2_Label").html(items[itemIndex].choice_2);
 	    $("#button_3_Label").html(items[itemIndex].choice_3);
      $("#button_4_Label").html(items[itemIndex].choice_4);
   return (items[itemIndex].correct);
  }

  // function displayRunningScore ( ) {
  //  $("#runningScoreBox").html(n.toString());
  //  }

function displayRunningScore() {
    var runningScoreText;
      runningScoreText = "<h3>Your score is: ";
      runningScoreText = runningScoreText.concat(correctResponses.toString());
      runningScoreText = runningScoreText.concat(" of ");
      runningScoreText = runningScoreText.concat(totalResponses.toString());
      runningScoreText = runningScoreText.concat("</h3>");
      $("#runningScoreHeader").html(runningScoreText);
  }

function displayCorrectIncorrect(correct) {
    var correctIncorrectText;
      correctIncorrectText = "<h3>";
      if (correct) {
        correctIncorrectText = correctIncorrectText.concat("Correct!");
      }
      else {
        correctIncorrectText = correctIncorrectText.concat("Incorrect!");
      }
      correctIncorrectText = correctIncorrectText.concat("</h3>");
      $("#correctIncorrectBox").html(correctIncorrectText);
  }


  function oneSecond() {
    var timerText;
      timerText = "<h3><p></p>Time remaining: ";
      timerText = timerText.concat(countDownTimer.toString());
      timerText = timerText.concat("</h3>");
      $("#timer").html(timerText);
      countDownTimer--;
  }

  function timeUp(){
    $('#time-left').html('<h2>Time\'s Up!</h2>');
    alert('time is up');
    clearTimeout(timeOutID);
    clearInterval(intervalID);
  }

//
// Begin activity
//
  

  $( document ).ready(function() {

  // set an interval counter to count down by seconds
  // set a timeout to end the activity at 25 seconds

  timeOutID = setTimeout(timeUp, 1000 * countDownTimer);
  intervalID = setInterval(oneSecond, 1000);

  // display the first item
   correctAnswer =  displayItem (itemNumber);

   $("input").addClass("value");
   $("input").on('click', function() { 

    totalResponses++;
	
    if (this.id == correctAnswer) {
      correctResponses++;
      displayCorrectIncorrect (true);
    }
    else {
      displayCorrectIncorrect (false);
    }
    displayRunningScore ();



    if (itemNumber == 4) {
      alert ("Do it again.");
      document.getElementById(this.id).checked = false;
        clearTimeout(timeOutID);
        clearInterval(intervalID);
        timeOutID = setTimeout(timeUp, 1000 * countDownTimer);
        intervalID = setInterval(oneSecond, 1000);
        countDownTimer = 25;
        itemNumber = 0;
        correctResponses = 0;
        totalResponses = 0;
        correctAnswer = displayItem (itemNumber);
     }  
     else {
      itemNumber++;
      correctAnswer = displayItem (itemNumber);
      document.getElementById(this.id).checked = false;
     }


   } );  // end of onClick
   
   } );  // end of documentReady

var winLossBoxText = "<p>Wins: </p><p>Losses: <p>"
var targetBoxText ="Your target is: ";
var wins = 0;
var winsText = "0";
var losses = 0;
var lossesText = "0";
var countDownTimer = 25;

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
    {"stem":"Which college football team plays in the Big House?", "choice_1":"Alabama  ", "choice_2":"Michegan  ", "choice_3":"Nebraska  ", "choice_4":"USC", "correct":"button_2" },            
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

   function displayRunningTotal ( n ) {
    $("#runningScoreBox").html(n.toString());
    }


  function oneSecond() {
    var timerText;
      timerText = "Time remaining: ";
      timerText = timerText.concat(countDownTimer.toString());
      $("#timer").html(timerText);
      countDownTimer--;
  }

  function timeUp(){
    $('#time-left').html('<h2>Time\'s Up!</h2>');
    alert('time is up');
  }

//
// Begin activity
//
  var itemNumber = 0;
 

  $( document ).ready(function() {

  // set an interval counter to count down
  // set a timeout to end the activity
  setTimeout(timeUp, 1000 * countDownTimer);
  var intervalID = setInterval(oneSecond, 1000);

   correctAnswer =  displayItem (itemNumber);


   $("input").addClass("value");
   $("input").on('click', function() { 
	
    if (this.id == correctAnswer) {
      alert ("Yay!");
    }
    else {
      alert ("Boo!");
    }
    
	 switch (this.id) {

     case "button_1" :
      itemNumber++;
      break;

		 case "button_2" :
			itemNumber++;
			break;
			 
		case "button_3" :
			 itemNumber++;
			 break;	 
 		
 		case "button_4" :
			 itemNumber++;
			 break;	   		 		
			 
		default:
			break;
		}

		 if (itemNumber < 5) {
      correctAnswer = displayItem (itemNumber);
      document.getElementById(this.id).checked = false;
     }

     else {
      alert ("Do it again.");
      document.getElementById(this.id).checked = false;

      clearTimeout(intervalID);
      itemNumber = 0;
      correctAnswer = displayItem (itemNumber);
     }
		
		
   } );  // end of onClick
   
   } );  // end of documentReady

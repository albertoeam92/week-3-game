//Javascript game code 

     var pcLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

     var wins = 0;

     var losses = 0; 

     var guessesleft = 9;

     var userGuess = "";
     console.log(userGuess);

     var lettersGuessed = [];


document.onkeyup = function(){
         
             
      var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
      console.log(userGuess);

      lettersGuessed.push(userGuess);
      console.log(lettersGuessed);

      var computerGuess = pcLetters[Math.floor(Math.random() * pcLetters.length)];
      console.log(computerGuess); 

      if (userGuess == computerGuess){

	      	wins++;

	      	

      }else if(userGuess != computerGuess) {

      	    guessesleft--;

      	    losses++;

      	     
      }

      if(guessesleft == 0) {

           
           guessesleft = 9;
           
           lettersGuessed = [];
           console.log(lettersGuessed);

           alert("My guessed was : " + computerGuess);
            

      }
            var addedwins = "<p>Wins: " + wins + "</p>";
            var loser = "<p>Losses: " + losses + "</p>";
            var htmlguessesleft = "<p>Remaining guesses: " + guessesleft + "</p>";
            var yourguesses = "<p>Your guesses: " + lettersGuessed + "</p>"
      

   console.log(wins);
   console.log(losses);
   console.log(guessesleft);

            document.querySelector('#wins').innerHTML = addedwins;
            document.querySelector('#losses').innerHTML = loser;
            document.querySelector('#guessesleft').innerHTML = htmlguessesleft;
            document.querySelector('#lettersguessed').innerHTML = yourguesses; 




}

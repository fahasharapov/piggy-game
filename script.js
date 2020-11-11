

//Random number generator that changes the dice image and the Score section


var sum = [0,0];
var dice;
var activePlayer = 0;


//perform an operation when Roll button is clicked
document.querySelector('.roll').addEventListener('click', function(){	
		//generates the random number
		dice = Math.floor(Math.random() * 6) + 1;
		
		//shows the number on the console
		console.log(dice);

		//displays the dice image
		document.querySelector('.dice').style.display = "block";

		//runs the below script until the dice turns to a 3
		if (dice !== 3){

		//changes the image to a corresponding number	
		document.querySelector('.dice').src = 'img/dice-' + dice + '.png';

		//calculates the dice total
		sum = sum + dice;

		//changes the score-0 section textContent
		document.querySelector('.score-' + activePlayer).textContent = sum;
	} else {

		//if the dice is a number 3, then it runs the below script

		//sets the score-0 textContent to a 0
		document.querySelector('.score-' + activePlayer).textContent = '0';

		//image display gets hidden
		document.querySelector('.dice').style.display = "none";

		//telling the left column to remove it's activesection style
		document.querySelector('.left-column').classList.remove('active-section');

		//telling the right column to inherit the left column's style - active section
		document.querySelector('.right-column').classList.add('active-section');

		//next player
		nextPlayer();	
	}
})


//Hold Button
//Upon clicking Hold, do the following:
//1. Store the sum in the Total section


//2. Clear the sum




//Change the active player

function nextPlayer(){

	sum = 0;

	activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;


	document.querySelector('.left-column').classList.remove('active-section');
	document.querySelector('.right-column').classList.add('active-section');
	

}




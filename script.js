

//Random number generator that changes the dice image and the Score section


var sum = 0;
var dice;


document.querySelector('.roll').addEventListener('click', function(){	
		dice = Math.floor(Math.random() * 6) + 1;
		console.log(dice);
		document.querySelector('.dice').style.display = "block";
		if (dice !== 3){
		document.querySelector('.dice').src = 'img/dice-' + dice + '.png';
		sum = sum + dice;
		document.querySelector('.score-0').textContent = sum;
	} else {
		document.querySelector('.score-0').textContent = '0';
		document.querySelector('.dice').style.display = "none";
		document.querySelector('.left-column').classList.remove('active-section');
		document.querySelector('.right-column').classList.add('active-section');	
	}
})


//Hold Button
//Upon clicking Hold, do the following:
//1. Store the sum in the Total section




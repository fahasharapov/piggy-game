

//Random number generator that changes the dice image

document.querySelector('.roll').addEventListener('click', function(){
	var dice = Math.floor(Math.random() * 6) + 1;
	console.log(dice);
	document.querySelector('.dice').src = 'img/dice-' + dice + '.png';
})



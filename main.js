const btnKick = document.getElementById('btn-kick');
const kickEnemy = document.getElementById('kick-enemy');

const character = {
	name: 'Pikachu',
	defaultHP: 100,
	damageHP: 100,
	elHP: document.getElementById('health-character'),
	elBar: document.getElementById('progressbar-character'),
}

const enemy = {
	name: 'Charmander',
	defaultHP: 100,
	damageHP: 100,
	elHP: document.getElementById('health-enemy'),
	elBar: document.getElementById('progressbar-enemy'),
}

function init() {
	console.log('Start game');
	renderHP(character);
	renderHP(enemy);
	clickKick(btnKick, character);
	clickKick(btnKick, enemy);
	clickKick(kickEnemy, enemy);
}

function renderHPLife(person) {
	console.log(person.elHP.innerText);
	person.elHP.innerText = person.damageHP + ' / ' + person.defaultHP;
}

function renderprogressBarHP(person) {
	person.elBar.style.width = person.damageHP + '%' ;
}

function renderHP(person) {
	renderHPLife(person);
	renderprogressBarHP(person);
}

function changeHP(count, person) {
	if (person.damageHP < count ) {
		person.damageHP = 0;
		alert('Poor ' + person.name + 'lost');
		btnKick.disabled = true;
	} else {
		person.damageHP -= count;
	}
	
	renderHP(person);

}

function random(num) {
	return Math.ceil(Math.random() * num);
}

function clickKick(button, person) {
	button.addEventListener('click', function() {
		changeHP(random(20), person);
	});
}


init();
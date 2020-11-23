const btnKick = document.getElementById('btn-kick');
const kickEnemy = document.getElementById('kick-enemy');
const controlBlock = document.querySelector('#logs');
const counterOne = document.querySelector('#btn-kick>.counter');
const counterTwo = document.querySelector('#kick-enemy>.counter');

const character = {
	name: 'Pikachu',
	defaultHP: 250,
	damageHP: 250,
	elHP: document.getElementById('health-character'),
	elBar: document.getElementById('progressbar-character'),
	renderHPLife: renderHPLife,
	renderProgressBarHP: renderProgressBarHP,
	renderHP: renderHP,
	changeHP: changeHP,
	clickKick: clickKick,

}

const enemy = {
	name: 'Charmander',
	defaultHP: 250,
	damageHP: 250,
	elHP: document.getElementById('health-enemy'),
	elBar: document.getElementById('progressbar-enemy'),
	renderHPLife: renderHPLife,
	renderProgressBarHP: renderProgressBarHP,
	changeHP: changeHP,
	renderHP: renderHP,
	clickKick: clickKick,
}



function init() {
	console.log('Start game');
	character.renderHP();
	enemy.renderHP();
	clickKick(btnKick, character, counterOne);
	clickKick(btnKick, enemy, counterOne);
	clickKick(kickEnemy, enemy, counterTwo);

}

function renderHPLife() {
	this.elHP.innerText = this.damageHP + ' / ' + this.defaultHP;
	// console.log(this.elHP.innerText);
	// console.log(this);
};

// character.renderHPLife();



function renderProgressBarHP() {
	this.elBar.style.width = this.damageHP*100/this.defaultHP + '%' ;
	// console.log(this.elBar.style.width);
	// console.log(this);
}

// character.renderProgressBarHP();

function renderHP() {
	this.renderHPLife();
	this.renderProgressBarHP();
}



// character.renderHP()

function changeHP(count) {
	this.damageHP -= count;
	const {name: charName, damageHP: charDamage, defaultHP: charHP} = character;
	const {name: enemyName, damageHP: enemyDamage, defaultHP: enemyHP} = enemy;
	const log = this === enemy ? generateLog(enemyName, charName, count, this.damageHP, enemyHP) : generateLog(charName, enemyName, count, this.damageHP, charHP);
	
	
	// console.log(log);
	if (this.damageHP <= 0 ) {
		this.damageHP = 0;
		alert('Poor ' + this.name + 'lost');
		btnKick.disabled = true;
		kickEnemy.disabled = true;
	}
	this.renderHP();

}



function random(num) {
	return Math.ceil(Math.random() * num);
}

function generateLog(firstName, secondName, count, damage, defaultHP) {
	const logs = [
	    `${firstName} вспомнил что-то важное, но неожиданно ${secondName}, не помня себя от испуга, ударил в предплечье врага. -${count} [${damage} / ${defaultHP}]`,
	    `${firstName} поперхнулся, и за это ${secondName} с испугу приложил прямой удар коленом в лоб врага. -${count} [${damage} / ${defaultHP}]`,
	    `${firstName} забылся, но в это время наглый ${secondName}, приняв волевое решение, неслышно подойдя сзади, ударил. -${count} [${damage} / ${defaultHP}]`,
	    `${firstName} пришел в себя, но неожиданно ${secondName} случайно нанес мощнейший удар. -${count} [${damage} / ${defaultHP}]`,
	    `${firstName} поперхнулся, но в это время ${secondName} нехотя раздробил кулаком \<вырезанно цензурой\> противника. -${count} [${damage} / ${defaultHP}]`,
	    `${firstName} удивился, а ${secondName} пошатнувшись влепил подлый удар. -${count} [${damage} / ${defaultHP}]`,
	    `${firstName} высморкался, но неожиданно ${secondName} провел дробящий удар. -${count} [${damage} / ${defaultHP}]`,
	    `${firstName} пошатнулся, и внезапно наглый ${secondName} беспричинно ударил в ногу противника -${count} [${damage} / ${defaultHP}]`,
	    `${firstName} расстроился, как вдруг, неожиданно ${secondName} случайно влепил стопой в живот соперника. -${count} [${damage} / ${defaultHP}]`,
	    `${firstName} пытался что-то сказать, но вдруг, неожиданно ${secondName} со скуки, разбил бровь сопернику. -${count} [${damage} / ${defaultHP}]`
	];

	
	const logBlock = document.createElement('p');
	logBlock.innerText = logs[random(logs.length) - 1];
	controlBlock.insertBefore(logBlock, controlBlock.children[0]);
	
	
}

function clickCount() {
	let clickAmount = 0;
	return function() {
		clickAmount += 1;
		console.log(clickAmount);
	}
}

function showCounter(counter, num) {
	return function() {
		return --num;
	}

}

function clickLimit(button, num) {
	let currentClick = 0;
	

	return function() {
		if (++currentClick === num) {
			button.disabled = true;
		}


	}

}

function showCounter(num, counter) {
	counter.innerText = num;
	return () => {
		return counter.innerText = --num;
	}
}

// return button.innerText = --num;


function clickKick(button, person, counter) {
	const count = clickCount();
	const countLim = clickLimit(button, 6);
	const minusCount = showCounter(6, counter);
	
	button.addEventListener('click', function() {
		person.changeHP(random(20));
		count();
		countLim();
		minusCount();

	});
}

init();

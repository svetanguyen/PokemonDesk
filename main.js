const btnKick = document.getElementById('btn-kick');
const kickEnemy = document.getElementById('kick-enemy');

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
	clickKick(btnKick, character);
	clickKick(btnKick, enemy);
	clickKick(kickEnemy, enemy);
}

function renderHPLife() {
	this.elHP.innerText = this.damageHP + ' / ' + this.defaultHP;
	// console.log(this.elHP.innerText);
	// console.log(this);
};

// character.renderHPLife();



function renderProgressBarHP() {
	this.elBar.style.width = this.damageHP/(this.defaultHP/100) + '%' ;
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
	count = Math.ceil(count*this.defaultHP/100);
	this.damageHP -= count;
	const log = this === enemy ? generateLog(this, character, count) : generateLog(this, enemy, count);
	const controlBlock = document.querySelector('#logs');
	
		const logBlock = document.createElement('p');
		logBlock.innerText = log;
		controlBlock.insertBefore(logBlock, controlBlock.children[0]);
	
	
	
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

function generateLog(firstPerson, secondPerson, count) {
	const logs = [
	    `${firstPerson.name} вспомнил что-то важное, но неожиданно ${secondPerson.name}, не помня себя от испуга, ударил в предплечье врага. -${count} [${firstPerson.damageHP} / ${firstPerson.defaultHP}]`,
	    `${firstPerson.name} поперхнулся, и за это ${secondPerson.name} с испугу приложил прямой удар коленом в лоб врага. -${count} [${firstPerson.damageHP} / ${firstPerson.defaultHP}]`,
	    `${firstPerson.name} забылся, но в это время наглый ${secondPerson.name}, приняв волевое решение, неслышно подойдя сзади, ударил. -${count} [${firstPerson.damageHP} / ${firstPerson.defaultHP}]`,
	    `${firstPerson.name} пришел в себя, но неожиданно ${secondPerson.name} случайно нанес мощнейший удар. -${count} [${firstPerson.damageHP} / ${firstPerson.defaultHP}]`,
	    `${firstPerson.name} поперхнулся, но в это время ${secondPerson.name} нехотя раздробил кулаком \<вырезанно цензурой\> противника. -${count} [${firstPerson.damageHP} / ${firstPerson.defaultHP}]`,
	    `${firstPerson.name} удивился, а ${secondPerson.name} пошатнувшись влепил подлый удар. -${count} [${firstPerson.damageHP} / ${firstPerson.defaultHP}]`,
	    `${firstPerson.name} высморкался, но неожиданно ${secondPerson.name} провел дробящий удар. -${count} [${firstPerson.damageHP} / ${firstPerson.defaultHP}]`,
	    `${firstPerson.name} пошатнулся, и внезапно наглый ${secondPerson.name} беспричинно ударил в ногу противника -${count} [${firstPerson.damageHP} / ${firstPerson.defaultHP}]`,
	    `${firstPerson.name} расстроился, как вдруг, неожиданно ${secondPerson.name} случайно влепил стопой в живот соперника. -${count} [${firstPerson.damageHP} / ${firstPerson.defaultHP}]`,
	    `${firstPerson.name} пытался что-то сказать, но вдруг, неожиданно ${secondPerson.name} со скуки, разбил бровь сопернику. -${count} [${firstPerson.damageHP} / ${firstPerson.defaultHP}]`
	];
	
	return logs[random(logs.length) - 1];
}

function clickKick(button, person) {
	button.addEventListener('click', function() {
		person.changeHP(random(20));
		// console.log(this.call(enemy));
	});
}

init();

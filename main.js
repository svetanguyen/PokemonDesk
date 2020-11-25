import Pokemon from "./pokemon.js";
const btnKick = document.getElementById('btn-kick');
const kickEnemy = document.getElementById('kick-enemy');
const controlBlock = document.querySelector('#logs');
const counterOne = document.querySelector('#btn-kick>.counter');
const counterTwo = document.querySelector('#kick-enemy>.counter');

const player1 = new Pokemon({
	name: 'Pikachu',
	type: 'electric',
	hp: 500,
	selectors: 'character'

});

console.log(player1);

const player2 = new Pokemon({
	name: 'Charmander',
	type: 'fire',
	hp: 450,
	selectors: 'enemy'

});
console.log(player2);


const random = (num) => Math.ceil(Math.random() * num);

function generateLog(first, second, count) {
	const logs = [
	    `${first.name} вспомнил что-то важное, но неожиданно ${second.name}, не помня себя от испуга, ударил в предплечье врага. -${count} [${first.hp.current} / ${first.hp.total}]`,
	    `${first.name} поперхнулся, и за это ${second.name} с испугу приложил прямой удар коленом в лоб врага. -${count} [${first.hp.current} / ${first.hp.total}]`,
	    `${first.name} забылся, но в это время наглый ${second.name}, приняв волевое решение, неслышно подойдя сзади, ударил. -${count} [${first.hp.current} / ${first.hp.total}]`,
	    `${first.name} пришел в себя, но неожиданно ${second.name} случайно нанес мощнейший удар. -${count} [${first.hp.current} / ${first.hp.total}]`,
	    `${first.name} поперхнулся, но в это время ${second.name} нехотя раздробил кулаком \<вырезанно цензурой\> противника. -${count} [${first.hp.current} / ${first.hp.total}]`,
	    `${first.name} удивился, а ${second.name} пошатнувшись влепил подлый удар. -${count} [${first.hp.current} / ${first.hp.total}]`,
	    `${first.name} высморкался, но неожиданно ${second.name} провел дробящий удар. -${count} [${first.hp.current} / ${first.hp.total}]`,
	    `${first.name} пошатнулся, и внезапно наглый ${second.name} беспричинно ударил в ногу противника -${count} [${first.hp.current} / ${first.hp.total}]`,
	    `${first.name} расстроился, как вдруг, неожиданно ${second.name} случайно влепил стопой в живот соперника. -${count} [${first.hp.current} / ${first.hp.total}]`,
	    `${first.name} пытался что-то сказать, но вдруг, неожиданно ${second.name} со скуки, разбил бровь сопернику. -${count} [${first.hp.current} / ${first.hp.total}]`
	];

	
	const logBlock = document.createElement('p');
	logBlock.innerText = logs[random(logs.length) - 1];
	controlBlock.insertBefore(logBlock, controlBlock.children[0]);
	
	
}

function clickCount() {
	let clickAmount = 0;
	return () => {
		clickAmount += 1;
		console.log(clickAmount);
	}
}


function showCounter(button, num, counter) {
	counter.innerText = num;
	return () => {
		--num;
		if(num === 0) {
			button.disabled = true;
		}
		return counter.innerText = num;
	}
}

const counterCount = showCounter(btnKick, 10, counterOne);
btnKick.addEventListener('click', () => {
	player1.changeHP(random(70), function(count) {
		console.log(this);
		console.log(generateLog(player1, player2, count));
	});
	player2.changeHP(random(80), function(count) {
		console.log('some changes');
		console.log(generateLog(player2, player1, count));
	});
	counterCount();
});

const counterCount2 = showCounter(kickEnemy, 6, counterTwo);
kickEnemy.addEventListener('click', () => {
	player2.changeHP(random(60), function(count) {
		console.log('some changes');
		console.log(generateLog(player1, player2, count));
	});
	counterCount2();

});



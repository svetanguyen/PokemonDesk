import { random } from "./random.js";
const controlBlock = document.querySelector('#logs');
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
	return logBlock.innerText;
}

export default generateLog;
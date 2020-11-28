import Pokemon from "./pokemon.js";
import { btnKick, kickEnemy, counterCount, counterCount2, generateLog, randomMin } from "./utilities.js";

const player1 = new Pokemon({
	name: 'Pikachu',
	type: 'electric',
	hp: 500,
	selectors: 'character'

});

const player2 = new Pokemon({
	name: 'Charmander',
	type: 'fire',
	hp: 450,
	selectors: 'enemy'

});

btnKick.addEventListener('click', () => {
	player1.changeHP(randomMin(20, 70), function(count) {
		console.log(generateLog(player1, player2, count));
	});
	player2.changeHP(randomMin(20, 50), function(count) {
		console.log('some changes');
		console.log(generateLog(player2, player1, count));
	});
	counterCount();
});


kickEnemy.addEventListener('click', () => {
	player2.changeHP(randomMin(20, 60), function(count) {
		console.log('some changes');
		console.log(generateLog(player2, player1, count));
	});
	counterCount2();

});
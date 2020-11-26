import { btnKick, kickEnemy } from "./docEl.js";
import { counterCount, counterCount2 } from "./showCounter.js";
import { player1, player2 } from "./players.js";
import generateLog from "./generatelog.js";
import showCounter from "./showCounter.js";
import { randomMin } from "./random.js";

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
import Game from "./constructor.js";
import { pokemons } from "./pokemons.js";
import {random} from './utilities.js';
const controlPart = document.querySelector('.control');
const startBtn = document.getElementById('Start');
let index1 = random(pokemons.length - 1);
let randomPlayerOne = pokemons[index1];
// this is to avoid overlapping of characters
pokemons.splice(index1, 1);
let randomPlayerTwo = pokemons[random(pokemons.length - 1)];
const resetGame = document.getElementById('Reset');
console.log(randomPlayerOne.img);

let player1 = new Game({
	...randomPlayerOne,
	selectors: 'player1'

});
console.log(player1);
console.log(player1.img);
let player2 = new Game({
	...randomPlayerTwo,
	selectors: 'player2'

});



startBtn.addEventListener('click', () => {
	player1.startGame(startBtn, player2, player1);
	
});
console.log(resetGame);

resetGame.addEventListener('click', () => {
	randomPlayerTwo = pokemons[random(pokemons.length - 1)];
	player2 = new Game({
		...randomPlayerTwo,
		selectors: 'player2'

	});
	player2.resetHP();
	player1.resetHP();
	player1.startGame(resetGame, player2, player1);

});

// console.log(pikachu);






	
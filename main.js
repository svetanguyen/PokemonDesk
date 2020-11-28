import Game from "./constructor.js";
import { pokemons } from "./pokemons.js";
import {random} from './utilities.js';
const controlPart = document.querySelector('.control');
const startBtn = document.getElementById('Start');
// const pikachu = pokemons.find(item => item.name === 'Pikachu');
let randomPlayerOne = pokemons[random(pokemons.length - 1)];
let randomPlayerTwo = pokemons[random(pokemons.length - 1)];
const resetGame = document.getElementById('Reset');
// console.log(randomPlayer.img);
/*никак не выходит прогрузить картинки. если
 выводить их через переменную randomPlayer виден путь, но если через саму 
 переменную player1 - уже нет, хотя имя, к примеру, грузится :C */

let player1 = new Game({
	...randomPlayerOne,
	selectors: 'player1'

});
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
	player2.resetHP();
	player1.resetHP();
	player1.startGame(resetGame, player2, player1);

});

// console.log(pikachu);






	
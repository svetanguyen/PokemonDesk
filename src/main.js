import Game from "./constructor.js";
import {random, resetLog} from './utilities.js';
const controlPart = document.querySelector('.control');
const startBtn = document.getElementById('Start');
const resetGame = document.getElementById('Reset');


class Gameflow {
	getPokemons = async () => {
		const response = await fetch('https://reactmarathon-api.netlify.app/api/pokemons');
		const body = await response.json();
		return body;
	};

	start = async () => {
		const pokemons = await this.getPokemons();
		let index1 = random(pokemons.length - 1);
		let randomPlayerOne = pokemons[index1];
		pokemons.splice(index1, 1);
		let randomPlayerTwo = pokemons[random(pokemons.length - 1)];
		console.log(pokemons);
		let player1 = new Game({
			...randomPlayerOne,
			selectors: 'player1'

		});
		// console.log(player1);
		// console.log(player1.img);
		let player2 = new Game({
			...randomPlayerTwo,
			selectors: 'player2'

		});



		startBtn.addEventListener('click', () => {
			player1.startGame(startBtn, player2, player1);
			
		});
		console.log(resetGame);

		resetGame.addEventListener('click', () => {
			resetLog();
			randomPlayerTwo = pokemons[random(pokemons.length - 1)];
			player2 = new Game({
				...randomPlayerTwo,
				selectors: 'player2'

			});
			player1.resetHP();
			player2.resetHP();
			player1.resetMessage();
			player2.resetMessage();
			player1.startGame(resetGame, player2, player1);

		});
	};
};


const game = new Gameflow();
game.start();






	
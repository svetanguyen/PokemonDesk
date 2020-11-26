import Pokemon from "./pokemon.js";
export const player1 = new Pokemon({
	name: 'Pikachu',
	type: 'electric',
	hp: 500,
	selectors: 'character'

});

export const player2 = new Pokemon({
	name: 'Charmander',
	type: 'fire',
	hp: 450,
	selectors: 'enemy'

});
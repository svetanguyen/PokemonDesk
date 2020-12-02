import {showCounter, randomMin, generateLog} from './utilities.js';
const controlPart = document.querySelector('.control');
const resetGame = document.getElementById('Reset');
const message = document.querySelector('.message');
class Selectors {
	constructor(name) {
		this.elHP = document.getElementById(`health-${name}`);
		this.elProgressbar = document.getElementById(`progressbar-${name}`);
		this.elImg = document.querySelector(`.${name} .sprite`);
		this.elName = document.getElementById(`name-${name}`);
	}	
}

class Pokemon extends Selectors {
	constructor({name, hp, type, selectors, img, attacks = []}) {
		super(selectors);
		this.name = name;
		this.hp = {
			current: hp,
			total: hp
		};
		this.type = type;
		this.attacks = attacks;
		this.img = img;
		this.renderHP();
		this.renderInfo();

		// this.resetHP();
	}

	renderInfo = () => {
		this.elName.innerText = this.name;
		this.elImg.src = this.img;
		console.log(this.img);
	}


	renderHPLife = () => {
		const {elHP, hp: {current, total} } = this;
		this.elHP.innerText = current + ' / ' + total;
	};
	renderProgressBarHP = () => {
		this.elProgressbar.style.width = this.hp.current*100/this.hp.total + '%' ;
		if (this.hp.current < 60 && this.hp.current > 20) {
			this.elProgressbar.classList.add('low');
		}
		if (this.hp.current <= 20) {
			this.elProgressbar.classList.add('critical');	
		}
	};
	renderHP = () => {
		this.renderHPLife();
		this.renderProgressBarHP();
	};

	resetHP = () => {
		this.hp.current = this.hp.total;
		this.elProgressbar.classList.remove('low', 'critical');
		this.renderHP();
	}

	resetMessage = () => message.innerText = '';

	changeHP = (count, cb) => {
		this.hp.current -= count;
		if (this.hp.current <= 0 ) {
			this.hp.current = 0;
			// alert('Poor ' + this.name + ' lost');
			
			message.innerText = 'Poor ' + this.name + ' lost';
			const allButtons = document.querySelectorAll('.control .button-attack');
			allButtons.forEach(item => item.remove());		
			resetGame.style.display = 'inline-block';
			resetGame.classList.add('button', 'reset');
			
		}
		this.renderHP();
		cb && cb(count);

	};



	
}

class Game extends Pokemon {
	constructor(pokemons) {
		super(pokemons);
	}

	contrAttack = (enemy, player) => {
			this.changeHP(randomMin(enemy.attacks[0].minDamage, enemy.attacks[0].maxDamage), function(count) {
					console.log('some changes');
					console.log(generateLog(player, enemy, count));
			});
	};

	startGame = (button, enemy, player) => {
		button.style.display = 'none';
		this.attacks.forEach(item => {
			const btn = document.createElement('button');
			btn.classList.add('button', 'button-attack');
			btn.innerText = item.name;
			controlPart.appendChild(btn);
			const counterCount = showCounter(btn, item.maxCount);
			btn.addEventListener('click', () => {
				console.log('Click button', btn.innerText);
				counterCount();
				enemy.changeHP(randomMin(item.minDamage, item.maxDamage), function(count) {					
					console.log(generateLog(enemy, player, count));
				});
				setTimeout(this.contrAttack, 400, enemy, player);
			})
		});
		
	};
	

}

export default Game;

class Selectors {
	constructor(name) {
		this.elHP = document.getElementById(`health-${name}`);
		this.elProgressbar = document.getElementById(`progressbar-${name}`);
	}
}

class Pokemon extends Selectors {
	constructor({name, hp, type, selectors}) {
		super(selectors);
		this.name = name;
		this.hp = {
			current: hp,
			total: hp
		};
		this.type = type;
		this.renderHP();
	}


	renderHPLife = () => {
		const {elHP, hp: {current, total} } = this;
		this.elHP.innerText = current + ' / ' + total;
	};
	renderProgressBarHP = () => {
		this.elProgressbar.style.width = this.hp.current*100/this.hp.total + '%' ;
	};
	renderHP = () => {
		this.renderHPLife();
		this.renderProgressBarHP();
	};
	changeHP = (count, cb) => {
		this.hp.current -= count;
		// const {name: charName, damageHP: charDamage, defaultHP: charHP} = character;
		// const {name: enemyName, damageHP: enemyDamage, defaultHP: enemyHP} = enemy;
		// const log = this === enemy ? generateLog(enemyName, charName, count, this.damageHP, enemyHP) : generateLog(charName, enemyName, count, this.damageHP, charHP);
		
		
		// console.log(log);
		if (this.hp.current <= 0 ) {
			this.hp.current = 0;
			// alert('Poor ' + this.name + 'lost');
			// btnKick.disabled = true;
			// kickEnemy.disabled = true;
		}
		this.renderHP();
		cb && cb(count);

	};
}

export default Pokemon;
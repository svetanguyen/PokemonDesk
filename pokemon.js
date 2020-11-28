import { btnKick, kickEnemy } from "./docEl.js";
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
		if (this.hp.current <= 0 ) {
			this.hp.current = 0;
			alert('Poor ' + this.name + 'lost');
			btnKick.disabled = true;
			kickEnemy.disabled = true;
		}
		this.renderHP();
		cb && cb(count);

	};
}

export default Pokemon;
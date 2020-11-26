import { btnKick, kickEnemy, counterOne, counterTwo } from "./docEl.js";
function showCounter(button, num, counter) {
	counter.innerText = num;
	return () => {
		--num;
		if(num === 0) {
			button.disabled = true;
		}
		return counter.innerText = num;
	}
}
export const counterCount = showCounter(btnKick, 10, counterOne);
export const counterCount2 = showCounter(kickEnemy, 6, counterTwo);
export default showCounter;
export const random = (num) => Math.ceil(Math.random() * num);
export const randomMin = (min = 0, max) => {
	const num = max - min;
	return Math.ceil((Math.random() * num) + min);
};

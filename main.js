// task 1
const firstRow = prompt("Введите первую строку");
const secondRow = prompt("Введите вторую строку");
const letter = prompt("Введите букву");
function getRow(rowOne, rowTwo) {
	let firstRowA = 0;
	let secondRowA = 0;
	console.log(rowOne.length);
	for (let i = 0; i < rowOne.length; i++) {
		if (rowOne.charAt(i) == letter) {
			firstRowA += 1;
		}
	};
	for (let i = 0; i < rowTwo.length; i++) {
		if (rowTwo.charAt(i) == letter) {
			secondRowA += 1;
		}
	};

	if(firstRowA > secondRowA) {
		return rowOne;
	} else if (firstRowA > secondRowA){
		return rowTwo;
	} else {
		return 'В обеих строках одинаковое количество букв ' + letter;
	}
};

alert(getRow(firstRow, secondRow));

// task 2

const telNum = prompt("Введите номер телефона");
if (telNum == '') {
	alert('Вы не ввели номер телефона!');
} else {
	alert(formattedPhone(telNum)); 
}


function formattedPhone(phone) {
	let result = '';
	for (let i = 0; i < phone.length; i++) {
		if ((phone.length == 12 && phone.charAt(0) == '+' && phone.charAt(1) == '7') || (phone.length == 11 && phone.charAt(0) == '7' || phone.charAt(0) == '8' || phone.charAt(0) == '9' )) {
			
			result += phone.charAt(i);
			if (result == '+7' || result == '7' || result == '8' || result == '9') {
				result = '+7 (';
			} else if (phone.charAt(i) == 3) {
				result += ') ';
			} else if (phone.charAt(i) == 6 || phone.charAt(i) == 8) {
				result += '-';
			}
		} else {
			result = "Это не подходящий формат номер телефона!";
			break;
		}
		
	}
	console.log(phone.length == 12);
	return result;
}



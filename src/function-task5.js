export function getMonth(n) {
	if (typeof n === 'undefined') return 'данные не были введены';
	const ARR_MONTH = ["январь", "февраль", "март", "апрель", "май", "июнь", "июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь"];
	return (Number.isInteger(n) && n >= 1 && n <= 12) ?
					`${n} месяц - ${ARR_MONTH[n - 1]}` :
					'такого месяца не существует';
}

// console.log(getMonth(1));
// console.log(getMonth('12,8'));
// console.log(getMonth(135));
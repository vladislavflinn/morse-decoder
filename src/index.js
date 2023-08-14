const MORSE_TABLE = {
	'*': ' ',
	'.-': 'a',
	'-...': 'b',
	'-.-.': 'c',
	'-..': 'd',
	'.': 'e',
	'..-.': 'f',
	'--.': 'g',
	'....': 'h',
	'..': 'i',
	'.---': 'j',
	'-.-': 'k',
	'.-..': 'l',
	'--': 'm',
	'-.': 'n',
	'---': 'o',
	'.--.': 'p',
	'--.-': 'q',
	'.-.': 'r',
	'...': 's',
	'-': 't',
	'..-': 'u',
	'...-': 'v',
	'.--': 'w',
	'-..-': 'x',
	'-.--': 'y',
	'--..': 'z',
	'.----': '1',
	'..---': '2',
	'...--': '3',
	'....-': '4',
	'.....': '5',
	'-....': '6',
	'--...': '7',
	'---..': '8',
	'----.': '9',
	'-----': '0',
};

function decode(expr) {
	let decodedString = '';
	for (let i = 0; i < expr.length; i = i + 10) {
		const substring = expr.slice(i, i + 10);
		const index = substring.indexOf('1');
		const morseCode = substring.slice(index);
		let morseChar = '';
		for (let j = 0; j < morseCode.length; j = j + 2) {
			if (morseCode[j + 1] === '0') {
				morseChar += '.';
			} else if (morseCode[j + 1] === '1') {
				morseChar += '-';
			} else {
				morseChar += '*';
			}
		}
		decodedString += MORSE_TABLE[morseChar];
	}
	return decodedString;
}

module.exports = {
	decode,
};

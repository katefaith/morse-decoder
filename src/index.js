const MORSE_TABLE = {
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
    // преобразуем строку в массив из зашифрованных букв
    let exprArr = [];
    for (let i = 0; i < expr.length / 10; i++) {
        exprArr[i] = expr.slice(10 * i, 10 * (i + 1));
    }

    return exprArr.map(item => {
        let newItem = '';
        // преобразуем элементы массива в точки и тире
        for (let i = 0; i < item.length; i += 2) {
            if (item.substr(i, 2) === '10') {
                newItem += '.';
            }
            if (item.substr(i, 2) === '11') {
                newItem += '-';
            }
        }
        // преобразуем в буквы
        return (newItem in MORSE_TABLE) ? MORSE_TABLE[newItem] : ' ';
    }).join(''); // возвращаем строку
}

module.exports = {
    decode
}
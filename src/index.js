const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    		// преобразуем строку в массив из зашифрованных букв
            let exprArr = [];
            let exprArrLength = expr.length / 10
            for (let i = 0; i < exprArrLength; i++) {
                exprArr[i] = expr.slice(10 * i, 10 * (i + 1));
            }
            
            // обрезаем у элементов массива нули слева, преобразуем звездочки в пробелы
            exprArr = exprArr.map(item => {
                if (item === '**********') {
                  return ' ';
              } else {
                for (let i = 0; i < item.length; i++) {
                  if (item[i] === '1') {
                    let newItem = item.slice(i);
                    return newItem;
                  }
                }
              }
            });
            
            // преобразуем в точки и тире
            exprArr = exprArr.map(item => {
                let newItem = '';
              if (item === ' ') {
                  newItem = item;
              } else {
                  for (let i = 1; i < item.length; i+=2) {
                    newItem += (item[i] === '0') ? '.' : '-';
                }
              }
              return newItem;
            });
            
            // преобразуем в буквы
            exprArr = exprArr.map(item => {
                if (item in MORSE_TABLE) {
                  return MORSE_TABLE[item];
              } else {
                  return ' ';
              }
            });
            
            return exprArr.join('');
}

module.exports = {
    decode
}
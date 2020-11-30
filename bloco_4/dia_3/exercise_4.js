// Imprimr uma piramide de * de se n

let n = 5;
let line = '';
let lineNumbers = Math.ceil(n / 2);
let leftSpaces = lineNumbers;
let rightSpaces = lineNumbers;

if (n > 1) {
    for (let indexLine = 0; indexLine <= lineNumbers; indexLine += 1) { //imprime as linhas
        for (let indexColumn = 1; indexColumn <= n; indexColumn += 1) { //imprime as colunas
            if (indexColumn < leftSpaces && indexColumn > rightSpaces) {
                line += '*';
            } else {
                line += ' ';
            }
        }

        console.log(line);
        rightSpaces -= 1;
        leftSpaces += 1;
        line  = '';
    }
} else {
    console.log('Número inválido, favor escolher outro.')
}


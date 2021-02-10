// Imprimi um triangulo retangulo formado por *, de tamanho n, sendo n informado

let n = 1;
let position = n;
let line = '';

if (n > 1) {
    for (i = 0; i < n; i += 1) { //imprime as linhas
        for (j = 0; j < n; j += 1) { //imprime as colunas
            if (j < (position - 1)) {
                line += ' ';
            } else {
                line += '*';
            }
        }
        console.log(line);
        line = '';
        position -= 1;
    }
} else {
    console.log('Número inválido, favor escolher outro.')
}

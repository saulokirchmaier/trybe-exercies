// Imprimi um quadrado * de tamanha n, sendo n informado

let n = 5;
let line = '';

if (n > 1) {
    for (i = 0; i < n; i += 1) {
        for (j = 0; j < n; j += 1) {
            line = line + '*';
        }
        console.log(line);
        line = '';
    }
} else {
    console.log('Número inválido, favor escolher outro.')
}
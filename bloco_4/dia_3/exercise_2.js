// Imprimi um triangulo retangulo formado por *, de tamanho n, sendo n informado

let n = 8;
let line = '';

if (n > 1) {
    for (i = 0; i < n; i += 1) {
        for (j = 0; j < 1; j += 1) {
            line = line + '*';
        }
        console.log(line);
    }
} else {
    console.log('Número inválido, favor escolher outro.')
}
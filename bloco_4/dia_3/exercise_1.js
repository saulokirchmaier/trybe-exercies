// Imprimi um quadrado * de tamanha n, sendo n informado

let n = 10;
let line = '*';

for (i = 1; i < n; i += 1) {
    for (j = 1; j < n; j += 1) {
        line = line + '*';
    }
    console.log(line);
    line = '*';
}

const fatorial = (number) => {
    if (number === 0) return 1;
    else {
        return (number * fatorial(number - 1));
    }
};
const number = 4;

console.log(`O fatorial de ${number} é ${fatorial(number)}`);
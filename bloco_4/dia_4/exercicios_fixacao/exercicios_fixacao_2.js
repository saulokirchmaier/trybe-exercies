// Refatorando exercicios do bloco 4 dia 1

function sum(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function multipication(a, b) {
    return a * b;
}

function division(a, b) {
    return a / b;
}

function module(a, b) {
    return a % b;
}

function biggerNumber(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

function biggerOfthree(a, b, c) {
    if (a > b && a > c) {
        return a;
    } else if (b > a && b > c) {
        return b;
    } else {
        return c;

    }
}

function signalOfNumber(a) {
    if (a > 0) {
        return 'positive';
    } else if ( a < 0) {
        return 'negative';
    } else {
        return 'zero';
    }
}

function isTriangule(a, b, c) {
    let triangle = a + b + c;
    if (triangle == 180) {
        return true;
    } else {
        return false;
    }
}

function chessMove(a) {
    let chessPiece = a.toLowerCase();

    switch (chessPiece) {
        case "king":
            return ("King can move one vacancy square in direction, forwards, backwards, left, right, or diagonally. However, it can't move to be ander attack by the opponent.");
        
        case "queen":
            return ("Queen can move any number of vacant squares in any direction, forwards, backwards, left, right, or diagonally.");
        case "bishop":
            return ("Bishop can move any number of vacant squares diagonally in straigth line. Always stays in the same color square during the game.");

        case "rook":
            return ("Rook can move any number of vacant squares forwards, backwards, left, right.");

        case "knigth":
            return ("Knigth can move like 'L', it's an extended diagonal from one corner of any 2×3 rectangle of squares to the furthest opposite corner.");

        case "pawn":
            return ("Pawn can move forward exactly one square, or optionally, two squares when on its starting square, toward the opponent's side of the board. When there is an enemy piece one square diagonally ahead of a pawn, either left or right, then the pawn may capture that piece.");

        default:
            return ("No piece found");
    }
}

function gradeConceitConverter(gradePorcentage) {
    let gradeConceit;

    if (gradePorcentage > 100 || gradePorcentage < 0) {
        gradeConceit = "Error, invalid number!"
    } else if (gradePorcentage <= 100 && gradePorcentage >= 90) {
        gradeConceit = "A";
    } else if (gradePorcentage < 90 && gradePorcentage >= 80) {
        gradeConceit = "B";
    } else if (gradePorcentage < 80 && gradePorcentage >= 70) {
        gradeConceit = "C";
    } else if (gradePorcentage < 70 && gradePorcentage >= 60) {
        gradeConceit = "D";
    } else if (gradePorcentage < 60 && gradePorcentage >= 50) {
        gradeConceit = "E";
    } else if (gradePorcentage < 50 && gradePorcentage >= 0) {
        gradeConceit = "F";
    } 

    return gradeConceit;
}

function checkEvenNumbers(a, b, c) {
    if (a % 2 == 0 || b % 2 == 0 || c % 2 == 0) {
        return true;
    } else {
        return false;
    }
}


console.log(sum(10, 20));
console.log(sub(40, 20));
console.log(multipication(4, 2));
console.log(division(4, 2));
console.log(module(4, 2));
console.log(biggerNumber(4, 20));
console.log(biggerOfthree(4, 20, 50));
console.log(signalOfNumber(0));
console.log(isTriangule(60, 30, 90));
console.log(chessMove('queen'));
console.log(gradeConceitConverter(55));
console.log(checkEvenNumbers(50));


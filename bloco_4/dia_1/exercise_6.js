let chessPiece = "Pawn";

chessPiece = chessPiece.toLowerCase();

switch (chessPiece) {
    case "king":
        console.log("King can move one vacancy square in direction, forwards, backwards, left, right, or diagonally. However, it can't move to be ander attack by the opponent.");
        break;
    
    case "queen":
        console.log("Queen can move any number of vacant squares in any direction, forwards, backwards, left, right, or diagonally.");
        break;
    case "bishop":
        console.log("Bishop can move any number of vacant squares diagonally in straigth line. Always stays in the same color square during the game.");
        break;

    case "rook":
        console.log("Rook can move any number of vacant squares forwards, backwards, left, right.");
        break;

    case "knigth":
        console.log("Knigth can move like 'L', it's an extended diagonal from one corner of any 2×3 rectangle of squares to the furthest opposite corner.");
        break;

    case "pawn":
        console.log("Pawn can move forward exactly one square, or optionally, two squares when on its starting square, toward the opponent's side of the board. When there is an enemy piece one square diagonally ahead of a pawn, either left or right, then the pawn may capture that piece.");
        break;

    default:
        console.log("No piece found");
        break;
}
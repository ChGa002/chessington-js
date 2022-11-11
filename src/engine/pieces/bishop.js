import Piece from './piece';
import Square from "../square";

export default class Bishop extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const location = board.findPiece(this);
        return [...new Set([
            ...this.getDiagonalMoves(board, location, 1, -1),
            ...this.getDiagonalMoves(board, location, 1, 1 ),
            ...this.getDiagonalMoves(board, location, -1, 1 ),
            ...this.getDiagonalMoves(board, location, -1, -1 )])]

    }

    // x, y represent the direction
    getDiagonalMoves(board, location, x, y)
    {
        let moves = [];

        let i = 1;
        let potentialMove = Square.at(location.row + x, location.col + y);

        while(board.isOnTheBoard(potentialMove) && board.isFreeOrCapturable(potentialMove)){
            moves.push(potentialMove);

            if (board.isCapturable(potentialMove)) break;

            i ++;

            potentialMove = Square.at(location.row + i * x, location.col + i * y);
        }
        return moves;

    }
}

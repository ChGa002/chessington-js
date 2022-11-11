import Piece from './piece';
import Player from "../player";
import Square from "../square";

export default class Rook extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const location = board.findPiece(this);
        return [...new Set([...this.getVerticalMoves(board, location), ...this.getHorizontalMoves(board, location)])]
    }

    getVerticalMoves(board, location)
    {
        let moves = [];
        let directions = [1, -1];

        for (const direction of directions)
        {
            let i = direction;

            let potentialMove = Square.at(location.row, location.col + i);

            while(board.isOnTheBoard(potentialMove) && board.isFreeOrCapturable(potentialMove)){
                moves.push(potentialMove);
                i += direction
                potentialMove = Square.at(location.row, location.col + i);
            }
        }
        return moves;
    }

    getHorizontalMoves(board, location)
    {
        let moves = [];
        let directions = [1, -1];
        for (const direction of directions)
        {
            let i = direction;

            let potentialMove = Square.at(location.row + i, location.col);

            while(board.isOnTheBoard(potentialMove) && board.isFreeOrCapturable(potentialMove)){
                moves.push(potentialMove);
                i += direction
                potentialMove = Square.at(location.row + i, location.col);
            }
        }
        return moves;
    }
}

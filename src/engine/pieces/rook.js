import Piece from './piece';
import Player from "../player";
import Square from "../square";

export default class Rook extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const location = board.findPiece(this);
        return [...new Set([...this.getStraightAcrossMoves(board, location, 0, 1), ...this.getStraightAcrossMoves(board, location, 1, 0)])]
    }

    // x and y represent how many increments in each direction
    getStraightAcrossMoves(board, location, x, y)
    {
        let moves = [];
        let directions = [1, -1];

        for (const direction of directions)
        {
            let i = direction;

            let potentialMove = Square.at(location.row + i * x, location.col + i * y);

            while(board.isOnTheBoard(potentialMove) && board.isFreeOrCapturable(potentialMove)){
                moves.push(potentialMove);
                if (board.isCapturable(potentialMove)) break;

                i += direction
                potentialMove = Square.at(location.row + i * x, location.col + i * y);
            }
        }
        return moves;
    }
}

import Piece from './piece';

export default class Queen extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const location = board.findPiece(this);
        return [...new Set([
            ...this.getAllDiagonalMoves(board, location),
            ...this.getAllStraightMoves(board, location)])]
    }
}

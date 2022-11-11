import Piece from './piece';
import Square from "../square";
import Player from "../player";

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const location = board.findPiece(this);
        const direction = this.player === Player.WHITE ? 1 : -1;
        return new Array(Square.at(location.row + direction, location.col));
    }
}

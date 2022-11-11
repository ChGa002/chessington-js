import Piece from './piece';
import Square from "../square";
import Player from "../player";
import gameSettings from "../gameSettings";

export default class Pawn extends Piece {

    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const location = board.findPiece(this);
        let direction = this.player === Player.WHITE ? 1 : -1;

        let moves = [Square.at(location.row + direction, location.col)];

        if ((this.player === Player.WHITE && location.row === 1) || (this.player === Player.BLACK && location.row === gameSettings.BOARD_SIZE - 2))
        {
            moves.push(Square.at(location.row + direction * 2, location.col));
        }

        return moves;
    }
}

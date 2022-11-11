import Square from "../square";

export default class Piece {
    constructor(player) {
        this.player = player;
    }

    getAvailableMoves(board) {
        throw new Error('This method must be implemented, and return a list of available moves');
    }

    moveTo(board, newSquare) {
        const currentSquare = board.findPiece(this);
        board.movePiece(currentSquare, newSquare);
    }

    // x and y represent how many increments in each direction

    getAllStraightMoves(board, location) {
        return [...new Set([...this.getStraightMovesInALine(board, location, 0, 1), ...this.getStraightMovesInALine(board, location, 1, 0)])]
    }

    getStraightMovesInALine(board, location, x, y) {
        let moves = [];
        let directions = [1, -1];

        for (const direction of directions) {
            let i = direction;

            let potentialMove = Square.at(location.row + i * x, location.col + i * y);

            while (board.isOnTheBoard(potentialMove) && board.isFreeOrCapturable(potentialMove)) {
                moves.push(potentialMove);
                if (board.isCapturable(potentialMove)) break;

                i += direction
                potentialMove = Square.at(location.row + i * x, location.col + i * y);
            }
        }
        return moves;
    }


    getAllDiagonalMoves(board, location) {
        return [...new Set([
            ...this.getDiagonalMovesInOneDirection(board, location, 1, -1),
            ...this.getDiagonalMovesInOneDirection(board, location, 1, 1),
            ...this.getDiagonalMovesInOneDirection(board, location, -1, 1),
            ...this.getDiagonalMovesInOneDirection(board, location, -1, -1)])]
    }

    // x, y represent the direction
    getDiagonalMovesInOneDirection(board, location, x, y) {
        let moves = [];

        let i = 1;
        let potentialMove = Square.at(location.row + x, location.col + y);

        while (board.isOnTheBoard(potentialMove) && board.isFreeOrCapturable(potentialMove)) {
            moves.push(potentialMove);

            if (board.isCapturable(potentialMove)) break;

            i++;

            potentialMove = Square.at(location.row + i * x, location.col + i * y);
        }
        return moves;

    }
}

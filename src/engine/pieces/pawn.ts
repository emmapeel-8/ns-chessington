import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from '../square';
import GameSettings from '../gameSettings';

export default class Pawn extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        const currentSquare = board.findPiece(this);
        const direction = this.player === Player.WHITE ? 1 : -1;
        const startingRow = this.player === Player.WHITE ? 1 : GameSettings.BOARD_SIZE - 2;
        const maxSteps = currentSquare.row === startingRow ? 2 : 1;

        const moves: Square[] = [];
        for (let step = 1; step <= maxSteps; step++) {
            const square = Square.at(currentSquare.row + step * direction, currentSquare.col);
            if (!Piece.isOnBoard(square) || board.getPiece(square)) {
                break;
            }
            moves.push(square);
        }

        for (const colOffset of [-1, 1]) {
            const square = Square.at(currentSquare.row + direction, currentSquare.col + colOffset);
            if (!Piece.isOnBoard(square)) {
                continue;
            }
            const occupant = board.getPiece(square);
            if (occupant && this.canTake(occupant)) {
                moves.push(square);
            }
        }
        return moves;
    }
}

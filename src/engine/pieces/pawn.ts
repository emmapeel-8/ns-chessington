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
            const row = currentSquare.row + step * direction;
            if (row >= 0 && row < GameSettings.BOARD_SIZE) {
                moves.push(Square.at(row, currentSquare.col));
            }
        }
        return moves;
    }
}

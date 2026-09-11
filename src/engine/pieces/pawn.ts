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
        const nextRow = currentSquare.row + direction;

        const moves: Square[] = [];
        if (nextRow >= 0 && nextRow < GameSettings.BOARD_SIZE) {
            moves.push(Square.at(nextRow, currentSquare.col));
        }
        return moves;
    }
}

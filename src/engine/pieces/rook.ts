import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from '../square';
import GameSettings from '../gameSettings';

export default class Rook extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        const currentSquare = board.findPiece(this);
        const moves: Square[] = [];

        for (let i = 0; i < GameSettings.BOARD_SIZE; i++) {
            if (i !== currentSquare.col) {
                moves.push(Square.at(currentSquare.row, i));
            }
            if (i !== currentSquare.row) {
                moves.push(Square.at(i, currentSquare.col));
            }
        }
        return moves;
    }
}

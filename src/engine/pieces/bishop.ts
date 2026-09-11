import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from '../square';
import GameSettings from '../gameSettings';

export default class Bishop extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        const currentSquare = board.findPiece(this);
        const directions = [[1, 1], [1, -1], [-1, 1], [-1, -1]];
        const moves: Square[] = [];

        for (const [rowStep, colStep] of directions) {
            for (let i = 1; i < GameSettings.BOARD_SIZE; i++) {
                const row = currentSquare.row + i * rowStep;
                const col = currentSquare.col + i * colStep;
                if (row < 0 || row >= GameSettings.BOARD_SIZE || col < 0 || col >= GameSettings.BOARD_SIZE) {
                    break;
                }
                moves.push(Square.at(row, col));
            }
        }
        return moves;
    }
}

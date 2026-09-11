import Piece, { DIAGONAL_DIRECTIONS } from './piece';
import Player from '../player';
import Board from '../board';

export default class Bishop extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        return this.getMovesInDirections(board, DIAGONAL_DIRECTIONS);
    }
}

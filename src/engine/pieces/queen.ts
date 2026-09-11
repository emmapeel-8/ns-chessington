import Piece, { DIAGONAL_DIRECTIONS, LATERAL_DIRECTIONS } from './piece';
import Player from '../player';
import Board from '../board';

export default class Queen extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        return this.getMovesInDirections(board, [...LATERAL_DIRECTIONS, ...DIAGONAL_DIRECTIONS]);
    }
}

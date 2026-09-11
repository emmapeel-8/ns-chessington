import Piece, { DIAGONAL_DIRECTIONS, LATERAL_DIRECTIONS } from './piece';
import Player from '../player';
import Board from '../board';

export default class King extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        return this.getMovesFromOffsets(board, [...LATERAL_DIRECTIONS, ...DIAGONAL_DIRECTIONS]);
    }
}

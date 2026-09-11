import Piece, { Direction } from './piece';
import Player from '../player';
import Board from '../board';

const KNIGHT_OFFSETS: Direction[] = [
    [1, 2], [2, 1], [-1, 2], [-2, 1], [1, -2], [2, -1], [-1, -2], [-2, -1]
];

export default class Knight extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        return this.getMovesFromOffsets(board, KNIGHT_OFFSETS);
    }
}

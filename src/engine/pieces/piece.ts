import Player from '../player';
import Board from '../board';
import Square from '../square';
import GameSettings from '../gameSettings';

export type Direction = [number, number];

export const LATERAL_DIRECTIONS: Direction[] = [[1, 0], [-1, 0], [0, 1], [0, -1]];
export const DIAGONAL_DIRECTIONS: Direction[] = [[1, 1], [1, -1], [-1, 1], [-1, -1]];

export default class Piece {
    public player: Player;

    public constructor(player: Player) {
        this.player = player;
    }

    public getAvailableMoves(board: Board) {
        throw new Error('This method must be implemented, and return a list of available moves');
    }

    public moveTo(board: Board, newSquare: Square) {
        const currentSquare = board.findPiece(this);
        board.movePiece(currentSquare, newSquare);
    }

    protected getMovesInDirections(board: Board, directions: Direction[]) {
        const currentSquare = board.findPiece(this);
        const moves: Square[] = [];

        for (const [rowStep, colStep] of directions) {
            for (let distance = 1; distance < GameSettings.BOARD_SIZE; distance++) {
                const row = currentSquare.row + distance * rowStep;
                const col = currentSquare.col + distance * colStep;
                if (row < 0 || row >= GameSettings.BOARD_SIZE || col < 0 || col >= GameSettings.BOARD_SIZE) {
                    break;
                }
                moves.push(Square.at(row, col));
            }
        }
        return moves;
    }
}

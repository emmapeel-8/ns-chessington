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
                const square = Square.at(currentSquare.row + distance * rowStep, currentSquare.col + distance * colStep);
                if (!Piece.isOnBoard(square)) {
                    break;
                }
                moves.push(square);
            }
        }
        return moves;
    }

    protected getMovesFromOffsets(board: Board, offsets: Direction[]) {
        const currentSquare = board.findPiece(this);
        return offsets
            .map(([rowOffset, colOffset]) => Square.at(currentSquare.row + rowOffset, currentSquare.col + colOffset))
            .filter(square => Piece.isOnBoard(square));
    }

    private static isOnBoard(square: Square) {
        return square.row >= 0 && square.row < GameSettings.BOARD_SIZE
            && square.col >= 0 && square.col < GameSettings.BOARD_SIZE;
    }
}

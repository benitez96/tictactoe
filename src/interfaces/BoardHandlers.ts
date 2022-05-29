
export interface BoardHandlers {
  board: ('o' | 'x' | '')[];
  player: 'o' | 'x';
  score: Score;
  currentPlayer: 'o' | 'x',
  handleClick: (index: number) => void;
  reset: () => void,
}


export interface Score {
  x: number;
  o: number;
  ties: number;
}

import { useEffect, useState } from "react";
import { BoardHandlers, Score } from "../interfaces/BoardHandlers";

export interface Props {
  initialBoard: ('o' | 'x' |'')[];
  firstPlayer?: 'o' | 'x',
}

export const useBoard = ({initialBoard, firstPlayer}: Props): BoardHandlers => {

  const [board, setBoard] = useState(initialBoard)
  const [player, setPlayer] = useState<'o' | 'x'>( firstPlayer || 'o')
  const [score, setScore] = useState<Score>({x: 0, o: 0, ties: 0})

  const reset = () => {
    setBoard(initialBoard)
    setPlayer(firstPlayer || 'o')
    setScore({x: 0, o: 0, ties: 0})
  }

  const handleClick = (i: number) => {
    if (board[i]) return;

    setBoard(prev => {
      prev[i] = player
      return [...prev]
    })

    setPlayer(prev => prev === 'o' ? 'x' : 'o')

  }

  useEffect(() => {
    
    const combinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]

    for (const combo of combinations) {
      const [a, b, c] = combo
      if (board[a] !== '' && board[a] === board[b] && board[a] === board[c]){
          //@ts-ignore
          setScore( prev => ({ ...prev, [board[a]]: prev[board[a]] + 1 }))
          setTimeout(() => setBoard(initialBoard), 500)
          return
      }
    }

    if (board.filter(v => v !== '').length === 9) {
      setScore(prev => ({...prev, ties: prev.ties + 1}))
      setTimeout(() => setBoard(initialBoard), 500)
      return;
    }
    
  }, [board]);


  return {

    //props
    board,
    player,
    score,
    currentPlayer: player,

    // methods
    handleClick,
    reset,
  }
}

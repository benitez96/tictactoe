import { createContext } from "react";
import { useBoard } from "../hooks/useBoard";
import { BoardHandlers } from '../interfaces/BoardHandlers'

interface BoardProps {
  initialBoard?: ('o' | 'x' |'')[];
  firstPlayer?: 'o' | 'x',
  children: (x: BoardHandlers) => JSX.Element
}


export const GameContext = createContext<BoardHandlers>({} as BoardHandlers);
const { Provider } = GameContext;

export const Game = ({initialBoard = Array(9).fill(''), firstPlayer, children}: BoardProps) => {

  const board = useBoard({ initialBoard, firstPlayer });


  return (

    <Provider value={{...board}}>
      {
        children({...board})
      }
    </Provider>
  )
}

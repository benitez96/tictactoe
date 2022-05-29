import {
  BsRecordCircleFill
} from 'react-icons/bs';
import {
  ImCross
} from 'react-icons/im';


import { Board } from './components/Board'
import { Cell } from './components/Cell'
import { Footer } from './components/Footer';
import { Game } from './components/Game'
import { Header } from './components/Header';
import { ResetButton } from './components/ResetButton';
import { ScoreBoard } from './components/ScoreBoard'

function App() {

  return (
    <div className="flex flex-col justify-between h-screen dark:bg-zinc-900 duration-300">
      <Header />
      <div className='container mx-auto place-content-center grid'>
        <Game>
          {
            game => (
              <>
                <div className="mt-4 mb-4 grid place-content-center grid-cols-3 gap-4" >
                  <div className="flex items-center p-1 ml-2 text-xl">
                    <BsRecordCircleFill className="text-emerald-500" />
                    <ImCross className="text-purple-600" />
                  </div>
                  <div className='shadow-[inset_0_-2px_0] flex items-center justify-around p-1 pl-2 bg-zinc-400 rounded-md shadow-zinc-500'>
                    <div className='font-bold text-center text-zinc-900 align-center'>TURN</div>
                    <div className='p-1 text-sm font-bold text-center text-zinc-800'>{ game.currentPlayer == 'o' ? <BsRecordCircleFill /> : <ImCross /> }</div>
                  </div> 
                  <div className="mr-2 grid place-content-end">
                    <ResetButton onClick={game.reset} />
                  </div>
                </div>
                <Board >
                  {
                    game.board.map( (value, index) => <Cell key={index} index={index} value={value} onClick={game.handleClick} />)
                  }
                </Board>
                <div className="mt-4 grid place-content-center grid-cols-3 gap-4" >
                  <ScoreBoard text="x" score={game.score.x} color="purple" />
                  <ScoreBoard text="TIES" score={game.score.ties} color="zinc" />
                  <ScoreBoard text="o" score={game.score.o} color="emerald" />
                </div>
              </>
            )
          }
        </Game>
      </div>
      <Footer />
    </div>
  )
}

export default App

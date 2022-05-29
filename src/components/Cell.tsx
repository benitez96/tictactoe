import { useContext, useState, memo } from 'react';

import {
  BsRecordCircleFill,
  BsRecordCircle
} from 'react-icons/bs';
import {
  ImCross
} from 'react-icons/im';

import {GameContext} from './Game';

interface Props {
  value: string;
  index: number;
  onClick: (i: number) => void;
}

export const Cell = memo(({ value, index, onClick }: Props) => {

  const { currentPlayer } = useContext(GameContext)
  const [showMark, setShowMark] = useState(false);

  return (
    <div onMouseOut={() => setShowMark(false)} onMouseOver={() => setShowMark(!value.length)} onClick={() => { onClick(index); setShowMark(false); }} className={`grid place-content-center w-20 h-20 border-2 dark:border-zinc-400 border-gray-400 ${value ? 'shadow-[inset_0_-4px_0]' : 'shadow-[inset_0_-8px_0]'} dark:shadow-zinc-500 shadow-gray-500 rounded-md ease-out duration-200 dark:bg-zinc-800`}>
      <span className="text-2xl">{ value == 'o' ? <BsRecordCircleFill className="text-3xl text-emerald-500" /> : value == 'x' ? <ImCross className="text-purple-600" /> : '' }</span>
      <span className={`${!showMark ? 'hidden' : ''} text-2xl`}>{ currentPlayer == 'o' ? <BsRecordCircle className="text-3xl text-emerald-500" /> : currentPlayer == 'x' ? <ImCross className="text-transparent stroke-2 stroke-purple-600" /> : '' }</span> 
    </div> 
  )
})

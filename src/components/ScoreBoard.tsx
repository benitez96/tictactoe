import {
  BsRecordCircleFill
} from 'react-icons/bs';
import {
  ImCross
} from 'react-icons/im';

interface Props {
  text: string;
  score: number;
  color: color;
}
type color = 'emerald' | 'purple' | 'zinc' 
 
export const ScoreBoard = ({ text, score, color }: Props) => {

  const bgColors = {
    emerald: 'bg-emerald-500',
    purple: 'bg-purple-500',
    zinc: 'bg-zinc-400'
  }

  return (
    <div className={`${bgColors[color]} rounded-md grid place-content-center p-1`}>
      <div className='p-1 text-sm font-bold text-center text-zinc-800'>{ text == 'o' ? <BsRecordCircleFill /> : text == 'x' ? <ImCross /> : text }</div>
      <div className='font-bold text-center text-zinc-900 align-center'>{score}</div>
    </div> 
  )
}

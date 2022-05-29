import {
  BsRecordCircleFill
} from 'react-icons/bs';
import {
  ImCross
} from 'react-icons/im';

interface Props {
  value: string;
  index: number;
  onClick: (i: number) => void;
}

export const Cell = ({ value, index, onClick }: Props) => {

  return (
    <div onClick={() => onClick(index)} className={`grid place-content-center w-20 h-20 border-2 dark:border-zinc-400 border-gray-400 ${value ? 'shadow-[inset_0_-4px_0]' : 'shadow-[inset_0_-8px_0]'} dark:shadow-zinc-500 shadow-gray-500 rounded-md ease-out duration-200 dark:bg-zinc-800`}>
      <span className="text-2xl">{ value == 'o' ? <BsRecordCircleFill className="text-3xl text-emerald-500" /> : value == 'x' ? <ImCross className="text-purple-600" /> : '' }</span>
    </div> 
  )
}

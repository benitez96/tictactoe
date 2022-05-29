import { MdRefresh } from 'react-icons/md';

interface Props {
  onClick: () => void;
}

export const ResetButton = ({ onClick }: Props) => {

  return (
    <div onClick={ onClick } className='bg-zinc-300 w-fit border-2 border-gray-400 active:shadow-[inset_0_-1px_0] shadow-[inset_0_-3px_0] shadow-zinc-500 rounded-md ease-out duration-200 p-1 w-auto'>
      <span className="text-2xl text-zinc-700"><MdRefresh /></span>
    </div> 
  )
}

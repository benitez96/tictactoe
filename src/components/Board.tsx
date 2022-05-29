
interface BoardProps {
  children: JSX.Element | JSX.Element[];
}


export const Board = ({children}: BoardProps) => {

  return (

    <div className="grid place-content-center grid-cols-3 gap-4">
      { children }
    </div> 
  )
}

import { ReactNode, useState } from "react"

interface IProps{
   render:(value:number)=>ReactNode
}


const Input = ({render}: IProps) => {
    const [value, setValue] = useState<number>(10);
  return (  
    <div>
        <input type="number" placeholder="Temp in 'C" value={value} onChange={(e) => setValue(Number(e.target.value) || 0)}/>
        {render(value)}
    </div>
  )
}

export default Input
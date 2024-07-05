

interface IProps{
    value: number;
}

const Farengeit = ({value=0}: IProps) => {
  return (
    <div>
        {value * 1.8 + 32}F
    </div>
  )
}

export default Farengeit
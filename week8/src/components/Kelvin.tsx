interface IProps{
    value: number;
}

const Kelvin = ({value=0}: IProps) => {
  return (
    <div>
        {value + 273.15}K
    </div>
  )
}

export default Kelvin
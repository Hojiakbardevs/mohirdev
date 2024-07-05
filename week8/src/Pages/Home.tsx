import "./../index.css"


import Title from "./../components/Title";
import Input from "../components/Input";
import Kelvin from "../components/Kelvin";
import Farengeit from "../components/Farengeit";

const Home = () => {
  return (
    <div>
      <Title render={() => <h1>Converter</h1>} />
      <Input render={(value) => <><Kelvin value={value} /><Farengeit value={value} /></>} />

    </div>
  )
}

export default Home;
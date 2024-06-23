
import "./../index.css"
import { useLocation, useParams } from 'react-router-dom'

const Blog = () => {
    const slag = useParams()
    const location = useLocation()
    const newLocation = new URLSearchParams(location.search)
    const filter = newLocation.get("filter")
    const search = newLocation.get("search")
  return (
    <div>
        <h1>Bloglar bilan ishlash</h1>
        <h2>{slag.slag}</h2>
        <p> {slag.slag} ning barcha seriyalarini bir necha oy ichida 2k da remaster qilganim haqida
Bularning barchasi nimadan boshlandi? Bir kun kelib “Tom va Jerri”ning hamma asl toʻplamini uchinchi marta qayta tomosha qilishga qaror qildim. Ammo men yosh</p>
    
   <h1> query param : {filter}</h1>
    <h1> search param : {search}</h1>

    </div>

  )
}

export default Blog
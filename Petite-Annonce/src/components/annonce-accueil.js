import { useState } from "react"
import ListeAnnonce from "./annonce-liste"

export const AccueilAnnonce = (props) => {
    const [searchAnnonces] = useState([])
     return(
         <div>
             <ListeAnnonce annonces={searchAnnonces} ></ListeAnnonce>
         </div>
     )
}
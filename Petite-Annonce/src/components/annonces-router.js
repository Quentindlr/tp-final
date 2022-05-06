import { useState } from "react"
import { Route, Routes } from "react-router-dom"
import { AccueilAnnonce } from "./annonce-accueil"
import { AnnonceDetail } from "./annonce-detail"
import FormAnnonce from "./annonce-form"
import ListeFav from "./fav-liste"

export const AnnonceRouter = (props) => {
    const [searchFav] = useState([])
    return (
        <Routes>
            <Route path="/" element={<AccueilAnnonce/>}/>
            <Route path="/detail/:id" element={<AnnonceDetail/>}/>
            <Route path="/favoris" element={<ListeFav fav={searchFav} />}/>
            <Route path="/form" element={<FormAnnonce/>}/>
        </Routes>
        )
}
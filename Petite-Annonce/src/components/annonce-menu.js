import { Link } from "react-router-dom";

export const MenuAnnonce = (props) =>{
    return(
        <header>
            <nav>
                <Link to="/">Accueil</Link>
                <Link to='form'>Formulaire</Link>
                <Link to='favoris'>Favorie</Link>
            </nav>
        </header>
    )
}
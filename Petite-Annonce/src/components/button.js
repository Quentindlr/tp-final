import { isInFav,addToFav,removeFromFav } from "../service/annonce.service"

export const Button = (props) =>{
    const {id} = props

    const addToFavButton = (e) => {
        
        if(!isInFav(id)){
            
            addToFav(id)
        }else {
            removeFromFav(id)
        }
    }

    return(
        <div>
            <button onClick={addToFavButton}> {isInFav(id) ? 'Remove From Favorie' : 'Add To Favorie'} </button>
        </div>
    )
}
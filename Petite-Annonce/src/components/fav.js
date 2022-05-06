import { withRouter } from "../hoc/withRouter"

export const Fav = withRouter ((props) => {
    const {id,titre,contenu,url} = props.fav
    return(
        <div>      
               <div>
                    {id} <br/>
                    {titre} <br/>
                    {contenu} <br/>
                    {url} <br/>
                </div>
            
            
        </div>
    )
})
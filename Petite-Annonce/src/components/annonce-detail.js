import { withRouter } from "../hoc/withRouter";
import { Component } from "react"
import { Button } from "./button";
import { findAnnonceById } from "../service/annonce.service";

export const AnnonceDetail = withRouter((props) => {

    const id = props.params.id
    const annonce = findAnnonceById(id)
    return (
        <div>
            {annonce == undefined
                ?
                (<div>Pas d'annonce avec cet id</div>)
                :
                (
                    <div>
                        {annonce.id}<br />
                        {annonce.titre}<br />
                        {annonce.contenu}<br />
                        {annonce.url}<br />
                        <Button id={id}></Button>
                    </div>
                )
            }
        </div>
    )

}
)



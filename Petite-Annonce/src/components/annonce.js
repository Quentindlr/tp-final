import { Component } from "react"
import { Link } from "react-router-dom";
import { withRouter } from "../hoc/withRouter";

export const Annonce = withRouter((props) => {
    const { id, titre, contenu, url } = props.annonce
    return (
        <div>
            <div>
                {id}
            </div>
            <div>
                {titre}
            </div>
            <div>
                {contenu}
            </div>
            <div>
                {url}
            </div>
            <Link to={'/detail/' + id}>Detail</Link>
        </div>
    )
})
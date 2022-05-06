import { MenuAnnonce } from "./annonce-menu";
import { Component } from "react"
import { AnnonceRouter } from "./annonces-router";

class AppAnnonce extends Component {
    constructor(props) {
        super(props);
    }


    render() {

        return (
            <div>
                <MenuAnnonce></MenuAnnonce>
                <AnnonceRouter/>
            </div>
        );
    }
}

export default AppAnnonce;
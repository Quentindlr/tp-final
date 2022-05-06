import { Annonce } from "./annonce";
import {Component} from "react"
import { getAnnonces } from "../service/annonce.service";

// export const ListeAnnonce = (props) => {
//     return (
//         <div>
//             {props.annonces.map((a, i) => (<Annonce key={i} annonce={a}></Annonce>))}
//         </div>
//     );
// }

class ListeAnnonce extends Component {
    constructor(props) {
        super(props);
        this.state = {
            annonces: []
        }
    }

    componentDidMount() {
        this.fetchData()
    }

    fetchData = () => {
        getAnnonces().then((res) => {
            this.setState({ annonces:[...res.data]  });
        })
    }


    render() {
        const annonces = this.props.annonces.length > 0 ? this.props.annonces : this.state.annonces
        return (
            <div>
                {annonces.map((a, i) => (<Annonce key={i} annonce={a}></Annonce>))}
            </div>
        );
    }
}

export default ListeAnnonce;
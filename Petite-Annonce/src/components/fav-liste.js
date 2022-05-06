import {Component} from "react"
import { getFav } from "../service/annonce.service";
import { Fav } from "./fav";

class ListeFav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fav: []
        }
    }

    componentDidMount() {
        this.fetchData()
    }

    fetchData = () => {
        getFav().then((res) => {
            this.setState({ fav:[...res]  });
        })
    }


    render() {
        const fav = this.props.fav.length > 0 ? this.props.fav : this.state.fav
        return (
            <div>
                {fav.map((a, i) => (<Fav key={i} fav={a}></Fav>))}
            </div>
        );
    }
}

export default ListeFav;
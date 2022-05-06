import {Component} from "react"
import {addAnnonce} from "../service/annonce.service"

class FormAnnonce extends Component {
    constructor(props) {
        super(props);
        this.state = {
            annonce :{
                titre:undefined,
                contenu:undefined,
                url:undefined,
            }
        }
    }


    fieldsOnChange = (e) => {
        const tmpAnnonce = this.state.annonce
        tmpAnnonce[e.target.getAttribute("name")] = e.target.value
        this.setState({ annonce: {...tmpAnnonce}  });
    }

    confirm = (e) => {
        e.preventDefault()
        addAnnonce({...this.state.annonce})
    }
    // .then(res => {
    //     if(res.data.error == false) {
    //         this.props.navigate("/")
    //     }
    //     else {
    //         alert(this.data.message)
    //     }
    // })

    state = {  }
    render() { 
        return ( 
            <form onSubmit={this.confirm}>
                <div>
                    <input type="text" name="titre" onChange={this.fieldsOnChange} placeholder="titre de l'annonce"/>
                </div>
                <div>
                    <textarea name="contenu" onChange={this.fieldsOnChange} placeholder="contenu de l'annonce"></textarea>
                </div>
                <div>
                    <button type="submit">Valider</button>
                </div>
            </form>
         );
    }
}
 
export default FormAnnonce;
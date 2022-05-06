import  axios  from "axios"
const annonces = []
let fav = []
let count = 0
const searchAnnonce = []

// let id = 0

export const getAnnonces = ()  => {
    // r(annonces)
    return axios.get("http://localhost/annonces")
}

export const getFav = () => new Promise((r, rej) => {
    r(fav)
})

export const findAnnonceById = (id) => {

    return annonces.find(p => p.id == id)
}

export const isInFav = (id) => {
    return fav.find(p => p.id == id) != undefined
}
export const addToFav = (id) => {
    const annonce = annonces.find(p => p.id == id)
    if (annonce != undefined) {
        fav.push(annonce)
    }
}
export const removeFromFav = (id) => {
    const newFav = fav.filter(p => p.id != id)
    console.log(newFav);
    fav=newFav
}

export const addAnnonce = (annonce) => {
    // this.setState({ 
    //    annonces : [...this.state.annonces, createdAnnonce],
    //    count: newCount,
    //    searchAnnonce:[]  
    // });
    annonces.push({ id: ++count, ...annonce })
}

import { readFileSync, writeFileSync } from "fs"
import { Annonce } from "../classes/annonce.js"

export class AnnonceService {
    constructor() { 
        this.annonces = [] 
        this.count = 0
        this.ficher = "datas/annonce.json"
    }
    read(){
        const contenu = readFileSync(this.ficher).toString()
        this.annonces = JSON.parse(contenu)
        this.count = (this.annonces[this.annonces.length -1 ] != undefined) ? this.annonces[this.annonces.length - 1].id : 0
    }

    write(){
        writeFileSync(this.ficher,JSON.stringify(this.annonces))
    }

    createAnnonce(titre,contenu,url){
        const annonce = new Annonce(++this.count,titre,contenu,url)
        this.annonces.push(annonce)
        this.write()
    }
    
    findAnnonceById(id){
        return this.annonces.find(a => a.id == id)
    }
    

}

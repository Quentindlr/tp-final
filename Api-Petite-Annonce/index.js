import  express  from "express";
import { AnnonceService } from "./services/annonceService.js";
import cors from "cors"

const dataService = new AnnonceService()

const api = express()

api.use(express.json())

api.use(cors({origin:"*"}))

api.post("/annonces",(req,res) => {
    const {titre,contenu,url} = req.body
    if(titre != undefined && contenu != undefined && url != undefined){
        dataService.createAnnonce(titre,contenu,url)
        res.json({message:"annonce ajouter",error:false})
    }else{
        res.json({message:"erreur ajout"})
    }
})

api.get("/annonces",(req,res)=>{
    res.json(dataService.annonces)
})

api.get("/annonces/:id",(req,res)=>{
    const annonce = dataService.findAnnonceById(req.params.id)
    if(annonce != undefined){
        res.json(annonce)
    }else{
        res.json({message:"aucue annonce avec cette id"})
    }
})

api.listen(80,()=>{
    dataService.read()
})
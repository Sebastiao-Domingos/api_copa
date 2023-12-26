import SelecaoRepository from "../repositories/SelecaoRepository.js";

class SelecaoController{
    
    async index ( req ,res){
        const result = await SelecaoRepository.findAll()
        res.json(result)
    }
    async show (req , res ){
        const id = Number(req.params.id);
        const result = await SelecaoRepository.findById(id);  
        res.json(result[0])  
    }
    async showByGroup ( req ,res ){
        const grupo = req.params.grupo[0].toUpperCase();
        
        const result = await SelecaoRepository.findByGroup(grupo);
       
        return res.json(result);
    }
    store (req ,res){
        const selecao = req.body;
        
        SelecaoRepository.create(selecao).then( response =>{
            res.status(200).json(response);
        })
        .catch( error => {
            res.status(404).json(error);
        })
    }
    async update ( req ,res ) {
        const id = req.params.id;
        if(!isNaN(id)){
            const result = await SelecaoRepository.update(req);
            res.status(200).json(result)
        }else {
            res.status(404).send("Id invalido")
        }
    }
    async delete( req,res){
        const id = req.params.id;
    
        if(!isNaN(id)){
           SelecaoRepository.delete(id).then( resa => {
            res.status(200).json(resa)
           } )
           .catch( error => {
            res.status(402).json(error)
           })

        }else {
            res.status(404).send("ID invalido!")
        }
    }
}


export default new SelecaoController();
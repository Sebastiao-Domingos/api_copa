import JogadorRepository from "../repositories/JogadorRepository.js";


class JogadorController{
    async index ( require , response){
         JogadorRepository.findAll()
        .then( res => response.status(200).json(res))
        .catch( error => response.status(404).json(error));
       
    }
    store(require , response){
        const data = require.body;

        JogadorRepository.create(data)
        .then( res => {
            response.status(200).json(res)
        })
        .catch( error => response.status(404).json(error))
    }
    show( require ,response){
        JogadorRepository.findById(require.params.id)
        .then( res => response.status(200).json(res[0]) )
        .catch( error => response.status(404).json(error));
    }
    showBySelecao(require , response){
        JogadorRepository.findBySelecao(require.params.id)
        .then( res =>  response.status(200).json(res))
        .catch( error => response.status(404).json(error));
    }
    update( require , response){
        JogadorRepository.update(require)
        .then( res => response.status(200).json(res))
        .catch(error => response.status(404).json(error))
    }
    delete(require , response){
        JogadorRepository.delete(require.params.id)
        .then( res => response.status(200).json(res))
        .catch( error => response.status(404).json(error))
    }

}

export  default new JogadorController();
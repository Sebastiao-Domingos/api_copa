import conecte, { consult } from "../database/conection.js";

class JogadorRepository{
    create (data){
        const sql = "INSERT INTO jogador SET?";
        return consult(sql,data);
    }
    findAll(){
        const sql = "SELECT *FROM jogador;";
        return consult(sql)
    }
    findById(id){
        const sql = "SELECT *FROM jogador WHERE id=?"
        return consult(sql,id);
    }
    findBySelecao(selecao){
        const sql = "SELECT *FROM jogador WHERE id_selecao=?";
        return consult(sql , selecao);
    }
    update( require){
        const {params, body} = require;
        const sql = "UPDATE jogador SET ? WHERE id=?"
        return consult(sql,[body , params.id]);
    }
    delete(id){
        const sql = "DELETE FROM jogador WHERE id=?";
        return consult(sql,id);
    }
}

export default new JogadorRepository();
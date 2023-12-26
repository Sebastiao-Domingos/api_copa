import conecte, { consult } from "../database/conection.js";

class SelecaoRepository{

    create(body){
        const sql = "INSERT INTO selecao SET ?";
        return consult(sql, body);
    }
    findAll(){
        const sql = "SELECT * FROM selecao;"
        return consult(sql)
    }
    findById(id){
        const sql = `SELECT *FROM selecao where id=?;`
        return consult(sql,id);
    }

    findByGroup(grupo){
        const sql = "SELECT * FROM selecao WHERE grupo=?";
        return consult(sql , grupo);
    }
    update(req){
        const id = req.params.id;
        const body = req.body;
        const sql = "UPDATE selecao SET ? WHERE id=?"
        return consult(sql ,[ body , id]);
    }
    delete(id){
        const sql = "DELETE FROM selecao WHERE id=?"
        return consult(sql , id);
    }
}

export default new SelecaoRepository();
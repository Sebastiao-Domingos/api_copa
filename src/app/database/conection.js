import mysql from "mysql";

const conecte = mysql.createConnection({
    host : "localhost",
    port : 3306,
    user : "root",
    password : "",
    database : 'copa'
})

conecte.connect();



const consult = (sql , values="") => {
   
    return new Promise( (resolve ,reject )=> {
        conecte.query(sql,values, (error , response)=> {
            if(!error)return resolve(response);
            return reject(error)
        })
    })
    
    // if(!id){
    //     return new Promise( (resolve ,reject )=> {
    //         conecte.query(sql,values, (error , response)=> {
    //             if(!error) return resolve(response);
    //             return reject(error)
    //         })
    //     })
    // }
    // if(id){
    //     return new Promise( (resolve ,reject )=> {
    //         conecte.query(sql,[values,id] ,(error , response)=> {
    //             if(!error)return resolve(response);
    //             return reject(error)
    //         })
    //     })
    // }

}
export {consult}
export default conecte;
import { Router } from "express";
import controller from "./app/controllers/SelecaoController.js"
import JogadorController from "./app/controllers/JogadorController.js";

const routes = Router();
//rotas 
routes.get("/selecoes" ,controller.index)
routes.get("/selecoes/:id",controller.show)
routes.get("/selecoes/grupo/:grupo" ,controller.showByGroup)
routes.post("/selecoes" ,controller.store)
routes.put("/selecoes/:id" ,controller.update)
routes.delete("/selecoes/:id", controller.delete)

//roatas dos jogadores
routes.get("/jogadores" , JogadorController.index);
routes.get("/jogadores/:id", JogadorController.show)
routes.get("/jogadores_selecao/:id", JogadorController.showBySelecao)
routes.put("/jogadores/:id" , JogadorController.update);
routes.post("/jogadores" , JogadorController.store);
routes.delete("/jogadores/:id" , JogadorController.delete);

export default routes;
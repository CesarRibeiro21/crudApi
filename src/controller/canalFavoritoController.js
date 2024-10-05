import { Router } from "express";
import consultaFavoritoService from "../service/tb_canal_programaFa/FavoritoConsultaService.js";
import { alterarCanalFavorito, inserirCanalFavorito, removerCanalFavorito } from "../repository/tb_programa_favorito/canalFavoritoRepository.js";

const endpoints= Router();


endpoints.get('/favoritos', async (req,resp) =>{
    try {
        let registros = await consultaFavoritoService();
        resp.send(registros);
    } 
    catch (err) {
        resp.status(400).send({
            erro:err.message
        })
    }  
});

endpoints.post('/favoritos', async (req,resp) =>{
    try {
        let favorito = req.body;
        let id = await inserirCanalFavorito(favorito)
    
        resp.send({
            novoId:id
        })
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })    
    }
})

endpoints.put('/favoritos/:id', async (req,resp) =>{
    try {
        let id = req.params.id;
        let favorito = req.body;

        let linhasAfetadas = await alterarCanalFavorito(id,favorito)
        if (linhasAfetadas >= 1){
            resp.send();
        }

        else{
            resp.status(404).send({ erro: 'Nenhum canal encontrado' })
        }

    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }

})

endpoints.delete('/favorito/:id', async (req,resp) =>{
    try {
      let id = req.params.id;
      
      let linhasAfetadas = await removerCanalFavorito(id);
      if(linhasAfetadas >= 1){
        resp.send();
      }

      else{
        resp.status(404).send({erro: 'Esse canal não existe'})
      }

    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})
;



export default endpoints;
import canalConsultaService from '../service/tb_canal/canalConsultaService.js';
import { inserirCanalService } from '../service/tb_canal/canalInserirService.js';
import { alterarCanalService } from '../service/tb_canal/alterarCanalService.js';
import { Router } from 'express';
import { removerCanalService } from '../service/tb_canal/deletarCanalService.js';

const endpoints = Router();

endpoints.get('/canal', async (req,resp) =>{
    try {
        let registros = await canalConsultaService();
        resp.send(registros);
    } 
    catch (err) {
        resp.status(400).send({
            erro:err.message
        })
    }
})

endpoints.post('/canal', async (req,resp) =>{
    try {
        let canal = req.body
        let id = await inserirCanalService(canal);
        
        resp.status(200).send({
            novId: id
        })
    } 
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

endpoints.put('/canal/:id', async (req,resp) =>{
    try {
        let id = req.params.id;
        let canal = req.body;

        let linhasAfetadas = await alterarCanalService(id,canal)
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

endpoints.delete('/canal/:id', async (req,resp) =>{
    try {
      let id = req.params.id;
      
      let linhasAfetadas = await removerCanalService(id);
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
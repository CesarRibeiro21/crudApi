import canalController from './controller/canalController.js';
import canalFavoritoController from './controller/canalFavoritoController.js'

export default function adicionarRotas(servidor){
    servidor.use(canalController);
    servidor.use(canalFavoritoController);
}
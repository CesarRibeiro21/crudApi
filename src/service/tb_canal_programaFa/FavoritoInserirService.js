import { inserirCanalFavorito } from "../../repository/tb_programa_favorito/canalFavoritoRepository.js";

export async function inserirfavoritoService(canal){
    let  id = await inserirCanalFavorito(canal);
    return id
}
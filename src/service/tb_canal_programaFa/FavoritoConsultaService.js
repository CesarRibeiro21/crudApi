import { consultaCanalFavorito } from "../../repository/tb_programa_favorito/canalFavoritoRepository.js";

export default async function consultaFavoritoService(){
    let  registros = await consultaCanalFavorito();
    return registros
}
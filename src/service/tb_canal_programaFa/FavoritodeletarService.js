import { removerCanalFavorito } from "../../repository/tb_programa_favorito/canalFavoritoRepository.js";

export async function removerCanalService(id){
    let linhasAfetadas = await removerCanalFavorito(id)

    return linhasAfetadas
}
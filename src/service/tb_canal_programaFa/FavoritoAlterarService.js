import { alterarCanalFavorito } from "../../repository/tb_programa_favorito/canalFavoritoRepository";


export async function alterarFavoritoService(id,canal){
    let linhasAfetadas = await alterarCanalFavorito(id, canal);

    return linhasAfetadas
}
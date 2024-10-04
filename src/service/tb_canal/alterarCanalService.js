import {alterarCanal} from "../../repository/tb_canal/canalRepository.js";

export async function alterarCanalService(id,canal){
    let linhasAfetadas = await alterarCanal(id, canal);

    return linhasAfetadas
}
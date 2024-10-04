import { removerCanal } from "../../repository/tb_canal/canalRepository.js";

export async function removerCanalService(id){
    let linhasAfetadas = await removerCanal(id)

    return linhasAfetadas
}
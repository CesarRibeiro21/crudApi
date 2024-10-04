import { inserirCanal } from "../../repository/tb_canal/canalRepository.js";

export async function inserirCanalService(canal){
    let  id = await inserirCanal(canal);
    return id
}
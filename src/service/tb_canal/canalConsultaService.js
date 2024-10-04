import { consultaCanal } from "../../repository/tb_canal/canalRepository.js";

export default async function consultaService(){
    let  registros = await consultaCanal();
    return registros
}
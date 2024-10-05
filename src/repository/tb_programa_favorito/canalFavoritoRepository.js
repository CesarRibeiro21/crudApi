import con from "../conection.js";

export async function inserirCanalFavorito(canalFavorito){
    const comando = `
    insert into tb_programa_favorito (id_usuario,id_canal_programa,vl_avaliacao)
    values (?,?,?);
    `
    ;
    let resposta = await con.query(comando,[canalFavorito.usuario,canalFavorito.canal,canalFavorito.avaliacao]);
    let info = resposta[0];

    return info.insertId;
}

export async function consultaCanalFavorito(){
    const comando = `
    select id_programa_favorito       id,
    id_usuario                        usuario,
    id_canal_programa                 programa,
    vl_avaliacao                      avaliacao
    from tb_programa_favorito ;
    `;

    let resposta = await con.query(comando);
    let registros = resposta[0];

    return registros;
}

export async function alterarCanalFavorito(id,canal){
    let comando = `
        update tb_programa_favorito
        set id_usuario = ?,
        id_canal_programa = ?,
        vl_avaliacao = ?
        where id_canal = ?
    `
    let resposta = await con.query(comando,[canal.nome,canal.numero,canal.aberto,id]);

    let info = resposta[0];

    return info.affectedRows;
}

export async function removerCanalFavorito(id){
    const comando = `
        delete from tb_programa_favorito
        where id_programa_favorito = ?
    `
    let resposta = await con.query(comando, [id]);
    let info = resposta[0];

    return info.affectedRows
}
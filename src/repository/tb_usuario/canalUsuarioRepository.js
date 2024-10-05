import con from "../conection.js";

export async function inserirCanalUsuario(canalUsuario) {
    const comando = `
    insert into tb_usuario(id_usuario, nm_usuario)
        values(?,?);
    `
        ;
    let resposta = await con.query(comando, [canalUsuario.usuario, canalUsuario.canal, canalUsuario.avaliacao]);
    let info = resposta[0];

    return info.insertId;
}

export async function consultaCanalUsuario() {
    const comando = `
    select   id_usuario    id,
    nm_usuario             nome        
    from tb_usuario;
    `;

    let resposta = await con.query(comando);
    let registros = resposta[0];

    return registros;
}

export async function alterarCanalUsuario(id, usuario) {
    let comando = `
        update tb_usuario
        set nm_usuario = ?
        where id_usuario = ?
    `
    let resposta = await con.query(comando, [usuario.nome, id]);

    let info = resposta[0];

    return info.affectedRows;
}

export async function removerCanalUsuario(id) {
    const comando = `
        delete from tb_usuario
        where id_usuario  = ?
    `
    let resposta = await con.query(comando, [id]);
    let info = resposta[0];

    return info.affectedRows
}
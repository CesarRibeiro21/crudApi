import con from "../conection.js";

export async function inserirCanalPrograma(canalPrograma){
    const comando = `
    insert into tb_canal_programa(id_canal,nm_programa,ds_genero,hr_programa)
    values(?,?,?,?);
    `
    ;
    let resposta = await con.query(comando,[canalPrograma.id,canalPrograma.nome,canalPrograma.genero,canalPrograma.tempo]);
    let info = resposta[0];

    return info.insertId;
}

export async function consultaCanalPrograma(){
    const comando = `
    select tb_canal_programa     id,
    id_canal            nome,
    nm_programa         numero,
    ds_genero           aberto,
    hr_programa         tempo
    from tb_canal;
    `;

    let resposta = await con.query(comando);
    let registros = resposta[0];

    return registros;
}

export async function alterarCanalPrograma(id,canal){
    let comando = `
        update tb_canal
        set id_canal = ?,
        nm_programa = ?,
        ds_genero = ?,
        hr_programa = ?
        where id_canal = ?;
    `
    let resposta = await con.query(comando,[canalPrograma.id,canalPrograma.nome,canalPrograma.genero,canalPrograma.tempo,id]);

    let info = resposta[0];

    return info.affectedRows;
}

export async function removerCanalPrograma(id){
    const comando = `
        delete from tb_canal_prograna
        where id_canal = ?
    `
    let resposta = await con.query(comando, [id]);
    let info = resposta[0];

    return info.affectedRows
}

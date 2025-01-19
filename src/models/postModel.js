import { query } from "../database/database.js";

export const createPostModel = async (titulo, subtitulo, conteudo, idProfessor, idDisciplina, idSubdisciplina) => {
    const sql = 'INSERT INTO postagem (titulo, subtitulo, conteudo, id_professor, id_disciplina, id_subdisciplina) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *;';

    const result = await query(sql, [titulo, subtitulo, conteudo, idProfessor, idDisciplina, idSubdisciplina]);
    return result;
};

export const searchPostModel = async (search) => {
    const sql = `SELECT * 
    FROM postagem
    WHERE 
        titulo ILIKE '%' || $1 || '%' OR
        subtitulo ILIKE '%' || $1 || '%' OR
        conteudo ILIKE '%' || $1 || '%';
    `;
    try {
        const result = await query(sql, [search]);
        console.log('result', result);
        return result;
    } catch (err) {
        console.error(`Erro ao buscar postagens: ${err.message}`);
        throw err;
    }

}

export const searchPostByIdModel = async (id) => {
    const sql = `SELECT * 
    FROM postagem
    WHERE 
        id_postagem = $1;
    `;
    try {
        const result = await query(sql, [id]);
        console.log('result', result);
        return result;
    } catch (err) {
        console.error(`Erro ao buscar postagens por id: ${err.message}`);
        throw err;
    }

}

export const updatePostByIdModel = async (id, titulo, subtitulo, conteudo) => {
    const sql = `update postagem
                    set titulo = $2
                      , subtitulo = $3
                      , conteudo = $4
                  WHERE 
                     id_postagem = $1
                  RETURNING *;
    `;
    try {
        const result = await query(sql, [id, titulo, subtitulo, conteudo]);
        console.log('result', result);
        return result;
    } catch (err) {
        console.error(`Erro ao atualizar postagens por id: ${err.message}`);
        throw err;
    }

}

export const deletePostByIdModel = async (id) => {
    const sql = `delete from postagem
                  WHERE 
                     id_postagem = $1
                  RETURNING *;
    `;
    try {
        const result = await query(sql, [id]);
        console.log('result', result);
        return result;
    } catch (err) {
        console.error(`Erro ao deletar postagens por id: ${err.message}`);
        throw err;
    }

};



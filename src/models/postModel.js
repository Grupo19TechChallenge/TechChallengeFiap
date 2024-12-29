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

};



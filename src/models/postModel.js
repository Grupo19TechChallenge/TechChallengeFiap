import { query } from "../database/database.js";

const createPostModel = async (titulo, subtitulo, conteudo, idProfessor, idDisciplina, idSubdisciplina) => {
    const sql = 'INSERT INTO postagem (titulo, subtitulo, conteudo, id_professor, id_disciplina, id_subdisciplina) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *;';

    const result = query(sql, [titulo, subtitulo, conteudo, idProfessor, idDisciplina, idSubdisciplina]);
    return result;
};

export default createPostModel;


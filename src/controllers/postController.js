import createPostModel from "../models/postModel.js";

const createPostController = async (req, res, next) => {
    try {
        const { titulo, subtitulo, conteudo, idProfessor, idDisciplina, idSubdisciplina} = req.body;
        const newPost = await createPostModel(titulo, subtitulo, conteudo, idProfessor, idDisciplina, idSubdisciplina);
        return res.status(201).json({ id: newPost });
    } catch (err) {
        res.status(422).json({ message: `erro: ${err.message}`});
    }
};

export default { createPostController };
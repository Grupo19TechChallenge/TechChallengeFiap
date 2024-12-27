import { createPostModel, searchPostModel } from "../models/postModel.js";

const createPostController = async (req, res, next) => {
    try {
        const { titulo, subtitulo, conteudo, idProfessor, idDisciplina, idSubdisciplina} = req.body;
        const newPost = await createPostModel(titulo, subtitulo, conteudo, idProfessor, idDisciplina, idSubdisciplina);
        return res.status(201).json({ newPost });
    } catch (err) {
        res.status(422).json({ message: `erro: ${err.message}`});
    }
};

const searchPostController = async (req, res, next) => {
    try {
        const { term } = req.query;

        if (!term ) return res.status(400).json({ message: '"term" is required' });
        
        const post = await searchPostModel(term);

        return res.status(200).json({ post })
    } catch (err) {
        res.status(422).json({ message: `erro: ${err.message}`});
    }
}

export default { createPostController, searchPostController };
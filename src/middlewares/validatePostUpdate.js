const validatePostUpdate = (req, res, next) => {
    
    const id = req.params.id;;
    
    const { 
        titulo,
        subtitulo,
        conteudo } = req.body;

    if (isNaN(id)) return res.status(400).json(
        { message: '"id" informado é inválido.' }
    );
    if (!titulo || titulo.length < 5) return res.status(400).json(
        { message: '"titulo" é obrigatório e precisa ser maior que 5 caracteres.' }
    );
    if (!subtitulo || subtitulo.length < 5) return res.status(400).json(
        { message: '"subtitulo" é obrigatório e precisa ser maior que 5 caracteres.' }
    );
    if (!conteudo || conteudo.length < 2) return res.status(400).json(
        { message: '"conteudo" é obrigatório e precisa ser maior que 20 caracteres.' }
    );

    return next();
};

export default validatePostUpdate;
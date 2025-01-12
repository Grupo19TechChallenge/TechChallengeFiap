const request = require('supertest');
const express = require('express');
const app = express();
import postRoute from '../src/routes/post.router';
const { createPostModel, searchPostModel } = require('../src/models/postModel'); 


// Mock da função createPostModel
jest.mock('../src/models/postModel', () => ({
    createPostModel: jest.fn(),
    searchPostModel: jest.fn()
}));


app.use(express.json());  // Para poder parsear JSON no corpo das requisições
app.use('/post', postRoute); // Use o router com a rota POST para criar post

beforeEach(() => {
    jest.clearAllMocks();
});

describe('POST /post', () => {
    
    // Teste de sucesso
    it('Deve criar um novo post e retornar status 201', async () => {
        // Arrange: Mock do modelo para simular a criação do post
    const mockNewPost = {
        id_postagem: 10,
        titulo: "Post título",
        subtitulo: "Subtítulo",
        conteudo: "Conteúdo",
        id_professor: 1,
        id_disciplina: 1,
        id_subdisciplina: 1,
    };
    

    const mockNewPostFailed = {
        id_postagem: 10,
        titulo: "Post título",
        subtitulo: "Subtítulo",
        conteudo: "Conteúdo",
        id_professor: 1,
        id_disciplina: 1,
        // id_subdisciplina: 1,
    };

        const postData = {
            "titulo": "Post título",
            "subtitulo": "Subtítulo",
            "conteudo": "Conteúdo",
            "idProfessor": 1,
            "idDisciplina": 1,
            "idSubdisciplina": 1,
        };

        createPostModel.mockResolvedValue(mockNewPost);
   
        // Act: Faça a requisição POST
        const response = await 
            request(app)
                .post('/post')
                .send(postData);

        expect(createPostModel).toHaveBeenCalledTimes(1);
        expect(createPostModel).toHaveBeenCalledWith(
            postData.titulo,
            postData.subtitulo,
            postData.conteudo,
            postData.idProfessor,
            postData.idDisciplina,
            postData.idSubdisciplina
        );

        // Assert: Verifique se a resposta foi correta
        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty('newPost');
        expect(response.body.newPost).toEqual(mockNewPost);
        expect(response.body.newPost).not.toEqual(mockNewPostFailed);
    
    });

    // Teste de falha
    it('Deve retornar status 422 em caso de erro na criação do post no banco de dados', async () => {
        // Arrange: Simule um erro no modelo
        createPostModel.mockRejectedValue(new Error('"message": "erro: relation \"postagemd\" does not exist"'));

        const postData = {
            titulo: 'Post título',
            subtitulo: 'Subtítulo',
            conteudo: 'Conteúdo',
            idProfessor: 1,
            idDisciplina: 2,
            idSubdisciplina: 3,
        };

        // Act: Faça a requisição POST
        const response = await request(app)
            .post('/post')
            .send(postData);

        // Assert: Verifique se a resposta foi de erro
        expect(response.status).toBe(422);
        expect(response.body).toHaveProperty('message');
        // expect(response.body.message).toContain('message');
    });

    // Teste de falha
    it('Deve retornar 400 em  caso de faltar algum parâmetro obrigatório no corpo da requisição', async () => {
        createPostModel.mockRejectedValue(new Error('Faltando parâmetro obrigatório'));
        
        const postData = {
            subtitulo: 'Subtítulo',
            conteudo: 'Conteúdo',
            idProfessor: 1,
            idDisciplina: 2,
            idSubdisciplina: 3,
        };

        const response = await request(app)
            .post('/post')
            .send(postData);

        expect(response.status).toBe(400);
        expect(response.body).toHaveProperty('message');
        expect(response.body.message).toContain('é obrigatório')

    })
});

describe('GET /post/search', () => {
    it('Deve retornar a lista de postagens cadastradas e o status 200', async () => {
        const mockPostList = {
            "post": [
                {
                    "id_postagem": 1,
                    "titulo": "Nova Postagem1",
                    "subtitulo": "Subtítulo",
                    "conteudo": "Conteúdo",
                    "id_professor": 1,
                    "id_disciplina": 1,
                    "id_subdisciplina": 1
                }, {
                    "id_postagem": 2,
                    "titulo": "Nova Postagem2",
                    "subtitulo": "Subtítulo",
                    "conteudo": "Conteúdo",
                    "id_professor": 1,
                    "id_disciplina": 1,
                    "id_subdisciplina": 1
                }
            ]
        };

        const mockPostListFailed = {
            "post": [
                {
                    // "id_postagem": 1,
                    "titulo": "Nova Postagem1",
                    "subtitulo": "Subtítulo",
                    "conteudo": "Conteúdo",
                    "id_professor": 1,
                    "id_disciplina": 1,
                    "id_subdisciplina": 1
                }, {
                    "id_postagem": 2,
                    "titulo": "Nova Postagem2",
                    "subtitulo": "Subtítulo",
                    "conteudo": "Conteúdo",
                    "id_professor": 1,
                    "id_disciplina": 1,
                    "id_subdisciplina": 1
                }
            ]
        };


        searchPostModel.mockResolvedValue(mockPostList);

        const response = await request(app).get('/post/search?term=Nova');
            
        expect(response.status).toBe(200);
        expect(response.body.post).toEqual(mockPostList);
        expect(response.body.post).not.toEqual(mockPostListFailed);

    })

    it('Deve retornar a propriedade "post" e o status 200, porém com um array vazio', async () => {
        searchPostModel.mockResolvedValue([]);

        const responseEmpty = await request(app).get('/post/search?term=aaa');

        const mockPostList = {
            "post": [
                {
                    "id_postagem": 1,
                    "titulo": "Nova Postagem1",
                    "subtitulo": "Subtítulo",
                    "conteudo": "Conteúdo",
                    "id_professor": 1,
                    "id_disciplina": 1,
                    "id_subdisciplina": 1
                }, {
                    "id_postagem": 2,
                    "titulo": "Nova Postagem2",
                    "subtitulo": "Subtítulo",
                    "conteudo": "Conteúdo",
                    "id_professor": 1,
                    "id_disciplina": 1,
                    "id_subdisciplina": 1
                }
            ]
        };

        expect(responseEmpty.status).toBe(200);
        expect(responseEmpty.body).toHaveProperty('post');
        expect(responseEmpty.body.post).toEqual([]);
        expect(responseEmpty.body.post).not.toEqual(mockPostList);  
    })
})
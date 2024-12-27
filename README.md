# Tech Challenge

Projeto desenvolvido para avaliação do curso de pós graduação de Desenvolvimento Full Stack - [FIAP](https://postech.fiap.com.br/). 

## Sobre o projeto

<div align="justify">
O Blogs API é uma aplicação para a produção de conteúdo para um blog onde é possível adicionar, listar e buscar  usuários, categorias e posts pelo ID. O usuário logado poderá alterar e deletar seus posts, além de deletar também a sua conta.
</div>

## Desenvolvimento 

<div align="justify">
Foi desenvolvida uma API REST e um banco de dados onde é possível realizar o CRUD (criar, ler, atualizar e deletar) das informações. A aplicação foi desenvolvida em Node.js com Express, possui middlewares que utilizam a biblioteca Joi para validação das requisições e utiliza a arquitetura MSC (Model-Service-Controller). Foi utilizado ORM Sequelize para mapeamento ao banco de dados MySQL e Json Web Token (JWT) para realizar a geração e verificação de tokens, realizando a gestão das permissões do usuário. 
</div>

## Tecnologias

* Javascript
* Node.js
* Express
* Postgress
* Docker

## Dependências obrigatórias

Este projeto requer o **Docker** para ser executado.

### Instalando o Docker

...


## Como iniciar o projeto com Docker


1 - Navegue até a pasta desejada e rode o comando abaixo no terminal para clonar o projeto:

`git clone git@github.com:Grupo19TechChallenge/TechChallengeFiap.git`

2 - Entre na pasta:

`cd TechChallengeFiap`

5 - Instale as dependências do projeto:

`npm install`

3 - Rode o seguinte comando:

`docker-compose up -d --build`

4 - Inicie o servidor node:

`npm run dev`

Abra o seu client de backend (thunderClient, Insomnia, Postman) e teste a seguinte rota:

GET http://localhost:3000/api/users

Se você receber 3 usuários, seu container está acessando o banco no Docker e tudo roda bem.


## Começando a desenvolver

Após subir o seu container e estiver rodando tudo corretamente, você verá no terminal a mensagem "Server is running on http://localhost:3000". Neste momento abra um novo terminal.

1 - Certifique-se que você está no diretório onde o projeto foi iniciado e rode:

`git branch`

Você verá os nomes das branchs já criadas no projeto. A branch que você está atualmente estará sinalizada com um '*' à frente.

Aperte a tecla 'Q' para voltar para o terminal.

2 - Rode os seguintes comandos:
`git checkout develop`;
`git pull origin develop`;

3 - Rode o comando de criação de uma nova branch para você trabalhar:

`git checkout -b nome-da-sua-branch`

Agora você pode iniciar seu trabalho.

# Favor não desenvolver em outra branch que não tenha sido criada por você. Isso inclui a branch Main.

4 - Quando você finalizar o desenvolvimento da sua primeira task e se certificar de que o endpoint está funcionando corretamente através da utilização de um client como Insomnia, Postman ou ThunderClient (recomendo pessoalmente o ThunderClient, pois se trata de uma extensão do VS Code muito fácil de configurar), rode:

`git add .` - para adicionar todas as suas alterações no stage;</br>
`git commit -m 'mensagem explicando o que você fez nesse commit'`;</br>
`git push origin nome-da-sua-branch`;

5 - Vá até o github através do link mostrado no terminal após rodar o ultimo comando e abra um pull request apontando a base para main e o compare para o nome da sua branch.

## Arquitetura do projeto

Este projeto utiliza a arquitetura Model-View-Controller (MVC), separando responsabilidades entre lógica de negócio, dados e apresentação.

O diretório /src é o principal que contém o código fonte do projeto. O arquivo server.js inicia o servidor node e chama as rotas existentes armazenadas no diretório 'routes', que por sua vez chama os 'controllers' que é o responsável pela consulta ao banco de dados, cujas queries estão armazenadas nas 'models'.

Além disso, o projeto conta com 'middlewares' que são os responsáveis pela validação da lógica de negócio.

## Endpoints

users: GET http://localhost:3000/api/users

criação de post: POST http://localhost:3000/api/post

    body: {
    "titulo": "Nova Postagem2",
    "subtitulo": "Conteúdo de prova",
    "conteudo": "Lorem ipsum...", 
    "idProfessor": "1",
    "idDisciplina": "1",
    "idSubdisciplina": "1"
    }


## Comandos úteis

docker-compose down
docker-compose up -d --build
npm run dev
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


## Como rodar o projeto com Docker


1 - Navegue até a pasta desejada e rode o comando abaixo no terminal para clonar o projeto:

`git clone git@github.com:Grupo19TechChallenge/TechChallengeFiap.git`

2 - Entre na pasta:

`cd TechChallengeFiap`

5 - Instale as dependências do projeto:

`npm install`

3 - Rode o serviço seguinte comando:

`docker-compose up -d --build`

## Começando a desenvolver

Após subir o seu container e estiver rodando tudo corretamente, você verá no terminal a mensagem "Server is running on http://localhost:3000". Neste momento abra um novo terminal.

1 - Certifique-se que você está no diretório onde o projeto foi iniciado e rode:

`git branch`

Você verá os nomes das branchs já criadas no projeto. A branch que você está atualmente estará sinalizada com um '*' à frente.

Aperte a tecla 'Q' para voltar para o terminal.

2 - Rode o comando de criação de uma nova branch para você trabalhar:

`git checkout -b nome-da-sua-branch`

Agora você pode iniciar seu trabalho.

# Favor não desenvolver em outra branch que não tenha sido criada por você. Isso inclui a branch Main.

3 - Quando você finalizar o desenvolvimento da sua primeira task e se certificar de que o endpoint está funcionando corretamente através da utilização de um client como Insomnia, Postman ou ThunderClient (recomendo este pessoalmente, pois se trata de uma extensão do VS Code muito fácil de configurar), rode:

`git add .` - para adicionar todas as suas alterações no stage;
`git commit -m 'mensagem explicando o que você fez nesse commit'`;
`git push origin nome-da-sua-branch`;

4 - Vá até o github através do link mostrado no terminal após rodar o ultimo comando e abra um pull request apontando a base para main e o compare para o nome da sua branch.


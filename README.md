Tech Challenge
Projeto desenvolvido para avaliação do curso de pós graduação de Desenvolvimento Full Stack - FIAP.

Sobre o projeto
O presente projeto se propões a cumprir os requisitos avaliativos descritos no documento disponibilizado pela instituição, que são:
desenvolvimento de servidor Node com Express;
persistência de dados com banco de dados relacional;
implementação de containers para subir a aplicação e orquestração dos mesmos;
automação através da configuração de esteira CI/CD para testes e deploy;
documentação técnica descrevendo a arquitetura do sistema, o uso da aplicaçaõ, setup inicial e experiências e desafios encontrados;
cobertura de testes de pelo menos 20% do código.
Desenvolvimento
Foi desenvolvida uma API REST e um banco de dados onde é possível realizar o CRUD (criar, ler, atualizar e deletar) das informações. A aplicação foi desenvolvida em Node.js com Express, possui middlewares e utiliza a arquitetura MVC (Model-View-Controller).
Tecnologias
Javascript
Node.js
Express
Postgress
Docker
Dependências obrigatórias
Este projeto requer o Docker para ser executado.

Como iniciar o projeto com Docker
1 - Navegue até a pasta desejada e rode o comando abaixo no terminal para clonar o projeto:

git clone git@github.com:Grupo19TechChallenge/TechChallengeFiap.git

2 - Entre na pasta:

cd TechChallengeFiap

3- Configure as variáveis de ambiente. Altere o arquivo .env.exemple de forma que ele contenha o valor das variáveis e renomeie para somente .env

5 - Instale as dependências do projeto:

npm install

3 - Rode o seguinte comando:

docker-compose up -d --build

4 - Inicie o servidor node:

npm run dev (se os três containers [pgAdmin-escola, app-escola-node e db-escola] ficarem up, este comando não será necessário)

Abra o seu client de backend (thunderClient, Insomnia, Postman) e teste a seguinte rota:

GET http://localhost:3000/api/users

Se você receber 3 usuários, seu container está acessando o banco no Docker e tudo roda bem.

Começando a desenvolver
Após subir o seu container e estiver rodando tudo corretamente, você verá no terminal a mensagem "Server is running on http://localhost:3000". Neste momento abra um novo terminal.

1 - Certifique-se que você está no diretório onde o projeto foi iniciado e rode:

git branch

Você verá os nomes das branchs já criadas no projeto. A branch que você está atualmente estará sinalizada com um '*' à frente.

Aperte a tecla 'Q' para voltar para o terminal.

2 - Rode os seguintes comandos: git checkout develop; git pull origin develop;

3 - Rode o comando de criação de uma nova branch para você trabalhar:

git checkout -b nome-da-sua-branch

Agora você pode iniciar seu trabalho.

Favor não desenvolver em outra branch que não tenha sido criada por você. Isso inclui a branch Main.
4 - Quando você finalizar o desenvolvimento da sua primeira task e se certificar de que o endpoint está funcionando corretamente através da utilização de um client como Insomnia, Postman ou ThunderClient (recomendo pessoalmente o ThunderClient, pois se trata de uma extensão do VS Code muito fácil de configurar), rode:

git add . - para adicionar todas as suas alterações no stage;
git commit -m 'mensagem explicando o que você fez nesse commit';
git push origin nome-da-sua-branch;

5 - Vá até o github através do link mostrado no terminal após rodar o ultimo comando e abra um pull request apontando a base para main e o compare para o nome da sua branch.

Arquitetura do projeto
Visão Geral

A aplicação consiste em três serviços principais:

db_postgres:
Banco de dados PostgreSQL para armazenar dados da aplicação. Arquivo SQL de inicialização (init.sql) para criar tabelas e carregar dados iniciais.

app:
Backend desenvolvido em Node.js e utiliza o framework Express.js para APIs RESTful. Dependente do banco PostgreSQL para persistência de dados.

pgAdmin:
Interface gráfica para gerenciar o banco de dados PostgreSQL.

Fluxo de Dados
O usuário faz uma requisição para a API (servidor node / serviço app), o serviço app consulta ou persiste dados no banco de dados PostgreSQL. O pgAdmin é usado para monitorar e gerenciar o banco de dados manualmente, se necessário.

Endpoints
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
busca de posts: GET http://localhost:3000/api/post/search?term=Nova

Comandos úteis
docker-compose down docker-compose up -d --build npm run dev

Configuração CI/CD com GitHub Actions
Workflow de Deploy O arquivo test_and_deploy.yml automatiza o processo de testes e deploy. Ele executa os seguintes passos:

Faz o checkout do código.

Configura o Node.js e as dependências.

Roda os testes com Jest.

Faz o deploy para o ambiente de produção usando o Render CLI, caso os testes sejam aprovados.

Configuração da esteira
Atualize os secrets no GitHub para corresponder aos valores necessários no seu ambiente.

Altere o nome do serviço ou branch no comando de deploy, se necessário.

Relatos e Experiência
O desenvolvimento desta fase do tech challenge foi muito interessante e enriquecedora pois pudemos nos aprofundar no conhecimento do desenvolvimento de uma api restfull. Nosso principal desafio foi a realização do deploy na ferramenta apresentada nas aulas do curso (render), mais específicamente a configuração do banco de dados no deploy para que conseguíssemos de fato utilizar o servidor de produção.

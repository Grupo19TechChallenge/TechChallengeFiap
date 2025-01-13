CREATE TABLE IF NOT EXISTS disciplina(
    id_disciplina SERIAL PRIMARY KEY,
    nome_disciplina VARCHAR(30) NOT NULL  
);

CREATE TABLE IF NOT EXISTS subdisciplina(
    id_subdisciplina SERIAL PRIMARY KEY,
    nome_subdisciplina VARCHAR(100) NOT NULL  
);

CREATE TABLE IF NOT EXISTS professor(
    id_professor SERIAL PRIMARY KEY,
    nome_professor VARCHAR(100) NOT NULL,
    id_disciplina INT NOT NULL,
    id_subdisciplina INT,
    FOREIGN KEY (id_disciplina) REFERENCES disciplina(id_disciplina),
    FOREIGN KEY (id_subdisciplina) REFERENCES subdisciplina(id_subdisciplina)
);

CREATE TABLE IF NOT EXISTS turma (
    id_turma SERIAL PRIMARY KEY, 
    nome_turma VARCHAR(6) NOT NULL,
    serie_turma VARCHAR(1)
);

CREATE TABLE IF NOT EXISTS aluno (
    id_aluno SERIAL PRIMARY KEY, 
    nome_aluno VARCHAR(100) NOT NULL,
    id_turma INT NOT NULL,
    FOREIGN KEY (id_turma) REFERENCES turma(id_turma)
);

CREATE TABLE IF NOT EXISTS administração(
    id_adm SERIAL PRIMARY KEY,
    nome_adm VARCHAR(100) NOT NULL,
    cod_funcional VARCHAR(10) NOT NULL
);

CREATE TABLE IF NOT EXISTS postagem(
    id_postagem SERIAL PRIMARY KEY, 
    titulo VARCHAR(200) NOT NULL,
    subtitulo VARCHAR(200),
    conteudo TEXT NOT NULL,
    id_professor INT NOT NULL,
    id_disciplina INT NOT NULL,
    id_subdisciplina INT,
    FOREIGN KEY (id_professor) REFERENCES professor(id_professor),
    FOREIGN KEY (id_disciplina) REFERENCES disciplina(id_disciplina),
    FOREIGN KEY (id_subdisciplina) REFERENCES subdisciplina(id_subdisciplina)
);

-- Inserção de dados
INSERT INTO disciplina(id_disciplina, nome_disciplina)
VALUES
    (1, 'portugues');

INSERT INTO subdisciplina(id_subdisciplina, nome_subdisciplina)
VALUES
    (1, 'literatura');

INSERT INTO professor(id_professor, nome_professor, id_disciplina, id_subdisciplina)
VALUES
    (1, 'Marcia', 1, 1);

INSERT INTO turma (nome_turma, serie_turma)
VALUES
    ('A', '6'),
    ('B', '7'),
    ('C', '8'),
    ('D', '9');

INSERT INTO aluno (nome_aluno, id_turma)
VALUES
    ('Adriana Calcanhoto', 1),
    ('Bruno Mars', 1),
    ('Coralie Barbier', 1);

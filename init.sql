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
)
	

CREATE TABLE IF NOT EXISTS administração(
	id_adm SERIAL PRIMARY KEY,
	nome_adm VARCHAR(100)NOT NULL,
	cod_funcional VARCHAR(10) NOT NULL
);

CREATE TABLE IF NOT EXISTS disciplina(
	id_disciplina SERIAL PRIMARY KEY,
	nome_disciplina VARCHAR(30)NOT NULL	
);

CREATE TABLE IF NOT EXISTS subdisciplina(
	id_subdisciplina SERIAL PRIMARY KEY,
	nome_subdisciplina VARCHAR(100) NOT NULL	
);

CREATE TABLE IF NOT EXISTS professor(
	id_professor SERIAL PRIMARY KEY,
	nome_professor VARCHAR(100) NOT NULL,
	id_disciplina SERIAL NOT NULL,
	id_subdisciplina SERIAL,
	FOREIGN KEY (id_disciplina) REFERENCES disciplina(id_disciplina),
	FOREIGN KEY (id_subdisciplina) REFERENCES subdisciplina(id_subdisciplina)
);

CREATE TABLE IF NOT EXISTS postagem(
	id_postagem SERIAL PRIMARY KEY, 
	titulo VARCHAR(200) NOT NULL,
	subtitulo varchar(200),
	conteudo TEXT NOT NULL,
	id_professor SERIAL NOT NULL,
	id_disciplina SERIAL NOT NULL,
	id_subdisciplina SERIAL,
	FOREIGN KEY (id_professor) REFERENCES  professor (id_professor),
	FOREIGN KEY (id_disciplina) REFERENCES disciplina  (id_disciplina),
	FOREIGN KEY (id_subdisciplina) REFERENCES subdisciplina (id_subdisciplina)	
)

INSERT INTO turma (id_turma, nome_turma, serie_turma)
VALUES
    ('1', 'A', '6'),
    ('2', 'B', '7'),
    ('3', 'C', '8'),
    ('4', 'D', '9');

INSERT INTO aluno (id_aluno, nome_aluno, id_turma)
VALUES
    ('1', 'Adriana Calcanhoto', '1'),
    ('2', 'Bruno Mars', '1'),
    ('3', 'Coralie Barbier', '1');
-- ON CONFLICT (email) DO NOTHING;





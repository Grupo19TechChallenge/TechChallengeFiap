CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL
);

INSERT INTO users (name, email)
VALUES
    ('Thiago S Adriano', 'tadriano@fiap.com.br'),
    ('John Doe', 'johndoe@example.com'),
    ('Jane Doe', 'janedoe@example.com')
ON CONFLICT (email) DO NOTHING;

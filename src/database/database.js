// const { Pool } = require('pg');
import pkg from 'pg';
const { Pool } = pkg; 


const pool = new Pool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASSWORD || '1234',  
    database: process.env.DB_NAME || 'app-escola', 
    port: 5432,
    max: 10,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
});

const db = async (queryText, params) => {
    // try {
    //     const res = await pool.query(queryText, params);
    //     return res.rows;
    // } catch (err) {
    //     console.log('Erro ao consultar o banco de dados', err);
    //     throw err;
    // }
    let retries = 5;
    while (retries) {
        try {
            const res = await pool.query(queryText, params);
            return res.rows;
        } catch (err) {
            retries -= 1;
            console.log('Database connection failed, retrying...', retries);
            if (!retries) throw err;
            await new Promise((res) => setTimeout(res, 5000));
        }
    }
};

export default db;
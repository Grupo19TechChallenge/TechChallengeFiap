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

export const query = async (text, params) => {
    const client = await pool.connect();
    try {
      const res = await client.query(text, params);
      return res.rows;
    } catch (error) {
      console.error('Erro ao executar query:', error);
      throw error;
    } finally {
      client.release();
    }
  };


export default pool;